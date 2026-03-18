import 'formdata-polyfill'; // ie and edge
import {EventUtil} from '@hundh/contao-utils-bundle';

class MultiColumnEditorBundle {
    static sortableAttribute = 'data-mce-sortable-initialized';
    static eventsBound = false;

    static init(context = document) {
        MultiColumnEditorBundle.bindGlobalEventsOnce();
        MultiColumnEditorBundle.initSortable(context);
    }

    static bindGlobalEventsOnce() {
        if (MultiColumnEditorBundle.eventsBound) {
            return;
        }

        EventUtil.addDynamicEventListener('click', '.multi-column-editor .add', function(item, event) {
            event.preventDefault();

            MultiColumnEditorBundle.triggerAction(MultiColumnEditorBundle.isBackend(item), item, 'addRow', item.href);
        });

        EventUtil.addDynamicEventListener('click', '.multi-column-editor .delete', function(item, event) {
            event.preventDefault();
            MultiColumnEditorBundle.triggerAction(MultiColumnEditorBundle.isBackend(item), item, 'deleteRow', item.href);
        });

        // fix for firefox and IE
        EventUtil.addDynamicEventListener('click', '.multi-column-editor .drag-handle', function(item, event) {
            event.preventDefault();
        });

        EventUtil.addDynamicEventListener('click', '[data-mce-click]', function(item) {
            MultiColumnEditorBundle.triggerAction(MultiColumnEditorBundle.isBackend(item), item, 'updateRows', item.getAttribute('data-mce-click'));
        });

        EventUtil.addDynamicEventListener('change', '[data-mce-change]', function(item) {
            MultiColumnEditorBundle.triggerAction(MultiColumnEditorBundle.isBackend(item), item, 'updateRows', item.getAttribute('data-mce-change'));
        });

        MultiColumnEditorBundle.eventsBound = true;
    }

    static initSortable(context = document) {
        const scope = MultiColumnEditorBundle.getScope(context);
        const sortables = MultiColumnEditorBundle.getSortables(scope);

        if (sortables.length < 1) {
            return;
        }

        sortables.forEach((sortable) => {
            if (sortable.hasAttribute(MultiColumnEditorBundle.sortableAttribute)) {
                return;
            }

            if (MultiColumnEditorBundle.isBackend(sortable)) {
                MultiColumnEditorBundle.initBackendSortable(sortable);
            } else {
                MultiColumnEditorBundle.initFrontendSortable(sortable);
            }

            sortable.setAttribute(MultiColumnEditorBundle.sortableAttribute, 'true');
        });
    }

    static initBackendSortable(sortable) {
        sortable.mceSortable = new Sortables(sortable, {
            constrain: true,
            opacity: 0.6,
            handle: '.drag-handle',
            onComplete: function(row) {
                const rows = Array.from(row.closest('.rows').querySelectorAll('.mce-row'));
                const newIndices = rows.map((item) => item.dataset.index);

                if (!MultiColumnEditorBundle.hasRowOrderChanged(rows)) {
                    return;
                }

                MultiColumnEditorBundle.triggerAction(true, row.querySelector('.drag-handle'), 'sortRows', null, [
                    {
                        name: 'newIndices',
                        value: newIndices.join(','),
                    },
                ]);
            },
        });
    }

    static initFrontendSortable(sortable) {
        import(/* webpackChunkName: "sortablejs" */ 'sortablejs').then(function(Sortable) {
            sortable.mceSortable = Sortable.create(sortable, {
                handle: '.drag-handle',
                onEnd: function(event) {
                    const rows = Array.from(event.item.closest('.rows').querySelectorAll('.mce-row'));
                    const newIndices = rows.map((item) => item.dataset.index);

                    if (!MultiColumnEditorBundle.hasRowOrderChanged(rows)) {
                        return;
                    }

                    MultiColumnEditorBundle.triggerAction(false, event.item.querySelector('.drag-handle'), 'sortRows', null, [
                        {
                            name: 'newIndices',
                            value: newIndices.join(','),
                        },
                    ]);
                },
            });
        });
    }

    static beforeCache(context = document) {
        MultiColumnEditorBundle.getSortables(MultiColumnEditorBundle.getScope(context)).forEach((sortable) => {
            const instance = sortable.mceSortable;

            if (instance && typeof instance.detach === 'function') {
                instance.detach();
            }

            if (instance && typeof instance.destroy === 'function') {
                instance.destroy();
            }

            delete sortable.mceSortable;
            sortable.removeAttribute(MultiColumnEditorBundle.sortableAttribute);
        });
    }

    static getScope(context = document) {
        if (context && typeof context.querySelectorAll === 'function') {
            return context;
        }

        return document;
    }

    static getSortables(context = document) {
        const scope = MultiColumnEditorBundle.getScope(context);
        const sortables = Array.from(scope.querySelectorAll('.multi-column-editor-wrapper .sortable'));

        if (typeof scope.matches === 'function' && scope.matches('.multi-column-editor-wrapper .sortable')) {
            sortables.unshift(scope);
        }

        return sortables;
    }

    static isBackend(element) {
        const editor = element.closest('.multi-column-editor');

        return editor ? editor.dataset.env === 'backend' : false;
    }

    static hasRowOrderChanged(rows) {
        if (rows.length < 1) {
            return false;
        }

        const firstIndex = Number.parseInt(rows[0].dataset.index, 10);

        if (Number.isNaN(firstIndex)) {
            return true;
        }

        return rows.some((row, index) => row.dataset.index !== String(firstIndex + index));
    }

