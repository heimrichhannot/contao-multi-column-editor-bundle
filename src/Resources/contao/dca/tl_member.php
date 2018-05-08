<?php

$dc = &$GLOBALS['TL_DCA']['tl_member'];

$dc['palettes']['default'] = str_replace('firstname,', 'firstname,test,', $dc['palettes']['default']);

$dc['fields']['test'] = [
    'label'     => &$GLOBALS['TL_LANG']['tl_member']['test'],
    'inputType' => 'multiColumnEditor',
    'eval'      => [
        'tl_class'          => 'clr',
        'multiColumnEditor' => [
            'sortable'            => true,
            'minRowCount'         => 1,
            'maxRowCount'         => 5,
            'skipCopyValuesOnAdd' => false,
            'fields'              => [
                'selector'      => [
                    'label'     => &$GLOBALS['TL_LANG']['tl_reader_config_element']['selector'],
                    'inputType' => 'select',
                    'filter'    => true,
                    'options'   => range(1, 5),
                    'eval'      => ['includeBlankOption' => true, 'chosen' => true, 'mandatory' => true, 'groupStyle' => 'width:250px'],
                ],
                'filterElement' => [
                    'label'     => &$GLOBALS['TL_LANG']['tl_reader_config_element']['filterElement'],
                    'inputType' => 'select',
                    'options'   => ['Dresden', 'Berlin', 'Hamburg', 'Leipzig'],
                    'eval'      => ['includeBlankOption' => true, 'chosen' => true, 'mandatory' => true, 'groupStyle' => 'width:250px'],
                ],
                'start'         => [
                    'label'     => &$GLOBALS['TL_LANG']['tl_filter_config_element']['start'],
                    'exclude'   => true,
                    'inputType' => 'text',
                    'eval'      => ['rgxp' => 'datim', 'datepicker' => true, 'tl_class' => 'w50 wizard'],
                    'sql'       => "varchar(10) NOT NULL default ''",
                ],
                'stop'          => [
                    'label'     => &$GLOBALS['TL_LANG']['tl_filter_config_element']['stop'],
                    'exclude'   => true,
                    'inputType' => 'text',
                    'eval'      => ['rgxp' => 'datim', 'datepicker' => true, 'tl_class' => 'w50 wizard'],
                    'sql'       => "varchar(10) NOT NULL default ''",
                ],
            ],
        ],
    ],
    'sql'       => "blob NULL",
];