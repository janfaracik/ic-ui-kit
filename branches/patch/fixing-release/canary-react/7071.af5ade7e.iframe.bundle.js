"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[7071],{"../canary-web-components/dist/esm/ic-input-component-container_4.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_input_component_container:()=>InputComponentContainer,ic_input_container:()=>InputContainer,ic_input_label:()=>InputLabel,ic_input_validation:()=>InputValidation});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/types-f605c21c.js"),_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../canary-web-components/dist/esm/helpers-451953f9.js");const InputComponentContainer=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.appearance="default",this.dark=!1,this.disabled=!1,this.fullWidth=!1,this.multiLine=!1,this.readonly=!1,this.size="default",this.small=!1,this.validationInline=!1,this.validationStatus=""}render(){const{size,small,validationStatus,disabled,readonly,multiLine,fullWidth,dark,appearance,validationInline}=this,hasValidationStatus=""!==this.validationStatus&&!this.disabled&&!this.readonly;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{small,[`${size}`]:!0,[validationStatus]:hasValidationStatus,disabled,readonly,multiline:multiLine,fullwidth:fullWidth,dark:dark||"dark"===appearance},"aria-disabled":disabled&&`${disabled}`},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"focus-indicator":!0,dark:dark||"dark"===appearance}},(0,_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"left-icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"icon-container":!0}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"left-icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),validationInline&&validationStatus===_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__.a.Success&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"inline-success":!0},innerHTML:_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.O})))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};InputComponentContainer.style="ic-input-component-container{display:flex;border:var(--ic-border-width) solid\n    var(--border-color, var(--ic-architectural-400));border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-slow);height:2.5rem;width:var(--input-width, 20rem);padding:var(--ic-space-1px);background-color:var(--ic-architectural-white);box-sizing:border-box;fill:var(--ic-architectural-400);outline:none}ic-input-component-container.fullwidth{width:100%}ic-input-component-container.disabled,ic-input-component-container.disabled:hover{border:var(--ic-border-width) dashed var(--ic-architectural-200)}ic-input-component-container.readonly,ic-input-component-container.readonly:hover{border:none;padding:0}ic-input-component-container.error{border:var(--ic-error-border-default);padding:0}ic-input-component-container.error:hover{border:var(--ic-error-border-hover)}ic-input-component-container.error:focus-within{border:var(--ic-error-border-pressed)}ic-input-component-container.warning{border:var(--ic-warning-border-default);padding:0}ic-input-component-container.warning:hover{border:var(--ic-warning-border-hover)}ic-input-component-container.warning:focus-within{border:var(--ic-warning-border-pressed)}ic-input-component-container.success{border:var(--ic-success-border-default);padding:0}ic-input-component-container.success:hover{border:var(--ic-success-border-hover)}ic-input-component-container.success:focus-within{border:var(--ic-success-border-pressed)}ic-input-component-container.small{height:var(--ic-space-xl)}ic-input-component-container.large{height:var(--ic-space-xxl)}ic-input-component-container.multiline{height:auto}ic-input-component-container .icon-container{margin-top:var(--ic-space-xxs);margin-left:0.438rem;display:flex;align-items:center}ic-input-component-container.multiline .icon-container,ic-input-component-container.multiline.small .icon-container{margin-top:0.375rem;display:block}ic-input-component-container.readonly .icon-container{margin-left:-0.313rem}ic-input-component-container.disabled ::-moz-placeholder{display:none}ic-input-component-container.disabled ::placeholder{display:none}ic-input-component-container .inline-success{margin:var(--ic-space-xs) 0.375rem;display:flex;align-items:center}ic-input-component-container.dark:hover{--border-color:var(--ic-architectural-400)}ic-input-component-container .inline-success>svg{fill:var(--ic-status-success);height:1.25rem;width:1.25rem}ic-input-component-container:hover{border:var(--ic-border-hover);color:var(--ic-action-dark-hover)}ic-input-component-container:focus{border:var(--ic-border-pressed)}.focus-indicator{display:flex;width:100%;margin:-0.125rem;padding:0.125rem;border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast)}.focus-indicator:focus-within,.focus-indicator-enabled{box-shadow:var(--ic-border-focus)}.focus-indicator.dark:focus-within{box-shadow:var(--ic-border-focus)}@media (forced-colors: active){ic-input-component-container,.focus-indicator{transition:none}ic-input-component-container:focus-within{border:var(--ic-border-width) solid Highlight;outline:0.125rem solid Highlight}ic-input-component-container.disabled,ic-input-component-container.disabled:hover{border:var(--ic-border-width) dashed GrayText}}";const InputContainer=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.disabled=!1,this.readonly=!1}render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"component-container":!0,disabled:this.disabled,readonly:this.readonly}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}};InputContainer.style="ic-input-container .component-container{display:flex;flex-direction:column}";const InputLabel=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.appearance="default",this.dark=!1,this.disabled=!1,this.error=!1,this.for=void 0,this.helperText="",this.label=void 0,this.readonly=!1,this.required=!1}componentDidLoad(){(0,_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.label,propName:"label"}],"Input Label")}render(){const{disabled,readonly,label,required,helperText,error,dark,appearance}=this,labelText=required?label+" *":label,labelContent=readonly?`${labelText}`:(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.for},labelText),id=(0,_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.P)(this.for);return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled,readonly,"with-helper":""!==helperText}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",class:{"readonly-label":readonly,"error-label":error&&!(readonly||disabled),dark:dark||"dark"===appearance}},labelContent),""!==helperText&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:{helpertext:!0,"helpertext-normal":!disabled&&!readonly,"helpertext-readonly":readonly}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id},helperText)))}};InputLabel.style="ic-input-label{margin-bottom:var(--ic-space-xs)}ic-input-label.with-helper{margin-bottom:var(--ic-space-xxxs)}ic-input-label.readonly{color:var(--ic-color-tertiary-text)}ic-input-label .helpertext{margin-top:var(--ic-space-xxxs)}ic-input-label .helpertext-normal{color:var(--ic-color-secondary-text)}ic-input-label .helpertext-readonly{color:var(--ic-color-tertiary-text)}ic-input-label .readonly-label{color:var(--ic-color-secondary-text)}ic-input-label .error-label{color:var(--ic-status-error)}ic-input-label .dark{color:var(--ic-architectural-white)}";const icon={[_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__.a.Warning]:_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.R,[_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__.a.Error]:_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.S,[_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__.a.Success]:_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.O},InputValidation=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLiveMode="polite",this.for=void 0,this.fullWidth=!1,this.message=void 0,this.status=""}componentDidLoad(){(0,_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.message,propName:"message"}],"Input Validation")}render(){const displayIcon=""!==this.status?icon[this.status]:"",id=(0,_helpers_451953f9_js__WEBPACK_IMPORTED_MODULE_2__.Q)(this.for);return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[this.status]:""!==this.status,fullwidth:this.fullWidth}},""!==displayIcon&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"status-icon":!0,[`icon-${this.status}`]:!0},innerHTML:displayIcon}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:"statustext"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-live":this.ariaLiveMode,id},this.message)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"validation-message-adornment"}))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};InputValidation.style="ic-input-validation{width:var(--input-width, 20rem);margin-top:var(--ic-space-xs);display:flex}ic-input-validation.fullwidth{width:100%}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-status-success)}ic-input-validation span.icon-error>svg{fill:var(--ic-status-error)}ic-input-validation span.icon-warning>svg{fill:var(--ic-status-warning)}ic-input-validation .statustext{flex-grow:1}"}}]);