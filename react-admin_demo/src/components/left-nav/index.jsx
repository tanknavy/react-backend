import React, { Component } from 'react'
//引用样式文件
import './index.less'
import logo from '../../assets/images/logo.png'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
//默认暴露可以写任意名字
//想根据menuList数组动态生成一个菜单/子菜单列表，
import menuList from '../../config/menuConfig'

const SubMenu = Menu.SubMenu

/**
 * 左侧导航组件, map+递归 动态产生菜单和子餐单
 */
//export default class LeftNav extends Component {
class LeftNav extends Component {

    //想根据menuList数组动态生成一个菜单/子菜单列表
    //map + 递归对每个子菜单,递归引用this.getMenuNodes
    getMenuNodes_map = (menuList) => {
        // 得到当前请求的路由路径
        const path = this.props.location.pathname
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

                //为了自动展开输入路由的子菜单,查找一个与请求路径匹配的子菜单
                const cItem = item.children.find(cItem => cItem.key === path)
                //如果存在，说明当前子菜单的父菜单需要展开
                if (cItem) {
                    this.openKey = item.key
                }

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
        // 得到当前请求的路由路径
        const path = this.props.location.pathname
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
                //为了自动展开输入路由的子菜单,查找一个与请求路径匹配的子菜单
                const cItem = item.children.find(cItem => cItem.key === path)
                //如果存在，说明当前子菜单的父菜单需要展开
                if (cItem) {
                    this.openKey = item.key //给当前类中添加属性(动态语言)，注意外部调用顺序
                }

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

    //compoenent的lifecyle；挂载，更新，卸载
    //第一次render前，为第一render渲染准备数据(必须同步的)，只执行一次
    componentWillMount() {
        //提到前面，因为openKey需要从中得到赋值,性能问题放到挂载时，
        this.menuNodes = this.getMenuNodes_map(menuList)
        //this.menuNodes = this.getMenuNodes_reduce(menuList)
    }

    render() {
        //渲染时开启debugger
        //debugger //开启调试，浏览器中看看有没有值
        //想得到当前路由路径，高亮当前选中的菜单
        //但是当前组件不是路由组件,locations不存在，所以cannot read property 'pathname' of undefined
        //使用withRouter，它是个高阶组件,组件本质是函数，withRouter(LeftNav)
        //高阶组件包装非路由组件，返回一个新的组件，新的组件向非路由组件传递3个属性：history/location/match
        const path = this.props.location.pathname //动态语言，外部wrapp一下传递进来属性
        console.log('render()', path)
        const openKey = this.openKey //openKey是在getMenuNodes方法中定义的，这时注意调用顺序

        return (
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>Emall BackEnd</h1>
                </Link>

                <Menu
                    mode="inline"
                    theme="dark"
                    // defaultSelectedKeys={[path]} //这是只能选择一次，当选中其它页面被跳转到默认时，这是失败
                    selectedKeys={[path]}
                    //动态打开选中的子菜单
                    defaultOpenKeys={[openKey]}
                >

                    {
                        //this.getMenuNodes_reduce(menuList)
                        //提到componentWillMount，第一render时，只做一次
                        this.menuNodes //在挂载

                    }

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


                </Menu>

            </div>

        )
    }
}

//包装我的组件，添加了三个属性history,location,match,为了得到当前路由路径
export default withRouter(LeftNav)