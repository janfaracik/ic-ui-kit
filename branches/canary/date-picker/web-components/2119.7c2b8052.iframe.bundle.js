"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2119],{"./dist/esm/ic-page-header.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_page_header:()=>PageHeader});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-da46cd23.js");__webpack_require__("./dist/esm/types-6f6b41a5.js");const PageHeader=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.resizeObserver=null,this.resizeObserverCallback=()=>{this.reverseOrder&&(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"actions")&&this.applyReverseOrder()},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.resizeObserverCallback()})),this.resizeObserver.observe(this.el)},this.applyReverseOrder=()=>{const currSize=(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.e)();currSize!==this.deviceSize&&(this.deviceSize=currSize);const actionArea=this.el.shadowRoot.querySelector("div.action-area"),actionHeights=[];for(let i=0;i<this.actionContent.length;i++){let actionHeight=this.actionContent[i].offsetHeight;void 0===actionHeight&&(actionHeight=0),actionHeights.push(actionHeight)}const max=Math.max(...actionHeights);let actionAreaHeight=actionArea.offsetHeight;void 0===actionAreaHeight&&(actionAreaHeight=0);const appendActionContent=()=>{this.actionContent=this.actionContent.reverse(),this.actionContent.forEach((btn=>{this.el.append(btn)})),this.areButtonsReversed=!this.areButtonsReversed};(this.deviceSize>_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&actionAreaHeight<=max&&!this.areButtonsReversed||(this.deviceSize>_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&actionAreaHeight>max||this.deviceSize<=_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.D.S)&&this.areButtonsReversed)&&appendActionContent()},this.actionContent=void 0,this.areButtonsReversed=!1,this.deviceSize=_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.aligned="left",this.border=!0,this.heading=void 0,this.reverseOrder=!1,this.size="default",this.small=!1,this.sticky=!1,this.stickyDesktopOnly=!1,this.subheading=void 0}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentWillLoad(){this.actionContent=Array.from(this.el.querySelectorAll('[slot="actions"]'))}componentDidLoad(){(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver)}render(){const{small,size,border,heading,subheading,aligned,sticky,stickyDesktopOnly}=this,navAriaLabel=heading?`${heading} page sections`:"navigation-landmark-page-header";return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{sticky,"sticky-desktop":!sticky&&stickyDesktopOnly}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("header",{class:{"border-bottom":border,tabs:(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"tabs")}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{aligned,fullHeight:(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"tabs")},(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"breadcrumbs")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"breadcrumb-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"breadcrumbs"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"main-content"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"title-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"header-content"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:small||"small"===size?"h4":"h2",class:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",null,heading))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading-adornment"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"subheading"},subheading&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body",class:{subheading:!0,small:small||"small"===size}},subheading)))),(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"actions")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"action-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"actions"})),(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"input")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"input-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"input"}))),((0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"stepper")||(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"tabs"))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"navigation-area"},(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"stepper")&&!(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"tabs")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"stepper"}),(0,_helpers_da46cd23_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"tabs")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":navAriaLabel},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-horizontal-scroll",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"tabs-slot"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"tabs"}))))))))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};PageHeader.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;z-index:var(--ic-z-index-page-header)}:host(.sticky){position:sticky;top:0;box-shadow:var(--ic-elevation-overlay);z-index:var(--ic-z-index-sticky-page-header)}header{background-color:var(--ic-architectural-40)}header.border-bottom{border-bottom:var(--ic-border-default)}header.tabs{padding-top:var(--ic-space-md)}.breadcrumb-area{margin-bottom:var(--ic-space-md)}.main-content{display:grid;grid-template-columns:auto 1fr;grid-template-areas:"title-area action-area"\n    "input-area action-area";-moz-column-gap:var(--ic-space-md);column-gap:var(--ic-space-md);justify-content:space-between;width:100%}.title-area{display:flex;flex-direction:column;flex:1;min-width:19rem;grid-area:title-area}.header-content{display:flex;align-items:center;width:100%;flex-wrap:wrap;row-gap:var(--ic-space-xs);-moz-column-gap:var(--ic-space-md);column-gap:var(--ic-space-md)}.heading{display:inline-block;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}.subheading.small{margin-top:var(--ic-space-xs)}.action-area{display:flex;gap:var(--ic-space-md);flex-flow:row wrap;justify-self:end;justify-content:flex-end;height:-moz-fit-content;height:fit-content;grid-area:action-area}.input-area,.navigation-area{margin-top:var(--ic-space-md);width:100%}.tabs-slot{display:flex;overflow-x:auto;padding:0.5rem;margin:-0.5rem}.tabs-slot::-webkit-scrollbar{display:none}.input-area{grid-area:input-area}@media screen and (max-width: 576px){::slotted(ic-text-field){--input-width:100%;max-width:20rem}.main-content{grid-template-areas:"title-area"\n      "action-area"\n      "input-area";justify-content:flex-start}.title-area{min-width:0}.action-area{min-width:100%;margin-top:var(--ic-space-md);justify-content:start}}@media screen and (min-width: 992px){:host(.sticky-desktop){position:sticky;top:0;box-shadow:var(--ic-elevation-overlay);z-index:var(--ic-z-index-sticky-page-header)}}'}}]);