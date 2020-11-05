/**
 * redux最核心的管理对象store
 */

import { createStore, applyMiddleware } from 'redux'
//import reducer from './reducer' //state是变量时
import reducer from './reducer_states' //state是对象时
//import { count, count2 } from './reducer_states' //可以同时导入多个reducer吗?
import thunk from 'redux-thunk' //redux异步调用


//export default createStore(reducer) //同步
export default createStore(reducer, applyMiddleware(thunk)) //异步
//export default createStore(count, count2) //用combinerReducer整合多个
