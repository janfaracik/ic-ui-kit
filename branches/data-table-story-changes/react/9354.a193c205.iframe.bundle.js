/*! For license information please see 9354.a193c205.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[9354],{"../web-components/dist/esm/close-icon-2f02b42a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-toast.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toast:()=>Toast});__webpack_require__("./node_modules/core-js/modules/es.string.repeat.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.some.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("../web-components/dist/esm/index-36ab8165.js"),_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../web-components/dist/esm/close-icon-2f02b42a.js"),_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../web-components/dist/esm/helpers-8617aaa0.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return{value:void 0,done:!0}}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable||""===iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}throw new TypeError(typeof iterable+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Toast=function(){function Toast(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Toast),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.r)(this,hostRef),this.icDismiss=(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.c)(this,"icDismiss",7),this.interactiveElements=[],this.dismissAction=function(){_this.icDismiss.emit()},this.handleProgressChange=function(){_this.timerProgress-=1e3/_this.autoDismissTimeout*100},this.timerProgress=100,this.visible=!1,this.autoDismissTimeout=5e3,this.dismissButtonAriaLabel="dismiss",this.dismissMode="manual",this.heading=void 0,this.message=void 0,this.neutralIconAriaLabel=void 0,this.variant=void 0}var _setVisible;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Toast,[{key:"disconnectedCallback",value:function disconnectedCallback(){window.clearTimeout(this.dismissTimeout),window.clearInterval(this.timerRefreshInterval)}},{key:"componentWillLoad",value:function componentWillLoad(){var _a,_b;this.handleLongText(this.heading.length>70,(null===(_a=this.message)||void 0===_a?void 0:_a.length)>140),this.autoDismissTimeout<5e3&&(this.autoDismissTimeout=5e3),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.i)(this.el,"action")&&(this.dismissMode="manual"),this.isManual="manual"===this.dismissMode,(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.i)(this.el,"neutral-icon")&&(this.variant="neutral"),"neutral"===this.variant&&(this.neutralVariantLabel=null!==(_b=this.neutralIconAriaLabel)&&void 0!==_b?_b:_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.V[this.variant].ariaLabel),this.isManual&&(this.el.setAttribute("aria-label",this.variant?this.neutralVariantLabel||_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.V[this.variant].ariaLabel:this.heading),(this.variant||this.message)&&this.el.setAttribute("aria-description",this.variant?this.heading+(void 0!==this.message?". "+this.message:""):this.message))}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.a)([{prop:this.heading,propName:"heading"}],"Toast");var actionContent=(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.H)(this.el,"action"),dismissButton=this.el.shadowRoot.querySelector("ic-button");actionContent&&this.interactiveElements.push(actionContent),dismissButton&&this.interactiveElements.push(dismissButton)}},{key:"handleDismiss",value:function handleDismiss(){this.visible=!1,clearInterval(this.timerRefreshInterval),this.timerProgress=100}},{key:"handleKeyboard",value:function handleKeyboard(ev){if(this.isManual&&this.visible)switch(ev.key){case"Tab":ev.preventDefault(),this.findNextInteractiveElement(ev.shiftKey).setFocus();break;case"Escape":!ev.repeat&&this.dismissAction(),ev.stopImmediatePropagation()}}},{key:"handleTimer",value:function handleTimer(ev){if(!this.isManual)switch(ev.type){case"mouseenter":window.clearTimeout(this.dismissTimeout),window.clearInterval(this.timerRefreshInterval),this.timerProgress=100;break;case"mouseleave":this.dismissTimeout=window.setTimeout(this.dismissAction,this.autoDismissTimeout),this.timerRefreshInterval=window.setInterval(this.handleProgressChange,1e3)}}},{key:"setVisible",value:(_setVisible=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var _this2=this;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(this.visible||(this.visible=!0),this.isManual){_context.next=7;break}return this.dismissTimeout=window.setTimeout(this.dismissAction,this.autoDismissTimeout),this.timerRefreshInterval=window.setInterval(this.handleProgressChange,1e3),_context.abrupt("return",null);case 7:return window.setTimeout((function(){return _this2.interactiveElements[0].setFocus()}),200),_context.abrupt("return",document.activeElement);case 9:case"end":return _context.stop()}}),_callee,this)}))),function setVisible(){return _setVisible.apply(this,arguments)})},{key:"handleLongText",value:function handleLongText(headingTooLong,messageTooLong){(messageTooLong||headingTooLong)&&console.error("Too many characters in toast "+(headingTooLong?"heading":"")+(headingTooLong&&messageTooLong?" and ":"")+(messageTooLong?"message":"")+". Refer to character limits specified in the prop description")}},{key:"findNextInteractiveElement",value:function findNextInteractiveElement(isBackwards){var currentIndex,_this3=this,first=this.interactiveElements[0],last=this.interactiveElements[this.interactiveElements.length-1],source=isBackwards?first:last,target=isBackwards?last:first;return this.isActive(source)?target:this.interactiveElements.some((function(el,index){return!!_this3.isActive(el)&&(currentIndex=index,!0)}))?this.interactiveElements[currentIndex+(isBackwards?-1:1)]:first}},{key:"isActive",value:function isActive(targetEl){return targetEl===this.el?!!this.el.shadowRoot.activeElement:document.activeElement===targetEl}},{key:"render",value:function render(){var _class,_class2,_class3,variant=this.variant,heading=this.heading,message=this.message,visible=this.visible,isManual=this.isManual,dismissButtonAriaLabel=this.dismissButtonAriaLabel;return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)(_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.H,{class:(_class={},_class.hidden=!visible,_class),role:isManual?"dialog":"status"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"container"},variant&&visible&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"toast-icon-container"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:(_class2={},_class2.divider=!0,_class2["divider-"+variant]=!0,_class2)}),"neutral"===variant?(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("slot",{name:"neutral-icon"}):(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("span",{class:"toast-icon",innerHTML:_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.V[variant].icon})),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:(_class3={},_class3["toast-content"]=!0,_class3["no-icon"]="neutral"===variant&&!(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.i)(this.el,"neutral-icon"),_class3)},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"toast-message"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-typography",{variant:"subtitle-large"},visible&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("h5",null,heading)),message&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-typography",{variant:"body"},visible&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("p",null,message))),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_28__.i)(this.el,"action")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"toast-action-container"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("slot",{name:"action"}))),isManual?(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-button",{id:"dismiss-button",innerHTML:_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_30__.c,onClick:this.dismissAction,variant:"icon",appearance:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_29__.I.Light,"aria-label":dismissButtonAriaLabel}):(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-loading-indicator",{class:"toast-dismiss-timer",appearance:"light",size:"icon",progress:this.timerProgress})))}},{key:"el",get:function get(){return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_27__.g)(this)}}]),Toast}();Toast.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--bottom-position:var(--ic-space-xl);position:fixed;bottom:var(--bottom-position);left:50%;transform:translate(-50%);animation:fadein var(--ic-transition-duration-slow) ease-in-out;z-index:var(--ic-z-index-toast)}:host(.hidden){display:none;animation:fadeout var(--ic-transition-duration-slow) ease-in-out}.container{max-width:32.5rem;min-width:18rem;box-shadow:var(--ic-elevation-overlay);min-height:3.5rem;background-color:var(--ic-architectural-800);color:var(--ic-color-white-text);display:flex;align-items:center;position:relative;border-radius:var(--ic-border-radius)}.toast-icon-container{height:100%;display:flex;align-items:center}.divider{height:100%;width:var(--ic-space-xs);position:absolute;border-radius:var(--ic-space-xxxs) 0 0 var(--ic-space-xxxs)}.divider-neutral{background-color:var(--ic-status-unknown)}.divider-info{background-color:var(--ic-status-info-contrast)}.divider-warning{background-color:var(--ic-status-warning-contrast)}.divider-error{background-color:var(--ic-status-error-contrast)}.divider-success{background-color:var(--ic-status-success-contrast)}.toast-icon,::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg);margin-left:var(--ic-space-md)}:host([variant="neutral"]) .toast-icon svg,::slotted(svg){fill:var(--ic-status-unknown)}:host([variant="info"]) .toast-icon svg{fill:var(--ic-status-info-contrast)}:host([variant="warning"]) .toast-icon svg{fill:var(--ic-status-warning-contrast)}:host([variant="error"]) .toast-icon svg{fill:var(--ic-status-error-contrast)}:host([variant="success"]) .toast-icon svg{fill:var(--ic-status-success-contrast)}.toast-content{margin-left:var(--ic-space-xs);width:100%}.no-icon{margin-left:var(--ic-space-md)}.toast-message{padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}.toast-action-container{padding-bottom:var(--ic-space-md)}ic-button,.toast-dismiss-timer{padding:var(--ic-space-xs)}@media (max-width: 576px){:host{--bottom-position:var(--ic-space-lg);width:calc(100% - 2 * var(--ic-space-md))}}@media (min-width: 993px){:host{--bottom-position:calc(var(--ic-space-xl) + var(--ic-space-xs))}}@media (forced-colors: active){.container{border:var(--ic-hc-border)}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:var(--bottom-position);opacity:1}}@keyframes fadeout{from{bottom:var(--bottom-position);opacity:1}to{bottom:0;opacity:0}}'}}]);