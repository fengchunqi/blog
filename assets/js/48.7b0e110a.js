(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{586:function(v,_,t){"use strict";t.r(_);var e=t(6),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("参考链接："),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/M8FPfiFPguU9XRGpdXFfEQ",target:"_blank",rel:"nofollow noopener noreferrer"}},[v._v("面试官：说说 HTTP1.0/1.1/2.0 的区别?"),t("OutboundLink")],1)]),v._v(" "),t("h2",{attrs:{id:"http1-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http1-0"}},[v._v("#")]),v._v(" HTTP1.0")]),v._v(" "),t("p",[v._v("HTTP协议的第二个版本，第一个在通讯中指定版本号的HTTP协议版本。")]),v._v(" "),t("ul",[t("li",[v._v("版本信息现在会随着每个请求发送（HTTP1.0被追加到GET行）。")]),v._v(" "),t("li",[v._v("状态代码行也会在响应开始时发送，允许浏览器本身了解请求的成功或失败，并相应地调整其行为（如以特定方式更新或使用本地缓存）。")]),v._v(" "),t("li",[v._v("引入了HTTP头的概念，无论是对于请求还是响应，允许传输元数据，并使协议非常灵活和可扩展。")]),v._v(" "),t("li",[t("code",[v._v("Content-Type")]),v._v("标头告诉客户端实际返回的内容的内容类型。在"),t("code",[v._v("Content-Type")]),v._v("标头帮助下，增加了传输除纯文本HTML文件外的其他类型文档的能力。")]),v._v(" "),t("li",[v._v("HTTP1.0浏览器与服务器只保持短暂的连接，每次请求都需要与服务器建立一个TCP连接，如果需要建立长连接，需要设置一个非标准的Connection字段"),t("code",[v._v("Connection: keep-alive")]),v._v("。")])]),v._v(" "),t("h2",{attrs:{id:"http1-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http1-1"}},[v._v("#")]),v._v(" HTTP1.1")]),v._v(" "),t("p",[v._v("HTTP1.0的多种不同的实现运用起来有些混乱，HTTP1.1是第一个标准化版本。")]),v._v(" "),t("ul",[t("li",[v._v("默认支持长连接（"),t("code",[v._v("Connection: keep-alive")]),v._v("），节省了多次打开它的时间，以显示嵌入到单个原始文档中的资源。")]),v._v(" "),t("li",[v._v("增加流水线操作，允许在第一个应答被完全发送之前发送第二个请求，以降低通信的延迟，但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容。")]),v._v(" "),t("li",[v._v("支持响应分块。")]),v._v(" "),t("li",[v._v("引入"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Range",target:"_blank",rel:"nofollow noopener noreferrer"}},[v._v("Range"),t("OutboundLink")],1),v._v("，允许只请求资源某个部分。")]),v._v(" "),t("li",[v._v("引入额外的缓存控制机制，如"),t("code",[v._v("If-Modified-Since")]),v._v("、"),t("code",[v._v("If-Unmodified-Since")]),v._v("、"),t("code",[v._v("If-Match")]),v._v("、"),t("code",[v._v("If-None-Match")]),v._v("等。")]),v._v(" "),t("li",[v._v("引入内容协商，包括语言，编码，或类型，并允许客户端和服务器约定以最适当的内容进行交换。")]),v._v(" "),t("li",[v._v("通过Host头，能够使不同的域名配置在同一个IP地址的服务器。")]),v._v(" "),t("li",[v._v("安全性得到了提高。")]),v._v(" "),t("li",[v._v("添加了其他的请求方法："),t("code",[v._v("put")]),v._v("、"),t("code",[v._v("delete")]),v._v("、"),t("code",[v._v("options")]),v._v("等。")])]),v._v(" "),t("h2",{attrs:{id:"http2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[v._v("#")]),v._v(" HTTP2")]),v._v(" "),t("p",[v._v("HTTP2在相比之前版本，性能上有很大的提升：")]),v._v(" "),t("ul",[t("li",[v._v("多路复用。")]),v._v(" "),t("li",[v._v("二进制分帧。")]),v._v(" "),t("li",[v._v("首部压缩。")]),v._v(" "),t("li",[v._v("服务器推送。")])]),v._v(" "),t("h3",{attrs:{id:"多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[v._v("#")]),v._v(" 多路复用")]),v._v(" "),t("p",[v._v("HTTP2复用TCP连接，在一个连接里，客户端和浏览器都可以「同时」发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了“队头堵塞”。在HTTP1中，每次请求都会建立一次HTTP连接，也就是我们常说的3次握手4次挥手，这个过程在一次请求过程中占用了相当长的时间，即使开启了Keep-Alive，解决了多次连接的问题，但是依然有两个效率上的问题：")]),v._v(" "),t("ol",[t("li",[v._v("串行的文件传输。当请求a文件时，b文件只能等待，等待a连接到服务器、服务器处理文件、服务器返回文件，这三个步骤。我们假设这三步用时都是1秒，那么a文件用时为3秒，b文件传输完成用时为6秒，依此类推。（注：此项计算有一个前提条件，就是浏览器和服务器是单通道传输）。")]),v._v(" "),t("li",[v._v("连接数过多。我们假设Apache设置了最大并发数为300，因为浏览器限制，浏览器为了控制资源会有6-8个TCP连接的限制，服务器能承载的并发数有限，后面访问的就需要等待前面某个请求处理完成。")])]),v._v(" "),t("p",[v._v("HTTP2的多路复用就是为了解决上述的两个性能问题。在HTTP2中，传输是基于二进制帧的，有两个非常重要的概念，分别是帧（frame）和流（stream）。帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。多路复用，就是在一个TCP连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免HTTP旧版本中的队头阻塞问题，极大的提高传输性能。")]),v._v(" "),t("ul",[t("li",[v._v("同域名下所有通信都在单个连接上完成，消除了因多个TCP连接而带来的延时和内存消耗。")]),v._v(" "),t("li",[v._v("单个连接上可以并行交错的请求和响应，之间互不干扰。")])]),v._v(" "),t("h3",{attrs:{id:"二进制分帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[v._v("#")]),v._v(" 二进制分帧")]),v._v(" "),t("p",[v._v("帧是HTTP2通信中最小单位信息。HTTP2采用二进制格式传输数据，而非HTTP1.x的文本格式，解析起来更高效。将请求和响应数据分割为更小的帧，并且它们采用二进制编码。HTTP2中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装，这也是多路复用同时发送数据的实现条件。")]),v._v(" "),t("h3",{attrs:{id:"首部压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首部压缩"}},[v._v("#")]),v._v(" 首部压缩")]),v._v(" "),t("p",[v._v("HTTP2在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送。首部表在HTTP2的连接存续期内始终存在，由客户端和服务器共同渐进地更新。例如两个请求，请求一发送了所有的头部字段，第二个请求则只需要发送差异数据，这样可以减少冗余数据，降低开销。")]),v._v(" "),t("h3",{attrs:{id:"服务器推送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[v._v("#")]),v._v(" 服务器推送")]),v._v(" "),t("p",[v._v("HTTP2引入服务器推送，允许服务端推送资源给客户端。服务器会顺便把一些客户端需要的资源一起推送到客户端，如在响应一个页面请求中，就可以随同页面的其它资源，免得客户端再次创建连接发送请求到服务器端获取，这种方式非常合适加载静态资源。")])])}),[],!1,null,null,null);_.default=a.exports}}]);