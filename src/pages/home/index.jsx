import './index.less'
import React, {Component} from 'react';
import reducers from './reducer';
import {IO} from '../../app/io';
import Message from "uxcore-message"
import { createStore } from 'redux';
let store = createStore(reducers);

let action = (action, data) => {
  store.dispatch({type: action,data: data});
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneValue: '',
      twoValue: '',
      store: store.getState().counter
    }
  }
  componentWillMount() {
    let me = this;
    me.unsubscribe = store.subscribe(() => {
      me.setState({
        store: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  changeOne(e) {
    let me = this;
    let value = e.target.value;
    me.setState({
      oneValue: value
    })
  }
  changeTwo(e) {
    let me = this;
    let value = e.target.value;
    me.setState({
      twoValue: value
    })
  }
  clickHandle() {
    let me = this;
    const one = me.state.oneValue;
    if(one === "20180327") {
      window.sessionStorage.setItem("one", one);
      window.open("./#/admin/interviewQuestion")
    }else {
      Message["info"]("密码错误")
    }
  }
  clickHandle2() {
    let me = this;
    const two = me.state.twoValue;
    if(two === "zhoushaojun") {
      window.sessionStorage.setItem("two", two);
      window.open("./#/admin/interviewSupply")
    }else {
      Message["info"]("密码错误")
    }
  }
  render() {
    let me = this;
    return (<div>
      <div style={{"textAlign":"center","padding":"20px 0"}}>
        <input onChange={me.changeOne.bind(me)} value={me.state.oneValue} type="text"/>
        <button onClick={me.clickHandle.bind(me)}>前端面试题1</button>
      </div>
      <div style={{"textAlign":"center","padding":"20px 0"}}>
        <input onChange={me.changeTwo.bind(me)} value={me.state.twoValue} type="text"/>
        <button onClick={me.clickHandle2.bind(me)}>前端面试题补充</button>
      </div>

    </div>)
  }
}
export default Home