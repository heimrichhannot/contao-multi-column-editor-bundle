var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('src/Resources/public/')
    .addEntry('contao-multi-column-editor-bundle', '@hundh/contao-multi-column-editor-bundle')
    .addEntry('contao-multi-column-editor-bundle-be', './src/Resources/assets/js/contao-multi-column-editor-bundle-be.js')
    .setPublicPath('/bundles/heimrichhannotcontaomulticolumneditor/')
    .setManifestKeyPrefix('bundles/heimrichhannotcontaomulticolumneditor')
    .enableSassLoader()
    .disableSingleRuntimeChunk()
    .addExternals({
        'sortablejs': 'Sortable',
        '@hundh/contao-utils-bundle': 'utilsBundle'
    })
    .configureBabel(function (babelConfig) {
    }, {
        // include to babel processing
        includeNodeModules: ['@hundh/contao-multi-column-editor-bundle']
    })
    .enableSourceMaps(!Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();