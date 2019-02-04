var MultiColumnEditor = {

    init: function() {
        var script = document.createElement('script');
        script.onload = function () {
            MultiColumnEditor.registerEvents();
        };
        script.src = 'bundles/heimrichhannotcontaomulticolumneditor/js/Sortable.min.js';
        document.head.appendChild(script);
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

        var sortables = document.querySelectorAll('.multi-column-editor-wrapper .sortable');

        for (var i = 0, len = sortables.length; i < len; i++) {
            var sortable = Sortable.create(sortables[i], {
                'handle' : '.drag-handle',
                onEnd: function(event) {
                    var newIndices = [],
                        doPost = false,
                        rows = event.item.closest('.rows').querySelectorAll('.mce-row');

                    for (var i = 0; i < rows.length; i++) {
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
                        MultiColumnEditor.triggerAction(event.item.querySelector('.drag-handle'), 'sortRows', additionalData);
                    }
                },
            });
        }
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

        var row = link.closest('.mce-row');

        formData.set('row', typeof row !== 'undefined' && row !== null ? row.dataset.index : 0);
        formData.set('field', editor.dataset.field);
        formData.set('table', editor.dataset.table);

        if (typeof additionalFormData !== 'undefined') {
            for (var i = 0, len = additionalFormData.length; i < len; i++) {
                var input = additionalFormData[i];

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

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                var e = document.createEvent('CustomEvent');
                e.initEvent('ajaxSuccess', true, true);
                document.dispatchEvent(e);

                if(xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);

                    var response = document.createElement('div');
                    response.innerHTML = data.result.html;

                    link.closest('.multi-column-editor-wrapper').replaceWith(response.childNodes[0]);
                    MultiColumnEditor.registerEvents();

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
