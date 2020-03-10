const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        devtoolModuleFilenameTemplate: '[resourcePath]',
        devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.ico$/, loader: 'file-loader'}
        ]
    }
   
};