"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[828],{"../web-components/dist/esm/ic-theme.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_theme:()=>Theme});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js"),console=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),__webpack_require__("./node_modules/console-browserify/index.js")),Theme=function(){function Theme(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,Theme),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.themeChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"themeChange",7),this.checkThemeColorContrast=function(){(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.J)()<_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.K&&(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.J)()>_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.W&&console.warn("The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setThemeColor=function(){var colorRGBA=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.b)(_this.color);if(colorRGBA){var r=colorRGBA.r,g=colorRGBA.g,b=colorRGBA.b,a=colorRGBA.a,style=document.documentElement.style;style.setProperty("--ic-theme-primary-r","".concat(r)),style.setProperty("--ic-theme-primary-g","".concat(g)),style.setProperty("--ic-theme-primary-b","".concat(b)),style.setProperty("--ic-theme-primary-a","".concat(a)),_this.checkThemeColorContrast(),_this.themeChange.emit({mode:(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.d)(),color:colorRGBA})}},this.color=null}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__.A)(Theme,[{key:"watchColorPropHandler",value:function watchColorPropHandler(){this.setThemeColor()}},{key:"componentWillLoad",value:function componentWillLoad(){this.setThemeColor()}},{key:"render",value:function render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,null)}}],[{key:"watchers",get:function get(){return{color:["watchColorPropHandler"]}}}]),Theme}()}}]);