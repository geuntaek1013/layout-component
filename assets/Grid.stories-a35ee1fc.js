import{s as l,j as s}from"./styled-components.browser.esm-cd7d0523.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const o=({row:e,column:r,gap:c,css:d,children:p})=>s.jsx(u,{$row:e,$column:r,$gap:c,$css:d,children:p}),u=l.div`
  ${({$css:e})=>e}

  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({$column:e})=>e}, 1fr);
  grid-template-rows: repeat(${({$row:e})=>e}, 1fr);
  gap: ${({$gap:e})=>e||0}px;
`;try{o.displayName="Grid",o.__docgenInfo={description:"",displayName:"Grid",props:{row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"number"}},column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}}}}}catch{}const f={title:"Grid",component:o,tags:["autodocs"],argTypes:{row:{control:"number",description:"You can specify the number of rows in the grid."},column:{control:"number",description:"You can specify the number of column in the grid."},gap:{control:"number",description:"You can specify the spacing between grid child elements."},css:{description:"You can directly specify CSS properties."}}},n={args:{column:3,row:3,gap:10,css:{backgroundColor:"#000"},children:Array.from({length:10}).map((e,r)=>s.jsxs("div",{style:{height:50,backgroundColor:"#FAF1E4"},children:["GridItem",r]},r))}};var t,a,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    column: 3,
    row: 3,
    gap: 10,
    css: {
      backgroundColor: "#000"
    },
    children: Array.from({
      length: 10
    }).map((_, i) => <div key={i} style={{
      height: 50,
      backgroundColor: "#FAF1E4"
    }}>
        GridItem{i}
      </div>)
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const h=["ContainerLayout"];export{n as ContainerLayout,h as __namedExportsOrder,f as default};
//# sourceMappingURL=Grid.stories-a35ee1fc.js.map
