var MultiColumnEditor = {

    init: function() {
        this.registerEvents();
    },
    registerEvents: function() {
        var addLinks = document.querySelectorAll('.multi-column-editor .add');
        var deleteLinks = document.querySelectorAll('.multi-column-editor .delete');

        for (var i = 0; i < addLinks.length; i++) {
            addLinks[i].addEventListener('click', function(event) {
                event.preventDefault();
                MultiColumnEditor.triggerAction(this, 'addRow');
            });
        }

        for (var i = 0; i < deleteLinks.length; i++) {
            deleteLinks[i].addEventListener('click', function(event) {
                event.preventDefault();
                MultiColumnEditor.triggerAction(this, 'deleteRow');
            });
        }

        function makeSortable(selector) {
            new Sortables(selector, {
                constrain: true,
                opacity: 0.6,
                handle: '.drag-handle',
                onComplete: function(row) {
                    var newIndices = [],
                        doPost = false,
                        rows = row.closest('.rows').querySelectorAll('.mce-row');

                    for (var i = 0; i < rows.length; i++) {
                        newIndices.push(rows[i].dataset.index);

                        if (rows[i].dataset.index !== [].slice.call(rows).indexOf(this) + 1) {
                            doPost = true;
                        }
                    }

                    additionalData = [
                        {
                            'name': 'newIndices',
                            'value': newIndices.join(',')
                        }
                    ];

                    if (doPost) {
                        MultiColumnEditor.triggerAction(row.querySelector('.drag-handle'), 'sortRows', additionalData);
                    }
                }
            });
        }

        makeSortable('.multi-column-editor-wrapper .sortable');
    },
    triggerAction: function(link, action, additionalFormData, callbac) {

        var form = link.closest('form'),
            formData = new FormData(),
            editor = link.closest('.multi-column-editor'),
            url = link.href;

        var inputs = form.querySelectorAll('input[name]:not([disabled]), textarea[name]:not([disabled]), select[name]:not([disabled]), button[name]:not([disabled])');

        for (var i = 0, len = inputs.length; i < len; i++) {
            var input = inputs[i];

            // remove FORM_SUBMIT -> no submit callbacks should be fired
            if (input.name !== 'FORM_SUBMIT') {
                formData.append(input.name, input.value);
            }
        }

        var row = link.closest('.mce-row');

        formData.set('row', typeof row !== 'undefined' && row !== null ? row.dataset.index : 0);
        formData.set('field', editor.dataset.field);
        formData.set('table', editor.dataset.table);
        formData.set('action', action);

        if (typeof additionalFormData !== 'undefined') {
            for (var i = 0, len = additionalFormData.length; i < len; i++) {
                var input = additionalFormData[i];

                // remove FORM_SUBMIT -> no submit callbacks should be fired
                if (input.name !== 'FORM_SUBMIT') {
                    formData.append(input.name, input.value);
                }
            }
        }

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                var e = document.createEvent('CustomEvent');
                e.initEvent('ajaxSuccess', true, true);
                document.dispatchEvent(e);

                if(xhr.status === 200) {
                    var response = document.createElement('div');
                    response.innerHTML = xhr.responseText;

                    link.closest('.multi-column-editor-wrapper').replaceWith(response.childNodes[0]);
                    MultiColumnEditor.registerEvents();
                    MultiColumnEditor.initChosen();

                    if (typeof callback === 'function') {
                        callback.apply(this, Array.prototype.slice.call(arguments, 1));
                    }

                    var e = document.createEvent('CustomEvent');
                    e.initEvent('ajaxComplete', true, true);
                    document.dispatchEvent(e);
                }
            }
        };

        xhr.open('POST', url);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(formData);
    }
};

(function(ElementProto) {
    if (typeof ElementProto.matches !== 'function') {
        ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
            var element = this;
            var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
            var index = 0;

            while (elements[index] && elements[index] !== element) {
                ++index;
            }

            return Boolean(elements[index]);
        };
    }

    if (typeof ElementProto.closest !== 'function') {
        ElementProto.closest = function closest(selector) {
            var element = this;

            while (element && element.nodeType === 1) {
                if (element.matches(selector)) {
                    return element;
                }

                element = element.parentNode;
            }

            return null;
        };
    }
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function(event) {
    MultiColumnEditor.init();
});

// backend only
(function() {
    if (typeof window.addEvent === 'function') {
        window.addEvent('domready', function() {
            MultiColumnEditor.initChosen = function() {
                $$('.multi-column-editor select.tl_chosen').each(function(el) {
                    if (typeof el.initialized === 'undefined') {
                        el.initialized = $$('#' + el.getAttribute('id')).chosen();
                    }
                });
            };
        });
    }
})();