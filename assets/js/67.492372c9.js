(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{603:function(e,v,_){"use strict";_.r(v);var l=_(6),a=Object(l.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"webpack和babel的原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack和babel的原理"}},[e._v("#")]),e._v(" webpack和babel的原理")]),e._v(" "),_("p",[e._v("webpack原理")]),e._v(" "),_("ol",[_("li",[e._v("初始化参数：从配置文件和Shell语句中读取与合并参数，得出最终的参数；")]),e._v(" "),_("li",[e._v("开始编译：用上一步得到的参数初始化"),_("code",[e._v("Compiler")]),e._v("对象，加载所有配置的插件，执行对象的"),_("code",[e._v("run")]),e._v("方法开始执行编译；")]),e._v(" "),_("li",[e._v("确定入口：根据配置中的"),_("code",[e._v("entry")]),e._v("找出所有的入口文件；")]),e._v(" "),_("li",[e._v("编译模块：从入口文件出发，调用所有配置的Loader对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")]),e._v(" "),_("li",[e._v("完成模块编译：在经过第4步使用Loader翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；")]),e._v(" "),_("li",[e._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再把每个Chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；")]),e._v(" "),_("li",[e._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])]),e._v(" "),_("p",[e._v("babel原理")]),e._v(" "),_("p",[e._v("babel的转译过程分为三个阶段：解析（Parsing）、转换（Transforming）和生成（Generating），以ES6代码转译为ES5，代码为例，babel转译的具体过程如下：")]),e._v(" "),_("ol",[_("li",[e._v("ES6代码输入；")]),e._v(" "),_("li",[e._v("Parsing（解析）：Babel解析器（babel-parser）将代码转换成抽象语法树（AST）；")]),e._v(" "),_("li",[e._v("Transforming（转换）：Babel中的变换插件对AST进行各种操作，比如添加、删除节点或者替换节点。例如常用的babel-traverse对AST树进行遍历；")]),e._v(" "),_("li",[e._v("Generating（生成）：Babel生成器（babel-generator）将转换后的AST转换回代码。")])]),e._v(" "),_("h2",{attrs:{id:"webpack中loader和plugin的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack中loader和plugin的区别"}},[e._v("#")]),e._v(" webpack中loader和plugin的区别")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("什么是loader？")]),e._v(" "),_("p",[e._v("loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中。")])]),e._v(" "),_("li",[_("p",[e._v("什么是plugin？")]),e._v(" "),_("p",[e._v("在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。")])]),e._v(" "),_("li",[_("p",[e._v("区别")]),e._v(" "),_("ul",[_("li",[e._v("对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将"),_("code",[e._v("A.scss")]),e._v("转换为"),_("code",[e._v("A.css")]),e._v("，单纯的文件转换过程。")]),e._v(" "),_("li",[e._v("plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务。")])])])]),e._v(" "),_("h2",{attrs:{id:"webpack热更新原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack热更新原理"}},[e._v("#")]),e._v(" webpack热更新原理")]),e._v(" "),_("p",[e._v("简单来说就是："),_("code",[e._v("hot-module-replacement-plugin")]),e._v("包给"),_("code",[e._v("webpack-dev-server")]),e._v("提供了热更新的能力，它们两者是结合使用的，单独写两个包也是出于功能的解耦来考虑的。")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("webpack-dev-server")]),e._v("（WDS）的功能提供bundle server的能力，就是生成的"),_("code",[e._v("bundle.js")]),e._v("文件可以通过"),_("code",[e._v("localhost://xxx")]),e._v("的方式去访问，另外WDS也提供livereload（浏览器的自动刷新）。")]),e._v(" "),_("li",[_("code",[e._v("hot-module-replacement-plugin")]),e._v("的作用是提供HMR的runtime，并且将runtime注入到"),_("code",[e._v("bundle.js")]),e._v("代码里面去。一旦磁盘里面的文件修改，那么HMR server会将有修改的js module信息发送给HMR runtime，然后HMR runtime去局部更新页面的代码。因此这种方式可以不用刷新浏览器。")])]),e._v(" "),_("p",[e._v("热更新步骤：")]),e._v(" "),_("ol",[_("li",[e._v("当修改了一个或多个文件；")]),e._v(" "),_("li",[e._v("文件系统接收更改并通知webpack；")]),e._v(" "),_("li",[e._v("webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；")]),e._v(" "),_("li",[e._v("HMR Server使用webSocket通知HMR runtime需要更新，HMR运行时通过HTTP请求更新json；")]),e._v(" "),_("li",[e._v("HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);