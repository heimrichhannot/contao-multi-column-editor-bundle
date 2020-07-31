<?php

/**
 * Backend form fields
 */
$GLOBALS['BE_FFL']['multiColumnEditor'] = 'HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor';

/**
 * Frontend form fields
 */
$GLOBALS['TL_FFL']['multiColumnEditor'] = 'HeimrichHannot\MultiColumnEditorBundle\Form\FormMultiColumnEditor';

/**
 * Hooks
 */
$GLOBALS['TL_HOOKS']['executePostActions']['multiColumnEditor'] = ['huh.multicolumneditor.listener.hooks', 'executePostActionsHook'];
$GLOBALS['TL_HOOKS']['loadDataContainer']['multiColumnEditor']  = ['huh.multicolumneditor.listener.hooks', 'loadDataContainerHook'];

/**
 * RSCE
 */
$GLOBALS['MULTI_COLUMN_EDITOR']['rsce_fields'] = [];

/**
 * Ajax
 */
$GLOBALS['AJAX'][\HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::NAME] = [
    'actions' => [
        \HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::ACTION_ADD_ROW    => [
            'arguments' => ['row', 'field', 'table'],
            'optional'  => [],
        ],
        \HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::ACTION_DELETE_ROW => [
            'arguments' => ['row', 'field', 'table'],
            'optional'  => [],
        ],
        \HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::ACTION_SORT_ROWS => [
            'arguments' => ['field', 'table'],
            'optional'  => [],
        ],
        \HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::ACTION_UPDATE_ROWS    => [
            'arguments' => ['row', 'field', 'table'],
            'optional'  => [],
        ],
    ],
];
