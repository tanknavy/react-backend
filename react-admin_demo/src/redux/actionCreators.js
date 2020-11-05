/**
 * 包含多个用来创建action的工厂函数(action creator)
 * 需要为app.jsx中的函数创建add, minus两种类型的action creator
 */
import { ADD, MINUS } from './action-types'//使用常量

//需要返回对象
//export const add = number => ({ type: 'ADD', data: number })
export const add = number => ({ type: ADD, data: number })//使用常量

//export const minus = number => ({ type: 'MINUS', data: numbner })
export const minus = number => ({ type: MINUS, data: number })//使用常量