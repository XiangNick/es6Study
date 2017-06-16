//main.es6
// ES6的补丁，由于babel只支持ES6语法部分的编译，新增的类需要这个补丁，同时也为了兼容旧的浏览器
import "babel-polyfill";
const str = '您好，欢迎使用,就在app/es6文件夹里编写你的es6代码吧！'
let sayHello = (str)=>{
    document.getElementById('container').innerHTML = `<h1 align=center>${str}</h1>`;
    console.log(str);
}
sayHello(str);