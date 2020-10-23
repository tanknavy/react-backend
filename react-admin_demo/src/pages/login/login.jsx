import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd'
//样式文件，less语言支持
import './login.less'
//import logo from './images/logo.png'
import logo from '../../assets/images/logo.png'
import { reqLogin } from '../../ajax'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'


const Item = Form.Item // 不能写在import之前


/*
ReactDom.render(html代码, html元素);
JSX(JavaScript XML)是js基于es6的扩展，运行时转换为js代码，
jsx可以让我们在React中写html,可以在js中写html tags标签，而不需要React.createElement()或React.appendChild()方法,
jsx转换html tags到React元素；在jxs中，HTML代码必须包裹到一个顶级的element中

登陆的路由组件
AntD的Form表单，具有数据手机，校验，提交功能，包含复选框，单选框，输入框，下拉选择框等元素
 */

//React的Component像是函数返回html元素，是独立可重用的代码，通过render函数返回HTML
//component有两种形式，一种class componenet(首字母必须大写)一种是function component
class Login extends Component {

  //form中提交表单的方法，发出ajax请求请求登录，使用箭头函数,如果有callback使用event
  handleSubmit = (event) => {

    // 阻止事件的默认行为
    event.preventDefault()

    // 对所有表单字段进行检验
    this.props.form.validateFields(async (err, values) => {
      // 检验成功
      if (!err) {
        // console.log('提交登陆的ajax请求', values)
        // 请求登陆
        const { username, password } = values
        //reqLogin封装了axios请求返回promise对象，正常写法reqLogin().then(成功回调).catch(失败回调),
        //reqLogin(username, password).then(response =>{}).catch(error =>{})
        //async和await简化了promise对象的使用，不想要promise,不再使用then()指定成功/失败的回调函数
        //以同步编码方式(没有回调函数)实现异步流程
        //哪里写await? 返回promise表达式左侧写await:不想要promise,想要promise异步执行成功的value结果
        //哪里写async: await所在最近定义的函数的左侧
        // try {
        //   const result = await reqLogin(username, password) // {status: 0, data: user}  {status: 1, msg: 'xxx'}
        //   console.log("请求成功")
        // } catch (error) {
        //   console.log("请求失败")
        // }
        // 使用await拿异步返回的结果，原本try catch，后来在原本promise里面统一处理掉catch
        const result = await reqLogin(username, password) // {status: 0, data: user}  {status: 1, msg: 'xxx'}

        // console.log('请求成功', result)
        if (result.status === 0) { // 登陆成功
          // 提示登陆成功
          message.success('登陆成功')

          // 保存user
          const user = result.data
          memoryUtils.user = user // 保存到内存，但是用户刷新页面就会丢失
          storageUtils.saveUser(user) // 保存到local存储中

          // 跳转到后台管理界面 (不需要再回退回到登陆)，用于事件函数中跳转，在render中跳转使用<Redirect/>
          this.props.history.replace('/') //goback回退, push类似栈可以回退, replace替换不需要回退

        } else { // 登陆失败
          // 提示错误信息
          message.error(result.msg)
        }

      } else {
        console.log('检验失败!')
      }
    });

    // 得到form对象
    // const form = this.props.form
    // // 获取表单项的输入数据
    // const values = form.getFieldsValue()
    // console.log('handleSubmit()', values)
  }

  /*
  对密码进行自定义验证
  */
  /*
   用户名/密码的的合法性要求
     1). 必须输入
     2). 必须大于等于4位
     3). 必须小于等于12位
     4). 必须是英文、数字或下划线组成
    */
  validatePwd = (rule, value, callback) => {
    console.log('validatePwd()', rule, value)
    if (!value) {
      callback('密码必须输入')
    } else if (value.length < 4) {
      callback('密码长度不能小于4位')
    } else if (value.length > 12) {
      callback('密码长度不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      callback() // 验证通过
    }
    // callback('xxxx') // 验证失败, 并指定提示的文本
  }

  //返回渲染
  render() {

    // 如果用户已经登陆, 自动跳转到管理界面，
    //在index.js中已经尝试从本地cookie中取到了用户信息,注：这没有使用加密token,
    const user = memoryUtils.user
    if (user && user._id) {
      //render里面路由跳转使用Redirect,在事件中跳转使用this.props.history
      return <Redirect to='/' />
    }

    // 得到具强大功能的form对象
    const form = this.props.form
    //3.x中没有使用getFieldDecorator和warrper
    const { getFieldDecorator } = form;

    return (
      //在login.less文件中设定格式
      //class是html的，className是JSX attribute
      //react动态的值使用{}
      //react里面图片不支持src="./images/logo.pnt"语法,使用import加载，动态的值就用{}
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React Project: Backend Admin System</h1>
        </header>
        <section className="login-content">
          <h2>User Login</h2>
          {/* <Form onSubmit={this.handleSubmit} className="login-form"> */}
          <Form onFinish={this.handleSubmit} className="login-form">
            <Item>
              {
                /*
              用户名/密码的的合法性要求
                1). 必须输入
                2). 必须大于等于4位
                3). 必须小于等于12位
                4). 必须是英文、数字或下划线组成
               */
              }
              {
                getFieldDecorator('username', { // 配置对象: 属性名是特定的一些名称
                  // 声明式验证: 直接使用别人定义好的验证规则进行验证
                  rules: [
                    { required: true, whitespace: true, message: '用户名必须输入' },
                    { min: 4, message: '用户名至少4位' },
                    { max: 12, message: '用户名最多12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                  ],
                  initialValue: 'admin', // 初始值
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />
                )
              }
            </Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [
                    {
                      validator: this.validatePwd
                    }
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="password"
                  />
                )
              }

            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

/*
1. 高阶函数
    1). 一类特别的函数
        a. 接受函数类型的参数
        b. 返回值是函数
    2). 常见
        a. 定时器: setTimeout()/setInterval()
        b. Promise: Promise(() => {}) then(value => {}, reason => {})
        c. 数组遍历相关的方法: forEach()/filter()/map()/reduce()/find()/findIndex()
        d. 函数对象的bind()
        e. Form.create()() / getFieldDecorator()()
    3). 高阶函数更新动态, 更加具有扩展性

2. 高阶组件(componenet)
    1). 本质就是一个函数
    2). 接收一个组件(被包装组件), 返回一个新的组件(包装组件), 包装组件会向被包装组件传入特定属性
    3). 作用: 扩展组件的功能
    4). 高阶组件也是高阶函数: 接收一个组件函数, 返回是一个新的组件函数
 */
/*
Form.create()是个高阶函数，接受组件Login,包装我的组件生成一个新的组件: Form(Login)
新组件会向Form组件传递一个强大的对象属性: form

3.x这样高阶组件包装,4.x中没有这样使用
 */
const WrapLogin = Form.create()(Login)
export default WrapLogin
/*
1. 前台表单验证
2. 收集表单输入数据
 */

/*
async和await
1. 作用?
   简化promise对象的使用: 不用再使用then()来指定成功/失败的回调函数
   以同步编码(没有回调函数了)方式实现异步流程
2. 哪里写await?
    在返回promise的表达式左侧写await: 不想要promise, 想要promise异步执行的成功的value数据
3. 哪里写async?
    await所在函数(最近的)定义的左侧写async
 */