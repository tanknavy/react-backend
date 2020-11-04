import React, { Component } from 'react'
import './index.less' //相对路径，不写.就会跑到node_modules里面找

/**
 * 头部组件
 */
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    <span>Welcom, admin</span>
                    <a href="javascript:">LogOut</a>
                </div>

                <div className="header-bottom">
                    <div className="header-bottom-left">Home</div>
                    <div className="header-bottom-right">
                        <span>2020-11-03</span>
                        <img src="" alt="weather" />
                        <span>Sunny</span>
                    </div>
                </div>
            </div>
        )
    }
}