webpackJsonp([2],{"4sl9":function(s,e){},ABKn:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("Xxa5"),n=t.n(a),i=t("exGp"),r=t.n(i),l=t("c2Ch"),o={data:function(){return{bzjs:[{value:1e3,label:"1000"},{value:1500,label:"1500"},{value:2e3,label:"2000"},{value:3e3,label:"3000"},{value:5e3,label:"5000"},{value:8e3,label:"8000"}],baozhen:0,beishu:100,isloading:!1,form:{margin:""},selLever:0,selManageRate:0,selCycleType:"",selDaysUsePeriod:"",selDaysUseVal:"",selMinDay:"",selMaxDay:"",selSingleHoldingRatio:"",fundsSetting:{},fundsTypeList:[{}]}},methods:{setBaozhen:function(s){this.form.margin=s},getUserInfo:function(){var s=this;return r()(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l._4();case 2:0===(t=e.sent).status&&(s.$store.state.userInfo=t.data);case 4:case"end":return e.stop()}},e,s)}))()},getFundsSetting:function(){var s=this;return r()(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.x();case 2:0===(t=e.sent).status&&(s.fundsSetting=t.data,s.form.margin=s.fundsSetting.marginMin,s.selDaysUsePeriod=s.fundsSetting.daysUsePeriod.split("|")[0]+"天",s.selDaysUseVal=s.fundsSetting.daysUsePeriod.split("|")[0],s.selMinDay=s.fundsSetting.daysUsePeriod.split("|")[0],s.selMaxDay=s.fundsSetting.daysUsePeriod.split("|")[s.fundsSetting.daysUsePeriod.split("|").length-1]);case 4:case"end":return e.stop()}},e,s)}))()},getFundsTypeList:function(){var s=this;return r()(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.y({cycleType:1});case 2:0===(t=e.sent).status&&(s.fundsTypeList=t.data.list,s.selLever=s.fundsTypeList[0].lever,s.selManageRate=s.fundsTypeList[0].manageRate,s.selCycleType=s.fundsTypeList[0].lever+"倍",s.selSingleHoldingRatio=s.fundsTypeList[0].singleHoldingRatio);case 4:case"end":return e.stop()}},e,s)}))()},getIntNumber:function(){this.form.margin>=this.fundsSetting.marginMax&&(this.form.margin=this.fundsSetting.marginMax),this.form.margin=Math.floor(this.form.margin)},Onsubmit:function(){var s=this;return r()(n.a.mark(function e(){var t,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={userId:s.$store.state.userInfo.id,userName:s.$store.state.userInfo.realName,userPhone:s.$store.state.userInfo.phone,fundsType:1,margin:s.form.margin,fundsAmount:s.fundsAmount,lever:s.selLever,totalTradingAmount:s.totalTradingAmount,tradersCycle:s.selDaysUseVal,manageFee:s.manageFee},e.next=3,l.c(t);case 3:0===(a=e.sent).status?s.$message.success(a.msg):s.$message.error(a.msg);case 5:case"end":return e.stop()}},e,s)}))()},currentSel:function(s){this.selLever=s.lever,this.selManageRate=s.manageRate,this.selCycleType=s.lever+"倍",this.selSingleHoldingRatio=s.singleHoldingRatio},currentSelDays:function(s){var e=parseInt(s.target.value);console.log(e),isNaN(e)?(this.selDaysUsePeriod=this.selMinDay+"天",this.selDaysUseVal=this.selMinDay):e<this.selMinDay?(this.selDaysUsePeriod=this.selMinDay+"天",this.selDaysUseVal=this.selMinDay):e>this.selMaxDay?(this.selDaysUsePeriod=this.selMaxDay+"天",this.selDaysUseVal=this.selMaxDay):(this.selDaysUsePeriod=e+"天",this.selDaysUseVal=e)}},created:function(){this.getUserInfo(),this.getFundsSetting(),this.getFundsTypeList()},computed:{zidinyi:function(){return!this.bzjs.map(function(s){return s.value}).includes(this.form.margin)},fundsAmount:function(){return this.form.margin?Number(this.form.margin*this.selLever).toFixed(0):0},totalTradingAmount:function(){return this.form.margin?Number(Number(this.form.margin)+this.form.margin*this.selLever).toFixed(0):0},manageFee:function(){return this.selDaysUseVal?(this.fundsAmount*this.selManageRate*this.selDaysUseVal/100).toFixed(1):0}}},u={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"days-box"},[t("div",{staticClass:"days-box_tile"},[t("span",[s._v("保证金")]),s._v(" "),t("span",{staticStyle:{"font-size":".24rem",color:"#fff8"},style:{color:"red"==s.$state.theme?"#222":""}},[s._v("（保证金介于 "+s._s(s.fundsSetting.marginMin)+" - "+s._s(s.fundsSetting.marginMax)+" 元之间）")])]),s._v(" "),t("div",{staticClass:"days-box_items"},[s._l(s.bzjs,function(e,a){return t("div",{key:a,class:["days-box_item",e.value==s.form.margin?"active":""],on:{click:function(t){return s.setBaozhen(e.value)}}},[s._v(s._s(e.label))])}),s._v(" "),t("div",{class:["days-box_item",s.zidinyi?"active":""],on:{click:function(e){return s.setBaozhen("")}}},[s._v("\n            自定义\n            ")]),s._v(" "),t("div",{staticClass:"days-box_item",on:{click:function(e){return s.setBaozhen("")}}},[t("input",{directives:[{name:"show",rawName:"v-show",value:s.zidinyi,expression:"zidinyi"},{name:"model",rawName:"v-model",value:s.form.margin,expression:"form.margin"}],attrs:{type:"text"},domProps:{value:s.form.margin},on:{input:function(e){e.target.composing||s.$set(s.form,"margin",e.target.value)}}})])],2)]),s._v(" "),t("div",{staticClass:"days-box"},[t("div",{staticClass:"days-box_tile"},[t("span",[s._v("配资资金")]),s._v(" "),t("span",{staticStyle:{"font-size":".24rem",color:"#fff8"},style:{color:"red"==s.$state.theme?"#222":""}},[s._v("（配资资金为"+s._s(s.fundsAmount)+"元）")])]),s._v(" "),t("div",{staticClass:"days-box_items beishu"},s._l(s.fundsTypeList,function(e,a){return t("div",{key:e.id,class:["days-box_item",s.selLever==e.lever?"active":""],style:{marginRight:(a+1)%4==0&&"0"},on:{click:function(t){return s.currentSel(e)}}},[s._v("\n                "+s._s(e.lever)+"倍\n            ")])}),0)]),s._v(" "),t("div",{staticClass:"days-box"},[t("div",{staticClass:"days-box_tile"},[t("span",[s._v("操盘期限")]),s._v(" "),t("span",{staticStyle:{"font-size":".24rem",color:"#fff8"},style:{color:"red"==s.$state.theme?"#222":""}},[s._v("（操盘期限介于 "+s._s(s.selMinDay)+" - "+s._s(s.selMaxDay)+"  天之间）")])]),s._v(" "),t("div",{staticClass:"days-box_items beishu"},[t("div",{class:["days-box_item"]},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.selDaysUseVal,expression:"selDaysUseVal"}],attrs:{type:"text"},domProps:{value:s.selDaysUseVal},on:{blur:s.currentSelDays,input:function(e){e.target.composing||(s.selDaysUseVal=e.target.value)}}})]),s._v(" "),t("span",{staticClass:"unit"},[s._v("天")])])]),s._v(" "),t("div",{staticClass:"notify-1"},[t("span",{staticStyle:{color:"#fff"},style:{color:"red"==s.$state.theme?"#222":""}},[s._v("总操盘资金：")]),s._v("\n        "+s._s(s.totalTradingAmount)+" 元 = "+s._s(Number(s.form.margin).toFixed(0))+"元（保证金）+ "+s._s(s.fundsAmount)+" 元（配资资金）\n    ")]),s._v(" "),t("div",{staticClass:"notify-1"},[t("span",{staticStyle:{color:"#fff"},style:{color:"red"==s.$state.theme?"#222":""}},[s._v("需准备资金：")]),s._v("\n         "+s._s(Number(Number(s.form.margin)+s.fundsAmount*s.selManageRate*s.selDaysUseVal/100).toFixed(1))+"  元 = "+s._s(Number(s.form.margin).toFixed(0))+" 元（保证金）+ "+s._s(Number(s.fundsAmount*s.selManageRate*s.selDaysUseVal/100).toFixed(1))+" 元 (一次性收取管理费)\n    ")]),s._v(" "),t("div",{staticClass:"days-box"},[t("div",{staticClass:"guize"},[t("span",{staticClass:"tile"},[s._v("预警线")]),s._v(" "),t("span",{staticClass:"mony"},[s._v(s._s(Number(Number(s.form.margin)+s.form.margin*s.fundsSetting.daysWarning).toFixed(0))+" 元")]),s._v(" "),t("span",{staticClass:"desc"},[s._v("（预警线 = 配资资金 + 保证金 X "+s._s(s.fundsSetting.daysWarning)+"）")])]),s._v(" "),t("div",{staticClass:"guize"},[t("span",{staticClass:"tile"},[s._v("平仓线")]),s._v(" "),t("span",{staticClass:"mony"},[s._v(s._s(Number(Number(s.form.margin)+s.form.margin*s.fundsSetting.daysUnwind).toFixed(0))+" 元")]),s._v(" "),t("span",{staticClass:"desc"},[s._v("（平仓线 = 配资资金 + 保证金 X "+s._s(s.fundsSetting.daysUnwind)+"）")])]),s._v(" "),t("div",{staticClass:"guize"},[t("span",{staticClass:"tile"},[s._v("管理费")]),s._v(" "),t("span",{staticClass:"mony"},[s._v(s._s(s.selManageRate)+"% ")]),s._v(" "),t("span",{staticClass:"desc"},[s._v("（"+s._s(s.fundsAmount)+"X天利率"+s._s(s.selManageRate)+"%X"+s._s(s.selDaysUseVal)+"="+s._s(s.manageFee)+"元）")])]),s._v(" "),s._m(0),s._v(" "),t("div",{staticClass:"guize"},[t("span",{staticClass:"tile"},[s._v("操盘须知")]),s._v(" "),t("span",{staticClass:"desc"},[s._v("单只股票最大持仓比例为 "+s._s(100*s.selSingleHoldingRatio)+"%。")])])]),s._v(" "),t("div",{staticClass:"days-submit",on:{click:function(e){return s.Onsubmit()}}},[s._v("\n        立即申请\n    ")]),s._v(" "),s._m(1)])},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"guize"},[e("span",{staticClass:"tile"},[this._v("自定续费")]),this._v(" "),e("span",{staticClass:"desc"},[this._v("默认开启到期自动药期，配资管理费先付后用。")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"days-notify2"},[t("div",{staticClass:"warn"},[s._v("注意事项：")]),s._v(" "),t("div",{staticClass:"warn-detail"},[t("div",[s._v("1.保证金：您用于投资股票的资金，起点相当低。 ")]),s._v(" "),t("div",[s._v("\n             2.操盘期限；按天计算，不包含各类法定节假日。 \n            ")]),s._v(" "),t("div",[s._v("3.按天支付管理费（不包含交交易印花税，过户费和佣金），无任何其他费用")]),s._v(" "),t("div",[s._v("4.如操盘10天，一次性收取10天管理费")]),s._v(" "),t("div",[s._v("5.交易日当天14：50之前的申请于当日生效（当天开始收取账户管理费），交易日当天14：50后的申请于下个交易日生效。")]),s._v(" "),t("div",[s._v("6.股市有风险，投资需谨慎。")])])])}]};var d=t("VU/8")(o,u,!1,function(s){t("4sl9")},"data-v-6ba92c66",null);e.default=d.exports}});