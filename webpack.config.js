var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('src/Resources/public/')
    .addEntry('contao-multi-column-editor-bundle', './src/Resources/assets/js/contao-multi-column-editor-bundle.js')
    .addEntry('contao-multi-column-editor-bundle-be', './src/Resources/assets/js/contao-multi-column-editor-bundle-be.js')
    .setPublicPath('/bundles/heimrichhannotcontaomulticolumneditor/')
    .setManifestKeyPrefix('bundles/heimrichhannotcontaomulticolumneditor')
    .enableSassLoader()
    .disableSingleRuntimeChunk()
    .addExternals({
        'sortablejs': 'Sortable',
        '@hundh/contao-utils-bundle': 'utilsBundle'
    })
    .enableSourceMaps(!Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();