//文件
const fs = require('fs')

//同步执行
const files = fs.readdirSync('./');
console.log(files);
console.log('----------------------');

//异步执行，callback回调
fs.readdir('./', function(err,files){ //err,files两个只有一个有值
    if (err) console.log('Error',err);
    else console.log('Result', files, '回调时的参数：', arguments);//err和files都会输出
});


//事件
const EventEmitter = require('events'); //引入类
const emitter = new EventEmitter(); //实例化

var url = 'http://www.baidu.com';
function log(message){
    console.log(message);
}

//Register a listener, 先注册监听器
//emitter.on('messageLogged', function(arg){
emitter.on('messageLogged', (arg) => { //es6可使用箭头函数
    console.log('Listener called!', arg);
});

//Raise an event，产生一个event，同步调用
emitter.emit('messageLogged', {id:1, url:'http://www.baidu.com'}); //事件名，参数
