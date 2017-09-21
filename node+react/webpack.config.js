var webpack = require('webpack');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
     entry:  './src/app.js',
     output: {
         path: '/build',
         filename: "bundle.js"
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             options: {
                 presets: ['es2015', 'react']
             }
         }, {
             test: /\.css$/,
             loader: "style-loader!css-loader"
         }]
     },
     resolve:{
            extensions: ['.js']
     },
     devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } 
};
