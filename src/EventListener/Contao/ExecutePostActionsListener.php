<?php

namespace HeimrichHannot\MultiColumnEditorBundle\EventListener\Contao;

use Contao\Config;
use Contao\CoreBundle\Exception\ResponseException;
use Contao\CoreBundle\Monolog\ContaoContext;
use Contao\CoreBundle\ServiceAnnotation\Hook;
use Contao\DataContainer;
use Contao\DC_File;
use Contao\Input;
use Contao\System;
use HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor;
use HeimrichHannot\UtilsBundle\Util\Utils;
use Psr\Log\LoggerInterface;
use Psr\Log\LogLevel;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * @Hook("executePostActions")
 */
class ExecutePostActionsListener
{
    private LoggerInterface $logger;
    private RequestStack $requestStack;
    private Utils $utils;

    public function __construct(LoggerInterface $logger, RequestStack $requestStack, Utils $utils)
    {
        $this->logger       = $logger;
        $this->requestStack = $requestStack;
        $this->utils        = $utils;
    }

    public function __invoke(string $action, DataContainer $dc): void
    {
        $request = $this->requestStack->getCurrentRequest();
        if (!$request) {
            return;
        }

        switch ($action) {
            case MultiColumnEditor::ACTION_ADD_ROW:
                $widget = $this->prepareWidgetForExecutePostActions($dc, $request);
                $widget->addRow((int)$request->request->get('row'));
                throw new ResponseException(new Response($widget->generate()));

            case MultiColumnEditor::ACTION_DELETE_ROW:
                $widget = $this->prepareWidgetForExecutePostActions($dc, $request);
                $widget->deleteRow(Input::post('row'));
                throw new ResponseException(new Response($widget->generate()));

            case MultiColumnEditor::ACTION_SORT_ROWS:
                $widget = $this->prepareWidgetForExecutePostActions($dc, $request);
                $widget->sortRows();
                throw new ResponseException(new Response($widget->generate()));

            case MultiColumnEditor::ACTION_UPDATE_ROWS:
                $widget = $this->prepareWidgetForExecutePostActions($dc, $request);
                $widget->updateRows();
                throw new ResponseException(new Response($widget->generate()));
        }
    }

    protected function prepareWidgetForExecutePostActions(DataContainer $dc, Request $request): MultiColumnEditor
    {
        $id = $request->query->get('id');
        $field = $dc->inputName = $request->request->get('field');

        // Handle the keys in "edit multiple" mode
        if ('editAll' === $request->query->get('act')) {
            $id = preg_replace('/.*_([0-9a-zA-Z]+)$/', '$1', $field);
            $field = preg_replace('/(.*)_[0-9a-zA-Z]+$/', '$1', $field);
        }

        $dc->field = $field;

        // The field does not exist
        if (!isset($GLOBALS['TL_DCA'][$dc->table]['fields'][$dc->field])) {
            $this->logger->log(LogLevel::ERROR,
                'Field "'.$field.'" does not exist in DCA "'.$dc->table.'"',
                ['contao' => new ContaoContext(__METHOD__, LogLevel::ERROR)]);

            throw new BadRequestHttpException('Bad request');
        }

        $arrData = $GLOBALS['TL_DCA'][$dc->table]['fields'][$dc->field];

        $value = null;

        // Load the value
        if ('overrideAll' != $request->query->get('act')) {
            if (in_array(
                ($GLOBALS['TL_DCA'][$dc->table]['config']['dataContainer'] ?? ''),
                ['File', DC_File::class]
            )) {
                $value = Config::get($field);
            } elseif ($id > 0) {
                // The record does not exist
                if (null === ($model = $this->utils->model()->findModelInstanceByPk($dc->table, $id))) {
                    $this->logger->log(LogLevel::ERROR,
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
        $value = $request->request->get($dc->inputName);

        /** @var MultiColumnEditor $strClass */
        $strClass = $GLOBALS['BE_FFL']['multiColumnEditor'];

        /* @var MultiColumnEditor $objWidget */
        return new $strClass($strClass::getAttributesFromDca($arrData, $dc->inputName, $value, $dc->field, $dc->table,
            $dc));
    }
}