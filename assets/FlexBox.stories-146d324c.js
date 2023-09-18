import{s as p,j as l}from"./styled-components.browser.esm-cd7d0523.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function a({direction:e,justify:t,align:s,gap:c,css:u,children:d}){return l.jsx(f,{$direction:e,$justify:t,$align:s,$gap:c,css:u,children:d})}const f=p.div`
  ${({css:e})=>e}
  display: flex;
  flex-direction: ${({$direction:e})=>e===void 0?"row":e};
  justify-content: ${({$justify:e})=>e===void 0?"flex-start":e};
  align-items: ${({$align:e})=>e===void 0?"flex-start":e};
  gap: ${({$gap:e})=>e===void 0?0:e}px;
`;try{a.displayName="FlexBox",a.__docgenInfo={description:"",displayName:"FlexBox",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"flex-end"'},{value:'"center"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"flex-end"'},{value:'"center"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}}}}}catch{}const g={title:"FlexBox",component:a,tags:["autodocs"],argTypes:{align:{options:["flex-start","center","flex-end","space-between","space-around"],control:{type:"radio"},defaultValue:3,description:"You can specify the vertical alignment criteria for FlexBox."},justify:{options:["flex-start","center","flex-end","space-between","space-around"],control:{type:"radio"},description:"You can specify the horizontal alignment criteria for FlexBox."},direction:{options:["row","column","row-reverse","column-reverse"],control:{type:"radio"},description:"You can specify the alignment direction of FlexBox."},gap:{control:"number",description:"You can specify the spacing between child elements in FlexBox."},css:{description:"You can directly specify CSS properties."}}},n={args:{direction:"row",align:"flex-start",justify:"flex-start",gap:10,css:{backgroundColor:"#000",height:600},children:Array.from({length:6}).map((e,t)=>l.jsxs("div",{style:{height:50,width:"fit-content",backgroundColor:"#FAF1E4"},children:["FlexBoxItem",t]},t))}};var r,o,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    direction: "row",
    align: "flex-start",
    justify: "flex-start",
    gap: 10,
    css: {
      backgroundColor: "#000",
      height: 600
    },
    children: Array.from({
      length: 6
    }).map((_, i) => <div key={i} style={{
      height: 50,
      width: "fit-content",
      backgroundColor: "#FAF1E4"
    }}>
        FlexBoxItem{i}
      </div>)
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const v=["ContainerLayout"];export{n as ContainerLayout,v as __namedExportsOrder,g as default};
//# sourceMappingURL=FlexBox.stories-146d324c.js.map
