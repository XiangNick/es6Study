let path = require('path')
let OpenBrowserPlugin = require('open-browser-webpack-plugin')


module.exports = {
    entry : path.resolve(__dirname,"src/js/app.js"),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel-loader',// 加载模块 "babel-loader"，现在不再支持省略"-loader"这个缩写的写法了
                query: {
                    presets: ['es2015']
                }
            }]
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
    ]
}