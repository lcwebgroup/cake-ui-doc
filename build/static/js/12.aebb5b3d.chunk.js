(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1306:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return k});var n=t(33),l=t(34),o=t(36),r=t(35),c=t(37),s=t(0),d=t.n(s),u=t(179),p=t(162),m=t(163),i=t(168),y=[{title:"\u53c2\u6570",dataIndex:"para"},{title:"\u8bf4\u660e",dataIndex:"statement"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultVal"}],h=[{key:"1",para:"type",statement:"\u7c7b\u578b, \u6587\u672c\u6846\u7684\u7c7b\u578b,\u8be6\u7ec6\u8bf7\u67e5\u770b\u793a\u5217\u4ee3\u7801",type:"string",defaultVal:"text"},{key:"2",para:"keyName",statement:"\u6587\u672c\u6846\u7684name,\u8868\u5355\u63d0\u4ea4\u7684\u65f6\u5019\u8981\u7528\u7684",type:"string",defaultVal:""},{key:"3",para:"dateType",statement:"\u5173\u4e8e\u65f6\u95f4\u7684\u9009\u62e9\u7c7b\u578b\uff0cweek,month\u7b49",type:"string",defaultVal:""}],f=[{title:"\u53c2\u6570",dataIndex:"para"},{title:"\u8bf4\u660e",dataIndex:"statement"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultVal"}],g=[{key:"1",para:"config",statement:"\u641c\u7d22\u8868\u5355\u7684\u914d\u7f6e\u9879",type:"object",defaultVal:"text"},{key:"2",para:"search",statement:"\u70b9\u51fb\u641c\u7d22\u65f6\u6267\u884c\u7684\u65b9\u6cd5",type:"function",defaultVal:""},{key:"3",para:"collapse",statement:"\u662f\u5426\u6298\u53e0",type:"boolean",defaultVal:""},{key:"4",para:"collapsedShowRow",statement:"\u6298\u53e0\u65f6\u5c55\u793a\u51e0\u884c",type:"string",defaultVal:"1"},{key:"5",para:"ref",statement:"\u83b7\u53d6\u8868\u5355\u5bf9\u8c61\uff0c\u7528\u4e8e\u64cd\u4f5c\u8868\u5355\u5185\u90e8\u65b9\u6cd5",type:"function",defaultVal:""},{key:"6",para:"buttonsColSpan",statement:"\u6309\u94ae\u5360\u7528\u4f4d\u7f6e\u7684\u5927\u5c0f",type:"number",defaultVal:"4"},{key:"7",para:"justify",statement:"\u5bf9\u9f50\u65b9\u5f0f",type:"string",defaultVal:"start"},{key:"8",para:"wrapClassName",statement:"\u5916\u5c42class",type:"string",defaultVal:""},{key:"9",para:"resetType",statement:"1:\u91cd\u7f6e\u540e\u81ea\u52a8\u67e5\u8be2  2\uff1a\u91cd\u7f6e\u540e\u4e0d\u81ea\u52a8\u67e5\u8be2",type:"string",defaultVal:"1"}],k=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(c)))).queryData=function(e){},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state.isCodeCollpase;return d.a.createElement("div",null,d.a.createElement("h2",null,"\u4ee5\u4e0b\u662f SearchForm \u793a\u4f8b\uff1a"),d.a.createElement(u.h,{config:a.searchConfig,search:this.queryData,collapse:!0}),this.controlCode(),d.a.createElement(m.a,{isCodeCollpase:e,codeString:'\n\nstatic searchConfig = [\n    // \u8fc7\u6ee4\u8868\u5355\u914d\u7f6e\u793a\u4f8b\n    {\n        name: "\u59d3\u540d",\n        type: "text",\n        keyName: "name",\n        placeholder: "\u8bf7\u8f93\u5165\u59d3\u540d",\n        onChange:(e, form)=> {\n            // \u9664\u4e86\u8054\u52a8\uff0c\u4e00\u822c\u7528\u4e0d\u4e0a\n            console.log(e.target, e.target.value, form);\n        }\n    },\n    {\n        name: "\u5e74\u9f84",\n        type: "number",\n        keyName: "age",\n        placeholder: "\u8bf7\u8f93\u5165\u5e74\u9f84",\n    },\n    {\n        name: "\u6027\u522b",\n        type: "radio",\n        keyName: "sex",\n        defaultValue:1,\n        options: [\n            { value: 1, label: "\u7537" },\n            { value: 2, label: "\u5973" },\n        ]\n    },\n    {\n        name: "\u7231\u597d",\n        type: "radioTag",\n        keyName: "habby",\n        defaultValue:1,\n        options: [\n            { value: 1, label: "\u5531\u6b4c" },\n            { value: 2, label: "\u8df3\u821e" },\n            { value: 3, label: "\u753b\u753b" },\n        ]\n    },\n    {\n        name: "\u7c7b\u578b",\n        type: "select",\n        keyName: "type",\n        defaultValue:1,\n        options: [\n            { value: 1, label: "111" },\n            { value: 2, label: "222" },\n            { value: 3, label: "333" }\n        ]\n    },\n    {\n        name: "\u65e5\u671f",\n        keyName: "date",\n        type: "date",\n        dateType: "date",\n        placeholder: "\u8bf7\u9009\u62e9\u65f6\u95f4",\n        // disabledDate:(current)=>{\n        //     return current && current < moment("2018-08-14", "YYYY-MM-DD")\n        // }\n    },\n    {\n        name: "\u5468",\n        keyName: "week",\n        type: "date",\n        dateType: "week",\n        placeholder: "\u8bf7\u9009\u62e9\u65f6\u95f4"\n    },\n    {\n        name: "\u6708\u4efd",\n        keyName: "month",\n        type: "date",\n        dateType: "month",\n        placeholder: "\u8bf7\u9009\u62e9\u65f6\u95f4"\n    },\n    {\n        name: "\u65f6\u95f4\u8303\u56f4",\n        keyName: "range",\n        type: "dateRange",\n        colSpan: 8,\n        mdColSpan: 10,\n        smColSpan: 12,\n    },\n];\n\nqueryData=(json) =>{\n    \n}\n\nrender() {\n    \n    return (\n        <div>\n            <h2>\u4ee5\u4e0b\u662f SearchForm \u793a\u4f8b\uff1a</h2>\n            <SearchForm\n                config={SearchFormDemo.searchConfig}\n                search={this.queryData}\n                collapse={true}                \n                // ref={ins=>this.searchFormIns=ins}\n            />\n         </div>\n    )\n}\n\n'}),d.a.createElement("h2",null,"\u7ec4\u4ef6\u5c5e\u6027"),d.a.createElement(i.a,{col:f,data:g}),d.a.createElement("h2",null,"\u914d\u7f6e\u5b57\u6bb5\u540d"),d.a.createElement(i.a,{col:y,data:h}))}}]),a}(p.a);k.searchConfig=[{name:"\u59d3\u540d",type:"text",keyName:"name",placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d",onChange:function(e,a){console.log(e.target,e.target.value,a)}},{name:"\u5e74\u9f84",type:"number",keyName:"age",placeholder:"\u8bf7\u8f93\u5165\u5e74\u9f84"},{name:"\u6027\u522b",type:"radio",keyName:"sex",defaultValue:1,options:[{value:1,label:"\u7537"},{value:2,label:"\u5973"}]},{name:"\u7231\u597d",type:"radioTag",keyName:"habby",defaultValue:1,options:[{value:1,label:"\u5531\u6b4c"},{value:2,label:"\u8df3\u821e"},{value:3,label:"\u753b\u753b"}]},{name:"\u7c7b\u578b",type:"select",keyName:"type",defaultValue:1,options:[{value:1,label:"111"},{value:2,label:"222"},{value:3,label:"333"}]},{name:"\u65e5\u671f",keyName:"date",type:"date",dateType:"date",placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4"},{name:"\u5468",keyName:"week",type:"date",dateType:"week",placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4"},{name:"\u6708\u4efd",keyName:"month",type:"date",dateType:"month",placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4"},{name:"\u65f6\u95f4\u8303\u56f4",keyName:"range",type:"dateRange",colSpan:8,mdColSpan:10,smColSpan:12}]},162:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(33),l=t(34),o=t(36),r=t(35),c=t(37),s=t(0),d=t.n(s),u=t(1330),p=t(1307),m=t(18),i=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(r.a)(a).call(this,e))).changeStatus=function(){t.setState(function(e){return{isCodeCollpase:!e.isCodeCollpase}})},t.copyFn=function(e){var a=document.createRange();a.selectNodeContents(document.getElementById(e||"code"));var t=window.getSelection();t.rangeCount>0&&t.removeAllRanges(),t.addRange(a),document.execCommand("copy"),u.a.success("\u590d\u5236\u6210\u529f")},t.state={isCodeCollpase:!1},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"controlCode",value:function(e){var a=this,t=this.state.isCodeCollpase;return d.a.createElement("div",{className:"codeIco mt-20"},d.a.createElement(p.a,{content:"\u590d\u5236",className:"mr-20"},d.a.createElement("span",{onClick:function(){return a.copyFn(e)}},d.a.createElement(m.a,{type:"copy"}))),t?d.a.createElement(p.a,{content:"\u663e\u793a\u4ee3\u7801",className:"tip"},d.a.createElement("span",{className:"code",onClick:this.changeStatus})):d.a.createElement(p.a,{content:"\u6536\u8d77\u4ee3\u7801",className:"tip"},d.a.createElement("span",{className:"codeCollpase",onClick:this.changeStatus})))}}]),a}(d.a.Component)},163:function(e,a,t){"use strict";var n=t(0),l=t.n(n),o=t(1329),r=t(178);a.a=function(e){return e.isCodeCollpase?"":l.a.createElement(o.a,{id:e.id?e.id:"code",language:"javascript",style:r.a},e.codeString)}},168:function(e,a,t){"use strict";var n=t(0),l=t.n(n),o=t(1324);a.a=function(e){return l.a.createElement(o.a,{columns:e.col,dataSource:e.data,pagination:!1})}}}]);