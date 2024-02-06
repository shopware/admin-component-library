(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[21872,54156],{"./src/components/navigation/sw-search/sw-search.interactive.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestInputValue:function(){return TestInputValue},VisualTestDefaultSize:function(){return VisualTestDefaultSize},VisualTestDefaultSizeDisabled:function(){return VisualTestDefaultSizeDisabled},VisualTestSmallSize:function(){return VisualTestSmallSize},VisualTestSmallSizeDisabled:function(){return VisualTestSmallSizeDisabled},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_sw_search_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/navigation/sw-search/sw-search.stories.js");__webpack_exports__.default={..._sw_search_stories__WEBPACK_IMPORTED_MODULE_2__.default,title:"Interaction Tests/Navigation/sw-search"};const TestInputValue={name:"Should keep input value",play:async({args:args,canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.Cu)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.gr.type(canvas.getByRole("textbox"),"Shopware"),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.gr.click(canvas.getByText("hidden")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.c)(canvas.getByRole("textbox").value).toBe("Shopware"),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.c)(args.change).toHaveBeenCalledWith("Shopware")}},VisualTestDefaultSize={name:"Render the default sized search",args:{size:"default"}},VisualTestSmallSize={name:"Render the small sized search",args:{size:"small"}},VisualTestDefaultSizeDisabled={name:"Render the default sized search disabled",args:{size:"default",disabled:!0}},VisualTestSmallSizeDisabled={name:"Render the small sized search disabled",args:{size:"small",disabled:!0}};TestInputValue.parameters={...TestInputValue.parameters,docs:{...TestInputValue.parameters?.docs,source:{originalSource:"{\n  name: 'Should keep input value',\n  play: async ({\n    args,\n    canvasElement\n  }) => {\n    // we can't use canvasElement because it is not available anymore\n    const canvas = within(canvasElement);\n    await userEvent.type(canvas.getByRole('textbox'), 'Shopware');\n    await userEvent.click(canvas.getByText('hidden'));\n    expect(canvas.getByRole('textbox').value).toBe('Shopware');\n    await expect(args.change).toHaveBeenCalledWith('Shopware');\n  }\n}",...TestInputValue.parameters?.docs?.source}}},VisualTestDefaultSize.parameters={...VisualTestDefaultSize.parameters,docs:{...VisualTestDefaultSize.parameters?.docs,source:{originalSource:"{\n  name: 'Render the default sized search',\n  args: {\n    size: 'default'\n  }\n}",...VisualTestDefaultSize.parameters?.docs?.source}}},VisualTestSmallSize.parameters={...VisualTestSmallSize.parameters,docs:{...VisualTestSmallSize.parameters?.docs,source:{originalSource:"{\n  name: 'Render the small sized search',\n  args: {\n    size: 'small'\n  }\n}",...VisualTestSmallSize.parameters?.docs?.source}}},VisualTestDefaultSizeDisabled.parameters={...VisualTestDefaultSizeDisabled.parameters,docs:{...VisualTestDefaultSizeDisabled.parameters?.docs,source:{originalSource:"{\n  name: 'Render the default sized search disabled',\n  args: {\n    size: 'default',\n    disabled: true\n  }\n}",...VisualTestDefaultSizeDisabled.parameters?.docs?.source}}},VisualTestSmallSizeDisabled.parameters={...VisualTestSmallSizeDisabled.parameters,docs:{...VisualTestSmallSizeDisabled.parameters?.docs,source:{originalSource:"{\n  name: 'Render the small sized search disabled',\n  args: {\n    size: 'small',\n    disabled: true\n  }\n}",...VisualTestSmallSizeDisabled.parameters?.docs?.source}}};const __namedExportsOrder=["TestInputValue","VisualTestDefaultSize","VisualTestSmallSize","VisualTestDefaultSizeDisabled","VisualTestSmallSizeDisabled"]},"./src/components/navigation/sw-search/sw-search.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _sw_search_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/navigation/sw-search/sw-search.vue");const meta={title:"Components/Navigation/sw-search",component:_sw_search_vue__WEBPACK_IMPORTED_MODULE_0__.c,argTypes:{size:{control:{type:"select",options:["default","small"]}},change:{action:"change",table:{category:"Events"}},input:{action:"input",table:{category:"Events"}}},args:{value:"",size:"default",placeholder:"",disabled:!1},render:(args,{argTypes:argTypes})=>({components:{SwSearch:_sw_search_vue__WEBPACK_IMPORTED_MODULE_0__.c},props:Object.keys(argTypes),data(){return{currentValue:this.value}},watch:{value:{handler(v){this.currentValue!==v&&(this.currentValue=v)},immediate:!0}},methods:{changeHandler(value){this.change(value),this.currentValue=value},inputHandler(value){this.input(value),this.currentValue=value}},template:'\n  <div>\n    <sw-search\n      v-bind="$props"\n      :value="currentValue"\n      @change="changeHandler"\n      @input="inputHandler"\n    >\n      {{ $props.default }}\n    </sw-search>\n\n    \x3c!-- Element is used for storybook being able to lose focus of search component  --\x3e\n    <h4 style="display: none;">hidden</h4>\n  </div>\n  '})};__webpack_exports__.default=meta;const Default={name:"sw-search"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'sw-search'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/@storybook/instrumenter/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/navigation/sw-search/sw-search.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return sw_search}});var sw_base_field=__webpack_require__("./src/components/form/_internal/sw-base-field/sw-base-field.vue"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_search_sw_searchvue_type_script_lang_ts=(0,vue_esm._M)({components:{"sw-base-field":sw_base_field.c,"sw-icon":sw_icon.c},props:{value:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},size:{type:String,required:!1,default:"default",validator:value=>["small","default"].includes(value)},disabled:{type:Boolean,required:!1,default:!1}},i18n:{messages:{en:{"sw-search":{searchPlaceholder:"Search"}},de:{"sw-search":{searchPlaceholder:"Suchen"}}}},emits:["change","input"],setup(props,{emit:emit}){const hasFocus=(0,vue_esm.IL)(!1),currentValue=(0,vue_esm.IL)(props.value);(0,vue_esm.aE)((()=>props.value),(value=>{currentValue.value=value}));return{hasFocus:hasFocus,setFocusClass:()=>{hasFocus.value=!0},removeFocusClass:()=>{hasFocus.value=!1},onChange:event=>{emit("change",event.target.value||"")},onInput:event=>{emit("input",event.target.value)},currentValue:currentValue}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").c)(sw_search_sw_searchvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("sw-base-field",{staticClass:"sw-search",attrs:{disabled:_vm.disabled,"has-focus":_vm.hasFocus,size:_vm.size},scopedSlots:_vm._u([{key:"element",fn:function({identification:identification}){return[_c("sw-icon",{attrs:{name:"regular-search-s"}}),_vm._v(" "),_c("input",{staticClass:"sw-search__text-input",attrs:{id:identification,type:"text",name:identification,disabled:_vm.disabled,placeholder:_vm.$t(_vm.placeholder)?_vm.$t(_vm.placeholder).toString():_vm.$t("sw-search.searchPlaceholder").toString()},domProps:{value:_vm.currentValue},on:{input:_vm.onInput,change:_vm.onChange,focus:_vm.setFocusClass,blur:_vm.removeFocusClass}})]}}])})}),[],!1,null,null,null).exports;var sw_search=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sw-search",description:"",tags:{},props:[{name:"value",description:"The value of the search field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"size",description:"The size of the search field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"change"},{name:"input"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/navigation/sw-search/sw-search.vue"]}},"?4f7e":function(){}}]);