import './index.less'
import React, {Component} from 'react';
import store from './store';
import IO from '../../app/io';

let action = (action, data) => {
  store.dispatch({type: action,data: data});
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      store: store.getState()
    }
  }
  componentWillMount() {
    let me = this;
    me.unsubscribe = store.subscribe(() => {
      me.setState({
        store: store.getState()
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  changeHandle(e) {
    let me = this;
    let value = e.target.value;
    me.setState({
      inputValue: value
    })
  }
  clickHandle() {
    let me = this;
    IO.Home.test({data:1}).then((content)=>{
      action('TEST',{inputValue:JSON.stringify(content.data) + me.state.inputValue})
    }).catch((error)=>{
      console.log(error)
    });
  }
  render() {

    let me = this;
    return (<div>
      <input onChange={me.changeHandle.bind(me)} value={me.state.inputValue} type="text"/>　
      <button onClick={me.clickHandle.bind(me)}>按钮</button>
      <div>{me.state.store.test}</div>
    </div>)
  }
}
export default Home