<?php

/**
 * Backend form fields
 */

use HeimrichHannot\MultiColumnEditorBundle\Form\FormMultiColumnEditor;
use HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor;

$GLOBALS['BE_FFL']['multiColumnEditor'] = MultiColumnEditor::class;

/**
 * Frontend form fields
 */
$GLOBALS['TL_FFL']['multiColumnEditor'] = FormMultiColumnEditor::class;

/**
 * RSCE
 */
$GLOBALS['MULTI_COLUMN_EDITOR']['rsce_fields'] = [];

/**
 * Ajax
 */
$GLOBALS['AJAX'][MultiColumnEditor::NAME] = [
    'actions' => [
        MultiColumnEditor::ACTION_ADD_ROW    => [
            'arguments' => ['row', 'field', 'table'],
            'optional'  => [],
        ],
        MultiColumnEditor::ACTION_DELETE_ROW => [
            'arguments' => ['row', 'field', 'table'],
            'optional'  => [],
        ],
        MultiColumnEditor::ACTION_SORT_ROWS => [
            'arguments' => ['field', 'table'],
            'optional'  => [],
        ],
        MultiColumnEditor::ACTION_UPDATE_ROWS    => [
            'arguments' => ['row', 'field', 'table'],
            'optional'  => [],
        ],
    ],
];
