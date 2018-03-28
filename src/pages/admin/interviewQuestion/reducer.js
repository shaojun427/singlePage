import {combineReducers} from 'redux';

let html5 = (defaultState = [{
  "name": "<article>",
  "desc": "表示一段视频并提供播放的用户界面",
  "key": true
}, {
  "name": "<aside>",
  "desc": "定义页面的侧边栏内容",
  "key": true
}, {
  "name": "<audio>",
  "desc": "定义音频内容",
  "key": true
}, {
  "name": "<bdi>",
  "desc": "允许您设置一段文本，使其脱离其父元素的文本方向设置。"
}, {
  "name": "<canvas>",
  "desc": "定义图形，比如图表和其他图像,标签只是图形容器，您必须使用脚本来绘制图形",
  "key": true
}, {
  "name": "<command>",
  "desc": "New	定义命令按钮，比如单选按钮、复选框或按钮"
}, {
  "name": "<datalist>",
  "desc": "定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。"
}, {
  "name": "<details>",
  "desc": "用于描述文档或文档某个部分的细节",
  "key": true
}, {
  "name": "<dialog>",
  "desc": "定义对话框，比如提示框",
  "key": true
}, {
  "name": "<embed>",
  "desc": "定义嵌入的内容，比如插件"
}, {
  "name": "<figcaption>",
  "desc": "定义<figure> 元素的标题"
}, {
  "name": "<figure>",
  "desc": "规定独立的流内容（图像、图表、照片、代码等等）。"
}, {
  "name": "<footer>",
  "desc": "定义 section 或 document 的页脚。",
  "key": true
}, {
  "name": "<header>",
  "desc": "定义了文档的头部区域",
  "key": true
}, {
  "name": "<keygen>",
  "desc": "规定用于表单的密钥对生成器字段。"
}, {
  "name": "<mark>",
  "desc": "定义带有记号的文本。请在需要突出显示文本时使用 <m> 标签。"
}, {
  "name": "<meter>",
  "desc": "定义度量衡。仅用于已知最大和最小值的度量。"
}, {
  "name": "<nav>",
  "desc": "定义导航链接的部分",
  "key": true
}, {
  "name": "<output>",
  "desc": "定义不同类型的输出，比如脚本的输出。"
}, {
  "name": "<progress>",
  "desc": "定义运行中的进度（进程）。",
  "key": true
}, {
  "name": "<rp>",
  "desc": "<rp> 标签在 ruby 注释中使用，以定义不支持 ruby 元素的浏览器所显示的内容。"
}, {
  "name": "<rt>",
  "desc": "<rt> 标签定义字符（中文注音或字符）的解释或发音。"
}, {
  "name": "<ruby>",
  "desc": "<ruby> 标签定义 ruby 注释（中文注音或字符）。"
}, {
  "name": "<section>",
  "desc": "<section> 标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。",
  "key": true
}, {
  "name": "<source>",
  "desc": "<source> 标签为媒介元素（比如 <video> 和 <audio>）定义媒介资源。"
}, {
  "name": "<summary>",
  "desc": "<summary> 标签包含 details 元素的标题，'details' 元素用于描述有关文档或文档片段的详细信息。"
}, {
  "name": "<time>",
  "desc": "定义日期或时间，或者两者。"
}, {
  "name": "<track>",
  "desc": "<track> 标签为诸如 video 元素之类的媒介规定外部文本轨道"
}, {
  "name": "<video>",
  "desc": "<video> 标签定义视频，比如电影片段或其他视频流。",
  "key": true
}, {
  "name": "<wbr>",
  "desc": "规定在文本中的何处适合添加换行符。"
}], action) => {
  return defaultState;
};

