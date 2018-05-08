<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Widget;

use Contao\BackendTemplate;
use Contao\Controller;
use Contao\DataContainer;
use Contao\Date;
use Contao\System;
use Contao\Widget;
use HeimrichHannot\MultiColumnEditorBundle\Controller\AjaxController;

class MultiColumnEditor extends \Contao\Widget
{
    const ACTION_ADD_ROW = 'addRow';
    const ACTION_DELETE_ROW = 'deleteRow';
    const ACTION_SORT_ROWS = 'sortRows';

    const NAME = 'multicolumneditor';

    /**
     * @var bool
     */
    protected $blnSubmitInput = true;

    /**
     * @var bool
     */
    protected $blnForAttribute = true;

    /**
     * @var string
     */
    protected $strTemplate = 'be_multi_column_editor';

    /**
     * @var string
     */
    protected $editorTemplate = 'multi_column_editor_backend_default';

    /**
     * @var array
     */
    protected $arrDca;

    /**
     * @var array
     */
    protected $arrWidgetErrors = [];

    /**
     * @var string
     */
    protected $action;

    public function __construct($arrData)
    {
        parent::__construct($arrData);

        Controller::loadDataContainer($this->strTable);
        $this->arrDca = $GLOBALS['TL_DCA'][$this->strTable]['fields'][$this->strField]['eval']['multiColumnEditor'];
        $this->editorTemplate = $this->arrDca['editorTemplate'] ?? $this->editorTemplate;

        if (System::getContainer()->get('huh.utils.container')->isFrontend()) {
            $this->editorTemplate = 'multi_column_editor_backend_default' === $this->editorTemplate ? 'multi_column_editor_frontend_default' : $this->editorTemplate;
            System::getContainer()->get('huh.ajax')->runActiveAction(static::NAME, static::ACTION_ADD_ROW, new AjaxController($this));
            System::getContainer()->get('huh.ajax')->runActiveAction(static::NAME, static::ACTION_DELETE_ROW, new AjaxController($this));
            System::getContainer()->get('huh.ajax')->runActiveAction(static::NAME, static::ACTION_SORT_ROWS, new AjaxController($this));
        }
    }

    /**
     * Generate the widget and return it as string.
     *
     * @return string
     */
    public function generate()
    {
        return '<div class="multi-column-editor-wrapper">'.$this->generateEditorForm().'</div>';
    }

