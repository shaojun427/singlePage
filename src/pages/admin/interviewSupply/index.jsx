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
      </ul>
    </div>)
  }
}

export default Page;