let css3 = (defaultState = [{
  "name": "@keyframes",
  "desc": "定义一个动画,@keyframes定义的动画名称用来被animation-name所使用。",
  "key": true
}, {
  "name": "animation",
  "desc": "复合属性。检索或设置对象所应用的动画特效。",
  "key": true
}, {
  "name": "animation-name",
  "desc": "检索或设置对象所应用的动画名称 ,必须与规则@keyframes配合使用，因为动画名称由@keyframes定义",
  "key": true
}, {
  "name": "animation-duration",
  "desc": "检索或设置对象动画的持续时间",
  "key": true
}, {
  "name": "animation-timing-function",
  "desc": "检索或设置对象动画的过渡类型",
  "key": true
}, {
  "name": "animation-delay",
  "desc": "检索或设置对象动画的延迟时间",
  "key": true
}, {
  "name": "animation-iteration-count",
  "desc": "检索或设置对象动画的循环次数",
  "key": true
}, {
  "name": "animation-direction",
  "desc": "检索或设置对象动画在循环中是否反向运动",
  "key": true
}, {
  "name": "animation-play-state",
  "desc": "检索或设置对象动画的状态",
  "key": true
}, {
  "name": "background-clip",
  "desc": "指定对象的背景图像向外裁剪的区域。"
}, {
  "name": "background-origin",
  "desc": "设置或检索对象的背景图像计算background-position时的参考原点(位置)。"
}, {
  "name": "background-size",
  "desc": "检索或设置对象的背景图像的尺寸大小。"
}, {
  "name": "border-bottom-left-radius",
  "desc": "设置或检索对象的左下角圆角边框。提供2个参数，2个参数以空格分隔，每个参数允许设置1个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数"
}, {
  "name": "border-bottom-right-radius",
  "desc": "设置或检索对象的右下角圆角边框。"
}, {
  "name": "border-image",
  "desc": "设置或检索对象的边框样式使用图像来填充。",
  "key": true
}, {
  "name": "border-image-outset",
  "desc": "规定边框图像超过边框的量。"
}, {
  "name": "border-image-repeat",
  "desc": "规定图像边框是否应该被重复（repeated）、拉伸（stretched）或铺满（rounded）。"
}, {
  "name": "border-image-slice",
  "desc": "规定图像边框的向内偏移。"
}, {
  "name": "border-image-source",
  "desc": "规定要使用的图像，代替 border-style 属性中设置的边框样式。"
}, {
  "name": "border-image-width",
  "desc": "规定图像边框的宽度。"
}, {
  "name": "border-radius",
  "desc": "设置或检索对象使用圆角边框。",
  "key": true
}, {
  "name": "border-top-left-radius",
  "desc": "定义左上角边框的形状。"
}, {
  "name": "border-top-right-radius",
  "desc": "定义右上角边框的形状。"
}, {
  "name": "box-decoration-break",
  "desc": "规定行内元素被折行"
}, {
  "name": "box-shadow",
  "desc": "向方框添加一个或多个阴影。"
}, {
  "name": "overflow-x",
  "desc": "如果内容溢出了元素内容区域，是否对内容的左/右边缘进行裁剪。",
  "key": true
}, {
  "name": "overflow-y",
  "desc": "如果内容溢出了元素内容区域，是否对内容的上/下边缘进行裁剪。",
  "key": true
}, {
  "name": "overflow-style",
  "desc": "规定溢出元素的首选滚动方法。"
}, {
  "name": "rotation",
  "desc": "围绕由 rotation-point 属性定义的点对元素进行旋转。"
}, {
  "name": "rotation-point",
  "desc": "定义距离上左边框边缘的偏移点。"
}, {
  "name": "color-profile",
  "desc": "允许使用源的颜色配置文件的默认以外的规范"
}, {
  "name": "opacity",
  "desc": "设置一个元素的透明度级别",
  "key": true
}, {
  "name": "rendering-intent",
  "desc": "允许超过默认颜色配置文件渲染意向的其他规范",
  "key": true
}, {
  "name": "flex",
  "desc": "复合属性。设置或检索弹性盒模型对象的子元素如何分配空间。",
  "key": true
}, {
  "name": "flex-grow",
  "desc": "设置或检索弹性盒的扩展比率。",
  "key": true
}, {
  "name": "flex-shrink",
  "desc": "设置或检索弹性盒的收缩比率。",
  "key": true
}, {
  "name": "flex-basis",
  "desc": "设置或检索弹性盒伸缩基准值。",
  "key": true
}, {
  "name": "flex-flow",
  "desc": "复合属性。设置或检索弹性盒模型对象的子元素排列方式。",
  "key": true
}, {
  "name": "flex-direction",
  "desc": "该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置。",
  "key": true
}, {
  "name": "flex-wrap",
  "desc": "该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。",
  "key": true
}, {
  "name": "align-content",
  "desc": "在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。",
  "key": true
}, {
  "name": "align-items",
  "desc": "定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。",
  "key": true
}, {
  "name": "align-self",
  "desc": "定义flex子项单独在侧轴（纵轴）方向上的对齐方式。",
  "key": true
}, {
  "name": "justify-content",
  "desc": "设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。",
  "key": true
}, {
  "name": "order",
  "desc": "设置或检索弹性盒模型对象的子元素出现的順序。",
  "key": true
}, {
  "name": "@font-face",
  "desc": "一个规则，允许网站下载并使用其他超过\"Web- safe\"字体的字体",
  "key": true
}, {
  "name": "text-overflow",
  "desc": "指定当文本溢出包含的元素，应该发生什么",
  "key": true
}, {
  "name": "text-shadow",
  "desc": "为文本添加阴影",
  "key": true
}, {
  "name": "text-wrap",
  "desc": "指定文本换行规则",
  "key": true
}, {
  "name": "word-break",
  "desc": "指定非CJK文字的断行规则",
  "key": true
}, {
  "name": "word-wrap",
  "desc": "设置浏览器是否对过长的单词进行换行。",
  "key": true
}, {
  "name": "font-stretch",
  "desc": "收缩或拉伸当前的字体系列"
}, {
  "name": "grid-rows",
  "desc": "指定在网格中每列的高度"
}, {
  "name": "grid-columns",
  "desc": "指定在网格中每列的宽度"
}, {
  "name": "transform",
  "desc": "适用于2D或3D转换的元素",
  "key": true
}, {
  "name": "transform-origin",
  "desc": "允许您更改转化元素位置",
  "key": true
}, {
  "name": "transform-style",
  "desc": "3D空间中的指定如何嵌套元素",
  "key": true
}, {
  "name": "perspective",
  "desc": "指定3D元素是如何查看透视图",
  "key": true
}, {
  "name": "perspective-origin",
  "desc": "指定3D元素底部位置",
  "key": true
}, {
  "name": "backface-visibility",
  "desc": "定义一个元素是否应该是可见的，不对着屏幕时",
  "key": true
}, {
  "name": "transition",
  "desc": "此属性是 transition-property、transition-duration、transition-timing-function、transition-delay 的简写形式。",
  "key": true
}, {
  "name": "transition-property",
  "desc": "设置用来进行过渡的 CSS 属性。",
  "key": true
}, {
  "name": "transition-duration",
  "desc": "设置过渡进行的时间长度。",
  "key": true
}, {
  "name": "transition-timing-function",
  "desc": "设置过渡进行的时序函数。",
  "key": true
}, {
  "name": "transition-delay",
  "desc": "指定过渡开始的时间。",
  "key": true
}, {
  "name": "box-sizing",
  "desc": "允许您为了适应区域以某种方式定义某些元素",
  "key": true
}, {
  "name": "resize",
  "desc": "定义元素是否可以改变大小",
  "key": true
}], action) => {
  return defaultState;
};

