/**
 * redux最核心的管理对象store
 */

import { createStore, applyMiddleware } from 'redux'
//import reducer from './reducer' //state是变量时
import reducer from './reducer_states' //state是对象时
//import { count, count2 } from './reducer_states' //可以同时导入多个reducer吗?
import thunk from 'redux-thunk' //redux异步调用
import { composeWithDevTools } from 'redux-devtools-extension' //chrome插件工具，可以查看redux状态，如果


//export default createStore(reducer) //同步
//export default createStore(reducer, applyMiddleware(thunk)) //异步
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk))) //插件再包一层, 在chrome不能正产显示插件效果时
//export default createStore(count, count2) //用combinerReducer整合多个
