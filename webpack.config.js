var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('src/Resources/public/js/')
    .addEntry('contao-multi-column-editor-bundle', '@hundh/contao-multi-column-editor-bundle')
    .setPublicPath('/public/js/')
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