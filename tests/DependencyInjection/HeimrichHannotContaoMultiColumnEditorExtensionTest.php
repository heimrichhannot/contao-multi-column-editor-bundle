<?php

/*
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Tests\DependencyInjection;

use HeimrichHannot\MultiColumnEditorBundle\DependencyInjection\HeimrichHannotContaoMultiColumnEditorExtension;
use HeimrichHannot\MultiColumnEditorBundle\EventListener\HookListener;
use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBag;

class HeimrichHannotContaoMultiColumnEditorExtensionTest extends TestCase
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
        $this->container = new ContainerBuilder(new ParameterBag(['kernel.debug' => false]));
        $extension = new HeimrichHannotContaoMultiColumnEditorExtension();
        $extension->load([], $this->container);
    }

    /**
     * Tests the object instantiation.
     */
    public function testCanBeInstantiated()
    {
        $extension = new HeimrichHannotContaoMultiColumnEditorExtension();
        $this->assertInstanceOf('HeimrichHannot\MultiColumnEditorBundle\DependencyInjection\HeimrichHannotContaoMultiColumnEditorExtension', $extension);
    }

    /**
     * Tests the huh.multicolumneditor.listener.hooks service.
     */
    public function testRegistersHookListener()
    {
        $this->assertTrue($this->container->has('huh.multicolumneditor.listener.hooks'));

        $definition = $this->container->getDefinition('huh.multicolumneditor.listener.hooks');

        $this->assertSame(HookListener::class, $definition->getClass());
        $this->assertSame('contao.framework', (string) $definition->getArgument(0));
    }
}
