<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Widget;

use Contao\BackendTemplate;
use HeimrichHannot\Ajax\Ajax;
use HeimrichHannot\Ajax\AjaxAction;
use HeimrichHannot\Haste\Util\Container;
use HeimrichHannot\Haste\Util\Widget;
use HeimrichHannot\Request\Request;

class MultiColumnEditor extends \Contao\Widget
{
    const ACTION_ADD_ROW = 'addRow';
    const ACTION_DELETE_ROW = 'deleteRow';
    const ACTION_SORT_ROWS = 'sortRows';

    const NAME = 'multicolumneditor';

    protected $blnSubmitInput = true;
    protected $blnForAttribute = true;
    protected $strTemplate = 'be_multi_column_editor';
    protected $strEditorTemplate = 'multi_column_editor';
    protected $arrDca;
    protected $arrWidgetErrors = [];

    public function __construct($arrData)
    {
        \Controller::loadDataContainer($arrData['strTable']);
        $this->arrDca = $GLOBALS['TL_DCA'][$arrData['strTable']]['fields'][$arrData['strField']]['eval']['multiColumnEditor'];

        parent::__construct($arrData);

        if (Container::isFrontend()) {
            Ajax::runActiveAction(static::NAME, static::ACTION_ADD_ROW, new MceAjax($this->objDca));
            Ajax::runActiveAction(static::NAME, static::ACTION_DELETE_ROW, new MceAjax($this->objDca));
        }
    }

    /**
     * Generate the widget and return it as string.
     *
     * @return string
     */
    public function generate()
    {
        if (Container::isBackend()) {
            $strTable = $this->objDca->table;
            $strFieldName = $this->objDca->field;
            $varValue = $this->objDca->value;
        } else {
            $strTable = $this->strTable;
            $strFieldName = $this->strName;
            $varValue = $this->varValue;
        }

        return '<div class="multi-column-editor-wrapper">'.static::generateEditorForm(
                $this->strEditorTemplate,
                $strTable,
                $strFieldName,
                $varValue,
                $this->objDca,
                $this->arrDca,
                $this->arrWidgetErrors
            ).'</div>';
    }

    public static function generateEditorForm(
        $strEditorTemplate,
        $strTable,
        $strFieldName,
        $varValue,
        $objDc,
        $arrDca = null,
        $arrErrors = [],
        $strAction = null
    ) {
        if (null === $arrDca) {
            $arrDca = $GLOBALS['TL_DCA'][$strTable]['fields'][$strFieldName]['eval']['multiColumnEditor'];
        }

        $objTemplate = new \BackendTemplate($strEditorTemplate);
        $objTemplate->fieldName = $strFieldName;
        $objTemplate->table = $strTable;
        $objTemplate->class = $arrDca['class'];
        $objTemplate->sortable = $arrDca['sortable'];
        $intMinRowCount = isset($arrDca['minRowCount']) ? $arrDca['minRowCount'] : 1;
        $intMaxRowCount = isset($arrDca['maxRowCount']) ? $arrDca['maxRowCount'] : 0;
        $blnSkipCopyValuesOnAdd = isset($arrDca['skipCopyValuesOnAdd']) ? $arrDca['skipCopyValuesOnAdd'] : false;
        $objTemplate->minRowCount = $intMinRowCount;
        $objTemplate->maxRowCount = $intMaxRowCount;

        // actions
        $objTemplate->ajaxAddUrl =
            Container::isBackend() ? \Environment::get('request') : AjaxAction::generateUrl(static::NAME, static::ACTION_ADD_ROW);
        $objTemplate->ajaxDeleteUrl =
            Container::isBackend() ? \Environment::get('request') : AjaxAction::generateUrl(static::NAME, static::ACTION_DELETE_ROW);
        $objTemplate->ajaxSortUrl =
            Container::isBackend() ? \Environment::get('request') : AjaxAction::generateUrl(static::NAME, static::ACTION_SORT_ROWS);

        $intRowCount = Request::getPost($strFieldName.'_rowCount') ?: $intMinRowCount;
        $strAction = $strAction ?: Request::getPost('action');

        if ($varValue) {
            // restore from entity
            $arrValues = static::prefixValuesWithFieldName(deserialize($varValue, true), $strFieldName);
        } elseif (is_array($_POST)) {
            // restore from post
            $arrValues = static::prefixValuesWithFieldName(static::restoreValueFromPost($_POST, $strFieldName, $arrDca), $strFieldName);
        } else {
            $arrValues = [];
        }

        // handle ajax requests
        if (Container::isBackend() && \Environment::get('isAjaxRequest')) {
            switch ($strAction) {
                case static::ACTION_ADD_ROW:
                    $arrValues = static::addRow($arrValues, $arrDca, $intRowCount, $intMaxRowCount, $strFieldName, $blnSkipCopyValuesOnAdd);
                    break;

                case static::ACTION_DELETE_ROW:
                    $arrValues = static::deleteRow($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName);
                    break;

                case static::ACTION_SORT_ROWS:
                    $arrValues = static::sortRows($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName);
                    break;
            }
        } elseif (Ajax::isRelated(static::NAME)) {
            switch ($strAction) {
                case static::ACTION_ADD_ROW:
                    $arrValues = static::addRow($arrValues, $arrDca, $intRowCount, $intMaxRowCount, $strFieldName, $blnSkipCopyValuesOnAdd);
                    break;

                case static::ACTION_DELETE_ROW:
                    $arrValues = static::deleteRow($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName);
                    break;
            }
        }

        // add row count field
        $intCount = count($arrValues);

        if ($intMinRowCount && $intCount < $intMinRowCount || $intCount < 0) {
            $intCount = $intMinRowCount;
        }

        if ($intMaxRowCount && $intCount > $intMaxRowCount) {
            $intCount = $intMaxRowCount;
        }

        $objWidget = Widget::getFrontendFormField(
            $strFieldName.'_rowCount',
            [
                'inputType' => 'hidden',
            ],
            $intCount
        );

        $objTemplate->rowCount = $objWidget;

        // add rows
        $objTemplate->editorFormAction = \Environment::get('request');
        $objTemplate->rows = static::generateRows($intRowCount, $arrDca, $strTable, $objDc, $arrValues, $arrErrors, $strFieldName);

        return $objTemplate->parse();
    }

