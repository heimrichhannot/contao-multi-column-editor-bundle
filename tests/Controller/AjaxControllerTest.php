<?php

/*
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\MultiColumnEditorBundle\Tests\Controller;

use Contao\CoreBundle\Config\ResourceFinder;
use Contao\CoreBundle\Framework\ContaoFrameworkInterface;
use Contao\CoreBundle\Routing\ScopeMatcher;
use Contao\ManagerPlugin\Config\ContainerBuilder;
use Contao\Model;
use Contao\System;
use Contao\TestCase\ContaoTestCase;
use Contao\Widget;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Platforms\MySqlPlatform;
use Doctrine\DBAL\Schema\MySqlSchemaManager;
use HeimrichHannot\AjaxBundle\Manager\AjaxActionManager;
use HeimrichHannot\AjaxBundle\Manager\AjaxManager;
use HeimrichHannot\AjaxBundle\Manager\AjaxTokenManager;
use HeimrichHannot\AjaxBundle\Response\Response;
use HeimrichHannot\MultiColumnEditorBundle\Controller\AjaxController;
use HeimrichHannot\MultiColumnEditorBundle\Widget\MultiColumnEditor;
use HeimrichHannot\RequestBundle\Component\HttpFoundation\Request;
use HeimrichHannot\UtilsBundle\Container\ContainerUtil;
use HeimrichHannot\UtilsBundle\Driver\DC_Table_Utils;
use HeimrichHannot\UtilsBundle\Form\FormUtil;
use HeimrichHannot\UtilsBundle\Template\TemplateUtil;
use HeimrichHannot\UtilsBundle\Url\UrlUtil;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\HttpFoundation\RequestMatcher;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\Storage\MockArraySessionStorage;
use Symfony\Component\HttpKernel\Config\FileLocator;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Routing\RouterInterface;

class AjaxControllerTest extends ContaoTestCase
{
    /**
     * @var ContainerBuilder
     */
    private $container;

    /**
     * @var Kernel
     */
    private $kernel;

    /**
     * @var ContaoFrameworkInterface
     */
    private $framework;

    /**
     * {@inheritdoc}
     */
    public function setUp(): void
    {
        parent::setUp();

//        if (!\defined('TL_ROOT')) {
//            \define('TL_ROOT', $this->getFixturesDir());
//        }
//
//        if (!\defined('TL_MODE')) {
//            \define('TL_MODE', 'FE');
//        }
//
        $GLOBALS['TL_DCA']['tl_test'] = [
            'fields' => [
                'test' => [
                    'label' => &$GLOBALS['TL_LANG']['tl_test']['someField'],
                    'inputType' => 'multiColumnEditor',
                    'eval' => [
                        'multiColumnEditor' => [
                            // set to true if the rows should be sortable (backend only atm)
                            'sortable' => true,
                            'class' => 'some-class',
                            // set to 0 if it should also be possible to have *no* row (default: 1)
                            'minRowCount' => 2,
                            // set to 0 if an infinite number of rows should be possible (default: 0)
                            'maxRowCount' => 5,
                            // defaults to false
                            'skipCopyValuesOnAdd' => false,
                            'editorTemplate' => '@HeimrichHannotContaoMultiColumnEditor/multi_column_editor_frontend_default.html.twig',
                            'fields' => [
                                // place your fields here as you would normally in your DCA
                                // (sql is not required)
                                'field1' => [
                                    'label' => 'field 1',
                                    'inputType' => 'text',
                                    'eval' => ['groupStyle' => 'width:150px'],
                                ],
                            ],
                        ],
                    ],
                    'sql' => 'blob NULL',
                ],
            ],
        ];
//
//        $widget = $this->mockAdapter(['getAttributesFromDca']);
//        $widget->method('getAttributesFromDca')->willReturn([]);
//
//        $this->framework = $this->mockContaoFramework([Widget::class => $widget]);
//
//        $this->container = $this->mockContainer();
//
//        $finder = new ResourceFinder(([
//            $this->getFixturesDir(),
//        ]));
//
//        $this->container->set('contao.resource_finder', $finder);
//
//        $this->container->setParameter('kernel.debug', true);
//        $this->container->setParameter('kernel.default_locale', 'de');
//
//        System::setContainer($this->container);
//
//        $GLOBALS['TL_FFL']['hidden'] = 'Contao\FormHidden';
//
//        $this->kernel = $this->createMock(Kernel::class);
//        $this->kernel->method('getContainer')->willReturn($this->container);
//
//        $fileLocator = new FileLocator($this->kernel);
//
//        $backendMatcher = new RequestMatcher('/contao', 'test.com', null, ['192.168.1.0']);
//        $frontendMatcher = new RequestMatcher('/index', 'test.com', null, ['192.168.1.0']);
//        $scopeMatcher = new ScopeMatcher($backendMatcher, $frontendMatcher);
//
//        $this->container->set('huh.utils.container', new ContainerUtil($this->container, $fileLocator, $scopeMatcher));
//
//        $this->container->set('kernel', $this->kernel);
//
//        $this->container->set('huh.ajax.action', new AjaxActionManager());
//        $this->container->set('huh.ajax', new AjaxManager());
//        $this->container->set('huh.utils.url', new UrlUtil($this->framework));
//        $this->container->set('huh.utils.form', new FormUtil($this->container, $this->framework));
//        $this->container->set('huh.utils.template', new TemplateUtil($this->framework, $this->kernel));
//
//        $twig = $this->createMock('Twig_Environment');
//
//        $twig
//            ->method('render')
//            ->willReturn('foo');
//
//        $this->container->set('twig', $twig);
//
//        global $objPage;
//
//        $objPage = new \stdClass();
//        $objPage->outputFormat = '';
//
//        // required within Contao\Widget::getAttributesFromDca()
//        if (!\function_exists('array_is_assoc')) {
//            include_once __DIR__.'/../../vendor/contao/core-bundle/src/Resources/contao/helper/functions.php';
//        }
//
//        if (!interface_exists('listable')) {
//            include_once __DIR__.'/../../vendor/contao/core-bundle/src/Resources/contao/helper/interface.php';
//        }
    }

    public function createTestInstance(array $parameter = [])
    {
        if (!isset($parameter['editor'])) {
            /* @var MultiColumnEditor|MockObject */
            $parameter['editor'] = $this->createMock(MultiColumnEditor::class);
        }
        $container = $this->mockContainer();

        if (isset($parameter['services']) && \is_array($parameter['services'])) {
            foreach ($parameter['services'] as $name => $service) {
                $container->set($name, $service);
            }
        }
        $instance = new AjaxController($parameter['editor'], $container);

        return $instance;
    }

    /**
     * Tests the object instantiation.
     */
    public function testCanBeInstantiated()
    {
        $instance = $this->createTestInstance();
        $this->assertInstanceOf(AjaxController::class, $instance);
    }

    /**
     * Tests addRow().
     */
    public function testAddRowWithoutFields()
    {
        $session = new Session(new MockArraySessionStorage());
        $request = $this->createMock(Request::class);
        $request->method('getPost')->willReturnCallback(function ($key) {
            switch ($key) {
               case 'field':
                   return 'test';

               case 'row':
                   return 1;
           }

            return null;
        });
        $request->method('getSession')->willReturn($session);
        $request->method('hasSession')->willReturn(true);

        $dataContainer = new \stdClass();
        $dataContainer->table = 'tl_test';
        $dataContainer->activeRecord = $this->mockClassWithProperties(Model::class, ['test' => 1]);
        /** @var MultiColumnEditor|MockObject */
        $editor = $this->mockClassWithProperties(MultiColumnEditor::class, [
            'dataContainer' => $dataContainer,
        ]);

        $instance = $this->createTestInstance([
            'services' => [
                'huh.request' => $request,
//                'huh.ajax.token' => new AjaxTokenManager(),
                'session' => $session,
            ],
            'editor' => $editor,
        ]);
        $responce = $instance->addRow();
        $this->assertInstanceOf(Response::class, $responce);
//
//        System::setContainer($this->container);
//
//        $masterRequest = new \Symfony\Component\HttpFoundation\Request();
//
//        $requestStack = new RequestStack();
//        $requestStack->push($masterRequest);
//
//        $this->container->set('request_stack', $requestStack);
//
//        $backendMatcher = new RequestMatcher('/contao', 'test.com', null, ['192.168.1.0']);
//        $frontendMatcher = new RequestMatcher('/index', 'test.com', null, ['192.168.1.0']);
//
//        $scopeMatcher = new ScopeMatcher($backendMatcher, $frontendMatcher);
//
//        $request = new Request($this->framework, $requestStack, $scopeMatcher);
//
//        $this->container->set('huh.request', $request);
//
//        $connection = $this->createMock(Connection::class);
//        $connection
//            ->method('getDatabasePlatform')
//            ->willReturn(new MySqlPlatform());
//
//        $connection
//            ->expects(!empty($metadata) ? $this->once() : $this->never())
//            ->method('getSchemaManager')
//            ->willReturn(new MySqlSchemaManager($connection));
//
//        $router = $this->createMock(RouterInterface::class);
//
//        $this->container->set('router', $router);
//
//        $this->container->set('database_connection', $connection);
//
//        $session = new Session(new MockArraySessionStorage());
//        $this->container->set('session', $session);
//
//        $model = $this->mockClassWithProperties(Model::class, ['test' => 1]);
//
//        $this->container->set('huh.ajax.token', new AjaxTokenManager());
//
//        $dc = new DC_Table_Utils('tl_test');
//        $dc->activeRecord = $model;
//
//        $instance = new AjaxController(new MultiColumnEditor(['strTable' => 'tl_test', 'strField' => 'test', 'dataContainer' => $dc]));
//        $this->assertInstanceOf(Response::class, $instance->addRow());
    }

    /**
     * Tests addRow().
     */
    public function testAddRow()
    {
        error_reporting(E_ALL & ~E_NOTICE); //Report all errors except E_NOTICE

        System::setContainer($this->container);

        $masterRequest = new \Symfony\Component\HttpFoundation\Request();
        $masterRequest->request->set('field', 'test');
        $masterRequest->request->set('table', 'tl_test');

        $requestStack = new RequestStack();
        $requestStack->push($masterRequest);

        $this->container->set('request_stack', $requestStack);

        $backendMatcher = new RequestMatcher('/contao', 'test.com', null, ['192.168.1.0']);
        $frontendMatcher = new RequestMatcher('/index', 'test.com', null, ['192.168.1.0']);

        $scopeMatcher = new ScopeMatcher($backendMatcher, $frontendMatcher);

        $request = new Request($this->framework, $requestStack, $scopeMatcher);

        $this->container->set('huh.request', $request);

        $connection = $this->createMock(Connection::class);
        $connection
            ->method('getDatabasePlatform')
            ->willReturn(new MySqlPlatform());

        $connection
            ->expects(!empty($metadata) ? $this->once() : $this->never())
            ->method('getSchemaManager')
            ->willReturn(new MySqlSchemaManager($connection));

        $router = $this->createMock(RouterInterface::class);

        $this->container->set('router', $router);
        $this->container->set('database_connection', $connection);

        $session = new Session(new MockArraySessionStorage());
        $this->container->set('session', $session);

        $model = $this->mockClassWithProperties(Model::class, ['test' => 1]);

        $this->container->set('huh.ajax.token', new AjaxTokenManager());

        $dc = new DC_Table_Utils('tl_test');
        $dc->field = 'test';
        $dc->value = 1;
        $dc->activeRecord = $model;

        $instance = new AjaxController(new MultiColumnEditor(['strTable' => 'tl_test', 'strField' => 'test', 'strName' => 'test', 'dataContainer' => $dc]));
        $response = $instance->addRow();
        $this->assertInstanceOf(Response::class, $response);

        $this->assertSame('<div class="multi-column-editor-wrapper">foo</div>', $response->getResult()->getHtml());
    }

    /**
     * Tests deleteRow().
     */
    public function testDeleteRow()
    {
        error_reporting(E_ALL & ~E_NOTICE); //Report all errors except E_NOTICE

        System::setContainer($this->container);

        $masterRequest = new \Symfony\Component\HttpFoundation\Request();
        $masterRequest->request->set('field', 'test');
        $masterRequest->request->set('table', 'tl_test');

        $requestStack = new RequestStack();
        $requestStack->push($masterRequest);

        $this->container->set('request_stack', $requestStack);

        $backendMatcher = new RequestMatcher('/contao', 'test.com', null, ['192.168.1.0']);
        $frontendMatcher = new RequestMatcher('/index', 'test.com', null, ['192.168.1.0']);

        $scopeMatcher = new ScopeMatcher($backendMatcher, $frontendMatcher);

        $request = new Request($this->framework, $requestStack, $scopeMatcher);

        $this->container->set('huh.request', $request);

        $connection = $this->createMock(Connection::class);
        $connection
            ->method('getDatabasePlatform')
            ->willReturn(new MySqlPlatform());

        $connection
            ->expects(!empty($metadata) ? $this->once() : $this->never())
            ->method('getSchemaManager')
            ->willReturn(new MySqlSchemaManager($connection));

        $router = $this->createMock(RouterInterface::class);

        $this->container->set('router', $router);
        $this->container->set('database_connection', $connection);

        $session = new Session(new MockArraySessionStorage());
        $this->container->set('session', $session);

        $model = $this->mockClassWithProperties(Model::class, ['test' => 1]);

        $this->container->set('huh.ajax.token', new AjaxTokenManager());

        $dc = new DC_Table_Utils('tl_test');
        $dc->field = 'test';
        $dc->value = 1;
        $dc->activeRecord = $model;

        $instance = new AjaxController(new MultiColumnEditor(['strTable' => 'tl_test', 'strField' => 'test', 'strName' => 'test', 'dataContainer' => $dc]));
        $response = $instance->deleteRow();
        $this->assertInstanceOf(Response::class, $response);

        $this->assertSame('<div class="multi-column-editor-wrapper">foo</div>', $response->getResult()->getHtml());
    }

    /**
     * Tests deleteRow().
     */
    public function testSortRows()
    {
        error_reporting(E_ALL & ~E_NOTICE); //Report all errors except E_NOTICE

        System::setContainer($this->container);

        $masterRequest = new \Symfony\Component\HttpFoundation\Request();
        $masterRequest->request->set('field', 'test');
        $masterRequest->request->set('table', 'tl_test');

        $requestStack = new RequestStack();
        $requestStack->push($masterRequest);

        $this->container->set('request_stack', $requestStack);

        $backendMatcher = new RequestMatcher('/contao', 'test.com', null, ['192.168.1.0']);
        $frontendMatcher = new RequestMatcher('/index', 'test.com', null, ['192.168.1.0']);

        $scopeMatcher = new ScopeMatcher($backendMatcher, $frontendMatcher);

        $request = new Request($this->framework, $requestStack, $scopeMatcher);

        $this->container->set('huh.request', $request);

        $connection = $this->createMock(Connection::class);
        $connection
            ->method('getDatabasePlatform')
            ->willReturn(new MySqlPlatform());

        $connection
            ->expects(!empty($metadata) ? $this->once() : $this->never())
            ->method('getSchemaManager')
            ->willReturn(new MySqlSchemaManager($connection));

        $router = $this->createMock(RouterInterface::class);

        $this->container->set('router', $router);
        $this->container->set('database_connection', $connection);

        $session = new Session(new MockArraySessionStorage());
        $this->container->set('session', $session);

        $model = $this->mockClassWithProperties(Model::class, ['test' => 1]);

        $this->container->set('huh.ajax.token', new AjaxTokenManager());

        $dc = new DC_Table_Utils('tl_test');
        $dc->field = 'test';
        $dc->value = 1;
        $dc->activeRecord = $model;

        $instance = new AjaxController(new MultiColumnEditor(['strTable' => 'tl_test', 'strField' => 'test', 'strName' => 'test', 'dataContainer' => $dc]));
        $response = $instance->sortRows();
        $this->assertInstanceOf(Response::class, $response);

        $this->assertSame('<div class="multi-column-editor-wrapper">foo</div>', $response->getResult()->getHtml());
    }

    protected function getFixturesDir(): string
    {
        return __DIR__.\DIRECTORY_SEPARATOR.'../Fixtures';
    }
}
