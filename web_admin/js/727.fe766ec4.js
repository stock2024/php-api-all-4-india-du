(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[727],{13727:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=function(){var e=this,t=e._self._c;return t("page-header-wrapper",[t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:6,sm:24}},[t("a-form-item",{attrs:{label:"通道类型"}},[t("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入通道类型"},model:{value:e.queryParam.channelType,callback:function(t){e.$set(e.queryParam,"channelType",t)},expression:"queryParam.channelType"}})],1)],1),t("a-col",{attrs:{md:12,lg:6,sm:24}},[t("a-form-item",[t("span",{staticClass:"table-page-search-submitButtons"},[t("a-button",{attrs:{icon:"redo"},on:{click:e.getqueryParam}},[e._v("重置")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"search"},on:{click:function(t){e.queryParam.pageNum=1,e.getlist()}}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"plus"},on:{click:function(t){e.addUserdialog=!0,e.currentDetails=""}}},[e._v(" 添加支付渠道")])],1)])],1)],1)],1)],1)]),t("a-card",{attrs:{bordered:!1}},[t("a-table",{attrs:{bordered:"",loading:e.loading,pagination:e.pagination,columns:e.columns,"data-source":e.datalist,rowKey:"id"},scopedSlots:e._u([{key:"channelImg",fn:function(e){return t("span",{},[[t("img",{staticStyle:{width:"120px",height:"50px","object-fit":"cover"},attrs:{src:e,alt:""}})]],2)}},{key:"isShow",fn:function(a){return t("span",{},[[t("div",[t("a-tag",{attrs:{color:1==a?"red":"green"}},[e._v(" "+e._s(1==a?"隐藏":"显示")+" ")])],1)]],2)}},{key:"action",fn:function(a,r){return[t("a",{attrs:{slot:"action",href:"javascript:;"},on:{click:function(t){return e.geteditbaseCurrency(r)}},slot:"action"},[e._v("修改通道")]),t("a-divider",{attrs:{type:"vertical"}}),t("a",{attrs:{slot:"action",href:"javascript:;"},on:{click:function(t){return e.deletebaseCurrency(r.id)}},slot:"action"},[e._v("删除通道")])]}}])})],1),t("a-modal",{attrs:{title:e.currentDetails?"修改支付渠道":"添加支付渠道",width:800,visible:e.addUserdialog,confirmLoading:e.addUserDialogloading},on:{ok:e.OkaddUserdialog,cancel:e.CanceladdUserdialog}},[t("a-form",{ref:"addUserform",attrs:{form:e.addUserform}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"通道名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["channelType",{rules:[{required:!0,message:"请输入通道名称"}]}],expression:"['channelType', { rules: [{ required: true, message: '请输入通道名称', }] }]"}],attrs:{placeholder:"请输入通道名称"}})],1)],1),t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"通道类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{rules:[{required:!0,message:"请选择通道类型"}]}],expression:"['ctype', { rules: [{ required: true, message: '请选择通道类型', }] }]"}],attrs:{placeholder:"请选择通道类型"}},[t("a-select-option",{attrs:{value:0}},[e._v("支付宝")]),t("a-select-option",{attrs:{value:1}},[e._v("公户转账")]),t("a-select-option",{attrs:{value:2}},[e._v("其他")])],1)],1)],1)],1),t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"最小充值",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["channelMinLimit",{rules:[{required:!0,message:"请输入最小充值金额"}]}],expression:"['channelMinLimit', { rules: [{ required: true, message: '请输入最小充值金额', }] }]"}],attrs:{placeholder:"请输入最小充值"}})],1)],1),t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"最大充值",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["channelMaxLimit",{rules:[{required:!0,message:"请输入最大充值金额"}]}],expression:"['channelMaxLimit', { rules: [{ required: true, message: '请输入最大充值金额', }] }]"}],attrs:{placeholder:"请输入最大充值"}})],1)],1)],1),t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"是否显示",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isShow",{rules:[{required:!0,message:"请选择是否显示"}]}],expression:"['isShow', { rules: [{ required: true, message: '请选择是否显示', }] }]"}],attrs:{placeholder:"请选择是否显示"}},[t("a-select-option",{attrs:{value:0}},[e._v("显示")]),t("a-select-option",{attrs:{value:1}},[e._v("不显示")])],1)],1)],1),t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"是否可用",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isLock",{rules:[{required:!0,message:"请选择是否可用"}]}],expression:"['isLock', { rules: [{ required: true, message: '请选择是否可用', }] }]"}],attrs:{placeholder:"请选择是否可用"}},[t("a-select-option",{attrs:{value:0}},[e._v("显示")]),t("a-select-option",{attrs:{value:1}},[e._v("不显示")])],1)],1)],1)],1),t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"收款名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["channelName",{rules:[{required:!0,message:"请输入收款名称"}]}],expression:"['channelName', { rules: [{ required: true, message: '请输入收款名称', }] }]"}],attrs:{placeholder:"请输入收款名称，如：**公司"}})],1)],1),t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"收款账号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["channelAccount",{rules:[{required:!0,message:"请输入收款账号"}]}],expression:"['channelAccount', { rules: [{ required: true, message: '请输入收款账号', }] }]"}],attrs:{placeholder:"请输入收款账号"}})],1)],1)],1),t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"备注信息",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["channelDesc",{rules:[{required:!0,message:"请输入备注信息"}]}],expression:"['channelDesc', { rules: [{ required: true, message: '请输入备注信息', }] }]"}],attrs:{placeholder:"对公转账备注请填写收款银行和支行"}})],1)],1),t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"支付接口",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[0==e.addUserform.getFieldValue("ctype")||1==e.addUserform.getFieldValue("ctype")?t("a-input",{attrs:{placeholder:"/user/recharge/inMoney.do",disabled:""}}):t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["formUrl",{}],expression:"['formUrl', {}]"}],attrs:{placeholder:"支付提交的接口地址"}})],1)],1)],1),2==e.addUserform.getFieldValue("ctype")?t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"代码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{rules:[{required:!0,message:"请输入代码"}]}],expression:"['code', { rules: [{ required: true, message: '请输入代码', }] }]"}],attrs:{placeholder:"请输入代码"}})],1)],1)],1):e._e(),t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:12,lg:12,sm:12}},[t("a-form-item",{attrs:{label:"收款二维码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["channelImg",{valuePropName:"file",rules:[{required:!0,message:"请上传收款二维码"}]}],expression:"['channelImg', { valuePropName: 'file', rules: [{ required: true, message: '请上传收款二维码', }] }]"}],staticClass:"avatar-uploader",attrs:{name:"avatar","list-type":"picture-card",accept:".jpg,.jpeg,.png",showUploadList:!1,customRequest:e.customRequest}},[e.channelImg?t("img",{attrs:{src:e.channelImg,alt:"avatar"}}):t("div",[t("a-icon",{attrs:{type:e.imgloading?"loading":"plus"}})],1)])],1)],1)],1)],1)],1)],1)},n=[],l=(a(41539),a(54747),a(59685)),o=a(25030),s=a.n(o),i={name:"basecurrency",data:function(){var e=this;return{columns:[{title:"通道类型",dataIndex:"channelType",align:"center"},{title:"图片",dataIndex:"channelImg",align:"center",scopedSlots:{customRender:"channelImg"}},{title:"通道名字",dataIndex:"channelName",align:"center"},{title:"账号",dataIndex:"channelAccount",align:"center"},{title:"描述",dataIndex:"channelDesc",align:"center"},{title:"最小充值金额",dataIndex:"channelMinLimit",align:"center"},{title:"最大充值金额",dataIndex:"channelMaxLimit",align:"center"},{title:"是否显示",dataIndex:"isShow",align:"center",scopedSlots:{customRender:"isShow"}},{title:"操作",key:"action",align:"center",fixed:"right",width:200,scopedSlots:{customRender:"action"}}],pagination:{total:0,pageSize:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],onShowSizeChange:function(t,a){return e.onSizeChange(t,a)},onChange:function(t,a){return e.onPageChange(t,a)},showTotal:function(e){return"共有 ".concat(e," 条数据")}},loading:!1,queryParam:{pageNum:1,pageSize:10,channelType:""},datalist:[],addUserdialog:!1,addUserDialogloading:!1,addUserform:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},fields:["channelType","channelName","channelDesc","channelAccount","channelMinLimit","channelMaxLimit","isShow","ctype","isLock","channelImg","code","formUrl"],currentDetails:"",channelImg:"",imgloading:!1}},created:function(){this.getlist()},methods:{deletebaseCurrency:function(e){var t=this;this.$confirm({title:"提示",content:"确认删除该支付渠道？此操作不可恢复",onOk:function(){var a={cId:e};(0,l.Nc)(a).then((function(e){0==e.status?(t.$message.success({content:e.msg,duration:2}),t.getlist()):t.$message.error({content:e.msg})}))},onCancel:function(){console.log("Cancel")}})},customRequest:function(e){var t=this;this.imgloading=!0;var a=new FormData;a.append("upload_file",e.file),(0,l.k4)(a).then((function(e){0==e.status?(t.channelImg=e.data.url,t.addUserform.setFieldsValue({channelImg:e.data.url})):t.$message.error({content:"上传失败请检查图片类型!"}),t.imgloading=!1}))},geteditbaseCurrency:function(e){var t=this;this.currentDetails=e,this.channelImg=e.channelImg,this.addUserdialog=!0,this.fields.forEach((function(e){return t.addUserform.getFieldDecorator(e)})),this.addUserform.setFieldsValue(s()(e,this.fields))},CanceladdUserdialog:function(){this.addUserdialog=!1;var e=this.$refs.addUserform.form;e.resetFields(),this.channelImg=""},OkaddUserdialog:function(){var e=this,t=this.$refs.addUserform.form;t.validateFields((function(a,r){a||(e.addUserDialogloading=!0,""!=e.currentDetails?(r.id=e.currentDetails.id,console.log(r),(0,l.c2)(r).then((function(a){0==a.status?(e.addUserdialog=!1,e.$message.success({content:"修改成功",duration:2}),t.resetFields(),e.getlist()):e.$message.error({content:a.msg}),e.addUserDialogloading=!1}))):(r.id=0,(0,l.vr)(r).then((function(a){0==a.status?(e.addUserdialog=!1,e.$message.success({content:"添加成功",duration:2}),t.resetFields(),e.getlist()):e.$message.error({content:a.msg}),e.addUserDialogloading=!1}))),e.channelImg="")}))},getqueryParam:function(){this.queryParam={pageNum:1,pageSize:10,channelType:""}},getlist:function(){var e=this;this.loading=!0,(0,l.JO)(this.queryParam).then((function(t){e.datalist=t.data.list,e.pagination.total=t.data.total,e.loading=!1}))},onPageChange:function(e,t){this.queryParam.pageNum=e,this.getlist()},onSizeChange:function(e,t){this.queryParam.pageNum=e,this.queryParam.pageSize=t,this.getlist()}}},c=i,u=a(70713),d=(0,u.Z)(c,r,n,!1,null,"38c507f2",null),m=d.exports},25030:function(e,t,a){var r=1/0,n=9007199254740991,l="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",i="[object Symbol]",c="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=c||u||Function("return this")();function m(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function p(e,t){var a=-1,r=e?e.length:0,n=Array(r);while(++a<r)n[a]=t(e[a],a,e);return n}function g(e,t){var a=-1,r=t.length,n=e.length;while(++a<r)e[n+a]=t[a];return e}var f=Object.prototype,h=f.hasOwnProperty,v=f.toString,y=d.Symbol,b=f.propertyIsEnumerable,w=y?y.isConcatSpreadable:void 0,C=Math.max;function q(e,t,a,r,n){var l=-1,o=e.length;a||(a=I),n||(n=[]);while(++l<o){var s=e[l];t>0&&a(s)?t>1?q(s,t-1,a,r,n):g(n,s):r||(n[n.length]=s)}return n}function x(e,t){return e=Object(e),P(e,t,(function(t,a){return a in e}))}function P(e,t,a){var r=-1,n=t.length,l={};while(++r<n){var o=t[r],s=e[o];a(s,o)&&(l[o]=s)}return l}function U(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,n=C(a.length-t,0),l=Array(n);while(++r<n)l[r]=a[t+r];r=-1;var o=Array(t+1);while(++r<t)o[r]=a[r];return o[t]=l,m(e,this,o)}}function I(e){return k(e)||N(e)||!!(w&&e&&e[w])}function S(e){if("string"==typeof e||L(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function N(e){return j(e)&&h.call(e,"callee")&&(!b.call(e,"callee")||v.call(e)==l)}var k=Array.isArray;function _(e){return null!=e&&Z(e.length)&&!D(e)}function j(e){return A(e)&&_(e)}function D(e){var t=F(e)?v.call(e):"";return t==o||t==s}function Z(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){return!!e&&"object"==typeof e}function L(e){return"symbol"==typeof e||A(e)&&v.call(e)==i}var O=U((function(e,t){return null==e?{}:x(e,p(q(t,1),S))}));e.exports=O},59685:function(e,t,a){"use strict";a.d(t,{Fl:function(){return c},IV:function(){return w},JO:function(){return h},Nc:function(){return v},YU:function(){return m},Zn:function(){return u},c2:function(){return b},gg:function(){return g},iH:function(){return f},k4:function(){return i},kW:function(){return s},ls:function(){return p},mQ:function(){return C},t7:function(){return d},vr:function(){return y}});var r=a(27370),n=a(80129),l=a.n(n),o={artlist:"/admin/art/list.do",adminupload:"/admin/upload.do",artadd:"/admin/art/add.do",artupdate:"/admin/art/update.do",artdelArt:"/admin/art/delArt.do",bannerslist:"/admin/banners/list.do",bannersupdate:"/admin/banners/update.do",bannersadd:"/admin/banners/add.do",bannersdelete:"/admin/banners/delete.do",paylist:"/admin/pay/list.do",paydel:"/admin/pay/del.do",payadd:"/admin/pay/add.do",payupdate:"/admin/pay/update.do",sitegetInfo:"/api/site/getInfo.do",infoupdate:"/admin/info/update.do"};function s(e){return(0,r.ZP)({url:o.artlist,method:"post",data:l().stringify(e)})}function i(e){return(0,r.ZP)({url:o.adminupload,method:"post",data:e})}function c(e){return(0,r.ZP)({url:o.artadd,method:"post",data:l().stringify(e)})}function u(e){return(0,r.ZP)({url:o.artupdate,method:"post",data:l().stringify(e)})}function d(e){return(0,r.ZP)({url:o.artdelArt,method:"post",data:l().stringify(e)})}function m(e){return(0,r.ZP)({url:o.bannerslist,method:"post",data:l().stringify(e)})}function p(e){return(0,r.ZP)({url:o.bannersupdate,method:"post",data:l().stringify(e)})}function g(e){return(0,r.ZP)({url:o.bannersadd,method:"post",data:l().stringify(e)})}function f(e){return(0,r.ZP)({url:o.bannersdelete,method:"post",data:l().stringify(e)})}function h(e){return(0,r.ZP)({url:o.paylist,method:"post",data:l().stringify(e)})}function v(e){return(0,r.ZP)({url:o.paydel,method:"post",data:l().stringify(e)})}function y(e){return(0,r.ZP)({url:o.payadd,method:"post",data:l().stringify(e)})}function b(e){return(0,r.ZP)({url:o.payupdate,method:"post",data:l().stringify(e)})}function w(e){return(0,r.ZP)({url:o.sitegetInfo,method:"post",data:l().stringify(e)})}function C(e){return(0,r.ZP)({url:o.infoupdate,method:"post",data:l().stringify(e)})}}}]);