<?php

/*
 * Copyright (c) 2021 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Controller;

use Contao\CoreBundle\Monolog\ContaoContext;
use Contao\Input;
use Contao\System;
use HeimrichHannot\AjaxBundle\Response\ResponseData;
use HeimrichHannot\AjaxBundle\Response\ResponseSuccess;
use HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor;
use Psr\Log\LogLevel;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AjaxController
{
    /**
     * @var MultiColumnEditor
     */
    protected $editor;

    /** @var ContainerInterface */
    protected $container;

    public function __construct(MultiColumnEditor $editor, ContainerInterface $container)
    {
        $this->editor = $editor;
        $this->container = $container;
    }

    public function addRow()
    {
        $request = System::getContainer()->get('request_stack')->getCurrentRequest();
        $this->prepareWidget($request);
        $this->editor->addRow((int) $request->request->get('row'));
        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->generate())));

        return $objResponse;
    }

    public function deleteRow()
    {
        $request = System::getContainer()->get('request_stack')->getCurrentRequest();
        $this->prepareWidget($request);
        // Fix an issue in contao StringUtil (see https://github.com/contao/contao/issues/2468, can be reverted when issue is fixed by contao)
        $row = $request->request->get('row') ?: ('0' === Input::post('row') ? Input::post('row') : null);
        $this->editor->deleteRow($row);
        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->generate())));

        return $objResponse;
    }

    public function sortRows()
    {
        $request = System::getContainer()->get('request_stack')->getCurrentRequest();
        $this->prepareWidget($request);
        $this->editor->sortRows();
        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->generate())));

        return $objResponse;
    }

    public function updateRows()
    {
        $request = System::getContainer()->get('request_stack')->getCurrentRequest();
        $this->prepareWidget($request);
        $this->editor->updateRows();
        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->generate())));

        return $objResponse;
    }

    public function prepareWidget(Request $request)
    {
        $field = $request->request->get('field');
        $this->editor->dataContainer->inputName = $field;
        $this->editor->dataContainer->field = $field;

        // The field does not exist
        if (!isset($GLOBALS['TL_DCA'][$this->editor->dataContainer->table]['fields'][$this->editor->dataContainer->field])) {
            $this->container->get('monolog.logger.contao')->log(LogLevel::ERROR, 'Field "'.$field.'" does not exist in DCA "'.$this->editor->dataContainer->table.'"', ['contao' => new ContaoContext(__METHOD__, LogLevel::ERROR)]);

            throw new BadRequestHttpException('Bad request');
        }

        $arrData = $GLOBALS['TL_DCA'][$this->editor->dataContainer->table]['fields'][$this->editor->dataContainer->field];

        $value = $this->editor->dataContainer->activeRecord->{$field};

        // Call the load_callback
        if (isset($arrData['load_callback']) && \is_array($arrData['load_callback'])) {
            foreach ($arrData['load_callback'] as $callback) {
                if (\is_array($callback)) {
                    $value = System::importStatic($callback[0])->{$callback[1]}($value, $this->editor->dataContainer);
                } elseif (\is_callable($callback)) {
                    $value = $callback($value, $this->editor->dataContainer);
                }
            }
        }

        // Set the new value
        $value = $request->request->get($this->editor->dataContainer->inputName);
        $this->editor->value = $value;
    }
}
