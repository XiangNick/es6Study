let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require("html-webpack-plugin")
let CleanPlugin = require("clean-webpack-plugin")

module.exports = {
    entry : {
        app:path.resolve(__dirname,"src/js/app.js")//自己的入口文件
    },
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "js/bundle.js"
    },
    module:{
        loaders : [
            //es6处理的loader
            {
                test : /\.jsx?$/,
                loader : 'babel-loader',
                query : {
                    presets : ['es2015']
                }
            },
        ]
    },
     plugins : [
     new CleanPlugin(["dist"]),
    new webpack.optimize.UglifyJsPlugin({
            compress : {
                //忽略代码中的警告
                warnings : false
            }
        }),
    new HtmlWebpackPlugin({
       template: './src/template.html',
       htmlWebpackPlugin: {
           "files": {
               "css": ["[name].css"],
               "js": ["bundle.js"]
           }
       },
       // 效果不大，情怀至上
       minify: {
           removeComments: true,//删除注释
           collapseWhitespace: true,//删除空格
           removeAttributeQuotes: true//删除属性引号
       }
   }),
    new webpack.DefinePlugin({
      "process.env":{
          NODE_ENV:'"production"'
      }
  })
 ]
}