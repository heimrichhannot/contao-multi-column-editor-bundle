<?php

/*
 * Copyright (c) 2019 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\EventListener;

use Contao\Config;
use Contao\CoreBundle\Framework\ContaoFrameworkInterface;
use Contao\System;
use HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor;

class HookListener
{
    /**
     * @var ContaoFrameworkInterface
     */
    private $framework;

    /**
     * Constructor.
     *
     * @param ContaoFrameworkInterface $framework
     */
    public function __construct(ContaoFrameworkInterface $framework)
    {
        $this->framework = $framework;
    }

    /**
     * Add custom logic via  the post actions hook.
     *
     * @param $strAction
     * @param \DataContainer $objDc
     */
    public function executePostActionsHook($strAction, \DataContainer $objDc)
    {
        $request = System::getContainer()->get('huh.request');
        $modelUtil = System::getContainer()->get('huh.utils.model');

        if (MultiColumnEditor::ACTION_ADD_ROW === $strAction || MultiColumnEditor::ACTION_DELETE_ROW === $strAction ||
            MultiColumnEditor::ACTION_SORT_ROWS === $strAction
        ) {
            $objDc->field = $request->getPost('field');
            $objDc->table = $request->getPost('table');

            if (!$objDc->field || !$objDc->table) {
                header('HTTP/1.1 400 Bad Request');

                die('Bad Request');
            }

            $objDc->activeRecord = 'tl_settings' === $objDc->table ? Config::getInstance() : $modelUtil->findModelInstanceByPk($objDc->table, $objDc->id);

            $editor = new MultiColumnEditor(['strField' => $objDc->field, 'varValue' => $objDc->value, 'strTable' => $objDc->table, 'dataContainer' => $objDc]);

            die($editor->generate());
        }
    }

    /**
     * Add custom logic via loadDataContainer Hook.
     *
     * @param $strTable
     */
    public function loadDataContainerHook($strTable)
    {
        if (!isset($GLOBALS['TL_DCA'][$strTable])) {
            return;
        }

        $dca = &$GLOBALS['TL_DCA'][$strTable];

        if (!($name = System::getContainer()->get('huh.request')->getPost('name'))) {
            return;
        }

        if (isset($dca['fields'][$name])) {
            return;
        }

        $action = System::getContainer()->get('huh.request')->getPost('action');

        // support for jumpTo fields -> bypass check in \Contao\Ajax -> comment "The field does not exist" line 282
        if (('reloadPagetree' !== $action && 'reloadFiletree' !== $action) || 'fieldpalette' === $strTable) {
            return;
        }

        if ($this->isMceField($name, $dca)) {
            $dca['fields'][$name] = [];
        }
    }

    protected function isMceField($name, $dca)
    {
        $isMce = false;
        $cleanedName = preg_replace('/_\d+$/i', '', $name);
        $mceFieldArrays = [];

        foreach ($dca['fields'] as $field => $data) {
            if ('multiColumnEditor' !== $data['inputType'] || !isset($data['eval']['multiColumnEditor']['fields'])) {
                continue;
            }

            $mceFieldArrays[$field] = $data;
        }

        if (empty($mceFieldArrays)) {
            return false;
        }

        foreach ($mceFieldArrays as $field => $mceData) {
            if (\in_array(preg_replace('/^'.$field.'_/', '', $cleanedName), array_keys($mceData['eval']['multiColumnEditor']['fields']), true)) {
                $isMce = true;
            }
        }

        return $isMce;
    }
}