    public static function addRow($arrValues, $arrDca, $intRowCount, $intMaxRowCount, $strFieldName, $blnSkipCopyValuesOnAdd = false)
    {
        if (!($intIndex = Request::getPost('row'))) {
            $arrRow = [];

            foreach (array_keys($arrDca['fields']) as $strField) {
                $arrRow[$strFieldName.'_'.$strField] = null;
            }

            $arrValues[] = $arrRow;

            return $arrValues;
        }

        $arrValues = [];

        for ($i = 1; $i <= $intRowCount; ++$i) {
            $arrRow = [];

            foreach (array_keys($arrDca['fields']) as $strField) {
                $arrRow[$strFieldName.'_'.$strField] = Request::getPost($strFieldName.'_'.$strField.'_'.$i);
            }

            $arrValues[] = $arrRow;

            if ($i === $intIndex && (0 === $intMaxRowCount || ($intRowCount + 1 <= $intMaxRowCount))) {
                if ($blnSkipCopyValuesOnAdd) {
                    foreach ($arrRow as $strField => &$varValue) {
                        $varValue = '';
                    }
                }

                $arrValues[] = $arrRow;
            }
        }

        return $arrValues;
    }

    public static function deleteRow($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName)
    {
        if (!($intIndex = Request::getPost('row'))) {
            return $arrValues;
        }

        $arrValues = [];

        for ($i = 1; $i <= $intRowCount; ++$i) {
            if ($i === $intIndex && $intRowCount - 1 >= $intMinRowCount) {
                continue;
            }

            $arrRow = [];

            foreach (array_keys($arrDca['fields']) as $strField) {
                $arrRow[$strFieldName.'_'.$strField] = Request::getPost($strFieldName.'_'.$strField.'_'.$i);
            }

            $arrValues[] = $arrRow;
        }

        return $arrValues;
    }

    public static function sortRows($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName)
    {
        if (Request::getPost('action') !== static::ACTION_SORT_ROWS || !($varNewIndices = Request::getPost('newIndices'))) {
            return $arrValues;
        }

        $arrNewIndices = explode(',', $varNewIndices);

        if (empty($arrNewIndices)) {
            return $arrValues;
        }

        $arrValues = [];

        foreach ($arrNewIndices as $intIndex) {
            $arrRow = [];

            foreach (array_keys($arrDca['fields']) as $strField) {
                $arrRow[$strFieldName.'_'.$strField] = Request::getPost($strFieldName.'_'.$strField.'_'.$intIndex);
            }

            $arrValues[] = $arrRow;
        }

        return $arrValues;
    }