    /**
     * @param string        $strEditorTemplate
     * @param string        $strTable
     * @param string        $strFieldName
     * @param mixed         $varValue
     * @param DataContainer $objDc
     * @param array|null    $arrDca
     * @param array         $arrErrors
     *
     * @return string
     */
    public function generateEditorForm(): string
    {
        $arrDca = $this->arrDca;
        $objDc = $this->objDca;

        if (System::getContainer()->get('huh.utils.container')->isBackend()) {
            $strTable = $this->objDca->table;
            $strFieldName = $this->objDca->field;
            $varValue = $this->objDca->value;
        } else {
            $strTable = $this->strTable;
            $strFieldName = $this->strName;
            $varValue = $this->varValue;
        }

        if (null === $arrDca) {
            $arrDca = $GLOBALS['TL_DCA'][$strTable]['fields'][$strFieldName]['eval']['multiColumnEditor'];
        }

        $arrErrors = $this->arrWidgetErrors;
        $strAction = $this->getAction();

        $data = [];
        $data['fieldName'] = $strFieldName;
        $data['table'] = $strTable;
        $data['cssClass'] = $arrDca['class'];
        $data['sortable'] = $arrDca['sortable'];
        $intMinRowCount = isset($arrDca['minRowCount']) ? $arrDca['minRowCount'] : 1;
        $intMaxRowCount = isset($arrDca['maxRowCount']) ? $arrDca['maxRowCount'] : 0;
        $blnSkipCopyValuesOnAdd = isset($arrDca['skipCopyValuesOnAdd']) ? $arrDca['skipCopyValuesOnAdd'] : false;
        $data['minRowCount'] = $intMinRowCount;
        $data['maxRowCount'] = $intMaxRowCount;

        // actions
        $data['ajaxAddUrl'] =
            System::getContainer()->get('huh.utils.container')->isBackend() ? System::getContainer()->get('request_stack')->getMasterRequest()->getRequestUri() : System::getContainer()->get('huh.ajax.action')->generateUrl(static::NAME, static::ACTION_ADD_ROW);
        $data['ajaxDeleteUrl'] =
            System::getContainer()->get('huh.utils.container')->isBackend() ? System::getContainer()->get('request_stack')->getMasterRequest()->getRequestUri() : System::getContainer()->get('huh.ajax.action')->generateUrl(static::NAME, static::ACTION_DELETE_ROW);
        $data['ajaxSortUrl'] =
            System::getContainer()->get('huh.utils.container')->isBackend() ? System::getContainer()->get('request_stack')->getMasterRequest()->getRequestUri() : System::getContainer()->get('huh.ajax.action')->generateUrl(static::NAME, static::ACTION_SORT_ROWS);

        $intRowCount = System::getContainer()->get('huh.request')->getPost($strFieldName.'_rowCount') ?: $intMinRowCount;
        $strAction = $strAction ?: System::getContainer()->get('huh.request')->getPost('action');

        if ($varValue) {
            // restore from entity
            $arrValues = $this->prefixValuesWithFieldName(deserialize($varValue, true), $strFieldName);
        } elseif (System::getContainer()->get('huh.request')->request->count() > 0) {
            // restore from post
            $arrValues = $this->prefixValuesWithFieldName($this->restoreValueFromPost(System::getContainer()->get('huh.request')->getAllPost(), $strFieldName, $arrDca), $strFieldName);
        } else {
            $arrValues = [];
        }

        // handle ajax requests
        if (System::getContainer()->get('huh.utils.container')->isBackend() && \Environment::get('isAjaxRequest')) {
            switch ($strAction) {
                case static::ACTION_ADD_ROW:
                    $arrValues = $this->addRow($arrValues, $arrDca, $intRowCount, $intMaxRowCount, $strFieldName, $blnSkipCopyValuesOnAdd);
                    break;

                case static::ACTION_DELETE_ROW:
                    $arrValues = $this->deleteRow($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName);
                    break;

                case static::ACTION_SORT_ROWS:
                    $arrValues = $this->sortRows($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName);
                    break;
            }
        } elseif (System::getContainer()->get('huh.ajax')->isRelated(static::NAME)) {
            switch ($strAction) {
                case static::ACTION_ADD_ROW:
                    $arrValues = $this->addRow($arrValues, $arrDca, $intRowCount, $intMaxRowCount, $strFieldName, $blnSkipCopyValuesOnAdd);
                    break;

                case static::ACTION_DELETE_ROW:
                    $arrValues = $this->deleteRow($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName);
                    break;
                case static::ACTION_SORT_ROWS:
                    $arrValues = $this->sortRows($arrValues, $arrDca, $intRowCount, $intMinRowCount, $strFieldName);
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

        $objWidget = System::getContainer()->get('huh.utils.form')->getWidgetFromAttributes($strFieldName.'_rowCount', ['inputType' => 'hidden'], $intCount);

        $data['rowCount'] = $objWidget;
        $data['renderedRowCount'] = $objWidget->parse();
        $data['isBackend'] = System::getContainer()->get('huh.utils.container')->isBackend();
        $data['isFrontend'] = System::getContainer()->get('huh.utils.container')->isFrontend();

        // add rows
        $data['editorFormAction'] = System::getContainer()->get('request_stack')->getMasterRequest()->getRequestUri();
        $data['rows'] = $this->generateRows($intRowCount, $arrDca, $strTable, $objDc, $arrValues, $arrErrors, $strFieldName);

        return System::getContainer()->get('twig')->render(
            System::getContainer()->get('huh.utils.template')->getTemplate($this->getEditorTemplate()),
            $data
        );
    }

    /**
     * @param array  $arrValues
     * @param array  $arrDca
     * @param int    $intRowCount
     * @param int    $intMaxRowCount
     * @param string $strFieldName
     * @param bool   $blnSkipCopyValuesOnAdd
     *
     * @return array
     */
    public function addRow(array $arrValues, array $arrDca, int $intRowCount, int $intMaxRowCount, string $strFieldName, bool $blnSkipCopyValuesOnAdd = false)
    {
        if (!($intIndex = (int) System::getContainer()->get('huh.request')->getPost('row'))) {
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
                $arrRow[$strFieldName.'_'.$strField] = System::getContainer()->get('huh.request')->getPost($strFieldName.'_'.$strField.'_'.$i);
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

    /**
     * @param array  $arrValues
     * @param array  $arrDca
     * @param int    $intRowCount
     * @param int    $intMinRowCount
     * @param string $strFieldName
     *
     * @return array
     */
    public function deleteRow(array $arrValues, array $arrDca, int $intRowCount, int $intMinRowCount, string $strFieldName): array
    {
        if (!($intIndex = (int) System::getContainer()->get('huh.request')->getPost('row'))) {
            return $arrValues;
        }

        $arrValues = [];

        for ($i = 1; $i <= $intRowCount; ++$i) {
            if ($i === $intIndex && $intRowCount - 1 >= $intMinRowCount) {
                continue;
            }

            $arrRow = [];

            foreach (array_keys($arrDca['fields']) as $strField) {
                $arrRow[$strFieldName.'_'.$strField] = System::getContainer()->get('huh.request')->getPost($strFieldName.'_'.$strField.'_'.$i);
            }

            $arrValues[] = $arrRow;
        }

        return $arrValues;
    }

    /**
     * @param array  $arrValues
     * @param array  $arrDca
     * @param int    $intRowCount
     * @param int    $intMinRowCount
     * @param string $strFieldName
     *
     * @return array
     */
    public function sortRows(array $arrValues, array $arrDca, int $intRowCount, int $intMinRowCount, string $strFieldName): array
    {
        if (!($varNewIndices = System::getContainer()->get('huh.request')->getPost('newIndices'))) {
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
                $arrRow[$strFieldName.'_'.$strField] = System::getContainer()->get('huh.request')->getPost($strFieldName.'_'.$strField.'_'.$intIndex);
            }

            $arrValues[] = $arrRow;
        }

        return $arrValues;
    }

    /**
     * @param int           $intRowCount
     * @param array         $arrDca
     * @param string        $strTable
     * @param DataContainer $objDc
     * @param array         $arrValues
     * @param array         $arrErrors
     * @param string        $strFieldName
     *
     * @return array
     */
    public function generateRows(int $intRowCount, array $arrDca, string $strTable, DataContainer $objDc, array $arrValues, array $arrErrors, string $strFieldName): array
    {
        $arrRows = [];

        for ($i = 1; $i <= (empty($arrValues) ? $intRowCount : count($arrValues)); ++$i) {
            $arrFields = [];

            foreach ($arrDca['fields'] as $strField => $arrData) {
                $values = null;

                if (is_array($arrValues) && isset($arrValues[$i - 1]) && isset($arrValues[$i - 1][$strFieldName.'_'.$strField])) {
                    $values = $arrValues[$i - 1][$strFieldName.'_'.$strField];
                }

                if (null === ($objWidget = System::getContainer()->get('huh.utils.form')->getWidgetFromAttributes($strFieldName.'_'.$strField.'_'.$i, $arrData, $values, $strField, $strTable, $objDc, TL_MODE))) {
                    continue;
                }

                // add correct dca for bootstrapper since by normal behavior retrieval of the dca is impossible
                $objWidget->arrDca = $arrData;

                $objWidget->noIndex = $strField;

                if (is_numeric($objWidget->value)) {
                    // date/time fields
                    if ($arrData['eval']['rgxp'] === 'date') {
                        $objWidget->value = Date::parse(\Config::get('dateFormat'), $objWidget->value);
                    } elseif ($arrData['eval']['rgxp'] === 'time') {
                        $objWidget->value = Date::parse(\Config::get('timeFormat'), $objWidget->value);
                    } elseif ($arrData['eval']['rgxp'] === 'datim') {
                        $objWidget->value = Date::parse(\Config::get('datimFormat'), $objWidget->value);
                    }
                }

                if (isset($arrErrors[$strFieldName.'_'.$strField.'_'.$i])) {
                    $objWidget->addError(implode('', $arrErrors[$strFieldName.'_'.$strField.'_'.$i]));
                }

                $this->handleSpecialFields($objWidget, $arrData, $strFieldName, $strTable);

                $arrFields[$strFieldName.'_'.$strField.'_'.$i] = $objWidget;
            }

            $arrRows[] = $arrFields;
        }

        return $arrRows;
    }

    /**
     * @return string
     */
    public function getAction(): ? string
    {
        return $this->action;
    }

    /**
     * @param string $action
     *
     * @return MultiColumnEditor
     */
    public function setAction(string $action): self
    {
        $this->action = $action;

        return $this;
    }

    /**
     * @return string
     */
    public function getEditorTemplate(): string
    {
        return $this->editorTemplate;
    }

    /**
     * @param string $editorTemplate
     *
     * @return MultiColumnEditor
     */
    public function setEditorTemplate(string $editorTemplate): self
    {
        $this->editorTemplate = $editorTemplate;

        return $this;
    }

    /**
     * @param Widget $objWidget
     * @param array  $arrData
     * @param string $strField
     * @param string $strTable
     */
    protected function handleSpecialFields(Widget $objWidget, array $arrData, string $strField, string $strTable): void
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

    /**
     * @param array  $arrData
     * @param string $strClass
     *
     * @return string
     */
    protected function help(array $arrData, string $strClass = ''): string
    {
        $return = $arrData['label'][1];

        if (!\Config::get('showHelp') || 'password' === $arrData['inputType'] || '' === $return) {
            return '';
        }

        return '<p class="tl_help tl_tip'.$strClass.'">'.$return.'</p>';
    }

    /**
     * @param mixed $varInput
     *
     * @return mixed
     */
    protected function validator($varInput)
    {
        // validate every field
        $varInput = [];
        $intRowCount = System::getContainer()->get('huh.request')->getPost($this->strName.'_'.'rowCount');
        $blnHasErrors = false;

        for ($i = 1; $i <= $intRowCount; ++$i) {
            foreach ($this->arrDca['fields'] as $strField => $arrData) {
                if (null === ($objWidget = System::getContainer()->get('huh.utils.form')->getWidgetFromAttributes($this->strName.'_'.$strField.'_'.$i, $arrData, null, $strField, $this->strTable, $this->objDca))) {
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

    /**
     * @param array  $arrValues
     * @param string $strFieldName
     *
     * @return array
     */
    protected function prefixValuesWithFieldName(array $arrValues, string $strFieldName): array
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

    /**
     * @param array  $arrPost
     * @param string $strFieldName
     * @param array  $arrDca
     *
     * @return array
     */
    protected function restoreValueFromPost(array $arrPost, string $strFieldName, array $arrDca): array
    {
        $arrResult = [];
        $intRowCount = System::getContainer()->get('huh.request')->getPost($strFieldName.'_rowCount');

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
