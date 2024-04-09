(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{605:function(e,l,v){"use strict";v.r(l);var a=v(6),_=Object(a.a)({},(function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"简单了解webpack和babel的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单了解webpack和babel的原理"}},[e._v("#")]),e._v(" 简单了解webpack和babel的原理")]),e._v(" "),v("p",[e._v("webpack原理")]),e._v(" "),v("ul",[v("li",[e._v("初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；")]),e._v(" "),v("li",[e._v("开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；")]),e._v(" "),v("li",[e._v("确定入口：根据配置中的 entry 找出所有的入口文件；")]),e._v(" "),v("li",[e._v("编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")]),e._v(" "),v("li",[e._v("完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；")]),e._v(" "),v("li",[e._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；")]),e._v(" "),v("li",[e._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])]),e._v(" "),v("p",[e._v("babel原理")]),e._v(" "),v("p",[e._v("babel的转译过程分为三个阶段：parsing、transforming、generating（解析-转换-生成），以ES6代码转译为ES5，代码为例，babel转译的具体过程如下：")]),e._v(" "),v("ol",[v("li",[e._v("ES6代码输入")]),e._v(" "),v("li",[e._v("babylon 进行解析得到 AST（抽象语法树）")]),e._v(" "),v("li",[e._v("plugin 用 babel-traverse 对 AST 树进行遍历转译,得到新的AST树")]),e._v(" "),v("li",[e._v("用 babel-generator 通过新的AST树生成 ES5 代码")])]),e._v(" "),v("h2",{attrs:{id:"webpack中loader和plugin的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack中loader和plugin的区别"}},[e._v("#")]),e._v(" webpack中loader和plugin的区别")]),e._v(" "),v("p",[e._v("什么是loader?")]),e._v(" "),v("p",[e._v("loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中")]),e._v(" "),v("p",[e._v("什么是plugin？")]),e._v(" "),v("p",[e._v("在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。")]),e._v(" "),v("p",[e._v("区别：")]),e._v(" "),v("ul",[v("li",[e._v("对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss转换为A.css，单纯的文件转换过程")]),e._v(" "),v("li",[e._v("plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务")])]),e._v(" "),v("h2",{attrs:{id:"webpack热更新原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack热更新原理"}},[e._v("#")]),e._v(" webpack热更新原理")]),e._v(" "),v("p",[e._v("简单来说就是：hot-module-replacement-plugin包给webpack-dev-server提供了热更新的能力，它们两者是结合使用的，单独写两个包也是出于功能的解耦来考虑的。")]),e._v(" "),v("ol",[v("li",[e._v("webpack-dev-server(WDS)的功能提供bundle server的能力，就是生成的bundle.js文件可以通过localhost://xxx的方式去访问，另外WDS也提供livereload(浏览器的自动刷新)。")]),e._v(" "),v("li",[e._v("hot-module-replacement-plugin的作用是提供HMR的runtime，并且将runtime注入到bundle.js代码里面去。一旦磁盘里面的文件修改，那么HMR server会将有修改的js module信息发送给HMR runtime，然后HMR runtime去局部更新页面的代码。因此这种方式可以不用刷新浏览器。")])]),e._v(" "),v("p",[e._v("热更新步骤：")]),e._v(" "),v("ol",[v("li",[e._v("当修改了一个或多个文件")]),e._v(" "),v("li",[e._v("文件系统接收更改并通知webpack")]),e._v(" "),v("li",[e._v("webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新")]),e._v(" "),v("li",[e._v("HMR Server使用webSocket通知HMR runtime需要更新，HMR运行时通过HTTP请求更新jsonp")]),e._v(" "),v("li",[e._v("HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新")])])])}),[],!1,null,null,null);l.default=_.exports}}]);