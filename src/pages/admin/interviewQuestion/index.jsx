import './index.less';
import React, {Component} from 'react';
import { createStore } from 'redux';
import reducers  from './reducer';
import _ from 'lodash';
let store = createStore(reducers);

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlTableOpen: false,
      cssTableOpen: false,
      apiTableOpen: true
    }
  }
  htmlFold() {
    const status = this.state.htmlTableOpen;
    this.setState({
      htmlTableOpen: !status
    })
  }
  cssFold() {
    const status = this.state.cssTableOpen;
    this.setState({
      cssTableOpen: !status
    })
  }
  apiFold() {
    const status = this.state.apiTableOpen;
    this.setState({
      apiTableOpen: !status
    })
  }
  render() {
    const me = this;
    const {state, htmlFold, cssFold, apiFold} = me;
    return(<div className="interview-question">
      <h1>2018.03.27——前端面试题</h1>
      <h2>基础题</h2>
      <ul>
        <li>
          <h3>1、js 数据类型有哪些？es6 中扩展了哪些？</h3>
          <p>基本数据类型：（Number, String, Boolean, Undefined, Null）。</p>
          <p>引用数据类型：（Object, Array, Function, Date）。</p>
          <p>ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型。</p>
        </li>
        <li>
          <h3>2、js 继承有哪些方式？</h3>
          <p>new创建实例（1、原型链继承：通过prototype属性；2、this继承：通过call或apply改变this指向）</p>
          <p>拷贝继承（深拷贝、浅拷贝）</p>
          <p>闭包继承（函数内部直接return）</p>
        </li>
        <li>
          <h3>3、js闭包的优缺点？浏览器的垃圾回收机制？</h3>
          <p>优点：保护函数内的变量安全,加强了封装性。防止全局污染</p>
          <p>缺点：常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。</p>
          <br/>
          <p>引用计数：（跟踪记录每个值被引用的次数。当声明一个变量并将引用类型的值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次 数加1.相反，如果包含对这个值引用的变量又取得另外一个值，则这个值的引用次数减1.当这个值的引用次数变成0时，则说明没有办法访问这个值了，因此就 可以将其占用的内存空间回收回来。）</p>
          <p>标记清除：（标记清除的算法分为两个阶段，标记(mark)和清除(sweep). 第一阶段从引用根节点开始标记所有被引用的对象，第二阶段遍历整个堆，把未标记的对象清除。）</p>
        </li>
        <li>
          <h3>事件循环机制是什么？什么是Event loop?</h3>
          <p>因为js是单线程语言，所以当出现异步任务，这些任务就会加入任务队列（存在执行栈中，先进先出），当主线程（同步任务）走完后，就会执行任务队列里面的任务（我理解为消息订阅，Promise就是这种执行方式，then就是消息订阅机制，把then里面的事件放在任务队列里面，等promise内部的主线程走完后，根据状态机判断，去执行then里的callbacks）。</p>
          <p>上述的js执行机制是循环不断的，每次主线程走完都会去任务队列里面读取事件，所以称为Event Loop</p>
        </li>
        <li>
          <h3>css3 中哪些新增的属性？HTML5 中哪些新增的标签、以及api?</h3>
          <p>HTML5 <a onClick={htmlFold.bind(me)}>{state.htmlTableOpen ? "收起" : "展开"}</a></p>
          {state.htmlTableOpen &&
          <table>
            <thead>
            <tr>
              <th width="10%">新增元素</th>
              <th width="40%">说明</th>
              <th width="10%">新增元素</th>
              <th width="40%">说明</th>
            </tr>
            </thead>
            <tbody>
            {_.chunk(store.getState().html5, 2).map((item, index) => {
              return (<tr key={`html5-${index}`}>
                <td className={item[0].key && "key" || ""}>{item[0].name || ""}</td>
                <td>{item[0].desc || ""}</td>
                <td className={item[1] && item[1].key && "key" || ""}>{item[1] && item[1].name || ""}</td>
                <td>{item[1] && item[1].desc || ""}</td>
              </tr>)
            })}
            </tbody>
          </table>}
          <p>CSS3 <a onClick={cssFold.bind(me)}>{state.cssTableOpen ? "收起" : "展开"}</a></p>
          {state.cssTableOpen &&
          <table>
            <thead>
            <tr>
              <th width="15%">新增元素</th>
              <th width="35%">说明</th>
              <th width="15%">新增元素</th>
              <th width="35%">说明</th>
            </tr>
            </thead>
            <tbody>
            {_.chunk(store.getState().css3, 2).map((item, index) => {
              return (<tr key={`css3-${index}`}>
                <td className={item[0].key && "key" || ""}>{item[0].name || ""}</td>
                <td>{item[0].desc || ""}</td>
                <td className={item[1] && item[1].key && "key" || ""}>{item[1] && item[1].name || ""}</td>
                <td>{item[1] && item[1].desc || ""}</td>
              </tr>)
            })}
            </tbody>
          </table>
          }
          <p>HTML5 API <a onClick={apiFold.bind(me)}>{state.apiTableOpen ? "收起" : "展开"}</a></p>
          {state.apiTableOpen &&
          <table>
            <thead>
            <tr>
              <th width="15%">新增API</th>
              <th width="85%">说明</th>
            </tr>
            </thead>
            <tbody>
            {store.getState().html5Api.map((item, index) => {
              return (<tr key={`html5Api-${index}`}>
                <td className={item.key && "key" || ""}>{item.name || ""}</td>
                <td>{item.desc || ""}</td>
              </tr>)
            })}
            </tbody>
          </table>
          }
        </li>
        <li>
          <h3>跨域有几种解决方案？分别的原理是什么？</h3>
          <p><a target="_blank" href="//shaojun427.github.io/singlePage/rossDomain.pdf">预览</a></p>
        </li>
      </ul>
    </div>)
  }
}

export default Page;