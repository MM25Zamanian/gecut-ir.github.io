import{b as t,o as e,r as o,a as l,_ as s,e as n,i as c,n as i,s as a,$ as r,d as p,f as u,c as h,t as b}from"./2ad61604.js";import{P as d}from"./f68dca70.js";const m=new RegExp(/^[\\*\\+\-\\/]{1}$/);class x{constructor(){this.results_list=[],this.onchange=()=>{},this.get_first_result_item=()=>this.results_list[0],this.get_last_result_item=()=>this.results_list[this.results_list.length-1]}add_base(t){const e=this.get_last_result_item();if("="!==t&&"ac"!==t&&"c"!==t&&(m.test(String(e))&&m.test(String(t))&&this.results_list.pop(),void 0!==e||!m.test(String(t))))return"number"==typeof t&&"number"==typeof e?(this.results_list.pop(),this.results_list.push(Number(String(e)+String(t))),this.results_list):(this.results_list.push(t),this.results_list)}add(t){return this.add_base(t),this.onchange(),this.results_list}addBulk(...t){return t.forEach((t=>{this.add_base(t)})),this.onchange(),this.results_list}submit(){const t=this.get_last_result_item();if(console.log(this.results_list),!m.test(String(t)))return this.results_list=[Function(`return ${this.results_list.join(" ")}`)()],this.onchange(),this.results_list}get_results_list(){return this.results_list.map((t=>{switch(!0){case"*"===t:return"×";case"/"===t:return"÷";default:return t}}))}clear(){return this.results_list.pop(),this.onchange(),this.results_list}clearAll(){return this.results_list=[],this.onchange(),this.results_list}}let v=class extends a{constructor(){super(...arguments),this.level=1,this.type="normal",this.label=""}render(){return r`
      <div
        class="button-box"
        style=${p({width:String(`calc(var(--button-size) * ${String(this.level)});`)})}
      >
        <div
          class="button${u({[this.type]:!0})}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >
          <mwc-ripple></mwc-ripple>
          <span class="value">${this.label}</span>
        </div>
      </div>
    `}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.ripple.startPress(t)}handleRippleTouchStart(t){this.ripple.startPress(t)}handleRippleDeactivate(){this.ripple.endPress()}handleRippleMouseEnter(){this.ripple.startHover()}handleRippleMouseLeave(){this.ripple.endHover()}handleRippleFocus(){this.ripple.startFocus()}handleRippleBlur(){this.ripple.endFocus()}};v.styles=[e(o),l`
      :host {
        --mdc-icon-size: 26px;
      }

      .button-box {
        padding: 6px;
        height: var(--button-size);
        width: var(--button-size);
      }

      .button {
        position: relative;

        display: flex;

        width: 100%;
        height: 100%;

        align-items: center;
        justify-content: center;

        border-radius: 18px;
        border: 3px solid var(--mdc-theme);
        background-color: var(--mdc-theme);
        box-shadow: 6px 6px 32px #0003, -12px -12px 32px #fff8,
          inset -12px -12px 12px #fff4, inset 12px 12px 24px -2px #1111;

        user-select: none;

        overflow: hidden;
      }

      .button.secondary {
        border: 3px solid #bbb;
        background-color: #bbb;
        box-shadow: 6px 6px 32px #0003, -12px -12px 32px #fff8,
          inset -12px -12px 12px #fff2, inset 12px 12px 24px -2px #1111;
      }

      .button.primary {
        border: 3px solid var(--mdc-theme-primary);
        background-color: var(--mdc-theme-primary);
        box-shadow: 6px 6px 32px #0003, -12px -12px 32px #fff8,
          inset -12px -12px 26px -12px #fff4, inset 12px 12px 24px -2px #1111;
      }

      .button.primary > span.value {
        font-size: 28px;
        font-weight: 900px;
        color: #fff;
      }

      span.value {
        font-size: 20px;
        font-weight: 400px;
      }
    `],s([n({type:Number})],v.prototype,"level",void 0),s([n()],v.prototype,"type",void 0),s([n()],v.prototype,"value",void 0),s([n()],v.prototype,"label",void 0),s([c("mwc-ripple")],v.prototype,"ripple",void 0),v=s([i("calc-button-component")],v);let f=class extends d{constructor(){super(...arguments),this.calculator=new x}render(){return r`
      <section>
        <h1>${this.result}</h1>
        <div class="sep"></div>
        <div class="buttons">
          <calc-button-component
            label="AC"
            type="secondary"
          ></calc-button-component>
          <calc-button-component
            label="C"
            type="secondary"
          ></calc-button-component>
          <calc-button-component
            label="%"
            type="secondary"
          ></calc-button-component>
          <calc-button-component
            label="÷"
            value="/"
            type="primary"
          ></calc-button-component>

          <calc-button-component label="1"></calc-button-component>
          <calc-button-component label="2"></calc-button-component>
          <calc-button-component label="3"></calc-button-component>
          <calc-button-component
            label="×"
            value="*"
            type="primary"
          ></calc-button-component>

          <calc-button-component label="4"></calc-button-component>
          <calc-button-component label="5"></calc-button-component>
          <calc-button-component label="6"></calc-button-component>
          <calc-button-component
            label="-"
            type="primary"
          ></calc-button-component>

          <calc-button-component label="7"></calc-button-component>
          <calc-button-component label="8"></calc-button-component>
          <calc-button-component label="9"></calc-button-component>
          <calc-button-component
            label="+"
            type="primary"
          ></calc-button-component>

          <calc-button-component label="0" level="2"></calc-button-component>
          <calc-button-component label="."></calc-button-component>
          <calc-button-component
            label="="
            type="primary"
          ></calc-button-component>
        </div>
      </section>
    `}firstUpdated(){this.calculator.onchange=()=>{console.log(this.calculator.results_list),this.result=this.calculator.get_results_list().join(" ")},this.buttons.forEach((t=>{t.addEventListener("click",(()=>{const e=(t.getAttribute("value")||t.getAttribute("label"))?.toLowerCase();"="===e?this.calculator.submit():"c"===e?this.calculator.clear():"ac"===e?this.calculator.clearAll():this.calculator.add(function(t){return/^\d+$/.test(t)}(String(e))?Number(e):e)}))}))}meta(){return{title:h.appName,titleTemplate:null,description:h.appDescription}}};f.styles=[e(o),l`
      :host {
        height: 100%;
      }
      section {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        padding: 1rem;

        min-height: calc(100vh - 56px);
      }

      .buttons {
        display: flex;
        flex-wrap: wrap;
        width: calc(var(--button-size) * 4);
      }
      .sep {
        flex-grow: 1;
      }
    `],s([function(e){return t({descriptor:t=>({get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}("calc-button-component[label]")],f.prototype,"buttons",void 0),s([b()],f.prototype,"result",void 0),f=s([i("page-calculator")],f);export{f as PageCalculator};
