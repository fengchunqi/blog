(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{639:function(e,v,_){"use strict";_.r(v);var s=_(6),n=Object(s.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("参考地址："),_("a",{attrs:{href:"https://www.zhihu.com/question/66629910",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("npm install的实现原理"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"npm模块安装机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#npm模块安装机制"}},[e._v("#")]),e._v(" npm模块安装机制")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("发出"),_("code",[e._v("npm install")]),e._v("命令")])]),e._v(" "),_("li",[_("p",[e._v("查询node_modules目录之中是否已经存在指定模块")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("若存在，不再重新安装")])]),e._v(" "),_("li",[_("p",[e._v("若不存在")]),e._v(" "),_("ul",[_("li",[e._v("npm向registry查询模块压缩包的网址")]),e._v(" "),_("li",[e._v("下载压缩包，存放在根目录下的.npm目录里")]),e._v(" "),_("li",[e._v("解压压缩包到当前项目的node_modules目录")])])])])])]),e._v(" "),_("h2",{attrs:{id:"npm实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#npm实现原理"}},[e._v("#")]),e._v(" npm实现原理")]),e._v(" "),_("p",[e._v("输入"),_("code",[e._v("npm install")]),e._v("命令并敲下回车后，会经历如下几个阶段（以npm 5.5.1为例）：")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("执行工程自身"),_("code",[e._v("preinstall")])]),e._v(" "),_("p",[e._v("当前npm工程如果定义了"),_("code",[e._v("preinstall")]),e._v("钩子此时会被执行。")])]),e._v(" "),_("li",[_("p",[e._v("确定首层依赖模块")]),e._v(" "),_("p",[e._v("首先需要做的是确定工程中的首层依赖，也就是dependencies和devDependencies属性中直接指定的模块（假设此时没有添加"),_("code",[e._v("npm install")]),e._v("参数）。")]),e._v(" "),_("p",[e._v("工程本身是整棵依赖树的根节点，每个首层依赖模块都是根节点下面的一棵子树，npm会开启多进程从每个首层依赖模块开始逐步寻找更深层级的节点。")])]),e._v(" "),_("li",[_("p",[e._v("获取模块")]),e._v(" "),_("p",[e._v("获取模块是一个递归的过程，分为以下几步：")]),e._v(" "),_("ul",[_("li",[e._v("获取模块信息。在下载一个模块之前，首先要确定其版本，这是因为package.json中往往是semantic version（semver，语义化版本）。此时如果版本描述文件（npm-shrinkwrap.json或package-lock.json）中有该模块信息直接拿即可，如果没有则从仓库获取。如packaeg.json中某个包的版本是"),_("code",[e._v("^1.1.0")]),e._v("，npm就会去仓库中获取符合"),_("code",[e._v("1.x.x")]),e._v("形式的最新版本。")]),e._v(" "),_("li",[e._v("获取模块实体。上一步会获取到模块的压缩包地址（resolved字段），npm会用此地址检查本地缓存，缓存中有就直接拿，如果没有则从仓库下载。")]),e._v(" "),_("li",[e._v("查找该模块依赖，如果有依赖则回到第1步，如果没有则停止。")])])]),e._v(" "),_("li",[_("p",[e._v("模块扁平化（dedupe）")]),e._v(" "),_("p",[e._v("上一步获取到的是一棵完整的依赖树，其中可能包含大量重复模块。比如A模块依赖于loadsh，B模块同样依赖于lodash。在npm3以前会严格按照依赖树的结构进行安装，因此会造成模块冗余。")]),e._v(" "),_("p",[e._v("从npm3开始默认加入了一个dedupe的过程。它会遍历所有节点，逐个将模块放在根节点下面，也就是node-modules的第一层。当发现有重复模块时，则将其丢弃。")]),e._v(" "),_("p",[e._v("这里需要对重复模块进行一个定义，它指的是模块名相同且semver兼容。每个semver都对应一段版本允许范围，如果两个模块的版本允许范围存在交集，那么就可以得到一个兼容版本，而不必版本号完全一致，这可以使更多冗余模块在dedupe过程中被去掉。")]),e._v(" "),_("p",[e._v("比如node-modules下foo模块依赖"),_("code",[e._v("lodash@^1.0.0")]),e._v("，bar模块依赖"),_("code",[e._v("lodash@^1.1.0")]),e._v("，则"),_("code",[e._v("^1.1.0")]),e._v("为兼容版本。")]),e._v(" "),_("p",[e._v("而当foo依赖"),_("code",[e._v("lodash@^2.0.0")]),e._v("，bar依赖"),_("code",[e._v("lodash@^1.1.0")]),e._v("，则依据semver的规则，二者不存在兼容版本。会将一个版本放在node_modules中，另一个仍保留在依赖树里。")]),e._v(" "),_("p",[e._v("举个例子，假设一个依赖树原本是这样：")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("node_modules\n-- foo\n---- lodash@version1\n\n-- bar\n---- lodash@version2\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br"),_("span",{staticClass:"line-number"},[e._v("5")]),_("br"),_("span",{staticClass:"line-number"},[e._v("6")]),_("br")])]),_("p",[e._v("假设version1和version2是兼容版本，则经过dedupe会成为下面的形式：")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("node_modules\n-- foo\n\n-- bar\n\n-- lodash（保留的版本为兼容版本）\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br"),_("span",{staticClass:"line-number"},[e._v("5")]),_("br"),_("span",{staticClass:"line-number"},[e._v("6")]),_("br")])]),_("p",[e._v("假设version1和version2为非兼容版本，遇到的第一个会被放在根节点下，后面的版本保留在依赖树中：")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("node_modules\n-- foo\n-- lodash@version1\n\n-- bar\n---- lodash@version2\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br"),_("span",{staticClass:"line-number"},[e._v("5")]),_("br"),_("span",{staticClass:"line-number"},[e._v("6")]),_("br")])])]),e._v(" "),_("li",[_("p",[e._v("安装模块")]),e._v(" "),_("p",[e._v("这一步将会更新工程中的node_modules，并执行模块中的生命周期函数（按照"),_("code",[e._v("preinstall")]),e._v("、"),_("code",[e._v("install")]),e._v("、"),_("code",[e._v("postinstall")]),e._v("的顺序）。")])]),e._v(" "),_("li",[_("p",[e._v("执行工程自身生命周期")]),e._v(" "),_("p",[e._v("当前npm工程如果定义了钩子此时会被执行（按照"),_("code",[e._v("install")]),e._v("、"),_("code",[e._v("postinstall")]),e._v("、"),_("code",[e._v("prepublish")]),e._v("、"),_("code",[e._v("prepare")]),e._v("的顺序）。")])])]),e._v(" "),_("p",[e._v("最后一步是生成或更新版本描述文件，"),_("code",[e._v("npm install")]),e._v("过程完成。")]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("TIPS")]),e._v(" "),_("p",[e._v("常见问题：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("npm install xxx")]),e._v("安装具体包时，为了保证构建的完整性和一致性，保证package.json和package.lock.json是正确的，所以都会先去遍历package.json，检查registry上每个依赖包是否存在")]),e._v(" "),_("li",[_("code",[e._v("npm install")]),e._v("会执行"),_("code",[e._v("npm prepublish")]),e._v("的钩子：属于npm早期设计时的不足，官方也发现这里很容易让人迷惑，现在已经给出了废弃的提示："),_("a",{attrs:{href:"http://link.zhihu.com/?target=https%3A//docs.npmjs.com/misc/scripts%23deprecation-note",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("scripts | npm Documentation"),_("OutboundLink")],1),e._v("，但是仍然会运行，"),_("code",[e._v("npm ci")]),e._v("时也会运行，可以用"),_("code",[e._v("prepublishOnly")]),e._v("替代")]),e._v(" "),_("li",[e._v('如果在packakge.json中指定依赖版本为"latest"，但是如果同时存在package.lock.json，那除了第一次安装是最新版本，后续的版本还是会被锁定在lock文件里面的那个指定的版本')])])]),e._v(" "),_("h2",{attrs:{id:"先行版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#先行版本"}},[e._v("#")]),e._v(" 先行版本")]),e._v(" "),_("p",[e._v("当要发布大版本或者核心的Feature时，但是又不能保证这个版本的功能100%正常。这个时候就需要通过发布先行版本。比较常见的先行版本包括：内测版、灰度版本了和RC版本。Semver规范中使用alpha、beta、rc(以前叫做gama)来修饰即将要发布的版本。它们的含义是：")]),e._v(" "),_("ul",[_("li",[e._v("alpha: 内部版本")]),e._v(" "),_("li",[e._v("beta: 公测版本")]),e._v(" "),_("li",[e._v("rc: 即Release candiate，正式版本的候选版本")])]),e._v(" "),_("p",[e._v("比如：1.0.0-alpha.0, 1.0.0-alpha.1, 1.0.0-beta.0, 1.0.0-rc.0, 1.0.p-rc.1 等版本。alpha, beta, rc后需要带上次数信息。")]),e._v(" "),_("h2",{attrs:{id:"依赖版本号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#依赖版本号"}},[e._v("#")]),e._v(" 依赖版本号")]),e._v(" "),_("p",[e._v("在npm的依赖的规则中，还有"),_("code",[e._v("~")]),e._v("、"),_("code",[e._v(">")]),e._v("、"),_("code",[e._v("<")]),e._v("、"),_("code",[e._v("=")]),e._v("、"),_("code",[e._v(">=")]),e._v("、"),_("code",[e._v("<=")]),e._v("、"),_("code",[e._v("-")]),e._v("、"),_("code",[e._v("||")]),e._v("、"),_("code",[e._v("x")]),e._v("、"),_("code",[e._v("X")]),e._v("、"),_("code",[e._v("*")]),e._v("等符号；当使用"),_("code",[e._v("npm install XX")]),e._v("时，被安装的依赖的版本号前会默认加上"),_("code",[e._v("^")]),e._v("符号。")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("^")]),e._v("：表示同一主版本号中，不小于指定版本号的版本号")]),e._v(" "),_("li",[_("code",[e._v("~")]),e._v("：表示同一主版本号和次版本号中，不小于指定版本号的版本号")]),e._v(" "),_("li",[_("code",[e._v(">")]),e._v("、"),_("code",[e._v("<")]),e._v("、"),_("code",[e._v("=")]),e._v("、"),_("code",[e._v(">=")]),e._v("、"),_("code",[e._v("<=")]),e._v("、"),_("code",[e._v("-")]),e._v("：用来指定一个版本号范围，"),_("code",[e._v("1.0.0 - 1.2.0")]),e._v("，注意使用"),_("code",[e._v("-")]),e._v("的时候，必须两边都有空格。")]),e._v(" "),_("li",[_("code",[e._v("||")]),e._v("：表示或")]),e._v(" "),_("li",[_("code",[e._v("x")]),e._v("、"),_("code",[e._v("X")]),e._v("、"),_("code",[e._v("*")]),e._v("：表示通配符")])])])}),[],!1,null,null,null);v.default=n.exports}}]);