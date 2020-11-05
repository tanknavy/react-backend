
import React from 'react';
import ReactDOM from 'react-dom';
//import ClickCount from './app'
import ClickCount from './app_states'
import store from './redux/store' //返回redux store

// class Test extends React.Component { //react组件
//     render() {
//         return <h1>Hello React!</h1>;
//     }
// }

//传入redux的store，用于同一管理/保存状态
ReactDOM.render(<ClickCount store={store} />, document.getElementById('root')); //在home中的root里面渲染一个react组件


//redux更新但不会主动更新组件中的state状态，给store绑定状态更新的监听
store.subscribe(() => { //store内部转态数据发生改变时回调
    //重新渲染app
    ReactDOM.render(<ClickCount store={store} />, document.getElementById('root')); //在home中的root里面渲染一个react组件
})