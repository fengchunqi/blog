(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{484:function(t,r,n){},533:function(t,r,n){"use strict";var a=n(1),e=n(241).end;a({target:"String",proto:!0,forced:n(534)},{padEnd:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},534:function(t,r,n){var a=n(32);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(a)},535:function(t,r,n){var a=n(1),e=n(536),o=n(134);a({target:"Array",proto:!0},{fill:e}),o("fill")},536:function(t,r,n){"use strict";var a=n(14),e=n(133),o=n(15);t.exports=function(t){for(var r=a(this),n=o(r.length),i=arguments.length,c=e(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:e(l,n);u>c;)r[c++]=t;return r}},537:function(t,r,n){"use strict";n(484)},544:function(t,r,n){"use strict";n.r(r);var a=n(21),e=n(31),o=(n(533),n(70),n(17),n(235),n(44),n(535),function(){function t(r){Object(a.a)(this,t),t.drawImage(r)}return Object(e.a)(t,null,[{key:"createColor",value:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0"))}},{key:"getDrawBolck",value:function(){for(var t=new Array(10).fill(0).map((function(t){return new Array(5).fill(!1)})),r=0;r<10;r++)for(var n=Math.floor(5*Math.random())+1;n;){var a=Math.floor(5*Math.random());t[r][a]||(t[r][a]=!0,n--)}return t}},{key:"drawImage",value:function(r){if(r){var n=r.getContext("2d");t.clear(n),n.fillStyle=t.createColor();for(var a=t.getDrawBolck(),e=0;e<10;e++)for(var o=0;o<5;o++)a[e][o]&&(n.fillRect(10*o,10*e,10,10),n.fillRect(10*(9-o),10*e,10,10))}}},{key:"clear",value:function(t){t.fillStyle="#FFFFFF",t.fillRect(0,0,100,100)}}]),t}()),i={name:"BlogAvatar",data:function(){return{}},mounted:function(){this.createAvatar()},methods:{createAvatar:function(){var t=document.querySelector("#myCanvas");new o(t)}}},c=(n(537),n(6)),l=Object(c.a)(i,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"avatar-container"},[r("canvas",{attrs:{id:"myCanvas",width:"100",height:"100"}},[this._v("\n    Your browser does not support the HTML5 canvas tag.\n  ")]),this._v(" "),r("div",{staticClass:"button",on:{click:this.createAvatar}},[this._v("\n    重新生成\n  ")])])}),[],!1,null,"9175eebe",null);r.default=l.exports}}]);