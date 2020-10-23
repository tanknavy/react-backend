import React, { Component } from 'react'
import memoryUtils from '../../utils/memoryUtils'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import User from '../user/user'
import Role from '../role/role'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Order from '../order/order'



const { Footer, Sider, Content } = Layout;

//如果文件夹下面jsx文件名是index.jsx，这是引用可以少些一层


//后台管理的路由组件
//antd里面有所需要的Layout布局，我需要(sider,header,content,footer这样的结构)

export default class Admin extends Component {
    render() {
        //本地内存用于保存已经登录的用户，如何维持登录？
        //使用store保存登录信息到用户本地，在index.js中尝试读取出来先，
        const user = memoryUtils.user
        if (!user || !user._id) {
            //用户没有登录，自动跳转到登录(在render()中的跳转)
            return <Redirect to='/login' />
        }

        return (
            // <div>
            //     Hello {user.username}
            // </div>)
            //从antd的layout找到的布局,两个{{}}, 外面的{}说明里面是js代码,里面的{}表示js对象
            //和css里面写style不一样，里面值要求字符串
            //复杂的部分写成单独的组件
            <Layout style={{ height: '100%' }}>
                <Sider>
                    //引用自己的组件，自闭标签
                    //单页应用，内容里面路由到不到内容
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>Header~自己的Header标签</Header>
                    <Content style={{ backgroundColor: '#fff' }}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/product' component={Product} />
                            <Route path='/user' component={User} />
                            <Route path='/role' component={Role} />
                            <Route path='/order' component={Order} />
                            <Route path='/charts/bar' component={Bar} />
                            <Route path='/charts/line' component={Line} />
                            <Route path='/charts/pie' component={Pie} />
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: '#000' }}>Recommend use Chrome explorer</Footer>
                </Layout>
            </Layout>
        )
    }
}