import"./react.835c4918.js";import{s as o}from"./styled-components.87b0d983.js";import{c as l,P as s}from"./index.838e0fad.js";import{j as i,a as e,E as n}from"./echarts-for-react.b7cdc7b7.js";import{u as d,i as m,a as p,c}from"./echarts.1a56512e.js";import"./fast-deep-equal.aa2b1f7c.js";import"./react-is.0cf081d4.js";import"./@emotion.e79fe7e9.js";import"./hoist-non-react-statics.7be3bd10.js";import"./react-dom.cb29f799.js";import"./scheduler.31f3049c.js";import"./react-router-dom.5072f8b7.js";import"./react-router.b9f9f6af.js";import"./@remix-run.8f80379e.js";import"./react-icons.0ad75130.js";import"./framer-motion.da5033a9.js";import"./axios.1cbd2f54.js";import"./tslib.51bbf877.js";import"./size-sensor.5528201f.js";import"./zrender.36fabd87.js";const f=o.section`
  .grid-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 280px;
  }
`,u=o.article`
  border: 2px solid ${l.lightBlue};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;

  .header-container {
    display: flex;
    justify-content: space-between;
  }
`;d([m,p]);const r=({option:t,title:a})=>i(u,{children:[i("div",{className:"header-container",children:[e("p",{children:a}),e("p",{children:"Add"})]}),e(n,{option:t,echarts:c})]}),z=()=>{const t={tooltip:{trigger:"item"},legend:{bottom:"0%",left:"center"},series:[{name:"Access From",type:"pie",top:"-13%",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:735,name:"Available"},{value:484,name:"Unavailable"}]}]};return e(s,{title:"Products",children:e(f,{children:i("section",{className:"grid-container",children:[e(r,{option:t,title:"Water bag"}),e(r,{option:t,title:"Packing bag"}),e(r,{option:t,title:"Sachet roll"})]})})})};export{z as default};
