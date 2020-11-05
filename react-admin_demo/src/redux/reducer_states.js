/**
 * redux的函数模块:根据当前的state和指定的action放回新的state
 * 管理state中num,clickNum
 * 标准环境中，不直接写reducers, 而是写actions和action-types
 */

// state是变量
import { ADD, MINUS } from './action-types'//使用常量
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
export default function count(state = { num: 19, clickNum: 0 }, action) { //第一次创建时会初始化状态
    //export function count(state = { num: 19, clickNum: 0 }, action) { //第一次创建时会初始化状态
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
export function count2(state2 = 99, action2) {
    console.log('count()', state2, action2) //
    switch (action2.type) {
        case 'add':
            return state2 + action2.data
        case 'minus':
            return state2 - action2.data
        default:
            return state2
    }
}

// export default function count(num = 10, action) {
//     console.log('count()', num, action)
//     switch (action.type) {
//         case 'add':
//             return num + action.data
//         case 'minus':
//             return num - action.data
//         default:
//             return num
//     }

// }