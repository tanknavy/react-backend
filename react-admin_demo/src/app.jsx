import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { add, minus } from './redux/actionCreators'//常量

export default class ClickCount extends React.Component {
    //https://www.w3schools.com/react/react_events.asp
    //--属性使用props或者state,如果有构造器,props必须传给构造器和super--
    //https://medium.com/@aghh1504/2-increment-and-decrease-number-onclick-react-5767b765103c
    //这是个点击要保存和管理状态，redux这个js库专门做状态管理，一般和react配合使用
    //state = { num: 0, clickNum: 0 } //state可以构造器外面，也可以在里面
    //使用redux统一管理state状态
    static propTypes = {
        store: PropTypes.object.isRequired// props属性中必须要有store
    }

    constructor(props) {
        super(props);
        //state是可改变的，使用setState
        //this.state = { num: 0, clickNum: 0 };//如果在构造器里面一定要this
        this.numberRef = React.createRef() //创建Ref容器,在需要<select ref={this.numberRef}>下拉菜单需要获取当前选项时
        //在class compoenets中，this关键之默认没有定义，所以如果使用常规函数，
        //this表示调用这个函数的对象，可能是全局的,而箭头函数总是绑定到定义它的对象
        //如果使用常规函数，bind()方法绑定this到这个组件实例,不绑定this返回undefined
        //this.add = this.add.bind(this)
        //或者在events的return中onClock={this.add.bind(this)}
    }

    //add(){ //常规函数
    add = () => { //箭头函数
        //number表示添加多少
        const number = this.numberRef.current.value * 1 //当前选中的option的value,是string类型*1转数字
        //测试发现alert显示滞后一个数，因为是异步执行，使用setTimeOut异步延时
        //使用sleep也不行，要使用setTimeout来延时
        //this.setState({ clickNum: this.state.clickNum + 1 });//对象模式
        //this.setState({ num: this.state.num + 1 }); //对象模式
        //this.setState(state => ({ num: this.state.num + 1, clickNum: this.state.clickNum + 1 }))//函数模式，这两种写法都可以
        //使用redux后如何更新store中的数据？
        //this.props.store.dispatch({ type: 'ADD', data: number })//传递对象，和reducer中保持一致
        //参数里面的add(number)是指引入的add，而不是当前add箭头函数，千万不要this.add(number)这样就死循环了
        this.props.store.dispatch(add(number))//为了一致，使用actions和常量统一创建, 
        //console.log("num:" + this.state.num);
        //sleep(2000); //sleep没有定义，想要异步的使用setTimeout()，没有效果
        //setTimeout(() => { alert(this.state.num); }) //放入setTimeout，可指定超时,使用arrow函数处理this.state.num
        setTimeout(() => { alert(this.props.store.getState()); }) //放入setTimeout，可指定超时,使用arrow函数处理this.state.num
        //alert(this.state.num);
    }

    minus = () => { //箭头函数
        const number = this.numberRef.current.value * 1 //当前选中的option的value,是string类型*1转数字
        //this.setState({ clickNum: this.state.clickNum + 1 });
        //this.setState({ num: this.state.num - 1 });
        //this.setState(state => ({ num: this.state.num - 1, clickNum: this.state.clickNum + 1 }))//函数模式，这两种写法都可以
        //使用redux后如何更新store中的数据？
        //this.props.store.dispatch({ type: 'MINUS', data: number })//传递对象，和reducer中保持一致，
        this.props.store.dispatch(minus(number))//为了一致，使用actions和常量统一创建
        //console.log("num:" + this.state.num);
        //setTimeout(() => { alert(this.state.num); }, 200)
        setTimeout(() => { alert(this.props.store.getState()); }, 200) //放入setTimeout，可指定超时,使用arrow函数处理this.state.num
        //alert(this.state.num);
    }

    addIfOdd = () => { //箭头函数
        const number = this.numberRef.current.value * 1 //当前选中的option的value,是string类型*1转数字
        //if (this.state.num % 2 === 1) {
        if (this.props.store.getState() % 2 === 1) { //redux
            //this.setState({ clickNum: this.state.clickNum + 1 });
            //this.setState({ num: this.state.num - 1 });
            //this.setState(state => ({ num: this.state.num + 1, clickNum: this.state.clickNum + 1 }))//函数模式，这两种写法都可以
            this.props.store.dispatch(add(number))//为了一致，使用actions和常量统一创建, 
            //console.log("num:" + this.state.num);
            //setTimeout(() => { alert(this.state.num); }, 200)
            setTimeout(() => { alert(this.props.store.getState()); }, 200) //放入setTimeout，可指定超时,使用arrow函数处理this.state.num
            //alert(this.state.num);
        }

    }

    addAsync = () => { //等一秒后再增加
        const number = this.numberRef.current.value * 1 //当前选中的option的value,是string类型*1转数字
        //console.log("num:" + this.state.num);
        setTimeout(() => { //异步，延时一秒
            //this.setState({ clickNum: this.state.clickNum + 1 });
            //this.setState({ num: this.state.num + 1 });
            //this.setState(state => ({ num: this.state.num + 1, clickNum: this.state.clickNum + 1 }))
            this.props.store.dispatch(add(number))//为了一致，使用actions和常量统一创建, 
            //alert(this.state.num)
            alert(this.props.store.getState()) //放入setTimeout，可指定超时,使用arrow函数处理this.state.num
        }, 1000)
        //alert(this.state.num);
    }

    render() {
        //const num = this.state.num //原本在state = { num: 0, clickNum: 0 } 中取值
        //使用redux后，数据存储在store中,注意redux更新后，不会主动更新组件状态
        //const num = this.props.store.getState() //使用redux, store不是一个对象，使用getState拿到值
        const num = this.props.store.getState() //使用redux, store不是一个对象，使用getState拿到值
        //const num = this.props.store.num.getState() //使用redux, store是对象，使用getState拿到值
        //const clickNum = this.props.store.clickNum.getState() //使用redux, store是对象，使用getState拿到值

        return <div>
            <h1>Hello World!</h1>

            <input type="text" />&nbsp;&nbsp;
                    <div>
                <select ref={this.numberRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                    </div>
            <br />
            {/* <label>click {this.state.clickNum} times</label> */}
            <br />
            {/* <label>current: {this.state.num}</label> */}
            <label>current: {num}</label>
            <br />
            <button onClick={this.add}>加一</button>&nbsp;&nbsp;
                    <button onClick={this.minus}>减一</button>&nbsp;&nbsp;
                    <button onClick={this.addIfOdd}>奇数时增加</button>&nbsp;&nbsp;
                    <button onClick={this.addAsync}>异步增加</button>&nbsp;&nbsp;
                </div>
    }
}

//ReactDOM.render(<Hello />, document.getElementById('mydiv'))// 不在本html页面中，让index.js调用
