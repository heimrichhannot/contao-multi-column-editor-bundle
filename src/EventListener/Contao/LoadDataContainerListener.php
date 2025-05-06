<?php

namespace HeimrichHannot\MultiColumnEditorBundle\EventListener\Contao;

use Contao\CoreBundle\ServiceAnnotation\Hook;
use HeimrichHannot\UtilsBundle\Util\Utils;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * @Hook("loadDataContainer")
 */
class LoadDataContainerListener
{
    private Utils $utils;
    private RequestStack $requestStack;

    public function __construct(Utils $utils, RequestStack $requestStack)
    {
        $this->utils = $utils;
        $this->requestStack = $requestStack;
    }

    public function __invoke(string $table): void
    {
        $request = $this->requestStack->getCurrentRequest();
        if (!$request) {
            return;
        }

        if (!isset($GLOBALS['TL_DCA'][$table])) {
            return;
        }

        $dca = &$GLOBALS['TL_DCA'][$table];

        // Assets
        if ($this->utils->container()->isBackend()) {
            $GLOBALS['TL_JAVASCRIPT']['contao-multi-column-editor-bundle'] = 'bundles/heimrichhannotcontaomulticolumneditor/contao-multi-column-editor-bundle.js|static';
        }

        // ajax

        if (!$request->request->has('name') || !is_string($name = $request->request->all()['name'])) {
            return;
        }

        if (isset($dca['fields'][$name])) {
            return;
        }

        $action = $request->request->get('action');

        // support for picker fields -> bypass check in \Contao\Ajax -> comment "The field does not exist" line 282
        $pickerActions = ['reloadPicker', 'reloadPagetree', 'reloadFiletree'];

        if (!\in_array($action, $pickerActions) || 'fieldpalette' === $table || isset($dca['fields'][$name])) {
            return;
        }

        if ($names = $this->isMceField($name, $dca, $table)) {
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
            if ('multiColumnEditor' !== ($data['inputType'] ?? null) || !isset($data['eval']['multiColumnEditor']['fields'])) {
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