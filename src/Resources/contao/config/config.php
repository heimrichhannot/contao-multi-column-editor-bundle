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
 * CSS
 */
if (\Contao\System::getContainer()->get('huh.utils.container')->isBackend()) {
    $GLOBALS['TL_CSS']['multi_column_editor'] = 'bundles/heimrichhannotmulticolumneditor/js/contao-multi-column-editor-bundle.min.css|static';
}

/**
 * JS
 */
if (\HeimrichHannot\Haste\Util\Container::isBackend()) {
    $GLOBALS['TL_JAVASCRIPT']['multi_column_editor'] = 'bundles/heimrichhannotmulticolumneditor/js/jquery.multi_column_editor.be.min.js|static';
}
else
{
    $GLOBALS['TL_JAVASCRIPT']['multi_column_editor'] = 'bundles/heimrichhannotmulticolumneditor/js/jquery.multi_column_editor.fe.min.js|static';
}

/**
 * Ajax
 */
$GLOBALS['AJAX'][\HeimrichHannot\MultiColumnEditor\MultiColumnEditor::NAME] = [
    'actions' => [
        \HeimrichHannot\MultiColumnEditor\MultiColumnEditor::ACTION_ADD_ROW    => [
            'arguments' => ['.*_rowCount', '.*_row', 'field', 'table'],
            'optional'  => [],
        ],
        \HeimrichHannot\MultiColumnEditor\MultiColumnEditor::ACTION_DELETE_ROW => [
            'arguments' => ['.*_rowCount', '.*_row', 'field', 'table'],
            'optional'  => [],
        ],
    ],
];