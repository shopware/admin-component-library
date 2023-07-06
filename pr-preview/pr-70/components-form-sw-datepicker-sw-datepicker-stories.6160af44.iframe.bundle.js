"use strict";(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[64677,67495,8704],{"./src/components/form/sw-datepicker/sw-datepicker.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _sw_datepicker_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/form/sw-datepicker/sw-datepicker.vue");__webpack_exports__.default={title:"Components/Form/sw-datepicker",component:_sw_datepicker_vue__WEBPACK_IMPORTED_MODULE_0__.Z,args:{label:"Datepicker"},argTypes:{input:{action:"input",table:{category:"Events"}}}};const Default=((args,{argTypes:argTypes})=>({template:'<sw-datepicker v-bind="$props" v-model="currentValue" @input="input"></sw-datepicker>',props:Object.keys(argTypes),components:{SwDatepicker:_sw_datepicker_vue__WEBPACK_IMPORTED_MODULE_0__.Z},data(){return{currentValue:""}},watch:{value(v){this.currentValue=v}},created(){this.currentValue=this.value}})).bind({});Default.storyName="sw-datepicker",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args, {\n  argTypes\n}) => ({\n  template: \'<sw-datepicker v-bind="$props" v-model="currentValue" @input="input"></sw-datepicker>\',\n  props: Object.keys(argTypes),\n  components: {\n    SwDatepicker\n  },\n  data() {\n    return {\n      currentValue: \'\'\n    };\n  },\n  watch: {\n    value(v) {\n      this.currentValue = v;\n    }\n  },\n  created() {\n    this.currentValue = this.value;\n  }\n})',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/form/sw-datepicker/sw-datepicker.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_datepicker}});__webpack_require__("./node_modules/core-js/modules/es.array.push.js");var flatpickr=__webpack_require__("./node_modules/flatpickr/dist/flatpickr.js"),flatpickr_default=__webpack_require__.n(flatpickr),utcToZonedTime=(__webpack_require__("./node_modules/flatpickr/dist/l10n/index.js"),__webpack_require__("./node_modules/date-fns-tz/esm/utcToZonedTime/index.js")),zonedTimeToUtc=__webpack_require__("./node_modules/date-fns-tz/esm/zonedTimeToUtc/index.js"),sw_base_field=(__webpack_require__("./node_modules/flatpickr/dist/flatpickr.css"),__webpack_require__("./src/components/form/_internal/sw-base-field/sw-base-field.vue")),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),form_field_mixin=__webpack_require__("./src/mixins/form-field.mixin.js");const allEvents=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange","onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"];var sw_datepicker_sw_datepickervue_type_script_lang_js_={name:"SwDatepicker",components:{"sw-base-field":sw_base_field.Z,"sw-icon":sw_icon.Z},mixins:[form_field_mixin.Z],inheritAttrs:!1,props:{label:{type:String,required:!1,default:null},locale:{type:String,required:!1,default:"en"},timeZone:{type:String,required:!1,default:"UTC"},value:{type:String,required:!1,default:null},config:{type:Object,default(){return{}}},dateType:{type:String,default:"date",validValues:["time","date","datetime"],validator(value){return["time","date","datetime"].includes(value)}},placeholderText:{type:String,default:"",required:!1},required:{type:Boolean,default:!1,required:!1},disabled:{type:Boolean,default:!1,required:!1},hideHint:{type:Boolean,default:!1,required:!1}},data(){return{flatpickrInstance:null,isDatepickerOpen:!1,defaultConfig:{}}},computed:{flatpickrInputRef(){return this.$refs.flatpickrInput},currentFlatpickrConfig(){return null===this.flatpickrInstance?{}:this.flatpickrInstance.config},placeholder(){return this.placeholderText.length>0?this.placeholderText:null===this.flatpickrInstance?this.defaultConfig.altFormat:this.flatpickrInstance.config.altFormat},noCalendar(){return"time"===this.dateType},enableTime(){return this.noCalendar||"datetime"===this.dateType},additionalEventListeners(){const listeners={};return Object.keys(this.$listeners).forEach((key=>{["change","input"].includes(key)||(listeners[key]=this.$listeners[key])})),listeners},timezoneFormattedValue:{get(){if(!this.value)return null;if(["time","date"].includes(this.dateType))return this.value;return(0,utcToZonedTime.Z)(this.value,this.timeZone).toISOString()},set(newValue){if(null===newValue)return void this.$emit("input",null);if(["time","date"].includes(this.dateType))return void this.$emit("input",newValue);const utcDate=(0,zonedTimeToUtc.Z)(new Date(newValue),this.timeZone);this.$emit("input",utcDate.toISOString())}},showTimeZoneHint(){return"datetime"===this.dateType&&!this.hideHint}},watch:{config:{deep:!0,handler(){this.updateFlatpickrInstance()}},dateType(){this.createConfig(),this.updateFlatpickrInstance()},locale:{immediate:!0,handler(){this.defaultConfig.locale=this.locale,this.updateFlatpickrInstance(this.config)}},timezoneFormattedValue(newValue){this.setDatepickerValue(newValue)},disabled(isDisabled){this.flatpickrInstance._input.disabled=isDisabled}},created(){this.createdComponent()},mounted(){this.mountedComponent()},beforeDestroy(){this.beforeDestroyComponent()},methods:{createdComponent(){this.createConfig()},mountedComponent(){null!==this.flatpickrInstance?this.updateFlatpickrInstance():this.createFlatpickrInstance()},beforeDestroyComponent(){null!==this.flatpickrInstance&&(this.flatpickrInstance.destroy(),this.flatpickrInstance=null)},setDatepickerValue(value){null!==this.flatpickrInstance&&this.flatpickrInstance.setDate(value,!1)},getMergedConfig(newConfig){return void 0!==newConfig.mode&&console.warn("[sw-datepicker] The only allowed mode is the default 'single' mode (the specified mode will be ignored!). The modes 'multiple' or 'range' are currently not supported"),{...this.defaultConfig,enableTime:this.enableTime,noCalendar:this.noCalendar,...newConfig,mode:"single"}},updateFlatpickrInstance(){if(null===this.flatpickrInstance)return;const mergedConfig=this.getMergedConfig(this.config);void 0===mergedConfig.enableTime||mergedConfig.enableTime===this.currentFlatpickrConfig.enableTime?(allEvents.forEach((hook=>{delete mergedConfig[hook]})),this.flatpickrInstance.set(mergedConfig),["locale","showMonths"].forEach((name=>{void 0!==mergedConfig[name]&&this.flatpickrInstance.set(name,mergedConfig[name])}))):this.createFlatpickrInstance(this.config)},createFlatpickrInstance(){null!==this.flatpickrInstance&&(this.flatpickrInstance.destroy(),this.flatpickrInstance=null);const mergedConfig=this.getMergedConfig(this.config);this.getEventNames().forEach((({kebabCase:kebabCase,camelCase:camelCase})=>{mergedConfig[camelCase]=(...args)=>{this.$emit(kebabCase,...args)}})),this.flatpickrInstance=new(flatpickr_default())(this.flatpickrInputRef,mergedConfig),this.flatpickrInstance.config.onOpen.push((()=>{this.isDatepickerOpen=!0})),this.flatpickrInstance.config.onClose.push((()=>{this.isDatepickerOpen=!1})),this.flatpickrInstance.config.onChange.push(((...args)=>{this.emitValue(args[1])})),this.setDatepickerValue(this.timezoneFormattedValue)},getEventNames(){const events=[];return Object.keys(this.additionalEventListeners).forEach((event=>{events.push({kebabCase:event,camelCase:this.kebabToCamel(event)})})),events},openDatepicker(){this.$nextTick((()=>{this.flatpickrInstance.open()}))},kebabToCamel(string){return string.replace(/-([a-z])/g,((m,g1)=>g1.toUpperCase()))},unsetValue(){this.$nextTick((()=>{this.emitValue(null)}))},emitValue(value){""===value&&(value=null),value!==this.timezoneFormattedValue&&(this.timezoneFormattedValue=value)},createConfig(){let dateFormat="Y-m-dTH:i:S",altFormat="Y-m-d H:i";"time"===this.dateType&&(dateFormat="H:i:S",altFormat="H:i"),"date"===this.dateType&&(altFormat="Y-m-d"),this.defaultConfig={time_24hr:!0,locale:this.locale,dateFormat:dateFormat,altInput:!0,altFormat:altFormat,allowInput:!0}}}};const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_datepicker_sw_datepickervue_type_script_lang_js_,(function render(){var _vm=this,_c=_vm._self._c;return _c("sw-base-field",_vm._g(_vm._b({staticClass:"sw-field--datepicker",class:{"has--focus":_vm.isDatepickerOpen},attrs:{required:_vm.required,name:_vm.formFieldName,disabled:_vm.disabled,"has-focus":_vm.isDatepickerOpen},on:{"inheritance-restore":function($event){return _vm.$emit("inheritance-restore",$event)},"inheritance-remove":function($event){return _vm.$emit("inheritance-remove",$event)}},scopedSlots:_vm._u([{key:"element",fn:function({identification:identification,disabled:disabled}){return[_c("input",{ref:"flatpickrInput",attrs:{id:identification,type:"text",name:identification,disabled:disabled,placeholder:_vm.placeholder}}),_vm._v(" "),_vm.required||!_vm.timezoneFormattedValue||disabled?_vm._e():_c("sw-icon",{staticClass:"sw-field--datepicker__button-reset-value",attrs:{"data-testid":"sw-datepicker-clear-button",name:"regular-times-xs"},on:{click:_vm.unsetValue}})]}},_vm.showTimeZoneHint?{key:"field-hint",fn:function(){return[_c("sw-icon",{attrs:{name:"solid-clock"}}),_vm._v("\n    "+_vm._s(_vm.timeZone)+"\n  ")]},proxy:!0}:null,{key:"label",fn:function(){return[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]},proxy:!0}],null,!0)},"sw-base-field",_vm.$attrs,!1),_vm.additionalEventListeners))}),[],!1,null,null,null).exports;var sw_datepicker=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"SwDatepicker",description:"",tags:{},props:[{name:"mapInheritance",mixin:{name:"form-field.mixin",path:"../../../mixins/form-field.mixin.js"},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",description:"A label for the datepicker.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"locale",description:"The locale of the datepicker.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'en'"}},{name:"timeZone",description:"The timezone of the datepicker.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'UTC'"}},{name:"value",description:"The value of the datepicker.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"config",description:"The configuration of the datepicker.\nFor reference @see https://flatpickr.js.org/options/",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dateType",description:"Configures the type of the datepicker.",type:{name:"string"},defaultValue:{func:!1,value:"'date'"},values:["time","date","datetime"]},{name:"placeholderText",description:"A placeholder text for the datepicker.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"required",description:"Determines if the datepicker is required.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Determines if the datepicker is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHint",description:"Determines if the datepicker should show the timezone hint",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"input",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-datepicker/sw-datepicker.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/mixins/form-field.mixin.js"]}},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook)if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}return{exports:scriptExports,options:options}}__webpack_require__.d(__webpack_exports__,{Z:function(){return normalizeComponent}})}}]);