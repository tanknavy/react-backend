import React, { Component } from 'react'
import { connect } from 'react-redux'

import Counter from '../components/Counter'
import { add, minus, addAsync } from '../redux/actionCreators'

/**
 * 引用react-redux， 这是容器组件, 从redux拿到数据放到UI组件
 * connect(): 高阶函数
 * connect()返回的函数是一个高阶组件：接受一个UI组件，生成一个容器组件
 * 容器组件的责任：向UI组件传入特定的属性
 * 其实将之前的app_states中分解成UI和container两部分
 */

//将redux管理的state数据映射成UI组件的属性的函数，管理数据
function mapStateToProps(state) { //state是一个对象时,比如state = { num: 0, clickNum: 0 }
    return {
        num: state.num, //state可以使变量也可以是对象，对象时包含若干字段
        clickNum: state.clickNum
    }
}

//将包含dispatch代码的函数映射成UI组件的函数属性的函数，更新数据
function mapDispatchToProps(dispatch) { //比如 this.props.store.dispatch({ type: 'ADD', data: number }), 
    return {
        //add: number => ({ type: MINUS, data: number })
        add: number => dispatch(add(number)),//名字要一致
        //minus: number => ({ type: MINUS, data: number })
        minus: number => dispatch(minus(number))
    }
}


//connect高阶组件，
//connect(f1:向myApp传入哪些一般属性(来源于store中的state),f2:向myApp传入哪些函数属性(action更新属性))(myApp)
//  export default connect( //传入两个函数, 连接container和redux的store
//      mapStateToProps, //要管理的状态,比如state = { num: 0, clickNum: 0 } 
//      mapDispatchToProps //action, 比如 this.props.store.dispatch({ type: 'ADD', data: number }), 
//  )(Counter)//包装，为了向里面传递属性

//上述最终简化版！！！
export default connect( //连接container和redux的store
    //1.mapStateToProps, //要管理的状态,比如state = { num: 0, clickNum: 0 } 
    //state => ({ num: state.num, clickNum: state.clickNum }), //加()返回对象,不加()里面{}就不是对象而是方法体了，返回为空
    //1.2使用combineReducer多个state对象以后, state = {count, user}
    state => ({ num: state.count.num, clickNum: state.count.clickNum }), //加()返回对象,不加()里面{}就不是对象而是方法体了，返回为空

    //2.mapDispatchToProps(dispatch) //action, 比如 this.props.store.dispatch({ type: 'ADD', data: number }), 
    { add, minus, addAsync } //超级简化了dispatch代码,其实还是会自动转换成上述mapDispatchToProps函数

)(Counter)//包装，为了向里面传递属性