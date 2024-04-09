(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{670:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIPS")]),s._v(" "),a("p",[s._v("JavaScript ES6学习笔记")])]),s._v(" "),a("h2",{attrs:{id:"回顾-var"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾-var"}},[s._v("#")]),s._v(" 回顾 var")]),s._v(" "),a("ol",[a("li",[s._v("变量声明提升, 可重复定义, 全局变量挂载到window")]),s._v(" "),a("li",[s._v("回顾作用域 (变量生命周期): 全局作用域, 函数作用域")])]),s._v(" "),a("p",[a("code",[s._v("let")]),s._v(" 和 "),a("code",[s._v("const")]),s._v(" (块级变量声明)")]),s._v(" "),a("ul",[a("li",[s._v("没有变量声明提升, 不能重复定义, 不挂载到window")]),s._v(" "),a("li",[s._v("声明的变量和{}配合产生块级作用域一生命在大括号内部的变量无法在外部使用")]),s._v(" "),a("li",[s._v("产生临时Temporal Dead Zone (临时死区)")]),s._v(" "),a("li",[s._v("解决闭包问题 (ES6规范后引入的)")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIPS")]),s._v(" "),a("p",[a("code",[s._v("const")]),s._v("  >>  "),a("code",[s._v("let")]),s._v("   >>  "),a("code",[s._v("var")]),s._v(" ("),a("code",[s._v("const")]),s._v(" 浏览器不用去监控他是否变化, 可以节约性能)")]),s._v(" "),a("p",[s._v("存储常量的空间里的值不能改变, 如果 "),a("code",[s._v("const")]),s._v(" 定义的对象, 用对象点属性的方法修改值, 是可以的")])]),s._v(" "),a("p",[a("code",[s._v("...")]),s._v(" 展开 & 收集运算符(spreed & rest):")]),s._v(" "),a("p",[s._v("此运算符在不同地方使用有不同的功效, 可以从写和读两个角度考虑")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("写")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 收集作用, 收集为数组, 例如在函数中传入不固定的实参,")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但是rest只能在函数传参的最后一位出现例如 function test(a, b, ...arg) {}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("读")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 展开作用")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[s._v("作用: 简化书写长度, 提升开发效率")]),s._v(" "),a("p",[s._v("ES6/ES7: ES6可以处理数组, ES7能处理对象")]),s._v(" "),a("p",[a("code",[s._v("Object.assign")]),s._v(" 合并对象, 浅层clone, 可以理解成从 "),a("code",[s._v("$.extend")]),s._v(" 那里演化过来")]),s._v(" "),a("h2",{attrs:{id:"es6变化-destructuring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6变化-destructuring"}},[s._v("#")]),s._v(" ES6变化 - destructuring")]),s._v(" "),a("p",[s._v("解构 (结构化值)")]),s._v(" "),a("p",[s._v("解过程中, 具有赋值和变量声明两个功能")]),s._v(" "),a("p",[s._v("目的在于把等号左右长的相似的两个东西内部的值取出来")]),s._v(" "),a("p",[s._v("对象数组都可以参与解构")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("作用: 简化书写长度, 提升开发效率")]),s._v(" "),a("p",[s._v("默认参数:")]),s._v(" "),a("p",[s._v("let {name, age,sex='male'} = obj;")]),s._v(" "),a("p",[s._v("数组的解构赋值")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"es6变化-箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6变化-箭头函数"}},[s._v("#")]),s._v(" ES6变化 - 箭头函数")]),s._v(" "),a("p",[s._v("箭头函数特点:")]),s._v(" "),a("ol",[a("li",[s._v("不用写function关键字")]),s._v(" "),a("li",[s._v("只能作为函数使用不能 "),a("code",[s._v("new")]),s._v(", 没有原型")]),s._v(" "),a("li",[s._v("参数不能重复命名")]),s._v(" "),a("li",[s._v("返回值可以不写 "),a("code",[s._v("return")]),s._v(", 但是有时需要配合{}")]),s._v(" "),a("li",[s._v("内部 "),a("code",[s._v("argumentsthis")]),s._v(" 由定义时外围最接近一层的非箭头函数的 "),a("code",[s._v("arguments")]),s._v(" 和 "),a("code",[s._v("this")]),s._v(" 决定其值, 对于 "),a("code",[s._v("this")]),s._v(", 如果没有被非箭头函数包裹, 则 "),a("code",[s._v("this")]),s._v(" 指向 "),a("code",[s._v("window")])])]),s._v(" "),a("h2",{attrs:{id:"es5-object-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es5-object-defineproperty"}},[s._v("#")]),s._v(" ES5 - Object.defineProperty")]),s._v(" "),a("p",[s._v("ES5规范开始后续版本迭代, 也在致力于做一件事, 就是把js底层已有的功能, 提供给开发者使用, defineProperty就是其中一个, 此方法会可直接在一个对象上定义一个新的具有详细描述的属性, 或者修改一个对象的现有属性, 并返回这个对象")]),s._v(" "),a("p",[s._v("使用: "),a("code",[s._v("Object.defineProperty(对象, 属性, 描述符);")])]),s._v(" "),a("p",[s._v("描述符: 对象的属性的进行详细描述")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("数据描述符:")]),s._v(" "),a("ul",[a("li",[s._v("value:xxx' 属性值, 默认")]),s._v(" "),a("li",[s._v("writable:true 是否可写, 默认false")]),s._v(" "),a("li",[s._v("configurable:true 是否可配置, 默认false")]),s._v(" "),a("li",[s._v("enumerable:true 是否可举, 默认false")])])]),s._v(" "),a("li",[a("p",[s._v("存取描述符: (set和get方法与value和writable属性互斥)")]),s._v(" "),a("ul",[a("li",[s._v("set:function(){} 属性访问器进行写操作时调用该方法")]),s._v(" "),a("li",[s._v("get:function(){} 属性访问器进行读操作时调用该方法")])])])]),s._v(" "),a("p",[s._v("作用: 双向数据绑定的核心方法, 主要做数据劫持操作 (监控属性变化), 同时是后期ES6中很多语法糖底层实现的核心方法")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("如果描述符中同时出现: value, writable, 和 set, get两组的话, 会出现异常, 切记不要同时使用")])]),s._v(" "),a("h2",{attrs:{id:"class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[s._v("#")]),s._v(" class")]),s._v(" "),a("p",[s._v("class创建类, extends, constructor, super")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("xxx")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("xxx")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("class定义的类的原型prototype不能枚举")]),s._v(" "),a("h2",{attrs:{id:"es7变化-class提案属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es7变化-class提案属性"}},[s._v("#")]),s._v(" ES7变化 - class提案属性")]),s._v(" "),a("ul",[a("li",[s._v("static property = xxx: 静态属性")]),s._v(" "),a("li",[s._v("property = xxx: 私有属性")]),s._v(" "),a("li",[s._v("@decorator*饰器")])])])}),[],!1,null,null,null);t.default=n.exports}}]);