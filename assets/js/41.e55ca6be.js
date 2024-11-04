(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{579:function(e,v,_){"use strict";_.r(v);var t=_(6),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("文章来源："),_("a",{attrs:{href:"https://mp.weixin.qq.com/s/m5hIXiPPeyc3T2dkIZLzvw",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("面试官：说说你对git rebase 和 git merge的理解？区别？"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[e._v("#")]),e._v(" 是什么")]),e._v(" "),_("p",[e._v("在使用 "),_("code",[e._v("git")]),e._v(" 进行版本管理的项目中，当完成一个特性的开发并将其合并到 "),_("code",[e._v("master")]),e._v(" 分支时，会有两种方式：")]),e._v(" "),_("ul",[_("li",[e._v("git merge")]),e._v(" "),_("li",[e._v("git rebase")])]),e._v(" "),_("p",[_("code",[e._v("git rebase")]),e._v(" 与 "),_("code",[e._v("git merge")]),e._v("都有相同的作用，都是将一个分支的提交合并到另一分支上，但是在原理上却不相同")]),e._v(" "),_("p",[e._v("用法上两者也十分的简单：")]),e._v(" "),_("p",[_("code",[e._v("git merge")]),e._v(" 将当前分支合并到指定分支，命令用法如下：")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("git merge xxx\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("p",[_("code",[e._v("git rebase")]),e._v(" 将当前分支移植到指定分支或指定"),_("code",[e._v("commit")]),e._v("之上，"),_("code",[e._v("rebase")]),e._v(" 合并往往又被称为 「变基」，用法如下：")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("git rebase -i <commit>\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("p",[e._v("常见的参数有"),_("code",[e._v("--continue")]),e._v("，用于解决冲突之后，继续执行"),_("code",[e._v("rebase")])]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("git rebase --continue\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("h2",{attrs:{id:"分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[e._v("#")]),e._v(" 分析")]),e._v(" "),_("h3",{attrs:{id:"git-merge"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[e._v("#")]),e._v(" git merge")]),e._v(" "),_("p",[e._v("通过"),_("code",[e._v("git merge")]),e._v("将当前分支与xxx分支合并，产生的新的"),_("code",[e._v("commit")]),e._v("对象有两个父节点")]),e._v(" "),_("p",[e._v("如果“指定分支”本身是当前分支的一个直接子节点，则会产生快照合并")]),e._v(" "),_("p",[e._v("举个例子：bugfix分支是从master分支分叉出来的，合并bugfix分支到master分支时")]),e._v(" "),_("ul",[_("li",[e._v("如果master分支的状态没有被更改过，即bugfix分支的历史记录包含master分支所有的历史记录，所以通过把master分支的位置移动到bugfix的最新分支上，就完成合并")]),e._v(" "),_("li",[e._v("如果master分支的历史记录在创建bugfix分支后又有新的提交，这时候使用"),_("code",[e._v("git merge")]),e._v("的时候，会生成一个新的提交，并且master分支的HEAD会移动到新的分支上，会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照")])]),e._v(" "),_("h3",{attrs:{id:"git-rebase"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[e._v("#")]),e._v(" git rebase")]),e._v(" "),_("p",[e._v("同样，master分支的历史记录在创建bugfix分支后又有新的提交，通过"),_("code",[e._v("git rebase")]),e._v("，会变成如下情况：")]),e._v(" "),_("p",[e._v("在移交过程中，如果发生冲突，需要修改各自的冲突，rebase之后，master的HEAD位置不变。因此，要合并master分支和bugfix分支。rebase会找到不同的分支的最近共同祖先，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件（老的提交没有被销毁，只是简单地不能再被访问或者使用），然后将当前分支指向目标最新位置, 然后将之前另存为临时文件的修改依序应用")]),e._v(" "),_("h2",{attrs:{id:"区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[e._v("#")]),e._v(" 区别")]),e._v(" "),_("p",[e._v("从上面可以看到，"),_("code",[e._v("merge")]),e._v("和"),_("code",[e._v("rebasea")]),e._v("都是合并历史记录，但是各自特性不同：")]),e._v(" "),_("p",[e._v("merge")]),e._v(" "),_("p",[e._v("通过"),_("code",[e._v("merge")]),e._v("合并分支会新增一个"),_("code",[e._v("merge commit")]),e._v("，然后将两个分支的历史联系起来")]),e._v(" "),_("p",[e._v("其实是一种非破坏性的操作，对现有分支不会以任何方式被更改，但是会导致历史记录相对复杂")]),e._v(" "),_("ul",[_("li",[e._v("记录下合并动作，很多时候这种合并动作是垃圾信息")]),e._v(" "),_("li",[e._v("不会修改原 "),_("code",[e._v("commit ID")])]),e._v(" "),_("li",[e._v("冲突只解决一次")]),e._v(" "),_("li",[e._v("分支看着不大整洁，但是能看出合并的先后顺序")]),e._v(" "),_("li",[e._v("记录了真实的 "),_("code",[e._v("commit")]),e._v(" 情况，包括每个分支的详情")])]),e._v(" "),_("p",[e._v("rebase")]),e._v(" "),_("p",[_("code",[e._v("rebase")]),e._v("会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交。"),_("code",[e._v("rebase")]),e._v(" 通过为原始分支中的每个提交创建全新的 "),_("code",[e._v("commit")]),e._v(" 来重写项目历史记录")]),e._v(" "),_("p",[e._v("主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 "),_("code",[e._v("git merge")]),e._v(" 所需的不必要的合并提交")]),e._v(" "),_("ul",[_("li",[e._v("改变当前分支 "),_("code",[e._v("branch out")]),e._v(" 的位置")]),e._v(" "),_("li",[e._v("得到更简洁的项目历史")]),e._v(" "),_("li",[e._v("每个 "),_("code",[e._v("commit")]),e._v(" 都需要解决冲突")]),e._v(" "),_("li",[e._v("修改所有 "),_("code",[e._v("commit ID")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);