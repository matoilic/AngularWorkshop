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
        ]
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
                test: /\.html$/, loader: 'raw'
            },
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
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
