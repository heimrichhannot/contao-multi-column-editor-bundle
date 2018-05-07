<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle;

use HeimrichHannot\MultiColumnEditorBundle\DependencyInjection\HeimrichHannotContaoMuliColumnEditorExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class HeimrichHannotContaoMultiColumnEditorBundle extends Bundle
{
    /**
     * {@inheritdoc}
     */
    public function getContainerExtension()
    {
        return new HeimrichHannotContaoMuliColumnEditorExtension();
    }
}
