"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[1862],{"../web-components/dist/esm/close-icon-539ec8d1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-toast.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toast:()=>Toast});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/close-icon-539ec8d1.js"),_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-6192f61a.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),Toast=function(){function Toast(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,Toast),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.icDismiss=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icDismiss",7),this.interactiveElements=[],this.dismissAction=function(){_this.icDismiss.emit()},this.handleProgressChange=function(){_this.timerProgress-=1e3/_this.autoDismissTimeout*100},this.onFocus=function(){_this.focusInteractiveElement&&(_this.isManual=!0)},this.onBlur=function(){_this.handleTimer({type:"mouseleave"})},this.isManual=void 0,this.timerProgress=100,this.visible=!1,this.autoDismissTimeout=5e3,this.dismissButtonAriaLabel="dismiss",this.dismissMode="manual",this.heading=void 0,this.message=void 0,this.neutralIconAriaLabel=void 0,this.variant=void 0}var _setVisible;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__.A)(Toast,[{key:"dismissModeChangeHandler",value:function dismissModeChangeHandler(newValue){this.isManual="manual"===newValue}},{key:"disconnectedCallback",value:function disconnectedCallback(){window.clearTimeout(this.dismissTimeout),window.clearInterval(this.timerRefreshInterval)}},{key:"componentWillLoad",value:function componentWillLoad(){var _a,_b;if(this.handleLongText(this.heading.length>70,(null===(_a=this.message)||void 0===_a?void 0:_a.length)>140),this.autoDismissTimeout<5e3&&(this.autoDismissTimeout=5e3),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"action")&&(this.dismissMode="manual"),this.isManual="manual"===this.dismissMode,(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"neutral-icon")&&(this.variant="neutral"),"neutral"===this.variant&&(this.neutralVariantLabel=null!==(_b=this.neutralIconAriaLabel)&&void 0!==_b?_b:_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.V[this.variant].ariaLabel),this.isManual){var toastMessage=(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.message)?". ".concat(this.message):"";this.el.setAttribute("aria-label",this.variant?this.neutralVariantLabel||_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.V[this.variant].ariaLabel:this.heading),(this.variant||this.message)&&this.el.setAttribute("aria-description",this.variant?"".concat(this.heading).concat(toastMessage):this.message)}}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.heading,propName:"heading"}],"Toast")}},{key:"componentDidUpdate",value:function componentDidUpdate(){if(this.focusInteractiveElement&&this.isManual){this.resetAutoDismissTimer();var actionContent=(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.K)(this.el,"action"),dismissButton=this.el.shadowRoot.querySelector("ic-button");actionContent&&this.interactiveElements.push(actionContent),dismissButton&&this.interactiveElements.push(dismissButton),this.focusInteractiveElement=!1,this.findNextInteractiveElement(this.shiftKeyPressed).setFocus(),this.shiftKeyPressed=!1}}},{key:"watchVisibleHandler",value:function watchVisibleHandler(){if(this.visible){var actionContent=(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.K)(this.el,"action"),dismissButton=this.el.shadowRoot.querySelector("ic-button");actionContent&&this.interactiveElements.push(actionContent),dismissButton&&this.interactiveElements.push(dismissButton)}else this.interactiveElements=[]}},{key:"handleDismiss",value:function handleDismiss(){this.visible=!1,this.resetAutoDismissTimer()}},{key:"handleKeyboard",value:function handleKeyboard(ev){if(this.visible)if(this.isManual)switch(ev.key){case"Tab":ev.preventDefault(),this.findNextInteractiveElement(ev.shiftKey).setFocus();break;case"Escape":!ev.repeat&&this.dismissAction(),ev.stopImmediatePropagation()}else"Tab"===ev.key&&(this.shiftKeyPressed=ev.shiftKey,this.focusInteractiveElement=!0)}},{key:"handleTimer",value:function handleTimer(ev){switch(ev.type){case"mouseenter":this.isManual||this.resetAutoDismissTimer(),this.isManual=!0;break;case"mouseleave":"automatic"===this.dismissMode&&(this.isManual=!1,this.interactiveElements=[],this.visible&&(this.dismissTimeout=window.setTimeout(this.dismissAction,this.autoDismissTimeout),this.timerRefreshInterval=window.setInterval(this.handleProgressChange,1e3)))}}},{key:"setVisible",value:(_setVisible=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){var _this2=this;return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(this.visible||(this.visible=!0),this.isManual){_context.next=7;break}return this.dismissTimeout=window.setTimeout(this.dismissAction,this.autoDismissTimeout),this.timerRefreshInterval=window.setInterval(this.handleProgressChange,1e3),_context.abrupt("return",null);case 7:return window.setTimeout((function(){return _this2.interactiveElements[0].setFocus()}),200),_context.abrupt("return",document.activeElement);case 9:case"end":return _context.stop()}}),_callee,this)}))),function setVisible(){return _setVisible.apply(this,arguments)})},{key:"handleLongText",value:function handleLongText(headingTooLong,messageTooLong){(messageTooLong||headingTooLong)&&console.error("Too many characters in toast ".concat(headingTooLong?"heading":"").concat(headingTooLong&&messageTooLong?" and ":"").concat(messageTooLong?"message":"",". Refer to character limits specified in the prop description"))}},{key:"findNextInteractiveElement",value:function findNextInteractiveElement(isBackwards){var currentIndex,_this3=this,firstEl=this.interactiveElements[0],lastEl=this.interactiveElements[this.interactiveElements.length-1];return this.isActive(isBackwards?firstEl:lastEl)?isBackwards?lastEl:firstEl:this.interactiveElements.some((function(el,index){return!!_this3.isActive(el)&&(currentIndex=index,!0)}))?this.interactiveElements[currentIndex+(isBackwards?-1:1)]:firstEl}},{key:"resetAutoDismissTimer",value:function resetAutoDismissTimer(){window.clearTimeout(this.dismissTimeout),window.clearInterval(this.timerRefreshInterval),this.timerProgress=100}},{key:"isActive",value:function isActive(targetEl){return targetEl===this.el?!!this.el.shadowRoot.activeElement:document.activeElement===targetEl}},{key:"render",value:function render(){var variant=this.variant,heading=this.heading,message=this.message,visible=this.visible,isManual=this.isManual,dismissButtonAriaLabel=this.dismissButtonAriaLabel;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"ic-toast-hidden",!visible),role:isManual?"dialog":"status",tabindex:"0",onFocus:this.onFocus,onBlur:this.onBlur},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"container"},variant&&visible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"toast-icon-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"divider",!0),"divider-".concat(variant),!0)}),"neutral"===variant?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"neutral-icon"}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:"toast-icon",innerHTML:_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.V[variant].icon})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"toast-content",!0),"no-icon","neutral"===variant&&!(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"neutral-icon"))},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"toast-message"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"subtitle-large"},visible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("h5",null,heading)),message&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"body"},visible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("p",null,message))),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"action")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"toast-action-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"action"}))),isManual?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{id:"dismiss-button",innerHTML:_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_8__.c,onClick:this.dismissAction,variant:"icon",appearance:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_3__.I.Light,"aria-label":dismissButtonAriaLabel}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-loading-indicator",{class:"toast-dismiss-timer",appearance:"light",size:"icon",progress:this.timerProgress,description:""})))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{dismissMode:["dismissModeChangeHandler"],visible:["watchVisibleHandler"]}}}]),Toast}();Toast.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--bottom-position:var(--ic-space-xl);position:fixed;bottom:var(--bottom-position);left:50%;transform:translate(-50%);animation:fadein var(--ic-transition-duration-slow) ease-in-out;z-index:var(--ic-z-index-toast)}:host(.ic-toast-hidden){display:none;animation:fadeout var(--ic-transition-duration-slow) ease-in-out}:host(:focus){outline:none}.container{max-width:32.5rem;min-width:18rem;box-shadow:var(--ic-elevation-overlay);min-height:3.5rem;background-color:var(--ic-architectural-800);color:var(--ic-color-white-text);display:flex;align-items:center;position:relative;border-radius:var(--ic-border-radius)}.toast-icon-container{height:100%;display:flex;align-items:center}.divider{height:100%;width:var(--ic-space-xs);position:absolute;border-radius:var(--ic-space-xxxs) 0 0 var(--ic-space-xxxs)}.divider-neutral{background-color:var(--ic-status-unknown)}.divider-info{background-color:var(--ic-status-info-contrast)}.divider-warning{background-color:var(--ic-status-warning-contrast)}.divider-error{background-color:var(--ic-status-error-contrast)}.divider-success{background-color:var(--ic-status-success-contrast)}.toast-icon,::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg);margin-left:var(--ic-space-md)}:host([variant="neutral"]) .toast-icon svg,::slotted(svg){fill:var(--ic-status-unknown)}:host([variant="info"]) .toast-icon svg{fill:var(--ic-status-info-contrast)}:host([variant="warning"]) .toast-icon svg{fill:var(--ic-status-warning-contrast)}:host([variant="error"]) .toast-icon svg{fill:var(--ic-status-error-contrast)}:host([variant="success"]) .toast-icon svg{fill:var(--ic-status-success-contrast)}.toast-content{margin-left:var(--ic-space-xs);width:100%}.no-icon{margin-left:var(--ic-space-md)}.toast-message{padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}.toast-action-container{padding-bottom:var(--ic-space-md)}ic-button{padding:var(--ic-space-xs)}.toast-dismiss-timer{padding:var(--ic-space-sm)}@media (max-width: 576px){:host{--bottom-position:var(--ic-space-lg);width:calc(100% - 2 * var(--ic-space-md))}}@media (min-width: 993px){:host{--bottom-position:calc(var(--ic-space-xl) + var(--ic-space-xs))}}@media (forced-colors: active){.container{border:var(--ic-hc-border)}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:var(--bottom-position);opacity:1}}@keyframes fadeout{from{bottom:var(--bottom-position);opacity:1}to{bottom:0;opacity:0}}'}}]);