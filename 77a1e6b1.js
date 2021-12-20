import{r as t,a as e,b as i,A as r,M as s,_ as n,i as a,e as o,d,t as l,f as u,F as h,R as c,p as m,o as p,T as v,l as b,g as f,h as g,n as T,j as y,c as S,k as E,m as _,q as k,u as w,v as x,w as R,x as A,y as I,z as D,B as C,C as L,D as M,E as N,G as H,H as P,I as F,J as $,K as V}from"./b9bb21ac.js";import{P as B}from"./b671a25f.js";const z=t`.mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{height:4px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{border-radius:3px;height:6px;overflow:hidden;top:-1px}.mdc-slider .mdc-slider__track--active_fill{border-top:6px solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right}.mdc-slider .mdc-slider__track--inactive{border-radius:2px;height:4px;left:0;top:0}.mdc-slider .mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-slider .mdc-slider__track--active_fill{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider .mdc-slider__track--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.24}.mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.24}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%)}.mdc-slider .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator::before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0}.mdc-slider .mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}@media(prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__value-indicator-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit)}.mdc-slider .mdc-slider__value-indicator{background-color:#000;opacity:.6}.mdc-slider .mdc-slider__value-indicator::before{border-top-color:#000}.mdc-slider .mdc-slider__value-indicator{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-slider .mdc-slider__thumb{display:flex;height:48px;left:-24px;outline:none;position:absolute;user-select:none;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);border:10px solid;border-radius:50%;box-sizing:border-box;height:20px;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);width:20px}.mdc-slider .mdc-slider__thumb-knob{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider .mdc-slider__thumb::before,.mdc-slider .mdc-slider__thumb::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-slider .mdc-slider__thumb:hover::before,.mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider .mdc-slider__tick-mark--inactive{border-radius:50%;height:2px;width:2px}.mdc-slider .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider .mdc-slider__tick-mark--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.6}.mdc-slider.mdc-slider--disabled{opacity:.38;cursor:auto}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media(prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider__input{cursor:pointer;left:0;margin:0;height:100%;opacity:0;pointer-events:none;position:absolute;top:0;width:100%}:host{outline:none;display:block;-webkit-tap-highlight-color:transparent}.ripple{--mdc-ripple-color:#6200ee;--mdc-ripple-color:var(--mdc-theme-primary, #6200ee)}`;var U,X;!function(t){t[t.ACTIVE=0]="ACTIVE",t[t.INACTIVE=1]="INACTIVE"}(U||(U={})),function(t){t[t.START=1]="START",t[t.END=2]="END"}(X||(X={}));var O={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function W(t,e){if(function(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}(t)&&e in O){var i=t.document.createElement("div"),r=O[e],s=r.standard,n=r.prefixed;return s in i.style?s:n}return e}var K,q="mdc-slider--disabled",j="mdc-slider--discrete",G="mdc-slider--range",J="mdc-slider__thumb--focused",Y="mdc-slider__thumb--top",Q="mdc-slider__thumb--with-indicator",Z="mdc-slider--tick-marks",tt=1,et=5,it="aria-valuetext",rt="disabled",st="min",nt="max",at="value",ot="step";!function(t){t.SLIDER_UPDATE="slider_update"}(K||(K={}));var dt="undefined"!=typeof window,lt=function(t){function s(e){var n=t.call(this,i(i({},s.defaultAdapter),e))||this;return n.initialStylesRemoved=!1,n.isDisabled=!1,n.isDiscrete=!1,n.step=tt,n.hasTickMarks=!1,n.isRange=!1,n.thumb=null,n.downEventClientX=null,n.startThumbKnobWidth=0,n.endThumbKnobWidth=0,n.animFrame=new r,n}return e(s,t),Object.defineProperty(s,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},getThumbKnobWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),s.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(q),this.isDiscrete=this.adapter.hasClass(j),this.hasTickMarks=this.adapter.hasClass(Z),this.isRange=this.adapter.hasClass(G);var e=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(st,this.isRange?X.START:X.END),st),i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(nt,X.END),nt),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(at,X.END),at),s=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(at,X.START),at):e,n=this.adapter.getInputAttribute(ot,X.END),a=n?this.convertAttributeValueToNumber(n,ot):this.step;this.validateProperties({min:e,max:i,value:r,valueStart:s,step:a}),this.min=e,this.max=i,this.value=r,this.valueStart=s,this.step=a,this.numDecimalPlaces=ut(this.step),this.valueBeforeDownEvent=r,this.valueStartBeforeDownEvent=s,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(X.START)},this.inputEndChangeListener=function(){t.handleInputChange(X.END)},this.inputStartFocusListener=function(){t.handleInputFocus(X.START)},this.inputEndFocusListener=function(){t.handleInputFocus(X.END)},this.inputStartBlurListener=function(){t.handleInputBlur(X.START)},this.inputEndBlurListener=function(){t.handleInputBlur(X.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},s.prototype.destroy=function(){this.deregisterEventHandlers()},s.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},s.prototype.setMax=function(t){this.max=t,this.updateUI()},s.prototype.getMin=function(){return this.min},s.prototype.getMax=function(){return this.max},s.prototype.getValue=function(){return this.value},s.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart)throw new Error("end thumb value ("+t+") must be >= start thumb value ("+this.valueStart+")");this.updateValue(t,X.END)},s.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},s.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value)throw new Error("start thumb value ("+t+") must be <= end thumb value ("+this.value+")");this.updateValue(t,X.START)},s.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=ut(t),this.updateUI()},s.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},s.prototype.getStep=function(){return this.step},s.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},s.prototype.getDisabled=function(){return this.isDisabled},s.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(q),this.isRange&&this.adapter.setInputAttribute(rt,"",X.START),this.adapter.setInputAttribute(rt,"",X.END)):(this.adapter.removeClass(q),this.isRange&&this.adapter.removeInputAttribute(rt,X.START),this.adapter.removeInputAttribute(rt,X.END))},s.prototype.getIsRange=function(){return this.isRange},s.prototype.layout=function(t){var e=(void 0===t?{}:t).skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(X.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(X.END)),e||this.updateUI()},s.prototype.handleResize=function(){this.layout()},s.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var e=null!=t.clientX?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=e;var i=this.mapClientXOnSliderScale(e);this.thumb=this.getThumbFromDownEvent(e,i),null!==this.thumb&&(this.handleDragStart(t,i,this.thumb),this.updateValue(i,this.thumb,{emitInputEvent:!0}))}},s.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var e=null!=t.clientX?t.clientX:t.targetTouches[0].clientX,i=null!=this.thumb;if(this.thumb=this.getThumbFromMoveEvent(e),null!==this.thumb){var r=this.mapClientXOnSliderScale(e);i||(this.handleDragStart(t,r,this.thumb),this.adapter.emitDragStartEvent(r,this.thumb)),this.updateValue(r,this.thumb,{emitInputEvent:!0})}}},s.prototype.handleUp=function(){if(!this.isDisabled&&null!==this.thumb){var t=this.thumb===X.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,e=this.thumb===X.START?this.valueStart:this.value;t!==e&&this.adapter.emitChangeEvent(e,this.thumb),this.adapter.emitDragEndEvent(e,this.thumb),this.thumb=null}},s.prototype.handleThumbMouseenter=function(){this.isDiscrete&&this.isRange&&(this.adapter.addThumbClass(Q,X.START),this.adapter.addThumbClass(Q,X.END))},s.prototype.handleThumbMouseleave=function(){this.isDiscrete&&this.isRange&&(this.adapter.isInputFocused(X.START)||this.adapter.isInputFocused(X.END)||(this.adapter.removeThumbClass(Q,X.START),this.adapter.removeThumbClass(Q,X.END)))},s.prototype.handleMousedownOrTouchstart=function(t){var e=this,i="mousedown"===t.type?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(i,this.moveListener);var r=function(){e.handleUp(),e.adapter.deregisterBodyEventHandler(i,e.moveListener),e.adapter.deregisterEventHandler("mouseup",r),e.adapter.deregisterEventHandler("touchend",r)};this.adapter.registerBodyEventHandler("mouseup",r),this.adapter.registerBodyEventHandler("touchend",r),this.handleDown(t)},s.prototype.handlePointerdown=function(t){this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t)},s.prototype.handleInputChange=function(t){var e=Number(this.adapter.getInputValue(t));t===X.START?this.setValueStart(e):this.setValue(e),this.adapter.emitChangeEvent(t===X.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===X.START?this.valueStart:this.value,t)},s.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(J,t),this.isDiscrete&&(this.adapter.addThumbClass(Q,t),this.isRange)){var e=t===X.START?X.END:X.START;this.adapter.addThumbClass(Q,e)}},s.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(J,t),this.isDiscrete&&(this.adapter.removeThumbClass(Q,t),this.isRange)){var e=t===X.START?X.END:X.START;this.adapter.removeThumbClass(Q,e)}},s.prototype.handleDragStart=function(t,e,i){this.adapter.emitDragStartEvent(e,i),this.adapter.focusInput(i),t.preventDefault()},s.prototype.getThumbFromDownEvent=function(t,e){if(!this.isRange)return X.END;var i=this.adapter.getThumbBoundingClientRect(X.START),r=this.adapter.getThumbBoundingClientRect(X.END),s=t>=i.left&&t<=i.right,n=t>=r.left&&t<=r.right;return s&&n?null:s?X.START:n?X.END:e<this.valueStart?X.START:e>this.value?X.END:e-this.valueStart<=this.value-e?X.START:X.END},s.prototype.getThumbFromMoveEvent=function(t){if(null!==this.thumb)return this.thumb;if(null===this.downEventClientX)throw new Error("`downEventClientX` is null after move event.");return Math.abs(this.downEventClientX-t)<et?this.thumb:t<this.downEventClientX?this.adapter.isRTL()?X.END:X.START:this.adapter.isRTL()?X.START:X.END},s.prototype.updateUI=function(t){this.updateThumbAndInputAttributes(t),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},s.prototype.updateThumbAndInputAttributes=function(t){if(t){var e=this.isRange&&t===X.START?this.valueStart:this.value,i=String(e);this.adapter.setInputAttribute(at,i,t),this.isRange&&t===X.START?this.adapter.setInputAttribute(st,i,X.END):this.isRange&&t===X.END&&this.adapter.setInputAttribute(nt,i,X.START),this.adapter.getInputValue(t)!==i&&this.adapter.setInputValue(i,t);var r=this.adapter.getValueToAriaValueTextFn();r&&this.adapter.setInputAttribute(it,r(e),t)}},s.prototype.updateValueIndicatorUI=function(t){if(this.isDiscrete){var e=this.isRange&&t===X.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(e,t===X.START?X.START:X.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,X.START)}},s.prototype.updateTickMarksUI=function(){if(this.isDiscrete&&this.hasTickMarks){var t=(this.valueStart-this.min)/this.step,e=(this.value-this.valueStart)/this.step+1,i=(this.max-this.value)/this.step,r=Array.from({length:t}).fill(U.INACTIVE),s=Array.from({length:e}).fill(U.ACTIVE),n=Array.from({length:i}).fill(U.INACTIVE);this.adapter.updateTickMarks(r.concat(s).concat(n))}},s.prototype.mapClientXOnSliderScale=function(t){var e=(t-this.rect.left)/this.rect.width;this.adapter.isRTL()&&(e=1-e);var i=this.min+e*(this.max-this.min);return i===this.max||i===this.min?i:Number(this.quantize(i).toFixed(this.numDecimalPlaces))},s.prototype.quantize=function(t){var e=Math.round((t-this.min)/this.step);return this.min+e*this.step},s.prototype.updateValue=function(t,e,i){var r=(void 0===i?{}:i).emitInputEvent;if(t=this.clampValue(t,e),this.isRange&&e===X.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(e),r&&this.adapter.emitInputEvent(e===X.START?this.valueStart:this.value,e)},s.prototype.clampValue=function(t,e){return t=Math.min(Math.max(t,this.min),this.max),this.isRange&&e===X.START&&t>this.value?this.value:this.isRange&&e===X.END&&t<this.valueStart?this.valueStart:t},s.prototype.updateThumbAndTrackUI=function(t){var e=this,i=this.max,r=this.min,s=(this.value-this.valueStart)/(i-r),n=s*this.rect.width,a=this.adapter.isRTL(),o=dt?W(window,"transform"):"transform";if(this.isRange){var d=this.adapter.isRTL()?(i-this.value)/(i-r)*this.rect.width:(this.valueStart-r)/(i-r)*this.rect.width,l=d+n;this.animFrame.request(K.SLIDER_UPDATE,(function(){!a&&t===X.START||a&&t!==X.START?(e.adapter.setTrackActiveStyleProperty("transform-origin","right"),e.adapter.setTrackActiveStyleProperty("left","unset"),e.adapter.setTrackActiveStyleProperty("right",e.rect.width-l+"px")):(e.adapter.setTrackActiveStyleProperty("transform-origin","left"),e.adapter.setTrackActiveStyleProperty("right","unset"),e.adapter.setTrackActiveStyleProperty("left",d+"px")),e.adapter.setTrackActiveStyleProperty(o,"scaleX("+s+")");var i=a?l:d,r=e.adapter.isRTL()?d:l;t!==X.START&&t&&e.initialStylesRemoved||e.adapter.setThumbStyleProperty(o,"translateX("+i+"px)",X.START),t!==X.END&&t&&e.initialStylesRemoved||e.adapter.setThumbStyleProperty(o,"translateX("+r+"px)",X.END),e.removeInitialStyles(a),e.updateOverlappingThumbsUI(i,r,t)}))}else this.animFrame.request(K.SLIDER_UPDATE,(function(){var t=a?e.rect.width-n:n;e.adapter.setThumbStyleProperty(o,"translateX("+t+"px)",X.END),e.adapter.setTrackActiveStyleProperty(o,"scaleX("+s+")"),e.removeInitialStyles(a)}))},s.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var e=t?"right":"left";this.adapter.removeThumbStyleProperty(e,X.END),this.isRange&&this.adapter.removeThumbStyleProperty(e,X.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},s.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(this.isDiscrete){var e=dt?W(window,"transition"):"transition",i="all 0s ease 0s";this.adapter.setThumbStyleProperty(e,i,X.END),this.isRange&&this.adapter.setThumbStyleProperty(e,i,X.START),this.adapter.setTrackActiveStyleProperty(e,i),requestAnimationFrame((function(){t.adapter.removeThumbStyleProperty(e,X.END),t.adapter.removeTrackActiveStyleProperty(e),t.isRange&&t.adapter.removeThumbStyleProperty(e,X.START)}))}},s.prototype.updateOverlappingThumbsUI=function(t,e,i){var r=!1;if(this.adapter.isRTL()){var s=t-this.startThumbKnobWidth/2;r=e+this.endThumbKnobWidth/2>=s}else{r=t+this.startThumbKnobWidth/2>=e-this.endThumbKnobWidth/2}r?(this.adapter.addThumbClass(Y,i||X.END),this.adapter.removeThumbClass(Y,i===X.START?X.END:X.START)):(this.adapter.removeThumbClass(Y,X.START),this.adapter.removeThumbClass(Y,X.END))},s.prototype.convertAttributeValueToNumber=function(t,e){if(null===t)throw new Error("MDCSliderFoundation: `"+e+"` must be non-null.");var i=Number(t);if(isNaN(i))throw new Error("MDCSliderFoundation: `"+e+"` value is `"+t+"`, but must be a number.");return i},s.prototype.validateProperties=function(t){var e=t.min,i=t.max,r=t.value,s=t.valueStart,n=t.step;if(e>=i)throw new Error("MDCSliderFoundation: min must be strictly less than max. Current: [min: "+e+", max: "+i+"]");if(n<=0)throw new Error("MDCSliderFoundation: step must be a positive number. Current step: "+this.step);if(this.isRange){if(r<e||r>i||s<e||s>i)throw new Error("MDCSliderFoundation: values must be in [min, max] range. Current values: [start value: "+s+", end value: "+r+"]");if(s>r)throw new Error("MDCSliderFoundation: start value must be <= end value. Current values: [start value: "+s+", end value: "+r+"]");var a=(r-e)/n;if((s-e)/n%1!=0||a%1!=0)throw new Error("MDCSliderFoundation: Slider values must be valid based on the step value. Current values: [start value: "+s+", end value: "+r+"]")}else{if(r<e||r>i)throw new Error("MDCSliderFoundation: value must be in [min, max] range. Current value: "+r);if((a=(r-e)/n)%1!=0)throw new Error("MDCSliderFoundation: Slider value must be valid based on the step value. Current value: "+r)}},s.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),s.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(X.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(X.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(X.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(X.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(X.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(X.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(X.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(X.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(X.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(X.END,"blur",this.inputEndBlurListener)},s.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),s.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(X.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(X.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(X.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(X.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(X.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(X.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(X.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(X.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(X.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(X.END,"blur",this.inputEndBlurListener)},s.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},s.SUPPORTS_POINTER_EVENTS=dt&&Boolean(window.PointerEvent)&&!(["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document),s}(s);function ut(t){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(t));if(!e)return 0;var i=e[1]||"",r=e[2]||0;return Math.max(0,("0"===i?0:i.length)-Number(r))}class ht extends h{constructor(){super(...arguments),this.mdcFoundationClass=lt,this.disabled=!1,this.min=0,this.max=100,this.valueEnd=0,this.name="",this.step=1,this.withTickMarks=!1,this.discrete=!1,this.tickMarks=[],this.trackTransformOriginStyle="",this.trackLeftStyle="",this.trackRightStyle="",this.trackTransitionStyle="",this.endThumbWithIndicator=!1,this.endThumbTop=!1,this.shouldRenderEndRipple=!1,this.endThumbTransformStyle="",this.endThumbTransitionStyle="",this.valueToAriaTextTransform=null,this.valueToValueIndicatorTransform=t=>`${t}`,this.boundMoveListener=null,this.endRippleHandlers=new c((()=>(this.shouldRenderEndRipple=!0,this.endRipple)))}update(t){if(t.has("valueEnd")&&this.mdcFoundation){this.mdcFoundation.setValue(this.valueEnd);const t=this.mdcFoundation.getValue();t!==this.valueEnd&&(this.valueEnd=t)}t.has("discrete")&&(this.discrete||(this.tickMarks=[])),super.update(t)}render(){return this.renderRootEl(m`
      ${this.renderStartInput()}
      ${this.renderEndInput()}
      ${this.renderTrack()}
      ${this.renderTickMarks()}
      ${this.renderStartThumb()}
      ${this.renderEndThumb()}`)}renderRootEl(t){const e=p({"mdc-slider--disabled":this.disabled,"mdc-slider--discrete":this.discrete});return m`
    <div
        class="mdc-slider ${e}"
        @pointerdown=${this.onPointerdown}
        @pointerup=${this.onPointerup}
        @contextmenu=${this.onContextmenu}>
      ${t}
    </div>`}renderStartInput(){return v}renderEndInput(){var t;return m`
      <input
          class="mdc-slider__input end"
          type="range"
          step=${this.step}
          min=${this.min}
          max=${this.max}
          .value=${this.valueEnd}
          @change=${this.onEndChange}
          @focus=${this.onEndFocus}
          @blur=${this.onEndBlur}
          ?disabled=${this.disabled}
          name=${this.name}
          aria-label=${b(this.ariaLabel)}
          aria-labelledby=${b(this.ariaLabelledBy)}
          aria-describedby=${b(this.ariaDescribedBy)}
          aria-valuetext=${b(null===(t=this.valueToAriaTextTransform)||void 0===t?void 0:t.call(this,this.valueEnd))}>
    `}renderTrack(){return v}renderTickMarks(){return this.withTickMarks?m`
      <div class="mdc-slider__tick-marks">
        ${this.tickMarks.map((t=>{const e=t===U.ACTIVE;return m`<div class="${e?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"}"></div>`}))}
      </div>`:v}renderStartThumb(){return v}renderEndThumb(){const t=p({"mdc-slider__thumb--with-indicator":this.endThumbWithIndicator,"mdc-slider__thumb--top":this.endThumbTop}),e=f({"-webkit-transform":this.endThumbTransformStyle,transform:this.endThumbTransformStyle,"-webkit-transition":this.endThumbTransitionStyle,transition:this.endThumbTransitionStyle,left:this.endThumbTransformStyle||"rtl"===getComputedStyle(this).direction?"":`calc(${(this.valueEnd-this.min)/(this.max-this.min)*100}% - 24px)`,right:this.endThumbTransformStyle||"rtl"!==getComputedStyle(this).direction?"":`calc(${(this.valueEnd-this.min)/(this.max-this.min)*100}% - 24px)`}),i=this.shouldRenderEndRipple?m`<mwc-ripple class="ripple" unbounded></mwc-ripple>`:v;return m`
      <div
          class="mdc-slider__thumb end ${t}"
          style=${e}
          @mouseenter=${this.onEndMouseenter}
          @mouseleave=${this.onEndMouseleave}>
        ${i}
        ${this.renderValueIndicator(this.valueToValueIndicatorTransform(this.valueEnd))}
        <div class="mdc-slider__thumb-knob"></div>
      </div>
    `}renderValueIndicator(t){return this.discrete?m`
    <div class="mdc-slider__value-indicator-container" aria-hidden="true">
      <div class="mdc-slider__value-indicator">
        <span class="mdc-slider__value-indicator-text">
          ${t}
        </span>
      </div>
    </div>`:v}disconnectedCallback(){super.disconnectedCallback(),this.mdcFoundation&&this.mdcFoundation.destroy()}createAdapter(){}async firstUpdated(){super.firstUpdated(),await this.layout(!0)}updated(t){super.updated(t),this.mdcFoundation&&(t.has("disabled")&&this.mdcFoundation.setDisabled(this.disabled),t.has("min")&&this.mdcFoundation.setMin(this.min),t.has("max")&&this.mdcFoundation.setMax(this.max),t.has("step")&&this.mdcFoundation.setStep(this.step),t.has("discrete")&&this.mdcFoundation.setIsDiscrete(this.discrete),t.has("withTickMarks")&&this.mdcFoundation.setHasTickMarks(this.withTickMarks))}async layout(t=!1){var e;null===(e=this.mdcFoundation)||void 0===e||e.layout({skipUpdateUI:t}),this.requestUpdate(),await this.updateComplete}onEndChange(t){var e;this.valueEnd=Number(t.target.value),null===(e=this.mdcFoundation)||void 0===e||e.handleInputChange(X.END)}onEndFocus(){var t;null===(t=this.mdcFoundation)||void 0===t||t.handleInputFocus(X.END),this.endRippleHandlers.startFocus()}onEndBlur(){var t;null===(t=this.mdcFoundation)||void 0===t||t.handleInputBlur(X.END),this.endRippleHandlers.endFocus()}onEndMouseenter(){var t;null===(t=this.mdcFoundation)||void 0===t||t.handleThumbMouseenter(),this.endRippleHandlers.startHover()}onEndMouseleave(){var t;null===(t=this.mdcFoundation)||void 0===t||t.handleThumbMouseleave(),this.endRippleHandlers.endHover()}onPointerdown(t){this.layout(),this.mdcFoundation&&(this.mdcFoundation.handlePointerdown(t),this.boundMoveListener=this.mdcFoundation.handleMove.bind(this.mdcFoundation),this.mdcRoot.addEventListener("pointermove",this.boundMoveListener))}onPointerup(){this.mdcFoundation&&(this.mdcFoundation.handleUp(),this.boundMoveListener&&(this.mdcRoot.removeEventListener("pointermove",this.boundMoveListener),this.boundMoveListener=null))}onContextmenu(t){t.preventDefault()}setFormData(t){this.name&&t.append(this.name,`${this.valueEnd}`)}}n([a("input.end")],ht.prototype,"formElement",void 0),n([a(".mdc-slider")],ht.prototype,"mdcRoot",void 0),n([a(".end.mdc-slider__thumb")],ht.prototype,"endThumb",void 0),n([a(".end.mdc-slider__thumb .mdc-slider__thumb-knob")],ht.prototype,"endThumbKnob",void 0),n([o(".end .ripple")],ht.prototype,"endRipple",void 0),n([d({type:Boolean,reflect:!0})],ht.prototype,"disabled",void 0),n([d({type:Number})],ht.prototype,"min",void 0),n([d({type:Number})],ht.prototype,"max",void 0),n([d({type:Number})],ht.prototype,"valueEnd",void 0),n([d({type:String})],ht.prototype,"name",void 0),n([d({type:Number})],ht.prototype,"step",void 0),n([d({type:Boolean})],ht.prototype,"withTickMarks",void 0),n([d({type:Boolean})],ht.prototype,"discrete",void 0),n([l()],ht.prototype,"tickMarks",void 0),n([l()],ht.prototype,"trackTransformOriginStyle",void 0),n([l()],ht.prototype,"trackLeftStyle",void 0),n([l()],ht.prototype,"trackRightStyle",void 0),n([l()],ht.prototype,"trackTransitionStyle",void 0),n([l()],ht.prototype,"endThumbWithIndicator",void 0),n([l()],ht.prototype,"endThumbTop",void 0),n([l()],ht.prototype,"shouldRenderEndRipple",void 0),n([l()],ht.prototype,"endThumbTransformStyle",void 0),n([l()],ht.prototype,"endThumbTransitionStyle",void 0),n([u,d({type:String,attribute:"aria-label"})],ht.prototype,"ariaLabel",void 0),n([u,d({type:String,attribute:"aria-labelledby"})],ht.prototype,"ariaLabelledBy",void 0),n([u,d({type:String,attribute:"aria-describedby"})],ht.prototype,"ariaDescribedBy",void 0);class ct extends ht{get value(){return this.valueEnd}set value(t){this.valueEnd=t}renderTrack(){const t=f({"transform-origin":this.trackTransformOriginStyle,left:this.trackLeftStyle,right:this.trackRightStyle,"-webkit-transform":`scaleX(${(this.valueEnd-this.min)/(this.max-this.min)})`,transform:`scaleX(${(this.valueEnd-this.min)/(this.max-this.min)})`,"-webkit-transition":this.trackTransitionStyle,transition:this.trackTransitionStyle});return m`
      <div class="mdc-slider__track">
        <div class="mdc-slider__track--inactive"></div>
        <div class="mdc-slider__track--active">
          <div
              class="mdc-slider__track--active_fill"
              style=${t}>
          </div>
        </div>
      </div>`}createAdapter(){return{addClass:t=>{if("mdc-slider--disabled"===t)this.disabled=!0},removeClass:t=>{if("mdc-slider--disabled"===t)this.disabled=!1},hasClass:t=>{switch(t){case"mdc-slider--disabled":return this.disabled;case"mdc-slider--discrete":return this.discrete;default:return!1}},addThumbClass:(t,e)=>{if(e!==X.START&&"mdc-slider__thumb--with-indicator"===t)this.endThumbWithIndicator=!0},removeThumbClass:(t,e)=>{if(e!==X.START&&"mdc-slider__thumb--with-indicator"===t)this.endThumbWithIndicator=!1},registerEventHandler:()=>{},deregisterEventHandler:()=>{},registerBodyEventHandler:(t,e)=>{document.body.addEventListener(t,e)},deregisterBodyEventHandler:(t,e)=>{document.body.removeEventListener(t,e)},registerInputEventHandler:(t,e,i)=>{t!==X.START&&this.formElement.addEventListener(e,i)},deregisterInputEventHandler:(t,e,i)=>{t!==X.START&&this.formElement.removeEventListener(e,i)},registerThumbEventHandler:()=>{},deregisterThumbEventHandler:()=>{},registerWindowEventHandler:(t,e)=>{window.addEventListener(t,e)},deregisterWindowEventHandler:(t,e)=>{window.addEventListener(t,e)},emitChangeEvent:(t,e)=>{if(e===X.START)return;const i=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:t,thumb:e}});this.dispatchEvent(i)},emitDragEndEvent:(t,e)=>{e!==X.START&&this.endRippleHandlers.endPress()},emitDragStartEvent:(t,e)=>{e!==X.START&&this.endRippleHandlers.startPress()},emitInputEvent:(t,e)=>{if(e===X.START)return;const i=new CustomEvent("input",{bubbles:!0,composed:!0,detail:{value:t,thumb:e}});this.dispatchEvent(i)},focusInput:t=>{t!==X.START&&this.formElement.focus()},getAttribute:()=>"",getBoundingClientRect:()=>this.mdcRoot.getBoundingClientRect(),getInputAttribute:(t,e)=>{if(e===X.START)return null;switch(t){case"min":return this.min.toString();case"max":return this.max.toString();case"value":return this.valueEnd.toString();case"step":return this.step.toString();default:return null}},getInputValue:t=>t===X.START?"":this.valueEnd.toString(),getThumbBoundingClientRect:t=>t===X.START?this.getBoundingClientRect():this.endThumb.getBoundingClientRect(),getThumbKnobWidth:t=>t===X.START?0:this.endThumbKnob.getBoundingClientRect().width,getValueToAriaValueTextFn:()=>this.valueToAriaTextTransform,isInputFocused:t=>{if(t===X.START)return!1;const e=g();return e[e.length-1]===this.formElement},isRTL:()=>"rtl"===getComputedStyle(this).direction,setInputAttribute:(t,e,i)=>{X.START},removeInputAttribute:t=>{},setThumbStyleProperty:(t,e,i)=>{if(i!==X.START)switch(t){case"transform":case"-webkit-transform":this.endThumbTransformStyle=e;break;case"transition":case"-webkit-transition":this.endThumbTransitionStyle=e}},removeThumbStyleProperty:(t,e)=>{if(e!==X.START)switch(t){case"left":case"right":break;case"transition":case"-webkit-transition":this.endThumbTransitionStyle=""}},setTrackActiveStyleProperty:(t,e)=>{switch(t){case"transform-origin":this.trackTransformOriginStyle=e;break;case"left":this.trackLeftStyle=e;break;case"right":this.trackRightStyle=e;break;case"transform":case"-webkit-transform":break;case"transition":case"-webkit-transition":this.trackTransitionStyle=e}},removeTrackActiveStyleProperty:t=>{switch(t){case"transition":case"-webkit-transition":this.trackTransitionStyle=""}},setInputValue:(t,e)=>{e!==X.START&&(this.valueEnd=Number(t))},setPointerCapture:t=>{this.mdcRoot.setPointerCapture(t)},setValueIndicatorText:()=>{},updateTickMarks:t=>{this.tickMarks=t}}}}n([d({type:Number})],ct.prototype,"value",null);let mt=class extends ct{};mt.styles=[z],mt=n([T("mwc-slider")],mt);let pt=class extends B{constructor(){super(...arguments),this.font_size=0,this.themeColor=window.localStorage.getItem("themeColor"),this.fontSize=window.localStorage.getItem("fontSize")}render(){return m`
      <section>
        <div class="box">
          <h2 class="box-title">پیش نمایش</h2>
          <div class="parts">
            <div class="part">
              <div class="part-text fa">
                بِسْمِ اللَّـهِ الرَّ‌حْمَـٰنِ الرَّ‌حِيمِ ﴿1﴾
              </div>
              <div class="part-translation">
                به نام خداوند رحمتگر مهربان (1)
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <h2 class="box-title">رنگ</h2>
          <div class="colors">
            ${y.map((t=>{const e={[t.color_name]:!0};return m`
                <div
                  @click=${()=>this.changeThemeColor(t)}
                  @keyup=${()=>this.changeThemeColor(t)}
                  class="color ${p({active:t.color_name===this.themeColor,...e})}"
                ></div>
              `}))}
          </div>
        </div>
        <div class="box">
          <h2 class="box-title">اندازه فونت آیات</h2>
          <mwc-slider
            withTickMarks
            step="1"
            min="0"
            max="15"
            @input=${this.changeFontSize}
            value="${b(null===this.fontSize?void 0:Number(this.fontSize)-13)}"
          >
          </mwc-slider>
        </div>
      </section>
    `}changeThemeColor(t){window.localStorage.setItem("themeColor",t.color_name),document.querySelector(":root").style.setProperty("--mdc-theme-primary",y.filter((t=>t.color_name==window.localStorage.getItem("themeColor")))[0].hexa),this.themeColor=window.localStorage.getItem("themeColor")}changeFontSize(){window.localStorage.setItem("fontSize",String(this.slider.value+13)),document.querySelector(":root").style.setProperty("--quran-fs",window.localStorage.getItem("fontSize")+"px"),this.fontSize=window.localStorage.getItem("fontSize")}meta(){return{title:"تنظیمات",description:S.appDescription}}};pt.styles=[E(_),t`
      mwc-slider {
        direction: ltr;
      }
    `,t`
      section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        padding: 0.5rem 1rem;
      }
      .colors {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .color {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;

        width: 40px;
        height: 40px;
        margin: 5px;

        transition: outline 250ms ease;
        border: 3px solid #fff;
        outline: 2px solid #fff;
        border-radius: 50%;
      }
      .color.active {
        outline: 2px solid #333;
      }
      .color.red {
        background-color: ${k};
      }
      .color.pink {
        background-color: ${w};
      }
      .color.purple {
        background-color: ${x};
      }
      .color.deep_purple {
        background-color: ${R};
      }
      .color.indigo {
        background-color: ${A};
      }
      .color.blue {
        background-color: ${I};
      }
      .color.light_blue {
        background-color: ${D};
      }
      .color.cyan {
        background-color: ${C};
      }
      .color.teal {
        background-color: ${L};
      }
      .color.green {
        background-color: ${M};
      }
      .color.light_green {
        background-color: ${N};
      }
      .color.lime {
        background-color: ${H};
      }
      .color.yellow {
        background-color: ${P};
      }
      .color.amber {
        background-color: ${F};
      }
      .color.orange {
        background-color: ${$};
      }
      .color.deep_orange {
        background-color: ${V};
      }
    `,t`
      .box {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        padding: 1rem;
        border: 1px solid #0002;
        border-radius: 6px;
        max-width: 1000px;

        margin: 1.5rem 1rem 0;
      }
      .box-title {
        display: flex;
        width: max-content;
        padding: 2px 12px;
        margin: 0;
        margin-top: -2rem;
        background-color: #fff;
        font-size: 1.2rem;
      }
    `,t`
      .parts {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .parts > .part {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0.25rem;
      }
      .parts > .part > .part-text,
      .parts > .part > .part-translation {
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: var(--quran-fs);
        font-weight: 100;
        position: relative;
        overflow: hidden;
        transition: max-height 500ms ease, opacity 300ms ease-in-out;
      }

      .parts > .part > .part-text {
        color: #000;
        margin-bottom: 6px;
      }
      .parts > .part > .part-translation {
        color: var(--mdc-theme-primary, #334);
        padding: 0 5px;
        max-height: 150px;
        opacity: 1;
      }
      .parts > .part > .part-translation:before {
        content: '';
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: var(--mdc-theme-primary, #334);
        opacity: 0.15;
        border-radius: 4px;
      }
    `],n([l()],pt.prototype,"font_size",void 0),n([l()],pt.prototype,"color",void 0),n([a("mwc-slider")],pt.prototype,"slider",void 0),n([l()],pt.prototype,"themeColor",void 0),n([l()],pt.prototype,"fontSize",void 0),pt=n([T("page-settings")],pt);export{pt as PageSettings};
