const path = require('path');
const webpack = require('webpack');

const settings = {
    entry: {
        bundle: ['react-hot-loader/patch', 'babel-polyfill', './src/index.js'],
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve('../server/web-api/public'),
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.json', '.css'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: [['es2015', { modules: false }], 'stage-2', 'react'],
                    plugins: ['transform-node-env-inline'],
                    env: {
                        development: {
                            plugins: ['react-hot-loader/babel'],
                        },
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]--[local]--[hash:base64:8]',
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
    ],
};

module.exports = settings;
