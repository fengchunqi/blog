(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{601:function(v,_,e){"use strict";e.r(_);var l=e(6),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"webpack和babel的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack和babel的原理"}},[v._v("#")]),v._v(" webpack和babel的原理")]),v._v(" "),e("p",[v._v("webpack原理")]),v._v(" "),e("ol",[e("li",[v._v("初始化参数：从配置文件和Shell语句中读取与合并参数，得出最终的参数；")]),v._v(" "),e("li",[v._v("开始编译：用上一步得到的参数初始化"),e("code",[v._v("Compiler")]),v._v("对象，加载所有配置的插件，执行对象的"),e("code",[v._v("run")]),v._v("方法开始执行编译；")]),v._v(" "),e("li",[v._v("确定入口：根据配置中的"),e("code",[v._v("entry")]),v._v("找出所有的入口文件；")]),v._v(" "),e("li",[v._v("编译模块：从入口文件出发，调用所有配置的Loader对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")]),v._v(" "),e("li",[v._v("完成模块编译：在经过第4步使用Loader翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；")]),v._v(" "),e("li",[v._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再把每个Chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；")]),v._v(" "),e("li",[v._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])]),v._v(" "),e("p",[v._v("babel原理")]),v._v(" "),e("p",[v._v("babel的转译过程分为三个阶段：解析（Parsing）、转换（Transforming）和生成（Generating），以ES6转译为ES5为例，babel转译的具体过程如下：")]),v._v(" "),e("ol",[e("li",[v._v("ES6代码输入；")]),v._v(" "),e("li",[v._v("Parsing（解析）：Babel解析器（babel-parser）将代码转换成抽象语法树（AST）；")]),v._v(" "),e("li",[v._v("Transforming（转换）：Babel中的变换插件对AST进行各种操作，比如添加、删除节点或者替换节点。例如常用的babel-traverse对AST树进行遍历；")]),v._v(" "),e("li",[v._v("Generating（生成）：Babel生成器（babel-generator）将转换后的AST转换回代码。")])]),v._v(" "),e("h2",{attrs:{id:"webpack中loader和plugin的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack中loader和plugin的区别"}},[v._v("#")]),v._v(" webpack中loader和plugin的区别")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("什么是loader？")]),v._v(" "),e("p",[v._v("loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中。")])]),v._v(" "),e("li",[e("p",[v._v("什么是plugin？")]),v._v(" "),e("p",[v._v("在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。")])]),v._v(" "),e("li",[e("p",[v._v("区别")]),v._v(" "),e("ul",[e("li",[v._v("对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将"),e("code",[v._v("A.scss")]),v._v("转换为"),e("code",[v._v("A.css")]),v._v("，单纯的文件转换过程。")]),v._v(" "),e("li",[v._v("plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务。")])])]),v._v(" "),e("li",[e("p",[v._v("常用的plugin和loader\nloader：")]),v._v(" "),e("ul",[e("li",[v._v("file-loader：用于处理文件类型资源，如jpg，png等图片。")]),v._v(" "),e("li",[v._v("url-loader：它与file-loader作用相似，也是处理图片的，只不过url-loader可以设置一个根据图片大小进行不同的操作，如果该图片大小大于指定的大小，则将图片进行打包资源，否则将图片转换为base64字符串合并到js文件里。")]),v._v(" "),e("li",[v._v("style-loader：通过注入"),e("code",[v._v("style")]),v._v("标签将CSS插入到DOM中。")]),v._v(" "),e("li",[v._v("css-loader：仅处理css的各种加载语法（"),e("code",[v._v("@import")]),v._v("和"),e("code",[v._v("url()")]),v._v("函数等）。")]),v._v(" "),e("li",[v._v("postcss-loader。")]),v._v(" "),e("li",[v._v("less-loader：解析less，转换为css。")]),v._v(" "),e("li",[v._v("ts-loader：打包编译Typescript。")]),v._v(" "),e("li",[v._v("babel-loader：基于babel，用于解析JavaScript文件。")]),v._v(" "),e("li",[v._v("markdown-loader：markdown编译器和解析器。")]),v._v(" "),e("li",[v._v("raw-loader：可将文件作为字符串导入。")])]),v._v(" "),e("p",[v._v("plugin：")]),v._v(" "),e("ul",[e("li",[v._v("HtmlWebpackPlugin：生成html文件，为html引入外部资源如script、link。")]),v._v(" "),e("li",[v._v("copy-webpack-plugin：将已经存在的单个文件或整个目录复制到构建目录。")]),v._v(" "),e("li",[v._v("clean-webpack-plugin：删除webpack的output.path中的所有文件。")]),v._v(" "),e("li",[v._v("mini-css-extract-plugin：将CSS提取到单独的文件中，为每个包含CSS的JS文件创建一个CSS文件。")]),v._v(" "),e("li",[v._v("SplitChunksPlugin：代码分割。")]),v._v(" "),e("li",[v._v("webpack.HotModuleReplacementPlugin：热更新插件。")]),v._v(" "),e("li",[v._v("webpack.DefinePlugin：创建一个在编译时可以配置的全局常量。")]),v._v(" "),e("li",[v._v("webpack-bundle-analyzer：看到项目各模块的大小，可以按需优化。")])])])]),v._v(" "),e("h2",{attrs:{id:"webpack热更新原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack热更新原理"}},[v._v("#")]),v._v(" webpack热更新原理")]),v._v(" "),e("p",[v._v("简单来说就是："),e("code",[v._v("hot-module-replacement-plugin")]),v._v("包给"),e("code",[v._v("webpack-dev-server")]),v._v("提供了热更新的能力，它们两者是结合使用的，单独写两个包也是出于功能的解耦来考虑的。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("webpack-dev-server")]),v._v("（WDS）的功能提供bundle server的能力，就是生成的"),e("code",[v._v("bundle.js")]),v._v("文件可以通过"),e("code",[v._v("localhost://xxx")]),v._v("的方式去访问，另外WDS也提供livereload（浏览器的自动刷新）。")]),v._v(" "),e("li",[e("code",[v._v("hot-module-replacement-plugin")]),v._v("的作用是提供HMR的runtime，并且将runtime注入到"),e("code",[v._v("bundle.js")]),v._v("代码里面去。一旦磁盘里面的文件修改，那么HMR server会将有修改的js module信息发送给HMR runtime，然后HMR runtime去局部更新页面的代码。因此这种方式可以不用刷新浏览器。")])]),v._v(" "),e("p",[v._v("热更新步骤：")]),v._v(" "),e("ol",[e("li",[v._v("当修改了一个或多个文件；")]),v._v(" "),e("li",[v._v("文件系统接收更改并通知webpack；")]),v._v(" "),e("li",[v._v("webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；")]),v._v(" "),e("li",[v._v("HMR Server使用webSocket通知HMR runtime需要更新，HMR运行时通过HTTP请求更新json；")]),v._v(" "),e("li",[v._v("HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。")])]),v._v(" "),e("h2",{attrs:{id:"vite与webpack区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite与webpack区别"}},[v._v("#")]),v._v(" Vite与Webpack区别")]),v._v(" "),e("p",[v._v("Vite和Webpack是两种流行的前端构建工具，它们在设计理念、构建机制和性能优化上有显著的区别。Vite之所以比Webpack快，主要是因为它在开发模式下利用了现代浏览器的原生ES模块（ESM）支持，以及更高效的构建策略。以下是它们的详细对比：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("构建机制")]),v._v(" "),e("p",[v._v("Webpack")]),v._v(" "),e("ul",[e("li",[v._v("基于打包的构建工具。")]),v._v(" "),e("li",[v._v("在开发模式下，Webpack会将所有模块打包成一个或多个bundle文件（如"),e("code",[v._v("main.js")]),v._v("）。")]),v._v(" "),e("li",[v._v("每次代码更改时，Webpack需要重新构建整个bundle，导致开发服务器的启动和热更新较慢。")])]),v._v(" "),e("p",[v._v("Vite")]),v._v(" "),e("ul",[e("li",[v._v("基于原生ES模块（ESM）的构建工具。")]),v._v(" "),e("li",[v._v("在开发模式下，Vite不会打包所有模块，而是利用浏览器的原生ESM支持，按需加载模块。")]),v._v(" "),e("li",[v._v("每次代码更改时，Vite只需要重新构建改动的模块，因此启动和热更新速度更快。")])])]),v._v(" "),e("li",[e("p",[v._v("开发服务器")]),v._v(" "),e("p",[v._v("Webpack")]),v._v(" "),e("ul",[e("li",[v._v("开发服务器依赖于打包后的bundle文件。")]),v._v(" "),e("li",[v._v("启动时需要先打包所有模块，导致启动时间较长。")]),v._v(" "),e("li",[v._v("热更新（HMR）需要重新构建整个bundle或部分chunk。")])]),v._v(" "),e("p",[v._v("Vite")]),v._v(" "),e("ul",[e("li",[v._v("开发服务器直接基于原生ESM，按需加载模块。")]),v._v(" "),e("li",[v._v("启动时只需要启动开发服务器，不需要预先打包，因此启动时间极短。")]),v._v(" "),e("li",[v._v("热更新（HMR）只更新改动的模块，速度更快。")])])]),v._v(" "),e("li",[e("p",[v._v("生产构建")]),v._v(" "),e("p",[v._v("Webpack")]),v._v(" "),e("ul",[e("li",[v._v("在生产模式下，Webpack会将所有模块打包成优化的bundle文件。")]),v._v(" "),e("li",[v._v("支持多种优化策略（如代码分割、Tree Shaking、压缩等）。")])]),v._v(" "),e("p",[v._v("Vite")]),v._v(" "),e("ul",[e("li",[v._v("在生产模式下，Vite使用Rollup进行打包。")]),v._v(" "),e("li",[v._v("Rollup的打包机制更轻量，生成的代码更简洁，性能更好。")])])])]),v._v(" "),e("p",[v._v("Vite为什么比Webpack快？")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("开发模式下的按需加载")]),v._v(" "),e("ul",[e("li",[v._v("Vite利用浏览器的原生ESM支持，按需加载模块。")]),v._v(" "),e("li",[v._v("只有在浏览器请求某个模块时，Vite才会动态编译并返回该模块。")]),v._v(" "),e("li",[v._v("这种方式避免了Webpack在开发模式下需要预先打包所有模块的开销。")])])]),v._v(" "),e("li",[e("p",[v._v("更快的启动速度")]),v._v(" "),e("ul",[e("li",[v._v("Vite的启动时间几乎与项目规模无关，因为它不需要预先打包所有模块。")]),v._v(" "),e("li",[v._v("Webpack的启动时间随着项目规模的增长而增加，因为它需要预先打包所有模块。")])])]),v._v(" "),e("li",[e("p",[v._v("更快的热更新")]),v._v(" "),e("ul",[e("li",[v._v("Vite的热更新只更新改动的模块，而不是整个bundle。")]),v._v(" "),e("li",[v._v("Webpack的热更新需要重新构建整个bundle或部分chunk，速度较慢。")])])]),v._v(" "),e("li",[e("p",[v._v("基于Rollup的生产构建")]),v._v(" "),e("ul",[e("li",[v._v("Vite在生产模式下使用Rollup进行打包，生成的代码更简洁，性能更好。")]),v._v(" "),e("li",[v._v("Webpack虽然功能强大，但在某些场景下生成的代码可能比Rollup更臃肿。")])])])]),v._v(" "),e("p",[v._v("功能对比")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("特性")]),v._v(" "),e("th",[v._v("Vite")]),v._v(" "),e("th",[v._v("Webpack")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("开发模式构建机制")]),v._v(" "),e("td",[v._v("基于原生ESM，按需加载模块")]),v._v(" "),e("td",[v._v("基于打包，生成bundle文件")])]),v._v(" "),e("tr",[e("td",[v._v("启动速度")]),v._v(" "),e("td",[v._v("极快，与项目规模无关")]),v._v(" "),e("td",[v._v("较慢，随项目规模增长而增加")])]),v._v(" "),e("tr",[e("td",[v._v("热更新（HMR）")]),v._v(" "),e("td",[v._v("只更新改动的模块，速度更快")]),v._v(" "),e("td",[v._v("需要重新构建bundle或chunk")])]),v._v(" "),e("tr",[e("td",[v._v("生产构建工具")]),v._v(" "),e("td",[v._v("使用Rollup")]),v._v(" "),e("td",[v._v("使用Webpack自身")])]),v._v(" "),e("tr",[e("td",[v._v("插件生态")]),v._v(" "),e("td",[v._v("插件生态较新，但增长迅速")]),v._v(" "),e("td",[v._v("插件生态非常成熟")])]),v._v(" "),e("tr",[e("td",[v._v("配置复杂度")]),v._v(" "),e("td",[v._v("配置简单，开箱即用")]),v._v(" "),e("td",[v._v("配置复杂，功能强大但学习成本高")])]),v._v(" "),e("tr",[e("td",[v._v("Tree Shaking")]),v._v(" "),e("td",[v._v("支持，基于Rollup")]),v._v(" "),e("td",[v._v("支持，功能强大")])]),v._v(" "),e("tr",[e("td",[v._v("代码分割")]),v._v(" "),e("td",[v._v("支持，基于Rollup")]),v._v(" "),e("td",[v._v("支持，功能强大")])])])]),v._v(" "),e("p",[v._v("总结")]),v._v(" "),e("ul",[e("li",[v._v("Vite的优势在于开发模式下的极速启动和热更新，适合现代前端项目和快速迭代的开发环境。")]),v._v(" "),e("li",[v._v("Webpack的优势在于功能强大、插件生态成熟，适合复杂项目和高度定制化的构建需求。")])]),v._v(" "),e("p",[v._v("如果你的项目需要快速启动和热更新，并且对现代前端技术栈有较好的支持，Vite是一个更好的选择。如果你的项目需要高度定制化的构建流程，或者依赖Webpack的插件生态，Webpack仍然是更合适的选择。")])])}),[],!1,null,null,null);_.default=i.exports}}]);