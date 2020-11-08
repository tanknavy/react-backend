/**
 * redux的函数模块:根据当前的state和指定的action放回新的state
 * 管理state中num,clickNum
 * 标准环境中，不直接写reducers, 而是写actions和action-types
 */


import { ADD, MINUS } from './action-types'//使用常量
import { combineReducers } from 'redux'

// state是变量
//里面参数是固定的,state不一定是对应，也可使是数据本身，action是对象哪个{type:"actionName", date: 3}
//如果有多个状态怎么办?
// export default function count(state = 9, action) { //第一次创建时会初始化状态
//     console.log('count()', state, action) //state是旧状态，action中包括要传入的数据
//     switch (action.type) {
//         case 'ADD':
//             return state + action.data
//         case 'MINUS':
//             return state - action.data
//         default:
//             return state
//     }
// }

//当state是一个对象时, 多个state多个函数使用redux的combineReducers
// export function count(state = 9, action) {
//export default function count(state = { num: 19, clickNum: 0 }, action) { //第一次创建时会初始化状态
export function count(state = { num: 19, clickNum: 0 }, action) { //第一次创建时会初始化状态
    console.log('count()', state, action) //state是旧状态，action中包括要传入的数据
    switch (action.type) {
        case ADD:
            //return state + action.data
            state = { num: state.num + 1, clickNum: state.clickNum + 1 }
            return state
        case MINUS:
            //return state - action.data
            state = { num: state.num - 1, clickNum: state.clickNum + 1 }
            return state
        default:
            return state
    }
}

//如果分开多个state,多个reducer函数，使用redux的combineReducers()
const initUser = { id: 0, name: "guest" } //用户初识状态对象
export function user(state = initUser, action) {
    console.log('count()', state, action) //
    switch (action.type) {
        case 'add':
            return state + action.data
        case 'minus':
            return state - action.data
        default:
            return state
    }
}

/*
combineReducers接受包含所有recducer函数的对象，返回一个新的reducer函数(总reducer)，上述default取消
总的reducer函数管理state的结构，类似{count: count, user:user}对象，每个state标识名默认是函数名
{
    count: 9,
    user: {id:1000, name:"guest"}
}
*/

export default combineReducers({ count, user }) //暴露多个reducers, state.count.num, state.user.name