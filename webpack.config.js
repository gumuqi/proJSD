const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:  path.resolve(__dirname, 'src/js/entry.js'),
    output : {
        filename: './bundle.js',
        publicPath: '',
    },
    module: {
        rules: [{
            test: '/\.css$/',
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
            ]
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react','stage-0']
            }
        },{
            test: /\.ejs$/,
            loader: 'ejs-compiled-loader'
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/tpl/base.ejs'),
            filename: path.resolve(__dirname, 'index.html'),
            hash: false
        }),
        new extractTextPlugin('./src/css/common.css')
    ]
}