import{S as f}from"./sw-base-field-adb45841.js";import{S as m}from"./sw-icon-96b204b4.js";import{d as h,b as u,x as g,e as d,o as v,f as w,w as b,s as C,k as y}from"./vue.esm-bundler-f31f98e0.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const i=h({components:{"sw-base-field":f,"sw-icon":m},props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},size:{type:String,required:!1,default:"default",validator:e=>["small","default"].includes(e)},disabled:{type:Boolean,required:!1,default:!1}},i18n:{messages:{en:{"sw-search":{searchPlaceholder:"Search"}},de:{"sw-search":{searchPlaceholder:"Suchen"}}}},emits:["change","update:modelValue"],setup(e,{emit:s}){const o=u(!1),n=u(e.modelValue);return g(()=>e.modelValue,a=>{n.value=a}),{hasFocus:o,setFocusClass:()=>{o.value=!0},removeFocusClass:()=>{o.value=!1},onChange:a=>{s("change",a.target.value||"")},onInput:a=>{s("update:modelValue",a.target.value)},currentValue:n}}});const V=["id","name","disabled","value","placeholder"];function F(e,s,o,n,c,p){const r=d("sw-icon"),t=d("sw-base-field");return v(),w(t,{class:"sw-search",disabled:e.disabled,"has-focus":e.hasFocus,size:e.size},{element:b(({identification:a})=>[C(r,{name:"regular-search-s"}),y("input",{id:a,class:"sw-search__text-input",type:"text",name:a,disabled:e.disabled,value:e.currentValue,placeholder:e.$t(e.placeholder)?e.$t(e.placeholder).toString():e.$t("sw-search.searchPlaceholder").toString(),onInput:s[0]||(s[0]=(...l)=>e.onInput&&e.onInput(...l)),onChange:s[1]||(s[1]=(...l)=>e.onChange&&e.onChange(...l)),onFocus:s[2]||(s[2]=(...l)=>e.setFocusClass&&e.setFocusClass(...l)),onBlur:s[3]||(s[3]=(...l)=>e.removeFocusClass&&e.removeFocusClass(...l))},null,40,V)]),_:1},8,["disabled","has-focus","size"])}const B=S(i,[["render",F]]);i.__docgenInfo={exportName:"default",displayName:"sw-search",description:"",tags:{},props:[{name:"modelValue",description:"The value of the search field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"size",description:"The size of the search field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"change"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/navigation/sw-search/sw-search.vue"]};export{B as S};
