# es6即时编译环境搭建
## 一、babel预习
本项目集成了babel和gulp，实现了自动编译，打包，压缩功能，在使用本项目前，如果没有babel基础的童鞋可以先学习下babel命令行工具`babel-cli`来直接编译es6代码。具体可以看 [阮大神的博客](http://www.ruanyifeng.com/blog/2016/01/babel.html)。

使用：
1. 先在项目根目录新建`.babelrc`文件,
修改.babelrc文件
```js
{
  "presets": [],//转码规则
  "plugins": []//插件
}
```
presets官方提供以下规则集

"es2015","react","stage-0","stage-1","stage-2","stage-3"

可以根据需要填入.babelrc文件的presets数组里。

2. 安装相关依赖
先初始化package.json
```js
npm init
```

全局安装babel-cli
```js
npm install -g babel-cli
```
项目根目录安装babel-cli
```js
npm install -D babel-cli
```
项目根目录安装之前需要的preset转码规则
```js
npm install -D babel-preset-es2015
```
名称格式为: babel-preset-规则名

3. 修改package.json
```js
 "scripts": {
    "build": "babel 要编译的目录 -d 目标目录 --watch -s"
  }
```
* -o 指目标文件，babel 要编译文件 -o 目标文件
* -d 指目标目录, babel 要编译目录 -d 目标目录
* --watch 指监听该目录的变化，变化后即时编译
* -s 生成资源map文件
可根据需要自己修改。

4. 最后，在根目录执行命令行
```js
npm run build
```
可以在html文件中引入自己目标文件的路径，随时编译，调试。

## 二、项目结构
`gulp-es6`为gulp版本。

`webpack-es6`为es6版本。<font color=skyblue>[ 推荐 ]</font>

选择其一即可。

## 三、本项目使用方法

gulp版本集成了gulp和babel，实现了自动编译，打包，压缩功能，可直接clone下来使用，使用方法如下：



1. 直接clone该项目到本地，cd到`gulp-es6`目录，命令行执行`npm install`

2. 在`gulp-es6`目录命令行执行`gulp build --dev`用来指定开发模式，然后再新开一个命令行执行`gulp server`用来监听一个8000端口的服务，最后在``gulp-es6/app/es6`文件夹中编写es6代码，编写完毕后ctrl+s保存，命令行工具会监听该文件夹，自动编译该文件夹内所有可编译文件成es5的js代码，会在`gulp-es6/app/`目录下生成`gulp-es6/app/bundle`和`gulp-es6/app/js`文件夹。

3. `gulp-es6/app/js`文件夹内存放编译后的js文件，`gulp-es6/app/bundle`文件夹内存放打包后的js文件

4. 在`gulp-es6`目录的`index.html`文件中引入了`app/bundle/bundle.min.js`，需要执行过以上的步骤，才能生成该打包文件，此时打开`index.html`，可以看到效果。



webpack版本集成了wepcack和babel,实现了以上的功能，同时在开发模式时，支持浏览器自动打开，浏览器自动刷新，自动清理构建目录等功能，构建速度也比gulp版本快。使用方法如下：

1. 直接clone该项目到本地，cd到`webpack-es6`目录，命令行执行`npm install`


2. `webpack-es6\src\js\app.js`文件作为项目入口文件，可直接编写es6代码，也可引入其他es6代码。

3. 编写完毕后在`webpack-es6\`目录下执行`npm run develop`作为开发模式构建，构建出的bundle.js是在内存中的，会自动打开浏览器。
执行`npm run publish`作为部署模式构建，不会自动打开浏览器，构建出的代码都在`webpack-es6/dist`目录下。
