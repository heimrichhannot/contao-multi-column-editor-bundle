var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/')
    .addEntry('contao-multi-column-editor-bundle', './assets/js/contao-multi-column-editor-bundle.js')
    .addEntry('contao-multi-column-editor-bundle-be', './assets/js/contao-multi-column-editor-bundle-be.js')
    .setPublicPath('/bundles/heimrichhannotcontaomulticolumneditor/')
    .setManifestKeyPrefix('bundles/heimrichhannotcontaomulticolumneditor')
    .enableSassLoader()
    .disableSingleRuntimeChunk()
    .addExternals({
        'sortablejs': 'Sortable'
    })
    .enableSourceMaps(!Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();
