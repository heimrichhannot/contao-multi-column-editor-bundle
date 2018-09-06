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
 * Assets
 */
if (\Contao\System::getContainer()->get('huh.utils.container')->isBackend()) {
    $GLOBALS['TL_JAVASCRIPT']['multi_column_editor'] = 'bundles/heimrichhannotcontaomulticolumneditor/js/multi_column_editor.be.min.js|static';
    $GLOBALS['TL_CSS']['multi_column_editor'] = 'bundles/heimrichhannotcontaomulticolumneditor/css/contao-multi-column-editor-bundle.min.css|static';
}
else
{
    $GLOBALS['TL_JAVASCRIPT']['multi_column_editor'] = 'bundles/heimrichhannotcontaomulticolumneditor/js/multi_column_editor.min.js|static';
}

/**
 * Ajax
 */
$GLOBALS['AJAX'][\HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::NAME] = [
    'actions' => [
        \HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::ACTION_ADD_ROW    => [
            'arguments' => ['.*_rowCount', '.*_row', 'field', 'table'],
            'optional'  => [],
        ],
        \HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::ACTION_DELETE_ROW => [
            'arguments' => ['.*_rowCount', '.*_row', 'field', 'table'],
            'optional'  => [],
        ],
        \HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor::ACTION_SORT_ROWS => [
            'arguments' => ['.*_rowCount', '.*_row', 'field', 'table'],
            'optional'  => [],
        ],
    ],
];
