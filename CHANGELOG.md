# Changelog
All notable changes to this project will be documented in this file.

## [2.19.0] - 2024-02-29
- Added: dark mode support for contao 5.2+ ([#27](https://github.com/heimrichhannot/contao-multi-column-editor-bundle/pull/27), [@ReneLuecking])
- Changed: some small code adjustments
- Fixed: compatibility issue with contao 4.9
- Fixed: compatibility issues with contao 5 and tiny mce ([#30](https://github.com/heimrichhannot/contao-multi-column-editor-bundle/pull/30), [@ReneLuecking])

## [2.18.0] - 2023-12-17
- Added: missing label in frontend

## [2.17.2] - 2023-12-13
- Fixed: deleteRow ajax issue

## [2.17.1] - 2023-11-02
- Fixed: php 7 compatibility

## [2.17.0] - 2023-10-31
- Added: support for contao 5
- Added: support for utils bundle v3
- Fixed: issues with symfony 6
- Fixed: multi column wizard selectable in form generator
- Fixed: styling issues
- Fixed: missing english translation
- Fixed: some deprecations

## [2.16.0] - 2023-09-11
- Changed: remove request bundle dependency ([#23])
- Changed: removed outdated test setup ([#23])

## [2.15.0] - 2023-08-28
- Changed: reduced request bundle usage
- Fixed: missing request bundle dependency

## [2.14.3] - 2023-06-06
- Fixed: default value not used if no value is set for subpalette generation
- Fixed: warning in subpalette generation

## [2.14.2] - 2023-04-02
- Fixed: warning

## [2.14.1] - 2023-02-15
- Fixed: warnings with php 8 ([#22], [@bildschirmartist])

## [2.14.0] - 2023-02-09
- Added: encore contracts support ([#21])
- Changed: require php >= 7.4
- Changed: require contao >= 4.9

## [2.13.11] - 2022-11-21
- Fixed: warnings in php 8

## [2.13.10] - 2022-07-18
- Fixed: warning in php 8

## [2.13.9] - 2022-05-31
- Fixed: warning in php 8

## [2.13.8] - 2022-02-24

- Fixed: public dir for contao 4.13+

## [2.13.7] - 2022-02-24

- Fixed: public dir for contao 4.13+

## [2.13.6] - 2022-02-24

- Fixed: public dir for contao 4.13+

## [2.13.5] - 2022-02-14

- Fixed: array index issues in php 8+

## [2.13.4] - 2022-02-14

- Fixed: array index issues in php 8+

## [2.13.3] - 2021-09-23

- Fixed: minRowCount to add as many fields on initial load as configurated in dca

## [2.13.2] - 2021-09-06

- Fixed: missing tinyMce support if there's a custom tinyMCE config in the dca

## [2.13.1] - 2021-09-06

- Removed: jQuery calls from js

## [2.13.0] - 2021-08-30

- Added: php8 support

## [2.12.5] - 2021-08-03
- fixed error on adding wrong fields to wrong mce if multiple are added to a frontend form
- refactored AjaxController::prepareWidget()

## [2.12.4] - 2021-04-21
- fixed picker support
- Optimize tooltip ([#17], [@rabauss])

## [2.12.3] - 2021-04-16
- Fix tooltip initiation + hide ([#15], [@rabauss])
- updated local asset build script

## [2.12.2] - 2020-11-12
- fixed onload callback when used in frontend
- fixed issue when deleting row with index 0 due issue in Contao StringUtil (see [contao/contao#2468](https://github.com/contao/contao/issues/2468))

## [2.12.1] - 2020-11-11
- fixed tinymce issue if an ordinary tinymce-based textarea is in place next to one in a multi column editor

## [2.12.0] - 2020-11-06
- added support for disabled attribute
- respect values added or changed in getAttributesFromDca hook

## [2.11.1] - 2020-10-22
- fixed tinyMce path for contao 4.4

## [2.11.0] - 2020-10-20
- added row_inner block to default editor template
- fixes row indices not correctly updated on adding and deleting rows

## [2.10.2] - 2020-10-15
- fixed an isse with new row positions

## [2.10.1] - 2020-10-14
- fixed issue when first row contains a tinyMce field
- fixed deleting first element not working

## [2.10.0] - 2020-10-09
- added support for nested subpalettes
- added fieldset state storage
- added template to support contao dca css classes (`multi_column_editor_contao_palette`)
- fixed field order when using subpalettes

## [2.9.1] - 2020-10-07
- fixed a warning on empty mce widgets

## [2.9.0] - 2020-10-07
- added collapsed support for legends (legend:hide)

## [2.8.1] - 2020-10-06
- fixed subpalettes

## [2.8.0] - 2020-10-06
- added legend support to palettes

## [2.7.6] - 2020-10-06
- fixed subpalettes not working with checkboxes

## [2.7.5] - 2020-10-01
- fixed type issue

## [2.7.4] - 2020-09-30
- fixed readme

## [2.7.3] - 2020-09-25
- fixed tinymce bugs

## [2.7.2] - 2020-08-28
- added translations

## [2.7.1] - 2020-08-17
- fixed chosen being run multiple times if multiple fields of type multiColumnEditor are in place

## [2.7.0] - 2020-08-11
- added support for rgxp for the whole multiColumnEditor (not the separate fields)
- errors of the validation of the whole multiColumnEditor (not the separate fields) are printed out in the template

## [2.6.3] - 2020-08-10
- js script evaluation error

## [2.6.2] - 2020-08-10
- js error in backend after sub palette opening

## [2.6.1] - 2020-08-10
- css and js error in backend after sub palette opening
- removed CHANGELOG from separate npm-package folder -> js changes are also included in the bundle changelog

## [2.6.0] - 2020-07-31
- assets now only added where widget is included
- updated encore bundle config
- minimum supported encore bundle version is now 1.5
- some refactoring

## [2.5.4] - 2020-06-26

- added curly braces to inline call (php 7)

## [2.5.3] - 2020-06-24

- added array check in `HookListener` (see [#7], thanks to zonky2!)

## [2.5.2] - 2020-04-17

- fixed flexbox style

## [2.5.1] - 2020-04-08

- fixed wizard fields
- fixed package.json

## [2.5.0] - 2020-04-03

- added css class "long" to twig template
- added webpack workflow for css generation as well
- updated to encore 0.28+

## [2.4.2] - 2020-03-30

### Added
- enable/disable add or remove rows depending on configuration in dca

## [2.4.1] - 2020-03-17

### Added
- english translations

## [2.4.0] - 2019-09-06

### Added
- support for special fields in multi column editors in rocksolid custom content elements (rsce)

## [2.3.0] - 2019-08-28

### Added
- dcaPicker support for input fields

### Fixed
- fixed load_callback

## [2.2.2] - 2019-08-27

### Fixed
- fixed load_callback

## [2.2.1] - 2019-08-01

### Changed
- removed old contao autoload.ini and autoload.php

## [2.2.0] - 2019-06-20

### Changed
- repository for js now within this bundle (`src/Resources/npm-package`)
- fixed an error with reordering elements (#5)

## [2.1.7] - 2019-05-24

### Fixed
- comment

## [2.1.6] - 2019-05-24

### Fixed
- fileTree ajax issues

## [2.1.5] - 2019-04-26

### Fixed
- `MultiColumnEditor::validator()` now properly works with inputs having eval `decodeEntities` set to `true`

## [2.1.4] - 2019-04-26

### Fixed
- warning when multicolumn widget value is empty on save

## [2.1.3] - 2019-04-11

### Fixed
- deleteRow deleted the wrong row
- updated documentation

## [2.1.2] - 2019-04-11

### Fixed
- js error on accessing non existing variable that prevent vendor js like datepicker to work properly on async response
- small backend style adjustments

## [2.1.1] - 2019-04-10

 ### Fixed
- non-palette multi-column-editor fields had no values

## [2.1.0] - 2019-04-10

### Changed
- complete refactoring, fields now use the array form field syntax (e.g `field[0][subField]`)
- better ux in backend mode, added row styles (including even/odd stripes), make usage of flexbox and added hover effect to have better feedback, what item you are currently on
- removed redundant attributes from template, please adjust your custom templates if you get unknown variable errors from twig

### Added
- subpalette support with field selector and field_value selector (see README.md for more information)

### Fixed
- `editAll` support in backend now works properly

## [2.0.4] - 2019-03-21

### Fixed
- import issues of sortable in backend

## [2.0.3] - 2019-03-20

### Fixed
- js issues in Firefox and IE

## [2.0.2] - 2019-03-20

### Added
- `formdata-polyfill` as required dependency

## [2.0.1] - 2019-03-19

### Added
- `formdata-polyfill` for IE and Edge

## [2.0.0] - 2019-03-19

### Changed
- unified twig templates and javascript for frontend and backend
- js handling -> js is now a separate node module importable in other modules

### Fixed
- multiple listener issue


[@rabauss]: https://github.com/rabauss
[@bildschirmartist]: https://github.com/bildschirmartist
[@ReneLuecking]: https://github.com/ReneLuecking

[#23]: https://github.com/heimrichhannot/contao-multi-column-editor-bundle/pull/23
[#22]: https://github.com/heimrichhannot/contao-multi-column-editor-bundle/pull/22
[#21]: https://github.com/heimrichhannot/contao-multi-column-editor-bundle/pull/21
[#17]: https://github.com/heimrichhannot/contao-multi-column-editor-bundle/pull/17
[#15]: https://github.com/heimrichhannot/contao-multi-column-editor-bundle/pull/15
[#7]: https://github.com/heimrichhannot/contao-multi-column-editor-bundle/issues/7
[#3]: https://github.com/heimrichhannot/contao-multi_column_editor/issues/3
