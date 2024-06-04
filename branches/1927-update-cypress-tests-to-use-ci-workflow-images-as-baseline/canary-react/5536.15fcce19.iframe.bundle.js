"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[5536],{"../canary-web-components/dist/esm/ic-stepper.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_stepper:()=>Stepper});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-84d21612.js");__webpack_require__("../canary-web-components/dist/esm/types-f605c21c.js");const Stepper=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.resizeObserver=null,this.getChildren=()=>{this.steps=Array.from(this.el.querySelectorAll("ic-step")),this.stepsWithStepTitles=Array.from(this.el.querySelectorAll("ic-step[step-title]"))},this.checkStepTitles=()=>{this.stepsWithStepTitles.length<this.steps.length&&this.variantOverride&&"compact"===this.variant&&(this.noOfResizes=this.noOfResizes+1,1===this.noOfResizes&&console.error("The prop 'step-title' (web components) / 'stepTitle' (react) is required for all steps of the Stepper component (compact variant)"))},this.setStepTypes=()=>{this.getChildren(),this.stepTypes=[];for(let i=0;i<this.steps.length;i++)this.stepTypes.push("active")},this.setStepperWidth=()=>{this.alignedFullWidth="default"===this.variant&&"full-width"===this.aligned;const lastStep=this.steps[this.steps.length-1];lastStep.style.maxWidth="none",this.alignedFullWidth&&(this.stepperWidth=this.el.offsetWidth,lastStep.style.maxWidth=(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)(this.stepperWidth/this.steps.length+"px"),this.lastStepWidth=lastStep.offsetWidth)},this.initialiseStepStates=()=>{this.steps.forEach(((step,index)=>{step.variant=this.variant,step.stepNum=index+1,step.lastStep=index===this.steps.length-1,step.lastStepNum=this.steps.length,"current"!==step.stepType?(step.current=!1,this.stepTypes[index]=step.stepType):step.current=!0;const stepTitleArea=step.shadowRoot&&step.shadowRoot.querySelector(".step > .step-title-area");if(0==this.stepsWithStepTitles.length&&this.variantOverride&&("compact"===this.variant&&(this.autoSetStepTitles=!0,this.autoSetStepTitles&&(step.stepTitle="Step "+step.stepNum,stepTitleArea&&stepTitleArea.querySelector(".step-title").setAttribute("aria-hidden","true"))),"default"===this.variant&&(this.autoSetStepTitles=!1,this.autoSetStepTitles||(step.stepTitle=void 0,stepTitleArea&&stepTitleArea.querySelector(".step-title").removeAttribute("aria-hidden")))),"compact"===this.variant&&(!0===step.current||"current"===step.stepType?(step.classList.remove("hide"),step.classList.add("show")):step.classList.contains("show")&&(step.classList.remove("show"),step.classList.add("hide")),step.lastStep?step.lastStep&&"completed"!==this.stepTypes[index]?step.progress=95:step.progress=100:(step.nextStepTitle=this.steps[index+1].stepTitle,step.progress=step.stepNum/this.steps.length*100),this.hideStepInfo&&null!==stepTitleArea&&stepTitleArea.classList.remove("visually-hidden"),step.compactStepStyling=this.stepTypes[index]),"default"===this.variant){if(step.lastStep?step.lastStep&&(step.classList.add("last-step"),this.alignedFullWidth?step.style.maxWidth=`${this.lastStepWidth}px`:step.style.maxWidth=this.connectorWidth>100?(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)(`${this.connectorWidth+48}px`):(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)("148px")):this.alignedFullWidth&&(step.style.width=(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)((this.stepperWidth-this.lastStepWidth)/(this.steps.length-1)+"px"),step.style.minWidth=(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)("148px")),"left"===this.aligned){step.style.width=this.connectorWidth>100?(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)(`${this.connectorWidth+48}px`):(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)("148px");const stepConnect=step.shadowRoot.querySelector(".step > .step-top > .step-connect");stepConnect&&(stepConnect.style.width=this.connectorWidth>100?(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)(`${this.connectorWidth}px`):(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.E)("100px"))}this.hideStepInfo&&null!==stepTitleArea&&stepTitleArea.classList.add("visually-hidden")}}))},this.overrideVariant=()=>{let minDefaultStepperWidth=148*this.steps.length;"left"===this.aligned&&this.connectorWidth>100&&(minDefaultStepperWidth=(this.connectorWidth+48)*this.steps.length),this.variantOverride&&(this.el.clientWidth<minDefaultStepperWidth?(this.variant="compact",this.getChildren()):(this.variant="default",this.getChildren()))},this.resizeObserverCallback=()=>{this.getChildren(),this.checkStepTitles(),this.overrideVariant(),this.setStepperWidth(),this.initialiseStepStates()},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.resizeObserverCallback()})),this.resizeObserver.observe(this.el)},this.alignedFullWidth=!0,this.autoSetStepTitles=!0,this.lastStepWidth=0,this.noOfResizes=0,this.stepperWidth=document.querySelector("ic-stepper").getBoundingClientRect().width,this.stepTypes=[],this.variantOverride="compact"!==this.variant,this.aligned="full-width",this.appearance="default",this.connectorWidth=100,this.hideStepInfo=!1,this.variant="default"}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentWillLoad(){this.setStepTypes(),"compact"===this.variant&&(this.variantOverride=!1)}componentWillRender(){this.initialiseStepStates()}componentDidLoad(){(0,_helpers_84d21612_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver)}render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`${this.variant}`]:!0,"aligned-left":"default"===this.variant&&"left"===this.aligned}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"step-item-list"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Stepper.style=":host{display:flex;width:100%}.step-item-list{display:flex;margin:0;padding:0}:host(.default:not(.aligned-left)) .step-item-list{flex:auto}:host(.compact) ul ::slotted(ic-step){display:none}:host(.compact) ul ::slotted(ic-step.show){display:flex}:host(.compact) ul ::slotted(ic-step.hide){display:none;opacity:0;visibility:hidden}"}}]);