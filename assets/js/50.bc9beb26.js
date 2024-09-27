(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{588:function(_,v,t){"use strict";t.r(v);var e=t(6),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIPS")]),_._v(" "),t("p",[_._v("文章出处：")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/SUX7foPP2tE2cMPWCjz7hA",target:"_blank",rel:"nofollow noopener noreferrer"}},[_._v("面试官：什么是HTTP? HTTP 和 HTTPS 的区别?"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/FrY96dUyExhEVm_ECRGpSA",target:"_blank",rel:"nofollow noopener noreferrer"}},[_._v("面试官：为什么说HTTPS比HTTP安全? HTTPS是如何保证安全的？"),t("OutboundLink")],1)])])]),_._v(" "),t("h2",{attrs:{id:"http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[_._v("#")]),_._v(" HTTP")]),_._v(" "),t("p",[t("code",[_._v("HTTP (HyperText Transfer Protocol)")]),_._v("，即超文本运输协议，是实现网络通信的一种规范。")]),_._v(" "),t("p",[_._v("在计算机和网络世界有，存在不同的协议，如广播协议、寻址协议、路由协议等等。而"),t("code",[_._v("HTTP")]),_._v("是一个传输协议，即将数据由A传到B或将B传输到A，并且A与B之间能够存放很多第三方，如：A <=> X <=> Y <=> Z <=> B。")]),_._v(" "),t("p",[_._v("传输的数据并不是计算机底层中的二进制包，而是完整的、有意义的数据，如HTML文件，图片文件，查询结果等超文本，能够被上层应用识别。在实际应用中，HTTP常被用于在Web浏览器和网站服务器之间传递信息，以明文方式发送内容，不提供任何方式的数据加密。")]),_._v(" "),t("p",[_._v("特点如下：")]),_._v(" "),t("ul",[t("li",[_._v("支持客户/服务器模式。")]),_._v(" "),t("li",[_._v("简单快速：客户向服务器请求服务时，只需传送请求方法和路径。由于"),t("code",[_._v("HTTP")]),_._v("协议简单，使得"),t("code",[_._v("HTTP")]),_._v("服务器的程序规模小，因而通信速度很快。")]),_._v(" "),t("li",[_._v("灵活："),t("code",[_._v("HTTP")]),_._v("允许传输任意类型的数据对象。正在传输的类型由"),t("code",[_._v("Content-Type")]),_._v("加以标记。")]),_._v(" "),t("li",[_._v("无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),_._v(" "),t("li",[_._v("无状态："),t("code",[_._v("HTTP")]),_._v("协议无法根据之前的状态进行本次的请求处理。")])]),_._v(" "),t("h2",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[_._v("#")]),_._v(" HTTPS")]),_._v(" "),t("p",[_._v("在上述介绍"),t("code",[_._v("HTTP")]),_._v("中，了解到"),t("code",[_._v("HTTP")]),_._v("传递信息是以明文的形式发送内容，这并不安全。而"),t("code",[_._v("HTTPS")]),_._v("出现正是为了解决"),t("code",[_._v("HTTP")]),_._v("不安全的特性。为了保证这些隐私数据能加密传输，让"),t("code",[_._v("HTTP")]),_._v("运行安全的"),t("code",[_._v("SSL/TLS")]),_._v("协议上，即"),t("code",[_._v("HTTPS")]),_._v("="),t("code",[_._v("HTTP")]),_._v("+"),t("code",[_._v("SSL/TLS")]),_._v("，通过"),t("code",[_._v("SSL")]),_._v("证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密。"),t("code",[_._v("SSL")]),_._v("协议位于"),t("code",[_._v("TCP/IP")]),_._v("协议与各种应用层协议之间，浏览器和服务器在使用"),t("code",[_._v("SSL")]),_._v("建立连接时需要选择一组恰当的加密算法来实现安全通信，为数据通讯提供安全支持。")]),_._v(" "),t("p",[_._v("流程如下：")]),_._v(" "),t("ol",[t("li",[_._v("首先客户端通过URL访问服务器建立"),t("code",[_._v("SSL")]),_._v("连接；")]),_._v(" "),t("li",[_._v("服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端；")]),_._v(" "),t("li",[_._v("客户端的服务器开始协商"),t("code",[_._v("SSL")]),_._v("连接的安全等级，也就是信息加密的等级；")]),_._v(" "),t("li",[_._v("客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站；")]),_._v(" "),t("li",[_._v("服务器利用自己的私钥解密出会话密钥；")]),_._v(" "),t("li",[_._v("服务器利用会话密钥加密与客户端之间的通信。")])]),_._v(" "),t("h2",{attrs:{id:"区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[_._v("#")]),_._v(" 区别")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("HTTPS")]),_._v("是"),t("code",[_._v("HTTP")]),_._v("协议的安全版本，"),t("code",[_._v("HTTP")]),_._v("协议的数据传输是明文的，是不安全的，"),t("code",[_._v("HTTPS")]),_._v("使用了"),t("code",[_._v("SSL/TLS")]),_._v("协议进行了加密处理，相对更安全。")]),_._v(" "),t("li",[t("code",[_._v("HTTP")]),_._v("和"),t("code",[_._v("HTTPS")]),_._v("使用连接方式不同，默认端口也不一样，"),t("code",[_._v("HTTP")]),_._v("是80，"),t("code",[_._v("HTTPS")]),_._v("是443。")]),_._v(" "),t("li",[t("code",[_._v("HTTPS")]),_._v("由于需要设计加密以及多次握手，性能方面不如"),t("code",[_._v("HTTP")]),_._v("。")]),_._v(" "),t("li",[t("code",[_._v("HTTPS")]),_._v("需要"),t("code",[_._v("SSL")]),_._v("，"),t("code",[_._v("SSL")]),_._v("证书需要钱，功能越强大的证书费用越高。")])]),_._v(" "),t("h2",{attrs:{id:"为什么说https比http安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么说https比http安全"}},[_._v("#")]),_._v(" 为什么说HTTPS比HTTP安全")]),_._v(" "),t("h2",{attrs:{id:"安全特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全特性"}},[_._v("#")]),_._v(" 安全特性")]),_._v(" "),t("p",[_._v("在上面的什么是"),t("code",[_._v("HTTP")]),_._v("中，我们了解到"),t("code",[_._v("HTTP")]),_._v("在通信过程中，存在以下问题：")]),_._v(" "),t("ul",[t("li",[_._v("通信使用明文（不加密），内容可能被窃听。")]),_._v(" "),t("li",[_._v("不验证通信方的身份，因此有可能遭遇伪装。")]),_._v(" "),t("li",[_._v("而"),t("code",[_._v("HTTPS")]),_._v("的出现正是解决这些问题，"),t("code",[_._v("HTTPS")]),_._v("是建立在"),t("code",[_._v("SSL")]),_._v("之上，其安全性由"),t("code",[_._v("SSL")]),_._v("来保证。")])]),_._v(" "),t("p",[_._v("在采用"),t("code",[_._v("SSL")]),_._v("后，"),t("code",[_._v("HTTP")]),_._v("就拥有了"),t("code",[_._v("HTTPS")]),_._v("的加密、证书和完整性保护这些功能。")]),_._v(" "),t("div",{staticClass:"custom-block theorem"},[t("p",{staticClass:"title"},[_._v("SSL")]),t("p",[_._v("SSL（Secure Sockets Layer安全套接字协议），及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在传输层与应用层之间对网络连接进行加密。")])]),t("h2",{attrs:{id:"如何做"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何做"}},[_._v("#")]),_._v(" 如何做")]),_._v(" "),t("p",[_._v("SSL的实现这些功能主要依赖于三种手段：")]),_._v(" "),t("ul",[t("li",[_._v("对称加密：采用协商的密钥对数据加密。")]),_._v(" "),t("li",[_._v("非对称加密：实现身份认证和密钥协商。")]),_._v(" "),t("li",[_._v("摘要算法：验证信息的完整性。")]),_._v(" "),t("li",[_._v("数字签名：身份验证。")])]),_._v(" "),t("h3",{attrs:{id:"对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[_._v("#")]),_._v(" 对称加密")]),_._v(" "),t("p",[_._v("对称加密指的是加密和解密使用的秘钥都是同一个，是对称的。只要保证了密钥的安全，那整个通信过程就可以说具有了机密性。")]),_._v(" "),t("h3",{attrs:{id:"非对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[_._v("#")]),_._v(" 非对称加密")]),_._v(" "),t("p",[_._v("非对称加密，存在两个秘钥，一个叫公钥，一个叫私钥。两个秘钥是不同的，公钥可以公开给任何人使用，私钥则需要保密。公钥和私钥都可以用来加密解密，但公钥加密后只能用私钥解密，反过来，私钥加密后也只能用公钥解密。")]),_._v(" "),t("h3",{attrs:{id:"混合加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混合加密"}},[_._v("#")]),_._v(" 混合加密")]),_._v(" "),t("p",[_._v("在"),t("code",[_._v("HTTPS")]),_._v("通信过程中，采用的是对称加密+非对称加密，也就是混合加密。在对称加密中讲到，如果能够保证了密钥的安全，那整个通信过程就可以说具有了机密性，而"),t("code",[_._v("HTTPS")]),_._v("采用非对称加密解决秘钥交换的问题。")]),_._v(" "),t("p",[_._v("具体做法是发送密文的一方使用对方的公钥进行加密处理“对称的密钥”，然后对方用自己的私钥解密拿到“对称的密钥”，这样可以确保交换的密钥是安全的前提下，使用对称加密方式进行通信。")]),_._v(" "),t("h4",{attrs:{id:"举个例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[_._v("#")]),_._v(" 举个例子")]),_._v(" "),t("p",[_._v("网站秘密保管私钥，在网上任意分发公钥，你想要登录网站只要用公钥加密就行了，密文只能由私钥持有者才能解密。而黑客因为没有私钥，所以就无法破解密文。")]),_._v(" "),t("p",[_._v("上述的方法解决了数据加密，在网络传输过程中，数据有可能被篡改，并且黑客可以伪造身份发布公钥，如果你获取到假的公钥，那么混合加密也并无多大用处，你的数据扔被黑客解密。因此，在上述加密的基础上仍需加上完整性、身份验证的特性，来实现真正的安全，实现这一功能则是"),t("strong",[_._v("摘要算法")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"摘要算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摘要算法"}},[_._v("#")]),_._v(" 摘要算法")]),_._v(" "),t("p",[_._v("实现完整性的手段主要是摘要算法，也就是常说的散列函数、哈希函数。可以理解成一种特殊的压缩算法，它能够把任意长度的数据“压缩”成固定长度、而且独一无二的“摘要”字符串，就好像是给这段数据生成了一个数字“指纹”。摘要算法保证了“数字摘要”和原文是完全等价的。所以，我们只要在原文后附上它的摘要，就能够保证数据的完整性。")]),_._v(" "),t("p",[_._v("比如，你发了条消息：“转账1000元”，然后再加上一个SHA-2的摘要。网站收到后也计算一下消息的摘要，把这两份“指纹”做个对比，如果一致，就说明消息是完整可信的，没有被修改。")]),_._v(" "),t("h3",{attrs:{id:"数字签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数字签名"}},[_._v("#")]),_._v(" 数字签名")]),_._v(" "),t("p",[_._v("数字签名能确定消息确实是由发送方签名并发出来的，因为别人假冒不了发送方的签名。原理其实很简单，就是用私钥加密，公钥解密。")]),_._v(" "),t("p",[_._v("签名和公钥一样完全公开，任何人都可以获取。但这个签名只有用私钥对应的公钥才能解开，拿到摘要后，再比对原文验证完整性，就可以像签署文件一样证明消息确实是你发的。和消息本身一样，因为谁都可以发布公钥，我们还缺少防止黑客伪造公钥的手段，也就是说，怎么判断这个公钥就是你的公钥，这时候就需要一个第三方，就是"),t("strong",[_._v("证书验证机构")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"ca验证机构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ca验证机构"}},[_._v("#")]),_._v(" CA验证机构")]),_._v(" "),t("p",[_._v("数字证书认证机构处于客户端与服务器双方都可信赖的第三方机构的立场。")]),_._v(" "),t("p",[_._v("CA对公钥的签名认证要求包括序列号、用途、颁发者、有效时间等等，把这些打成一个包再签名，完整地证明公钥关联的各种信息，形成“数字证书”。")]),_._v(" "),t("p",[_._v("流程如下：")]),_._v(" "),t("ol",[t("li",[_._v("服务器的运营人员向数字证书认证机构提出公开密钥的申请；")]),_._v(" "),t("li",[_._v("数字证书认证机构在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名；")]),_._v(" "),t("li",[_._v("然后分配这个已签名的公开密钥，并将该公开密钥放入公钥证书后绑定在一起；")]),_._v(" "),t("li",[_._v("服务器会将这份由数字证书认证机构颁发的数字证书发送给客户端，以进行非对称加密方式通信。")])]),_._v(" "),t("p",[_._v("接到证书的客户端可使用数字证书认证机构的公开密钥，对那张证书上的数字签名进行验证，一旦验证通过，则证明：")]),_._v(" "),t("ul",[t("li",[_._v("认证服务器的公开密钥的是真实有效的数字证书认证机构。")]),_._v(" "),t("li",[_._v("服务器的公开密钥是值得信赖的。")])]),_._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),t("p",[_._v("可以看到，"),t("code",[_._v("HTTPS")]),_._v("与"),t("code",[_._v("HTTP")]),_._v("虽然只差一个"),t("code",[_._v("SSL")]),_._v("，但是通信安全得到了大大的保障，通信的四大特性都以解决，解决方式如下：")]),_._v(" "),t("ul",[t("li",[_._v("机密性：混合算法。")]),_._v(" "),t("li",[_._v("完整性：摘要算法。")]),_._v(" "),t("li",[_._v("身份认证：数字签名。")]),_._v(" "),t("li",[_._v("不可否定：数字签名。")])]),_._v(" "),t("p",[_._v("同时引入第三方证书机构，确保公开秘钥的安全性。")])])}),[],!1,null,null,null);v.default=a.exports}}]);