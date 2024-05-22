"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[5181],{"../web-components/dist/esm/ic-pagination.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination:()=>Pagination});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-4dcf8c16.js"),console=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),__webpack_require__("./node_modules/console-browserify/index.js")),paginationNextPrevious='<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.08748 0L0.912476 1.175L4.72914 5L0.912476 8.825L2.08748 10L7.08748 5L2.08748 0Z" fill="currentColor"/>\n</svg>\n',paginationFirstLast='<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.1709 8.825L7.34589 5L11.1709 1.175L9.99589 0L4.99589 5L9.99589 10L11.1709 8.825ZM0.829224 0H2.49589V10H0.829224V0Z" fill="currentColour"/>\n</svg>',Pagination=function(){function Pagination(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,Pagination),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.icPageChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icPageChange",7),this.handleClickFirst=function(){_this.currentPage=1,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickPrevious=function(){_this.currentPage--,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickNext=function(){_this.currentPage++,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickLast=function(){_this.currentPage=_this.pages,_this.icPageChange.emit({value:_this.currentPage})},this.firstButton=function(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{id:"first-page-button","aria-label":"Go to first page",appearance:_this.appearance,onClick:_this.handleClickFirst,class:"page-button first-last",disabled:1===_this.currentPage||_this.disabled,variant:"icon",innerHTML:paginationFirstLast})},this.previousButton=function(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{id:"previous-page-button","aria-label":"Go to previous page",appearance:_this.appearance,onClick:_this.handleClickPrevious,class:"page-button next-previous flip",disabled:1===_this.currentPage||_this.disabled,variant:"icon",innerHTML:paginationNextPrevious})},this.nextButton=function(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{id:"next-page-button","aria-label":"Go to next page",appearance:_this.appearance,onClick:_this.handleClickNext,class:"page-button next-previous",disabled:_this.currentPage===_this.pages||_this.disabled,variant:"icon",innerHTML:paginationNextPrevious})},this.lastButton=function(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{id:"last-page-button","aria-label":"Go to last page",appearance:_this.appearance,onClick:_this.handleClickLast,class:"page-button first-last flip",disabled:_this.currentPage===_this.pages||_this.disabled,variant:"icon",innerHTML:paginationFirstLast})},this.renderStartEllipsis=function(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-pagination-item",{appearance:_this.appearance,type:"ellipsis",id:"start-ellipsis",disabled:_this.disabled})},this.renderEndEllipsis=function(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-pagination-item",{appearance:_this.appearance,type:"ellipsis",id:"end-ellipsis",disabled:_this.disabled})},this.renderStartItems=function(){return _this.startItems.map((function(page){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-".concat(page),type:"page",page,disabled:_this.disabled})}))},this.renderEndItems=function(){return _this.endItems.map((function(page){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-".concat(page),type:"page",page,disabled:_this.disabled})}))},this.renderMiddleItems=function(){return _this.midItems.map((function(page){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-".concat(page),type:"page",page,disabled:_this.disabled})}))},this.endEllipsis=!1,this.endItems=[],this.midItems=[],this.startEllipsis=!1,this.startItems=[],this.adjacentCount=1,this.appearance="default",this.boundaryCount=1,this.defaultPage=1,this.disabled=!1,this.hideCurrentPage=!1,this.hideFirstAndLastPageButton=!1,this.label="Page",this.pages=void 0,this.type="simple",this.currentPage=this.defaultPage}var _setCurrentPage;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__.A)(Pagination,[{key:"watchAdjacentCountHandler",value:function watchAdjacentCountHandler(){this.adjacentCount>2&&(this.adjacentCount=2)}},{key:"watchBoundaryCountHandler",value:function watchBoundaryCountHandler(){this.boundaryCount>2&&(this.boundaryCount=2)}},{key:"watchNumberPagesHandler",value:function watchNumberPagesHandler(){this.watchPageChangeHandler()}},{key:"watchTypeHandler",value:function watchTypeHandler(){this.watchPageChangeHandler()}},{key:"watchPageChangeHandler",value:function watchPageChangeHandler(){if("simple"!==this.type){this.startEllipsis=!1,this.endEllipsis=!1,this.startItems=[],this.endItems=[],this.midItems=[];var startItemCount,midStart,midEnd,startItems=[],endItems=[],endStart=this.pages,midItems=[],startEllipsis=!1,endEllipsis=!1;if(this.pages<=2*this.boundaryCount+2*this.adjacentCount+3){this.startEllipsis=!1,this.endEllipsis=!1;for(var i=1;i<=this.pages;i++)startItems.push(i);this.startItems=startItems}else{if(startItemCount=0===this.boundaryCount?1:this.boundaryCount,endStart=0===this.boundaryCount?this.pages:this.pages-this.boundaryCount+1,this.currentPage<=this.adjacentCount+this.boundaryCount+2){startEllipsis=!1,endEllipsis=!0;var numItems=2*this.adjacentCount+1;0===this.boundaryCount&&numItems--,midEnd=(midStart=startItemCount+1)+numItems}else if(startEllipsis=!0,this.currentPage>this.pages-(this.adjacentCount+this.boundaryCount+2)){var _numItems=2*this.adjacentCount+1;0===this.boundaryCount&&_numItems--,midStart=(midEnd=0===this.boundaryCount?this.pages-1:this.pages-this.boundaryCount)-_numItems}else endEllipsis=!0,midStart=this.currentPage-this.adjacentCount,midEnd=this.currentPage+this.adjacentCount;if(this.boundaryCount>0||0===this.boundaryCount&&!1===startEllipsis)for(var _i=1;_i<=startItemCount;_i++)startItems.push(_i);if(this.boundaryCount>0||0===this.boundaryCount&&!1===endEllipsis)for(var _i2=endStart;_i2<=this.pages;_i2++)endItems.push(_i2);for(var _i3=midStart;_i3<=midEnd;_i3++)midItems.push(_i3);this.startEllipsis=startEllipsis,this.endEllipsis=endEllipsis,this.startItems=startItems,this.endItems=endItems,this.midItems=midItems}}}},{key:"componentWillLoad",value:function componentWillLoad(){this.watchPageChangeHandler(),this.watchBoundaryCountHandler(),this.watchAdjacentCountHandler(),(0,_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__.j)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.pages,propName:"pages"}],"Pagination")}},{key:"paginationItemClickHandler",value:function paginationItemClickHandler(ev){var page=ev.detail.page;this.currentPage=page,this.icPageChange.emit({value:this.currentPage})}},{key:"setCurrentPage",value:(_setCurrentPage=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(page){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:"number"==typeof page&&page>0&&page<=this.pages?this.currentPage=page:console.error("Current page must be a number greater than zero but less than or equal to the total number of pages");case 1:case"end":return _context.stop()}}),_callee,this)}))),function setCurrentPage(_x){return _setCurrentPage.apply(this,arguments)})},{key:"render",value:function render(){var type=this.type,currentPage=this.currentPage,hideCurrentPage=this.hideCurrentPage,disabled=this.disabled,hideFirstAndLastPageButton=this.hideFirstAndLastPageButton,label=this.label;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,null,"simple"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("nav",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"disabled",disabled),role:"navigation","aria-label":"Pagination Navigation"},hideFirstAndLastPageButton?null:this.firstButton(),this.previousButton(),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-pagination-item",{appearance:this.appearance,type:"simple-current",page:currentPage,label,class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"hide-current-page",hideCurrentPage),disabled}),this.nextButton(),hideFirstAndLastPageButton?null:this.lastButton()),"complex"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("nav",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"disabled",disabled),role:"navigation","aria-label":"Pagination Navigation"},hideFirstAndLastPageButton?null:this.firstButton(),this.previousButton(),this.renderStartItems(),this.startEllipsis&&this.renderStartEllipsis(),this.renderMiddleItems(),this.endEllipsis&&this.renderEndEllipsis(),this.renderEndItems(),this.nextButton(),hideFirstAndLastPageButton?null:this.lastButton()))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{adjacentCount:["watchAdjacentCountHandler"],boundaryCount:["watchBoundaryCountHandler"],pages:["watchNumberPagesHandler"],type:["watchTypeHandler"],currentPage:["watchPageChangeHandler"]}}}]),Pagination}();Pagination.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{box-sizing:border-box;width:100%;display:flex;justify-content:center}nav{width:100%;display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center}ic-button{cursor:pointer}ic-button.next-previous{--icon-width:var(--ic-space-xs);--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs));padding:0 var(--ic-space-xxs) 0 var(--ic-space-xxxs)}ic-button.first-last{--icon-width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs))}.disabled{color:var(--ic-architectural-200);pointer-events:none;cursor:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hide-current-page{display:none}'}}]);