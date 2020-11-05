/**
 * 一般文件名是actions
 * 包含多个用来创建action的工厂函数(action creator)
 * 需要为app.jsx中的函数创建add, minus两种类型的action creator
 */
import { ADD, MINUS } from './action-types'//使用常量

//需要返回对象
//export const add = number => ({ type: 'ADD', data: number })
export const add = number => ({ type: ADD, data: number })//使用常量,返回对象

//export const minus = number => ({ type: 'MINUS', data: numbner })
export const minus = number => ({ type: MINUS, data: number })//使用常量,返回对象

//redux不能异步, 以下没有效果，返回返回undefind
// export const asyncAdd = number => {
//     setTimeout(() => {
//         return {type: ADD, data: number}
//     }, timeout);
// }
//增加异步action
export const addAsync = number => {//返回函数
    return dispatch =>{
        //执行异步代码(setTimeout, ajax, promise等等)
        setTimeout(()=>{ //异步
            dispatch(add(number)) //分发同步action,
            //alert()
        }, 1000)
    }
}