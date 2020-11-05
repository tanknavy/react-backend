/**
 * redux的函数模块:根据当前的state和指定的action放回新的state
 * 管理state中num,clickNum
 * 标准环境中，不直接写reducers, 而是写actions和action-types
 */

import { ADD, MINUS } from './action-types'//使用常量
//里面参数是固定的,state不一定是对应，也可使是数据本身，action是对象哪个{type:"actionName", date: 3}
//如果有多个状态怎么办?
// export default function count(state = 7, action) { //第一次创建时会初始化状态
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

//导入常量
export default function count(state = 8, action) { //第一次创建时会初始化状态
    console.log('count()', state, action) //state是旧状态，action中包括要传入的数据
    switch (action.type) {
        case ADD:
            return state + action.data
        case MINUS:
            return state - action.data
        default:
            return state
    }
}


export function count2(state = 9, action) {
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