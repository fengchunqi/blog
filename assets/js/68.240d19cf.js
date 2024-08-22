(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{603:function(v,_,e){"use strict";e.r(_);var t=e(6),l=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"有没有了解http的缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有没有了解http的缓存"}},[v._v("#")]),v._v(" 有没有了解HTTP的缓存")]),v._v(" "),e("ul",[e("li",[v._v("硬性缓存是对比的哪个header值？")]),v._v(" "),e("li",[v._v("说一下什么是协商缓存？协商缓存会在什么时候读？")]),v._v(" "),e("li",[v._v("有没有了解资源的缓存策略？ html、css、js的缓存怎么设置？")])]),v._v(" "),e("p",[v._v("链接："),e("RouterLink",{attrs:{to:"/pages/articles/http/前端缓存相关.html"}},[v._v("前端缓存相关")])],1),v._v(" "),e("p",[v._v("html、css、js的缓存：不缓存html，只缓存js和css，因为css，js文件有hash值，但是html文件没有，html如果不更新，那么我们在指定时间内永远没法取到更新后的js和css值。")]),v._v(" "),e("h2",{attrs:{id:"fetch发送2次请求的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch发送2次请求的原因"}},[v._v("#")]),v._v(" fetch发送2次请求的原因")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/7269952188927017015",target:"_blank",rel:"nofollow noopener noreferrer"}},[v._v("参考链接"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("跨源资源共享（Cross-Origin Resource Sharing，CORS）是一种机制，允许在受控的条件下，不同源的网页能够请求和共享资源。由于浏览器的同源策略限制了跨域请求，CORS提供了一种方式来解决在Web应用中进行跨域数据交换的问题。\nCORS的基本思想是，服务器在响应中提供一个标头（HTTP头），指示哪些源被允许访问资源。浏览器在发起跨域请求时会先发送一个预检请求（OPTIONS请求）到服务器，服务器通过设置适当的CORS标头来指定是否允许跨域请求，并指定允许的请求源、方法、标头等信息。")]),v._v(" "),e("p",[v._v("不会触发CORS预检请求。这样的请求为简单请求。若请求满足所有下述条件，则该请求可视为简单请求：")]),v._v(" "),e("ul",[e("li",[v._v("HTTP方法限制：只能使用GET、HEAD、POST这三种HTTP方法之一。如果请求使用了其他HTTP方法，就不再被视为简单请求。")]),v._v(" "),e("li",[v._v("自定义标头限制：请求的HTTP标头只能是以下几种常见的标头：Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type（仅限于application/x-www-form-urlencoded、multipart/form-data、text/plain）。HTML头部header field字段：DPR、Download、Save-Data、Viewport-Width、WIdth。如果请求使用了其他标头，同样不再被视为简单请求。")]),v._v(" "),e("li",[v._v("请求中没有使用ReadableStream对象。")]),v._v(" "),e("li",[v._v("不使用自定义请求标头：请求不能包含用户自定义的标头。")]),v._v(" "),e("li",[v._v("请求中的任意XMLHttpRequestUpload对象均没有注册任何事件监听器；XMLHttpRequestUpload对象可以使用XMLHttpRequest.upload属性访问")])]),v._v(" "),e("p",[v._v("因此非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为预检请求。需预检的请求要求必须首先使用OPTIONS方法发起一个预检请求到服务器（第一次状态码是204），以获知服务器是否允许该实际请求。")]),v._v(" "),e("ul",[e("li",[v._v("预检请求是在进行跨域资源共享CORS时，由浏览器自动发起的一种OPTIONS请求。它的存在是为了保障安全，并允许服务器决定是否允许跨域请求。")]),v._v(" "),e("li",[v._v("跨域请求是指在浏览器中向不同域名、不同端口或不同协议的资源发送请求。出于安全原因，浏览器默认禁止跨域请求，只允许同源策略。而当网页需要进行跨域请求时，浏览器会自动发送一个预检请求，以确定是否服务器允许实际的跨域请求。")]),v._v(" "),e("li",[v._v("预检请求中包含了一些额外的头部信息，如Origin和Access-Control-Request-Method等，用于告知服务器实际请求的方法和来源。服务器收到预检请求后，可以根据这些头部信息，进行验证和授权判断。如果服务器认可该跨域请求，将返回一个包含Access-Control-Allow-Origin等头部信息的响应，浏览器才会继续发送实际的跨域请求。")]),v._v(" "),e("li",[v._v("使用预检请求机制可以有效地防范跨域请求带来的安全风险，保护用户数据和隐私。")])]),v._v(" "),e("h2",{attrs:{id:"https协议是如何保证安全的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https协议是如何保证安全的"}},[v._v("#")]),v._v(" HTTPS协议是如何保证安全的")]),v._v(" "),e("p",[v._v("链接："),e("RouterLink",{attrs:{to:"/pages/articles/http/HTTPS协议是如何保证安全的.html"}},[v._v("HTTPS协议是如何保证安全的")])],1),v._v(" "),e("h2",{attrs:{id:"浏览器的核心进程和线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的核心进程和线程"}},[v._v("#")]),v._v(" 浏览器的核心进程和线程")]),v._v(" "),e("ul",[e("li",[v._v("Browser进程：浏览器的主进程（负责协调、主控），只有一个。")]),v._v(" "),e("li",[v._v("第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建。")]),v._v(" "),e("li",[v._v("GPU进程：最多一个，用于3D绘制。")]),v._v(" "),e("li",[v._v("浏览器渲染进程（内核（Renderer进程））：默认每个Tab页面一个进程，互不影响，控制页面渲染，脚本执行，事件处理等（有时候会优化，如多个空白tab会合并成一个进程）。")])]),v._v(" "),e("p",[v._v("浏览器通常由以下常驻线程组成：")]),v._v(" "),e("ul",[e("li",[v._v("GUI线程：负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。当界面需要重绘（Repaint）或由于某种操作引发回流(Reflow)时，该线程就会执行。注意，GUI渲染线程与JS引擎线程是互斥的。当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。")]),v._v(" "),e("li",[v._v("事件触发线程：归属于浏览器而不是JS引擎，用来控制事件循环。当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）。")]),v._v(" "),e("li",[v._v("定时器线程：setInterval与setTimeout所在线程。浏览器定时计数器并不是由JS引擎计数的，因为JS引擎是单线程的，如果处于阻塞线程状态就会影响记计时的准确，因此通过单独线程来计时并触发定时是更为合理的方案。")]),v._v(" "),e("li",[v._v("JS引擎线程：也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）。JS引擎线程负责解析Javascript脚本，运行代码。")]),v._v(" "),e("li",[v._v("网络请求线程：在XMLHttpRequest在连接后是通过浏览器新开一个线程请求。将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由JavaScript引擎执行。")])]),v._v(" "),e("h2",{attrs:{id:"性能优化方式有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化方式有哪些"}},[v._v("#")]),v._v(" 性能优化方式有哪些")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/7273119689185673253",target:"_blank",rel:"nofollow noopener noreferrer"}},[v._v("参考地址"),e("OutboundLink")],1)]),v._v(" "),e("ol",[e("li",[e("p",[v._v("HTML&CSS")]),v._v(" "),e("ul",[e("li",[v._v("减少DOM数量，减轻浏览器渲染计算负担。")]),v._v(" "),e("li",[v._v("使用异步和延迟加载js文件，避免js文件阻塞页面渲染。")]),v._v(" "),e("li",[v._v("压缩HTML、CSS代码体积，删除不要的代码，合并CSS文件，减少HTTP请求次数和请求大小。")]),v._v(" "),e("li",[v._v("减少CSS选择器的复杂程度，复杂度越高浏览器解析时间越长。")]),v._v(" "),e("li",[v._v("避免使用CSS表达式在javascript代码中。")]),v._v(" "),e("li",[v._v("使用css渲染合成层如"),e("code",[v._v("transform")]),v._v("、"),e("code",[v._v("opacity")]),v._v("、"),e("code",[v._v("will-change")]),v._v("等，提高页面相应速度减少卡顿现象。")]),v._v(" "),e("li",[v._v("动画使用CSS3过渡，减少动画复杂度，还可以使用硬件加速。")]),v._v(" "),e("li",[v._v("图片懒加载，虚拟列表。")])])]),v._v(" "),e("li",[e("p",[v._v("JS")]),v._v(" "),e("ul",[e("li",[v._v("减少DOM操作数量。")]),v._v(" "),e("li",[v._v("避免使用"),e("code",[v._v("with")]),v._v("语句、"),e("code",[v._v("eval")]),v._v("函数，避免引擎难以优化。")]),v._v(" "),e("li",[v._v("尽量使用原生方法，执行效率高。")]),v._v(" "),e("li",[v._v("将js文件放到文件页面底部，避免阻塞页面渲染。")]),v._v(" "),e("li",[v._v("使用事件委托，减少事件绑定次数。")]),v._v(" "),e("li",[v._v("合理使用缓存，避免重复请求数据。")])])]),v._v(" "),e("li",[e("p",[v._v("Vue")]),v._v(" "),e("ul",[e("li",[v._v("合理使用"),e("code",[v._v("watch")]),v._v("和"),e("code",[v._v("computed")]),v._v("，数据变化就会执行，避免使用太多，减少不必要的开销。")]),v._v(" "),e("li",[v._v("合理使用组件，提高代码可维护性的同事也会降低代码组件的耦合性。")]),v._v(" "),e("li",[v._v("使用路由懒加载，在需要的时候才会进行加载，避免一次性加载太多路由，导致页面阻塞。")]),v._v(" "),e("li",[v._v("使用Vuex缓存数据。")]),v._v(" "),e("li",[v._v("合理使用"),e("code",[v._v("mixins")]),v._v("，抽离公共代码封装成模块，避免重复代码。。")]),v._v(" "),e("li",[v._v("合理使用"),e("code",[v._v("v-if")]),v._v("、"),e("code",[v._v("v-show")]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("v-for")]),v._v("不要和"),e("code",[v._v("v-if")]),v._v("一起使用，"),e("code",[v._v("v-for")]),v._v("的优先级会比"),e("code",[v._v("v-if")]),v._v("高。")]),v._v(" "),e("li",[e("code",[v._v("v-for")]),v._v("中不要用"),e("code",[v._v("index")]),v._v("做"),e("code",[v._v("key")]),v._v("，要保证"),e("code",[v._v("key")]),v._v("的唯一性。")]),v._v(" "),e("li",[v._v("使用异步组件，避免一次性加载太多组件。")]),v._v(" "),e("li",[v._v("避免使用"),e("code",[v._v("v-html")]),v._v("，存在安全问风险和性能问题，可以使用"),e("code",[v._v("v-text")]),v._v("。")]),v._v(" "),e("li",[v._v("使用"),e("code",[v._v("keep-alive")]),v._v("缓存组件，避免组件重复加载。")])])]),v._v(" "),e("li",[e("p",[v._v("React")]),v._v(" "),e("ul",[e("li",[v._v("合理使用"),e("code",[v._v("PureComponent")]),v._v("、"),e("code",[v._v("shouldComponentUpdate")]),v._v("、"),e("code",[v._v("React.memo")]),v._v("跳过不必要的组件更新。")]),v._v(" "),e("li",[v._v("状态下放，缩小状态影响范围。")]),v._v(" "),e("li",[e("code",[v._v("useMemo")]),v._v("、"),e("code",[v._v("useCallback")]),v._v("实现稳定的"),e("code",[v._v("Props")]),v._v("值，防止传给子组件的"),e("code",[v._v("Props")]),v._v("每次都是新的引用。")]),v._v(" "),e("li",[v._v("列表项使用"),e("code",[v._v("key")]),v._v("属性。")]),v._v(" "),e("li",[v._v("动画库直接修改DOM属性，动画启动后，每次动画属性改变不会引起组件重新Render，而是直接修改了dom上相关属性值。")])])]),v._v(" "),e("li",[e("p",[v._v("Webpack优化")]),v._v(" "),e("ul",[e("li",[v._v("代码切割，使用code splitting将代码进行分割，避免将所有代码打包到一个文件，减少响应体积。")]),v._v(" "),e("li",[v._v("按需加载代码，在使用使用的时候加载代码。")]),v._v(" "),e("li",[v._v("压缩代码体积，可以减小代码体积。")]),v._v(" "),e("li",[v._v("优化静态资源，使用字体图标、雪碧图、webp格式的图片、svg图标等。")]),v._v(" "),e("li",[v._v("使用Tree Shaking删除未被引用的代码。")]),v._v(" "),e("li",[v._v("开启gzip压缩。")]),v._v(" "),e("li",[v._v("静态资源使用CDN加载，减少服务器压力。")])])]),v._v(" "),e("li",[e("p",[v._v("网络优化")]),v._v(" "),e("ul",[e("li",[v._v("使用HTTP/2。")]),v._v(" "),e("li",[v._v("减少、合并HTTP请求，通过合并CSS、JS文件、精灵图等方式减少请求数量。")]),v._v(" "),e("li",[v._v("压缩文件，开启nginx，Gzip对静态资源压缩。")]),v._v(" "),e("li",[v._v("使用HTTP缓存，如强缓存、协商缓存。")]),v._v(" "),e("li",[v._v("使用CDN，将网站资源分布到各地服务器上，减少访问延迟。")])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);