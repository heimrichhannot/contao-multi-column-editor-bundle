<?php

/*
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Widget;

use Contao\BackendTemplate;
use Contao\Config;
use Contao\Controller;
use Contao\Date;
use Contao\Environment;
use Contao\FrontendTemplate;
use Contao\StringUtil;
use Contao\System;
use Contao\Widget;
use HeimrichHannot\MultiColumnEditorBundle\Asset\MceAssets;
use HeimrichHannot\MultiColumnEditorBundle\Controller\AjaxController;
use Symfony\Component\DependencyInjection\ContainerInterface;

class MultiColumnEditor extends Widget
{
    const NAME = '_mce';
    const ACTION_ADD_ROW = 'addRow';
    const ACTION_DELETE_ROW = 'deleteRow';
    const ACTION_SORT_ROWS = 'sortRows';
    const ACTION_UPDATE_ROWS = 'updateRows';

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
    protected $editorTemplate = 'multi_column_editor_default';

    /**
     * @var array
     */
    protected $arrDca;

    /**
     * @var array
     */
    protected $arrWidgetErrors = [];

    /** @var ContainerInterface */
    protected $container;

    protected $contaoSessionBackend;

    public function __construct($arrData)
    {
        parent::__construct($arrData);

        Controller::loadDataContainer($this->strTable);
        $this->arrDca = array_merge($GLOBALS['TL_DCA'][$this->strTable]['fields'][$this->strField]['eval']['multiColumnEditor'], $arrData['multiColumnEditor']);
        $this->editorTemplate = $this->arrDca['editorTemplate'] ?? $this->editorTemplate;
        $this->container = System::getContainer();

        $this->contaoSessionBackend = System::getContainer()->get('session')->getBag('contao_backend');

        if ($this->container->get('huh.utils.container')->isFrontend()) {
            $this->container->get('huh.ajax')->runActiveAction(static::NAME, static::ACTION_ADD_ROW,
                new AjaxController($this, $this->container));
            $this->container->get('huh.ajax')->runActiveAction(static::NAME, static::ACTION_DELETE_ROW,
                new AjaxController($this, $this->container));
            $this->container->get('huh.ajax')->runActiveAction(static::NAME, static::ACTION_SORT_ROWS,
                new AjaxController($this, $this->container));
            $this->container->get('huh.ajax')->runActiveAction(static::NAME, static::ACTION_UPDATE_ROWS,
                new AjaxController($this, $this->container));
        }
    }

    /**
     * Generate the widget and return it as string.
     */
    public function generate(): string
    {
        $this->container->get(MceAssets::class)->addAssets();

        $responseText = $this->generateEditorForm();
        $hasTinyMce = false;

        foreach ($this->arrDca['fields'] as $field) {
            if ('textarea' === $field['inputType'] && isset($field['eval']['rte']) && 'tinyMCE' === $field['eval']['rte']) {
                $hasTinyMce = true;

                break;
            }
        }

        if ($hasTinyMce) {
            if (version_compare(VERSION, '4.5') >= 0) {
                $template = new FrontendTemplate();
                $tinyMcePath = $template->asset('js/tinymce.min.js', 'contao-components/tinymce4');
            } else {
                $tinyMcePath = TL_ASSETS_URL.'assets/tinymce4/js/tinymce.min.js';
            }

            $responseText = '<script>window.tinymce || document.write(\'<script src="'.$tinyMcePath.'">\x3C/script>\')</script>'.$responseText;
        }

        if ($this->container->get('huh.utils.container')->isBackend()) {
            // add the css inline on ajax call
            if (Environment::get('isAjaxRequest')) {
                $inlineStyle = '<style>'.file_get_contents(
                        TL_ROOT.'/web/bundles/heimrichhannotcontaomulticolumneditor/contao-multi-column-editor-bundle-be.css'
                    ).'</style>';
            } else {
                $inlineStyle = '';
            }

            return $inlineStyle.'<div class="multi-column-editor-wrapper"><h3 class="multi-column-editor-label">'.$this->generateLabel().$this->xlabel.'</h3>'.$responseText.$this->getErrorAsHTML().'</div>';
        }

        return '<div class="multi-column-editor-wrapper">'.$responseText.'</div>';
    }

    /**
     * Generate the editor form.
     */
    public function generateEditorForm(): string
    {
        $data = [];
        $data['fieldName'] = $this->strName;
        $data['table'] = $this->strTable;
        $data['cssClass'] = $this->arrDca['class'];
        $data['sortable'] = $this->arrDca['sortable'];
        $data['minRowCount'] = $this->getMinRowCount();
        $data['maxRowCount'] = $this->getMaxRowCount();

        // actions
        $data['ajaxAddUrl'] = $this->getActionUrl(static::ACTION_ADD_ROW);
        $data['ajaxDeleteUrl'] = $this->getActionUrl(static::ACTION_DELETE_ROW);
        $data['ajaxSortUrl'] = $this->getActionUrl(static::ACTION_SORT_ROWS);

        $data['isBackend'] = $this->container->get('huh.utils.container')->isBackend();
        $data['isFrontend'] = $this->container->get('huh.utils.container')->isFrontend();

        // add rows
        $data['editorFormAction'] = $this->container->get('request_stack')->getMasterRequest()->getRequestUri();
        [$rows, $groupRows, $useLegends] = $this->generateRows();
        $data['rows'] = $rows;
        $data['groupRows'] = $groupRows;
        $data['legend'] = $useLegends;

        $data['disableAdd'] = $this->getDisableAdd($data);
        $data['disableRemove'] = $this->getDisableRemove($data);

        $data['mceErrors'] = $this->arrErrors;

        if ($this->getAttribute('disabled')) {
            $data['disabled'] = true;
            $data['sortable'] = false;
        }

        return $this->container->get('twig')->render(
            $this->container->get('huh.utils.template')->getTemplate($this->getEditorTemplate()),
            $data
        );
    }

    public function getDisableAdd(array $data): bool
    {
        $disable = false;

        if ($this->getAttribute('disabled')) {
            return true;
        }

        $count = \count($data['rows']);

        if ($data['maxRowCount'] && $data['maxRowCount'] <= ($count)) {
            $disable = true;
        }

        return $disable;
    }

    public function getDisableRemove(array $data): bool
    {
        $disable = false;

        if ($this->getAttribute('disabled')) {
            return true;
        }

        $count = \count($data['rows']);

        if ($data['minRowCount'] && $data['minRowCount'] >= ($count)) {
            $disable = true;
        }

        return $disable;
    }

    /**
     * Get the action url.
     */
    public function getActionUrl(string $action): string
    {
        if ($this->container->get('huh.utils.container')->isBackend()) {
            return $this->container->get('request_stack')->getMasterRequest()->getRequestUri();
        }

        return $this->container->get('huh.ajax.action')->generateUrl(static::NAME, $action);
    }

    /**
     * Add row after given position.
     */
    public function addRow(int $offset = 0)
    {
        if (($max = $this->getMaxRowCount()) > 0 && $offset >= $max) {
            return;
        }

        $doNotCopyValues = $this->arrDca['skipCopyValuesOnAdd'] ?? false;

        if (\is_array($this->varValue) && !empty($this->varValue)) {
            $new = $this->varValue[$offset];
        } // first element
        else {
            $new = array_flip(array_keys($this->arrDca['fields']));
            $doNotCopyValues = true;
        }

        foreach ($new as $field => &$value) {
            if ($doNotCopyValues) {
                $value = $this->getDefaultValue($field);
            }
        }

        $this->updateSession($offset);

        array_insert($this->varValue, ($offset + 1), [$new]);

        $this->sortRows();
    }

    /**
     * Delete Row at given position.
     */
    public function deleteRow(int $offset = 0)
    {
        if (!\is_array($this->varValue) || empty($this->varValue) || !isset($this->varValue[$offset])) {
            return;
        }

        $this->updateSession($offset, 'delete');

        unset($this->varValue[$offset]);

        $this->sortRows();
    }

    /**
     * Sort current values.
     */
    public function sortRows()
    {
        // update indexes
        $this->updateSession(0, 'sort', array_keys($this->varValue));
        $this->varValue = array_values($this->varValue);
    }

    /**
     * Update rows (submitOnChange).
     */
    public function updateRows()
    {
    }

    /**
     * Generate rows based on current values.
     */
    public function generateRows(): array
    {
        $rows = [];
        $groupRows = [];
        $useLegends = false;
        $fieldConfigs = [];

        if (empty($this->varValue)) {
            if ($this->getMinRowCount() > 0) {
                $this->addRow(0);
            }
        }

        if (empty($this->varValue)) {
            return [$rows, [], $useLegends];
        }

        $fs = $this->contaoSessionBackend->get('fieldset_states');

        foreach ($this->varValue as $i => $row) {
            $fields = [];
            $groups = [];

            ['existing' => $existing, 'boxes' => $boxes, 'legends' => $legends] = $this->getRow($row);

            foreach ($boxes as $boxIndex => $box) {
                $group = [];

                if (isset($legends[$boxIndex])) {
                    $useLegends = true;
                    [$key, $cls] = explode(':', $legends[$boxIndex]);
                    $group['legend'] = ['key' => $key, 'closed' => $cls];
                    $group['legend']['lang'] = $GLOBALS['TL_LANG'][$this->strTable][$key] ?: $key;
                    $group['legend']['id'] = $this->generateLegendId($key, $i);
                    $group['class'] = 'tl_tbox';

                    if (isset($fs[$this->strTable][$group['legend']['id']])) {
                        $group['class'] .= ($fs[$this->strTable][$group['legend']['id']] ? '' : ' collapsed');
                    } else {
                        $group['class'] .= ($cls ? ' collapsed' : '');
                    }
                }

                foreach ($box as $field) {
                    if (\is_array($field)) {
                        $subpalette = $field['subpalette'];
                        $field = $field['name'];
                    }

                    if (!isset($this->arrDca['fields'][$field]) || !\is_array($this->arrDca['fields'][$field])) {
                        continue;
                    }

                    $config = $this->arrDca['fields'][$field];
                    $id = $this->strName.'_'.$i.'_'.$field;
                    $name = $this->strName.'['.$i.']['.$field.']';
                    $value = $existing[$field];

                    if ($this->getAttribute('disabled')) {
                        $config['eval']['disabled'] = true;
                    }
                    /** @var Widget $objWidget */
                    if (null === ($objWidget = $this->container->get('huh.utils.form')->getWidgetFromAttributes($name,
                            $config, $value, $name, $this->strTable, $this->dataContainer, TL_MODE))) {
                        continue;
                    }

                    // contao does not convert array field names to css id compatible selectors
                    $objWidget->strId = $id;

                    // add correct dca for bootstrapper since by normal behavior retrieval of the dca is impossible
                    $objWidget->arrDca = $config;

                    $objWidget->noIndex = $field;

                    if (is_numeric($objWidget->value)) {
                        // date/time fields
                        if ('date' === $config['eval']['rgxp']) {
                            $objWidget->value = Date::parse(Config::get('dateFormat'), $objWidget->value);
                        } elseif ('time' === $config['eval']['rgxp']) {
                            $objWidget->value = Date::parse(Config::get('timeFormat'), $objWidget->value);
                        } elseif ('datim' === $config['eval']['rgxp']) {
                            $objWidget->value = Date::parse(Config::get('datimFormat'), $objWidget->value);
                        }
                    }

                    if (isset($this->arrWidgetErrors[$id])) {
                        $objWidget->addError(implode('', $this->arrWidgetErrors[$id]));
                    }

                    $this->handleSpecialFields($objWidget, $config, $field, $this->strTable);

                    $group['fieldConfigs'][$id]['class'] = $config['eval']['tl_class'];

                    if ('checkbox' == $config['inputType'] && !$config['eval']['multiple'] && false !== strpos($config['eval']['tl_class'], 'w50')) {
                        $group['fieldConfigs'][$id]['class'] .= ' cbx';
                    }

                    if (isset($config['eval']['dcaPicker']) && (\is_array($config['eval']['dcaPicker']) || true === $config['eval']['dcaPicker'])) {
                        $group['fieldConfigs'][$id]['class'] .= ' dcapicker';
                    }

                    $fields[$id] = $group['fields'][$id] = $objWidget;
                    $group['fieldConfigs'][$id]['dca'] = $config;
                }

                $groups[] = $group;
            }

            $rows[$i] = $fields;
            $rowGroups[$i] = $groups;
        }

        return [$rows, $rowGroups, $useLegends];
    }

    public function getEditorTemplate(): string
    {
        return $this->editorTemplate;
    }

    /**
     * @return MultiColumnEditor
     */
    public function setEditorTemplate(string $editorTemplate): self
    {
        $this->editorTemplate = $editorTemplate;

        return $this;
    }

    /**
     * Get row fields based on current palette.
     *
     * @param string $palette
     *
     * @return array
     */
    protected function getRow(array $row, $palette = 'default')
    {
        if (!isset($this->arrDca['palettes']) || !\is_array($this->arrDca['palettes']) || !isset($this->arrDca['palettes'][$palette])) {
            return ['existing' => $row, 'boxes' => [array_keys($row)], 'legends' => []];
        }

        $boxes = StringUtil::trimsplit(';', $this->arrDca['palettes'][$palette]);
        $existing = [];

        foreach ($boxes as $k => $v) {
            $eCount = 1;
            $boxes[$k] = StringUtil::trimsplit(',', $v);
            $fields = [];

            $fieldIndex = 0;

            foreach ($boxes[$k] as $kk => $fieldName) {
                if ($fieldIndex < $kk) {
                    $fieldIndex = $kk;
                }

                if (preg_match('/^\[.*\]$/', $fieldName)) {
                    ++$eCount;

                    continue;
                }

                if (preg_match('/^\{.*\}$/', $fieldName)) {
                    $legends[$k] = substr($fieldName, 1, -1);
                    unset($boxes[$k][$kk]);
                }

                $existing[$fieldName] = $row[$fieldName] ?? $this->getDefaultValue($fieldName);

                $this->generateSubpalette($fieldName, $row, $boxes, $existing, $k, $fieldIndex);
            }

            // Unset a box if it does not contain any fields
            if (\count($boxes[$k]) < $eCount) {
                unset($boxes[$k]);
            }
        }

        return ['existing' => $existing, 'boxes' => $boxes, 'legends' => $legends];
    }

    protected function generateSubpalette(string $fieldName, array $row, array &$boxes, array &$existing, int $boxIndex, int &$fieldIndex)
    {
        if (\is_array($this->arrDca['palettes']['__selector__']) && \in_array($fieldName,
                $this->arrDca['palettes']['__selector__'])) {
            $subPalette = null;

            if ('checkbox' == $this->arrDca['fields'][$fieldName]['inputType'] && !$this->arrDca['fields'][$fieldName]['eval']['multiple']) {
                // Look for a subpalette
                if ($row[$fieldName] && \strlen($this->arrDca['subpalettes'][$fieldName])) {
                    $subPalette = $this->arrDca['subpalettes'][$fieldName];
                }
            } else {
                $fieldValue = $row[$fieldName];

                if (is_numeric($fieldValue) && !$this->arrDca['eval']['isAssociative']) {
                    if (isset($this->arrDca['fields'][$fieldName]['options'][$fieldValue])) {
                        $fieldValue = $this->arrDca['fields'][$fieldName]['options'][$fieldValue];
                    }
                }
                $key = $fieldName.'_'.$fieldValue;
                // Look for a subpalette
                if (\strlen($this->arrDca['subpalettes'][$key])) {
                    $subPalette = $this->arrDca['subpalettes'][$key];
                }
            }

            if (null === $subPalette) {
                return;
            }

            $sFields = StringUtil::trimsplit(',', $subPalette);

            foreach ($sFields as $sName) {
                if (!isset($this->arrDca['fields'][$sName])) {
                    continue;
                }

                $sValue = null;

                $existing[$sName] = $row[$sName] ?? $this->getDefaultValue($sName);
                array_insert($boxes[$boxIndex], $fieldIndex, $sName);
                ++$fieldIndex;
                $this->generateSubpalette($sName, $row, $boxes, $existing, $boxIndex, $fieldIndex);
            }
        }
    }

    /**
     * Get the default field value.
     *
     * @param $field
     *
     * @return mixed
     */
    protected function getDefaultValue($field)
    {
        $value = '';

        if (!isset($this->arrDca['fields'][$field]) || !\is_array($this->arrDca['fields'][$field])) {
            return $value;
        }

        $config = $this->arrDca['fields'][$field];

        // Use array_key_exists here (see #5252)
        if (\array_key_exists('default', $config)) {
            $value = $config['default'];

            // Encrypt the default value (see #3740)
            if ($config['eval']['encrypt']) {
                $value = $this->container->get('huh.utils.encryption')->encrypt($value);
            }
        }

        return $value;
    }

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

        // dca picker
        if ($arrData['eval']['dcaPicker']) {
            $ppId = 'pp_'.$objWidget->strId;
            $ctrl = 'ctrl_'.$objWidget->strId;
            $url = System::getContainer()->get('huh.utils.url')->getCurrentUrl(['skipParams' => true]);

            $link = sprintf('<a href="%s/picker?context=link&amp;value=" title="" id="%s"><img src="system/themes/flexible/icons/pickpage.svg" width="16" height="16" alt="Seiten auswählen"></a>',
                $url, $ppId);
            $script = sprintf('<script>$("%s").addEvent("click", function(e) {
                  e.preventDefault();
                  Backend.openModalSelector({
                    "id": "tl_listing",
                    "title": "Link-Adresse",
                    "url": this.href + "&value=" + document.getElementById("%s").value,
                    "callback": function(picker, value) {
                      $("%s").value = value.join(",");
                    }.bind(this)
                  });
                });
              </script>', $ppId, $ctrl, $ctrl);

            $wizard .= $link.$script;
        }

        // rte
        if (!empty($arrData['eval']['rte'])) {
            [$file, $type] = explode('|', $arrData['eval']['rte'], 2);

            $fileBrowserTypes = [];
            $pickerBuilder = $this->container->get('contao.picker.builder');

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

        // subpalette handling
        // Internet Explorer does not support onchange for checkboxes and radio buttons
        if ($arrData['eval']['submitOnChange']) {
            if ('checkbox' == $arrData['inputType'] || 'checkboxWizard' == $arrData['inputType'] || 'radio' == $arrData['inputType'] || 'radioTable' == $arrData['inputType']) {
                $objWidget->addAttribute('data-mce-click', $this->getActionUrl(static::ACTION_UPDATE_ROWS));
                $objWidget->onclick = null;
            } else {
                $objWidget->addAttribute('data-mce-change', $this->getActionUrl(static::ACTION_UPDATE_ROWS));
                $objWidget->onchange = null;
            }
        }

        $strHelp = (!$objWidget->hasErrors() ? static::help($arrData) : '');

        $objWidget->wizard = $strHelp ? $wizard.$strHelp : $wizard;
    }

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
        $blnHasWidgetErrors = false;

        if (empty($varInput)) {
            if (!$this->mandatory) {
                return $varInput;
            }

            if ('' == $this->strLabel) {
                $this->addError($GLOBALS['TL_LANG']['ERR']['mdtryNoLabel']);
            } else {
                $this->addError(sprintf($GLOBALS['TL_LANG']['ERR']['mandatory'], $this->strLabel));
            }
        }

        foreach ($varInput as $i => $row) {
            foreach ($row as $field => $value) {
                $config = $this->arrDca['fields'][$field];

                if (!isset($this->arrDca['fields'][$field]) || !\is_array($this->arrDca['fields'][$field])) {
                    continue;
                }

                $id = $this->strName.'_'.$i.'_'.$field;
                $name = $this->strName.'['.$i.']['.$field.']';

                /** @var Widget $objWidget */
                if (null === ($objWidget = $this->container->get('huh.utils.form')->getWidgetFromAttributes($name,
                        $config, null, $name, $this->strTable, $this->dataContainer))) {
                    continue;
                }

                $objWidget->validate();
                $value = $objWidget->value;

                if (isset($GLOBALS['MULTI_COLUMN_EDITOR']['rsce_fields'][$this->strTable]) && \is_array($GLOBALS['MULTI_COLUMN_EDITOR']['rsce_fields'][$this->strTable]) && \in_array($field,
                        $GLOBALS['MULTI_COLUMN_EDITOR']['rsce_fields'][$this->strTable])) {
                    $value = StringUtil::binToUuid($value);
                }

                // Convert date formats into timestamps
                if ('' !== $value && \in_array($config['eval']['rgxp'], ['date', 'time', 'datim'])) {
                    $objDate = new Date($value, Date::getFormatFromRgxp($config['eval']['rgxp']));
                    $value = $objDate->tstamp;
                }

                // Convert arrays
                if ($config['eval']['multiple'] && isset($config['eval']['csv'])) {
                    $value = implode($config['eval']['csv'], StringUtil::deserialize($value, true));
                }

                // Trigger the save_callback
                if (\is_array($config['save_callback'])) {
                    foreach ($config['save_callback'] as $callback) {
                        if (\is_array($callback)) {
                            $this->import($callback[0]);
                            $value = $this->{$callback[0]}->{$callback[1]}($value, $this);
                        } elseif (\is_callable($callback)) {
                            $value = $callback($value, $this);
                        }
                    }
                }

                $varInput[$i][$field] = $value;

                // Do not submit if there are errors
                if ($objWidget->hasErrors()) {
                    // store the errors
                    $this->arrWidgetErrors[$id] = $objWidget->getErrors();
                    $blnHasWidgetErrors = true;
                }
            }
        }

        if ($this->rgxp && isset($GLOBALS['TL_HOOKS']['addCustomRegexp']) && \is_array($GLOBALS['TL_HOOKS']['addCustomRegexp'])) {
            foreach ($GLOBALS['TL_HOOKS']['addCustomRegexp'] as $callback) {
                $callbackObj = System::importStatic($callback[0]);
                $break = $callbackObj->{$callback[1]}($this->rgxp, $varInput, $this);

                // Stop the loop if a callback returned true
                if (true === $break) {
                    break;
                }
            }
        }

        // Do not submit if there are errors
        if ($blnHasWidgetErrors) {
            $this->addError($GLOBALS['TL_LANG']['MSC']['multiColumnEditor']['error']);
        }

        if ($this->hasErrors() || $blnHasWidgetErrors) {
            $this->blnSubmitInput = false;
        }

        return $varInput;
    }

    /**
     * Get current row count.
     */
    protected function getCurrentRowCount(): int
    {
        return \count(\is_array($this->varValue) ? $this->varValue : StringUtil::deserialize($this->varValue, true));
    }

    /**
     * Get maximum row count (0 = unlimited).
     */
    protected function getMaxRowCount(): int
    {
        return $this->arrDca['maxRowCount'] ?? 0;
    }

    /**
     * Get minimum row count (default 1).
     */
    protected function getMinRowCount(): int
    {
        return $this->arrDca['minRowCount'] ?? 1;
    }

    protected function generateLegendId(?string $legendName = null, ?int $row = null)
    {
        $legendId = 'mce_'.$this->objDca->id.'_';

        if (null !== $legendName) {
            $legendId .= $legendName.'_';
        }

        if (null !== $row) {
            $legendId .= $row;
        }

        return $legendId;
    }

    /**
     * @param string $action 'add', 'delete', 'sort'
     */
    protected function updateSession(int $offset, string $action = 'add', array $sort = []): void
    {
        if ('sort' === $action && empty($sort)) {
            return;
        }
        $fs = $this->contaoSessionBackend->get('fieldset_states');

        $filtered = array_filter($fs[$this->strTable] ?: [], function ($key, $value) use ($offset) {
            if (false === strpos($value, $this->generateLegendId())) {
                return false;
            }
            $parts = explode('_', $value);
            $row = end($parts);

            if (!is_numeric($row) || (int) $row < $offset) {
                return false;
            }

            return true;
        }, ARRAY_FILTER_USE_BOTH);

        if (!empty($filtered)) {
            if ('add' === $action) {
                $filtered = array_reverse($filtered);
            }

            if ('sort' === $action) {
                $sorting = [];
            }

            foreach ($filtered as $key => $value) {
                $parts = explode('_', $key);
                $legend = $parts[2].('legend' === $parts[3] ? '_legend' : '');
                $row = (int) end($parts);

                if ('sort' === $action) {
                    if (false !== ($index = array_search($row, $sort))) {
                        $sorting[$this->generateLegendId($legend, $index)] = $fs[$this->strTable][$key];
                    }
                    unset($fs[$this->strTable][$key]);
                } else {
                    $newRow = 'delete' === $action ? ($row - 1) : ($row + 1);
                    $fs[$this->strTable][$this->generateLegendId($legend, $newRow)] = $fs[$this->strTable][$key];

                    if ('delete' === $action) {
                        if ($row === \count($this->varValue)) {
                            unset($fs[$this->strTable][$key]);
                        }
                    } else {
                        if ($row > $offset) {
                            unset($fs[$this->strTable][$key]);
                        }
                    }
                }
            }

            if ('sort' === $action) {
                $fs[$this->strTable] = array_merge($fs[$this->strTable], $sorting);
            }
            $this->contaoSessionBackend->set('fieldset_states', $fs);
        }
    }
}
