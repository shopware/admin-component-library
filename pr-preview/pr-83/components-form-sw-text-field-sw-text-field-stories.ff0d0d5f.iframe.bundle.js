"use strict";(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[83780,7388],{"./src/components/form/sw-text-field/sw-text-field.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},defaultStory:function(){return defaultStory}});var _sw_text_field_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/form/sw-text-field/sw-text-field.vue"),_internal_sw_base_field_arg_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/_internal/sw-base-field/arg-types.js");const meta={title:"Components/Form/sw-text-field",component:_sw_text_field_vue__WEBPACK_IMPORTED_MODULE_0__.c,render:(args,{argTypes:argTypes})=>({template:'\n    <div>\n      <sw-text-field\n        v-bind="$props"\n        v-model="currentValue"\n        @inheritance-restore="inheritanceRestoreWrapper"\n        @inheritance-remove="inheritanceRemoveWrapper"\n        @change="change">\n          <template\n            v-if="$props.prefix"\n            #prefix>\n            {{ $props.prefix }}\n          </template>\n          <template\n            v-if="$props.suffix"\n            #suffix>\n            {{ $props.suffix }}\n          </template>\n          <template\n            v-if="$props.hint"\n            #hint>\n            {{ $props.hint }}\n          </template>\n      </sw-text-field>\n      <h4 style="display: none;">hidden</h4>\n    </div>',components:{SwTextField:_sw_text_field_vue__WEBPACK_IMPORTED_MODULE_0__.c},props:Object.keys(argTypes),data(){return{currentValue:""}},watch:{value(v){this.currentValue!==v&&(this.currentValue=v)}},created(){this.currentValue=this.value},methods:{inheritanceRemoveWrapper(){this.inheritanceRemove(...arguments),this.isInherited=!1},inheritanceRestoreWrapper(){this.inheritanceRestore(...arguments),this.isInherited=!0}}}),argTypes:{..._internal_sw_base_field_arg_types__WEBPACK_IMPORTED_MODULE_1__.c},args:{label:"Textfield label"}};__webpack_exports__.default=meta;const defaultStory={name:"sw-text-field"};defaultStory.parameters={...defaultStory.parameters,docs:{...defaultStory.parameters?.docs,source:{originalSource:"{\n  name: 'sw-text-field'\n}",...defaultStory.parameters?.docs?.source}}};const __namedExportsOrder=["defaultStory"]},"./src/components/form/_internal/sw-base-field/arg-types.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.c={change:{action:"change",table:{category:"Events"}},input:{action:"input",table:{category:"Events"}},inheritanceRemove:{action:"inheritance-remove",table:{category:"Events"}},inheritanceRestore:{action:"inheritance-restore",table:{category:"Events"}},label:{control:{type:"text"}},prefix:{control:{type:"text"}},suffix:{control:{type:"text"}},hint:{control:{type:"text"}}}},"./src/components/form/_internal/sw-field-error/sw-field-error.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return sw_field_error}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_field_error_sw_field_errorvue_type_script_lang_ts=vue_esm.cp.extend({name:"SwFieldError",i18n:{messages:{en:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Missing permissions",FRAMEWORK__DELETE_RESTRICTED:"Deletion failed",INVALID_MEDIA_URL:"Please enter a valid URL to upload a file.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"You must choose a type for this rule.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"The type can not be assigned while category is an entry point.",SHOPWARE_INVALID_IP:"Please enter a valid IP address.",INVALID_URL:"Please enter a valid url.",INVALID_MAIL:"Please enter a valid email address.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Too many requests. Please wait {seconds} seconds before trying again.",DUPLICATED_URL:"This URL is already in use. Please choose another URL.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"This field must not be empty."}},de:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Fehlende Berechtigungen",FRAMEWORK__DELETE_RESTRICTED:"Löschen fehlgeschlagen",INVALID_MEDIA_URL:"Bitte gib eine gültige URL ein, um eine Datei hochzuladen.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"Du musst einen Typ für diese Regel auswählen.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"Dieser Typ kann nicht gewählt werden, während die Kategorie als Einstiegspunkt festgelegt ist.",SHOPWARE_INVALID_IP:"Bitte gib eine gültige IP-Adresse ein.",INVALID_URL:"Bitte gib eine gültige URL ein.",INVALID_MAIL:"Bitte gib eine gültige E-Mail-Adresse ein.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Zu viele Anfragen. Bitte warten Sie {seconds} Sekunden, bevor Sie es erneut versuchen.",DUPLICATED_URL:"Diese URL wird bereits genutzt. Bitte wähle eine andere Domain.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"Dieses Feld darf nicht leer sein"}}}},components:{"sw-icon":sw_icon.c},props:{error:{type:Object,required:!1,default:null}},computed:{errorMessage(){if(!this.error)return"";const translationKey=`sw-field-error.${this.error.code}`,translation=this.$tc(translationKey,1,this.error.parameters||{});return translation===translationKey?this.error.detail:translation}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").c)(sw_field_error_sw_field_errorvue_type_script_lang_ts,(function render(){var _c=this._self._c;this._self._setupProxy;return this.error?_c("div",{staticClass:"sw-field__error",attrs:{"aria-label":"Error message"}},[_c("sw-icon",{attrs:{name:"solid-exclamation-circle"}}),this._v("\n  "+this._s(this.errorMessage)+"\n")],1):this._e()}),[],!1,null,null,null).exports;var sw_field_error=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwFieldError",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/_internal/sw-field-error/sw-field-error.vue"]}},"./src/components/form/sw-text-field/sw-text-field.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return sw_text_field}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_base_field=__webpack_require__("./src/components/form/_internal/sw-base-field/sw-base-field.vue"),sw_field_error=__webpack_require__("./src/components/form/_internal/sw-field-error/sw-field-error.vue"),sw_text_field_sw_text_fieldvue_type_script_lang_ts=vue_esm.cp.extend({name:"SwTextField",components:{"sw-field-error":sw_field_error.c,"sw-base-field":sw_base_field.c},inheritAttrs:!1,props:{value:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},label:{type:String,required:!1,default:null},helpText:{type:String,required:!1,default:null},size:{type:String,required:!1,default:"default",validator(value){return["small","default"].includes(value)}},copyable:{type:Boolean,required:!1,default:!1},copyableTooltip:{type:Boolean,required:!1,default:!1},error:{type:Object,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},isInherited:{type:Boolean,required:!1,default:!1},isInheritanceField:{type:Boolean,required:!1,default:!1},disableInheritanceToggle:{type:Boolean,required:!1,default:!1},idSuffix:{type:String,required:!1,default:""},name:{type:String,required:!1,default:null}},data(){return{currentValue:this.value,hasFocus:!1}},computed:{additionalListeners(){const additionalListeners=Object.assign({},this.$listeners);return delete additionalListeners.input,delete additionalListeners.change,additionalListeners},hasError(){return!this.isValid||!!this.error}},watch:{value(value){this.currentValue=value}},methods:{onChange(event){this.$emit("change",event.target.value||"")},onInput(event){this.$emit("input",event.target.value)},restoreInheritance(){this.$emit("input",null)},createInputId(identification){return!this.idSuffix||this.idSuffix.length<=0?identification:`${identification}-${this.idSuffix}`},setFocusClass(){this.hasFocus=!0},removeFocusClass(){this.hasFocus=!1}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").c)(sw_text_field_sw_text_fieldvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("sw-base-field",{attrs:{disabled:_vm.disabled,required:_vm.required,"is-inherited":_vm.isInherited,"is-inheritance-field":_vm.isInheritanceField,"disable-inheritance-toggle":_vm.disableInheritanceToggle,copyable:_vm.copyable,"copyable-tooltip":_vm.copyableTooltip,"copyable-text":_vm.currentValue,"has-focus":_vm.hasFocus,"help-text":_vm.helpText,name:_vm.name,size:_vm.size},on:{"inheritance-restore":function($event){return _vm.$emit("inheritance-restore",$event)},"inheritance-remove":function($event){return _vm.$emit("inheritance-remove",$event)}},scopedSlots:_vm._u([{key:"label",fn:function(){return[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]},proxy:!0},{key:"field-prefix",fn:function(){return[_vm._t("prefix")]},proxy:!0},{key:"element",fn:function({identification:identification}){return[_c("input",_vm._g({attrs:{id:_vm.createInputId(identification),type:"text",name:identification,disabled:_vm.disabled,placeholder:_vm.placeholder},domProps:{value:_vm.currentValue},on:{input:_vm.onInput,change:_vm.onChange,focus:_vm.setFocusClass,blur:_vm.removeFocusClass}},_vm.additionalListeners))]}},{key:"field-suffix",fn:function(){return[_vm._t("suffix")]},proxy:!0},{key:"error",fn:function(){return[_vm.error?_c("sw-field-error",{attrs:{error:_vm.error}}):_vm._e()]},proxy:!0},{key:"field-hint",fn:function(){return[_vm._t("hint")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports;var sw_text_field=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwTextField",exportName:"default",description:"",tags:{},props:[{name:"value",description:"The value of the text field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"label",description:"A label for your text field. Usually used to guide the user what value this field controls.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"A text that helps the user to understand what this field does.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"size",description:"The size of the text field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'default'"}},{name:"copyable",description:"Toggles the copy function of the text field.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"copyableTooltip",description:"If set to true the tooltip will change on successful copy.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"error",description:"An error in your business logic related to this field.",tags:{example:[{description:'{"code": 500, "detail": "Error while saving"}',title:"example"}]},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",description:"Determines if the field is required.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInherited",description:"Toggles the inheritance visualization.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInheritanceField",description:"Determines if the field is inheritable.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disableInheritanceToggle",description:"Determines the active state of the inheritance toggle.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"input",type:{names:["undefined"]}}],slots:[{name:"prefix"},{name:"suffix"},{name:"hint"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-text-field/sw-text-field.vue"]}}}]);