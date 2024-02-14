import{d as G,e as S,f as x,w as y,o as C,g as _,t as L,k as U,q as X,n as Z,j as J,l as K}from"./vue.esm-bundler-f31f98e0.js";import{S as Q}from"./sw-text-field-8b69188c.js";import{S as Y}from"./sw-icon-96b204b4.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{b as te}from"./arg-types-a7a95a2c.js";import"./sw-base-field-adb45841.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-660be3d3.js";import"./iframe-e9565955.js";import"../sb-preview/runtime.js";const b=2147483647,c=36,A=1,V=26,re=38,ne=700,E=72,M=128,B="-",le=/^xn--/,se=/[^\0-\x7F]/,ie=/[\x2E\u3002\uFF0E\uFF61]/g,oe={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},T=c-A,f=Math.floor,F=String.fromCharCode;function m(e){throw new RangeError(oe[e])}function ae(e,t){const n=[];let r=e.length;for(;r--;)n[r]=t(e[r]);return n}function N(e,t){const n=e.split("@");let r="";n.length>1&&(r=n[0]+"@",e=n[1]),e=e.replace(ie,".");const l=e.split("."),o=ae(l,t).join(".");return r+o}function z(e){const t=[];let n=0;const r=e.length;for(;n<r;){const l=e.charCodeAt(n++);if(l>=55296&&l<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((l&1023)<<10)+(o&1023)+65536):(t.push(l),n--)}else t.push(l)}return t}const ue=e=>String.fromCodePoint(...e),de=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:c},R=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},P=function(e,t,n){let r=0;for(e=n?f(e/ne):e>>1,e+=f(e/t);e>T*V>>1;r+=c)e=f(e/T);return f(r+(T+1)*e/(e+re))},H=function(e){const t=[],n=e.length;let r=0,l=M,o=E,d=e.lastIndexOf(B);d<0&&(d=0);for(let a=0;a<d;++a)e.charCodeAt(a)>=128&&m("not-basic"),t.push(e.charCodeAt(a));for(let a=d>0?d+1:0;a<n;){const u=r;for(let s=1,p=c;;p+=c){a>=n&&m("invalid-input");const h=de(e.charCodeAt(a++));h>=c&&m("invalid-input"),h>f((b-r)/s)&&m("overflow"),r+=h*s;const g=p<=o?A:p>=o+V?V:p-o;if(h<g)break;const v=c-g;s>f(b/v)&&m("overflow"),s*=v}const i=t.length+1;o=P(r-u,i,u==0),f(r/i)>b-l&&m("overflow"),l+=f(r/i),r%=i,t.splice(r++,0,l)}return String.fromCodePoint(...t)},j=function(e){const t=[];e=z(e);const n=e.length;let r=M,l=0,o=E;for(const u of e)u<128&&t.push(F(u));const d=t.length;let a=d;for(d&&t.push(B);a<n;){let u=b;for(const s of e)s>=r&&s<u&&(u=s);const i=a+1;u-r>f((b-l)/i)&&m("overflow"),l+=(u-r)*i,r=u;for(const s of e)if(s<r&&++l>b&&m("overflow"),s===r){let p=l;for(let h=c;;h+=c){const g=h<=o?A:h>=o+V?V:h-o;if(p<g)break;const v=p-g,q=c-g;t.push(F(R(g+v%q,0))),p=f(v/q)}t.push(F(R(p,0))),o=P(l,i,a===d),l=0,++a}++l,++r}return t.join("")},ce=function(e){return N(e,function(t){return le.test(t)?H(t.slice(4).toLowerCase()):t})},fe=function(e){return N(e,function(t){return se.test(t)?"xn--"+j(t):t})},pe={version:"2.3.1",ucs2:{decode:z,encode:ue},decode:H,encode:j,toASCII:fe,toUnicode:ce};function he(e){if(!e)return"";const t=pe.toUnicode(e);return decodeURI(t)}const w={PROTOCOL:/([a-zA-Z0-9]+:\/\/)+/,PROTOCOL_HTTP:/^https?:\/\//,SSL:/^\s*https:\/\//,TRAILING_SLASH:/\/+$/},W=G({name:"SwUrlField",components:{"sw-icon":Y},extends:Q,inheritAttrs:!1,props:{omitUrlHash:{type:Boolean,default:!1},omitUrlSearch:{type:Boolean,default:!1}},data(){return{sslActive:!0,currentValue:this.modelValue||"",errorUrl:null,currentDebounce:null}},computed:{prefixClass(){return this.sslActive?"is--ssl":""},urlPrefix(){return this.sslActive?"https://":"http://"},url(){const e=this.currentValue.trim();return e===""?"":`${this.urlPrefix}${e}`},combinedError(){return this.errorUrl??this.error}},watch:{value(){this.checkInput(this.modelValue||"")}},created(){this.createdComponent()},methods:{createdComponent(){this.checkInput(this.currentValue)},unicodeUri(e){return he(e)},onBlur(e){this.checkInput(e.target.value)},checkInput(e){if(this.errorUrl=null,!e.length){this.handleEmptyUrl();return}e.match(w.PROTOCOL_HTTP)&&(this.sslActive=this.getSSLMode(e));const t=this.validateCurrentValue(e);t?(this.currentValue=t,this.$emit("update:modelValue",this.url)):this.setInvalidUrlError()},handleEmptyUrl(){this.currentValue="",this.$emit("update:modelValue","")},validateCurrentValue(e){const t=this.getURLInstance(e);if(!t)return null;this.omitUrlSearch&&(t.search=""),this.omitUrlHash&&(t.hash="");const n=t.hash===""&&t.search===""?w.TRAILING_SLASH:"";return t.toString().replace(w.PROTOCOL,"").replace(n,"").replace(t.host,this.unicodeUri(t.host))},changeMode(e){e||(this.sslActive=!this.sslActive,this.$emit("update:modelValue",this.url))},getURLInstance(e){try{const t=e.match(w.PROTOCOL)?e:`${this.urlPrefix}${e}`;return new URL(t)}catch{return this.setInvalidUrlError(),null}},getSSLMode(e){return!!e.match(w.SSL)},setInvalidUrlError(){console.error({code:"INVALID_URL"})}}});const me={"aria-describedby":"url-prefix"},ge=["id","name","value","placeholder","disabled"];function be(e,t,n,r,l,o){const d=S("sw-icon"),a=S("sw-field-error"),u=S("sw-base-field");return C(),x(u,{class:"sw-field--url",disabled:e.disabled,required:e.required,"is-inherited":e.isInherited,"is-inheritance-field":e.isInheritanceField,"disable-inheritance-toggle":e.disableInheritanceToggle,copyable:e.copyable,"copyable-tooltip":e.copyableTooltip,"copyable-text":e.url,"has-focus":e.hasFocus,"help-text":e.helpText,name:e.name,size:e.size,onInheritanceRestore:t[4]||(t[4]=i=>e.$emit("inheritance-restore",i)),onInheritanceRemove:t[5]||(t[5]=i=>e.$emit("inheritance-remove",i))},{label:y(()=>[_(L(e.label),1)]),"field-prefix":y(()=>[U("span",{class:X(["sw-field__url-input__prefix",e.prefixClass]),"aria-describedby":"ssl-switch",role:"button",onClick:t[0]||(t[0]=i=>e.changeMode(e.disabled))},[e.sslActive?(C(),x(d,{key:0,name:"regular-lock",small:!0})):(C(),x(d,{key:1,name:"regular-lock-open",small:!0})),U("span",me,L(e.urlPrefix),1)],2)]),element:y(({identification:i})=>[U("input",{id:i,type:"url",class:"sw-url-input-field__input",name:i,value:e.unicodeUri(e.currentValue),placeholder:e.placeholder,disabled:e.disabled,onInput:t[1]||(t[1]=Z((...s)=>e.onInput&&e.onInput(...s),["stop"])),onFocus:t[2]||(t[2]=(...s)=>e.setFocusClass&&e.setFocusClass(...s)),onBlur:t[3]||(t[3]=s=>{e.onBlur(s),e.removeFocusClass()})},null,40,ge)]),"field-suffix":y(()=>[J(e.$slots,"suffix")]),error:y(()=>[e.error?(C(),x(a,{key:0,error:e.error},null,8,["error"])):K("",!0)]),_:3},8,["disabled","required","is-inherited","is-inheritance-field","disable-inheritance-toggle","copyable","copyable-tooltip","copyable-text","has-focus","help-text","name","size"])}const $=ee(W,[["render",be]]);W.__docgenInfo={displayName:"SwUrlField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:"The value of the text field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"label",description:"A label for your text field. Usually used to guide the user what value this field controls.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"A text that helps the user to understand what this field does.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"size",description:"The size of the text field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'default'"}},{name:"copyable",description:"Toggles the copy function of the text field.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"copyableTooltip",description:"If set to true the tooltip will change on successful copy.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"error",description:"An error in your business logic related to this field.",tags:{example:[{description:'{"code": 500, "detail": "Error while saving"}',title:"example"}]},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",description:"Determines if the field is required.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInherited",description:"Toggles the inheritance visualization.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInheritanceField",description:"Determines if the field is inheritable.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disableInheritanceToggle",description:"Determines the active state of the inheritance toggle.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"idSuffix",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"name",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"omitUrlHash",description:"If set to true then all url hashes will be removed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"omitUrlSearch",description:"If set to true then all query parameters will be removed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"suffix"},{name:"prefix"},{name:"hint"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-text-field/sw-text-field.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-url-field/sw-url-field.vue"]};const Le={title:"Components/Form/sw-url-field",component:$,render:e=>({components:{SwUrlField:$},template:`<div>
        <sw-url-field
          v-bind="args"
          :modelValue="currentValue"
          @change="onChange"
          @update:modelValue="args.updateModelValue"
          @inheritance-restore="inheritanceRestoreWrapper"
          @inheritance-remove="inheritanceRemoveWrapper">
          <template
            v-if="$props.prefix"
            #prefix>
            {{ $props.prefix }}
          </template>
          <template
            v-if="$props.suffix"
            #suffix>
            {{ $props.suffix }}
          </template>
          <template
            v-if="$props.hint"
            #hint>
            {{ $props.hint }}
          </template>
        </sw-url-field>
  
        <h4 style="display: none;">hidden</h4>
      </div>`,data(){return{currentValue:""}},watch:{"args.modelValue"(t){this.currentValue=t}},created(){this.currentValue=e.modelValue},methods:{inheritanceRemoveWrapper(t){e.inheritanceRemove(...t),e.isInherited=!1},inheritanceRestoreWrapper(t){e.inheritanceRestore(...t),e.isInherited=!0},onChange(t){e.change(t),this.currentValue=t}},setup:()=>({args:e})}),args:{label:"Url field",size:"default"},argTypes:{...te}},I={name:"sw-url-field"};var k,O,D;I.parameters={...I.parameters,docs:{...(k=I.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'sw-url-field'
}`,...(D=(O=I.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const Re=["DefaultStory"];export{I as DefaultStory,Re as __namedExportsOrder,Le as default};
