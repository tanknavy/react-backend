import React, { Component } from 'react'
//引用样式文件
import './index.less'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
//默认暴露可以写任意名字
//想根据menuList数组动态生成一个菜单/子菜单列表，
import menuList from '../../config/menuConfig'

const SubMenu = Menu.SubMenu

/**
 * 左侧导航组件, map+递归 动态产生菜单和子餐单
 */
export default class LeftNav extends Component {

    //想根据menuList数组动态生成一个菜单/子菜单列表
    //map + 递归对每个子菜单,递归引用this.getMenuNodes
    getMenuNodes_map = (menuList) => {
        return menuList.map(item => {
            /**
            {   输入：
                title: 'Home Page', //menu name菜单标题名称
                key: '/home', // route path对应的path
                icon: 'home', //icon name图标名称
                children: [], //子菜单，可能有也可能没有
                
                返回：<Menu.Item> 或者<SubMenu>, SubMenu里面还有Menu.Item
                <Menu.Item key="/home">
                        <Link to='/home'>
                            <Icon type="pie-chart" />
                            <span>Home Page</span>
                        </Link>
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
                        <Menu.Item key="/category">
                            <Link to='/category'>
                                <Icon type="mail" />
                                <span>Category Manage</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                            <Link to='/product'>
                                <Icon type="mail" />
                                <span>Product Manage</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
            }
             */

            if (!item.children) { //没有子菜单
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes_map(item.children)}

                    </SubMenu>
                )
            }

        })
    }

    //方法二：reduce((prev_res,item)=>{}, []) + 递归 替代map+递归
    //reduce: 除了常规的累计累加, 还可以理解给空数组添加元素
    getMenuNodes_reduce = (menuList) => {
        return menuList.reduce((pre, item) => {
            //向pre中添加当前要处理的元素
            if (!item.children) { //没有子菜单
                pre.push(( //往要累加的数组添加当前处理好的元素,第一个()表示函数，内面()表示包裹的内容
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            } else {
                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes_reduce(item.children)}

                    </SubMenu>
                ))
            }
            return pre //最终返回reduce后得到的数组
        }, [])
    }

    render() {
        return (
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>Emall BackEnd</h1>
                </Link>

                <Menu

                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    {/* <Menu.Item key="/home">
                        <Link to='/home'>
                            <Icon type="pie-chart" />
                            <span>Home Page</span>
                        </Link>
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
                        <Menu.Item key="/category">
                            <Link to='/category'>
                                <Icon type="mail" />
                                <span>Category Manage</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                            <Link to='/product'>
                                <Icon type="mail" />
                                <span>Product Manage</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="/user">
                        <Link to='/user'>
                            <Icon type="pie-chart" />
                            <span>User Manage</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/role">
                        <Link to='/role'>
                            <Icon type="pie-chart" />
                            <span>Role Manage</span>
                        </Link>
                    </Menu.Item>
                     */}

                    {
                        this.getMenuNodes_reduce(menuList)
                    }

                </Menu>

            </div>

        )
    }
}