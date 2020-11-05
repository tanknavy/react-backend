/**
 * Mock拦截ajax请求，返回随机数据,
 * 浏览器和postman不能测试，需要编码写ajax请求
 */
import Mock from 'mockjs'
import data from './data.json' //三个数据对象

//返回info的接口
Mock.mock('/info', {code:0, data: data.goods})
//返回goods的接口
//返回ratings的接口

//export default //这里不需要向外暴露任何数据，只需要保证能执行一次，比如main.js中import ./mock/mockSever