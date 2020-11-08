import React, { Component } from 'react'
import './index.less' //相对路径，不写.就会跑到node_modules里面找
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

/**
 * 头部组件
 */
//export default class Header extends Component {
class Header extends Component {

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
                        {/* <span>2020-11-03</span> */}
                        <span>{new Date().toDateString()}</span>
                        <img src="" alt="weather" />
                        <span>Sunny</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)//非路由组件包装一下得到history,location等
//引入react-redux，继续将现有组件分成UI和container(connect高阶函数)，connect用于和redux中store交互数据写到UI中
//export default connect()(withRouter(Header))//非路由组件包装一下得到history,location等