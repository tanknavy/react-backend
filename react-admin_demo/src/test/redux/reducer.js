/**
 * redux的函数模块:根据当前的state和指定的action放回新的state
 * 管理state中num,clickNum
 */

 //里面参数是固定的,state不一定是对应，也可使是数据本身，action是对象哪个{type:"actionName", date: 3}
 //如果有多个状态怎么办?
 export default function count(state=10, action){
    console.log('count()', state, action)
    switch(action.type){
        case 'add':
            return state + action.num
        case 'minus':
            return state - action.num
        default:
            return state     
    }

 }