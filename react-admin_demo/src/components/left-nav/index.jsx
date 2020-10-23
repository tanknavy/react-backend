import React, { Component } from 'react'
//引用样式文件
import './index.less'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu

/**
 * 左侧导航组件
 */
export default class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>Emall BackEnd</h1>
                </Link>

                <Menu
                    defaultSelectdKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Home Page</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Product</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">
                            <Icon type="mail" />
                            <span>Category Manage</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="mail" />
                            <span>Product Mange</span>
                        </Menu.Item>

                    </SubMenu>

                </Menu>

            </div>

        )
    }
}