/**
 * 发送异步ajax请求的函数模块
 * 封装axios库,函数的返回值是promise对象，
 */

import axios from 'axios'
import { message } from 'antd'

//暴露默认一个
export default function ajax(url, data = {}, type = 'GET') { //参数就指定默认值
    //原始处理方式，外部如果使用await时都需要try catch
    // if(type==='GET'){ //发GET请求
    //     return axios.get(url, { //配置对象
    //         //params: {ID: 1234} //配置参数
    //         params: data //配置参数
    //     })
    // }else{ //发POST请求
    //     return axios.post(url, data)
    // }

    //优化：统一处理请求异常后处理方式，外部调用方无需再try/catch
    //解决办法：在外面包一个自己promise对象(执行器)，请求出错时不reject(error),而是错误提示
    return new Promise((resolve, reject) => {
        let promise
        //1.执行异步ajax请求
        if (type === "GET") {
            promise = axios.get(url, {
                password: data
            })
        } else {
            promise = axios.post(url, data)
        }
        //2.如果成功了，调用resolve(value)
        promise.then(response => {
            resolve(response)
            //resolve(response.data) //可直接拿到成功时的响应
            //3.如果失败了，不是调用reject(reason)而是提示异常信息，外部调用不用try/catch
        }).catch(error => {
            message.error("请求出错了： " + error.message)
        })
    })

}

//请求登录接口
//ajax('/login', { username: 'Tom', password: '123' }, 'POST').then()

//添加用户接口,
//ajax('/manage/user/add', { username: 'Tom', password: '123', phone: '626-888-666', email: 'bob@gmail.com', role_id: 'customer' }, 'POST').then()

//每个接口的路径是固定的，就是参数值不一样，考虑重新封装每个接口请求函数