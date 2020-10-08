//CommonJS语法
exports.x="我是模块x";

exports.add=function (a,b){
    return a+b;
};

//ES6语法
export const y="我是模块y";

export function minus(a,b){
    return a-b;
};
