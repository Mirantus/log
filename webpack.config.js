const path = require('path');
const webpack = require('webpack');

const isProduction = process.argv.indexOf('-p') !== -1;
const APP_ENV = isProduction ? require('./.env.production') : require('./.env.dev');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, './src')
    ],
    output: {
        path: path.resolve(__dirname, './www/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, './src')
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                include: path.resolve(__dirname, './src')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&camelCase=only',
                include: path.resolve(__dirname, './src')
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './src'),
            'node_modules'
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(APP_ENV)
        })
    ]
};
