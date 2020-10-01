<?php

/*
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Controller;

use Contao\CoreBundle\Monolog\ContaoContext;
use Contao\System;
use HeimrichHannot\AjaxBundle\Response\ResponseData;
use HeimrichHannot\AjaxBundle\Response\ResponseSuccess;
use HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor;
use Psr\Log\LogLevel;
use Symfony\Component\DependencyInjection\ContainerInterface;
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
        $this->prepareWidget();
        $this->editor->addRow((int) $this->container->get('huh.request')->getPost('row'));
        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->generate())));

        return $objResponse;
    }

    public function deleteRow()
    {
        $this->prepareWidget();
        $this->editor->deleteRow($this->container->get('huh.request')->getPost('row'));
        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->generate())));

        return $objResponse;
    }

    public function sortRows()
    {
        $this->prepareWidget();
        $this->editor->sortRows();
        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->generate())));

        return $objResponse;
    }

    public function updateRows()
    {
        $this->prepareWidget();
        $this->editor->updateRows();
        $objResponse = new ResponseSuccess();
        $objResponse->setResult(new ResponseData(($this->editor->generate())));

        return $objResponse;
    }

    public function prepareWidget()
    {
        $dc = $this->editor->dataContainer;
        $field = $this->editor->dataContainer->inputName = $this->container->get('huh.request')->getPost('field');
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
                    System::importStatic($callback[0]);
                    $value = $this->{$callback[0]}->{$callback[1]}($value, $this->editor->dataContainer);
                } elseif (\is_callable($callback)) {
                    $value = $callback($value, $this->editor->dataContainer);
                }
            }
        }

        // Set the new value
        $value = $this->container->get('huh.request')->getPost($this->editor->dataContainer->inputName, true);
        $this->editor->value = $value;
    }
}
