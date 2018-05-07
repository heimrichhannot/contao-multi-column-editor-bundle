(function($) {
    MultiColumnEditor = {

        init: function() {
            this.initActions();
        },
        initActions: function() {
            var $wrapper = $('.multi-column-editor-wrapper');

            if ($wrapper.length < 1) {
                return;
            }

            function doAction($link, action, additionalFormData, callback) {
                var formData = $link.closest('form').serializeArray(),
                    formDataNew = [],
                    isFrontend = $link.closest('.multi-column-editor-wrapper').find('.multi-column-editor').hasClass('fe'),
                    url = $link.attr('href');

                // remove FORM_SUBMIT -> no submit callbacks should be fired
                $.each(formData, function(index, item) {
                    if (item.name != 'FORM_SUBMIT') {
                        formDataNew.push(item);
                    }
                });

                formData = formDataNew;

                $.merge(formData, [
                    {
                        'name': 'row',
                        'value': $link.closest('.mce-row').data('index'),
                    },
                    {
                        'name': 'field',
                        'value': $link.closest('.multi-column-editor').data('field'),
                    },
                    {
                        'name': 'table',
                        'value': $link.closest('.multi-column-editor').data('table'),
                    },
                ]);

                if (typeof additionalFormData !== 'undefined') {
                    $.merge(formData, additionalFormData);
                }

                if (!isFrontend) {
                    $.merge(formData, [
                        {
                            'name': 'action',
                            'value': action,
                        },
                    ]);
                }

                $.post(
                    url,
                    formData,
                    function(response) {
                        if (isFrontend) {
                            $link.closest('.multi-column-editor-wrapper').html(response.result.html);
                        }
                        else {
                            $link.closest('.multi-column-editor-wrapper').html(response);
                            MultiColumnEditor.initChosen();

                            HASTE_PLUS.call(callback);

                            if ($('body[class*="version_4"]').length < 1) {
                                if (Stylect !== 'undefined') {
                                    Stylect.convertSelects();
                                }
                            }
                        }
                    }
                );
            }

            $('body').on('click', '.multi-column-editor .add', function(e) {
                var $link = $(this);

                e.preventDefault();

                doAction($link, 'addRow');
            }).on('click', '.multi-column-editor .delete', function(e) {
                var $link = $(this);

                e.preventDefault();

                doAction($link, 'deleteRow');
            });
        },
    };

    $(document).ready(function() {
        MultiColumnEditor.init();
    });

})(jQuery);

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