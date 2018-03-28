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
      apiTableOpen: true,
      reqHeadOpen: false,
      resHeadOpen: false
    }
  }
  componentWillMount() {
    const key = window.sessionStorage.getItem("one");
    if(key !== "20180327") {
      location.href = "/"
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
  reqHeadFold() {
    const status = this.state.reqHeadOpen;
    this.setState({
      reqHeadOpen: !status
    })
  }
  resHeadFold() {
    const status = this.state.resHeadOpen;
    this.setState({
      resHeadOpen: !status
    })
  }
  render() {
    const me = this;
    const {state, htmlFold, cssFold, apiFold, reqHeadFold, resHeadFold} = me;
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
          <h3>4、事件循环机制是什么？什么是Event loop?</h3>
          <p>因为js是单线程语言，所以当出现异步任务，这些任务就会加入任务队列（存在执行栈中，先进先出），当主线程（同步任务）走完后，就会执行任务队列里面的任务（我理解为消息订阅，Promise就是这种执行方式，then就是消息订阅机制，把then里面的事件放在任务队列里面，等promise内部的主线程走完后，根据状态机判断，去执行then里的callbacks）。</p>
          <p>上述的js执行机制是循环不断的，每次主线程走完都会去任务队列里面读取事件，所以称为Event Loop</p>
        </li>
        <li>
          <h3>5、css3 中哪些新增的属性？HTML5 中哪些新增的标签、以及api?</h3>
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
          <h3>6、跨域有几种解决方案？分别的原理是什么？</h3>
          <p><a target="_blank" href="//shaojun427.github.io/singlePage/rossDomain.pdf">预览</a></p>
        </li>
        <li>
          <h3>7、一个http 请求包含哪些内容？(请求头、请求体、返回头、返回体)中包含的哪些比较常用的字段</h3>
          <p>一个http请求包含了请求行（请求方法、请求url、请求协议）、请求头、请求体</p>
          <p>请求头： <a onClick={reqHeadFold.bind(me)}>{state.reqHeadOpen ? "收起" : "展开"}</a></p>
          {state.reqHeadOpen &&
          <table>
            <thead>
            <tr>
              <th width="15%">属性</th>
              <th width="20%">例子</th>
              <th width="65%">说明</th>
            </tr>
            </thead>
            <tbody>
            {store.getState().reqHead.map((item, index) => {
              return (<tr key={`reqHead-${index}`}>
                <td className={item.key && "key" || ""}>{item.name || ""}</td>
                <td>{item.default || ""}</td>
                <td>{item.desc || ""}</td>
              </tr>)
            })}
            </tbody>
          </table>
          }
          <p>请求体：通过请求头中的Content-Type来定义mime类型（get请求的请求体是空，不需要定义）</p>
          <p>响应头： <a onClick={resHeadFold.bind(me)}>{state.resHeadOpen ? "收起" : "展开"}</a></p>
          {state.resHeadOpen &&
          <table>
            <thead>
            <tr>
              <th width="15%">属性</th>
              <th width="20%">例子</th>
              <th width="65%">说明</th>
            </tr>
            </thead>
            <tbody>
            {store.getState().resHead.map((item, index) => {
              return (<tr key={`reqHead-${index}`}>
                <td className={item.key && "key" || ""}>{item.name || ""}</td>
                <td>{item.default || ""}</td>
                <td>{item.desc || ""}</td>
              </tr>)
            })}
            </tbody>
          </table>
          }
          <p>响应体：通过响应头中的Content-Type来定义mime类型</p>
        </li>
        <li>
          <h3>http1.x vs http2.x 有哪些优化？每个新增的特性的原理是什么？(比如什么是多路复用、什么是服务端推送等)</h3>
          <p>1、新的二进制格式：协议解析1.x是基于文本解析的，2.x是基于0和1的二进制解析的。</p>
          <p>2、连接共享（多路复用）：一个request对应一个stream并分配一个id，这样一个连接上可以有多个stream，每个stream的frame可以随机的混杂在一起，接收方可以根据stream id将frame再归属到各自不同的request里面。http2.0里的每个stream都可以设置又优先级（Priority）和依赖（Dependency）。</p>
          <p>3、header压缩：http1.x的header由于cookie和user agent很容易膨胀，而且每次都要重复发送。http2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。高效的压缩算法可以很大的压缩header，减少发送包的数量从而降低延迟。</p>
          <p>4、Server Push（服务端推送）：http2.0能通过push的方式将客户端需要的内容预先推送过去，所以也叫“cache push”。另外有一点值得注意的是，客户端如果退出某个业务场景，出于流量或者其它因素需要取消server push，也可以通过发送RST_STREAM类型的frame来做到。</p>
        </li>
        <li>
          <h3>长连接相关的知识，常用的方式有哪些？</h3>
          <p>长连接（Connection:keep-alive）就是客户端与服务器之间创建和保持稳定可靠的连接。TCP协议本身是支持长连接的。</p>
          <p>1、从 HTTP/1.1起，默认使用长连接，用以保持连接特性。在使用长连接的情况下，当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的 TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接。Keep-Alive不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如Apache）中设定这个时间。实现长连接要客户端和服务端都支持长连接。</p>
          <p>2、WebSocket 协议，服务器可以主动推送数据到客户端</p>
        </li>
        <li>
          <h3>前端上常见的性能优化有哪些方式</h3>
          <p>dns缓存，减少dns查询次数</p>
          <p>减少传输过程中实体的大小和请求次数</p>
          <p>——1、js、css资源合并打包压缩</p>
          <p>——2、雪碧图</p>
          <p>——3、合理利用浏览器缓存，缓存一些不太会变动的资源</p>
          <p>——4、减少cookie里没必要的属性</p>
          <p>少用跳转，减少重定向次数</p>
          <p>资源都放到cdn上使用</p>
          <p>图标用iconfont</p>
          <p>js放底部，css放顶部</p>
          <p>减少重绘和回流</p>
          <p>合理使用Viewport 等meta头部</p>
          <p>减少dom节点</p>
          <p>事件代理（事件冒泡原理）</p>
          <p>BigPipe</p>
        </li>
      </ul>
      <h2>框架、类库题</h2>
      <ul>
        <li>
          <h3>1、react 的生命周期</h3>
          <p>getDefaultProps</p>
          <p>getInitialState</p>
          <p>componentWillMount</p>
          <p>render</p>
          <p>componentDidMount</p>
          <p>componentWillReceiveProps（props改变触发）</p>
          <p className="red">-----------------setState-------------------</p>
          <p>shouldComponentUpdate</p>
          <p>componentWillUpdate</p>
          <p>render</p>
          <p>componentDidUpdate</p>
          <p className="red">-----------------setState-------------------</p>
          <p>componentWillUnmount</p>
          <p>componentWillReceiveProps</p>
        </li>
        <li>
          <h3>2、react 的虚拟dom 是什么概念？</h3>
          <p>Virtual DOM 是一个 JavaScript 对象。每次，我们只需要告诉 React 下一个状态是什么，React会自己构建一个新的 Virtual DOM，然后根据新旧 Virtual DOM 快速计算其差异，找出需要重绘或重排的元素，告诉浏览器。浏览器根据相关的更新，重新计算 DOM Tree，重绘页面。</p>
        </li>
        <li>
          <h3>react 的diff 算法的大致原理是什么？</h3>
          <p>diff算法的前提假设</p>
          <p>1、两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构；对于同一层次的一组子节点，它们可以通过唯一的id进行区分。</p>
          <p>2、对于同一层次的一组子节点，它们可以通过唯一的id进行区分。</p>
        </li>
        <li>
          <h3>2、react 最新版本目前是多少？react中的fiber、HOC 是什么意思？最新的版本中做了哪些比较大的优化？</h3>
          <p>16.2</p>
          <p>react用的是Stack reconcile调度策略。这个策略像函数调用栈一样，会深度优先遍历所有的 Virtual DOM 节点，进行Diff。它一定要等整棵 Virtual DOM 计算完成之后，才将任务出栈释放主线程。所以，在浏览器主线程被 React更新状态任务占据的时候，用户与浏览器进行任何的交互都不能得到反馈，只有等到任务结束，才能突然得到浏览器的响应。而fiber是将原来的整个 Virtual DOM 的更新任务拆分成一个个小的任务。每次做完一个小任务之后，放弃一下自己的执行将主线程空闲出来，看看有没有其他的任务。如果有的话，就暂停本次任务，执行其他的任务，如果没有的话，就继续下一个任务。</p>
          <p>fiber将整个页面更新并重渲染过程分为两个阶段。</p>
          <p>1、Reconcile 阶段。此阶段中，依序遍历组件，通过diff 算法，判断组件是否需要更新，给需要更新的组件加上tag。遍历完之后，将所有带有tag的组件加到一个队列中（可以设定优先级）。这个阶段的任务可以被打断。</p>
          <p>2、Commit 阶段。根据在 Reconcile 阶段生成的数组，遍历更新DOM，这个阶段需要一次性执行完。如果是在其他的渲染环境 -- Native，硬件，就会更新对应的元素。</p>
          <p>react新版本变化</p>
          <p>render里面可以直接return组件列表</p>
          <p>setState里面不是新的state，而是一个callback，cb里面return最新的state</p>
        </li>
      </ul>
    </div>)
  }
}

export default Page;