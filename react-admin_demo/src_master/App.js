import React, { Component } from 'react' //包名，{React对象的属性}, React是必须引入的namespace
import { Button, message } from 'antd' //解构赋值,因为antd中定义了很多组件
import { BrowserRouter, Route, HashRouter, Switch } from 'react-router-dom' //可以用BrowserRouter也可以用HashRouter

import Login from './pages/login/login' //login.jsx文件中的Login类/组件
import Admin from './pages/admin/admin' //admin.jsx文件中的Admin类/继承Component的组件

/*
应用的根组件:简单的组件用函数定义,复杂的组件用类定义，简单复杂看状态
*/

export default class App extends Component { //自定义类继承React包中的Component类

    //handleClick(){message.sucess("hello")}
    handleClick = () => { //自动应以组件方法最好使用箭头函数，保证this没有问题
        message.success('hello React antd UI')
    }

    render() { //必须render，必须返回虚拟dom对象
        //return <div>myApp</div> //返回dom标签，测试ok
        //return <Button type="primary" onClick={this.handleClick}>primary按钮</Button> //测试Ok
        //admin下面很多子路由,为了省略一个admin，使用path='/'

        return (
            //路由器，HashRouter地址带#
            <BrowserRouter>
                <Switch> {/*只匹配一个,如果匹配到了，其它不再看了*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>

            </BrowserRouter>

        )
    }
}