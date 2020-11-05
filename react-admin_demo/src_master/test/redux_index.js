
import React from 'react';
import ReactDOM from 'react-dom';
import ClickCount from './click_count_app_redux '
import store from './redux/store' //返回redux store

// class Test extends React.Component { //react组件
//     render() {
//         return <h1>Hello React!</h1>;
//     }
// }

//传入带有redux store
ReactDOM.render(<ClickCount store={store}/>, document.getElementById('root')); //在home中的root里面渲染一个react组件