    public static function generateRows($intRowCount, $arrDca, $strTable, $objDc, array $arrValues, $arrErrors, $strFieldName)
    {
        $arrRows = [];

        for ($i = 1; $i <= (empty($arrValues) ? $intRowCount : count($arrValues)); ++$i) {
            $arrFields = [];

            foreach ($arrDca['fields'] as $strField => $arrData) {
                $strMethod = Container::isFrontend() ? 'getFrontendFormField' : 'getBackendFormField';

                $values = null;

                if (is_array($arrValues) && isset($arrValues[$i - 1]) && isset($arrValues[$i - 1][$strFieldName.'_'.$strField])) {
                    $values = $arrValues[$i - 1][$strFieldName.'_'.$strField];
                }

                if (!($objWidget = Widget::$strMethod($strFieldName.'_'.$strField.'_'.$i, $arrData, $values, $strField, $strTable, $objDc))) {
                    continue;
                }

                // add correct dca for bootstrapper since by normal behavior retrieval of the dca is impossible
                $objWidget->arrDca = $arrData;

                $objWidget->noIndex = $strField;

                if (is_numeric($objWidget->value)) {
                    // date/time fields
                    if ($arrData['eval']['rgxp'] === 'date') {
                        $objWidget->value = \Date::parse(\Config::get('dateFormat'), $objWidget->value);
                    } elseif ($arrData['eval']['rgxp'] === 'time') {
                        $objWidget->value = \Date::parse(\Config::get('timeFormat'), $objWidget->value);
                    } elseif ($arrData['eval']['rgxp'] === 'datim') {
                        $objWidget->value = \Date::parse(\Config::get('datimFormat'), $objWidget->value);
                    }
                }

                if (isset($arrErrors[$strFieldName.'_'.$strField.'_'.$i])) {
                    $objWidget->addError(implode('', $arrErrors[$strFieldName.'_'.$strField.'_'.$i]));
                }

                static::handleSpecialFields($objWidget, $arrData, $strFieldName, $strTable);

                $arrFields[$strFieldName.'_'.$strField.'_'.$i] = $objWidget;
            }

            $arrRows[] = $arrFields;
        }

        return $arrRows;
    }

    public static function handleSpecialFields($objWidget, $arrData, $strField, $strTable)
    {
        $wizard = '';

        if ($arrData['eval']['datepicker']) {
            $rgxp = $arrData['eval']['rgxp'];
            $format = \Date::formatToJs(\Config::get($rgxp.'Format'));

            switch ($rgxp) {
                case 'datim':
                    $time = ",\n        timePicker: true";
                    break;

                case 'time':
                    $time = ",\n        pickOnly: \"time\"";
                    break;

                default:
                    $time = '';
                    break;
            }

            $strOnSelect = '';

            // Trigger the auto-submit function (see #8603)
            if ($arrData['eval']['submitOnChange']) {
                $strOnSelect = ",\n        onSelect: function() { Backend.autoSubmit(\"".$strTable.'"); }';
            }

            $wizard .= ' '.\Image::getHtml(
                    'assets/datepicker/images/icon.svg',
                    '',
                    'title="'.\StringUtil::specialchars($GLOBALS['TL_LANG']['MSC']['datepicker']).'" id="toggle_'.$objWidget->id
                    .'" style="cursor:pointer"'
                ).'
  <script>
    window.addEvent("domready", function() {
      new Picker.Date($("ctrl_'.$objWidget->id.'"), {
        draggable: false,
        toggle: $("toggle_'.$objWidget->id.'"),
        format: "'.$format.'",
        positionOffset: {x:-211,y:-209}'.$time.',
        pickerClass: "datepicker_bootstrap",
        useFadeInOut: !Browser.ie'.$strOnSelect.',
        startDay: '.$GLOBALS['TL_LANG']['MSC']['weekOffset'].',
        titleFormat: "'.$GLOBALS['TL_LANG']['MSC']['titleFormat'].'"
      });
    });
  </script>';
        }

        // Color picker
        if ($arrData['eval']['colorpicker']) {
            // Support single fields as well (see #5240)
            $strKey = $arrData['eval']['multiple'] ? $strField.'_0' : $strField;

            $wizard .= ' '.\Image::getHtml(
                    'pickcolor.svg',
                    $GLOBALS['TL_LANG']['MSC']['colorpicker'],
                    'title="'.\StringUtil::specialchars($GLOBALS['TL_LANG']['MSC']['colorpicker']).'" id="moo_'.$strField
                    .'" style="cursor:pointer"'
                ).'
  <script>
    window.addEvent("domready", function() {
      var cl = $("ctrl_'.$strKey.'").value.hexToRgb(true) || [255, 0, 0];
      new MooRainbow("moo_'.$strField.'", {
        id: "ctrl_'.$strKey.'",
        startColor: cl,
        imgPath: "assets/colorpicker/images/",
        onComplete: function(color) {
          $("ctrl_'.$strKey.'").value = color.hex.replace("#", "");
        }
      });
    });
  </script>';
        }

        // rte
        if (!empty($arrData['eval']['rte'])) {
            list($file, $type) = explode('|', $arrData['eval']['rte'], 2);

            $fileBrowserTypes = [];
            $pickerBuilder = \System::getContainer()->get('contao.picker.builder');

            foreach (['file' => 'image', 'link' => 'file'] as $context => $fileBrowserType) {
                if ($pickerBuilder->supportsContext($context)) {
                    $fileBrowserTypes[] = $fileBrowserType;
                }
            }

            /** @var BackendTemplate|object $objTemplate */
            $objTemplate = new \BackendTemplate('be_'.$file);
            $objTemplate->selector = 'ctrl_'.$objWidget->id;
            $objTemplate->type = $type;
            $objTemplate->fileBrowserTypes = $fileBrowserTypes;

            // Deprecated since Contao 4.0, to be removed in Contao 5.0
            $objTemplate->language = \Backend::getTinyMceLanguage();

            $wizard .= $objTemplate->parse();
        }

        $strHelp = (!$objWidget->hasErrors() ? static::help($arrData) : '');

        $objWidget->wizard = $strHelp ? $wizard.$strHelp : $wizard;
    }