    static triggerAction(isBackend, link, action, url, additionalFormData, callback) {
        let form = link.closest('form');
        let formData = new FormData();
        let editor = link.closest('.multi-column-editor');

        if (null === url) {
            url = form.action;
        }

        // set the tinymces' values because later on they get resetted
        editor.querySelectorAll('.mce-tinymce + textarea').forEach((element) => {
            if (typeof window.tinymce !== 'undefined') {
                element.value = tinymce.get(element.getAttribute('id')).getContent();
            }
        });

        form.querySelectorAll(
            'input[name]:not([disabled]), textarea[name]:not([disabled]), select[name]:not([disabled]), button[name]:not([disabled])',
        ).forEach(function(input) {
            // remove FORM_SUBMIT -> no submit callbacks should be fired
            if (input.name !== 'FORM_SUBMIT') {
                switch (input.type) {
                    case 'checkbox':
                    case 'radio':
                        formData.append(input.name, input.checked ? input.value : '');
                        break;
                    default:
                        formData.append(input.name, input.value);
                }
            }
        });

        let row = link.closest('.mce-row');

        formData.set('row', typeof row !== 'undefined' && row !== null ? row.dataset.index : 0);
        formData.set('field', editor.dataset.field);
        formData.set('table', editor.dataset.table);
        formData.set('action', action);

        if (typeof additionalFormData !== 'undefined') {
            additionalFormData.forEach(function(input) {
                // remove FORM_SUBMIT -> no submit callbacks should be fired
                if (input.name !== 'FORM_SUBMIT') {
                    switch (input.type) {
                        case 'checkbox':
                        case 'radio':
                            formData.append(input.name, input.checked ? input.value : '');
                            break;
                        default:
                            formData.append(input.name, input.value);
                    }
                }
            });
        }

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                // dispatch custom event
                let customEvent = new CustomEvent('ajaxSuccess', {
                    bubbles: true,
                    cancelable: true
                });

                document.dispatchEvent(customEvent);

                if (xhr.status === 200) {
                    // unload the tinymce's -> else the ones added via ajax wouldn't be initiated because tinymce thinks they
                    // are already (ID seems to be stored!)
                    editor.querySelectorAll('.mce-tinymce + textarea').forEach((element) => {
                        if (typeof window.tinymce !== 'undefined') {
                            tinymce.get(element.getAttribute('id')).remove();
                        }
                    });

                    if (isBackend) {
                        var response = document.createElement('div');
                        response.innerHTML = xhr.responseText;

                        var scriptElements = response.getElementsByTagName('script'),
                            scriptHtml = [];

                        let widget = link.closest('.widget');

                        // store the texts because after replacing the dom elements are gone
                        for (var m = 0; m < scriptElements.length; m++) {
                            scriptHtml.push(scriptElements[m].innerHTML);
                        }

                        link.closest('.multi-column-editor-wrapper').innerHTML = response.querySelector('.multi-column-editor-wrapper').innerHTML;

                        MultiColumnEditorBundle.initChosen(widget);
                        MultiColumnEditorBundle.init(link.closest('.multi-column-editor-wrapper'));

                        MultiColumnEditorBundle.hideInteractiveHelp();

                        if (typeof Backend.addInteractiveHelp === 'function') {
                            Backend.addInteractiveHelp();
                        }

                        for (var n = 0; n < scriptHtml.length; n++) {
                            eval(scriptHtml[n]);
                        }

                        if (typeof callback === 'function') {
                            callback.apply(this, Array.prototype.slice.call(arguments, 1));
                        }

                        let e = new CustomEvent('ajaxComplete', {
                            bubbles: true,
                            cancelable: true
                        });

                        document.dispatchEvent(e);
                    } else {
                        let data = JSON.parse(xhr.responseText);

                        let response = document.createElement('div');
                        response.innerHTML = data.result.html;

                        link.closest('.multi-column-editor-wrapper').innerHTML = response.querySelector('.multi-column-editor-wrapper').innerHTML;

                        MultiColumnEditorBundle.init(link.closest('.multi-column-editor-wrapper'));

                        if (typeof callback === 'function') {
                            callback.apply(this, Array.prototype.slice.call(arguments, 1));
                        }

                        let customEvent = new CustomEvent('ajaxComplete', {
                            bubbles: true,
                            cancelable: true
                        });
                        document.dispatchEvent(customEvent);
                    }
                }
            }
        };

        xhr.open('POST', url);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(formData);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    MultiColumnEditorBundle.init();
});

document.documentElement.addEventListener('turbo:render', function() {
    MultiColumnEditorBundle.init();
});

document.documentElement.addEventListener('turbo:frame-render', function(event) {
    MultiColumnEditorBundle.init(event.target);
});

document.documentElement.addEventListener('turbo:before-cache', function() {
    MultiColumnEditorBundle.beforeCache();
});

// backend only
(function() {
    if (typeof window.addEvent === 'function') {
        window.addEvent('domready', function() {
            MultiColumnEditorBundle.initChosen = function(widget) {
                widget.querySelectorAll('select.tl_chosen').forEach((el) => {
                    $$('#' + el.getAttribute('id')).chosen();
                });
            };
            MultiColumnEditorBundle.hideInteractiveHelp = function() {
                var hideTips = function() {
                    document.querySelectorAll('.tip-wrap').forEach(function(tip) {
                        tip.setStyle('display', 'none');
                    });
                };
                hideTips();
                // hide delayed tips - timeout: Tips.Contao.options.showDelay
                setTimeout(hideTips, 1000);
            };
        });

        window.addEvent('ajax_change', function() {
            MultiColumnEditorBundle.init();
        });
    }
})();
