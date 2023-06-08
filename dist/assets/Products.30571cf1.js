import"./react.835c4918.js";import{s as o}from"./styled-components.87b0d983.js";import{c as l,P as s}from"./index.40718575.js";import{j as i,a as e,E as n}from"./echarts-for-react.a6044b33.js";import"./fast-deep-equal.aa2b1f7c.js";import"./react-is.0cf081d4.js";import"./@emotion.e79fe7e9.js";import"./hoist-non-react-statics.7be3bd10.js";import"./react-dom.cb29f799.js";import"./scheduler.31f3049c.js";import"./react-router-dom.898d93fb.js";import"./react-router.6efd74e9.js";import"./@remix-run.8f80379e.js";import"./react-icons.90b58ff9.js";import"./framer-motion.d0ae9187.js";import"./axios.1cbd2f54.js";import"./tslib.51bbf877.js";import"./echarts.d92ce296.js";import"./zrender.36fabd87.js";import"./size-sensor.5528201f.js";const d=o.section`
  .grid-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 280px;
  }
`,p=o.article`
  border: 2px solid ${l.lightBlue};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;

  .header-container {
    display: flex;
    justify-content: space-between;
  }
`,r=({option:t,title:a})=>i(p,{children:[i("div",{className:"header-container",children:[e("p",{children:a}),e("p",{children:"Add"})]}),e(n,{option:t})]}),N=()=>{const t={tooltip:{trigger:"item"},legend:{bottom:"0%",left:"center"},series:[{name:"Access From",type:"pie",top:"-13%",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:735,name:"Available"},{value:484,name:"Unavailable"}]}]};return e(s,{title:"Products",children:e(d,{children:i("section",{className:"grid-container",children:[e(r,{option:t,title:"Water bag"}),e(r,{option:t,title:"Packing bag"}),e(r,{option:t,title:"Sachet roll"})]})})})};export{N as default};
