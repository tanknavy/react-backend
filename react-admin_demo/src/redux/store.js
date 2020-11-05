/**
 * redux最核心的管理对象store
 */

import { createStore } from 'redux'
//import reducer from './reducer'
import reducer from './reducer_states'

export default createStore(reducer)