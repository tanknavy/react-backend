/*
进行local数据存储管理的工具模块
 */
import store from 'store'
const USER_KEY = 'user_key'

//一次暴露多个
export default {
  /*
  保存user到localStorage里面，这样刷新页面不会丢失
   */
  saveUser(user) {
    //localStorage原生的，对一些浏览器不支持,使用store,测试时在浏览器的application的Storage下面可以看到浏览器存储的信息
    // localStorage.setItem(USER_KEY, JSON.stringify(user))
    store.set(USER_KEY, user)

  },

  /*
  读取user
   */
  getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')//parse接受一个字符串,{}是js对象
    return store.get(USER_KEY) || {} //万一没有值返回null, 用或|| {}
  },

  /*
  删除user
   */
  removeUser() {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY)
  }
}