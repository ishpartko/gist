webpackJsonp([1],{"6fjC":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},r,!1,function(t){a("Zals")},null,null).exports,i=a("/ocq"),l=a("BO1k"),c=a.n(l),p={name:"appGist",data:function(){return{inputData:"",currentFilterOption:0,filterOptions:[{value:"Все символы",reg:/./,state:!0},{value:"Буквы(англ.+рус.)",reg:/[a-zA-Zа-яА-ЯёЁ]/,state:!1},{value:"Цифры",reg:/[\d]/,state:!1},{value:"Пробельные символы",reg:/[\s]/,state:!1}]}},methods:{checkSame:function(t,e){for(var a in t)if(a===e)return!0;return!1},mergeReg:function(t,e){return new RegExp(t.source+"|"+e.source)},checkReg:function(t){return-1!==t.search(this.currentReg)}},computed:{currentReg:function(){var t=null,e=!0,a=!1,n=void 0;try{for(var r,s=c()(this.filterOptions);!(e=(r=s.next()).done);e=!0){var i=r.value;i.state&&(t=t?this.mergeReg(t,i.reg):i.reg)}}catch(t){a=!0,n=t}finally{try{!e&&s.return&&s.return()}finally{if(a)throw n}}return t||this.filterOptions[0].reg},generateGistData:function(){for(var t={},e=0;e<this.inputData.length;e++)if(this.checkReg(this.inputData[e])){var a=this.inputData[e];0===a.search(this.filterOptions[3].reg)&&(a="space"),this.checkSame(t,a)?t[a]++:t[a]=1}return t},calcFullSize:function(){var t=0;for(var e in this.generateGistData)t+=Number(this.generateGistData[e]);return t}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app-gist"}},[a("h1",{staticClass:"app-gist_title no-select"},[t._v("Привет.")]),t._v(" "),a("p",{staticClass:"app-gist_text no-select"},[t._v("Это моя вторая попытка сделать гистрограмму через много времени после первой\n    попытки.\n    Думаю я уже достаточно набрал опыта чтоб сделать это крутым ;-)\n    Это работает так: берем массив данных, считаем частоту повторения всех символов и строим график.")]),t._v(" "),a("h2",{staticClass:"app-gist_title no-select"},[t._v("Итак, попробуй:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],staticClass:"app-gist_input",attrs:{cols:"500"},domProps:{value:t.inputData},on:{input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),t._v(" "),a("div",{staticClass:"settings no-select"},t._l(t.filterOptions,function(e,n){return a("label",{key:n},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterOptions[n].state,expression:"filterOptions[index].state"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.filterOptions[n].state)?t._i(t.filterOptions[n].state,null)>-1:t.filterOptions[n].state},on:{change:function(e){var a=t.filterOptions[n].state,r=e.target,s=!!r.checked;if(Array.isArray(a)){var i=t._i(a,null);r.checked?i<0&&t.$set(t.filterOptions[n],"state",a.concat([null])):i>-1&&t.$set(t.filterOptions[n],"state",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.filterOptions[n],"state",s)}}}),t._v(" "+t._s(e.value)+"\n    ")])})),t._v(" "),a("div",{staticClass:"app-graph no-select"},t._l(t.generateGistData,function(e,n){return a("div",{key:n,staticClass:"app-graph-col"},[a("span",{staticClass:"app-graph-col_title"},[t._v(t._s(n))]),t._v(" "),a("div",{staticClass:"app-graph-col_wrapper"},[a("span",{staticClass:"app-graph-col_value",style:"width:"+Math.round(e/t.calcFullSize*100)+"%"},[t._v("\n          "+t._s(Math.round(e/t.calcFullSize*100))+"%\n        ")])])])}))])},staticRenderFns:[]};var u=a("VU/8")(p,o,!1,function(t){a("6fjC")},"data-v-258704da",null).exports;n.a.use(i.a);var v=new i.a({routes:[{path:"/",name:"appGist",component:u}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:v,components:{App:s},template:"<App/>"})},Zals:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4ad6779f2489c6d1c4a0.js.map