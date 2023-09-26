import{s as o,j as t}from"./styled-components.browser.esm-cd7d0523.js";import{r as T}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const r=e=>{const{tabs:b,children:l}=e,[i,m]=T.useState(0),u=a=>{m(a)};return t.jsxs(v,{children:[t.jsx(y,{children:b.map((a,s)=>t.jsx(C,{onClick:()=>u(s),isActive:i===s,children:a},s))}),t.jsx(h,{children:l[i]})]})},v=o.nav`
  width: 100%;
`,y=o.div`
  display: flex;
  /* gap: 1%; */
  border-bottom: 1px solid;
  padding-bottom: 10px;
`,C=o.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: ${e=>e.isActive?"#64CCC5":"transparent"};
  color: ${e=>e.isActive?"#fff":"#000"};
`,h=o.section``;try{r.displayName="TabLayout",r.__docgenInfo={description:"",displayName:"TabLayout",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"string[]"}}}}}catch{}const g={title:"TabLayout Component",component:r,parameters:{docs:{description:{component:"TabLayout 컴포넌트는 사용자가 선택한 탭에 따라 특정 패널을 보여주는 컴포넌트입니다. (The TabLayout component is a component that displays a specific panel based on the tab selected by the user)"}}}},n={args:{tabs:["Tab 1","Tab 2","Tab 3","Tab 4","Tab 5","Tab 6"],children:[t.jsx("div",{children:"Content 1"},1),t.jsx("div",{children:"Content 2"},2),t.jsx("div",{children:"Content 3"},3),t.jsx("div",{children:"Content 4"},4),t.jsx("div",{children:"Content 5"},3),t.jsx("div",{children:"Content 6"},3)]}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5", "Tab 6"],
    children: [<div key={1}>Content 1</div>, <div key={2}>Content 2</div>, <div key={3}>Content 3</div>, <div key={4}>Content 4</div>, <div key={3}>Content 5</div>, <div key={3}>Content 6</div>]
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["Example"];export{n as Example,_ as __namedExportsOrder,g as default};
//# sourceMappingURL=TabLayout.stories-18b04f0e.js.map
