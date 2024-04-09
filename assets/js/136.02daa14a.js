(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{675:function(e,t,v){"use strict";v.r(t);var a=v(6),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIPS")]),e._v(" "),v("p",[e._v("小程序学习笔记")])]),e._v(" "),v("p",[v("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("微信开放文档-小程序"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[e._v("#")]),e._v(" 标签")]),e._v(" "),v("ul",[v("li",[e._v("div --- view 容器组件")]),e._v(" "),v("li",[e._v("img --- image 图片组件 可以使用绝对路径, 相对于该项目存在的文件夹")]),e._v(" "),v("li",[e._v("span --- text 文字组件")]),e._v(" "),v("li",[e._v("css里面设置page相当于设置body样式")])]),e._v(" "),v("h2",{attrs:{id:"配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),v("p",[e._v(".json可以配置当前页面的导航颜色和其他样式")]),e._v(" "),v("h2",{attrs:{id:"自适应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自适应"}},[e._v("#")]),e._v(" 自适应")]),e._v(" "),v("p",[e._v("小程序里面所有的机型的宽度为750rpx, 高度为1334rpx, ihpone6的宽375, 高667, 此时2rpx=1px")]),e._v(" "),v("h2",{attrs:{id:"绑定事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#绑定事件"}},[e._v("#")]),e._v(" 绑定事件")]),e._v(" "),v("ul",[v("li",[e._v("catch: bindcatch/bind:catch 可以阻止事件冒泡")]),e._v(" "),v("li",[e._v("bind: bindtap/bind:tap")])]),e._v(" "),v("p",[e._v("点击事件里面的事件对象e, "),v("code",[e._v("e.currentTarget")]),e._v(": 事件绑定的当前组件, "),v("code",[e._v("e.target")]),e._v(": 触发事件的源组件(触发事件的dom)")]),e._v(" "),v("h2",{attrs:{id:"组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[e._v("#")]),e._v(" 组件")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("button: 按钮组件, 去掉边框只能通过伪元素")])]),e._v(" "),v("li",[v("p",[e._v("text组件:")]),e._v(" "),v("p",[e._v("直接写在小程序中的文字一样有效果, 但是无法长按选中, 所以需要text组件")]),e._v(" "),v("p",[e._v("组件属性: "),v("code",[e._v("selectable")]),e._v(" 是否可选, "),v("code",[e._v("sapce")]),e._v(" 显示连续空格, "),v("code",[e._v("decode")]),e._v(" 是否解码, 如解析 "),v("code",[e._v("&nbsp")])])]),e._v(" "),v("li",[v("p",[e._v("view组件:")]),e._v(" "),v("ul",[v("li",[e._v("hover-class: 手指按下去的样式, 值为none时无效果")]),e._v(" "),v("li",[e._v("hover-stop-propagation: 阻止冒泡")]),e._v(" "),v("li",[e._v("hover-start-time: 按住多久出现点击态(ms)")]),e._v(" "),v("li",[e._v("hover-stay-time: 手指松开后保留样式的时间(ms)")])])])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIPS")]),e._v(" "),v("p",[e._v("组件上传值: data-属性名, 在点击事件里面通过 "),v("code",[e._v("e.currentTarget.dataset.属性名")]),e._v(" 获取, 无论前面写的属性名是不是驼峰, 取值时必须全是"),v("strong",[e._v("小写")])])]),e._v(" "),v("h2",{attrs:{id:"路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[e._v("#")]),e._v(" 路由")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("wx.redirectTo")]),e._v(" 关闭当前页面, 跳转新的页面")]),e._v(" "),v("li",[v("code",[e._v("wx.navigateTo")]),e._v(" 保留当前页面, 跳转新页面, 可以通过 "),v("code",[e._v("wx.navigateBack")]),e._v(" 返回")])]),e._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),v("p",[e._v("微信小程序因性能规定, 最多能缓存10个页面")])]),e._v(" "),v("h2",{attrs:{id:"生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),v("p",[e._v("小程序生命周期: onLaunch => onShow => onHide(onError)\n页面生命周期: onLoad => onShow => onReady => onHide => onShow => onUnload")]),e._v(" "),v("h2",{attrs:{id:"循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[e._v("#")]),e._v(" 循环")]),e._v(" "),v("div",{staticClass:"language-md line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-md"}},[v("code",[v("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[e._v('`wx:for="{{array}}"`')]),e._v(" 默认是 "),v("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[e._v("`item`")]),e._v(" 和 "),v("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[e._v("`index`")]),e._v("\n\n绑定key: wx:key\n\n"),v("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[e._v('`wx:key="id"`')]),e._v(" 不需要使用item.id,可以直接使用id\n"),v("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[e._v('`wx:key="*this"`')]),e._v(" 如果是 "),v("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[e._v("`[1,2,3,4]`")]),e._v(" 可以直接绑定为当前的值\n\n自定义item "),v("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[e._v('`wx:for-item="arrayItem"`')]),e._v("\n自定义index "),v("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[e._v('`wx:for-index="arrayIndex"`')]),e._v("\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br"),v("span",{staticClass:"line-number"},[e._v("8")]),v("br"),v("span",{staticClass:"line-number"},[e._v("9")]),v("br")])]),v("h2",{attrs:{id:"设置数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置数据"}},[e._v("#")]),e._v(" 设置数据")]),e._v(" "),v("p",[e._v("设置data: "),v("code",[e._v("this.setData({})")])]),e._v(" "),v("h2",{attrs:{id:"小程序组件注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序组件注意事项"}},[e._v("#")]),e._v(" 小程序组件注意事项")]),e._v(" "),v("ol",[v("li",[e._v("在组件中不能使用 "),v("code",[e._v("id")]),e._v(" 选择器, 属性选择器和标签选择器, 需要使用 "),v("code",[e._v("class")]),e._v(" 选择器")]),e._v(" "),v("li",[e._v("在 "),v("code",[e._v("properties")]),e._v(" 里面接收的数据同样可以在 "),v("code",[e._v("data")]),e._v(" 里面定义, 但是 "),v("code",[e._v("properties")]),e._v(" 的优先级更高")]),e._v(" "),v("li",[e._v("图片的预览: "),v("code",[e._v("wx.previewImage({urls:[],current: 'img-url'})")]),e._v(" 图片的url好像必须是https, 否则会出现黑屏")]),e._v(" "),v("li",[v("code",[e._v("cover-image")]),e._v(" 标签无法显示gif图")]),e._v(" "),v("li",[e._v("原生的 "),v("code",[e._v("video")]),e._v(" 组件绑定事件只能用 "),v("code",[e._v("bind")]),e._v(", 不能用 "),v("code",[e._v("catch")]),e._v(", 并且 "),v("code",[e._v("bind")]),e._v(" 的写法只能是 "),v("code",[e._v("bindtap")])]),e._v(" "),v("li",[e._v("组件内使用 "),v("code",[e._v('this.triggerEvent("", {}, {})')]),e._v(" 触发自定义事件")]),e._v(" "),v("li",[v("code",[e._v("input")]),e._v(" 如果同时使用 "),v("strong",[e._v("提交事件")]),e._v(" 和 "),v("code",[e._v("blur")]),e._v(" 事件, 在输入框内回车提交会先执行 "),v("strong",[e._v("提交")]),e._v(", 再执行 "),v("code",[e._v("blur")]),e._v(" 事件")]),e._v(" "),v("li",[e._v("视频设置封面是会出现设置不上的bug, 需要自己手动设置封面, 原生的标签层级是最高的, 无论其它dom的z-index多大都无法覆盖, 所以需要用 "),v("code",[e._v("cover-view")]),e._v(" 和 "),v("code",[e._v("cover-image")]),e._v(" 标签")])])])}),[],!1,null,null,null);t.default=s.exports}}]);