<?php

namespace HeimrichHannot\MultiColumnEditorBundle\EventListener\Contao;

use Contao\CoreBundle\DependencyInjection\Attribute\AsHook;
use Contao\CoreBundle\Routing\ScopeMatcher;
use Symfony\Component\HttpFoundation\RequestStack;

#[AsHook('initializeSystem')]
class InitializeSystemListener
{
    private RequestStack $requestStack;
    private ScopeMatcher $scopeMatcher;

    public function __construct(
        RequestStack $requestStack,
        ScopeMatcher $scopeMatcher
    )
    {
        $this->requestStack = $requestStack;
        $this->scopeMatcher = $scopeMatcher;
    }

    public function __invoke(): void
    {
        $request = $this->requestStack->getCurrentRequest();
        if (!$request || !$this->scopeMatcher->isBackendRequest($request)) {
            return;
        }

        // do not load the multiColumnEditor in the form generator
        if ('form' === $request->query->get('do') && 'tl_form_field' === $request->query->get('table') && 'edit' === $request->query->get('act')) {
            unset($GLOBALS['TL_FFL']['multiColumnEditor']);
        }
    }
}