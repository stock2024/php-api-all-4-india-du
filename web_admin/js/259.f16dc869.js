(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[259],{87259:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return w}});var r=function(){var t=this,e=t._self._c;return e("page-header-wrapper",[e("a-card",{attrs:{bordered:!1}},[e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:12,lg:6,sm:24}},[e("a-form-item",{attrs:{label:"提现状态"}},[e("a-select",{attrs:{placeholder:"请选择提现状态"},model:{value:t.queryParam.state,callback:function(e){t.$set(t.queryParam,"state",e)},expression:"queryParam.state"}},[e("a-select-option",{attrs:{value:0}},[t._v("审核中")]),e("a-select-option",{attrs:{value:1}},[t._v("出金成功")]),e("a-select-option",{attrs:{value:2}},[t._v("出金失败")]),e("a-select-option",{attrs:{value:3}},[t._v("出金取消")])],1)],1)],1),e("a-col",{attrs:{md:12,lg:6,sm:24}},[e("a-form-item",{attrs:{label:"下级代理"}},[e("a-select",{attrs:{placeholder:"请选择下级代理",loading:t.agentloading},on:{focus:t.getagentlist},model:{value:t.queryParam.agentId,callback:function(e){t.$set(t.queryParam,"agentId",e)},expression:"queryParam.agentId"}},t._l(t.agentlist,(function(a,r){return e("a-select-option",{key:r,attrs:{value:a.id}},[t._v(" "+t._s(a.agentName)+" ")])})),1)],1)],1),e("a-col",{attrs:{md:12,lg:6,sm:24}},[e("a-form-item",{attrs:{label:"用户Id"}},[e("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入用户Id"},model:{value:t.queryParam.userId,callback:function(e){t.$set(t.queryParam,"userId",e)},expression:"queryParam.userId"}})],1)],1),e("a-col",{attrs:{md:12,lg:6,sm:24}},[e("a-form-item",{attrs:{label:"真实姓名"}},[e("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入真实姓名"},model:{value:t.queryParam.realName,callback:function(e){t.$set(t.queryParam,"realName",e)},expression:"queryParam.realName"}})],1)],1)],1),e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:12,lg:8,sm:24}},[e("a-form-item",{attrs:{label:"出金时间"}},[e("a-range-picker",{staticStyle:{width:"100%"},attrs:{"show-time":"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:t.onChangeRangeDate},model:{value:t.times,callback:function(e){t.times=e},expression:"times"}})],1)],1),e("a-col",{attrs:{md:12,lg:8,sm:24}},[e("a-form-item",[e("span",{staticClass:"table-page-search-submitButtons"},[e("a-button",{attrs:{icon:"redo"},on:{click:t.getqueryParam}},[t._v(" 重置")]),e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){t.queryParam.pageNum=1,t.getlist()}}},[t._v("查询 ")]),e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"vertical-align-bottom"},on:{click:t.getexport}},[t._v("导出搜索数据 ")])],1)])],1)],1)],1)],1)]),e("a-table",{attrs:{bordered:"",loading:t.loading,pagination:t.pagination,columns:t.columns,"data-source":t.datalist,rowKey:"id",scroll:{x:2e3}},scopedSlots:t._u([{key:"withStatus",fn:function(a,r){return e("span",{},[[e("div",[e("a-tag",{attrs:{color:0==r.withStatus?"blue":1==r.withStatus?"green":2==r.withStatus?"red":"orange"}},[t._v(" "+t._s(0==r.withStatus?"审核中":1==r.withStatus?"提现成功":2==r.withStatus?"提现失败":"提现取消")+" ")])],1)]],2)}},{key:"action",fn:function(a,r){return[e("a",{attrs:{slot:"action",href:"javascript:;"},on:{click:function(e){return t.getEditorder(r.id)}},slot:"action"},[t._v("修改提现记录")])]}}])})],1),e("a-modal",{attrs:{title:"修改订单状态",width:500,visible:t.editOrderdialog,confirmLoading:t.editOrderDialogloading},on:{ok:t.OkeditOrderdialog,cancel:t.CanceleditOrderdialog}},[e("a-form",{ref:"editOrderform",attrs:{form:t.editOrderform}},[e("a-form-item",{attrs:{label:"订单ID"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["withId",{rules:[{type:"number",required:!0,message:"请输入锁仓原因！"}]}],expression:"['withId', { rules: [{ type: 'number', required: true, message: '请输入锁仓原因！', }] }]"}],attrs:{disabled:""}})],1),e("a-form-item",{attrs:{label:"提现状态"}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["state",{rules:[{required:!0,message:"请选择提现状态"}]}],expression:"['state', { rules: [{ required: true, message: '请选择提现状态', }] }]"}],attrs:{placeholder:"请选择提现状态"}},[e("a-select-option",{attrs:{value:"1"}},[t._v("提现成功")]),e("a-select-option",{attrs:{value:"2"}},[t._v("提现失败")])],1)],1),2==t.editOrderform.getFieldValue("state")?e("a-form-item",{attrs:{label:"失败原因"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["authMsg",{rules:[{required:!0,message:"请输入提现失败原因！"}]}],expression:"['authMsg', { rules: [{ required: true, message: '请输入提现失败原因！', }] }]"}]})],1):t._e()],1)],1)],1)},n=[],i=(a(92222),a(41539),a(54747),a(27370),a(83566)),o=a(55275),s=a(25030),l=a.n(s),d=a(35823),u=a.n(d),c=a(30381),g=a.n(c),m={name:"Withdrawallist",data:function(){var t=this;return{columns:[{title:"用户名称（ID）",dataIndex:"nickName",align:"center",width:180,customRender:function(t,e,a){return"".concat(e.nickName,"（").concat(e.userId,"）")}},{title:"订单ID",dataIndex:"id",align:"center"},{title:"代理ID",dataIndex:"agentId",align:"center"},{title:"应转金额",dataIndex:"payChannel",align:"center",customRender:function(t,e,a){return e.withAmt-e.withFee}},{title:"出金金额",dataIndex:"withAmt",align:"center"},{title:"手续费",dataIndex:"withFee",align:"center"},{title:"状态",dataIndex:"withStatus",align:"center",scopedSlots:{customRender:"withStatus"}},{title:"提现银行",dataIndex:"bankName",align:"center"},{title:"提现支行",dataIndex:"bankAddress",align:"center",width:200},{title:"银行号码",dataIndex:"bankNo",align:"center"},{title:"原因",dataIndex:"withMsg",align:"center",width:200},{title:"申请时间",dataIndex:"applyTime",align:"center",width:180,customRender:function(t,e,a){return t?g()(t).format("YYYY-MM-DD HH:mm:ss"):""}},{title:"出金时间",dataIndex:"transTime",align:"center",width:180,customRender:function(t,e,a){return t?g()(t).format("YYYY-MM-DD HH:mm:ss"):""}},{title:"操作",key:"action",align:"center",width:180,fixed:"right",scopedSlots:{customRender:"action"}}],pagination:{total:0,pageSize:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],onShowSizeChange:function(e,a){return t.onSizeChange(e,a)},onChange:function(e,a){return t.onPageChange(e,a)},showTotal:function(t){return"共有 ".concat(t," 条数据")}},loading:!1,queryParam:{pageNum:1,pageSize:10,agentId:void 0,state:void 0,userId:"",realName:"",beginTime:"",endTime:""},datalist:[],agentlist:[],agentloading:!1,times:[],editOrderform:this.$form.createForm(this),editOrderdialog:!1,editOrderDialogloading:!1,fields:["withId","state"],agentqueryParam:{pageNum:1,pageSize:100}}},created:function(){this.getlist()},methods:{getexport:function(){(0,i.hY)(this.queryParam).then((function(t){u()(t,"提现列表.xls")}))},getEditorder:function(t){var e=this;this.editOrderdialog=!0,this.fields.forEach((function(t){return e.editOrderform.getFieldDecorator(t)})),this.editOrderform.setFieldsValue(l()({withId:t},this.fields))},OkeditOrderdialog:function(){var t=this,e=this.$refs.editOrderform.form;console.log("22",e),e.validateFields((function(a,r){a||(1==r.state?(0,i.wQ)(r).then((function(a){"SUCCESS"!=a?alert(a):(alert("提交支付平台成功！"),t.editOrderDialogloading=!0,(0,i.ap)(r).then((function(a){0==a.status?(t.$message.success({content:a.msg,duration:2}),e.resetFields(),t.getlist()):t.$message.error({content:a.msg}),t.editOrderdialog=!1,t.editOrderDialogloading=!1})).catch((function(t){reject(t)})))})).catch((function(t){reject(t)})):(t.editOrderDialogloading=!0,(0,i.ap)(r).then((function(a){0==a.status?(t.$message.success({content:a.msg,duration:2}),e.resetFields(),t.getlist()):t.$message.error({content:a.msg}),t.editOrderdialog=!1,t.editOrderDialogloading=!1})).catch((function(t){reject(t)}))))}))},CanceleditOrderdialog:function(){this.editOrderdialog=!1;var t=this.$refs.editOrderform.form;t.resetFields()},onChangeRangeDate:function(t,e){this.queryParam.beginTime=e[0],this.queryParam.endTime=e[1]},getqueryParam:function(){this.queryParam={pageNum:1,pageSize:10,agentId:void 0,state:void 0,userId:"",realName:"",beginTime:"",endTime:""},this.times=[]},getagentlist:function(){var t=this,e=this;this.agentloading=!0,(0,o.Bn)(this.agentqueryParam).then((function(a){t.agentlist=a.data.list,setTimeout((function(){e.agentloading=!1}),500)}))},getlist:function(){var t=this,e=this;this.loading=!0,(0,i.zC)(this.queryParam).then((function(a){t.datalist=a.data.list,t.pagination.total=a.data.total,setTimeout((function(){e.loading=!1}),500)}))},onPageChange:function(t,e){this.queryParam.pageNum=t,this.getlist()},onSizeChange:function(t,e){this.queryParam.pageNum=t,this.queryParam.pageSize=e,this.getlist()}}},h=m,f=a(70713),p=(0,f.Z)(h,r,n,!1,null,"d97530ba",null),w=p.exports},35823:function(t){t.exports=function(t,e,a,r){var n="undefined"!==typeof r?[r,t]:[t],i=new Blob(n,{type:a||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(i,e);else{var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),s=document.createElement("a");s.style.display="none",s.href=o,s.setAttribute("download",e),"undefined"===typeof s.download&&s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),setTimeout((function(){document.body.removeChild(s),window.URL.revokeObjectURL(o)}),200)}}},25030:function(t,e,a){var r=1/0,n=9007199254740991,i="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",l="[object Symbol]",d="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,u="object"==typeof self&&self&&self.Object===Object&&self,c=d||u||Function("return this")();function g(t,e,a){switch(a.length){case 0:return t.call(e);case 1:return t.call(e,a[0]);case 2:return t.call(e,a[0],a[1]);case 3:return t.call(e,a[0],a[1],a[2])}return t.apply(e,a)}function m(t,e){var a=-1,r=t?t.length:0,n=Array(r);while(++a<r)n[a]=e(t[a],a,t);return n}function h(t,e){var a=-1,r=e.length,n=t.length;while(++a<r)t[n+a]=e[a];return t}var f=Object.prototype,p=f.hasOwnProperty,w=f.toString,y=c.Symbol,v=f.propertyIsEnumerable,b=y?y.isConcatSpreadable:void 0,S=Math.max;function O(t,e,a,r,n){var i=-1,o=t.length;a||(a=q),n||(n=[]);while(++i<o){var s=t[i];e>0&&a(s)?e>1?O(s,e-1,a,r,n):h(n,s):r||(n[n.length]=s)}return n}function P(t,e){return t=Object(t),x(t,e,(function(e,a){return a in t}))}function x(t,e,a){var r=-1,n=e.length,i={};while(++r<n){var o=e[r],s=t[o];a(s,o)&&(i[o]=s)}return i}function I(t,e){return e=S(void 0===e?t.length-1:e,0),function(){var a=arguments,r=-1,n=S(a.length-e,0),i=Array(n);while(++r<n)i[r]=a[e+r];r=-1;var o=Array(e+1);while(++r<e)o[r]=a[r];return o[e]=i,g(t,this,o)}}function q(t){return j(t)||_(t)||!!(b&&t&&t[b])}function k(t){if("string"==typeof t||F(t))return t;var e=t+"";return"0"==e&&1/t==-r?"-0":e}function _(t){return D(t)&&p.call(t,"callee")&&(!v.call(t,"callee")||w.call(t)==i)}var j=Array.isArray;function C(t){return null!=t&&R(t.length)&&!N(t)}function D(t){return Y(t)&&C(t)}function N(t){var e=T(t)?w.call(t):"";return e==o||e==s}function R(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}function T(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Y(t){return!!t&&"object"==typeof t}function F(t){return"symbol"==typeof t||Y(t)&&w.call(t)==l}var L=I((function(t,e){return null==t?{}:P(t,m(O(e,1),k))}));t.exports=L},83566:function(t,e,a){"use strict";a.d(e,{PI:function(){return l},_B:function(){return c},ap:function(){return m},eZ:function(){return p},hY:function(){return f},l0:function(){return s},rj:function(){return d},tH:function(){return w},u7:function(){return u},wQ:function(){return h},zC:function(){return g}});var r=a(27370),n=a(80129),i=a.n(n),o={rechargelist:"/admin/recharge/list.do",rechargedel:"/admin/recharge/del.do",rechargeupdateState:"/admin/recharge/updateState.do",rechargecreateOrder:"/admin/recharge/createOrder.do",rechargeexport:"/admin/recharge/export.do",withdrawlist:"/admin/withdraw/list.do",withdrawupdateState:"admin/withdraw/updateState.do",withdrawexport:"/admin/withdraw/export.do",cashlist:"/admin/cash/list.do",logtransList:"/admin/log/transList.do"};function s(t){return(0,r.ZP)({url:o.rechargelist,method:"post",data:i().stringify(t)})}function l(t){return(0,r.ZP)({url:o.rechargedel,method:"post",data:i().stringify(t)})}function d(t){return(0,r.ZP)({url:o.rechargeupdateState,method:"post",data:i().stringify(t)})}function u(t){return(0,r.ZP)({url:o.rechargecreateOrder,method:"post",data:i().stringify(t)})}function c(t){return(0,r.ZP)({url:o.rechargeexport,method:"post",responseType:"blob",data:i().stringify(t)})}function g(t){return(0,r.ZP)({url:o.withdrawlist,method:"post",data:i().stringify(t)})}function m(t){return(0,r.ZP)({url:o.withdrawupdateState,method:"post",data:i().stringify(t)})}function h(t){return(0,r.ZP)({url:"https://trade.pgim.pro/api/666withdraw.php",method:"post",data:i().stringify(t)})}function f(t){return(0,r.ZP)({url:o.withdrawexport,method:"post",responseType:"blob",data:i().stringify(t)})}function p(t){return(0,r.ZP)({url:o.cashlist,method:"post",data:i().stringify(t)})}function w(t){return(0,r.ZP)({url:o.logtransList,method:"post",data:i().stringify(t)})}}}]);