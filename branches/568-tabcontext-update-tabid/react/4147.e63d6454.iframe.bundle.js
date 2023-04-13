"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4147],{"../web-components/dist/esm/ic-tab-context.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_context:()=>TabContext});__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../web-components/dist/esm/index-90721b3c.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var TabContext=function(){function TabContext(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabContext),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_20__.r)(this,hostRef),this.tabSelect=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_20__.c)(this,"tabSelect",7),this.icTabSelect=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_20__.c)(this,"icTabSelect",7),this.newTabs=[],this.newTabPanels=[],this.linkTabs=function(){_this.tabs.forEach((function(tab,index){var tabId="ic-tab-"+index+"-context-"+_this.contextId,tabPanelId="ic-tab-panel-"+index+"-context-"+_this.contextId,shared="ic-tab--"+index+"-context-"+_this.contextId;tab.setAttribute("id",tabId),tab.tabId=shared,tab.tabPosition=index,tab.setAttribute("aria-controls",tabPanelId),tab.setAttribute("context-id",_this.contextId),_this.tabPanels[index].setAttribute("id",tabPanelId),_this.tabPanels[index].panelId=shared,_this.tabPanels[index].tabPosition=index,_this.tabPanels[index].setAttribute("aria-labelledby",tabId),_this.appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_21__.I.Light&&(tab.appearance=_this.appearance,_this.tabPanels[index].appearance=_this.appearance)})),_this.appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_21__.I.Light&&(_this.tabGroup.appearance=_this.appearance)},this.getChildren=function(){_this.tabGroup=Array.from(_this.host.querySelectorAll("ic-tab-group")).find((function(tabGroup){return tabGroup.contextId===_this.contextId})),_this.tabs=Array.from(_this.tabGroup.querySelectorAll("ic-tab")).filter((function(tab){return tab.contextId===_this.contextId})),_this.enabledTabs=_this.getEnabledTabs(),_this.tabPanels=Array.from(_this.host.querySelectorAll("ic-tab-panel"))},this.attatchEventListeners=function(){"automatic"===_this.activationType?_this.tabGroup.addEventListener("keydown",(function(event){_this.handleKeyBoardNavAutomatic(event)})):_this.tabGroup.addEventListener("keydown",(function(event){_this.handleKeyBoardNavManual(event)}))},this.setControlledMode=function(){void 0!==_this.selectedTabIndex&&(_this.controlledMode=!0,_this.selectedTab=_this.selectedTabIndex)},this.setInitialTab=function(){if(_this.controlledMode)_this.selectedTab=_this.selectedTabIndex,_this.focusedTabIndex=_this.selectedTabIndex;else{var firstEnabledTabIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[0].tabId}));_this.selectedTab=firstEnabledTabIndex,_this.focusedTabIndex=firstEnabledTabIndex}},this.configureTabs=function(){_this.enabledTabs.forEach((function(tab){tab.selected=tab.tabPosition===_this.selectedTab})),_this.tabPanels.forEach((function(tabPanel){tabPanel.selectedTab=_this.tabs[_this.selectedTab].tabId}))},this.getEnabledTabs=function(){return Array.from(_this.tabs).filter((function(child){return!child.disabled}))},this.getIndexOfEnabledTab=function(allTabsIndex){return _this.enabledTabs.findIndex((function(tab){return tab.tabId===_this.tabs[allTabsIndex].tabId}))},this.keyboardSelectTab=function(enabledTabIndex){var newIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[enabledTabIndex].tabId}));_this.enabledTabs[enabledTabIndex].focus(),_this.controlledMode?(_this.icTabSelect.emit({tabIndex:newIndex}),_this.tabSelect.emit({tabIndex:newIndex})):_this.selectedTab=newIndex},this.keyboardFocusTab=function(enabledTabIndex){var newIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[enabledTabIndex].tabId}));_this.enabledTabs[enabledTabIndex].focus(),_this.focusedTabIndex=newIndex},this.handleKeyBoardNavAutomatic=function(event){var key=event.key,enabledTabIndex=_this.getIndexOfEnabledTab(_this.selectedTab),preventDefault=!0;switch(key){case"Home":_this.keyboardSelectTab(0);break;case"End":_this.keyboardSelectTab(_this.enabledTabs.length-1);break;case"ArrowRight":enabledTabIndex<_this.enabledTabs.length-1?_this.keyboardSelectTab(enabledTabIndex+1):_this.keyboardSelectTab(0);break;case"ArrowLeft":enabledTabIndex>0?_this.keyboardSelectTab(enabledTabIndex-1):_this.keyboardSelectTab(_this.enabledTabs.length-1);break;default:preventDefault=!1}preventDefault&&event.preventDefault()},this.handleKeyBoardNavManual=function(event){var key=event.key,enabledTabIndex=_this.getIndexOfEnabledTab(_this.focusedTabIndex),preventDefault=!0;switch(key){case"Home":_this.keyboardFocusTab(0);break;case"End":_this.keyboardFocusTab(_this.enabledTabs.length-1);break;case"ArrowRight":enabledTabIndex<_this.enabledTabs.length-1?_this.keyboardFocusTab(enabledTabIndex+1):_this.keyboardFocusTab(0);break;case"ArrowLeft":enabledTabIndex>0?_this.keyboardFocusTab(enabledTabIndex-1):_this.keyboardFocusTab(_this.enabledTabs.length-1);break;case"Enter":case" ":_this.keyboardSelectTab(_this.focusedTabIndex);break;default:preventDefault=!1}preventDefault&&event.preventDefault()},this.contextId="default",this.activationType="automatic",this.selectedTabIndex=void 0,this.appearance="dark",this.selectedTab=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabContext,[{key:"updateSelectedTab",value:function updateSelectedTab(newValue){this.selectedTab=newValue}},{key:"tabClickHandler",value:function tabClickHandler(event){void 0===this.selectedTabIndex&&event.detail.contextId===this.contextId&&(this.selectedTab=event.detail.position),this.icTabSelect.emit({tabIndex:event.detail.position}),this.tabSelect.emit({tabIndex:event.detail.position})}},{key:"newChildrenHandler",value:function newChildrenHandler(ev){var _this$tabs,_this$tabPanels;this.tabs&&this.tabPanels&&((ev.detail.setFocus?this.newTabs:this.newTabPanels).push(ev.detail),this.newTabs.length===this.newTabPanels.length&&((_this$tabs=this.tabs).push.apply(_this$tabs,_toConsumableArray(this.newTabs)),(_this$tabPanels=this.tabPanels).push.apply(_this$tabPanels,_toConsumableArray(this.newTabPanels)),this.enabledTabs=this.getEnabledTabs(),this.linkTabs(),this.newTabs=[],this.newTabPanels=[]))}},{key:"componentDidLoad",value:function componentDidLoad(){this.setControlledMode(),this.getChildren(),this.linkTabs(),this.attatchEventListeners(),this.setInitialTab(),this.configureTabs()}},{key:"componentWillUpdate",value:function componentWillUpdate(){this.configureTabs()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this2=this;"manual"===this.activationType?this.tabGroup.removeEventListener("keydown",(function(event){return _this2.handleKeyBoardNavManual(event)})):this.tabGroup.removeEventListener("keydown",(function(event){return _this2.handleKeyBoardNavAutomatic(event)}))}},{key:"render",value:function render(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_20__.h)("slot",null)}},{key:"host",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_20__.g)(this)}}],[{key:"watchers",get:function get(){return{selectedTabIndex:["updateSelectedTab"]}}}]),TabContext}()},"../web-components/dist/esm/types-dd515332.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>IcInformationStatus}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))}}]);