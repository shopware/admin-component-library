import{w as R,u as i}from"./index-912b65a3.js";import{j as B,e as o}from"./index-b9ac83fc.js";import V from"./sw-search.stories-7d898988.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-search-f8f8abe2.js";import"./sw-base-field-b77ca833.js";import"./vue.esm-bundler-651c6785.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-682d28c1.js";import"./iframe-4e8d603d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";const Q={...V,title:"Interaction Tests/Navigation/sw-search"},e={name:"Should keep input value",args:{change:B.fn()},play:async({args:y,canvasElement:T})=>{const n=R(T);await i.type(n.getByRole("textbox"),"Shopware"),await i.click(n.getByText("hidden")),await o(n.getByRole("textbox").value).toBe("Shopware"),await o(y.change).toHaveBeenCalledWith("Shopware")}},a={name:"Render the default sized search",args:{size:"default"}},s={name:"Render the small sized search",args:{size:"small"}},t={name:"Render the default sized search disabled",args:{size:"default",disabled:!0}},r={name:"Render the small sized search disabled",args:{size:"small",disabled:!0}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Should keep input value',
  args: {
    change: jest.fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    // we can't use canvasElement because it is not available anymore
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'Shopware');
    await userEvent.click(canvas.getByText('hidden'));
    await expect(canvas.getByRole('textbox').value).toBe('Shopware');
    await expect(args.change).toHaveBeenCalledWith('Shopware');
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Render the default sized search',
  args: {
    size: 'default'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Render the small sized search',
  args: {
    size: 'small'
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var z,v,w;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Render the default sized search disabled',
  args: {
    size: 'default',
    disabled: true
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,f,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Render the small sized search disabled',
  args: {
    size: 'small',
    disabled: true
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const U=["TestInputValue","VisualTestDefaultSize","VisualTestSmallSize","VisualTestDefaultSizeDisabled","VisualTestSmallSizeDisabled"];export{e as TestInputValue,a as VisualTestDefaultSize,t as VisualTestDefaultSizeDisabled,s as VisualTestSmallSize,r as VisualTestSmallSizeDisabled,U as __namedExportsOrder,Q as default};
