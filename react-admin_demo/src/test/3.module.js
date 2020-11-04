//CommonJS语法
//exports是指向module.exports的变量，千万能export = xxx,
//相当于var exports = module.exports;
//Babel工具提供es6转common js
exports.x = "我是模块x";

exports.add = function (a, b) {
    return a + b;
};

//ES6语法
export const y = "我是模块y";

export function minus(a, b) {
    return a - b;
};

//比较exports, module.exports
function log(msg) { console.log(msg) }
function log2(msg) { console.log(msg) }
function log3(msg) { console.log(msg) }

//exports只能.的方式向外暴露内部变量
//module.exports既可以通过.的形式，也可以直接赋值
exports.log = log; //导出一个对象，这个对象有一个属性叫log是函数
module.exports.log = log2; //导出一个对象，这个对象有一个属性叫log是函数
//module.exports = log3 //导出一个function




