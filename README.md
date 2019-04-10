# Multi Column Editor bundle

![](https://img.shields.io/packagist/v/heimrichhannot/contao-multi-column-editor-bundle.svg)
![](https://img.shields.io/packagist/dt/heimrichhannot/contao-multi-column-editor-bundle.svg)
[![](https://img.shields.io/travis/heimrichhannot/contao-multi-column-editor-bundle/master.svg)](https://travis-ci.org/heimrichhannot/contao-multi-column-editor-bundle/)
[![](https://img.shields.io/coveralls/heimrichhannot/contao-multi-column-editor-bundle/master.svg)](https://coveralls.io/github/heimrichhannot/contao-multi-column-editor-bundle)

This module offers an input type for editing one or more records in backend and frontend.

![alt text](doc/images/example.png "Demo in the backend")

## Features

### Technical instructions

Use the inputType "multiColumnEditor" for your field.

```
'someField' => array(
    'label'     => &$GLOBALS['TL_LANG']['tl_my_table']['someField'],
    'inputType' => 'multiColumnEditor',
    'eval'      => array(
        'multiColumnEditor' => array(
            // set to true if the rows should be sortable (backend only atm)
            'sortable' => true,
            'class' => 'some-class',
            // set to 0 if it should also be possible to have *no* row (default: 1)
            'minRowCount' => 2,
            // set to 0 if an infinite number of rows should be possible (default: 0)
            'maxRowCount' => 5,
            // defaults to false
            'skipCopyValuesOnAdd' => false,
            'editorTemplate' => 'multi_column_editor_backend_default',
            // add palette and subpalette if you need supalettes support
            'palettes'    => [
                '__selector__' => ['field1'],
                'default'      => 'field1',
            ],
            'subpalettes' => [
                'field1'  => 'field2', // key selector
                'field1_10' => 'field3' // key_value selector
            ],
            'fields' => array(
                // place your fields here as you would normally in your DCA
                // (sql is not required)
                'field1' => [
                	'label' => 'field 1',
                	'inputType' => 'text',
                	'eval' => ['groupStyle' => 'width:150px', 'submitOnChange' => true]
                ],
                'field2' => [
                    'label' => 'field 2',
                    'inputType' => 'text',
                    'eval' => ['groupStyle' => 'width:150px']
                ]
                'field3' => [
                    'label' => 'field 3',
                    'inputType' => 'text',
                    'eval' => ['groupStyle' => 'width:150px']
                ]
            )
        )
    ),
    'sql'       => "blob NULL"
),
```
