import React, { Component } from 'react'
import './index.less' //相对路劲，不写.就会跑到node_modules里面找

/**
 * 头部组件
 */
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                Header
            </div>
        )
    }
}