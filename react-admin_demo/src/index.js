import React from 'react' //必须引入
import ReactDom from 'react-dom'

import App from './App' //引入自己的类，至少使用.说明路径

//入口js

//将App组件标签渲染到index页面的div上
ReactDom.render(<App />, document.getElementById('root'))