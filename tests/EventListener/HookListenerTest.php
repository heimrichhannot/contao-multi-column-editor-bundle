<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Tests\EventListener;

use Contao\ManagerPlugin\Config\ContainerBuilder;
use Contao\TestCase\ContaoTestCase;
use HeimrichHannot\MultiColumnEditorBundle\EventListener\HookListener;

class HookListenerTest extends ContaoTestCase
{
    /**
     * @var ContainerBuilder
     */
    private $container;

    /**
     * {@inheritdoc}
     */
    protected function setUp()
    {
        parent::setUp();

        $this->container = $this->mockContainer();
    }

    /**
     * Tests the object instantiation.
     */
    public function testInstantiation()
    {
        static::assertInstanceOf(HookListener::class, new HookListener($this->mockContaoFramework()));
    }
}
