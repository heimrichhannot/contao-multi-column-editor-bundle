# Changelog
All notable changes to this project will be documented in this file.

## [1.2.1] - 2019-01-10

### Fixed
- load Sortable js library locally, not from CDN (privacy related)

## [1.2.0] - 2019-01-10

### Changed
- now replaces multi column editor bundle
- reverted change from 1.0.13
- removed symfony 3 dependency

## [1.1.0] - 2018-12-11

### Removed
- font awesome classes from frontend template

## [1.0.13] - 2018-11-12

### Fixed
- Replace contao inserttags after render `editorTemplate`

## [1.0.12] - 2018-09-18

### Fixed
- type issue in loadDataContainer hook (see https://github.com/heimrichhannot/contao-multi_column_editor/issues/3)
- code style

## [1.0.11] - 2018-09-17

### Fixed
- issue in loadDataContainer hook (see https://github.com/heimrichhannot/contao-multi_column_editor/issues/3)

## [1.0.10] - 2018-09-11

### Fixed
- invalid yml

## [1.0.9] - 2018-09-11

### Fixed
- contao 4.6 support for `huh.multicolumneditor.listener.hooks` service (added `public: true`)

## [1.0.8] - 2018-09-06

### Fixed
- class issue in be template

## [1.0.7] - 2018-08-06

### Fixed
- script execution after adding rows

## [1.0.6] - 2018-07-02

### Fixed
- replaced missing `Containter` class from `heimrichhannot/contao-haste` with `heimrichhannot/contao-utils-bundle`

## [1.0.5] - 2018-06-22

### Fixed
- issue when using in tl_settings

## [1.0.4] - 2018-06-18

### Fixed
- javascript issue with checkboxes and adding rows

## [1.0.3] - 2018-06-01

### Fixed
- activeRecord issue with ajax calls

## [1.0.2] - 2018-05-25

### Fixed
- js issues

## [1.0.1] - 2018-05-09

### Fixed
- removed tl_member dca file, test data
