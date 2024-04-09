(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{674:function(t,s,a){"use strict";a.r(s);var v=a(6),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIPS")]),t._v(" "),a("p",[t._v("Linux学习笔记")])]),t._v(" "),a("h2",{attrs:{id:"linux分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux分类"}},[t._v("#")]),t._v(" Linux分类")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu    界面华丽, 有完善的管理系统和软件支持")]),t._v(" "),a("li",[t._v("centOs    很多公司在生产环境不是centOs, 来源于RHEL")]),t._v(" "),a("li",[t._v("Debian    内核非常小, 非常稳定, 适用于硬盘空间小内存小的机器")]),t._v(" "),a("li",[t._v("RedHat    基于Linux")])]),t._v(" "),a("p",[t._v("Linux: FHS协议 (file system hierarchy standard) 文件层次化系统")]),t._v(" "),a("p",[t._v("根目录路径:")]),t._v(" "),a("BlogImage",{attrs:{src:"https://file.frenchleave.cn/LQ2PEj3VJfmTWoey8HYmcXI8QChA1lzI/linux.webp"}}),t._v(" "),a("ul",[a("li",[t._v("/usr  (Unix software resource) 软件主要执行程序")]),t._v(" "),a("li",[t._v("/var  (variable) 系统运行相关")]),t._v(" "),a("li",[t._v("/bin 可执行文件")]),t._v(" "),a("li",[t._v("/sbin 也是存放可执行文件, 只允许管理员")]),t._v(" "),a("li",[t._v("/boot")]),t._v(" "),a("li",[t._v("/dev")]),t._v(" "),a("li",[t._v("/etc    安装的配置文件")]),t._v(" "),a("li",[t._v("/home    用户目录  /root在根目录下")]),t._v(" "),a("li",[t._v("/opt    第三方软件目录")])]),t._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("ul",[a("li",[t._v("cd 进入")]),t._v(" "),a("li",[t._v("cd .. 回到上一级目录")]),t._v(" "),a("li",[t._v("cd ~ 回到当前的主文件夹")]),t._v(" "),a("li",[t._v("ls ll 查看文件")]),t._v(" "),a("li",[t._v("ls -al 可以查看到隐藏文件")]),t._v(" "),a("li",[t._v("mkdir 创建一个路径")]),t._v(" "),a("li",[t._v("mkdir -p test1/test2  如果前面的路径没有则会自动创建")]),t._v(" "),a("li",[t._v("rmdir  删除空的路径")]),t._v(" "),a("li",[t._v("rm -rf 删除路径所有文件")])]),t._v(" "),a("h2",{attrs:{id:"文件权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[t._v("#")]),t._v(" 文件权限")]),t._v(" "),a("p",[t._v("第一个字符")]),t._v(" "),a("ul",[a("li",[t._v('普通文件的文件权限第一个字符为 "-"')]),t._v(" "),a("li",[t._v('目录文件的文件权限第一个字符为 "d"')]),t._v(" "),a("li",[t._v('字符设备文件的文件权限第一个字符为 "c", 块设备文件的文件权限第一个字符为 "b"')]),t._v(" "),a("li",[t._v('符号链接文件的文件权限第一个字符为 "s"')])]),t._v(" "),a("p",[t._v("后面分三组, 每组三个字符:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一组: 表示当前所属用户的权限")])]),t._v(" "),a("li",[a("p",[t._v("第二组: 当前所属组的权限")])]),t._v(" "),a("li",[a("p",[t._v("第三组: 其他用户的权限")])]),t._v(" "),a("li",[a("p",[t._v("r 有权限读")])]),t._v(" "),a("li",[a("p",[t._v("w有权限写")])]),t._v(" "),a("li",[a("p",[t._v("x有权限执行")])])]),t._v(" "),a("p",[t._v("rwx: 二进制表示 4 2 1, 可以用一个数代表一组的权限, 比如3代表 -wx")]),t._v(" "),a("p",[t._v("pwd 展示当前所处的路径")]),t._v(" "),a("p",[t._v("vi编辑中")]),t._v(" "),a("ul",[a("li",[t._v("h往左, j往下, k往上, l往右, 加数字表示往哪个方向移动多少")]),t._v(" "),a("li",[t._v("翻页: ctrl + F B  翻半页 Ctrl + D U")]),t._v(" "),a("li",[t._v("+ 光标移到下一个非空格行")]),t._v(" "),a("li",[t._v("0 回到行首  $回到行尾  G最后一行  gg开头一行")]),t._v(" "),a("li",[t._v("/ 向下查找最近的  ? 向上查找")]),t._v(" "),a("li",[t._v("tail 文件  查看文件最后十行")]),t._v(" "),a("li",[t._v("tail -f 文件  修改时会自动刷新")]),t._v(" "),a("li",[t._v("tail -20f 查看20行")]),t._v(" "),a("li",[t._v('cat 文件名 |grep "" 过滤带有关键字的行 也可以再加grep多层过滤')]),t._v(" "),a("li",[t._v("chmod rwx  加权限")])]),t._v(" "),a("h2",{attrs:{id:"http协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("五层网络协议")]),t._v(" "),a("ul",[a("li",[t._v("应用层 (浏览器HTTP, FTP, DNS, SMPT, Telnet)")]),t._v(" "),a("li",[t._v("传输层 (TCP/UDP)")]),t._v(" "),a("li",[t._v("网络层 (IP, ICMP)")]),t._v(" "),a("li",[t._v("数据链路层 (如何传输)")]),t._v(" "),a("li",[t._v("物理层")])])]),t._v(" "),a("li",[a("p",[t._v("七层网络协议")]),t._v(" "),a("ul",[a("li",[t._v("应用层")]),t._v(" "),a("li",[t._v("表示层 (加密格式转换)")]),t._v(" "),a("li",[t._v("会话层 (解除或者建立和其他节点的建立)")]),t._v(" "),a("li",[t._v("传输层")]),t._v(" "),a("li",[t._v("网络层")]),t._v(" "),a("li",[t._v("数据链路层")]),t._v(" "),a("li",[t._v("物理层")])])]),t._v(" "),a("li",[a("p",[t._v("返回码")]),t._v(" "),a("ul",[a("li",[t._v("200 成功")]),t._v(" "),a("li",[t._v("404 没找到")]),t._v(" "),a("li",[t._v("302 重定向")]),t._v(" "),a("li",[t._v("502 服务器错误")]),t._v(" "),a("li",[t._v("304 多次请求出现")])])])]),t._v(" "),a("p",[t._v("HTTP (hypertext transfer protoc)")]),t._v(" "),a("ul",[a("li",[t._v("reque: 请求头, 数据体 (文本格式, 二进制格式 (带有分隔符)")]),t._v(" "),a("li",[t._v("response: 返回头, 返回体")]),t._v(" "),a("li",[t._v("cache control可否缓存")]),t._v(" "),a("li",[t._v("public: 可以被任何中间服务器缓存, 包括服务器代理服务器")]),t._v(" "),a("li",[t._v("private: 只能被一个东西缓存, 服务器可以, 代理服务器不能")]),t._v(" "),a("li",[t._v("no-cache: 不要相信缓存, 使用缓存前要向服务器验证")]),t._v(" "),a("li",[t._v("only-if-cached: 只要有缓存就不请求服务器")])]),t._v(" "),a("p",[t._v("到期时间:")]),t._v(" "),a("ul",[a("li",[t._v("max-age: 缓存的最大时间, 单位s")]),t._v(" "),a("li",[t._v("max-stale: 表示客户端可以接受过期资源, 但不能超过自己所设的过期时间")]),t._v(" "),a("li",[t._v("min-fresh: 表示客户端希望在指定时间内获得最新的响应")])]),t._v(" "),a("p",[t._v("重新验证加载:")]),t._v(" "),a("ul",[a("li",[t._v("must-  revalidate 在使用缓存之前验证资源状态, 如果资源过期则不能使用")]),t._v(" "),a("li",[t._v("proxy-revalidate: 和上面的相同, 适用于共享缓存")]),t._v(" "),a("li",[t._v("no-store不适用缓存")]),t._v(" "),a("li",[t._v("no-transform:  不许对缓存资源进行资源转换")])]),t._v(" "),a("h2",{attrs:{id:"后端的规范与思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端的规范与思想"}},[t._v("#")]),t._v(" 后端的规范与思想")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("分层")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("web层 (接受和发送http请求, 封装)")])]),t._v(" "),a("li",[a("p",[t._v("业务逻辑层 (服务层: XXXService)")])]),t._v(" "),a("li",[a("p",[t._v("DAO层")]),t._v(" "),a("p",[t._v("DateBase (DB) : 存数据\n业务: 对对象进行操作\n如果要存储: 对象转为数据\n如果要读取: 数据转为对象")])]),t._v(" "),a("li",[a("p",[t._v("持久层: 存在磁盘上")]),t._v(" "),a("p",[t._v("文件, 数据库")])])]),t._v(" "),a("p",[t._v("每层的命名:")]),t._v(" "),a("ul",[a("li",[t._v("web层:  LoginController (接受参数, 判断是否非法, 传给服务层)")]),t._v(" "),a("li",[t._v("服务层: LoginService (获取这个用户的密码, 进行比较)")]),t._v(" "),a("li",[t._v("DAO: LoginDAO (从数据库获取数据, 并转换为对象)")]),t._v(" "),a("li",[t._v("Domain: User")])])]),t._v(" "),a("li",[a("p",[t._v("模块化")]),t._v(" "),a("ul",[a("li",[t._v("Es6导入和导出")]),t._v(" "),a("li",[t._v('Require ("") 引入模块, 如果是自己的则需要写全路径')]),t._v(" "),a("li",[t._v("exports和module.exports开始都是指向同一个对象 (exports == module.exports  为true) , 如果修改属性则是都可以访问, 如果直接修改对象则导出的永远是 module.exports")])])])]),t._v(" "),a("p",[t._v("Nodejs的模块是运行在一个函数中, 相当于有五个参数 "),a("code",[t._v("exports")]),t._v(", "),a("code",[t._v("require")]),t._v(", "),a("code",[t._v("module")]),t._v(", "),a("code",[t._v("__filename")]),t._v(", "),a("code",[t._v("__dirname")])]),t._v(" "),a("h2",{attrs:{id:"socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[t._v("#")]),t._v(" Socket")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("事件")]),t._v(" "),a("ul",[a("li",[t._v("connect")]),t._v(" "),a("li",[t._v("data: 发送的信息")]),t._v(" "),a("li",[t._v("end")]),t._v(" "),a("li",[t._v("timeout")]),t._v(" "),a("li",[t._v("error")]),t._v(" "),a("li",[t._v("close")])])]),t._v(" "),a("li",[a("p",[t._v("属性")]),t._v(" "),a("ul",[a("li",[t._v("remoteAddress 远端的地址")]),t._v(" "),a("li",[t._v("remotePort 端口")]),t._v(" "),a("li",[t._v("localAddress")]),t._v(" "),a("li",[t._v("localPort")])])]),t._v(" "),a("li",[a("p",[t._v("方法")]),t._v(" "),a("ul",[a("li",[t._v("setTimeout")]),t._v(" "),a("li",[t._v("write: 发送消息")]),t._v(" "),a("li",[t._v("setEncoding")]),t._v(" "),a("li",[t._v("end: 关闭")])])])]),t._v(" "),a("h2",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" Server")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("事件")]),t._v(" "),a("ul",[a("li",[t._v('server.on("",function(){})')]),t._v(" "),a("li",[t._v("listening: 服务启动触发")]),t._v(" "),a("li",[t._v("connection: 有新的连接触发, 有一个参数socket")]),t._v(" "),a("li",[t._v("close: 关闭")]),t._v(" "),a("li",[t._v("error: 出错")])])]),t._v(" "),a("li",[a("p",[t._v("方法")]),t._v(" "),a("ul",[a("li",[t._v("listen: 启动监听")]),t._v(" "),a("li",[t._v("close: 关闭")]),t._v(" "),a("li",[t._v("address: 查看地址")])])])]),t._v(" "),a("h2",{attrs:{id:"fs文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs文件系统"}},[t._v("#")]),t._v(" fs文件系统")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("options: 可选参数, 该参数是一个对象, 用于指定在写入文件时需要使用的选项, 该对象包括的属性有flag属性, mode属性, encoding属性")]),t._v(" "),a("ul",[a("li",[t._v("flag属性表示对该文件执行何种操作")]),t._v(" "),a("li",[t._v("mode属性可以用于指定该文件被打开时的读写权限, 默认值为066 (可读可写 rwx) , 该属性值是用一个3位数字表示文件或目录所有者, 所属组以及其他人的读写权限, 1表示可执行权限, 2表示可写权限, 4表示可读权限")]),t._v(" "),a("li",[t._v('encoding属性可以用于指定以何种字符编码方式将内容写入到文件中, 默认的编码方式是"utf8", 也可以改成"base64", "ascii"或者其他的字符编码方式')])]),t._v(" "),a("p",[t._v("flag参数:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("r")]),t._v(" "),a("td",[t._v("以读取模式打开文件, 如果文件不存在抛出异常")])]),t._v(" "),a("tr",[a("td",[t._v("r+")]),t._v(" "),a("td",[t._v("以读写模式打开文件, 如果文件不存在抛出异常")])]),t._v(" "),a("tr",[a("td",[t._v("rs")]),t._v(" "),a("td",[t._v("以同步的方式读取文件")])]),t._v(" "),a("tr",[a("td",[t._v("rs+")]),t._v(" "),a("td",[t._v("以同步的方式读取和写入文件")])]),t._v(" "),a("tr",[a("td",[t._v("w")]),t._v(" "),a("td",[t._v("以写入模式打开文件, 如果不存在则创建")])]),t._v(" "),a("tr",[a("td",[t._v("wx")]),t._v(" "),a("td",[t._v("类似 "),a("code",[t._v("w")]),t._v(", 但是如果路径存在, 则文件写入失败")])]),t._v(" "),a("tr",[a("td",[t._v("w+")]),t._v(" "),a("td",[t._v("以读写模式打开文件, 如果文件不存在则创建")])]),t._v(" "),a("tr",[a("td",[t._v("wx+")]),t._v(" "),a("td",[t._v("类似 "),a("code",[t._v("wx+")]),t._v(", 但是如果路径存在, 则文件读写失败")])]),t._v(" "),a("tr",[a("td",[t._v("a")]),t._v(" "),a("td",[t._v("以追加模式打开文件, 如果文件不存在则创建")])]),t._v(" "),a("tr",[a("td",[t._v("ax")]),t._v(" "),a("td",[t._v("类似 "),a("code",[t._v("a")]),t._v(", 但是如果路径存在, 则文件追加失败")])]),t._v(" "),a("tr",[a("td",[t._v("a+")]),t._v(" "),a("td",[t._v("以读取追加模式打开文件, 如果文件不存在则创建")])]),t._v(" "),a("tr",[a("td",[t._v("ax+")]),t._v(" "),a("td",[t._v("类似 "),a("code",[t._v("a+")]),t._v(", 但是如果路径存在, 则文件读取追加失败")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("可读")]),t._v(" "),a("th",[t._v("可写")]),t._v(" "),a("th",[t._v("可创建")]),t._v(" "),a("th",[t._v("可追加")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("r")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("r+")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("rs")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("rs+")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("w")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("wx")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("w+")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("wx+")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("a")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("ax")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("a+")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("ax+")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIPS")]),t._v(" "),a("p",[t._v("r表示读, w表示写, a表示可追加写入")]),t._v(" "),a("p",[t._v("带s表示同步, 带x表示排他性, 意思是自己操作的时候别人不能操作, +表示如果是读则还可以写, 如果是写则还可以读")])]),t._v(" "),a("h2",{attrs:{id:"数据库数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库数据类型"}},[t._v("#")]),t._v(" 数据库数据类型")]),t._v(" "),a("ol",[a("li",[t._v("整数 int")]),t._v(" "),a("li",[t._v("长整数 bigint(21) 括号里面为长度, 一般用21")]),t._v(" "),a("li",[t._v("浮点数 float")]),t._v(" "),a("li",[t._v("双精度浮点数 double")]),t._v(" "),a("li",[t._v("字符串 varchar(16)")]),t._v(" "),a("li",[t._v("文本 text")])]),t._v(" "),a("h2",{attrs:{id:"创建表sql语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建表sql语句"}},[t._v("#")]),t._v(" 创建表SQL语句")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'student id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("stu_num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'student num'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'student name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'student age'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'student class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("student_stu_num_uindex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("stu_num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("latin1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ul",[a("li",[t._v("ENGINE表示数据库引擎, 主要用两个: MYISAM和InnoDB")]),t._v(" "),a("li",[t._v("MYISAM: 适用于读很多, 写非常少, 写是表级锁")]),t._v(" "),a("li",[t._v("InnoDB: 适用于读较多, 写也较多, 行级锁")])]),t._v(" "),a("p",[t._v("分别修改数据库, 表和字段的编码格式")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" school "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("convert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 计算查询到的个数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 对所有的年龄求和")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 对某个字段求平均数, as是给查询的字段去一个新的字段名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("avg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" avg_age "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 按照班级分组, 并求每个组的人数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- limit后面有两个参数, 第一个表示偏移量 (偏移量为页数减一乘以每一页的个数)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 第二个表示每一页多少个, 用作分页显示, 即表示一页两个, 2, 2表示前面偏移两个, 即第二页再显示两个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 按id倒序排列")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("web层引 service 层, service 层引 dao 层, dao 层访问数据库")])],1)}),[],!1,null,null,null);s.default=_.exports}}]);