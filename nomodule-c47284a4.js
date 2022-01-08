System.register(["./nomodule-bbe196b5.js","./nomodule-94515228.js","./nomodule-e5f707f1.js"],(function(n,t){var e,o,l,c,i,s,a,r,u,p,h,b,d,m,f,v,y,x,g,_,w,k,R,S,C,E,z,A,D;function L(n){return a({descriptor:function(t){return{get:function(){var t,e;return null!==(e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(n))&&void 0!==e?e:[]},enumerable:!0,configurable:!0}}})}return{setters:[function(n){e=n.createClass,o=n.classCallCheck,l=n.createSuper,c=n.inherits,i=n.taggedTemplateLiteral,s=n.defineProperty},function(n){a=n.b,r=n.o,u=n.r,p=n.a,h=n._,b=n.e,d=n.i,m=n.n,f=n.s,v=n.$,y=n.d,x=n.f,g=n.c,_=n.t},function(n){w=n.P}],execute:function(){E=new RegExp(/^[\\*\\+\-\\/]{1}$/),z=function(){function n(){var t=this;o(this,n),this.results_list=[],this.onchange=function(){},this.get_first_result_item=function(){return t.results_list[0]},this.get_last_result_item=function(){return t.results_list[t.results_list.length-1]}}return e(n,[{key:"add_base",value:function(n){var t=this.get_last_result_item();if("="!==n&&"ac"!==n&&"c"!==n&&(E.test(String(t))&&E.test(String(n))&&this.results_list.pop(),void 0!==t||!E.test(String(n))))return"number"==typeof n&&"number"==typeof t?(this.results_list.pop(),this.results_list.push(Number(String(t)+String(n))),this.results_list):(this.results_list.push(n),this.results_list)}},{key:"add",value:function(n){return this.add_base(n),this.onchange(),this.results_list}},{key:"addBulk",value:function(){for(var n=this,t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return e.forEach((function(t){n.add_base(t)})),this.onchange(),this.results_list}},{key:"submit",value:function(){var n=this.get_last_result_item();if(console.log(this.results_list),!E.test(String(n)))return this.results_list=[Function("return ".concat(this.results_list.join(" ")))()],this.onchange(),this.results_list}},{key:"get_results_list",value:function(){return this.results_list.map((function(n){switch(!0){case"*"===n:return"×";case"/"===n:return"÷";default:return n}}))}},{key:"clear",value:function(){return this.results_list.pop(),this.onchange(),this.results_list}},{key:"clearAll",value:function(){return this.results_list=[],this.onchange(),this.results_list}}]),n}(),A=function(n){c(a,n);var t=l(a);function a(){var n;return o(this,a),(n=t.apply(this,arguments)).level=1,n.type="normal",n.label="",n}return e(a,[{key:"render",value:function(){return v(k||(k=i(['\n      <div\n        class="button-box"\n        style=','\n      >\n        <div\n          class="button','"\n          @focus="','"\n          @blur="','"\n          @mousedown="','"\n          @mouseenter="','"\n          @mouseleave="','"\n          @touchstart="','"\n          @touchend="','"\n          @touchcancel="','"\n        >\n          <mwc-ripple></mwc-ripple>\n          <span class="value">',"</span>\n        </div>\n      </div>\n    "])),y({width:String("calc(var(--button-size) * ".concat(String(this.level),");"))}),x(s({},this.type,!0)),this.handleRippleFocus,this.handleRippleBlur,this.handleRippleMouseDown,this.handleRippleMouseEnter,this.handleRippleMouseLeave,this.handleRippleTouchStart,this.handleRippleDeactivate,this.handleRippleDeactivate,this.label)}},{key:"handleRippleMouseDown",value:function(n){var t=this;window.addEventListener("mouseup",(function n(){window.removeEventListener("mouseup",n),t.handleRippleDeactivate()})),this.ripple.startPress(n)}},{key:"handleRippleTouchStart",value:function(n){this.ripple.startPress(n)}},{key:"handleRippleDeactivate",value:function(){this.ripple.endPress()}},{key:"handleRippleMouseEnter",value:function(){this.ripple.startHover()}},{key:"handleRippleMouseLeave",value:function(){this.ripple.endHover()}},{key:"handleRippleFocus",value:function(){this.ripple.startFocus()}},{key:"handleRippleBlur",value:function(){this.ripple.endFocus()}}]),a}(f),A.styles=[r(u),p(R||(R=i(["\n      :host {\n        --mdc-icon-size: 26px;\n      }\n\n      .button-box {\n        padding: 6px;\n        height: var(--button-size);\n        width: var(--button-size);\n      }\n\n      .button {\n        position: relative;\n\n        display: flex;\n\n        width: 100%;\n        height: 100%;\n\n        align-items: center;\n        justify-content: center;\n\n        border-radius: 18px;\n        border: 3px solid var(--mdc-theme);\n        background-color: var(--mdc-theme);\n        box-shadow: 6px 6px 32px #0003, -12px -12px 32px #fff8,\n          inset -12px -12px 12px #fff4, inset 12px 12px 24px -2px #1111;\n\n        user-select: none;\n\n        overflow: hidden;\n      }\n\n      .button.secondary {\n        border: 3px solid #bbb;\n        background-color: #bbb;\n        box-shadow: 6px 6px 32px #0003, -12px -12px 32px #fff8,\n          inset -12px -12px 12px #fff2, inset 12px 12px 24px -2px #1111;\n      }\n\n      .button.primary {\n        border: 3px solid var(--mdc-theme-primary);\n        background-color: var(--mdc-theme-primary);\n        box-shadow: 6px 6px 32px #0003, -12px -12px 32px #fff8,\n          inset -12px -12px 26px -12px #fff4, inset 12px 12px 24px -2px #1111;\n      }\n\n      .button.primary > span.value {\n        font-size: 28px;\n        font-weight: 900px;\n        color: #fff;\n      }\n\n      span.value {\n        font-size: 20px;\n        font-weight: 400px;\n      }\n    "])))],h([b({type:Number})],A.prototype,"level",void 0),h([b()],A.prototype,"type",void 0),h([b()],A.prototype,"value",void 0),h([b()],A.prototype,"label",void 0),h([d("mwc-ripple")],A.prototype,"ripple",void 0),A=h([m("calc-button-component")],A),n("PageCalculator",D=function(n){c(s,n);var t=l(s);function s(){var n;return o(this,s),(n=t.apply(this,arguments)).calculator=new z,n}return e(s,[{key:"render",value:function(){return v(S||(S=i(["\n      <section>\n        <h1>",'</h1>\n        <div class="sep"></div>\n        <div class="buttons">\n          <calc-button-component\n            label="AC"\n            type="secondary"\n          ></calc-button-component>\n          <calc-button-component\n            label="C"\n            type="secondary"\n          ></calc-button-component>\n          <calc-button-component\n            label="%"\n            type="secondary"\n          ></calc-button-component>\n          <calc-button-component\n            label="÷"\n            value="/"\n            type="primary"\n          ></calc-button-component>\n\n          <calc-button-component label="1"></calc-button-component>\n          <calc-button-component label="2"></calc-button-component>\n          <calc-button-component label="3"></calc-button-component>\n          <calc-button-component\n            label="×"\n            value="*"\n            type="primary"\n          ></calc-button-component>\n\n          <calc-button-component label="4"></calc-button-component>\n          <calc-button-component label="5"></calc-button-component>\n          <calc-button-component label="6"></calc-button-component>\n          <calc-button-component\n            label="-"\n            type="primary"\n          ></calc-button-component>\n\n          <calc-button-component label="7"></calc-button-component>\n          <calc-button-component label="8"></calc-button-component>\n          <calc-button-component label="9"></calc-button-component>\n          <calc-button-component\n            label="+"\n            type="primary"\n          ></calc-button-component>\n\n          <calc-button-component label="0" level="2"></calc-button-component>\n          <calc-button-component label="."></calc-button-component>\n          <calc-button-component\n            label="="\n            type="primary"\n          ></calc-button-component>\n        </div>\n      </section>\n    '])),this.result)}},{key:"firstUpdated",value:function(){var n=this;this.calculator.onchange=function(){console.log(n.calculator.results_list),n.result=n.calculator.get_results_list().join(" ")},this.buttons.forEach((function(t){t.addEventListener("click",(function(){var e,o=null===(e=t.getAttribute("value")||t.getAttribute("label"))||void 0===e?void 0:e.toLowerCase();"="===o?n.calculator.submit():"c"===o?n.calculator.clear():"ac"===o?n.calculator.clearAll():n.calculator.add(function(n){return/^\d+$/.test(n)}(String(o))?Number(o):o)}))}))}},{key:"meta",value:function(){return{title:g.appName,titleTemplate:null,description:g.appDescription}}}]),s}(w)),D.styles=[r(u),p(C||(C=i(["\n      :host {\n        height: 100%;\n      }\n      section {\n        display: flex;\n        flex-direction: column;\n\n        align-items: center;\n        justify-content: center;\n\n        padding: 1rem;\n\n        min-height: calc(100vh - 56px);\n      }\n\n      .buttons {\n        display: flex;\n        flex-wrap: wrap;\n        width: calc(var(--button-size) * 4);\n      }\n      .sep {\n        flex-grow: 1;\n      }\n    "])))],h([L("calc-button-component[label]")],D.prototype,"buttons",void 0),h([_()],D.prototype,"result",void 0),n("PageCalculator",D=h([m("page-calculator")],D))}}}));
