
import React from 'react';
import ReactDOM from 'react-dom';

//import ClickCount from './app' //第一版，普通state属性

import store from './redux/store' //第2/3/4版，使用redux 返回redux store，规范化action，使用常量

//import ClickCount from './app_states' //第2/3版，使用redux 返回redux store，规范化action，使用常量
import ClickCount from './containers/app_react_redux' //第四版，使用react-redux

import { Provider } from 'react-redux'
//使用react-redux替代redux来简化redux的使用

// class Test extends React.Component { //react组件
//     render() {
//         return <h1>Hello React!</h1>;
//     }
// }

//使用redux
//传入redux的store，用于同一管理/保存状态
//ReactDOM.render(<ClickCount store={store} />, document.getElementById('root')); //在home中的root里面渲染一个react组件

//redux改为react-react
//传入redux的store，用于同一管理/保存状态
ReactDOM.render(
    //react-redux简化redux, store放到react-redux的 Provider中
    (<Provider store={store}>
        <ClickCount />
    </Provider>),
    document.getElementById('root')); //在home中的root里面渲染一个react组件


//redux更新但不会主动更新组件中的state状态，给store绑定状态更新的监听
//有了react-redux，不需要以下, 它会自动渲染
// store.subscribe(() => { //store内部转态数据发生改变时回调
//     //重新渲染app
//     ReactDOM.render(<ClickCount store={store} />, document.getElementById('root')); //在home中的root里面渲染一个react组件
// })