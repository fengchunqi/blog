(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{590:function(t,s,v){"use strict";v.r(s);var _=v(6),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIPS")]),t._v(" "),v("p",[t._v("参考：")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://blog.csdn.net/qq_38950316/article/details/81087809",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("OSI七层模型与TCP/IP五层模型"),v("OutboundLink")],1),t._v("(主要)")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/ViYDRgVelFHbeijhOOd3Cw",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("面试官：如何理解OSI七层模型?"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/NzXCfTV_7gwcz5NHBS54Ug",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("面试官：如何理解TCP/IP协议?"),v("OutboundLink")],1)])])]),t._v(" "),v("h2",{attrs:{id:"osi参考模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#osi参考模型"}},[t._v("#")]),t._v(" OSI参考模型")]),t._v(" "),v("p",[t._v("以太网最基本也是重要的知识——OSI参考模型。")]),t._v(" "),v("h3",{attrs:{id:"osi的来源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#osi的来源"}},[t._v("#")]),t._v(" OSI的来源")]),t._v(" "),v("p",[t._v("OSI（Open System Interconnect），全称为"),v("strong",[t._v("开放式通信系统互连参考模型")]),t._v("，即开放式系统互联。一般都叫OSI参考模型，是ISO（国际标准化组织）组织在1985年研究的网络互连模型。\nISO为了更好的使网络应用更为普及，推出了OSI参考模型。其含义就是推荐所有公司使用这个规范来控制网络。这样所有公司都有相同的规范，就能互联了。")]),t._v(" "),v("h3",{attrs:{id:"osi七层模型的划分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#osi七层模型的划分"}},[t._v("#")]),t._v(" OSI七层模型的划分")]),t._v(" "),v("p",[t._v("OSI定义了网络互连的七层框架（"),v("strong",[t._v("物理层")]),t._v("、"),v("strong",[t._v("数据链路层")]),t._v("、"),v("strong",[t._v("网络层")]),t._v("、"),v("strong",[t._v("传输层")]),t._v("、"),v("strong",[t._v("会话层")]),t._v("、"),v("strong",[t._v("表示层")]),t._v("、"),v("strong",[t._v("应用层")]),t._v("），即ISO开放互连系统参考模型。如下图。")]),t._v(" "),v("p",[t._v("每一层实现各自的功能和协议，并完成与相邻层的接口通信。OSI的服务定义详细说明了各层所提供的服务。某一层的服务就是该层及其下各层的一种能力，它通过接口提供给更高一层。各层所提供的服务与这些服务是怎么实现的无关。")]),t._v(" "),v("BlogImage",{attrs:{src:"https://file.frenchleave.cn/rpRkEB5rrzMuB6bONmghar2GoVxqKgjq/OSI-TCPIP-1.webp"}}),t._v(" "),v("h3",{attrs:{id:"各层功能定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#各层功能定义"}},[t._v("#")]),t._v(" 各层功能定义")]),t._v(" "),v("p",[t._v("这里我们只对OSI各层进行功能上的大概阐述，不详细深究，因为每一层实际都是一个复杂的层。后面我也会根据个人方向展开部分层的深入学习。这里我们就大概了解一下。我们从最顶层——应用层开始介绍。")]),t._v(" "),v("p",[t._v("整个过程以公司A和公司B的一次商业报价单发送为例子进行讲解。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("应用层")]),t._v(" "),v("p",[t._v("其作用是通过应用程序间的交互来完成特定的网络应用，该层协议定义了应用进程之间的交互规则，通过不同的应用层协议为不同的网络应用提供服务，在应用层交互的数据单元我们称之为报文")]),t._v(" "),v("p",[t._v("OSI参考模型中最靠近用户的一层，是为计算机用户提供应用接口，也为用户直接提供各种网络服务。我们常见应用层的网络服务协议有：域名系统DNS，HTTP，HTTPS，FTP，POP3、SMTP等。")]),t._v(" "),v("p",[v("strong",[t._v("例：")]),t._v(" 实际公司A的老板就是我们所述的用户，而他要发送的商业报价单，就是应用层提供的一种网络服务，当然，老板也可以选择其他服务，比如说，发一份商业合同，发一份询价单，等等。")])]),t._v(" "),v("li",[v("p",[t._v("表示层")]),t._v(" "),v("p",[t._v("表示层提供各种用于应用层数据的编码和转换功能,确保一个系统的应用层发送的数据能被另一个系统的应用层识别。如果必要，该层可提供一种标准表示形式，用于将计算机内部的多种数据格式转换成通信中采用的标准表示形式。"),v("strong",[t._v("数据压缩")]),t._v("和"),v("strong",[t._v("数据加密")]),t._v("以及"),v("strong",[t._v("数据描述")]),t._v("也是表示层可提供的转换功能之一。")]),t._v(" "),v("p",[v("strong",[t._v("例：")]),t._v(" 由于公司A和公司B是不同国家的公司，他们之间的商定统一用英语作为交流的语言，所以此时表示层（公司的文秘），就是将应用层的传递信息转翻译成英语。同时为了防止别的公司看到，公司A的人也会对这份报价单做一些加密的处理。这就是表示的作用，将应用层的数据转换翻译等。")])]),t._v(" "),v("li",[v("p",[t._v("会话层")]),t._v(" "),v("p",[t._v("会话层就是负责"),v("strong",[t._v("建立")]),t._v("、"),v("strong",[t._v("管理")]),t._v("和"),v("strong",[t._v("终止")]),t._v("表示层实体之间的通信会话。该层提供了数据交换的定界和同步功能，包括了建立检查点和恢复方案的方法。该层的通信由不同设备中的应用程序之间的服务请求和响应组成。")]),t._v(" "),v("p",[v("strong",[t._v("例：")]),t._v(" 会话层的同事拿到表示层的同事转换后资料，（会话层的同事类似公司的外联部），会话层的同事那里可能会掌握本公司与其他好多公司的联系方式，这里公司就是实际传递过程中的实体。他们要管理本公司与外界好多公司的联系会话。当接收到表示层的数据后，会话层将会建立并记录本次会话，他首先要找到公司B的地址信息，然后将整份资料放进信封，并写上地址和联系方式。准备将资料寄出。等到确定公司B接收到此份报价单后，此次会话就算结束了，外联部的同事就会终止此次会话。")])]),t._v(" "),v("li",[v("p",[t._v("传输层")]),t._v(" "),v("p",[t._v("传输层建立了主机端到端的链接，传输层的作用是为上层协议提供端到端的可靠和透明的数据传输服务，包括"),v("strong",[t._v("处理差错控制")]),t._v("和"),v("strong",[t._v("流量控制")]),t._v("等问题，为两台主机进程之间的"),v("strong",[t._v("通信提供服务")]),t._v("，"),v("strong",[t._v("处理数据包错误")]),t._v("、"),v("strong",[t._v("数据包次序")]),t._v("，以及其他一些关键传输问题")]),t._v(" "),v("p",[t._v("该层向高层屏蔽了下层数据通信的细节，使高层用户看到的只是在两个传输实体间的一条主机到主机的、可由用户控制和设定的、可靠的数据通路。我们通常说的，"),v("code",[t._v("TCP")]),t._v(" "),v("code",[t._v("UDP")]),t._v(" 就是在这一层。端口号既是这里的“端”。")]),t._v(" "),v("p",[v("strong",[t._v("例：")]),t._v(" 传输层就相当于公司中的负责快递邮件收发的人，公司自己的投递员，他们负责将上一层的要寄出的资料投递到快递公司或邮局。")])]),t._v(" "),v("li",[v("p",[t._v("网络层")]),t._v(" "),v("p",[t._v("本层通过IP寻址来建立两个节点之间的连接，为源端的运输层送来的分组，选择合适的"),v("strong",[t._v("路由")]),t._v("和"),v("strong",[t._v("交换节点")]),t._v("，正确无误地按照地址传送给目的端的运输层。就是通常说的IP层。这一层就是我们经常说的IP协议层。IP协议是Internet的基础。在发送数据时，网络层把传输层产生的报文或用户数据报封装成分组和包，向下传输到数据链路层。")]),t._v(" "),v("p",[v("strong",[t._v("例：")]),t._v(" 网络层就相当于快递公司庞大的快递网络，全国不同的集散中心，比如说，从深圳发往北京的顺丰快递（陆运为例啊，空运好像直接就飞到北京了），首先要到顺丰的深圳集散中心，从深圳集散中心再送到武汉集散中心，从武汉集散中心再寄到北京顺义集散中心。这个每个集散中心，就相当于网络中的一个IP节点。")])]),t._v(" "),v("li",[v("p",[t._v("数据链路层")]),t._v(" "),v("p",[t._v("将比特组合成字节,再将字节组合成帧,使用链路层地址(以太网使用MAC地址)来访问介质,并进行差错检测。")]),t._v(" "),v("p",[t._v("数据链路层又分为2个子层：逻辑链路控制子层（LLC）和媒体访问控制子层（MAC）。")]),t._v(" "),v("p",[t._v("MAC子层处理CSMA/CD算法、数据出错校验、成帧等；LLC子层定义了一些字段使上次协议能共享数据链路层。在实际使用中，LLC子层并非必需的。")]),t._v(" "),v("p",[v("strong",[t._v("例：")]),t._v(" 这个没找到合适的例子")])]),t._v(" "),v("li",[v("p",[t._v("物理层")]),t._v(" "),v("p",[t._v("实际最终信号的传输是通过物理层实现的。通过物理介质传输比特流。规定了电平、速度和电缆针脚。常用设备有（各种物理设备）集线器、中继器、调制解调器、网线、双绞线、同轴电缆。这些都是物理层的传输介质。")]),t._v(" "),v("p",[v("strong",[t._v("例：")]),t._v(" 快递寄送过程中的交通工具，就相当于我们的物理层，例如汽车，火车，飞机，船。")])])]),t._v(" "),v("h3",{attrs:{id:"通信特点-对等通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通信特点-对等通信"}},[t._v("#")]),t._v(" 通信特点：对等通信")]),t._v(" "),v("p",[t._v("对等通信，为了使数据分组从源传送到目的地，源端OSI模型的每一层都必须与目的端的对等层进行通信，这种通信方式称为对等层通信。在每一层通信过程中，使用本层自己协议进行通信。")]),t._v(" "),v("BlogImage",{attrs:{src:"https://file.frenchleave.cn/1bmAv5jX97DP1UcaT5J0UDSVUCAiWeL8/OSI-TCPIP-2.webp"}}),t._v(" "),v("h2",{attrs:{id:"tcp-ip五层模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip五层模型"}},[t._v("#")]),t._v(" TCP/IP五层模型")]),t._v(" "),v("p",[v("strong",[t._v("TCP/IP，「传输控制协议」/「网际协议」")]),t._v("，是指能够在多个不同网络间实现信息传输的协议簇")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("TCP（传输控制协议）：一种面向连接的、可靠的、基于字节流的传输层通信协议")])]),t._v(" "),v("li",[v("p",[t._v("IP（网际协议）：用于封包交换数据网络的协议")])])]),t._v(" "),v("p",[t._v("TCP/IP协议不仅仅指的是TCP和IP两个协议，而是指一个由FTP、SMTP、TCP、UDP、IP等协议构成的协议簇，只是因为在TCP/IP协议中TCP协议和IP协议最具代表性，所以通称为TCP/IP协议族（英语：TCP/IP Protocol Suite，或TCP/IP Protocols）")]),t._v(" "),v("p",[t._v("TCP/IP协议族按层次分别了"),v("strong",[t._v("五层体系")]),t._v("或者"),v("strong",[t._v("四层体系")])]),t._v(" "),v("p",[t._v("五层体系的协议结构是综合了 OSI 和 TCP/IP 优点的一种协议，包括"),v("strong",[t._v("应用层")]),t._v("、"),v("strong",[t._v("传输层")]),t._v("、"),v("strong",[t._v("网络层")]),t._v("、"),v("strong",[t._v("数据链路层")]),t._v("和"),v("strong",[t._v("物理层")])]),t._v(" "),v("p",[t._v("五层协议的体系结构只是为介绍网络原理而设计的，实际应用还是 TCP/IP 四层体系结构，包括"),v("strong",[t._v("应用层")]),t._v("、"),v("strong",[t._v("传输层")]),t._v("、"),v("strong",[t._v("网络层（网际互联层）")]),t._v("、"),v("strong",[t._v("网络接口层")])]),t._v(" "),v("h3",{attrs:{id:"五层体系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五层体系"}},[t._v("#")]),t._v(" 五层体系")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("应用层")]),t._v(" "),v("p",[t._v("TCP/IP 模型将 OSI参考模型中的会话层、表示层和应用层的功能合并到一个应用层实现，通过不同的应用层协议为不同的应用提供服务，如：FTP、Telnet、DNS、SMTP等")])]),t._v(" "),v("li",[v("p",[t._v("传输层")]),t._v(" "),v("p",[t._v("该层对应于 OSI 参考模型的传输层，为上层实体提供源端到对端主机的通信功能，传输层定义了两个主要协议："),v("strong",[t._v("传输控制协议（TCP）"),v("strong",[t._v("和")]),t._v("用户数据报协议（UDP）")]),t._v("，其中面向连接的 TCP 协议保证了数据的传输可靠性，面向无连接的 UDP 协议能够实现数据包简单、快速地传输")])]),t._v(" "),v("li",[v("p",[t._v("网络层")]),t._v(" "),v("p",[t._v("负责为分组网络中的不同主机提供通信服务，并通过选择合适的路由将数据传递到目标主机，在发送数据时，网络层把运输层产生的报文段或用户数据封装成分组或包进行传送")])]),t._v(" "),v("li",[v("p",[t._v("数据链路层")]),t._v(" "),v("p",[t._v("数据链路层在两个相邻节点传输数据时，将网络层交下来的IP数据报组装成帧，在两个相邻节点之间的链路上传送帧")])]),t._v(" "),v("li",[v("p",[t._v("物理层")]),t._v(" "),v("p",[t._v("保数据可以在各种物理媒介上进行传输，为数据的传输提供可靠的环境")])])]),t._v(" "),v("h3",{attrs:{id:"四层体系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四层体系"}},[t._v("#")]),t._v(" 四层体系")]),t._v(" "),v("p",[t._v("TCP/IP 的四层结构则如下表所示：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("div",{staticStyle:{width:"75px"}},[t._v("层次名称")])]),t._v(" "),v("th",[v("div",{staticStyle:{width:"75px"}},[t._v("单位")])]),t._v(" "),v("th",[t._v("功能")]),t._v(" "),v("th",[v("div",{staticStyle:{width:"200px"}},[t._v("协议")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("网络接口层")]),t._v(" "),v("td",[t._v("帧")]),t._v(" "),v("td",[t._v("负责实际数据的传输，对应OSI参考模型的下两层")]),t._v(" "),v("td",[t._v("HDLC(高级链路控制协议)"),v("br"),t._v("PPP(点对点协议)"),v("br"),t._v("SLIP(串行线路接口协议)")])]),t._v(" "),v("tr",[v("td",[t._v("网络层")]),t._v(" "),v("td",[t._v("数据包")]),t._v(" "),v("td",[t._v("负责网络间的寻址数据传输，对应OSI参考模型的第三层")]),t._v(" "),v("td",[t._v("IP(网际协议)"),v("br"),t._v("ICMP(网际控制消息协议)"),v("br"),t._v("ARP(地址解析协议)"),v("br"),t._v("RARP(反向地址解析协议)")])]),t._v(" "),v("tr",[v("td",[t._v("传输层")]),t._v(" "),v("td",[t._v("报文段")]),t._v(" "),v("td",[t._v("负责提供可靠的传输服务，对应OSI参考模型的第四层")]),t._v(" "),v("td",[t._v("TCP(控制传输协议)"),v("br"),t._v("UDP(用户数据报协议)")])]),t._v(" "),v("tr",[v("td",[t._v("应用层")]),t._v(" "),v("td",[t._v("数据")]),t._v(" "),v("td",[t._v("负责实现一切与应用程序相关的功能，对应OSI参考模型的上三层")]),t._v(" "),v("td",[t._v("FTP(文件传输协议)"),v("br"),t._v("HTTP(超文本传输协议)"),v("br"),t._v("SMTP(简单邮件传输协议)"),v("br"),t._v("DNS(域名服务器协议)"),v("br"),t._v("NFS(网络文件系统协议)")])])])]),t._v(" "),v("ul",[v("li",[t._v("网络接口层：对0和1进行分组，定义数据帧，确认主机的物理地址，传输数据；")]),t._v(" "),v("li",[t._v("网络层：定义IP地址，确认主机所在的网络位置，并通过IP进行MAC寻址，对外网数据包路由转发；")]),t._v(" "),v("li",[t._v("传输层：定义端口，确认主机上应用程序的身份，并将数据包交给对应的应用程序。")]),t._v(" "),v("li",[t._v("应用层：定义数据格式，并按照对应的格式解读数据。")])]),t._v(" "),v("p",[t._v("TCP/IP五层协议和OSI的七层协议对应关系如下。")]),t._v(" "),v("BlogImage",{attrs:{src:"https://file.frenchleave.cn/niqsojNFbGSi5Tx78VFUrf6fldTH87Ll/OSI-TCPIP-3.webp"}}),t._v(" "),v("p",[t._v("在每一层都工作着不同的设备，比如我们常用的交换机就工作在数据链路层的，一般的路由器是工作在网络层的。")]),t._v(" "),v("BlogImage",{attrs:{src:"https://file.frenchleave.cn/eHnrUs2M9BNMHBp7EToM0hTwPNaJEDIv/OSI-TCPIP-4.webp"}}),t._v(" "),v("p",[t._v("在每一层实现的协议也各不同，即每一层的服务也不同.下图列出了每层主要的协议。")]),t._v(" "),v("BlogImage",{attrs:{src:"https://file.frenchleave.cn/d58IxQcQ6xlVwfIetTFD1BojrsuVJFWB/OSI-TCPIP-5.webp"}}),t._v(" "),v("p",[t._v("参考文献：")]),t._v(" "),v("ol",[v("li",[v("a",{attrs:{href:"https://baike.baidu.com/item/OSI%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B/708028?fr=aladdin",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("百度百科：OSI参考模型"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"http://blog.csdn.net/wdkirchhoff/article/details/43915825",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("以太网帧结构"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"数据包是如何在网络中传输的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据包是如何在网络中传输的"}},[t._v("#")]),t._v(" 数据包是如何在网络中传输的")]),t._v(" "),v("p",[t._v("转载自："),v("a",{attrs:{href:"http://www.360doc.com/content/16/0907/19/7377734_589139666.shtml",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("网络数据包传输过程总结"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("strong",[t._v("感觉这个更详细更准确")]),t._v("："),v("a",{attrs:{href:"https://blog.csdn.net/u011563903/article/details/90116368",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("详解一次完整的数据包传输过程 -- 层层递进"),v("OutboundLink")],1)]),t._v(" "),v("BlogImage",{attrs:{src:"https://file.frenchleave.cn/RukwJudU7NBR2AI9558tx5Ei5MlG6uqx/SJBFZ.webp"}}),t._v(" "),v("p",[t._v("假设：我的电脑A，向远在外地的朋友电脑B传输数据，最简单的就是“ping”一下，看看这个家伙的那一端网络通不通。A与B之间只有一台路由器。（路由器可能放在学校，社区或者电信机房，无所谓，基本原理是一样的）")]),t._v(" "),v("p",[t._v("具体过程如下：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("“ping”命令生成了一个包含ICMP协议域的数据包")])]),t._v(" "),v("li",[v("p",[t._v("IP协议将数据的源IP地址和目的IP地址分别打包在数据包的头部和尾部，这样一来，大家才知道你的数据是要送到哪里。")])]),t._v(" "),v("li",[v("p",[t._v("接下来是ARP。ARP属于数据链路层协议，主要负责把IP地址对应到硬件地址。交换机就经常保留一张IP地址与硬件地址的对应表以便其查找目的地。而ARP就是用来生成这张表的。比如：当数据包被送到ARP手里之后，ARP就要在表里面查找，看看数据包的IP地址与交换机的哪个端口对应，然后转发过去。如果没找到，则发一个广播给所有其他的交换机端口，问这是谁的IP地址，如果有人回答，就转发给它。")])]),t._v(" "),v("li",[v("p",[t._v("CRC校验值，怕数据包在旅行途中缺胳膊少腿，还得麻烦它们重新发送。。。。。注：很多人弄不清FCS和CRC。所谓的CRC是一种校验方法，用来确保数据在传输过程中不会丢包，损坏等等，FCS是数据包（准确的说是frame）里的一个区域，用来存放CRC的计算结果的。到了目的地之后，目的计算机要检查FCS里的CRC值，如果与原来的相同，则说明数据在途中没有损坏。")])]),t._v(" "),v("li",[v("p",[t._v("把数据包身上众多的0和1，弄成了什么“高电压”“低电压”，在双绞线上传送了出去。")])]),t._v(" "),v("li",[v("p",[t._v("来到了中转站------路由器。直接查看IP地址！剩下的一概不管，交给下面的人去做。路由器的内部也有一张表，叫做路由表，里面标识着哪一个网络的IP对应着路由器的哪一个端口。这个表也不是天生就有的，而是靠路由器之间互相“学习”之后生成的，当然也可以由管理员手工设定。这个“学习”的过程是依靠路由协议来完成的，比如RIP，EIGRP，OSPF等等。")])]),t._v(" "),v("li",[v("p",[t._v("当路由器查看了数据包的IP地址以后，根据路由表知道了数据包要去的网络，接着就把数据包转到了相应的端口了。至此，路由器的主要工作完成，下面又是打包，封装成frame，转换成电压信号等一系列“折腾”的活，就由数据链路层和物理层的模块去干吧。")])]),t._v(" "),v("li",[v("p",[t._v("数据包从路由器的出口出来，便来到了目的地----电脑B----所属的网络的默认网关。默认网关可以是路由器的一个端口，也可以是局域网里的各种服务器。不管怎样，下面的过程还是一样的：到交换机里的ARP表查询数据包的IP地址，看看属于哪个局域网段或端口，然后就转发到B了。")])]),t._v(" "),v("li",[v("p",[t._v("进了B的网卡之后，还要层层“剥皮”，基本上和从A出来的程序是一样的------电脑B先校验一下CRC值，看看数据是否完整；然后检查一下frame的封装，看到是IP协议之后，就把数据包交给IP“部门”了；IP协议一看目的地址，正确，再看看应用协议，是ICMP。于是知道了该怎么做了------产生一个回应数据包，（可以命名为“回应数据包”），并准备以同样的顺序向远端的A发送。。至于刚刚收到的那个数据包就丢弃了。")])]),t._v(" "),v("li",[v("p",[t._v("“回应数据包”这个数据包又开始了上述同样的循环，只不过这次发送者是B而接收者是A了。")])])]),t._v(" "),v("p",[t._v("以上是一个最简单的路由过程，任何复杂的网络都是在次基础之上实现的。")]),t._v(" "),v("p",[t._v("常见设备所属层级：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("所属层级")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("网关")]),t._v(" "),v("td",[t._v("应用层或者运输层")])]),t._v(" "),v("tr",[v("td",[t._v("路由器")]),t._v(" "),v("td",[t._v("网络层")])]),t._v(" "),v("tr",[v("td",[t._v("网卡")]),t._v(" "),v("td",[t._v("物理层和数据链路层（对应MAC地址，独一无二，出厂就固定的）")])]),t._v(" "),v("tr",[v("td",[t._v("交换机")]),t._v(" "),v("td",[t._v("数据链路层")])])])]),t._v(" "),v("p",[t._v("传输过程总结")]),t._v(" "),v("ol",[v("li",[t._v("应用层 - 首先在应用层被HTTP协议把数据封装成请求报文传递给传输层")]),t._v(" "),v("li",[t._v('传输层 - 包括但不限于确定与服务器的哪个端口建立连接（还有差错处理和流量控制等），"端口"是0到65535之间的一个整数，正好16个二进制位。0到1023的端口被系统占用，用户只能随机选用大于1023的端口。TCP的三次握手就发生在传输层。传输层还做分割与重组数据，将应用层传来的数据分为多个报文段(segment)并传递给网络层')]),t._v(" "),v("li",[t._v("网络层 - 封装网络层的头部，主要就是添加源和目的IP地址，判断源主机和目标主机是否属于同一子网络（比较IP是否属于用一类ABC），如果属于同一类，通过ARP协议，广播的方式获得目标主机的MAC地址，封装成为数据包并传递给数据链路层。如果不是同一子网络，则转发到网关（是可以获得网关MAC的），网关再找另一个IP所在的网关，把数据发到另一个网关再寻找目标主机MAC地址。（所以在数据传输过程中IP不变，MAC地址随着链路的不同会改变）（IP地址确定计算机所在的子网络，MAC地址则将数据包送到该子网络中的目标网卡。所以先处理网络地址，然后再处理MAC地址。）")]),t._v(" "),v("li",[t._v("数据链路层 - 将网络层的数据包封装成帧，传递给物理层")]),t._v(" "),v("li",[t._v("物理层 - 将数据帧转换成二进制比特流，通过网卡发送出去")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIPS")]),t._v(" "),v("p",[t._v("以太网数据包必须知道接收方的MAC地址，然后才能发送。")]),t._v(" "),v("p",[t._v('广播：1、2、3、4、5号计算机处于同一个子网络，1号计算机向2号计算机发送一个数据包，同一个子网络的3号、4号、5号计算机都会收到这个包。它们读取这个包的"报头"，找到接收方的MAC地址，然后与自身的MAC地址相比较，如果两者相同，就接受这个包，做进一步处理，否则就丢弃这个包。这种发送方式就叫做"广播"（broadcasting）。')]),t._v(" "),v("p",[t._v("ARP协议：同一个子网络里，通过广播的方式发出一个查询MAC地址的数据包，包含需要查询的IP，其他主机接收到数据包比对IP地址，判断是返回MAC地址还是丢弃这个包")]),t._v(" "),v("p",[t._v("网关与路由器")]),t._v(" "),v("ul",[v("li",[t._v("网关是网络中的一个角色，指的是一个“网络”中的出口，路由器是一种设备")]),t._v(" "),v("li",[t._v("路由器可以实现网关的功能，但是路由器功能不仅仅是实现网关，网关可以由路由器实现，但是也不仅仅是由路由器实现")])]),t._v(" "),v("p",[t._v("路由器与路由表")]),t._v(" "),v("p",[t._v("路由表（routing table）或称路由择域信息库（RIB, Routing Information Base），是一个存储在路由器或者联网计算机中的电子表格（文件）或类数据库。路由表存储着指向特定网络地址的路径（在有些情况下，还记录有路径的路由度量值）。路由表中含有网络周边的拓扑信息。路由表建立的主要目标是为了实现路由协议和静态路由选择。")]),t._v(" "),v("p",[t._v("每个路由器中都有一个路由表和FIB(Forward Information Base)表：路由表用来决策路由，FIB用来转发分组。")]),t._v(" "),v("p",[t._v("FIB表中每条转发项都指明分组到某个网段或者某个主机应该通过路由器的那个物理接口发送，然后就可以到达该路径的下一个路由器，或者不再经过别的路由器而传送到直接相连的网络中的目的主机。")])]),t._v(" "),v("h2",{attrs:{id:"网络数据包大小"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络数据包大小"}},[t._v("#")]),t._v(" 网络数据包大小")]),t._v(" "),v("p",[t._v("用UDP协议发送时，用sendto函数最大能发送数据的长度为：65535-20-8＝65507字节，其中20字节为IP包头长度，8字节为UDP包头长度。用sendto函数发送数据时，如果指的的数据长度大于该值，则函数会返回错误。")]),t._v(" "),v("p",[t._v("用TCP协议发送时，由于TCP是数据流协议，因此不存在包大小的限制（暂不考虑缓冲区的大小），这是指在用send函数时，数据长度参数不受限制。而实际上，所指定的这段数据并不一定会一次性发送出去，如果这段数据比较长，可能会被分段发送，如果比较短，可能会等待和下一次数据一起发送。我在测试的时候，发现长度一般会被切成16384(16K)或49152(48K)，不知道这两个值有什么意义。")]),t._v(" "),v("h2",{attrs:{id:"网络中ip数据包传输的过程伪代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络中ip数据包传输的过程伪代码"}},[t._v("#")]),t._v(" 网络中IP数据包传输的过程伪代码")]),t._v(" "),v("p",[t._v("IP数据包需从主机A上传送到主机B上，主机A首先查找路由表;")]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("目的主机是与自己在同一个网段内"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    主机"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("查询自己的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("表"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("有该目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址对应的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址的记录"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        将该"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址作为目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址，封装数据帧，传送给主机"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        发送一个"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("请求广播给网段内的所有主机，来查询该目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        收到"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("请求报文的各个主机如果发现该"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址是自己的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址，则返回一个"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("应答报文告诉主机"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("自己的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        如果发现不是自己的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址，则丢弃该报文。\n        主机"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("收到这个应答报文后，就按照返回的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址，将"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("数据包封装成帧，然后发送到主机"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v("上"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        （补充：一般为了减少网络中的报文量，通信双方会维护一个各自的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("表，把一次通信中获得"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址对保存\n        在缓冲的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("表中"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("但是"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("表有一个老化机制，删除一段时间内不用的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址对。）\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("发现了能与目的网络号相匹配的表目"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    则把报文发给改表目指定的下一站的路由器或直接连接的网络接口"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    报文发送到下一站时，数据帧的目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址是下一个站路由器或者网络接口的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址，\n    而"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("头部的目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址是主机"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v("的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("这里要指出的是："),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("请求报文以下一站路由器\n    或网络接口的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址为目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址，寻找真的目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址。\n    换句话，"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARP")]),t._v("请求报文只负责"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("数据包传输过程中每一跳中的目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址查询。\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    寻找标为“默认”的表目，把报文发送给该表目指定的下一站路由器"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("报文发送到下一站时，\n    数据帧的目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址是下一个站路由器的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAC")]),t._v("地址，而"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("头部的目的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址是主机"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v("的"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("地址。\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br"),v("span",{staticClass:"line-number"},[t._v("17")]),v("br"),v("span",{staticClass:"line-number"},[t._v("18")]),v("br"),v("span",{staticClass:"line-number"},[t._v("19")]),v("br"),v("span",{staticClass:"line-number"},[t._v("20")]),v("br"),v("span",{staticClass:"line-number"},[t._v("21")]),v("br"),v("span",{staticClass:"line-number"},[t._v("22")]),v("br")])]),v("p",[t._v("数据帧在每两个网络设备间传递时，是转换成bit流在传输媒体上传输。链路层提供了如停止等待协议等机制，控制了bit流在传输媒体上的无措传输。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("OSI 参考模型与 TCP/IP 参考模型区别如下：")]),t._v(" "),v("p",[t._v("相同点：")]),t._v(" "),v("ul",[v("li",[t._v("OSI 参考模型与 TCP/IP 参考模型都采用了层次结构")]),t._v(" "),v("li",[t._v("都能够提供面向连接和无连接两种通信服务机制")])]),t._v(" "),v("p",[t._v("不同点：")]),t._v(" "),v("ul",[v("li",[t._v("OSI 采用的七层模型；TCP/IP 是四层或五层结构")]),t._v(" "),v("li",[t._v("TCP/IP 参考模型没有对网络接口层进行细分，只是一些概念性的描述；OSI 参考模型对服务和协议做了明确的区分")]),t._v(" "),v("li",[t._v("OSI 参考模型虽然网络划分为七层，但实现起来较困难。TCP/IP 参考模型作为一种简化的分层结构是可以的")]),t._v(" "),v("li",[t._v("TCP/IP协议去掉表示层和会话层的原因在于会话层、表示层、应用层都是在应用程序内部实现的，最终产出的是一个应用数据包，而应用程序之间是几乎无法实现代码的抽象共享的，这也就造成 OSI 设想中的应用程序维度的分层是无法实现的")])])],1)}),[],!1,null,null,null);s.default=a.exports}}]);