    public static function help($arrData, $strClass = '')
    {
        $return = $arrData['label'][1];

        if (!\Config::get('showHelp') || 'password' === $arrData['inputType'] || '' === $return) {
            return '';
        }

        return '<p class="tl_help tl_tip'.$strClass.'">'.$return.'</p>';
    }

    protected function validator($varInput)
    {
        // validate every field
        $varInput = [];
        $intRowCount = Request::getPost($this->strName.'_'.'rowCount');
        $blnHasErrors = false;

        for ($i = 1; $i <= $intRowCount; ++$i) {
            foreach ($this->arrDca['fields'] as $strField => $arrData) {
                $strMethod = Container::isFrontend() ? 'getFrontendFormField' : 'getBackendFormField';

                if (!($objWidget =
                    Widget::$strMethod($this->strName.'_'.$strField.'_'.$i, $arrData, null, $strField, $this->strTable, $this->objDca))
                ) {
                    continue;
                }

                $objWidget->validate();
                $varValue = $objWidget->value;

                // Convert date formats into timestamps (check the eval setting first -> #3063)
                $rgxp = $arrData['eval']['rgxp'];
                if (('date' === $rgxp || 'time' === $rgxp || 'datim' === $rgxp) && '' !== $varValue) {
                    $objDate = new \Date($varValue, $GLOBALS['TL_CONFIG'][$rgxp.'Format']);
                    $varValue = $objDate->tstamp;
                }

                // Save callback
                if (is_array($arrData['save_callback'])) {
                    foreach ($arrData['save_callback'] as $callback) {
                        $this->import($callback[0]);

                        try {
                            $varValue = $this->{$callback[0]}->{$callback[1]}($varValue, $this->objDca);
                        } catch (\Exception $e) {
                            $objWidget->class = 'error';
                            $objWidget->addError($e->getMessage());
                        }
                    }
                }

                $varInput[$i - 1][$strField] = $varValue;

                // Do not submit if there are errors
                if ($objWidget->hasErrors()) {
                    // store the errors
                    $this->arrWidgetErrors[$this->strName.'_'.$strField.'_'.$i] = $objWidget->getErrors();
                    $blnHasErrors = true;
                }
            }
        }

        if ($blnHasErrors) {
            $this->addError($GLOBALS['TL_LANG']['MSC']['multiColumnEditor']['error']);
            $this->blnSubmitInput = false;
        }

        return parent::validator(serialize($varInput));
    }

    private static function prefixValuesWithFieldName(array $arrValues, $strFieldName)
    {
        $arrResult = [];

        foreach ($arrValues as $arrValue) {
            $arrRow = [];

            if (!is_array($arrValue)) {
                continue;
            }

            foreach ($arrValue as $strKey => $varValue) {
                $arrRow[$strFieldName.'_'.$strKey] = $varValue;
            }

            $arrResult[] = $arrRow;
        }

        return $arrResult;
    }

    private static function restoreValueFromPost(array $arrPost, $strFieldName, $arrDca)
    {
        $arrResult = [];
        $intRowCount = Request::getPost($strFieldName.'_rowCount');

        for ($i = 0; $i < $intRowCount; ++$i) {
            $arrRow = [];

            foreach ($arrDca['fields'] as $strField => $arrFieldData) {
                $arrRow[$strField] = $arrPost[$strFieldName.'_'.$strField.'_'.($i + 1)];
            }

            if (!empty($arrRow)) {
                $arrResult[] = $arrRow;
            }
        }

        return $arrResult;
    }
}
