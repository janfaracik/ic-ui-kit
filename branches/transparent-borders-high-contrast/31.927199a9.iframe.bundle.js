(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./dist/esm/helpers-e090fe7e.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return hexToRgb})),__webpack_require__.d(__webpack_exports__,"b",(function(){return rgbStrToObj})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getSlot})),__webpack_require__.d(__webpack_exports__,"d",(function(){return DEVICE_SIZES})),__webpack_require__.d(__webpack_exports__,"e",(function(){return isEmptyString})),__webpack_require__.d(__webpack_exports__,"f",(function(){return getThemeFromContext})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getInputHelperTextID})),__webpack_require__.d(__webpack_exports__,"h",(function(){return getInputValidationTextID})),__webpack_require__.d(__webpack_exports__,"i",(function(){return IC_DEVICE_SIZES})),__webpack_require__.d(__webpack_exports__,"j",(function(){return onComponentRequiredPropUndefined})),__webpack_require__.d(__webpack_exports__,"k",(function(){return addFormResetListener})),__webpack_require__.d(__webpack_exports__,"l",(function(){return checkResizeObserver})),__webpack_require__.d(__webpack_exports__,"m",(function(){return renderHiddenInput})),__webpack_require__.d(__webpack_exports__,"n",(function(){return removeHiddenInput})),__webpack_require__.d(__webpack_exports__,"o",(function(){return getInputDescribedByText})),__webpack_require__.d(__webpack_exports__,"p",(function(){return getCurrentDeviceSize})),__webpack_require__.d(__webpack_exports__,"q",(function(){return hasValidationStatus})),__webpack_require__.d(__webpack_exports__,"r",(function(){return isSlotUsed})),__webpack_require__.d(__webpack_exports__,"s",(function(){return getThemeForegroundColor})),__webpack_require__.d(__webpack_exports__,"t",(function(){return hasClassificationBanner})),__webpack_require__.d(__webpack_exports__,"u",(function(){return inheritAttributes})),__webpack_require__.d(__webpack_exports__,"v",(function(){return IC_INHERITED_ARIA})),__webpack_require__.d(__webpack_exports__,"w",(function(){return getNavItemParentDetails})),__webpack_require__.d(__webpack_exports__,"x",(function(){return onComponentPropUndefinedChange})),__webpack_require__.d(__webpack_exports__,"y",(function(){return getParentElementType})),__webpack_require__.d(__webpack_exports__,"z",(function(){return getSlotContent})),__webpack_require__.d(__webpack_exports__,"A",(function(){return removeFormResetListener})),__webpack_require__.d(__webpack_exports__,"B",(function(){return slotHasContent})),__webpack_require__.d(__webpack_exports__,"C",(function(){return handleHiddenFormButtonClick})),__webpack_require__.d(__webpack_exports__,"D",(function(){return getFilteredMenuOptions})),__webpack_require__.d(__webpack_exports__,"E",(function(){return debounceEvent})),__webpack_require__.d(__webpack_exports__,"F",(function(){return getLabelFromValue})),__webpack_require__.d(__webpack_exports__,"G",(function(){return isMobileOrTablet})),__webpack_require__.d(__webpack_exports__,"H",(function(){return getCssProperty})),__webpack_require__.d(__webpack_exports__,"I",(function(){return elementOverflowsX}));__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./dist/esm/types-dd515332.js"),IC_INHERITED_ARIA=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],IC_DEVICE_SIZES={XS:576,S:768,M:992,L:1200,XL:99999},IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]},inheritAttributes=function inheritAttributes(element){var attributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],attributeObject={};return attributes.forEach((function(attr){element.hasAttribute(attr)&&(null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr))})),attributeObject},debounceEvent=function debounceEvent(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function debounce(func){var timer,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(timer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timer=setTimeout.apply(void 0,[func,wait].concat(args))}},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.ic-input");null===input&&((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},removeHiddenInput=function removeHiddenInput(container){var input=container.querySelector("input.ic-input");null==input||input.remove()},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},getInputHelperTextID=function getInputHelperTextID(id){return id+"-helper-text"},getInputValidationTextID=function getInputValidationTextID(id){return id+"-validation-text"},getInputDescribedByText=function getInputDescribedByText(inputId,helperText,validationText){return((helperText?getInputHelperTextID(inputId):"")+" "+(validationText?getInputValidationTextID(inputId):"")).trim()},getThemeFromContext=function getThemeFromContext(el){var _a,themeFromEvent=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,blockColorParent=el.parentElement.closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){var parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark)?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Light:themeFromEvent}return _types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Default},isMobileOrTablet=function isMobileOrTablet(){var isMobileOrTablet=!1;return"maxTouchPoints"in navigator&&(isMobileOrTablet=navigator.maxTouchPoints>0),isMobileOrTablet},handleHiddenFormButtonClick=function handleHiddenFormButtonClick(form,button){var hiddenFormButton=document.createElement("button");hiddenFormButton.setAttribute("type",button.type),hiddenFormButton.style.display="none",form.appendChild(hiddenFormButton),hiddenFormButton.click(),hiddenFormButton.remove()},isEmptyString=function isEmptyString(value){return 0===value.trim().length},getLabelFromValue=function getLabelFromValue(value,options){var _a,ungroupedOptions=[];if(options.length>0)return options.map((function(option){option.children?option.children.map((function(option){return ungroupedOptions.push(option)})):ungroupedOptions.push(option)})),null===(_a=ungroupedOptions.find((function(option){return option.value===value})))||void 0===_a?void 0:_a.label},getFilteredMenuOptions=function getFilteredMenuOptions(options,includeDescriptions,searchString,position){return"anywhere"===position?options.filter((function(option){var _a;return includeDescriptions?option.label.toLowerCase().includes(searchString.toLowerCase())||(null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase().includes(searchString.toLowerCase())):option.label.toLowerCase().includes(searchString.toLowerCase())})):options.filter((function(option){var _a;return includeDescriptions?option.label.toLowerCase().startsWith(searchString.toLowerCase())||(null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase().startsWith(searchString.toLowerCase())):option.label.toLowerCase().startsWith(searchString.toLowerCase())}))},deviceSizeMatches=function deviceSizeMatches(size){return window.matchMedia("(max-width: "+size+"px)").matches},getCurrentDeviceSize=function getCurrentDeviceSize(){return deviceSizeMatches(DEVICE_SIZES.S)?DEVICE_SIZES.S:deviceSizeMatches(DEVICE_SIZES.M)?DEVICE_SIZES.M:deviceSizeMatches(DEVICE_SIZES.L)?DEVICE_SIZES.L:deviceSizeMatches(DEVICE_SIZES.XL)?DEVICE_SIZES.XL:DEVICE_SIZES.UNDEFINED},getCssProperty=function getCssProperty(cssVar){return getComputedStyle(document.documentElement).getPropertyValue(cssVar)},getThemeForegroundColor=function getThemeForegroundColor(){var themeRed=getCssProperty("--ic-theme-primary-r"),themeGreen=getCssProperty("--ic-theme-primary-g"),themeBlue=getCssProperty("--ic-theme-primary-b");return Math.round((299*parseInt(themeRed)+587*parseInt(themeGreen)+114*parseInt(themeBlue))/1e3)>128?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Light},getSlot=function getSlot(element,name){return element&&element.querySelector?element.querySelector('[slot="'+name+'"]'):null},slotHasContent=function slotHasContent(element,name){return null!==getSlot(element,name)},getSlotContent=function getSlotContent(element,name){var slot=getSlot(element,name);return slot?getSlotElements(slot):null},getSlotElements=function getSlotElements(slot){var slotContent=slot.firstElementChild;if(null!==slotContent){var elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:null}return null===slot?null:[slot]},getNavItemParentDetails=function getNavItemParentDetails(el){var navType={navType:"",parent:null};switch(getParentElementType(el)){case"IC-NAVIGATION-GROUP":navType=getNavItemParentDetails(el.parentElement);break;case"IC-TOP-NAVIGATION":navType={navType:"top",parent:getParentElement(el)};break;case"IC-SIDE-NAVIGATION":navType={navType:"side",parent:getParentElement(el)};break;case"IC-PAGE-HEADER":navType={navType:"page-header",parent:null}}return navType},DEVICE_SIZES={XS:Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),S:Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),M:Number(getCssProperty("--ic-breakpoint-md").replace("px","")),L:Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),XL:Number(getCssProperty("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},hasValidationStatus=function hasValidationStatus(status,disabled){return""!==status&&!disabled},isSlotUsed=function isSlotUsed(element,slotName){return!!element.querySelector('[slot="'+slotName+'"]')},onComponentPropUndefinedChange=function onComponentPropUndefinedChange(oldValue,newValue,callback){void 0===oldValue&&newValue!==oldValue&&callback()},onComponentRequiredPropUndefined=function onComponentRequiredPropUndefined(props,component){for(var i=0;i<props.length;i++){var _props$i=props[i],prop=_props$i.prop,propName=_props$i.propName;null==prop&&console.error("No "+propName+" specified for "+component+" component - prop '"+propName+"' (web components) / '"+kebabToCamelCase(propName)+"' (react) required")}},kebabToCamelCase=function kebabToCamelCase(kebabCase){for(var individualWords=(kebabCase=kebabCase.toLowerCase()).split("-"),camelCase=individualWords[0],i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=function checkResizeObserver(callbackFn){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},hex2dec=function hex2dec(v){return parseInt(v,16)},hexToRgb=function hexToRgb(hex){var c;return 4===hex.length?(c=hex.replace("#","").split(""),{r:hex2dec(c[0]+c[0]),g:hex2dec(c[1]+c[1]),b:hex2dec(c[2]+c[2])}):{r:hex2dec(hex.slice(1,3)),g:hex2dec(hex.slice(3,5)),b:hex2dec(hex.slice(5))}},rgbStrToObj=function rgbStrToObj(rgbStr){var colorRGB={r:null,g:null,b:null},rgb=rgbStr.substring(4,rgbStr.length-1).replace(/ /g,"").split(",");return colorRGB.r=Number(rgb[0]),colorRGB.g=Number(rgb[1]),colorRGB.b=Number(rgb[2]),colorRGB},elementOverflowsX=function elementOverflowsX(element){return element.scrollWidth>element.clientWidth},getParentElementType=function getParentElementType(child){return child.parentElement.tagName},getParentElement=function getParentElement(child){return child.parentElement},hasClassificationBanner=function hasClassificationBanner(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},getForm=function getForm(el){return el.closest("FORM")},addFormResetListener=function addFormResetListener(el,callbackFn){var form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=function removeFormResetListener(el,callbackFn){var form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)}},"./dist/esm/ic-switch.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ic_switch",(function(){return Switch}));__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm/helpers-e090fe7e.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var inputIds=0,Switch=function(){function Switch(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Switch),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.g)(this,hostRef),this.icChange=Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.c)(this,"icChange",7),this.icFocus=Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.c)(this,"icFocus",7),this.icBlur=Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.c)(this,"icBlur",7),this.inputId="ic-switch-input-"+inputIds++,this.handleChange=function(){_this.checkedState=!_this.checkedState,_this.icChange.emit({checked:_this.checkedState,value:_this.value})},this.onFocus=function(){_this.icFocus.emit()},this.onBlur=function(){_this.icBlur.emit()},this.handleFormReset=function(){_this.checkedState=_this.initiallyChecked},this.label=void 0,this.hideLabel=!1,this.helperText="",this.checked=!1,this.small=!1,this.disabled=!1,this.name=this.inputId,this.showState=!1,this.value="on",this.checkedState=!1,this.initiallyChecked=this.checked}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Switch,[{key:"componentWillLoad",value:function componentWillLoad(){this.checkedState=this.checked,Object(_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_4__.k)(this.el,this.handleFormReset)}},{key:"componentDidLoad",value:function componentDidLoad(){Object(_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_4__.j)([{prop:this.label,propName:"label"}],"Switch")}},{key:"disconnectedCallback",value:function disconnectedCallback(){Object(_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_4__.A)(this.el,this.handleFormReset)}},{key:"render",value:function render(){var _class,_class2,label=this.label,checkedState=this.checkedState,small=this.small,disabled=this.disabled,name=this.name,showState=this.showState,value=this.value,hideLabel=this.hideLabel,helperText=this.helperText,inputId=this.inputId;Object(_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_4__.m)(!0,this.el,name,checkedState?value:"",disabled);var describedBy=Object(_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_4__.o)(inputId,""!==helperText,!1);return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.a,null,Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("label",{class:(_class={},_class["ic-switch-container"]=!0,_class["ic-switch-disabled"]=disabled,_class["ic-switch-small"]=small,_class),htmlFor:inputId},!hideLabel&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("ic-input-label",{for:inputId,label:label,helperText:helperText,readonly:!0,disabled:disabled,class:(_class2={},_class2["ic-switch-label"]=!0,_class2["ic-switch-label-small"]=small,_class2)}),!hideLabel&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("span",{class:"ic-switch-line-break"}),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("input",{checked:checkedState,disabled:disabled,"aria-label":label,"aria-checked":checkedState?"true":"false","aria-describedby":describedBy,role:"switch",class:"ic-switch-input",type:"checkbox",name:"toggle",id:inputId,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange}),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("span",{class:"ic-switch-toggle"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("line",{class:"ic-switch-icon-line",x1:"9",y1:small?"2":"1",x2:"9",y2:small?"8":"9"})),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("circle",{class:"ic-switch-icon-circle",fill:"none",cx:"5",cy:"5",r:small?"3.335":"4.445"}))),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("slot",{name:"right-adornment"}),showState&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.e)("ic-typography",{"aria-hidden":"true",variant:"label",class:"ic-switch-checked-status"},checkedState?"On":"Off")))}},{key:"el",get:function get(){return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_3__.d)(this)}}]),Switch}();Switch.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}input{overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.ic-switch-container{display:flex;flex-wrap:wrap;align-items:center;gap:var(--ic-space-xxs);cursor:pointer}.ic-switch-label{margin-left:var(--ic-space-xxs);margin-bottom:var(--ic-space-sm)}.ic-switch-label-small{margin-bottom:10px}.ic-switch-toggle{display:flex;align-items:center;justify-content:space-around;width:64px;height:var(--ic-space-xl);position:relative;border-radius:100vw;background-color:var(--ic-architectural-200);border:1px solid var(--ic-architectural-700);box-sizing:border-box;transition:var(--ic-transition-duration-fast)}.ic-switch-line-break{flex:1 0 100%}.ic-switch-checked-status{padding-left:var(--ic-space-xxs)}.ic-switch-toggle::before{content:"";width:21.33px;height:21.33px;border-radius:50%;position:absolute;z-index:2;top:50%;left:5.33px;transform:translate(0, -50%);background-color:var(--ic-architectural-700);transition:var(--ic-transition-duration-slow)}.ic-switch-icon{display:inline-block;vertical-align:middle;width:10px;height:10px}.ic-switch-icon-circle,.ic-switch-icon-line{stroke-width:1}.ic-switch-icon-circle{stroke:var(--ic-architectural-700)}.ic-switch-icon-line{stroke:var(--ic-architectural-white)}@media (prefers-reduced-motion: reduce){.ic-switch-toggle::before{transition-duration:0ms}}.ic-switch-input:checked+.ic-switch-toggle{background-color:var(--ic-action-default);border:none}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-xl), -50%);background-color:var(--ic-architectural-white)}.ic-switch-input:not([disabled])+.ic-switch-toggle:hover::before{box-shadow:0 0 0 12px var(--ic-action-dark-bg-hover)}.ic-switch-input:not([disabled])+.ic-switch-toggle:active::before{box-shadow:0 0 0 12px var(--ic-action-dark-bg-active)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:hover::before{box-shadow:0 0 0 12px var(--ic-action-default-bg-hover)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:active::before{box-shadow:0 0 0 12px var(--ic-action-default-bg-active)}.ic-switch-input:focus:not([disabled])+.ic-switch-toggle,.ic-switch-input:focus-visible:not([disabled])+.ic-switch-toggle{box-shadow:0 0 0 1px var(--ic-architectural-white),\n    0 0 0 3px var(--ic-action-default),\n    0 0 0 8px var(--ic-action-default-active-alpha)}.ic-switch-disabled{cursor:default}.ic-switch-disabled .ic-switch-icon-circle{stroke:var(--ic-architectural-300)}.ic-switch-disabled .ic-switch-icon-line{stroke:var(--ic-action-default-bg-active)}.ic-switch-input:disabled+.ic-switch-toggle{background-color:var(--ic-architectural-80);border:1px dashed var(--ic-architectural-300)}.ic-switch-input:disabled~.ic-switch-checked-status{color:var(--ic-architectural-300)}.ic-switch-input:disabled+.ic-switch-toggle::before{background-color:var(--ic-architectural-300)}.ic-switch-input:disabled:checked+.ic-switch-toggle{background-color:var(--ic-status-info-background);border:1px dashed #98c9f5}.ic-switch-input:disabled:checked+.ic-switch-toggle::before{background-color:var(--ic-architectural-white)}.ic-switch-small{gap:var(--ic-space-xxxs)}.ic-switch-small .ic-switch-checked-status{padding-left:6px}.ic-switch-small .ic-switch-toggle{width:var(--ic-space-xxl);height:var(--ic-space-lg)}.ic-switch-small .ic-switch-toggle::before{width:var(--ic-space-md);height:var(--ic-space-md);left:var(--ic-space-xxs)}.ic-switch-small .ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-lg), -50%)}::slotted(*){margin-left:var(--ic-space-sm)}@media (forced-colors: active){.ic-switch-toggle::before,.ic-switch-input:checked+.ic-switch-toggle{border:var(--ic-hc-border)}}'},"./dist/esm/types-dd515332.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,"a",(function(){return IcThemeForegroundEnum})),__webpack_require__.d(__webpack_exports__,"b",(function(){return IcInformationStatus})),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))},"./node_modules/core-js/internals/number-parse-int.js":function(module,exports,__webpack_require__){var global=__webpack_require__("./node_modules/core-js/internals/global.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("./node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("./node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"./node_modules/core-js/modules/es.parse-int.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("./node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})}}]);