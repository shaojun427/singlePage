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
          <h3>2、什么是函数的柯里化(Currying)？</h3>
          <p>在一个函数中首先填充几个参数(然后再返回一个新函数[只接受一个参数])的技术称为柯里化(Currying)。</p>
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
        <li>
          <h3>3、浏览器渲染过程</h3>
          <p>1、处理 HTML 标记并构建 DOM 树。</p>
          <p>2、处理 CSS 标记并构建 CSSOM 树。</p>
          <p>3、将 DOM 与 CSSOM 合并成一个渲染树。</p>
          <p>4、根据渲染树来布局，以计算每个节点的几何信息。</p>
          <p>5、将各个节点绘制到屏幕上。</p>
        </li>
        <li>
          <h3>js常用设计模式</h3>
        </li>
      </ul>
    </div>)
  }
}

export default Page;