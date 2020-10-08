var a = 10;
export {a};

//在浏览器中window是global object
//在node中global是global object

//console.log(window) //undefined
//window.setTimeout()
console.log(global)
console.log(module) //每个file都是一个module

var x = 'local variable' //函数内变量
let y = 'block variable' //代码块变量
z = 'global variable' //没有var/let限定就是全局变量
const w = 'constant' //建议使用常量

console.log(x)
console.log(y)
console.log(z)
console.log(w)

console.log(global.x) //undefined
console.log(global.y) //undefined
console.log(global.w) //undefined
console.log(global.z)


