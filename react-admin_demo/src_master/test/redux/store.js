/**
 * redux最核心的管理对象store
 */

 import {createStore} from 'redux'
 import reducer from './reducer'

 export default createStore(reducer)//创建store对象时，内部会第一次调用reducer函数得到初识状态值