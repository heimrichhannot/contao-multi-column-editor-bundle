<?php
/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @author  Thomas Körner <t.koerner@heimrich-hannot.de>
 * @license http://www.gnu.org/licences/lgpl-3.0.html LGPL
 */


namespace HeimrichHannot\MultiColumnEditorBundle\Asset;


use HeimrichHannot\UtilsBundle\Container\ContainerUtil;

class MceAssets
{
    /**
     * @var ContainerUtil
     */
    protected $containerUtil;
    /**
     * @var \HeimrichHannot\EncoreBundle\Asset\FrontendAsset
     */
    protected $encoreFrontendAsset;

    /**
     * MceAssets constructor.
     */
    public function __construct(ContainerUtil $containerUtil)
    {
        $this->containerUtil = $containerUtil;
    }

    /**
     * @param \HeimrichHannot\EncoreBundle\Asset\FrontendAsset $encoreFrontendAsset
     */
    public function setEncoreFrontendAsset(\HeimrichHannot\EncoreBundle\Asset\FrontendAsset $encoreFrontendAsset): void
    {
        $this->encoreFrontendAsset = $encoreFrontendAsset;
    }

    public function addAssets()
    {
        if ($this->containerUtil->isBackend()) {
            $GLOBALS['TL_CSS']['contao-multi-column-editor-bundle'] = 'bundles/heimrichhannotcontaomulticolumneditor/contao-multi-column-editor-bundle-be.css|static';
        } else {
            $GLOBALS['TL_JAVASCRIPT']['sortablejs'] = 'assets/sortablejs/sortablejs/Sortable.min.js|static';
            if ($this->encoreFrontendAsset) {
                $this->encoreFrontendAsset->addActiveEntrypoint('contao-multi-column-editor-bundle');
            }
        }

        $GLOBALS['TL_JAVASCRIPT']['contao-multi-column-editor-bundle'] = 'bundles/heimrichhannotcontaomulticolumneditor/contao-multi-column-editor-bundle.js|static';
    }
}