let html5Api = (defaultState = [{
  "name": "sessionStorage",
  "desc": "sessionStorage对象存储特定于某个会话的数据，也就是该数据只保持到浏览器关闭。这个对象就像会话cookie，也会在浏览器关闭后消失。存储在sessionStorage中的数据可以跨越页面刷新而存在，同时如果浏览器支持，浏览器崩溃并重启之后依然可用（FireFox和WebKit都支持，IE不支持） ",
  "key": true
}, {
  "name": "localStorage",
  "desc": "要访问同一个localStorage对象，页面必须来自同一个域名，使用同一种协议，在同一个端口上",
  "key": true
}, {
  "name": "File API",
  "desc": "File API在表单中的文件输入字段的基础上，又添加了一些直接访问文件信息的接口。H5在DOM中为文件输入元素添加了一个files集合，在通过文本输入字段选择了一或多个文件时，files集合中将包含一组File对象，每个File对象对应着一个文件。每个File对象都有下列只读属性",
  "key": true
}, {
  "name": "FileReader",
  "desc": "FlieReader类型实现的是一种异步文件读取机制。可以把FileReader想象成XMLHttpRequest，区别只是它读取的是文件心痛，而不是远程服务器。",
  "key": true
}, {
  "name": "Web Workers",
  "desc": "专用Web Worker提供可一个简单的方法使的web内容能够在后台运行脚本。一旦worker创建后，它可以向由它的创建者指定的事件监听函数传递消息，这样改worker生成的所有任务就都会接收到这个消息。worker线程能够在不干扰UI的情况下执行任务。",
  "key": true
}, {
  "name": "history对象",
  "desc": "history对象保存着用户上网的历史记录，从窗口被打开的那一刻算起。h5中的history对象新增了两个新方法：history.pushState()和history.replaeState();  ",
  "key": true
}, {
  "name": "drag & drop",
  "desc": "拖拽事件",
  "key": true
}], action) => {
  return defaultState;
};

let reducer = combineReducers({html5, css3, html5Api});

export default reducer;