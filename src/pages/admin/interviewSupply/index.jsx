import './index.less';
import React, {Component} from 'react';
import _ from 'lodash';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount() {
    const key = window.sessionStorage.getItem("two");
    if(key !== "zhoushaojun") {
      location.href = "/"
    }
  }
  render() {
    const me = this;
    const {state} = me;
    return(<div className="interview-question">
      <h1>前端面试题补充</h1>
      <h2>基础题</h2>
      <ul>
        <li>
          <h3>1、ajax运行过程</h3>
        </li>
        <li>
          <h3>什么是函数的柯里化(Currying)？</h3>
          <p>在一p个函数中首先填充几个参数(然后再返回一个新函数[只接受一个参数])的技术称为柯里化(Currying)。</p>
          <p>{`function add(x,y){`}</p>
          <p>{`　return x + y;`}</p>
          <p>{`}`}</p>
          <p>{`add(3,4);`}</p>
          <p>===============>柯里化</p>
          <p>{`var add = function(x){`}</p>
          <p>{`　return function(y){`}</p>
          <p>{`　　return x + y;`}</p>
          <p>{`　}`}</p>
          <p>{`};`}</p>
          <p>{`add(3)(4);`}</p>
          <p>1. 参数复用；2. 提前返回；3. 延迟计算/运行。</p>
        </li>
      </ul>
    </div>)
  }
}

export default Page;