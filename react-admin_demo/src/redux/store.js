/**
 * redux最核心的管理对象store
 */

import { createStore } from 'redux'
//import reducer from './reducer' //state是变量
//import reducer from './reducer_states' //state是对象
import { count, count2 } from './reducer_states' //可以同时导入多个reducer吗?

//export default createStore(reducer)
export default createStore(count, count2)