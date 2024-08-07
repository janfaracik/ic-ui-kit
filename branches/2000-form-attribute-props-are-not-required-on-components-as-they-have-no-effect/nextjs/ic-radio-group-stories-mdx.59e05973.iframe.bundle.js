"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[7133],{"../react/src/stories/ic-radio-group.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Form:()=>Form,RadioOptionsAdditional:()=>RadioOptionsAdditional,RadioOptionsDynamic:()=>RadioOptionsDynamic,RadioOptionsUpdate:()=>RadioOptionsUpdate,Uncontrolled:()=>Uncontrolled,__namedExportsOrder:()=>__namedExportsOrder,additionalFieldRendering:()=>additionalFieldRendering,conditionalDynamic:()=>conditionalDynamic,conditionalStatic:()=>conditionalStatic,controlled:()=>controlled,default:()=>ic_radio_group_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,disabled:()=>disabled,dynamicLoading:()=>dynamicLoading,form:()=>ic_radio_group_stories_form,helperText:()=>helperText,horizontal:()=>horizontal,playground:()=>playground,required:()=>required,sizeSmall:()=>sizeSmall,uncontrolled:()=>uncontrolled,updatingOptions:()=>updatingOptions,validation:()=>validation});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-radio-option\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                  | Description                                                        | Type                    | Default                                        |\n| ------------------------ | -------------------------- | ------------------------------------------------------------------ | ----------------------- | ---------------------------------------------- |\n| `additionalFieldDisplay` | `additional-field-display` | The style of additionalField that will be displayed if used.       | `"dynamic" \\| "static"` | `"static"`                                     |\n| `disabled`               | `disabled`                 | If `true`, the disabled state will be set.                         | `boolean`               | `false`                                        |\n| `dynamicText`            | `dynamic-text`             | The text to be displayed when dynamic.                             | `string`                | `"This selection requires additional answers"` |\n| `form`                   | `form`                     | The <form> element to associate the radio with.                    | `string`                | `undefined`                                    |\n| `groupLabel`             | `group-label`              | The group label for the radio option.                              | `string`                | `undefined`                                    |\n| `label`                  | `label`                    | The label for the radio option.                                    | `string`                | `undefined`                                    |\n| `name`                   | `name`                     | The name for the radio option.                                     | `string`                | `undefined`                                    |\n| `selected`               | `selected`                 | If `true`, the radio option will be displayed in a selected state. | `boolean`               | `false`                                        |\n| `value` _(required)_     | `value`                    | The value for the radio option.                                    | `string`                | `undefined`                                    |\n\n\n## Events\n\n| Event              | Description                                              | Type                              |\n| ------------------ | -------------------------------------------------------- | --------------------------------- |\n| `icCheck`          | Emitted when the radio option is selected.               | `CustomEvent<IcValueEventDetail>` |\n| `icSelectedChange` | Emitted when the radio option is selected or deselected. | `CustomEvent<void>`               |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the radio option.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                 | Description                                    |\n| -------------------- | ---------------------------------------------- |\n| `"additional-field"` | Content to displayed alongside a radio option. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-radio-option --\x3e ic-typography\n  style ic-radio-option fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_radio_group_readme_namespaceObject='# ic-radio-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute           | Description                                                                                                                                                                                                                      | Type                                      | Default      |\n| -------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------ |\n| `disabled`           | `disabled`          | If `true`, the disabled state will be set.                                                                                                                                                                                       | `boolean`                                 | `false`      |\n| `helperText`         | `helper-text`       | The helper text that will be displayed for additional field guidance.                                                                                                                                                            | `string`                                  | `undefined`  |\n| `hideLabel`          | `hide-label`        | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                               | `boolean`                                 | `false`      |\n| `label` _(required)_ | `label`             | The label for the radio group to be displayed.                                                                                                                                                                                   | `string`                                  | `undefined`  |\n| `name` _(required)_  | `name`              | The name for the radio group to differentiate from other groups.                                                                                                                                                                 | `string`                                  | `undefined`  |\n| `orientation`        | `orientation`       | The orientation of the radio buttons in the radio group. If there are more than two radio buttons in a radio group or either of the radio buttons use the `additional-field` slot, then the orientation will always be vertical. | `"horizontal" \\| "vertical"`              | `"vertical"` |\n| `required`           | `required`          | If `true`, the radio group will require a value.                                                                                                                                                                                 | `boolean`                                 | `false`      |\n| `size`               | `size`              | The size of the radio group component.                                                                                                                                                                                           | `"default" \\| "small"`                    | `"default"`  |\n| `validationStatus`   | `validation-status` | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                                                                                                                  | `"" \\| "error" \\| "success" \\| "warning"` | `""`         |\n| `validationText`     | `validation-text`   | The validation text - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                                                                                                                    | `string`                                  | `""`         |\n\n\n## Events\n\n| Event      | Description                          | Type                               |\n| ---------- | ------------------------------------ | ---------------------------------- |\n| `icChange` | Emitted when a user selects a radio. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-input-validation](../ic-input-validation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-radio-group --\x3e ic-input-label\n  ic-radio-group --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  style ic-radio-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const Form=()=>{const _components=Object.assign({form:"form",input:"input"},(0,lib.RP)());return(0,jsx_runtime.jsxs)(_components.form,{onSubmit:ev=>(ev=>{ev.preventDefault(),console.log("Form value: ",document.querySelector("input[name='1']").value)})(ev),children:[(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]}),(0,jsx_runtime.jsx)(_components.input,{type:"submit",value:"Submit"}),(0,jsx_runtime.jsx)(_components.input,{type:"reset",value:"Reset"})]})},RadioOptionsDynamic=()=>{const[radioOptions,setRadioOptions]=(0,react.useState)([]);return(0,react.useEffect)((()=>{setTimeout((()=>{setRadioOptions([{label:"Item 1",value:"Item 1"},{label:"Item 2",value:"Item 2"},{label:"Item 3",value:"Item 3"},{label:"Item 4",value:"Item 4"}])}),3e3)}),[]),(0,jsx_runtime.jsx)(components.RV,{label:"What is your favourite coffee?",name:"radio-group-1",children:radioOptions.map(((option,index)=>(0,jsx_runtime.jsx)(components.Dh,{value:option.value,label:option.label},index+option.value)))})},RadioOptionsUpdate=()=>{const _components=Object.assign({br:"br"},(0,lib.RP)()),[radioOptions,setRadioOptions]=(0,react.useState)([{label:"Item 1",value:"Item 1"},{label:"Item 2",value:"Item 2"},{label:"Item 3",value:"Item 3"},{label:"Item 4",value:"Item 4"}]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.RV,{label:"What is your favourite coffee?",name:"radio-group-1",children:radioOptions.map(((option,index)=>(0,jsx_runtime.jsx)(components.Dh,{value:option.value,label:option.label},index+option.value)))}),(0,jsx_runtime.jsx)(_components.br,{}),(0,jsx_runtime.jsx)(components.nP,{onClick:()=>{setRadioOptions([{label:"Item 5",value:"Item 5"},{label:"Item 6",value:"Item 6"}])},children:"Update"})]})},Controlled=()=>{const[selected,setSelected]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.Dh,{selected,label:"Label",value:"valueName1"}),(0,jsx_runtime.jsx)(components.nP,{variant:"primary",onClick:()=>{setSelected(!1)},children:"Unselected"}),(0,jsx_runtime.jsx)(components.nP,{variant:"primary",onClick:()=>{setSelected(!0)},children:"Selected"})]})},Uncontrolled=()=>{const radioEl=(0,react.useRef)();return(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{ref:radioEl,value:"valueName1",label:"Unselected / Default",onIcSelectedChange:()=>{console.log(radioEl.current.selected)}}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0})]})},RadioOptionsAdditional=()=>{const _components=Object.assign({br:"br"},(0,lib.RP)()),[showAdditional,setShowAdditional]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(components.RV,{label:"What is your favourite coffee?",name:"radio-group-1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"Item 1",label:"Item 1"}),(0,jsx_runtime.jsx)(components.Dh,{value:"Item 2",label:"Item 2 - has conditional field",additionalFieldDisplay:showAdditional?"dynamic":"static",children:showAdditional&&(0,jsx_runtime.jsx)(components.k2,{slot:"additional-field",placeholder:"Placeholder",label:"What is your favourite coffee?"})}),(0,jsx_runtime.jsx)(components.Dh,{value:"Item 3",label:"Item 3"}),(0,jsx_runtime.jsx)(components.Dh,{value:"Item 4",label:"Item 4"})]}),(0,jsx_runtime.jsx)(_components.br,{}),(0,jsx_runtime.jsx)(components.nP,{onClick:()=>{setShowAdditional(!showAdditional)},children:"Toggle additional"})]})},defaultArgs={disabled:!1,helperText:"Some helper text",hideLabel:!1,label:"This is a label",name:"1",orientation:"vertical",required:!1,size:"default",validationStatus:"",validationText:"",additionalFieldDisplay:"static",radioDisabled:!1,dynamicText:"This selection requires additional answers",radioLabel:"Radio 1",radioName:"radio1",value:"valueName1",selected:!1,additionalFieldSlot:!0};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Radio button",component:components.RV}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject+ic_radio_group_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"horizontal",children:"Horizontal"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Horizontal",children:(0,jsx_runtime.jsxs)(components.RV,{orientation:"horizontal",label:"This is a label",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Unselected / Default"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Required",children:(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",required:!0,name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",children:(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Disabled 1",disabled:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Unselected / Disabled 2",disabled:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled 3",disabled:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName4",label:"Selected / Disabled",disabled:!0,selected:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-dynamic",children:"Conditional dynamic"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Conditional dynamic",parameters:{loki:{skip:!0}},children:(0,jsx_runtime.jsxs)(components.RV,{label:"Conditional dynamic",name:"1",onIcChange:ev=>console.log(ev.detail.selectedOption),children:[(0,jsx_runtime.jsx)(components.Dh,{additionalFieldDisplay:"dynamic",value:"valueName1",label:"option1",children:(0,jsx_runtime.jsx)(components.k2,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee? "})}),(0,jsx_runtime.jsx)(components.Dh,{additionalFieldDisplay:"dynamic",value:"valueName2",label:"option2 - error example",children:(0,jsx_runtime.jsx)(components.k2,{validationStatus:"error",validationText:"Now it has really gone to (coffee) pot",slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee? "})}),(0,jsx_runtime.jsx)(components.Dh,{additionalFieldDisplay:"dynamic",value:"valueName3",label:"option3",children:(0,jsx_runtime.jsx)(components.k2,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee? "})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-static",children:"Conditional static"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Conditional static",parameters:{loki:{skip:!0}},children:(0,jsx_runtime.jsxs)(components.RV,{label:"Conditional dynamic",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"option1",children:(0,jsx_runtime.jsx)(components.k2,{slot:"additional-field",label:"What's your favourite type of coffee?"})}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"option2"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Helper text",children:(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",helperText:"Helper text",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size-small",children:"Size small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Size small",children:(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",size:"small",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Validation",children:(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",validationStatus:"error",validationText:"Error message",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"form---this-shows-how-the-radio-button-works-within-a-form-and-is-where-the-value-of-the-radio-button-selected-will-appear-in-the-consolelog",children:"Form - This shows how the radio button works within a form and is where the value of the radio button selected will appear in the console.log"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Form",parameters:{loki:{skip:!0}},children:(0,jsx_runtime.jsx)(Form,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dynamic-loading",children:"Dynamic loading"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Dynamic loading",children:(0,jsx_runtime.jsx)(RadioOptionsDynamic,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"updating-options",children:"Updating options"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Updating options",children:(0,jsx_runtime.jsx)(RadioOptionsUpdate,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"controlled",children:"Controlled"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Controlled",children:(0,jsx_runtime.jsx)(Controlled,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"uncontrolled",children:"Uncontrolled"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Uncontrolled",children:(0,jsx_runtime.jsx)(Uncontrolled,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"additional-field-rendering",children:"Additional field rendering"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Additional field rendering",children:(0,jsx_runtime.jsx)(RadioOptionsAdditional,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{orientation:{options:["vertical","horizontal"],control:{type:"inline-radio"}},size:{options:["default","small"],control:{type:"inline-radio"}},validationStatus:{options:["error","warning","success",""],control:{type:"radio"}},additionalFieldDisplay:{options:["static","dynamic"],control:{type:"inline-radio"}},additionalFieldSlot:{mapping:{true:"additional-field",false:""}}},name:"Playground",children:args=>(0,jsx_runtime.jsxs)(components.RV,{label:args.label,name:args.name,orientation:args.orientation,required:args.required,size:args.size,validationStatus:args.validationStatus,validationText:args.validationText,helperText:args.helperText,disabled:args.disabled,hideLabel:args.hideLabel,children:[(0,jsx_runtime.jsx)(components.Dh,{additionalFieldDisplay:args.additionalFieldDisplay,value:args.value,label:args.radioLabel,name:args.radioName,selected:args.selected,disabled:args.radioDisabled,dynamicText:args.dynamicText,children:(0,jsx_runtime.jsx)(components.k2,{slot:args.additionalFieldSlot,placeholder:"Placeholder",label:"What's your favourite type of coffee?"})}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Radio 2"})]})})})]})}const defaultStory=()=>(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<IcRadioGroup label="This is a label" name="1"><IcRadioOption value="valueName1" label="Unselected / Default" /><IcRadioOption value="valueName2" label="Selected / Default" selected /><IcRadioOption value="valueName3" label="Unselected / Disabled" disabled /></IcRadioGroup>'}};const horizontal=()=>(0,jsx_runtime.jsxs)(components.RV,{orientation:"horizontal",label:"This is a label",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Unselected / Default"})]});horizontal.storyName="Horizontal",horizontal.parameters={storySource:{source:'<IcRadioGroup orientation="horizontal" label="This is a label" name="1"><IcRadioOption value="valueName1" label="Selected / Default" selected /><IcRadioOption value="valueName2" label="Unselected / Default" /></IcRadioGroup>'}};const required=()=>(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",required:!0,name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]});required.storyName="Required",required.parameters={storySource:{source:'<IcRadioGroup label="This is a label" required name="1"><IcRadioOption value="valueName1" label="Unselected / Default" /><IcRadioOption value="valueName2" label="Selected / Default" selected /><IcRadioOption value="valueName3" label="Unselected / Disabled" disabled /></IcRadioGroup>'}};const disabled=()=>(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Disabled 1",disabled:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Unselected / Disabled 2",disabled:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled 3",disabled:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName4",label:"Selected / Disabled",disabled:!0,selected:!0})]});disabled.storyName="Disabled",disabled.parameters={storySource:{source:'<IcRadioGroup label="This is a label" name="1"><IcRadioOption value="valueName1" label="Unselected / Disabled 1" disabled /><IcRadioOption value="valueName2" label="Unselected / Disabled 2" disabled /><IcRadioOption value="valueName3" label="Unselected / Disabled 3" disabled /><IcRadioOption value="valueName4" label="Selected / Disabled" disabled selected /></IcRadioGroup>'}};const conditionalDynamic=()=>(0,jsx_runtime.jsxs)(components.RV,{label:"Conditional dynamic",name:"1",onIcChange:ev=>console.log(ev.detail.selectedOption),children:[(0,jsx_runtime.jsx)(components.Dh,{additionalFieldDisplay:"dynamic",value:"valueName1",label:"option1",children:(0,jsx_runtime.jsx)(components.k2,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee? "})}),(0,jsx_runtime.jsx)(components.Dh,{additionalFieldDisplay:"dynamic",value:"valueName2",label:"option2 - error example",children:(0,jsx_runtime.jsx)(components.k2,{validationStatus:"error",validationText:"Now it has really gone to (coffee) pot",slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee? "})}),(0,jsx_runtime.jsx)(components.Dh,{additionalFieldDisplay:"dynamic",value:"valueName3",label:"option3",children:(0,jsx_runtime.jsx)(components.k2,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee? "})})]});conditionalDynamic.storyName="Conditional dynamic",conditionalDynamic.parameters={storySource:{source:'<IcRadioGroup label="Conditional dynamic" name="1" onIcChange={ev => console.log(ev.detail.selectedOption)}><IcRadioOption additionalFieldDisplay="dynamic" value="valueName1" label="option1"><IcTextField slot="additional-field" placeholder="Placeholder" label="What\'s your favourite type of coffee? " /></IcRadioOption><IcRadioOption additionalFieldDisplay="dynamic" value="valueName2" label="option2 - error example"><IcTextField validationStatus="error" validationText="Now it has really gone to (coffee) pot" slot="additional-field" placeholder="Placeholder" label="What\'s your favourite type of coffee? " /></IcRadioOption><IcRadioOption additionalFieldDisplay="dynamic" value="valueName3" label="option3"><IcTextField slot="additional-field" placeholder="Placeholder" label="What\'s your favourite type of coffee? " /></IcRadioOption></IcRadioGroup>'},loki:{skip:!0}};const conditionalStatic=()=>(0,jsx_runtime.jsxs)(components.RV,{label:"Conditional dynamic",name:"1",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"option1",children:(0,jsx_runtime.jsx)(components.k2,{slot:"additional-field",label:"What's your favourite type of coffee?"})}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"option2"})]});conditionalStatic.storyName="Conditional static",conditionalStatic.parameters={storySource:{source:'<IcRadioGroup label="Conditional dynamic" name="1"><IcRadioOption value="valueName1" label="option1"><IcTextField slot="additional-field" label="What\'s your favourite type of coffee?" /></IcRadioOption><IcRadioOption value="valueName2" label="option2" /></IcRadioGroup>'},loki:{skip:!0}};const helperText=()=>(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",helperText:"Helper text",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]});helperText.storyName="Helper text",helperText.parameters={storySource:{source:'<IcRadioGroup label="This is a label" name="1" helperText="Helper text"><IcRadioOption value="valueName1" label="Unselected / Default" /><IcRadioOption value="valueName2" label="Selected / Default" selected /><IcRadioOption value="valueName3" label="Unselected / Disabled" disabled /></IcRadioGroup>'}};const sizeSmall=()=>(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",size:"small",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]});sizeSmall.storyName="Size small",sizeSmall.parameters={storySource:{source:'<IcRadioGroup label="This is a label" name="1" size="small"><IcRadioOption value="valueName1" label="Unselected / Default" /><IcRadioOption value="valueName2" label="Selected / Default" selected /><IcRadioOption value="valueName3" label="Unselected / Disabled" disabled /></IcRadioGroup>'}};const validation=()=>(0,jsx_runtime.jsxs)(components.RV,{label:"This is a label",name:"1",validationStatus:"error",validationText:"Error message",children:[(0,jsx_runtime.jsx)(components.Dh,{value:"valueName1",label:"Unselected / Default"}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})]});validation.storyName="Validation",validation.parameters={storySource:{source:'<IcRadioGroup label="This is a label" name="1" validationStatus="error" validationText="Error message"><IcRadioOption value="valueName1" label="Unselected / Default" /><IcRadioOption value="valueName2" label="Selected / Default" selected /><IcRadioOption value="valueName3" label="Unselected / Disabled" disabled /></IcRadioGroup>'}};const ic_radio_group_stories_form=()=>(0,jsx_runtime.jsx)(Form,{});ic_radio_group_stories_form.storyName="Form",ic_radio_group_stories_form.parameters={storySource:{source:"<Form />"},loki:{skip:!0}};const dynamicLoading=()=>(0,jsx_runtime.jsx)(RadioOptionsDynamic,{});dynamicLoading.storyName="Dynamic loading",dynamicLoading.parameters={storySource:{source:"<RadioOptionsDynamic />"}};const updatingOptions=()=>(0,jsx_runtime.jsx)(RadioOptionsUpdate,{});updatingOptions.storyName="Updating options",updatingOptions.parameters={storySource:{source:"<RadioOptionsUpdate />"}};const controlled=()=>(0,jsx_runtime.jsx)(Controlled,{});controlled.storyName="Controlled",controlled.parameters={storySource:{source:"<Controlled />"}};const uncontrolled=()=>(0,jsx_runtime.jsx)(Uncontrolled,{});uncontrolled.storyName="Uncontrolled",uncontrolled.parameters={storySource:{source:"<Uncontrolled />"}};const additionalFieldRendering=()=>(0,jsx_runtime.jsx)(RadioOptionsAdditional,{});additionalFieldRendering.storyName="Additional field rendering",additionalFieldRendering.parameters={storySource:{source:"<RadioOptionsAdditional />"}};const playground=args=>(0,jsx_runtime.jsxs)(components.RV,{label:args.label,name:args.name,orientation:args.orientation,required:args.required,size:args.size,validationStatus:args.validationStatus,validationText:args.validationText,helperText:args.helperText,disabled:args.disabled,hideLabel:args.hideLabel,children:[(0,jsx_runtime.jsx)(components.Dh,{additionalFieldDisplay:args.additionalFieldDisplay,value:args.value,label:args.radioLabel,name:args.radioName,selected:args.selected,disabled:args.radioDisabled,dynamicText:args.dynamicText,children:(0,jsx_runtime.jsx)(components.k2,{slot:args.additionalFieldSlot,placeholder:"Placeholder",label:"What's your favourite type of coffee?"})}),(0,jsx_runtime.jsx)(components.Dh,{value:"valueName2",label:"Radio 2"})]});playground.storyName="Playground",playground.argTypes={orientation:{options:["vertical","horizontal"],control:{type:"inline-radio"}},size:{options:["default","small"],control:{type:"inline-radio"}},validationStatus:{options:["error","warning","success",""],control:{type:"radio"}},additionalFieldDisplay:{options:["static","dynamic"],control:{type:"inline-radio"}},additionalFieldSlot:{mapping:{true:"additional-field",false:""}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <IcRadioGroup label={args.label} name={args.name} orientation={args.orientation} required={args.required} size={args.size} validationStatus={args.validationStatus} validationText={args.validationText} helperText={args.helperText} disabled={args.disabled} hideLabel={args.hideLabel}>\n          <IcRadioOption additionalFieldDisplay={args.additionalFieldDisplay} value={args.value} label={args.radioLabel} name={args.radioName} selected={args.selected} disabled={args.radioDisabled} dynamicText={args.dynamicText}>\n            <IcTextField slot={args.additionalFieldSlot} placeholder="Placeholder" label="What\'s your favourite type of coffee?" />\n          </IcRadioOption>\n          <IcRadioOption value="valueName2" label="Radio 2" />\n        </IcRadioGroup>'},loki:{skip:!0}};const componentMeta={title:"Radio button",component:components.RV,tags:["stories-mdx"],includeStories:["defaultStory","horizontal","required","disabled","conditionalDynamic","conditionalStatic","helperText","sizeSmall","validation","form","dynamicLoading","updatingOptions","controlled","uncontrolled","additionalFieldRendering","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_radio_group_stories=componentMeta,__namedExportsOrder=["Form","RadioOptionsDynamic","RadioOptionsUpdate","Controlled","Uncontrolled","RadioOptionsAdditional","defaultArgs","defaultStory","horizontal","required","disabled","conditionalDynamic","conditionalStatic","helperText","sizeSmall","validation","form","dynamicLoading","updatingOptions","controlled","uncontrolled","additionalFieldRendering","playground"]}}]);