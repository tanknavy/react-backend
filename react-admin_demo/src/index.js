import React from 'react' //必须引入
import ReactDom from 'react-dom' //应用路由

import App from './App' //引入自己的类，至少使用.说明路径
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'
import {Provider} from 'react-redux' //向根组件提供store统一管理state
import store from './redux/store'

//入口js

//用户关掉浏览器，如果用户登录保存到local cookie里面,还可以读出来保存到内存中
//这样就能保持用户状态
const user = storageUtils.getUser()
//memoryUtils.user = user
//暂时没有后端，这里直接指定user,
memoryUtils.user = { _id: 'ac32', username: 'Carl Cheng', sex: 'Male' }

//将App组件标签渲染到index页面的div上
//引入redux/react-redux统一管理状态state
//ReactDom.render(<App />, document.getElementById('root'))
ReactDom.render((
    <Provider store={store}>
        <App />
    </Provider>)
    , document.getElementById('root'))