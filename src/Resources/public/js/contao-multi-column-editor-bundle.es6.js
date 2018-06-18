require('sortablejs');

let MultiColumnEditorBundle = {

    init: function() {
        this.registerEvents();
    },
    registerEvents: function() {
        let addLinks = document.querySelectorAll('.multi-column-editor .add');
        let deleteLinks = document.querySelectorAll('.multi-column-editor .delete');

        for (let i = 0; i < addLinks.length; i++) {
            addLinks[i].addEventListener('click', function(event) {
                event.preventDefault();
                MultiColumnEditorBundle.triggerAction(this, 'addRow');
            });
        }

        for (let i = 0; i < deleteLinks.length; i++) {
            deleteLinks[i].addEventListener('click', function(event) {
                event.preventDefault();
                MultiColumnEditorBundle.triggerAction(this, 'deleteRow');
            });
        }

        let sortables = document.querySelectorAll('.multi-column-editor-wrapper .sortable');

        for (let i = 0, len = sortables.length; i < len; i++) {
            let sortable = Sortable.create(sortables[i], {
                'handle' : '.drag-handle',
                onEnd: function(event) {
                    let newIndices = [],
                        doPost = false,
                        rows = event.item.closest('.rows').querySelectorAll('.mce-row');

                    for (let i = 0; i < rows.length; i++) {
                        newIndices.push(rows[i].dataset.index);

                        if (rows[i].dataset.index !== $(this).index() + 1) {
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
                        MultiColumnEditorBundle.triggerAction(event.item.querySelector('.drag-handle'), 'sortRows', additionalData);
                    }
                },
            });
        }
    },
    triggerAction: function(link, action, additionalFormData, callbac) {

        let form = link.closest('form'),
            formData = new FormData(),
            editor = link.closest('.multi-column-editor'),
            url = link.href;

        let inputs = form.querySelectorAll('input[name]:not([disabled]), textarea[name]:not([disabled]), select[name]:not([disabled]), button[name]:not([disabled])');

        for (let i = 0, len = inputs.length; i < len; i++) {
            let input = inputs[i];

            // remove FORM_SUBMIT -> no submit callbacks should be fired
            if (input.name !== 'FORM_SUBMIT') {
                switch (input.type)
                {
                    case 'checkbox':
                    case 'radio':
                        formData.append(input.name, input.checked ? input.value : '');
                        break;
                    default:
                        formData.append(input.name, input.value);
                }
            }
        }

        let row = link.closest('.mce-row');

        formData.set('row', typeof row !== 'undefined' && row !== null ? row.dataset.index : 0);
        formData.set('field', editor.dataset.field);
        formData.set('table', editor.dataset.table);

        if (typeof additionalFormData !== 'undefined') {
            for (let i = 0, len = additionalFormData.length; i < len; i++) {
                let input = additionalFormData[i];

                // remove FORM_SUBMIT -> no submit callbacks should be fired
                if (input.name !== 'FORM_SUBMIT') {
                    switch (input.type)
                    {
                        case 'checkbox':
                        case 'radio':
                            formData.append(input.name, input.checked ? input.value : '');
                            break;
                        default:
                            formData.append(input.name, input.value);
                    }
                }
            }
        }

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                let e = document.createEvent('CustomEvent');
                e.initEvent('ajaxSuccess', true, true);
                document.dispatchEvent(e);

                if(xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);

                    let response = document.createElement('div');
                    response.innerHTML = data.result.html;

                    link.closest('.multi-column-editor-wrapper').replaceWith(response.childNodes[0]);
                    MultiColumnEditorBundle.registerEvents();

                    if (typeof callback === 'function') {
                        callback.apply(this, Array.prototype.slice.call(arguments, 1));
                    }

                    let e = document.createEvent('CustomEvent');
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
            let element = this;
            let elements = (element.document || element.ownerDocument).querySelectorAll(selector);
            let index = 0;

            while (elements[index] && elements[index] !== element) {
                ++index;
            }

            return Boolean(elements[index]);
        };
    }

    if (typeof ElementProto.closest !== 'function') {
        ElementProto.closest = function closest(selector) {
            let element = this;

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
    MultiColumnEditorBundle.init();
});

module.exports = MultiColumnEditorBundle;