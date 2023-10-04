import{s as r,j as t}from"./styled-components.browser.esm-cd7d0523.js";import{r as T}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const s=e=>{const{tabs:b,children:l}=e,[i,m]=T.useState(0),u=a=>{m(a)};return t.jsxs(v,{children:[t.jsx(y,{children:b.map((a,o)=>t.jsx(h,{onClick:()=>u(o),isActive:i===o,children:a},o))}),t.jsx("section",{children:l[i]})]})},v=r.nav`
  width: 100%;
`,y=r.div`
  display: flex;
  border-bottom: 1px solid;
  padding-bottom: 10px;
`,h=r.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: ${e=>e.isActive?"#64CCC5":"transparent"};
  color: ${e=>e.isActive?"#fff":"#000"};
`;try{s.displayName="TabLayout",s.__docgenInfo={description:"",displayName:"TabLayout",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"string[]"}}}}}catch{}const g={title:"TabLayout Component",component:s,parameters:{docs:{description:{component:"TabLayout 컴포넌트는 사용자가 선택한 탭에 따라 특정 패널을 보여주는 컴포넌트입니다. (The TabLayout component is a component that displays a specific panel based on the tab selected by the user)"}}}},n={args:{tabs:["Tab 1","Tab 2","Tab 3","Tab 4","Tab 5","Tab 6"],children:[t.jsx("div",{children:"Content 1"},1),t.jsx("div",{children:"Content 2"},2),t.jsx("div",{children:"Content 3"},3),t.jsx("div",{children:"Content 4"},4),t.jsx("div",{children:"Content 5"},3),t.jsx("div",{children:"Content 6"},3)]},argTypes:{tabs:{description:"각 탭의 레이블입니다."}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5", "Tab 6"],
    children: [<div key={1}>Content 1</div>, <div key={2}>Content 2</div>, <div key={3}>Content 3</div>, <div key={4}>Content 4</div>, <div key={3}>Content 5</div>, <div key={3}>Content 6</div>]
  },
  argTypes: {
    tabs: {
      description: "각 탭의 레이블입니다."
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const f=["Example"];export{n as Example,f as __namedExportsOrder,g as default};
//# sourceMappingURL=TabLayout.stories-91b4259f.js.map
