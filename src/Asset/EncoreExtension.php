<?php

/*
 * Copyright (c) 2023 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Asset;

use HeimrichHannot\EncoreContracts\EncoreEntry;
use HeimrichHannot\EncoreContracts\EncoreExtensionInterface;
use HeimrichHannot\MultiColumnEditorBundle\HeimrichHannotContaoMultiColumnEditorBundle;

class EncoreExtension implements EncoreExtensionInterface
{
    /**
     * {@inheritDoc}
     */
    public function getBundle(): string
    {
        return HeimrichHannotContaoMultiColumnEditorBundle::class;
    }

    /**
     * {@inheritDoc}
     */
    public function getEntries(): array
    {
        return [
            EncoreEntry::create('contao-multi-column-editor-bundle', 'src/Resources/assets/js/contao-multi-column-editor-bundle.js')
                ->addJsEntryToRemoveFromGlobals('sortablejs')
                ->addJsEntryToRemoveFromGlobals('contao-multi-column-editor-bundle'),
        ];
    }
}
