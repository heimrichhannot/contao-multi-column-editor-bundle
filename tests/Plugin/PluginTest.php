<?php

/*
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Test\ContaoManager;

use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\DelegatingParser;
use Contao\ManagerPlugin\Config\ContainerBuilder;
use Contao\ManagerPlugin\PluginLoader;
use Contao\TestCase\ContaoTestCase;
use HeimrichHannot\MultiColumnEditorBundle\ContaoManager\Plugin;
use HeimrichHannot\MultiColumnEditorBundle\HeimrichHannotContaoMultiColumnEditorBundle;

/**
 * Test the plugin class
 * Class PluginTest.
 */
class PluginTest extends ContaoTestCase
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

        $this->container = new ContainerBuilder($this->mockPluginLoader($this->never()), []);
    }

    /**
     * Tests the object instantiation.
     */
    public function testInstantiation()
    {
        static::assertInstanceOf(Plugin::class, new Plugin());
    }

    /**
     * Tests the bundle contao invocation.
     */
    public function testGetBundles()
    {
        $plugin = new Plugin();

        /** @var BundleConfig[] $bundles */
        $bundles = $plugin->getBundles(new DelegatingParser());

        static::assertCount(1, $bundles);
        static::assertInstanceOf(BundleConfig::class, $bundles[0]);
        static::assertSame(HeimrichHannotContaoMultiColumnEditorBundle::class, $bundles[0]->getName());
        static::assertSame([ContaoCoreBundle::class, 'multi_column_editor'], $bundles[0]->getLoadAfter());
    }

    /**
     * Test extend configuration.
     */
    public function testGetExtensionConfigEnableFormPlugin()
    {
        $plugin = new Plugin();

        $extensionConfigs = $plugin->getExtensionConfig('huh_encore', [[]], $this->container);

        $this->assertNotEmpty($extensionConfigs);
        $this->assertArrayHasKey(0, $extensionConfigs);
        $this->assertArrayHasKey('huh', $extensionConfigs);
        $this->assertArrayHasKey('encore', $extensionConfigs['huh']);
        $this->assertNotEmpty($extensionConfigs['huh']['encore']['entries']);
        $this->assertSame(['name' => 'contao-multi-column-editor-bundle', 'file' => 'vendor/heimrichhannot/contao-multi-column-editor-bundle/src/Resources/public/js/contao-multi-column-editor-bundle.es6.js'], $extensionConfigs['huh']['encore']['entries'][0]);
        $this->assertSame('multi_column_editor', $extensionConfigs['huh']['encore']['legacy']['js'][0]);
    }

    /**
     * Mocks the plugin loader.
     *
     * @return PluginLoader|\PHPUnit_Framework_MockObject_MockObject
     */
    private function mockPluginLoader(\PHPUnit_Framework_MockObject_Matcher_InvokedCount $expects, array $plugins = [])
    {
        $pluginLoader = $this->createMock(PluginLoader::class);

        $pluginLoader->expects($expects)->method('getInstancesOf')->with(PluginLoader::EXTENSION_PLUGINS)->willReturn($plugins);

        return $pluginLoader;
    }
}
