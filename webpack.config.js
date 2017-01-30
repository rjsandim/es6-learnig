const webpack = require('webpack');
//https://github.com/webpack/webpack/issues/1189

module.exports = {
    entry: [
        './app/Main.js'
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [
        // Assim é minificado todas as classes para melhor performance do taller-postgres.js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
