<?php

/*
 * Copyright (c) 2019 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Controller;

use Contao\System;
use HeimrichHannot\AjaxBundle\Response\ResponseData;
use HeimrichHannot\AjaxBundle\Response\ResponseError;
use HeimrichHannot\AjaxBundle\Response\ResponseSuccess;
use HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor;

class AjaxController
{
    /**
     * @var MultiColumnEditor
     */
    protected $editor;

    public function __construct(MultiColumnEditor $editor)
    {
        $this->editor = $editor;
    }

    public function addRow()
    {
        return $this->doAction(MultiColumnEditor::ACTION_ADD_ROW);
    }

    public function deleteRow()
    {
        return $this->doAction(MultiColumnEditor::ACTION_DELETE_ROW);
    }

    public function sortRows()
    {
        return $this->doAction(MultiColumnEditor::ACTION_SORT_ROWS);
    }

    public function doAction($strAction)
    {
        $strField = System::getContainer()->get('huh.request')->getPost('field');
        $strTable = System::getContainer()->get('huh.request')->getPost('table');
        $varValue = $this->editor->dataContainer->activeRecord->{$strField};

        if (!$strField || !$strTable) {
            return new ResponseError('Bad Request');
        }

        $this->editor->strField = $strField;
        $this->editor->strTable = $strTable;
        $this->editor->value = $varValue;

        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->setAction($strAction)->generate())));

        return $objResponse;
    }
}
