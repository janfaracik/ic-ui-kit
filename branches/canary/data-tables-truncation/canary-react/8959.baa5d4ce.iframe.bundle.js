"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[8959],{"../canary-web-components/dist/esm/ic-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_checkbox:()=>Checkbox});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-12b4266a.js");__webpack_require__("../canary-web-components/dist/esm/types-f605c21c.js");const Checkbox=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.checkboxChecked=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"checkboxChecked",7),this.icCheck=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icCheck",7),this.IC_TEXT_FIELD="ic-text-field",this.handleClick=()=>{this.checked=!this.checked,this.icCheck.emit(),this.checkboxChecked.emit()},this.handleFormReset=()=>{this.checked=this.initiallyChecked},this.additionalFieldDisplay="static",this.checked=!1,this.initiallyChecked=this.checked,this.disabled=!1,this.dynamicText="This selection requires additional answers",this.form=void 0,this.formaction=void 0,this.formenctype=void 0,this.formmethod=void 0,this.formnovalidate=void 0,this.formtarget=void 0,this.groupLabel=void 0,this.indeterminate=!1,this.label=void 0,this.name=void 0,this.size=void 0,this.small=!1,this.value=void 0}componentWillLoad(){(0,_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.disabled,this.el),(0,_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__.l)(this.el,this.handleFormReset)}componentDidLoad(){(0,_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"},{prop:this.value,propName:"value"}],"Checkbox")}componentDidRender(){if("static"===this.additionalFieldDisplay){const textfield=this.el.querySelector(this.IC_TEXT_FIELD);this.checked?textfield&&textfield.removeAttribute("disabled"):textfield&&textfield.setAttribute("disabled","")}else this.additionalFieldContainer&&(this.checked?this.additionalFieldContainer.style.display="flex":this.additionalFieldContainer.style.display="none")}disconnectedCallback(){(0,_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.el,this.handleFormReset)}async setFocus(){const checkboxEl=this.el.shadowRoot.querySelector(".checkbox");checkboxEl&&checkboxEl.focus()}render(){let id=`ic-checkbox-${(0,_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.label)?this.label:this.value}-${this.groupLabel}`;id=id.replace(/ /g,"-");const parentElementSize=this.el.parentElement.size;return this.checked?(0,_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__.n)(!0,this.el,this.name,this.checked&&this.value,this.disabled):(0,_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.el),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled:this.disabled,small:this.small,[`${this.size||parentElementSize}`]:!0}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"container"},this.checked&&!this.indeterminate&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"checkmark",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("title",null,"checkmark icon"),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})),this.checked&&this.indeterminate&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"indeterminate-symbol"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{role:"checkbox",class:{checkbox:!0,checked:this.checked,indeterminate:this.indeterminate},type:"checkbox",name:this.name,id,value:this.value,disabled:!!this.disabled||null,checked:this.checked,indeterminate:this.indeterminate,onClick:this.handleClick,form:this.form,formaction:this.formaction,formenctype:this.formenctype,formmethod:this.formmethod,formnovalidate:this.formnovalidate,formtarget:this.formtarget}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"checkbox-label",variant:"body"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:id},this.label))),(0,_helpers_12b4266a_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"additional-field")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dynamic-container",ref:el=>this.additionalFieldContainer=el},"dynamic"===this.additionalFieldDisplay&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"branch-corner"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"dynamic"===this.additionalFieldDisplay&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{class:"dynamic-text","aria-live":"polite"},this.dynamicText)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"additional-field-wrapper":"static"===this.additionalFieldDisplay}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"additional-field"})))))}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Checkbox.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.disabled){color:var(--ic-architectural-200);pointer-events:none}.container{display:flex;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs);margin-bottom:var(--ic-space-xxs);align-items:center}:host(.small) .container{margin-bottom:var(--ic-space-xxxs)}.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-architectural-white);border:var(--ic-border-width) solid var(--ic-architectural-300);border-radius:var(--ic-border-radius);outline:none;cursor:pointer;transition:var(--ic-easing-transition-fast);flex-shrink:0}:host(.small) .checkbox,:host(.small) .container svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.large) .checkbox,:host(.large) .container svg{width:var(--ic-space-xl);height:var(--ic-space-xl)}.checkbox:checked{background-color:var(--ic-action-default);border:var(--ic-border-width) solid var(--ic-action-default);transition:var(--ic-easing-transition-slow)}.checkbox:checked:disabled{background-color:var(--ic-architectural-200)}.checkbox:indeterminate,.checkbox.indeterminate:checked{background-color:var(--ic-architectural-white);border:0.125rem solid var(--ic-action-default)}.checkbox:checked:hover{background-color:var(--ic-action-default-hover)}.checkbox:indeterminate:hover,.checkbox.indeterminate:checked:hover{background-color:var(--ic-action-default-bg-hover-no-alpha);border:0.125rem solid var(--ic-action-default-hover)}.checkbox:checked:active{background-color:var(--ic-action-default-active)}.checkbox:indeterminate:active,.checkbox.indeterminate:checked:active{background-color:var(--ic-action-default-bg-active-no-alpha);border:0.125rem solid var(--ic-action-default-active)}.checkbox:hover{background-color:var(--ic-action-default-bg-hover-no-alpha);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:var(--ic-border-width) solid var(--ic-action-default-hover)}.checkbox:active{background-color:var(--ic-action-default-bg-active-no-alpha);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active);border:var(--ic-border-width) solid var(--ic-action-default-active)}.checkbox:focus{box-shadow:var(--ic-border-focus)}.checkbox:disabled{border:var(--ic-border-width) dashed var(--ic-architectural-200)}.checkbox-label{padding-left:var(--ic-space-sm)}.checkbox-label:hover{cursor:pointer}.checkmark{position:relative;right:calc(-1 * var(--ic-space-lg));margin-left:calc(-1 * var(--ic-space-lg));fill:white;z-index:1;background-color:transparent;pointer-events:none;flex-shrink:0}:host(.small) .checkmark{margin-left:calc(-1 * var(--ic-space-md));right:calc(-1 * var(--ic-space-md))}:host(.large) .checkmark{margin-left:calc(-1 * var(--ic-space-xl));right:calc(-1 * var(--ic-space-xl))}.indeterminate-symbol{position:relative;width:0.875rem;height:var(--ic-space-xxxs);right:-1.188rem;margin-left:-0.875rem;z-index:1;background-color:var(--ic-action-default);pointer-events:none;flex-shrink:0}:host(.small) .indeterminate-symbol{width:0.6rem;right:-0.8rem;margin-left:-0.6rem}:host(.large) .indeterminate-symbol{width:1.25rem;right:-1.625rem;margin-left:-1.25rem}.container:hover .indeterminate-symbol{background-color:var(--ic-action-default-hover)}.container:active .indeterminate-symbol{background-color:var(--ic-action-default-active)}.additional-field-wrapper{margin-left:calc(var(--ic-space-md) + var(--ic-space-lg));margin-top:calc(var(--ic-space-sm) / 2)}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default)}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-text{color:var(--ic-action-default);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.checkbox{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert;transition:none}.checkbox:checked{transition:none}.checkbox:focus-visible{outline:0.125rem solid highlight}.checkbox:disabled:not(:checked){-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.checkmark{fill:none}.indeterminate-symbol{display:none}}'}}]);