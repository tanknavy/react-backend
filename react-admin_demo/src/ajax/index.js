/**
 * 使用index.js命名，这样直接导入模块就可以使用
 * 包含应用中所有接口请求函数的模块，有很多函数，所以使用对象
 * 每个接口函数的返回值都是promise类型
 */
import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = ''

//整体暴露
//  export default{  //对象形式
//     f1: function (params) {},
//     f2: function (params) {}
//  }

//逐个暴露
// export function reqLogin(username, password) {
//     return ajax('/login', { username, password }, 'POST') //返回promise
// }

//写成箭头函数的形式(高阶函数),箭头函数有返回的作用， 好处，一是避免this问题，二是方便一行写完
//注意这里箭头函数后面不要加{}，加了{}就是 function(username: any, password: any): void,返回为空，要么加上return，这样不简洁
//不加{}表示返回这个对象
// 3000到5000的请求跨域问题，开发环境中(使用react-create-app脚手架才有)代理服务器配置，"proxy": "http://localhost:5000"
export const reqLogin = (username, password) => ajax(BASE + '/login', { username, password }, 'POST') //不要写{},写了{}就没有对象了

//添加用户,用户信息包到一个user对象里面
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST') //user是对象
