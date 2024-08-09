(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{606:function(e,t,s){"use strict";s.r(t);var a=s(6),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"react的class和hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react的class和hooks"}},[e._v("#")]),e._v(" React的class和hooks")]),e._v(" "),s("p",[e._v("react 17版本之前")]),e._v(" "),s("p",[e._v("主要分为三个阶段：初始化阶段、更新阶段、卸载组件。")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("初始化阶段：也称为组件挂载时的阶段，这个阶段会执行我们在初次加载组件到组件第一次渲染在界面上面期间的一系列钩子函数。")]),e._v(" "),s("p",[e._v("执行的流程为："),s("code",[e._v("constructor")]),e._v("->"),s("code",[e._v("componentWillMount")]),e._v("->"),s("code",[e._v("render")]),e._v("->"),s("code",[e._v("componentDidMount")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("constructor(props, context)")]),e._v("：这是一个构造器，这里面可以接收一个父组件传来的"),s("code",[e._v("props")]),e._v("然后初始化"),s("code",[e._v("state")]),e._v("值。")]),e._v(" "),s("li",[s("code",[e._v("componentWillMount(): void")]),e._v("：组件将要挂载，这个是在执行"),s("code",[e._v("render")]),e._v("之前会执行这个函数，也就说会在渲染浏览器DOM之前执行这个函数。")]),e._v(" "),s("li",[s("code",[e._v("render(props, state, context): ComponentChild")]),e._v("：在这里面我们会写一些html标签及自定义的函数，"),s("code",[e._v("render")]),e._v("执行完后便会将这些语句对应渲染到浏览器上面。")]),e._v(" "),s("li",[s("code",[e._v("componentDidMount(): void")]),e._v("：组件挂载完毕执行，也就在"),s("code",[e._v("render")]),e._v("执行完之后之后，浏览器的DOM树已经有了，所以我们便可以在这里操作DOM和ref。通常在这个钩子函数里面我们请求一些后端接口数据，来初次渲染我们页面。")])])]),e._v(" "),s("li",[s("p",[e._v("更新阶段：在更新了state值的时候或者是接收到父组件props值的时候。")]),e._v(" "),s("p",[e._v("这个阶段常规流程是："),s("code",[e._v("componentWillReceiveProps")]),e._v("->"),s("code",[e._v("shouldComponentUpdate")]),e._v("->"),s("code",[e._v("componentWillUpdate")]),e._v("->"),s("code",[e._v("render")]),e._v("->"),s("code",[e._v("componentDidUpdate")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("componentWillReceiveProps(nextProps, nextContext)")]),e._v("：当子组件收到父组件传过来的props，会执行这个函数。")]),e._v(" "),s("li",[s("code",[e._v("shouldComponentUpdate(nextProps, nextState, nextContext): boolean")]),e._v("：当更新state值的时候会执行这个函数，比如"),s("code",[e._v("this.setState({})")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("componentWillUpdate(nextProps, nextState, nextContext): void")]),e._v("：执行"),s("code",[e._v("render")]),e._v("前的一个钩子函数，在react17中将要弃用这个钩子，执行"),s("code",[e._v("this.forceUpdate()")]),e._v("可以直接从这个钩子函数节点开始执行。")]),e._v(" "),s("li",[s("code",[e._v("render")]),e._v("：和初始化时候执行的那个"),s("code",[e._v("render")]),e._v("一样，只是这里是更新值的，所以DOM节点会重新更新一下。")]),e._v(" "),s("li",[s("code",[e._v("componentDidUpdate(previousProps, previousState, snapshot): void")]),e._v("：组件更新完毕执行的钩子函数。")])])]),e._v(" "),s("li",[s("p",[e._v("卸载组件：当组件卸载时执行的钩子函数，这里只有一个，那就是"),s("code",[e._v("componentWillUnmount")]),e._v("，一般我们在这个函数里面关闭一些定时器或其他收尾的操作。")])])]),e._v(" "),s("p",[e._v("react 17版本之后（包括）")]),e._v(" "),s("p",[e._v("在新的生命周期中，react弃用了"),s("code",[e._v("componentWillMount")]),e._v("、"),s("code",[e._v("componentWillReceiveProps")]),e._v("、"),s("code",[e._v("componentWillUpdate")]),e._v("这三个钩子，取而代之的是"),s("code",[e._v("static getDerivedStateFromProps(props, state)")]),e._v("，其实就是把那三个钩子的含义融入到了这一个钩子中，react会在初始挂载和后续更新时调用"),s("code",[e._v("render")]),e._v("之前调用它。它应该返回一个对象来更新state，或者返回null就不更新任何内容。写法如下：")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getDerivedStateFromProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 每当当前用户发生变化时，")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 重置与该用户关联的任何 state 部分。")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 在这个简单的示例中，只是以 email 为例。")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("userID "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("prevUserID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      prevUserID"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("userID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      email"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("defaultEmail\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("另外还新增了一个钩子，"),s("code",[e._v("getSnapshotBeforeUpdate(prevProps, prevState)")]),e._v("，会在React更新DOM之前时直接调用它。它使你的组件能够在DOM发生更改之前捕获一些信息（例如滚动的位置）。此生命周期方法返回的任何值都将作为参数传递给"),s("code",[e._v("componentDidUpdate")]),e._v("的第三个参数。")]),e._v(" "),s("p",[e._v("Hook是React16.8的新增特性。它可以让你在不编写class的情况下使用state以及其他的React特性。在Hook中，我们写的都是函数组件，也就没有了类组件这些生命周期钩子，但是取而代之的是Hook提供的一些钩子，其含义也和类组件里面的生命周期函数类似。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("useState")]),e._v(" - 用于添加状态到函数组件并在状态改变时重新渲染。")]),e._v(" "),s("li",[s("code",[e._v("useReducer")]),e._v(" - 类似于"),s("code",[e._v("useState")]),e._v("，但用于管理复杂状态，具有dispatch函数。")]),e._v(" "),s("li",[s("code",[e._v("useEffect")]),e._v(" - 用于处理副作用，类似于"),s("code",[e._v("componentDidMount")]),e._v("和"),s("code",[e._v("componentDidUpdate")]),e._v("，可指定清理函数相当于"),s("code",[e._v("componentWillUnmount")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("useContext")]),e._v(" - 用于访问React上下文的状态。")]),e._v(" "),s("li",[s("code",[e._v("useCallback")]),e._v(" - 用于记住回调函数的变化。")]),e._v(" "),s("li",[s("code",[e._v("useMemo")]),e._v(" - 用于记住依赖于props的计算结果。")]),e._v(" "),s("li",[s("code",[e._v("useRef")]),e._v(" - 用于访问组件内的DOM节点或保留某个值的变化。")]),e._v(" "),s("li",[s("code",[e._v("useImperativeHandle")]),e._v(" - 自定义使用ref时的行为。")]),e._v(" "),s("li",[s("code",[e._v("useLayoutEffect")]),e._v(" - 类似于useEffect，但在所有DOM变更后同步执行效果，可用于读取DOM布局和同步重新渲染。")])]),e._v(" "),s("h2",{attrs:{id:"purcomponent和memo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purcomponent和memo"}},[e._v("#")]),e._v(" PurComponent和memo")]),e._v(" "),s("p",[e._v("都是React提供的用于减少组件重复渲染的组件，"),s("code",[e._v("PurComponent")]),e._v("适用于class组件，"),s("code",[e._v("memo")]),e._v("适用于函数组件。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" PureComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Child")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PureComponent")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*...*/")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("React.PureComponent")]),e._v("与"),s("code",[e._v("React.Component")]),e._v("很相似。两者的区别在于"),s("code",[e._v("React.Component")]),e._v("并未实现"),s("code",[e._v("shouldComponentUpdate()")]),e._v("，而"),s("code",[e._v("React.PureComponent")]),e._v("中以浅层对比prop和state的方式来实现了该函数。如果赋予React组件相同的props和state，"),s("code",[e._v("render()")]),e._v("函数会渲染相同的内容，那么在某些情况下使用"),s("code",[e._v("React.PureComponent")]),e._v("可提高性能。")]),e._v(" "),s("blockquote",[s("p",[e._v("React.PureComponent中的shouldComponentUpdate()仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的props和state较为简单时，才使用React.PureComponent，或者在深层数据结构发生变化时调用forceUpdate()来确保组件被正确地更新。你也可以考虑使用immutable对象加速嵌套数据的比较。")]),e._v(" "),s("p",[e._v("此外，React.PureComponent中的shouldComponentUpdate()将跳过所有子组件树的prop更新。因此，请确保所有子组件也都是“纯”的组件。")])]),e._v(" "),s("p",[e._v("如果一个"),s("code",[e._v("PureComponent")]),e._v("组件自定义了"),s("code",[e._v("shouldComponentUpdate")]),e._v("生命周期函数，则该组件是否进行渲染取决于"),s("code",[e._v("shouldComponentUpdate")]),e._v("生命周期函数的执行结果，不会再进行额外的浅比较。如果未定义该生命周期函数，才会浅比较状态state和props。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" memo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("Child")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*...*/")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" MemoizedComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("memo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("SomeComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" arePropsEqual"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("可选参数"),s("code",[e._v("arePropsEqual")]),e._v("：一个函数，接受两个参数：组件的前一个props和新的props。如果旧的和新的props相等，即组件使用新的props渲染的输出和表现与旧的props完全相同，则它应该返回true，否则返回false（这一点与"),s("code",[e._v("shouldComponentUpdate")]),e._v("刚好相反）。通常情况下，你不需要指定此函数。默认情况下，React将使用"),s("code",[e._v("Object.is")]),e._v("比较每个prop。")]),e._v(" "),s("h2",{attrs:{id:"useeffect和render谁先执行-父子组件useeffect执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useeffect和render谁先执行-父子组件useeffect执行顺序"}},[e._v("#")]),e._v(" useEffect和render谁先执行，父子组件useEffect执行顺序")]),e._v(" "),s("p",[e._v("在React中，‌当组件更新时，‌React会按照一定的顺序处理组件的更新过程。‌在这个过程中，"),s("code",[e._v("‌useEffect")]),e._v("的执行顺序是在render之前。‌具体来说，‌当React更新一个组件时，‌它会首先执行"),s("code",[e._v("useEffect")]),e._v("中的函数，‌这些函数通常用于处理副作用操作，‌如数据获取、‌订阅事件等。‌完成这些操作后，‌React才会进行渲染（‌render）‌过程，‌即生成虚拟DOM并与实际DOM进行同步。‌这种设计使得React能够在渲染前处理必要的副作用操作，‌从而确保组件状态的正确更新和视图的一致性。‌")]),e._v(" "),s("p",[e._v("react类组件写法下父子组件的生命周期执行顺序：")]),e._v(" "),s("ol",[s("li",[e._v("父"),s("code",[e._v("constructor")])]),e._v(" "),s("li",[e._v("父"),s("code",[e._v("componentWillMount")])]),e._v(" "),s("li",[e._v("父"),s("code",[e._v("render")])]),e._v(" "),s("li",[e._v("子"),s("code",[e._v("constructor")])]),e._v(" "),s("li",[e._v("子"),s("code",[e._v("componentWillMount")])]),e._v(" "),s("li",[e._v("子"),s("code",[e._v("render")])]),e._v(" "),s("li",[e._v("子"),s("code",[e._v("componentDidMount")])]),e._v(" "),s("li",[e._v("父"),s("code",[e._v("componentDidMount")])])]),e._v(" "),s("p",[s("code",[e._v("useEffect")]),e._v("可以简单看作是"),s("code",[e._v("componentDidMount")]),e._v("、"),s("code",[e._v("componentDidUpdate")]),e._v("和"),s("code",[e._v("componentWillUnmount")]),e._v("的组合。react保证了每次运行effect的同时，DOM都已经更新完毕，故而，在react函数式组件写法的父子组件中，"),s("code",[e._v("useEffect")]),e._v("的执行顺序是：")]),e._v(" "),s("ol",[s("li",[e._v("子"),s("code",[e._v("useEffect")])]),e._v(" "),s("li",[e._v("父"),s("code",[e._v("useEffect")])])]),e._v(" "),s("h2",{attrs:{id:"组件通信-redux的流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件通信-redux的流程"}},[e._v("#")]),e._v(" 组件通信，Redux的流程")]),e._v(" "),s("p",[e._v("通信方式：")]),e._v(" "),s("ol",[s("li",[e._v("父子组件通信：通过props传递信息。")]),e._v(" "),s("li",[e._v("兄弟组件通信：使用共享的上下文（Context）或者状态管理库（如Redux）。")]),e._v(" "),s("li",[e._v("非父子组件通信：使用自定义事件或者状态管理库。")])]),e._v(" "),s("p",[e._v("Redux的工作流程主要包括以下几个步骤：‌")]),e._v(" "),s("ol",[s("li",[e._v("创建Action：‌当用户与应用程序交互时（‌例如点击按钮）‌，‌会触发一个Action。‌Action是一个描述了发生了什么的普通JavaScript对象。‌它必须包含一个用于描述类型的type字段，‌并且可以通过Action Creator函数来创建Action。‌")]),e._v(" "),s("li",[e._v("触发Action：‌通过调用Redux的dispatch函数来触发Action，‌将Action发送给Redux的Store。‌")]),e._v(" "),s("li",[e._v("更新Store：‌Redux的Store接收到Action后，‌会将其传递给Reducer进行处理。‌Reducer是一个纯函数，‌用于根据Action的类型和数据更新Store中的状态。‌")]),e._v(" "),s("li",[e._v("更新View：‌当Store的状态发生变化时，‌Redux会通知相关的组件进行重新渲染，‌使得View与更新后的Store状态保持一致。‌")]),e._v(" "),s("li",[e._v("获取State：‌组件可以通过调用Redux的getState函数来获取当前的Store状态。‌")]),e._v(" "),s("li",[e._v("订阅State变化：‌Redux提供了subscribe函数，‌组件可以通过订阅来监听Store中状态的变化，‌当状态发生变化时执行相应的操作。‌")])]),e._v(" "),s("h2",{attrs:{id:"setstate是同步还是异步的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate是同步还是异步的"}},[e._v("#")]),e._v(" setState是同步还是异步的")]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pages/articles/react/setState是同步还是异步.html"}},[e._v("setState是同步还是异步的")])],1),e._v(" "),s("h2",{attrs:{id:"hook为什么不能放在条件或循环里面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook为什么不能放在条件或循环里面"}},[e._v("#")]),e._v(" hook为什么不能放在条件或循环里面")]),e._v(" "),s("p",[e._v("类组件的状态是以一个对象形式储存的，每个状态都有一个key和value相对应。而在函数式组件中，"),s("code",[e._v("useState")]),e._v("方法只接受了状态的初始值作为参数，并没有key，所以，函数式组件的状态不能以对象的形式存储，只能以线性表的形式存储，在内部用的是链表。React的函数式组件每次渲染都会重新生成状态，且每一次渲染都有一个状态序列，如果在条件语句里调用，就可能导致某次渲染的时候状态序列有缺失，从而出现异常。")]),e._v(" "),s("h2",{attrs:{id:"useeffect和uselayouteffect的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useeffect和uselayouteffect的区别"}},[e._v("#")]),e._v(" useEffect和useLayoutEffect的区别")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("useEffect")]),e._v("和"),s("code",[e._v("useLayoutEffect")]),e._v("的主要区别在于它们的执行时机和对页面渲染的影响。"),s("code",[e._v("useEffect")]),e._v("在组件渲染完成后异步执行，不会阻塞页面的渲染；而"),s("code",[e._v("useLayoutEffect")]),e._v("在组件渲染完成后同步执行，可能会阻塞页面的渲染。")]),e._v(" "),s("li",[s("code",[e._v("useEffect")]),e._v("的回调函数在浏览器绘制完成后异步执行，即在组件渲染完成后执行。它不会阻塞浏览器的渲染工作，适合执行一些不紧急的副作用操作。")]),e._v(" "),s("li",[s("code",[e._v("useLayoutEffect")]),e._v("的回调函数在浏览器绘制前同步执行，即在组件渲染之后、浏览器布局之前执行。由于它是同步执行的，可能会阻塞浏览器的渲染，适合需要立即执行且不影响用户看到一致界面的操作。")])]),e._v(" "),s("p",[e._v("一般来说，优先使用"),s("code",[e._v("useEffect")]),e._v("，因为它不会阻塞页面的渲染，适合处理大多数副作用操作。只有在需要在浏览器布局前立即执行代码且不会产生不良影响时，才考虑使用"),s("code",[e._v("useLayoutEffect")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"react-router里的link标签和a标签的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-router里的link标签和a标签的区别"}},[e._v("#")]),e._v(" react-router里的Link标签和a标签的区别")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("功能：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Link")]),e._v("：在单页应用程序（SPA）中提供导航，而不会导致页面重新加载。当用户点击链接时，React会阻止浏览器默认的页面刷新行为，并且使用"),s("code",[e._v("react-router")]),e._v("提供的导航方式，只更新URL并渲染对应的组件，从而实现单页面应用（SPA）的效果。。")]),e._v(" "),s("li",[s("code",[e._v("a")]),e._v("：单击时会导致完整页面重新加载，导航到新URL。")])])]),e._v(" "),s("li",[s("p",[e._v("性能：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Link")]),e._v("：由于不会导致页面重新加载，因此它提供更好的用户体验，特别是在SPA中。它提高了性能，因为避免了不必要的网络请求。")]),e._v(" "),s("li",[s("code",[e._v("a")]),e._v("：完整页面重新加载会导致较慢的用户体验，因为需要从服务器获取新页面。")])])]),e._v(" "),s("li",[s("p",[e._v("无障碍：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Link")]),e._v("：提供更好的无障碍性，因为它可以通过键盘聚焦和激活。")]),e._v(" "),s("li",[s("code",[e._v("a")]),e._v("：可能不那么无障碍，因为它不提供与按钮或其他交互式元素相同的键盘导航和焦点行为。")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);