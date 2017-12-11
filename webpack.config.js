const webpack = require('webpack'); 
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  path.resolve(__dirname, 'src/js/entry.js'),
    output : {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, 'build/js')
    },
    module: {
        rules: [{
            test: '/\.less$/',
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'less-loader'}
            ]
        },{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015','react','stage-0']
                    }
                }
            ]
            
        },{
            test: /\.ejs$/,
            loader: 'ejs-compiled-loader'
        }]
    },
    devServer:{
        inline:true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/tpl/base.ejs'),
            filename: path.resolve(__dirname, 'build/html/index.html'),
            hash: false
        })
    ]
}