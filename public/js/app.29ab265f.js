(function(){"use strict";var e={6739:function(e,o,t){var i=t(9242),n=t(5809),l=t.n(n),s=t(2483),a=t(3396);const r=e=>((0,a.dD)("data-v-0497a5e4"),e=e(),(0,a.Cn)(),e),c={class:"surface-0 overflow-hidden main"},d={class:"py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static"},u=["src"],m={class:"cursor-pointer block lg:hidden text-700 p-ripple"},p=r((()=>(0,a._)("i",{class:"pi pi-bars text-4xl"},null,-1))),g=[p],v=r((()=>(0,a._)("div",{class:"surface-0 align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-8 z-2",style:{top:"92%"}},null,-1))),f=(0,a.uE)('<div class="grid py-4 px-4 lg:px-8 relative" id="hero" data-v-0497a5e4><div class="mx-4 md:mx-8 mt-0 md:mt-4" data-v-0497a5e4><h1 class="text-6xl font-bold text-gray-900 line-height-2" data-v-0497a5e4><span class="font-light block" data-v-0497a5e4>Natural sinks</span>financially and ecologically transparent</h1><p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700" data-v-0497a5e4> Bringing the future carbon standard, to the forests of today. Conforming with the United Nations Paris Agreement and the IPCC Guidelines for National Greenhouse Gas Emissions. </p></div></div><div class="py-4 px-4 mx-0 mt-8 lg:mx-8" id="contact" data-v-0497a5e4><div class="grid justify-content-between" data-v-0497a5e4><div class="col-12" data-v-0497a5e4></div></div><div class="layout-footer" data-v-0497a5e4> Copyright © 2022 <span class="font-medium ml-2" data-v-0497a5e4>44.moles GmbH</span></div></div>',2);function k(e,o,t,i,n,l){const s=(0,a.up)("router-link"),r=(0,a.Q2)("ripple"),p=(0,a.Q2)("styleclass");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",d,[(0,a.Wm)(s,{to:"/",class:"flex align-items-center"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:"images/logo.png",alt:"44.moles Logo",height:"90",class:"mr-0 lg:mr-2"},null,8,u)])),_:1}),(0,a.wy)(((0,a.wg)(),(0,a.iD)("a",m,g)),[[r],[p,{selector:"@next",enterClass:"hidden",leaveToClass:"hidden",hideOnOutsideClick:!0}]]),v]),f])}var h=t(4870),b={setup(){(0,a.bv)((()=>{}));const e=(0,h.qj)([{label:"Transparency"},{label:"Team"},{label:"Careers"}]),o=(0,h.qj)([{label:"Scanning"},{label:"IPCC projections"},{label:"Greenbook"}]),t=(0,h.qj)([{label:"Standards"},{label:"Morningstar"}]),i=(0,h.iH)(null),n=e=>{i.value.toggle(e)};return{overlayAboutItems:e,overlayCarbonItems:o,overlayProjectsItems:t,toggleMenu:n,menu:i}}},C=t(89);const w=(0,C.Z)(b,[["render",k],["__scopeId","data-v-0497a5e4"]]);var y=w;const x=[{path:"/",name:"homepage",component:y}],_=(0,s.p7)({history:(0,s.PO)("/"),routes:x});var P=_,j=t(65),O=(0,j.MT)({state:{allowCookies:JSON.parse(localStorage.getItem("allowCookies")),isDarkTheme:!1},getters:{isDarkTheme(e){return e.isDarkTheme},getAllowCookies(e){return e.allowCookies}},mutations:{setAllowCookies(e,o){e.allowCookies=o}},actions:{setAllowCookies({commit:e},o){e("setAllowCookies",o),!0===o&&localStorage.setItem("allowCookies",JSON.stringify(o))}},modules:{}});const D={key:0},T={key:1};function A(e,o,t,i,n,l){const s=(0,a.up)("NoCookies"),r=(0,a.up)("router-view"),c=(0,a.up)("PrimeCookies");return(0,a.wg)(),(0,a.iD)(a.HY,null,[!1===i.allowCookies?((0,a.wg)(),(0,a.iD)("div",D,[(0,a.Wm)(s)])):((0,a.wg)(),(0,a.iD)("div",T,[(0,a.Wm)(r)])),(0,a.Wm)(c)],64)}const I=e=>((0,a.dD)("data-v-4558d913"),e=e(),(0,a.Cn)(),e),Z=I((()=>(0,a._)("p",{class:"m-0"},"Hi, we're still in the process of building this website. We collect cookies to match the content on this site with the information you need. Looking forward to providing tailored resources on the carbon market, and to introduce our new laser-scanning tool soon. Thank you for supporting us. ",-1)));function N(e,o,t,i,n,l){const s=(0,a.up)("PrimeButton"),r=(0,a.up)("PrimeDialog");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{header:"Cookie Policy",visible:i.displayModal,"onUpdate:visible":o[0]||(o[0]=e=>i.displayModal=e),closeOnEscape:!1,closable:!1,breakpoints:{"960px":"75vw","640px":"90vw"},style:{width:"50vw"},modal:!0},{footer:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"No cookies",icon:"pi pi-times",onClick:i.noCookies,class:"p-button-text"},null,8,["onClick"]),(0,a.Wm)(s,{label:"Allow cookies",icon:"pi pi-check",onClick:i.yesCookies,autofocus:""},null,8,["onClick"])])),default:(0,a.w5)((()=>[Z])),_:1},8,["visible"])])}var S={setup(){const e=(0,j.oR)();(0,a.bv)((()=>{null==t.value&&i()}));const o=(0,h.iH)(!1),t=(0,a.Fl)((()=>e.getters.getAllowCookies)),i=()=>{o.value=!0},n=()=>{o.value=!1},l=()=>{e.dispatch("setAllowCookies",!1),o.value=!1},s=()=>{e.dispatch("setAllowCookies",!0),o.value=!1};return{displayModal:o,closeModal:n,noCookies:l,yesCookies:s}}};const W=(0,C.Z)(S,[["render",N],["__scopeId","data-v-4558d913"]]);var M=W;const H={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},V={class:"grid justify-content-center p-2 lg:p-0",style:{"min-width":"80%"}},q=(0,a._)("div",{class:"col-12 mt-5 xl:mt-0 text-center"},[(0,a._)("img",{src:"images/logo.png",alt:"44.moles GmbH",class:"mb-5",style:{height:"60px"}})],-1),B={class:"col-12 xl:col-6",style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"}},G={class:"flex justify-content-center h-full w-full m-0 py-7 px-4",style:{"border-radius":"53px",background:"linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"}},R={class:"grid flex-column align-items-center"},F=(0,a._)("h1",{class:"text-900 font-bold text-3xl lg:text-5xl mb-2",style:{color:"#5593cc !important"}},"Cookies Rejected",-1),E=(0,a._)("span",{class:"text-gray-600 py-2"},"This site requires cookies to operate",-1),U={class:"formgrid grid col-12 flex align-items-center py-2 mt-6 border-300 border-bottom-1"},L={class:"field-radiobutton col-12 lg:col-6"},J=(0,a._)("label",{for:"noCookies"},"No cookies",-1),Q={class:"field-radiobutton col-12 lg:col-6"},z=(0,a._)("label",{for:"yesCookies"},"Allow cookies",-1);function Y(e,o,t,i,n,l){const s=(0,a.up)("PrimeRadioButton");return(0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("div",V,[q,(0,a._)("div",B,[(0,a._)("div",G,[(0,a._)("div",R,[F,E,(0,a._)("div",U,[(0,a._)("div",L,[(0,a.Wm)(s,{id:"noCookies",name:"option",modelValue:i.cookiePolicy,"onUpdate:modelValue":o[0]||(o[0]=e=>i.cookiePolicy=e),value:"disallowCookies",onChange:i.noCookies},null,8,["modelValue","onChange"]),J]),(0,a._)("div",Q,[(0,a.Wm)(s,{id:"yesCookies",name:"option",modelValue:i.cookiePolicy,"onUpdate:modelValue":o[1]||(o[1]=e=>i.cookiePolicy=e),value:"allowCookies",onChange:i.yesCookies},null,8,["modelValue","onChange"]),z])])])])])])])}var K={setup(){const e=(0,j.oR)();(0,a.bv)((()=>{}));const o=(0,h.iH)("disallowCookies"),t=(0,a.Fl)((()=>e.getters.isDarkTheme?"white":"dark")),i=e=>{document.querySelector(e).scrollIntoView({behavior:"smooth"})},n=()=>{e.dispatch("setAllowCookies",!1)},l=()=>{setTimeout((()=>e.dispatch("setAllowCookies",!0)),1e3)};return{logoColor:t,smoothScroll:i,cookiePolicy:o,yesCookies:l,noCookies:n}}};const X=(0,C.Z)(K,[["render",Y]]);var $=X,ee={components:{PrimeCookies:M,NoCookies:$},setup(){const e=(0,j.oR)(),o=(0,a.Fl)((()=>e.getters.getAllowCookies));return{allowCookies:o}}};const oe=(0,C.Z)(ee,[["render",A]]);var te=oe,ie=t(3852),ne=t(5030),le=t(8538),se=t(1826),ae=t(3647),re=t(5799),ce=t(2419),de=t(4914);const ue=(0,i.ri)(te);ue.use(O),ue.use(P),ue.use(ie.Z),ue.use(l(),{host:"https://analytics.44moles.com/",siteId:2,trackerFileName:"matomo",router:P,enableLinkTracking:!0,requireConsent:!1,trackInitialView:!0,disableCookies:!1,requireCookieConsent:!1,enableHeartBeatTimer:!1,heartBeatTimerInterval:15,debug:!1,userId:void 0,cookieDomain:void 0,domains:void 0,preInitActions:[],trackSiteSearch:!1,crossOrigin:void 0}),ue.directive("ripple",ne.Z),ue.directive("styleclass",le.Z),ue.component("PrimeButton",se.Z),ue.component("PrimeDivider",ae.Z),ue.component("PrimeMenu",re.Z),ue.component("PrimeDialog",ce.Z),ue.component("PrimeRadioButton",de.Z),ue.mount("#app")}},o={};function t(i){var n=o[i];if(void 0!==n)return n.exports;var l=o[i]={exports:{}};return e[i](l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(o,i,n,l){if(!i){var s=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],l=e[d][2];for(var a=!0,r=0;r<i.length;r++)(!1&l||s>=l)&&Object.keys(t.O).every((function(e){return t.O[e](i[r])}))?i.splice(r--,1):(a=!1,l<s&&(s=l));if(a){e.splice(d--,1);var c=n();void 0!==c&&(o=c)}}return o}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[i,n,l]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,i){var n,l,s=i[0],a=i[1],r=i[2],c=0;if(s.some((function(o){return 0!==e[o]}))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(r)var d=r(t)}for(o&&o(i);c<s.length;c++)l=s[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(d)},i=self["webpackChunk_44moles"]=self["webpackChunk_44moles"]||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(6739)}));i=t.O(i)})();
//# sourceMappingURL=app.29ab265f.js.map