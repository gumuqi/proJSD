const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:  path.resolve(__dirname, 'src/js/entry.js'),
    output : {
        filename: './bundle.js',
        publicPath: 'http://dreamrabbit.tech/',
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'less-loader'}
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
        }, {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'url-loader?limit=10000',
            'img-loader'
          ]
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