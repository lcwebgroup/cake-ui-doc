(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1547:function(e,t,a){"use strict";a.r(t);var n=a(143),c=a(144),o=a(146),s=a(145),i=a(147),r=a(0),l=a.n(r),d=a(470),u=a(453),p=a(454),m=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isCodeCollpase;return l.a.createElement("div",null,l.a.createElement(d.f,{detailText:'<div class="media-wrap image-wrap">\n                                            <image src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />\n                                        </div>'}),this.controlCode(),l.a.createElement(p.a,{isCodeCollpase:e,codeString:'\n\nclass PhotoViewDemo extends Component {\n    render() {\n        return (\n            <div >\n                <PhotoView detailText={"<div class="media-wrap image-wrap"><img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/></div>"} />\n            </div>\n        );\n    }\n\n}\n\n'}))}}]),t}(u.a);t.default=m},453:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(143),c=a(144),o=a(146),s=a(145),i=a(147),r=a(0),l=a.n(r),d=a(1558),u=a(1535),p=a(442),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).changeStatus=function(){a.setState(function(e){return{isCodeCollpase:!e.isCodeCollpase}})},a.copyFn=function(e){var t=document.createRange();t.selectNodeContents(document.getElementById(e||"code"));var a=window.getSelection();a.rangeCount>0&&a.removeAllRanges(),a.addRange(t),document.execCommand("copy"),d.a.success("\u590d\u5236\u6210\u529f")},a.state={isCodeCollpase:!1},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"controlCode",value:function(e){var t=this,a=this.state.isCodeCollpase;return l.a.createElement("div",{className:"codeIco mt-20"},l.a.createElement(u.a,{content:"\u590d\u5236",className:"mr-20"},l.a.createElement("span",{onClick:function(){return t.copyFn(e)}},l.a.createElement(p.a,{type:"copy"}))),a?l.a.createElement(u.a,{content:"\u663e\u793a\u4ee3\u7801",className:"tip"},l.a.createElement("span",{className:"code",onClick:this.changeStatus})):l.a.createElement(u.a,{content:"\u6536\u8d77\u4ee3\u7801",className:"tip"},l.a.createElement("span",{className:"codeCollpase",onClick:this.changeStatus})))}}]),t}(l.a.Component)},454:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(1557),s=a(469);t.a=function(e){return e.isCodeCollpase?"":c.a.createElement(o.a,{id:e.id?e.id:"code",language:"javascript",style:s.a},e.codeString)}}}]);