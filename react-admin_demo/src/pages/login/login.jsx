import React, {Component} from 'react'
import './login.less'

//登录的路由组件,样式通过类名空值

export default class Login extends Component{
    render(){
        return (
        <div className="login">
            <header className="login-header"></header>
            <section className="login-content"></section>
        </div>
        )
    }
}