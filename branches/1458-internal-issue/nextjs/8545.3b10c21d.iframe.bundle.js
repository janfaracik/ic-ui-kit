"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[8545],{"../web-components/dist/esm/ic-search-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_search_bar:()=>SearchBar});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/helpers-f1ca9908.js"),inputIds=0,SearchBar=function(){function SearchBar(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,SearchBar),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icChange",7),this.icClear=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icClear",7),this.icInput=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icInput",7),this.icInputBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icInputBlur",7),this.icInputFocus=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icInputFocus",7),this.icOptionSelect=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icOptionSelect",7),this.icMenuChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icMenuChange",7),this.icClearBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icClearBlur",7),this.icRetryLoad=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icRetryLoad",7),this.icSubmitSearch=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icSubmitSearch",7),this.icSubmitSearchBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icSubmitSearchBlur",7),this.icSearchBarBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icSearchBarBlur",7),this.icSearchBarFocus=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icSearchBarFocus",7),this.assistiveHintEl=null,this.hasTimedOut=!1,this.inputId="ic-search-bar-input-".concat(inputIds++),this.menuCloseFromMenuChangeEvent=!1,this.menuId="".concat(this.inputId,"-menu"),this.preLoad=!0,this.preventSubmit=!1,this.prevNoOption=!1,this.retryButtonClick=!1,this.truncateValue=!1,this.handleClear=function(ev){var keyboardEvent=ev;"click"!==ev.type&&"Enter"!==keyboardEvent.code&&"Space"!==keyboardEvent.code||(_this.value="",_this.inputEl.value="",_this.loading=!1,clearTimeout(_this.timeoutTimer),_this.filteredOptions=_this.options,_this.el.setFocus(),_this.icClear.emit(),ev.preventDefault(),_this.preventSubmit=!0)},this.onInput=function(ev){_this.value=ev.target.value;var noOptions=[(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},_this.labelField,_this.emptyOptionListText),_this.valueField,"")];if(_this.options.length>0&&(_this.setMenuChange(!0),_this.preLoad=!1,!1===_this.disableFilter)){var rawFilteredOptions=(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.B)(_this.options,!1,_this.value,"anywhere",_this.labelField);_this.filteredOptions=rawFilteredOptions.length>0?rawFilteredOptions:noOptions}_this.showClearButton||_this.handleShowClearButton(!0),_this.debounceAriaLiveUpdate()},this.onInputBlur=function(ev){var value=ev.target.value,nextFocus=ev.relatedTarget;_this.icInputBlur.emit({value,relatedTarget:nextFocus})},this.onInputFocus=function(ev){var value=ev.target.value;_this.icInputFocus.emit({value}),_this.handleShowClearButton(!0)},this.handleClearBlur=function(ev){var nextFocus=ev.relatedTarget;_this.icClearBlur.emit({relatedTarget:nextFocus}),_this.clearButtonFocused=!1},this.handleSubmitSearchBlur=function(ev){var nextFocus=ev.relatedTarget;_this.icSubmitSearchBlur.emit({relatedTarget:nextFocus}),_this.searchSubmitFocused=!1},this.handleMouseDown=function(ev){ev.preventDefault()},this.handleSubmitSearchFocus=function(){_this.searchSubmitFocused=!0},this.handleSubmitSearch=function(){_this.highlightedValue&&(_this.value=_this.highlightedValue),_this.highlightedValue=void 0,_this.icSubmitSearch.emit({value:_this.value});var form=_this.el.closest("FORM");_this.searchSubmitButton&&form&&!_this.preventSubmit&&(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.C)(form,_this.searchSubmitButton)},this.handleSubmitSearchKeyDown=function(ev){" "===ev.key&&(ev.preventDefault(),_this.handleSubmitSearch())},this.handleRetry=function(ev){_this.retryViaKeyPress="Enter"===ev.detail.keyPressed,_this.icRetryLoad.emit({value:ev.detail.value}),_this.triggerLoading(),_this.retryButtonClick=!0},this.triggerLoading=function(){var loadingOption=[(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},_this.labelField,_this.loadingLabel),_this.valueField,""),"loading",!0)];_this.filteredOptions!==loadingOption&&(_this.filteredOptions=loadingOption),_this.timeout&&(_this.timeoutTimer=window.setTimeout((function(){_this.filteredOptions=[(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},_this.labelField,_this.loadingErrorLabel),_this.valueField,""),"timedOut",!0)]}),_this.timeout))},this.handleOptionSelect=function(ev){ev.detail.label!==_this.emptyOptionListText?(_this.value=ev.detail.value,_this.icOptionSelect.emit({value:_this.value})):_this.el.setFocus()},this.handleMenuOptionHighlight=function(ev){var _a,optionValue=null===(_a=ev.detail.optionId)||void 0===_a?void 0:_a.replace("".concat(_this.menuId,"-"),"");optionValue&&(_this.highlightedValue=optionValue),ev.detail.optionId?_this.ariaActiveDescendant=ev.detail.optionId:_this.ariaActiveDescendant=void 0},this.handleMenuChange=function(ev){_this.setMenuChange(ev.detail.open),ev.detail.open||(_this.handleMenuCloseFromMenuChange(!0),(void 0===ev.detail.focusInput||ev.detail.focusInput)&&_this.el.setFocus())},this.setMenuChange=function(open){_this.open!==open&&(_this.open=open,_this.icMenuChange.emit({open}))},this.handleHostFocus=function(){_this.options&&_this.value&&!_this.menuCloseFromMenuChangeEvent&&_this.setMenuChange(!0),_this.handleTruncateValue(!1),_this.icSearchBarFocus.emit()},this.handleHostBlur=function(ev){var nextFocus=ev.relatedTarget;_this.open&&_this.options&&nextFocus!==_this.menu&&!_this.retryViaKeyPress&&!_this.retryButtonClick&&_this.setMenuChange(!1),(_this.retryButtonClick||_this.retryViaKeyPress)&&_this.inputEl.setFocus(),_this.handleShowClearButton(!1),_this.handleMenuCloseFromMenuChange(!1),_this.handleTruncateValue(!0),_this.icSearchBarBlur.emit({relatedTarget:nextFocus,value:_this.value}),_this.retryViaKeyPress=!1,_this.retryButtonClick=!1},this.handleShowClearButton=function(visible){_this.showClearButton=visible},this.handleFocusClearButton=function(){_this.clearButtonFocused=!0},this.handleMenuCloseFromMenuChange=function(fromEvent){_this.menuCloseFromMenuChangeEvent=fromEvent},this.handleTruncateValue=function(truncate){_this.truncateValue=truncate},this.renderAssistiveHintEl=function(){var _a,_b,input=null===(_b=null===(_a=_this.el.shadowRoot.querySelector("ic-text-field"))||void 0===_a?void 0:_a.shadowRoot)||void 0===_b?void 0:_b.querySelector("#".concat(_this.inputId));input&&Object.keys(input).length>0&&_this.hasOptionsOrFilterDisabled()&&(_this.assistiveHintEl=document.createElement("span"),_this.assistiveHintEl.innerText=_this.hintText,_this.assistiveHintEl.id="".concat(_this.inputId,"-assistive-hint"),_this.assistiveHintEl.style.display="none",void 0!==input.after&&input.after(_this.assistiveHintEl))},this.updateSearchResultAriaLive=function(){var searchResultsStatusEl=_this.el.shadowRoot.querySelector(".search-results-status");searchResultsStatusEl&&(!_this.open||""===_this.value||_this.value.length<_this.charactersUntilSuggestion?searchResultsStatusEl.innerText="":_this.hasOptionsOrFilterDisabled()&&_this.filteredOptions.length>0&&_this.open&&!_this.filteredOptions[0].loading&&(_this.hadNoOptions()?searchResultsStatusEl.innerText=_this.emptyOptionListText:searchResultsStatusEl.innerText="".concat(_this.filteredOptions.length," result").concat(_this.filteredOptions.length>1?"s":""," available")))},this.hasOptionsOrFilterDisabled=function(){return _this.options.length>0||_this.disableFilter},this.hadNoOptions=function(){return 1===_this.filteredOptions.length&&_this.filteredOptions[0][_this.labelField]===_this.emptyOptionListText&&"navigation"===_this.searchMode},this.isSubmitDisabled=function(){var valueNotSet=void 0===_this.value||null===_this.value||""===_this.value,valueLengthLess=_this.value.length<_this.charactersUntilSuggestion;return valueNotSet||valueLengthLess||_this.disabled||_this.hadNoOptions()||_this.hasTimedOut||_this.loading},this.highlightFirstOptionAfterNoResults=function(){_this.prevNoOption&&_this.menu&&!_this.hasTimedOut&&(_this.menu.handleSetFirstOption(),_this.prevNoOption=!1),_this.filteredOptions.find((function(filteredOption){return filteredOption[_this.labelField]===_this.emptyOptionListText||filteredOption[_this.labelField]===_this.loadingErrorLabel||filteredOption[_this.labelField]===_this.loadingLabel}))&&(_this.prevNoOption=!0)},this.ariaActiveDescendant=void 0,this.clearButtonFocused=!1,this.highlightedValue=void 0,this.open=!1,this.searchSubmitFocused=!1,this.showClearButton=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.charactersUntilSuggestion=2,this.disabled=!1,this.disableFilter=!1,this.debounce=0,this.emptyOptionListText="No results found",this.focusOnLoad=!1,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.hintText="When autocomplete results are available use the up and down arrows to choose and press enter to select",this.label=void 0,this.labelField="label",this.loading=!1,this.loadingErrorLabel="Loading Error",this.loadingLabel="Loading...",this.name=this.inputId,this.placeholder="Search",this.readonly=!1,this.required=!1,this.searchMode="navigation",this.size="default",this.small=!1,this.spellcheck=!1,this.timeout=void 0,this.valueField="value",this.filteredOptions=[],this.options=[],this.value=""}var _setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(SearchBar,[{key:"loadingHandler",value:function loadingHandler(newValue){newValue&&!this.hasTimedOut&&(this.preLoad=!1,this.triggerLoading())}},{key:"filteredOptionsHandler",value:function filteredOptionsHandler(newOptions){this.hasTimedOut=newOptions.some((function(opt){return opt.timedOut}))}},{key:"watchOptionsHandler",value:function watchOptionsHandler(newOptions){if(this.disableFilter&&!this.hasTimedOut)if(this.loading=!1,clearTimeout(this.timeoutTimer),newOptions.length>0)this.filteredOptions=newOptions;else{if(this.hadNoOptions())return;this.setMenuChange(!0),!this.preLoad&&(this.filteredOptions=[(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},this.labelField,this.emptyOptionListText),this.valueField,"")]),this.preLoad=!0}this.debounceAriaLiveUpdate()}},{key:"watchValueHandler",value:function watchValueHandler(newValue){this.inputEl&&this.options&&(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.E)(newValue,this.options,this.valueField,this.labelField)?this.inputEl.value=(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.E)(newValue,this.options,this.valueField,this.labelField):this.inputEl&&this.inputEl.value!==newValue&&(this.inputEl.value=newValue)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.assistiveHintEl&&this.assistiveHintEl.remove()}},{key:"componentWillLoad",value:function componentWillLoad(){this.watchValueHandler(this.value),(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.j)(this.disabled,this.el),this.small&&(this.size="small")}},{key:"componentDidLoad",value:function componentDidLoad(){this.focusOnLoad&&this.el.setFocus(),this.hasOptionsOrFilterDisabled()&&(this.renderAssistiveHintEl(),this.disableFilter&&(this.filteredOptions=this.options)),(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.a)([{prop:this.label,propName:"label"}],"Search Bar"),void 0!==this.inputEl&&(this.anchorEl=this.inputEl.shadowRoot.querySelector("ic-input-component-container"))}},{key:"componentWillRender",value:function componentWillRender(){this.highlightFirstOptionAfterNoResults()}},{key:"handleKeyDown",value:function handleKeyDown(ev){var keyEv=ev.detail.event;this.menu&&this.open&&this.menu.handleKeyboardOpen(keyEv)}},{key:"handleKeyUp",value:function handleKeyUp(ev){if("Enter"===ev.key){if(this.preventSubmit||this.isSubmitDisabled())return;this.handleSubmitSearch(),this.setMenuChange(!1)}"Escape"===ev.key&&this.setMenuChange(!1),this.preventSubmit&&(this.preventSubmit=!1)}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.retryViaKeyPress=!1,this.retryButtonClick=!1,this.inputEl&&this.inputEl.setFocus();case 3:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"debounceAriaLiveUpdate",value:function debounceAriaLiveUpdate(){var _this2=this;clearTimeout(this.debounceAriaLive),this.debounceAriaLive=window.setTimeout((function(){_this2.updateSearchResultAriaLive()}),500)}},{key:"render",value:function render(){var describedById,_this3=this,inputId=this.inputId,name=this.name,label=this.label,required=this.required,small=this.small,size=this.size,placeholder=this.placeholder,helperText=this.helperText,disabled=this.disabled,value=this.value,readonly=this.readonly,spellcheck=this.spellcheck,fullWidth=this.fullWidth,options=this.options,open=this.open,hideLabel=this.hideLabel,menuId=this.menuId,ariaActiveDescendant=this.ariaActiveDescendant,truncateValue=this.truncateValue,autofocus=this.autofocus,autocapitalize=this.autocapitalize,autocomplete=this.autocomplete,filteredOptions=this.filteredOptions,disabledMode=!(!readonly&&!disabled),describedBy=(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.q)(inputId,""!==helperText,!1).trim();describedById=""!==describedBy&&this.hasOptionsOrFilterDisabled()?"".concat(describedBy," ").concat(this.inputId,"-assistive-hint"):this.hasOptionsOrFilterDisabled()?"".concat(this.inputId,"-assistive-hint"):""!==describedBy?describedBy:void 0;var expanded,disabledText=disabledMode&&!readonly,hasSuggestedSearch=value&&this.hasOptionsOrFilterDisabled(),menuOpen=hasSuggestedSearch&&open&&filteredOptions.length>0,menuRendered=menuOpen&&value.length>=this.charactersUntilSuggestion,isOrHasLoaded=1===this.filteredOptions.length&&(this.filteredOptions[0][this.labelField]===this.loadingLabel||filteredOptions[0][this.labelField]===this.loadingErrorLabel);return expanded=options.length>0?menuOpen?"true":"false":void 0,(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.n)(!0,this.el,name,value,disabledMode),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"search",!0),"fullwidth",fullWidth),"disabled",disabled),"small","small"===size),onFocus:this.handleHostFocus,onBlur:this.handleHostBlur},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-text-field",{ref:function ref(el){return _this3.inputEl=el},inputId,label,helperText,required,disabled:disabledText,readonly,size,hideLabel,fullWidth,name,truncateValue,value:options&&(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.E)(value,options,this.valueField,this.labelField)?(0,_helpers_f1ca9908_js__WEBPACK_IMPORTED_MODULE_3__.E)(value,options,this.valueField,this.labelField):value,placeholder,onInput:this.onInput,onBlur:this.onInputBlur,onFocus:this.onInputFocus,"aria-label":hideLabel?label:"","aria-describedby":describedById,"aria-owns":menuRendered?menuId:void 0,"aria-haspopup":options.length>0?"listbox":void 0,ariaExpanded:expanded,ariaActiveDescendant,"aria-autocomplete":hasSuggestedSearch?"list":void 0,role:hasSuggestedSearch?"combobox":void 0,autocomplete,autocapitalize,autoFocus:autofocus,spellcheck,inputmode:"search",debounce:this.debounce},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{"clear-button-container":!0,"clear-button-visible":value&&!disabledMode&&this.showClearButton},slot:"clear-button"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{id:"clear-button",class:"clear-button","aria-label":"Clear",innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M15.8327 5.34199L14.6577 4.16699L9.99935 8.82533L5.34102 4.16699L4.16602 5.34199L8.82435 10.0003L4.16602 14.6587L5.34102 15.8337L9.99935 11.1753L14.6577 15.8337L15.8327 14.6587L11.1743 10.0003L15.8327 5.34199Z" fill="currentColor"/>\n</svg>\n',onClick:this.handleClear,onMouseDown:this.handleMouseDown,size,onFocus:this.handleFocusClearButton,onBlur:this.handleClearBlur,onKeyDown:this.handleClear,type:"submit",variant:"icon",appearance:this.clearButtonFocused?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Light:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"divider"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{"search-submit-button-container":!0,"search-submit-button-disabled":this.isSubmitDisabled()},slot:"search-submit-button"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{id:"search-submit-button","aria-label":"Search",ref:function ref(el){return _this3.searchSubmitButton=el},class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"search-submit-button",!0),"search-submit-button-small",!!small),disabled:this.isSubmitDisabled(),innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n    <path d="M13.1292 11.8792H12.4708L12.2375 11.6542C13.0542 10.7042 13.5458 9.47083 13.5458 8.12916C13.5458 5.13749 11.1208 2.71249 8.12916 2.71249C5.13749 2.71249 2.71249 5.13749 2.71249 8.12916C2.71249 11.1208 5.13749 13.5458 8.12916 13.5458C9.47083 13.5458 10.7042 13.0542 11.6542 12.2375L11.8792 12.4708V13.1292L16.0458 17.2875L17.2875 16.0458L13.1292 11.8792ZM8.12916 11.8792C6.05416 11.8792 4.37916 10.2042 4.37916 8.12916C4.37916 6.05416 6.05416 4.37916 8.12916 4.37916C10.2042 4.37916 11.8792 6.05416 11.8792 8.12916C11.8792 10.2042 10.2042 11.8792 8.12916 11.8792Z" fill="currentColor"/>\n</svg>',size,onClick:this.handleSubmitSearch,onMouseDown:this.handleMouseDown,onBlur:this.handleSubmitSearchBlur,onFocus:this.handleSubmitSearchFocus,onKeyDown:this.handleSubmitSearchKeyDown,type:"submit",variant:"icon",appearance:this.searchSubmitFocused?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Light:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Default})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{"menu-container":!0,fullwidth:fullWidth},slot:"menu"},menuRendered&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-menu",{class:{"no-results":this.hadNoOptions()||isOrHasLoaded},activationType:"manual",anchorEl:this.anchorEl,autoFocusOnSelected:!1,searchMode:this.searchMode,inputEl:this.inputEl,inputLabel:label,ref:function ref(el){return _this3.menu=el},small:"small"===size,fullWidth,menuId,open:!!menuRendered,options:filteredOptions,onMenuOptionSelect:this.handleOptionSelect,onMenuStateChange:this.handleMenuChange,onMenuOptionId:this.handleMenuOptionHighlight,onRetryButtonClicked:this.handleRetry,parentEl:this.el,value,labelField:this.labelField,valueField:this.valueField}))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{"aria-live":"polite",role:"status",class:"search-results-status"}))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{loading:["loadingHandler"],filteredOptions:["filteredOptionsHandler"],options:["watchOptionsHandler"],value:["watchValueHandler"]}}}]),SearchBar}();SearchBar.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.search){--divider-height:1.5rem}:host(.search.small){--divider-height:1rem}:host(.fullwidth){width:100%}:host(.search) .disabled:hover{border-color:var(--ic-architectural-200)}:host(.search.disabled) .disabled svg{color:var(--ic-architectural-200)}:host(.search) .disabled svg{color:var(--ic-architectural-400)}.clear-button-container{align-items:center;margin-right:var(--ic-space-1px);display:none;visibility:hidden}.clear-button{border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus,.clear-button:active{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus,.clear-button:active *{fill:white}.clear-button-visible{visibility:visible;display:flex}.search-submit-button-container{display:flex;align-items:center}.search-submit-button-disabled .ic-tooltip-container{display:none !important}.search-submit-button:focus,.search-submit-button:active{background-color:var(--ic-focus-blue) !important;box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow) !important;border-radius:var(--ic-space-xxs)}.search-submit-button:focus,.search-submit-button:active *{fill:white}.divider{width:var(--ic-border-width);background-color:var(--ic-action-dark-active);height:var(--divider-height)}:host(.dark) .divider{background-color:var(--ic-architectural-200)}.menu-container{width:var(--input-width, 20rem);position:relative;top:var(--ic-space-xxxs)}.menu-container.fullwidth{width:100%}.no-results{cursor:not-allowed}.search-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);margin-bottom:calc(-1 * var(--ic-space-1px));margin-right:calc(-1 * var(--ic-space-1px));overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}'}}]);