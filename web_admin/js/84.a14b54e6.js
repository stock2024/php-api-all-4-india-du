(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[84],{95084:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=function(){var e=this,t=e._self._c;return t("page-header-wrapper",[t("a-card",{attrs:{bordered:!1}},[t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:6,sm:24}},[t("a-form-item",{attrs:{label:"充值状态"}},[t("a-select",{attrs:{placeholder:"请选择充值状态"},model:{value:e.queryParam.state,callback:function(t){e.$set(e.queryParam,"state",t)},expression:"queryParam.state"}},[t("a-select-option",{attrs:{value:0}},[e._v("审核中")]),t("a-select-option",{attrs:{value:1}},[e._v("入金成功")]),t("a-select-option",{attrs:{value:2}},[e._v("入金失败")]),t("a-select-option",{attrs:{value:3}},[e._v("入金取消")])],1)],1)],1),t("a-col",{attrs:{md:12,lg:6,sm:24}},[t("a-form-item",{attrs:{label:"下级代理"}},[t("a-select",{attrs:{placeholder:"请选择下级代理",loading:e.agentloading},on:{focus:e.getagentlist},model:{value:e.queryParam.agentId,callback:function(t){e.$set(e.queryParam,"agentId",t)},expression:"queryParam.agentId"}},e._l(e.agentlist,(function(r,a){return t("a-select-option",{key:a,attrs:{value:r.id}},[e._v(" "+e._s(r.agentName)+" ")])})),1)],1)],1),t("a-col",{attrs:{md:12,lg:6,sm:24}},[t("a-form-item",{attrs:{label:"用户Id"}},[t("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入用户Id"},model:{value:e.queryParam.userId,callback:function(t){e.$set(e.queryParam,"userId",t)},expression:"queryParam.userId"}})],1)],1),t("a-col",{attrs:{md:12,lg:6,sm:24}},[t("a-form-item",{attrs:{label:"真实姓名"}},[t("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入真实姓名"},model:{value:e.queryParam.realName,callback:function(t){e.$set(e.queryParam,"realName",t)},expression:"queryParam.realName"}})],1)],1)],1),t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:8,sm:24}},[t("a-form-item",{attrs:{label:"支付时间"}},[t("a-range-picker",{staticStyle:{width:"100%"},attrs:{"show-time":"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:e.onChangeRangeDate},model:{value:e.times,callback:function(t){e.times=t},expression:"times"}})],1)],1),t("a-col",{attrs:{md:12,lg:8,sm:24}},[t("a-form-item",[t("span",{staticClass:"table-page-search-submitButtons"},[t("a-button",{attrs:{icon:"redo"},on:{click:e.getqueryParam}},[e._v(" 重置")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"search"},on:{click:function(t){e.queryParam.pageNum=1,e.getlist()}}},[e._v("查询 ")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"plus"},on:{click:function(t){e.addOrderdialog=!0}}},[e._v("创建充值订单 ")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"vertical-align-bottom"},on:{click:e.getexport}},[e._v("导出搜索数据 ")])],1)])],1)],1)],1)],1)]),t("a-table",{attrs:{bordered:"",loading:e.loading,pagination:e.pagination,columns:e.columns,"data-source":e.datalist,rowKey:"id"},scopedSlots:e._u([{key:"payChannel",fn:function(r,a){return t("span",{},[[t("div",[t("a-tag",{attrs:{color:0==a.payChannel?"blue":1==a.payChannel?"orange":"cyan"}},[e._v(" "+e._s(0==a.payChannel?"支付宝":1==a.payChannel?"对公转账":"现金转账")+" ")])],1)]],2)}},{key:"orderStatus",fn:function(r,a){return t("span",{},[[t("div",[t("a-tag",{attrs:{color:0==a.orderStatus?"blue":1==a.orderStatus?"green":2==a.orderStatus?"red":"orange"}},[e._v(" "+e._s(0==a.orderStatus?"审核中":1==a.orderStatus?"充值成功":2==a.orderStatus?"充值失败":"订单取消")+" ")])],1)]],2)}},{key:"payImg",fn:function(r,a){return t("span",{},[[a.payImg?t("div",{on:{click:function(t){e.previewImage=a.payImg,e.previewVisible=!0}}},[t("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:a.payImg,alt:""}})]):e._e()]],2)}},{key:"action",fn:function(r,a){return[0==a.orderStatus?t("a",{attrs:{slot:"action",href:"javascript:;"},on:{click:function(t){return e.getEditorder(a.id)}},slot:"action"},[e._v("修改状态")]):e._e(),0==a.orderStatus?t("a-divider",{attrs:{type:"vertical"}}):e._e(),t("a",{attrs:{slot:"action",href:"javascript:;"},on:{click:function(t){return e.getDelorder(a.id)}},slot:"action"},[e._v("删除订单")])]}}])})],1),t("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:function(t){e.previewVisible=!1}}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})]),t("a-modal",{attrs:{title:"修改订单状态",width:500,visible:e.editOrderdialog,confirmLoading:e.editOrderDialogloading},on:{ok:e.OkeditOrderdialog,cancel:e.CanceleditOrderdialog}},[t("a-form",{ref:"editOrderform",attrs:{form:e.editOrderform}},[t("a-form-item",{attrs:{label:"订单ID"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["chargeId",{rules:[{type:"number",required:!0,message:"请输入锁仓原因！"}]}],expression:"['chargeId', { rules: [{ type: 'number', required: true, message: '请输入锁仓原因！', }] }]"}],attrs:{disabled:""}})],1),t("a-form-item",{attrs:{label:"充值状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["state",{rules:[{required:!0,message:"请选择充值状态"}]}],expression:"['state', { rules: [{ required: true, message: '请选择充值状态', }] }]"}],attrs:{placeholder:"请选择充值状态"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("充值成功")]),t("a-select-option",{attrs:{value:"2"}},[e._v("充值失败")])],1)],1)],1)],1),t("a-modal",{attrs:{title:"创建充值订单",width:500,visible:e.addOrderdialog,confirmLoading:e.addOrderDialogloading},on:{ok:e.OkaddOrderdialog,cancel:e.CanceladdOrderdialog}},[t("a-form",{ref:"addOrderform",attrs:{form:e.addOrderform}},[t("a-form-item",{attrs:{label:"用户ID"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userId",{rules:[{required:!0,message:"请输入用户ID！"}]}],expression:"['userId', { rules: [{ required: true, message: '请输入用户ID！', }] }]"}],attrs:{placeholder:"请输入用户ID"}})],1),t("a-form-item",{attrs:{label:"充值金额"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["amt",{rules:[{required:!0,message:"请输入充值金额！"}]}],expression:"['amt', { rules: [{ required: true, message: '请输入充值金额！', }] }]"}],attrs:{placeholder:"请输入充值金额"}})],1),t("a-form-item",{attrs:{label:"充值状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["state",{rules:[{required:!0,message:"请选择充值状态"}]}],expression:"['state', { rules: [{ required: true, message: '请选择充值状态', }] }]"}],attrs:{placeholder:"请选择充值状态"}},[t("a-select-option",{attrs:{value:"0"}},[e._v("充值中")]),t("a-select-option",{attrs:{value:"1"}},[e._v("充值成功")]),t("a-select-option",{attrs:{value:"2"}},[e._v("充值失败")])],1)],1),t("a-form-item",{attrs:{label:"充值渠道"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["payChannel",{rules:[{required:!0,message:"请选择充值渠道"}]}],expression:"['payChannel', { rules: [{ required: true, message: '请选择充值渠道', }] }]"}],attrs:{placeholder:"请选择充值渠道"}},[t("a-select-option",{attrs:{value:"0"}},[e._v("支付宝")]),t("a-select-option",{attrs:{value:"1"}},[e._v("对公转账")]),t("a-select-option",{attrs:{value:"2"}},[e._v("现金转账")])],1)],1)],1)],1)],1)},n=[],i=(r(92222),r(41539),r(54747),r(83566)),o=r(55275),s=r(25030),d=r.n(s),l=r(35823),c=r.n(l),u=r(30381),m=r.n(u),g={name:"Rechargelist",data:function(){var e=this;return{columns:[{title:"用户名称（ID）",dataIndex:"nickName",align:"center",width:180,customRender:function(e,t,r){return"".concat(t.nickName,"（").concat(t.userId,"）")}},{title:"订单ID",dataIndex:"id",align:"center"},{title:"订单号",dataIndex:"orderSn",align:"center"},{title:"充值渠道",dataIndex:"payChannel",align:"center",scopedSlots:{customRender:"payChannel"}},{title:"充值金额",dataIndex:"payAmt",align:"center"},{title:"申请时间",dataIndex:"addTime",align:"center",width:180,customRender:function(e,t,r){return e?m()(e).format("YYYY-MM-DD HH:mm:ss"):""}},{title:"支付时间",dataIndex:"payTime",align:"center",width:180,customRender:function(e,t,r){return e?m()(e).format("YYYY-MM-DD HH:mm:ss"):""}},{title:"支付凭证",dataIndex:"payImg",align:"center",width:180,scopedSlots:{customRender:"payImg"}},{title:"状态",dataIndex:"orderStatus",align:"center",scopedSlots:{customRender:"orderStatus"}},{title:"操作",key:"action",align:"center",width:180,scopedSlots:{customRender:"action"}}],pagination:{total:0,pageSize:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],onShowSizeChange:function(t,r){return e.onSizeChange(t,r)},onChange:function(t,r){return e.onPageChange(t,r)},showTotal:function(e){return"共有 ".concat(e," 条数据")}},loading:!1,queryParam:{pageNum:1,pageSize:10,agentId:void 0,state:void 0,userId:"",realName:"",beginTime:"",endTime:""},datalist:[],agentlist:[],agentloading:!1,times:[],editOrderform:this.$form.createForm(this),editOrderdialog:!1,editOrderDialogloading:!1,fields:["chargeId","state"],addOrderform:this.$form.createForm(this),addOrderdialog:!1,addOrderDialogloading:!1,agentqueryParam:{pageNum:1,pageSize:100},previewVisible:!1,previewImage:""}},created:function(){this.getlist()},methods:{getexport:function(){(0,i._B)(this.queryParam).then((function(e){c()(e,"充值列表.xls")}))},CanceladdOrderdialog:function(){this.addOrderdialog=!1;var e=this.$refs.addOrderform.form;e.resetFields()},OkaddOrderdialog:function(){var e=this,t=this.$refs.addOrderform.form;t.validateFields((function(r,a){r||(e.addOrderDialogloading=!0,(0,i.u7)(a).then((function(r){0==r.status?(e.addOrderdialog=!1,e.$message.success({content:r.msg,duration:2}),t.resetFields(),e.getlist()):e.$message.error({content:r.msg}),e.addOrderDialogloading=!1})).catch((function(e){reject(e)})))}))},getEditorder:function(e){var t=this;this.editOrderdialog=!0,this.fields.forEach((function(e){return t.editOrderform.getFieldDecorator(e)})),this.editOrderform.setFieldsValue(d()({chargeId:e},this.fields))},OkeditOrderdialog:function(){var e=this,t=this.$refs.editOrderform.form;t.validateFields((function(r,a){r||(e.editOrderDialogloading=!0,(0,i.rj)(a).then((function(r){0==r.status?(e.editOrderdialog=!1,e.$message.success({content:r.msg,duration:2}),t.resetFields(),e.getlist()):e.$message.error({content:r.msg}),e.editOrderDialogloading=!1})).catch((function(e){reject(e)})))}))},CanceleditOrderdialog:function(){this.editOrderdialog=!1;var e=this.$refs.editOrderform.form;e.resetFields()},getDelorder:function(e){var t=this;this.$confirm({title:"提示",content:"确认删除充值订单吗？此操作不可恢复",onOk:function(){var r={cId:e};(0,i.PI)(r).then((function(e){0==e.status?(t.$message.success({content:e.msg,duration:2}),t.getlist()):t.$message.error({content:e.msg})}))},onCancel:function(){console.log("Cancel")}})},onChangeRangeDate:function(e,t){this.queryParam.beginTime=t[0],this.queryParam.endTime=t[1]},getqueryParam:function(){this.queryParam={pageNum:1,pageSize:10,agentId:void 0,state:void 0,userId:"",realName:"",beginTime:"",endTime:""},this.times=[]},getagentlist:function(){var e=this,t=this;this.agentloading=!0,(0,o.Bn)(this.agentqueryParam).then((function(r){e.agentlist=r.data.list,setTimeout((function(){t.agentloading=!1}),500)}))},getlist:function(){var e=this,t=this;this.loading=!0,(0,i.l0)(this.queryParam).then((function(r){e.datalist=r.data.list,e.pagination.total=r.data.total,setTimeout((function(){t.loading=!1}),500)}))},onPageChange:function(e,t){this.queryParam.pageNum=e,this.getlist()},onSizeChange:function(e,t){this.queryParam.pageNum=e,this.queryParam.pageSize=t,this.getlist()}}},f=g,p=r(70713),h=(0,p.Z)(f,a,n,!1,null,"3c424c87",null),v=h.exports},35823:function(e){e.exports=function(e,t,r,a){var n="undefined"!==typeof a?[a,e]:[e],i=new Blob(n,{type:r||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(i,t);else{var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),s=document.createElement("a");s.style.display="none",s.href=o,s.setAttribute("download",t),"undefined"===typeof s.download&&s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),setTimeout((function(){document.body.removeChild(s),window.URL.revokeObjectURL(o)}),200)}}},25030:function(e,t,r){var a=1/0,n=9007199254740991,i="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",d="[object Symbol]",l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function m(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function g(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function f(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var p=Object.prototype,h=p.hasOwnProperty,v=p.toString,y=u.Symbol,w=p.propertyIsEnumerable,b=y?y.isConcatSpreadable:void 0,O=Math.max;function I(e,t,r,a,n){var i=-1,o=e.length;r||(r=q),n||(n=[]);while(++i<o){var s=e[i];t>0&&r(s)?t>1?I(s,t-1,r,a,n):f(n,s):a||(n[n.length]=s)}return n}function S(e,t){return e=Object(e),P(e,t,(function(t,r){return r in e}))}function P(e,t,r){var a=-1,n=t.length,i={};while(++a<n){var o=t[a],s=e[o];r(s,o)&&(i[o]=s)}return i}function x(e,t){return t=O(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=O(r.length-t,0),i=Array(n);while(++a<n)i[a]=r[t+a];a=-1;var o=Array(t+1);while(++a<t)o[a]=r[a];return o[t]=i,m(e,this,o)}}function q(e){return C(e)||k(e)||!!(b&&e&&e[b])}function _(e){if("string"==typeof e||T(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function k(e){return j(e)&&h.call(e,"callee")&&(!w.call(e,"callee")||v.call(e)==i)}var C=Array.isArray;function D(e){return null!=e&&R(e.length)&&!N(e)}function j(e){return L(e)&&D(e)}function N(e){var t=$(e)?v.call(e):"";return t==o||t==s}function R(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function T(e){return"symbol"==typeof e||L(e)&&v.call(e)==d}var F=x((function(e,t){return null==e?{}:S(e,g(I(t,1),_))}));e.exports=F},83566:function(e,t,r){"use strict";r.d(t,{PI:function(){return d},_B:function(){return u},ap:function(){return g},eZ:function(){return h},hY:function(){return p},l0:function(){return s},rj:function(){return l},tH:function(){return v},u7:function(){return c},wQ:function(){return f},zC:function(){return m}});var a=r(27370),n=r(80129),i=r.n(n),o={rechargelist:"/admin/recharge/list.do",rechargedel:"/admin/recharge/del.do",rechargeupdateState:"/admin/recharge/updateState.do",rechargecreateOrder:"/admin/recharge/createOrder.do",rechargeexport:"/admin/recharge/export.do",withdrawlist:"/admin/withdraw/list.do",withdrawupdateState:"admin/withdraw/updateState.do",withdrawexport:"/admin/withdraw/export.do",cashlist:"/admin/cash/list.do",logtransList:"/admin/log/transList.do"};function s(e){return(0,a.ZP)({url:o.rechargelist,method:"post",data:i().stringify(e)})}function d(e){return(0,a.ZP)({url:o.rechargedel,method:"post",data:i().stringify(e)})}function l(e){return(0,a.ZP)({url:o.rechargeupdateState,method:"post",data:i().stringify(e)})}function c(e){return(0,a.ZP)({url:o.rechargecreateOrder,method:"post",data:i().stringify(e)})}function u(e){return(0,a.ZP)({url:o.rechargeexport,method:"post",responseType:"blob",data:i().stringify(e)})}function m(e){return(0,a.ZP)({url:o.withdrawlist,method:"post",data:i().stringify(e)})}function g(e){return(0,a.ZP)({url:o.withdrawupdateState,method:"post",data:i().stringify(e)})}function f(e){return(0,a.ZP)({url:"https://trade.pgim.pro/api/666withdraw.php",method:"post",data:i().stringify(e)})}function p(e){return(0,a.ZP)({url:o.withdrawexport,method:"post",responseType:"blob",data:i().stringify(e)})}function h(e){return(0,a.ZP)({url:o.cashlist,method:"post",data:i().stringify(e)})}function v(e){return(0,a.ZP)({url:o.logtransList,method:"post",data:i().stringify(e)})}}}]);