<?php

/*
 * Copyright (c) 2023 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Asset;

use HeimrichHannot\EncoreContracts\PageAssetsTrait;
use HeimrichHannot\UtilsBundle\Util\Utils;
use Symfony\Contracts\Service\ServiceSubscriberInterface;

class MceAssets implements ServiceSubscriberInterface
{
    use PageAssetsTrait;

    private Utils $utils;

    public function __construct(Utils $utils)
    {
        $this->utils = $utils;
    }

    public function addAssets()
    {
        $GLOBALS['TL_JAVASCRIPT']['contao-multi-column-editor-bundle'] = 'bundles/heimrichhannotcontaomulticolumneditor/contao-multi-column-editor-bundle.js|static';

        if ($this->utils->container()->isBackend()) {
            $GLOBALS['TL_CSS']['contao-multi-column-editor-bundle'] = 'bundles/heimrichhannotcontaomulticolumneditor/contao-multi-column-editor-bundle-be.css|static';
        } else {
            $this->addPageEntrypoint('contao-multi-column-editor-bundle', [
                'TL_JAVASCRIPT' => [
                    'sortablejs' => 'assets/sortablejs/sortablejs/Sortable.min.js|static',
                ],
            ]);
        }
    }
}
