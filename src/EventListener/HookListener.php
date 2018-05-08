<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\EventListener;

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
        if (MultiColumnEditor::ACTION_ADD_ROW === $strAction || MultiColumnEditor::ACTION_DELETE_ROW === $strAction ||
            MultiColumnEditor::ACTION_SORT_ROWS === $strAction
        ) {
            $objDc->field = System::getContainer()->get('huh.request')->getPost('field');
            $objDc->table = System::getContainer()->get('huh.request')->getPost('table');

            if (!$objDc->field || !$objDc->table) {
                header('HTTP/1.1 400 Bad Request');
                die('Bad Request');
            }

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
        if (!($name = System::getContainer()->get('huh.request')->getPost('name'))) {
            return;
        }

        if (isset($GLOBALS['TL_DCA'][$strTable]['fields'][$name])) {
            return;
        }

        $action = System::getContainer()->get('huh.request')->getPost('action');

        // support for jumpTo fields -> bypass check in \Contao\Ajax -> comment "The field does not exist" line 282
        if (('reloadPagetree' !== $action && 'reloadFiletree' !== $action) || 'fieldpalette' === $strTable) {
            return;
        }

        $GLOBALS['TL_DCA'][$strTable]['fields'][$name] = true;
    }
}
