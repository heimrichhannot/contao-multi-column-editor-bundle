<?php

namespace HeimrichHannot\MultiColumnEditorBundle\EventListener\Contao;

use Contao\CoreBundle\DependencyInjection\Attribute\AsHook;
use Contao\DataContainer;

#[AsHook('getAttributesFromDca')]
class GetAttributesFromDcaListener
{
    public function __invoke(array $attributes, $context = null): array
    {
        if (str_contains($attributes['id'], '[') && $context instanceof DataContainer) {
            $field = substr($context->field, 0, strpos($context->field, '['));

            // Make sure it is actually an MCE field to not interfere with other extensions
            if (isset($GLOBALS['TL_DCA'][$context->table]['fields'][$field]['inputType'])
                && $GLOBALS['TL_DCA'][$context->table]['fields'][$field]['inputType'] === 'multiColumnEditor') {
                $attributes['id'] = str_replace(['][', '[', ']'], ['_', '_', ''], $attributes['id']);
            }
        }

        return $attributes;
    }
}