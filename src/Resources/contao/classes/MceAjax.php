<?php

namespace HeimrichHannot\MultiColumnEditor;


use HeimrichHannot\Ajax\Response\ResponseData;
use HeimrichHannot\Ajax\Response\ResponseSuccess;
use HeimrichHannot\Request\Request;

class MceAjax
{
    protected $objDc;

    public function __construct($objDc)
    {
        $this->objDc = $objDc;
    }

    public function addRow()
    {
        return $this->doAction(MultiColumnEditor::ACTION_ADD_ROW);
    }

    public function deleteRow()
    {
        return $this->doAction(MultiColumnEditor::ACTION_DELETE_ROW);
    }

    public function doAction($strAction)
    {
        $strField = Request::getPost('field');
        $strTable = Request::getPost('table');
        $varValue = $this->objDc->activeRecord->{$strField};

        if (!$strField || !$strTable)
        {
            header('HTTP/1.1 400 Bad Request');
            die('Bad Request');
        }

        $objResponse = new ResponseSuccess();
        $objResponse->setResult(
            new ResponseData(
                MultiColumnEditor::generateEditorForm(
                    'multi_column_editor',
                    $strTable,
                    $strField,
                    $varValue,
                    $this->objDc,
                    null,
                    null,
                    $strAction
                )
            )
        );

        return $objResponse;
    }
}