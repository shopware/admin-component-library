(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[65085],{"./src/components/form/sw-switch/sw-switch.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _sw_switch_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/form/sw-switch/sw-switch.vue");__webpack_exports__.default={title:"Components/Form/sw-switch",component:_sw_switch_vue__WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:{change:{action:"change",table:{category:"Events"}},"inheritance-restore":{action:"inheritance-restore",table:{category:"Events"}},inheritanceRemove:{action:"inheritance-remove",table:{category:"Events"}},label:{control:{type:"text"}}},args:{label:"Switchfield"}};const Default=((args,{argTypes:argTypes})=>({props:Object.keys(argTypes),components:{SwSwitch:_sw_switch_vue__WEBPACK_IMPORTED_MODULE_0__.Z},template:'<sw-switch v-bind="$props" @change="change" @inheritance-remove="inheritanceRemove"></sw-switch>'})).bind({});Default.storyName="sw-switch",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args, {\n  argTypes\n}) => ({\n  props: Object.keys(argTypes),\n  components: {\n    SwSwitch\n  },\n  template: \'<sw-switch v-bind="$props" @change="change" @inheritance-remove="inheritanceRemove"></sw-switch>\'\n})',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/core-js/internals/a-possible-prototype.js":function(module,__unused_webpack_exports,__webpack_require__){var isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),$String=String,$TypeError=TypeError;module.exports=function(argument){if("object"==typeof argument||isCallable(argument))return argument;throw $TypeError("Can't set "+$String(argument)+" as a prototype")}},"./node_modules/core-js/internals/array-buffer-basic-detection.js":function(module){module.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},"./node_modules/core-js/internals/array-buffer-view-core.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var NAME,Constructor,Prototype,NATIVE_ARRAY_BUFFER=__webpack_require__("./node_modules/core-js/internals/array-buffer-basic-detection.js"),DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),classof=__webpack_require__("./node_modules/core-js/internals/classof.js"),tryToString=__webpack_require__("./node_modules/core-js/internals/try-to-string.js"),createNonEnumerableProperty=__webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),defineProperty=__webpack_require__("./node_modules/core-js/internals/object-define-property.js").f,isPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js"),getPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js"),setPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js"),wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),uid=__webpack_require__("./node_modules/core-js/internals/uid.js"),InternalStateModule=__webpack_require__("./node_modules/core-js/internals/internal-state.js"),enforceInternalState=InternalStateModule.enforce,getInternalState=InternalStateModule.get,Int8Array=global.Int8Array,Int8ArrayPrototype=Int8Array&&Int8Array.prototype,Uint8ClampedArray=global.Uint8ClampedArray,Uint8ClampedArrayPrototype=Uint8ClampedArray&&Uint8ClampedArray.prototype,TypedArray=Int8Array&&getPrototypeOf(Int8Array),TypedArrayPrototype=Int8ArrayPrototype&&getPrototypeOf(Int8ArrayPrototype),ObjectPrototype=Object.prototype,TypeError=global.TypeError,TO_STRING_TAG=wellKnownSymbol("toStringTag"),TYPED_ARRAY_TAG=uid("TYPED_ARRAY_TAG"),NATIVE_ARRAY_BUFFER_VIEWS=NATIVE_ARRAY_BUFFER&&!!setPrototypeOf&&"Opera"!==classof(global.opera),TYPED_ARRAY_TAG_REQUIRED=!1,TypedArrayConstructorsList={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},BigIntArrayConstructorsList={BigInt64Array:8,BigUint64Array:8},getTypedArrayConstructor=function(it){var proto=getPrototypeOf(it);if(isObject(proto)){var state=getInternalState(proto);return state&&hasOwn(state,"TypedArrayConstructor")?state.TypedArrayConstructor:getTypedArrayConstructor(proto)}},isTypedArray=function(it){if(!isObject(it))return!1;var klass=classof(it);return hasOwn(TypedArrayConstructorsList,klass)||hasOwn(BigIntArrayConstructorsList,klass)};for(NAME in TypedArrayConstructorsList)(Prototype=(Constructor=global[NAME])&&Constructor.prototype)?enforceInternalState(Prototype).TypedArrayConstructor=Constructor:NATIVE_ARRAY_BUFFER_VIEWS=!1;for(NAME in BigIntArrayConstructorsList)(Prototype=(Constructor=global[NAME])&&Constructor.prototype)&&(enforceInternalState(Prototype).TypedArrayConstructor=Constructor);if((!NATIVE_ARRAY_BUFFER_VIEWS||!isCallable(TypedArray)||TypedArray===Function.prototype)&&(TypedArray=function TypedArray(){throw TypeError("Incorrect invocation")},NATIVE_ARRAY_BUFFER_VIEWS))for(NAME in TypedArrayConstructorsList)global[NAME]&&setPrototypeOf(global[NAME],TypedArray);if((!NATIVE_ARRAY_BUFFER_VIEWS||!TypedArrayPrototype||TypedArrayPrototype===ObjectPrototype)&&(TypedArrayPrototype=TypedArray.prototype,NATIVE_ARRAY_BUFFER_VIEWS))for(NAME in TypedArrayConstructorsList)global[NAME]&&setPrototypeOf(global[NAME].prototype,TypedArrayPrototype);if(NATIVE_ARRAY_BUFFER_VIEWS&&getPrototypeOf(Uint8ClampedArrayPrototype)!==TypedArrayPrototype&&setPrototypeOf(Uint8ClampedArrayPrototype,TypedArrayPrototype),DESCRIPTORS&&!hasOwn(TypedArrayPrototype,TO_STRING_TAG))for(NAME in TYPED_ARRAY_TAG_REQUIRED=!0,defineProperty(TypedArrayPrototype,TO_STRING_TAG,{get:function(){return isObject(this)?this[TYPED_ARRAY_TAG]:void 0}}),TypedArrayConstructorsList)global[NAME]&&createNonEnumerableProperty(global[NAME],TYPED_ARRAY_TAG,NAME);module.exports={NATIVE_ARRAY_BUFFER_VIEWS:NATIVE_ARRAY_BUFFER_VIEWS,TYPED_ARRAY_TAG:TYPED_ARRAY_TAG_REQUIRED&&TYPED_ARRAY_TAG,aTypedArray:function(it){if(isTypedArray(it))return it;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(C){if(isCallable(C)&&(!setPrototypeOf||isPrototypeOf(TypedArray,C)))return C;throw TypeError(tryToString(C)+" is not a typed array constructor")},exportTypedArrayMethod:function(KEY,property,forced,options){if(DESCRIPTORS){if(forced)for(var ARRAY in TypedArrayConstructorsList){var TypedArrayConstructor=global[ARRAY];if(TypedArrayConstructor&&hasOwn(TypedArrayConstructor.prototype,KEY))try{delete TypedArrayConstructor.prototype[KEY]}catch(error){try{TypedArrayConstructor.prototype[KEY]=property}catch(error2){}}}TypedArrayPrototype[KEY]&&!forced||defineBuiltIn(TypedArrayPrototype,KEY,forced?property:NATIVE_ARRAY_BUFFER_VIEWS&&Int8ArrayPrototype[KEY]||property,options)}},exportTypedArrayStaticMethod:function(KEY,property,forced){var ARRAY,TypedArrayConstructor;if(DESCRIPTORS){if(setPrototypeOf){if(forced)for(ARRAY in TypedArrayConstructorsList)if((TypedArrayConstructor=global[ARRAY])&&hasOwn(TypedArrayConstructor,KEY))try{delete TypedArrayConstructor[KEY]}catch(error){}if(TypedArray[KEY]&&!forced)return;try{return defineBuiltIn(TypedArray,KEY,forced?property:NATIVE_ARRAY_BUFFER_VIEWS&&TypedArray[KEY]||property)}catch(error){}}for(ARRAY in TypedArrayConstructorsList)!(TypedArrayConstructor=global[ARRAY])||TypedArrayConstructor[KEY]&&!forced||defineBuiltIn(TypedArrayConstructor,KEY,property)}},getTypedArrayConstructor:getTypedArrayConstructor,isView:function isView(it){if(!isObject(it))return!1;var klass=classof(it);return"DataView"===klass||hasOwn(TypedArrayConstructorsList,klass)||hasOwn(BigIntArrayConstructorsList,klass)},isTypedArray:isTypedArray,TypedArray:TypedArray,TypedArrayPrototype:TypedArrayPrototype}},"./node_modules/core-js/internals/array-from-constructor-and-list.js":function(module,__unused_webpack_exports,__webpack_require__){var lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");module.exports=function(Constructor,list){for(var index=0,length=lengthOfArrayLike(list),result=new Constructor(length);length>index;)result[index]=list[index++];return result}},"./node_modules/core-js/internals/array-to-reversed.js":function(module,__unused_webpack_exports,__webpack_require__){var lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");module.exports=function(O,C){for(var len=lengthOfArrayLike(O),A=new C(len),k=0;k<len;k++)A[k]=O[len-k-1];return A}},"./node_modules/core-js/internals/array-with.js":function(module,__unused_webpack_exports,__webpack_require__){var lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),toIntegerOrInfinity=__webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js"),$RangeError=RangeError;module.exports=function(O,C,index,value){var len=lengthOfArrayLike(O),relativeIndex=toIntegerOrInfinity(index),actualIndex=relativeIndex<0?len+relativeIndex:relativeIndex;if(actualIndex>=len||actualIndex<0)throw $RangeError("Incorrect index");for(var A=new C(len),k=0;k<len;k++)A[k]=k===actualIndex?value:O[k];return A}},"./node_modules/core-js/internals/classof.js":function(module,__unused_webpack_exports,__webpack_require__){var TO_STRING_TAG_SUPPORT=__webpack_require__("./node_modules/core-js/internals/to-string-tag-support.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),classofRaw=__webpack_require__("./node_modules/core-js/internals/classof-raw.js"),TO_STRING_TAG=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),$Object=Object,CORRECT_ARGUMENTS="Arguments"==classofRaw(function(){return arguments}());module.exports=TO_STRING_TAG_SUPPORT?classofRaw:function(it){var O,tag,result;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(tag=function(it,key){try{return it[key]}catch(error){}}(O=$Object(it),TO_STRING_TAG))?tag:CORRECT_ARGUMENTS?classofRaw(O):"Object"==(result=classofRaw(O))&&isCallable(O.callee)?"Arguments":result}},"./node_modules/core-js/internals/correct-prototype-getter.js":function(module,__unused_webpack_exports,__webpack_require__){var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=!fails((function(){function F(){}return F.prototype.constructor=null,Object.getPrototypeOf(new F)!==F.prototype}))},"./node_modules/core-js/internals/is-big-int-array.js":function(module,__unused_webpack_exports,__webpack_require__){var classof=__webpack_require__("./node_modules/core-js/internals/classof.js"),slice=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js")("".slice);module.exports=function(it){return"Big"===slice(classof(it),0,3)}},"./node_modules/core-js/internals/object-get-prototype-of.js":function(module,__unused_webpack_exports,__webpack_require__){var hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),sharedKey=__webpack_require__("./node_modules/core-js/internals/shared-key.js"),CORRECT_PROTOTYPE_GETTER=__webpack_require__("./node_modules/core-js/internals/correct-prototype-getter.js"),IE_PROTO=sharedKey("IE_PROTO"),$Object=Object,ObjectPrototype=$Object.prototype;module.exports=CORRECT_PROTOTYPE_GETTER?$Object.getPrototypeOf:function(O){var object=toObject(O);if(hasOwn(object,IE_PROTO))return object[IE_PROTO];var constructor=object.constructor;return isCallable(constructor)&&object instanceof constructor?constructor.prototype:object instanceof $Object?ObjectPrototype:null}},"./node_modules/core-js/internals/object-set-prototype-of.js":function(module,__unused_webpack_exports,__webpack_require__){var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),aPossiblePrototype=__webpack_require__("./node_modules/core-js/internals/a-possible-prototype.js");module.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var setter,CORRECT_SETTER=!1,test={};try{(setter=uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(test,[]),CORRECT_SETTER=test instanceof Array}catch(error){}return function setPrototypeOf(O,proto){return anObject(O),aPossiblePrototype(proto),CORRECT_SETTER?setter(O,proto):O.__proto__=proto,O}}():void 0)},"./node_modules/core-js/internals/to-big-int.js":function(module,__unused_webpack_exports,__webpack_require__){var toPrimitive=__webpack_require__("./node_modules/core-js/internals/to-primitive.js"),$TypeError=TypeError;module.exports=function(argument){var prim=toPrimitive(argument,"number");if("number"==typeof prim)throw $TypeError("Can't convert number to bigint");return BigInt(prim)}},"./node_modules/core-js/internals/to-string-tag-support.js":function(module,__unused_webpack_exports,__webpack_require__){var test={};test[__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag")]="z",module.exports="[object z]"===String(test)},"./node_modules/core-js/modules/esnext.typed-array.to-reversed.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){"use strict";var arrayToReversed=__webpack_require__("./node_modules/core-js/internals/array-to-reversed.js"),ArrayBufferViewCore=__webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js"),aTypedArray=ArrayBufferViewCore.aTypedArray,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor;exportTypedArrayMethod("toReversed",(function toReversed(){return arrayToReversed(aTypedArray(this),getTypedArrayConstructor(this))}))},"./node_modules/core-js/modules/esnext.typed-array.to-sorted.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){"use strict";var ArrayBufferViewCore=__webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),arrayFromConstructorAndList=__webpack_require__("./node_modules/core-js/internals/array-from-constructor-and-list.js"),aTypedArray=ArrayBufferViewCore.aTypedArray,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,sort=uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);exportTypedArrayMethod("toSorted",(function toSorted(compareFn){void 0!==compareFn&&aCallable(compareFn);var O=aTypedArray(this),A=arrayFromConstructorAndList(getTypedArrayConstructor(O),O);return sort(A,compareFn)}))},"./node_modules/core-js/modules/esnext.typed-array.with.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){"use strict";var arrayWith=__webpack_require__("./node_modules/core-js/internals/array-with.js"),ArrayBufferViewCore=__webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js"),isBigIntArray=__webpack_require__("./node_modules/core-js/internals/is-big-int-array.js"),toIntegerOrInfinity=__webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js"),toBigInt=__webpack_require__("./node_modules/core-js/internals/to-big-int.js"),aTypedArray=ArrayBufferViewCore.aTypedArray,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,PROPER_ORDER=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(error){return 8===error}}();exportTypedArrayMethod("with",{with:function(index,value){var O=aTypedArray(this),relativeIndex=toIntegerOrInfinity(index),actualValue=isBigIntArray(O)?toBigInt(value):+value;return arrayWith(O,getTypedArrayConstructor(O),relativeIndex,actualValue)}}.with,!PROPER_ORDER)},"./src/components/form/_internal/sw-field-error/sw-field-error.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_field_error}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_field_error_sw_field_errorvue_type_script_lang_ts_=vue_esm.ZP.extend({name:"SwFieldError",i18n:{messages:{en:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Missing permissions",FRAMEWORK__DELETE_RESTRICTED:"Deletion failed",INVALID_MEDIA_URL:"Please enter a valid URL to upload a file.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"You must choose a type for this rule.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"The type can not be assigned while category is an entry point.",SHOPWARE_INVALID_IP:"Please enter a valid IP address.",INVALID_URL:"Please enter a valid url.",INVALID_MAIL:"Please enter a valid email address.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Too many requests. Please wait {seconds} seconds before trying again.",DUPLICATED_URL:"This URL is already in use. Please choose another URL.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"This field must not be empty."}},de:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Fehlende Berechtigungen",FRAMEWORK__DELETE_RESTRICTED:"Löschen fehlgeschlagen",INVALID_MEDIA_URL:"Bitte gib eine gültige URL ein, um eine Datei hochzuladen.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"Du musst einen Typ für diese Regel auswählen.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"Dieser Typ kann nicht gewählt werden, während die Kategorie als Einstiegspunkt festgelegt ist.",SHOPWARE_INVALID_IP:"Bitte gib eine gültige IP-Adresse ein.",INVALID_URL:"Bitte gib eine gültige URL ein.",INVALID_MAIL:"Bitte gib eine gültige E-Mail-Adresse ein.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Zu viele Anfragen. Bitte warten Sie {seconds} Sekunden, bevor Sie es erneut versuchen.",DUPLICATED_URL:"Diese URL wird bereits genutzt. Bitte wähle eine andere Domain.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"Dieses Feld darf nicht leer sein"}}}},components:{"sw-icon":sw_icon.Z},props:{error:{type:Object,required:!1,default:null}},computed:{errorMessage(){if(!this.error)return"";const translationKey=`sw-field-error.${this.error.code}`,translation=this.$tc(translationKey,1,this.error.parameters||{});return translation===translationKey?this.error.detail:translation}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_field_error_sw_field_errorvue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return this.error?_c("div",{staticClass:"sw-field__error",attrs:{"aria-label":"Error message"}},[_c("sw-icon",{attrs:{name:"solid-exclamation-circle"}}),this._v("\n  "+this._s(this.errorMessage)+"\n")],1):this._e()}),[],!1,null,null,null).exports;var sw_field_error=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwFieldError",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/_internal/sw-field-error/sw-field-error.vue"]}},"./src/components/form/sw-switch/sw-switch.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_switch}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_base_field=__webpack_require__("./src/components/form/_internal/sw-base-field/sw-base-field.vue"),sw_field_error=__webpack_require__("./src/components/form/_internal/sw-field-error/sw-field-error.vue"),form_field_mixin=__webpack_require__("./src/mixins/form-field.mixin.js"),uuid=__webpack_require__("./src/utils/uuid.js"),sw_switch_sw_switchvue_type_script_lang_ts_=vue_esm.ZP.extend({name:"SwSwitch",components:{"sw-base-field":sw_base_field.Z,"sw-field-error":sw_field_error.Z},mixins:[form_field_mixin.Z],inheritAttrs:!1,props:{label:{type:String,required:!0},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},checked:{type:Boolean,required:!1,default:null},bordered:{type:Boolean,required:!1,default:!1},inheritedValue:{type:Boolean,required:!1,default:null},helpText:{type:String,required:!1,default:null},error:{type:Object,required:!1,default:null},removeTopMargin:{type:Boolean,required:!1,default:!1}},data(){return{currentValue:this.checked,id:(0,uuid.M)()}},computed:{identification(){return`sw-field--${this.id}`},inputState(){return this.isInherited?this.inheritedValue:this.currentValue||!1},isInheritanceField(){return!!this.$attrs.isInheritanceField||null!==this.inheritedValue},isInherited(){return!!this.$attrs.isInherited||this.isInheritanceField&&null===this.currentValue},hasError(){return this.error&&0!==this.error.code},swSwitchFieldClasses(){return[Object.assign({"has--error":this.hasError,"sw-field--switch-bordered":this.bordered,"sw-field--switch-no-margin-top":this.removeTopMargin,"sw-field--switch-no-margin-bottom":this.hasError},this.swCheckboxFieldClasses)]},errorClasses(){return[{"sw-field__error--move-up":!this.bordered}]},isDisabled(){return this.disabled||this.isInherited}},watch:{checked(){this.currentValue=this.checked}},methods:{onChange(changeEvent){this.$emit("change",changeEvent.target.checked)},onInheritanceRestore(event){this.$emit("inheritance-restore",event)}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_switch_sw_switchvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"sw-field--switch__container"},[_c("div",{staticClass:"sw-field--switch",class:_vm.swSwitchFieldClasses},[_c("div",{staticClass:"sw-field--switch__content"},[_c("div",{staticClass:"sw-field--switch__input"},[_c("input",{attrs:{id:_vm.identification,type:"checkbox",name:_vm.formFieldName||_vm.identification,disabled:_vm.isDisabled},domProps:{checked:_vm.inputState},on:{change:_vm.onChange}}),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c("sw-base-field",_vm._b({attrs:{disabled:_vm.disabled,required:_vm.required,name:_vm.identification,"has-focus":!1,"help-text":_vm.helpText,"is-inheritance-field":_vm.isInheritanceField,"is-inherited":_vm.isInherited},on:{"inheritance-restore":function($event){return _vm.onInheritanceRestore($event)},"inheritance-remove":function($event){return _vm.$emit("inheritance-remove",$event)}},scopedSlots:_vm._u([{key:"label",fn:function(){return[_vm._v("\n          "+_vm._s(_vm.label)+"\n        ")]},proxy:!0}])},"sw-base-field",_vm.$attrs,!1))],1)]),_vm._v(" "),_c("sw-field-error",{class:_vm.errorClasses,attrs:{error:_vm.error}})],1)}),[function(){var _c=this._self._c;this._self._setupProxy;return _c("div",{staticClass:"sw-field__switch-state"},[_c("div",{staticClass:"sw-field__switch-state-knob"})])}],!1,null,null,null).exports;var sw_switch=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"SwSwitch",description:"",tags:{},props:[{name:"mapInheritance",mixin:{name:"form-field.mixin",path:"../../../mixins/form-field.mixin.js"},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!0},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"checked",description:"Determines the checked state of the checkbox.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"bordered",description:"Determines if the field is surrounded by a border.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"inheritedValue",description:"Inherited value from another SalesChannel.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"Help text with additional information for the field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"error",description:"Error object for this field.",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"removeTopMargin",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"inheritance-restore",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-switch/sw-switch.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/mixins/form-field.mixin.js"]}}}]);