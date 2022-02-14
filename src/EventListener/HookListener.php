<?php

/*
 * Copyright (c) 2022 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\EventListener;

use Contao\Config;
use Contao\CoreBundle\Exception\ResponseException;
use Contao\CoreBundle\Monolog\ContaoContext;
use Contao\DataContainer;
use Contao\Input;
use Contao\System;
use HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor;
use HeimrichHannot\UtilsBundle\Container\ContainerUtil;
use Psr\Log\LogLevel;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class HookListener
{
    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * Constructor.
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * Add custom logic via the post actions hook.
     */
    public function executePostActionsHook(string $action, DataContainer $dc)
    {
        switch ($action) {
            case MultiColumnEditor::ACTION_ADD_ROW:
                $widget = $this->prepareWidgetForExecutePostActions($dc);
                $widget->addRow((int) $this->container->get('huh.request')->getPost('row'));

                throw new ResponseException(new Response($widget->generate()));

                break;

            case MultiColumnEditor::ACTION_DELETE_ROW:
                $widget = $this->prepareWidgetForExecutePostActions($dc);
                $widget->deleteRow(Input::post('row'));

                throw new ResponseException(new Response($widget->generate()));

                break;

            case MultiColumnEditor::ACTION_SORT_ROWS:
                $widget = $this->prepareWidgetForExecutePostActions($dc);
                $widget->sortRows();

                throw new ResponseException(new Response($widget->generate()));

                break;

            case MultiColumnEditor::ACTION_UPDATE_ROWS:
                $widget = $this->prepareWidgetForExecutePostActions($dc);
                $widget->updateRows();

                throw new ResponseException(new Response($widget->generate()));

                break;
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

        // Assets
        if ($this->container->get(ContainerUtil::class)->isBackend()) {
            $GLOBALS['TL_JAVASCRIPT']['contao-multi-column-editor-bundle'] = 'bundles/heimrichhannotcontaomulticolumneditor/contao-multi-column-editor-bundle.js|static';
        }

        // ajax
        if (!($name = System::getContainer()->get('huh.request')->getPost('name'))) {
            return;
        }

        if (\is_array($name)) {
            return;
        }

        if (isset($dca['fields'][$name])) {
            return;
        }

        $action = System::getContainer()->get('huh.request')->getPost('action');

        // support for picker fields -> bypass check in \Contao\Ajax -> comment "The field does not exist" line 282
        $pickerActions = ['reloadPicker', 'reloadPagetree', 'reloadFiletree'];

        if (!\in_array($action, $pickerActions) || 'fieldpalette' === $strTable || isset($dca['fields'][$name])) {
            return;
        }

        if ($names = $this->isMceField($name, $dca, $strTable)) {
            $mceField = &$dca['fields'][$names['dcaFieldName']]['eval']['multiColumnEditor']['fields'][$names['mceFieldName']];

            $dca['fields'][$name] = [];

            if (isset($mceField['eval'])) {
                $dca['fields'][$name]['eval'] = $mceField['eval'];
            }

            if (isset($mceField['foreignKey'])) {
                $dca['fields'][$name]['foreignKey'] = $mceField['foreignKey'];
            }

            if (isset($mceField['relation'])) {
                $dca['fields'][$name]['relation'] = $mceField['relation'];
            }
        }
    }

    protected function prepareWidgetForExecutePostActions(DataContainer $dc): MultiColumnEditor
    {
        $id = $this->container->get('huh.request')->getGet('id');
        $field = $dc->inputName = $this->container->get('huh.request')->getPost('field');

        // Handle the keys in "edit multiple" mode
        if ('editAll' == $this->container->get('huh.request')->getGet('act')) {
            $id = preg_replace('/.*_([0-9a-zA-Z]+)$/', '$1', $field);
            $field = preg_replace('/(.*)_[0-9a-zA-Z]+$/', '$1', $field);
        }

        $dc->field = $field;

        // The field does not exist
        if (!isset($GLOBALS['TL_DCA'][$dc->table]['fields'][$dc->field])) {
            $this->container->get('monolog.logger.contao')->log(LogLevel::ERROR,
                'Field "'.$field.'" does not exist in DCA "'.$dc->table.'"',
                ['contao' => new ContaoContext(__METHOD__, LogLevel::ERROR)]);

            throw new BadRequestHttpException('Bad request');
        }

        $arrData = $GLOBALS['TL_DCA'][$dc->table]['fields'][$dc->field];

        $value = null;

        // Load the value
        if ('overrideAll' != $this->container->get('huh.request')->getGet('act')) {
            if ('File' == $GLOBALS['TL_DCA'][$dc->table]['config']['dataContainer']) {
                $value = Config::get($field);
            } elseif ($id > 0) {
                // The record does not exist
                if (null === ($model = $this->container->get('huh.utils.model')->findModelInstanceByPk($dc->table,
                        $id))) {
                    $this->container->get('monolog.logger.contao')->log(LogLevel::ERROR,
                        'A record with the ID "'.$id.'" does not exist in table "'.$dc->table.'"',
                        ['contao' => new ContaoContext(__METHOD__, LogLevel::ERROR)]);

                    throw new BadRequestHttpException('Bad request');
                }

                $value = $model->{$field};
                $dc->activeRecord = $model;
            }
        }

        // Call the load_callback
        if (isset($arrData['load_callback']) && \is_array($arrData['load_callback'])) {
            foreach ($arrData['load_callback'] as $callback) {
                if (\is_array($callback)) {
                    $callbackObj = System::importStatic($callback[0]);
                    $value = $callbackObj->{$callback[1]}($value, $dc);
                } elseif (\is_callable($callback)) {
                    $value = $callback($value, $dc);
                }
            }
        }

        // Set the new value
        $value = $this->container->get('huh.request')->getPost($dc->inputName, true);

        /** @var MultiColumnEditor $strClass */
        $strClass = $GLOBALS['BE_FFL']['multiColumnEditor'];

        /* @var MultiColumnEditor $objWidget */
        return new $strClass($strClass::getAttributesFromDca($arrData, $dc->inputName, $value, $dc->field, $dc->table,
            $dc));
    }

    protected function isMceField($name, $dca, $table): ?array
    {
        $isMce = false;

        // <mceField>[<digit>][<row field>], e.g. hotels[0][image]
        if (1 !== preg_match('/^([^\[]+)\[\d+\]\[([^\[\]]+)\]$/i', $name, $matches)) {
            return null;
        }

        $cleanedName = $matches[2];
        $dcaFieldName = $matches[1];

        $mceFieldArrays = [];

        if (isset($GLOBALS['MULTI_COLUMN_EDITOR']['rsce_fields'][$table]) && \is_array($GLOBALS['MULTI_COLUMN_EDITOR']['rsce_fields'][$table]) && \in_array($cleanedName,
                $GLOBALS['MULTI_COLUMN_EDITOR']['rsce_fields'][$table])) {
            return ['mceFieldName' => $cleanedName, 'dcaFieldName' => $dcaFieldName];
        }

        foreach ($dca['fields'] as $field => $data) {
            if ('multiColumnEditor' !== $data['inputType'] || !isset($data['eval']['multiColumnEditor']['fields'])) {
                continue;
            }

            $mceFieldArrays[$field] = $data;
        }

        if (empty($mceFieldArrays)) {
            return null;
        }

        foreach ($mceFieldArrays as $field => $mceData) {
            if (\in_array(preg_replace('/^'.$field.'_/', '', $cleanedName),
                array_keys($mceData['eval']['multiColumnEditor']['fields']), true)) {
                return ['mceFieldName' => $cleanedName, 'dcaFieldName' => $dcaFieldName];
            }
        }

        return null;
    }
}
