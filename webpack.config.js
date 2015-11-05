var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&overlay=true',
        './src/index.js'
    ],
    resolve: {
        root: [
            path.join(__dirname, 'src')
        ],
        alias: {
            'vex-dialog': path.resolve('node_modules/vex-js/js/vex.dialog.js'),
            vex: 'vex-js'
        }
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js',
        chunkFilename: '[hash]/js/[id].js',
        hotUpdateMainFilename: '[hash]/update.json',
        hotUpdateChunkFilename: '[hash]/js/[id].update.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: [
                        'es2015',
                        'stage-2'
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    watch: true
};
