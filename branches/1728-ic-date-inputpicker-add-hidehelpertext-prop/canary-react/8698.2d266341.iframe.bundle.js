"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[8698],{"../canary-web-components/dist/esm/chevron-icon-875b7af2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../canary-web-components/dist/esm/ic-breadcrumb.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_breadcrumb:()=>Breadcrumb});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../canary-web-components/dist/esm/chevron-icon-875b7af2.js"),_helpers_886489d5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-886489d5.js");__webpack_require__("../canary-web-components/dist/esm/types-f605c21c.js");const Breadcrumb=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.renderDefaultBreadcrumb=(current,pageTitle,describedById,href)=>{const hasPageTitle=null!==pageTitle&&(0,_helpers_886489d5_js__WEBPACK_IMPORTED_MODULE_1__.d)(pageTitle)&&""!==pageTitle;return current&&hasPageTitle?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"current-page-container":current,[this.appearance]:!0}},(0,_helpers_886489d5_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"}),pageTitle):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-link",{appearance:this.appearance,href,class:"breadcrumb-link","aria-describedby":this.showBackIcon&&describedById&&describedById},this.showBackIcon&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"back-icon",innerHTML:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>\n</svg>\n'}),(0,_helpers_886489d5_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"}),pageTitle)},this.setSlottedCurrentPageClass=()=>{const icLink=this.el.querySelector("ic-link");if(icLink&&(icLink.classList.remove("current-page"),this.current)){icLink.classList.contains("current-page")||icLink.classList.add("breadcrumb-link","current-page")}},this.appearance="default",this.current=!1,this.href=void 0,this.pageTitle=void 0,this.showBackIcon=!1}componentWillRender(){this.setSlottedCurrentPageClass()}async setFocus(){this.el.shadowRoot.querySelector("ic-link")&&this.el.shadowRoot.querySelector("ic-link").focus()}render(){const{current,href,pageTitle}=this,describedById=`${pageTitle&&pageTitle.toLowerCase().replace(" ","-")}-describedby`,hasPageTitle=null!==pageTitle&&(0,_helpers_886489d5_js__WEBPACK_IMPORTED_MODULE_1__.d)(pageTitle)&&""!==pageTitle,hasHref=null!==href&&(0,_helpers_886489d5_js__WEBPACK_IMPORTED_MODULE_1__.d)(href)&&""!==href;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{back:this.showBackIcon},"aria-current":current&&"page",role:"listitem"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"breadcrumb"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{innerHTML:_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_3__.C,class:"chevron","aria-hidden":"true"}),this.showBackIcon&&describedById&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:describedById,class:"hide"},`Back to ${pageTitle}`),hasPageTitle&&hasHref?this.renderDefaultBreadcrumb(current,pageTitle,describedById,href):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Breadcrumb.style=':host{display:block;margin:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}:host .breadcrumb{display:flex;align-items:center;white-space:nowrap;gap:var(--ic-space-xs);min-height:var(--ic-space-lg)}:host .chevron{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host .chevron svg{color:var(--ic-architectural-400)}:host(:first-child) .chevron{display:none}.back-icon svg{color:currentcolor}:host(.back){display:flex;align-items:center}:host(.back) .chevron{display:none}ic-link{--breadcrumb-link-display:inline-flex;--breadcrumb-link-align-items:center;--breadcrumb-link-gap:var(--ic-space-xs)}:host([aria-current="page"]) .current-page-container{display:flex;align-items:center;gap:var(--ic-space-xs)}:host([aria-current="page"]) .current-page-container.dark{color:var(--ic-color-primary-text)}:host([aria-current="page"]) .current-page-container.light{color:var(--ic-color-white-text)}:host(.collapsed-breadcrumb-wrapper){margin-right:var(--ic-space-xs) !important;display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb){border:none;background-color:transparent;color:var(--ic-hyperlink);text-decoration:underline;font-weight:var(--ic-font-weight-bold);cursor:pointer}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){outline:var(--ic-hc-focus-outline);border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}.hide,:host(.collapsed-breadcrumb-wrapper) ::slotted(.hide){display:none}@media (forced-colors: active){.back-icon svg{color:currentcolor}}@supports (text-underline-offset: 25%){ic-link{--breadcrumb-link-display:flex}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}'}}]);