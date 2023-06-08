import{r as w}from"./react.835c4918.js";import{c as d,u as z,A as u,o as $,P as D,B as E}from"./index.40718575.js";import{s as f}from"./styled-components.87b0d983.js";import{a as e,j as n}from"./echarts-for-react.a6044b33.js";import{d as y,e as L,I as P}from"./react-icons.90b58ff9.js";import"./fast-deep-equal.aa2b1f7c.js";import"./react-dom.cb29f799.js";import"./scheduler.31f3049c.js";import"./react-router-dom.898d93fb.js";import"./react-router.6efd74e9.js";import"./@remix-run.8f80379e.js";import"./framer-motion.d0ae9187.js";import"./axios.1cbd2f54.js";import"./react-is.0cf081d4.js";import"./@emotion.e79fe7e9.js";import"./hoist-non-react-statics.7be3bd10.js";import"./tslib.51bbf877.js";import"./echarts.d92ce296.js";import"./zrender.36fabd87.js";import"./size-sensor.5528201f.js";const V=f.section`
  position: relative;
  hr {
    width: 100%;
    margin: 0.5rem 0;
    border-color: ${d.lightBlue};
  }

  .filter-buttons {
    display: flex;
    gap: 1rem;
  }

  .filter-section {
    display: flex;
    justify-content: space-between;
  }
`;f.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 0;
`;const I=f.div`
  overflow: auto;
  position: relative;
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    ${""}
  }

  thead {
    background-color: ${d.primaryBlue};
  }

  tbody {
    overflow-y: scroll;
    max-height: 300px;
    position: relative;
  }

  thead,
  tr {
    border-bottom: 2px solid ${d.lightBlue};
    position: relative;
  }

  th,
  td {
    text-align: center;
    font-size: 13px;
  }

  th {
    padding: 1rem 0.5rem;
    font-size: 14px;
    font-weight: 400;
    color: ${d.white};
  }

  td {
    padding: 1.5rem 0.5rem;
    font-weight: 300;
  }

  .active {
    background-color: ${d.lighterBlue};
  }

  .show {
    border: 2px solid red;
    display: block;
    position: absolute;
    top: 30px;
    right: 220px;
    height: 80px;
    padding: 1rem;
  }

  .hide {
    display: none;
  }

  @media screen and (max-width: 600px) {
    th,
    td {
      white-space: nowrap;
    }
  }
`,G=({tableData:o})=>{const[a,i]=w.exports.useState(!1);function l(r){return new Date(r).toISOString().split("T")[0]}function c(r){!r.note||(i(!a),setNote(r.note))}return e(I,{children:n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"No"}),n("th",{children:["Date ",e(y,{size:12})]}),e("th",{children:"Item"}),n("th",{children:["Vendor ",e(y,{size:12})]}),n("th",{children:["Channel ",e(y,{size:12})]}),n("th",{children:["Order ",e(y,{size:12})]}),e("th",{children:"Amount"}),e("th",{children:"Price"})]})}),e("tbody",{children:o.map((r,s)=>n("tr",{className:r.note!=="empty"&&r.note&&"active",onClick:()=>c(r),children:[e("td",{children:s+1}),e("td",{children:l(r.date)}),e("td",{children:r.item}),e("td",{children:r.vendor}),e("td",{children:r.channel}),e("td",{children:r.order}),e("td",{children:r.amount}),e("td",{children:r.price})]},s))})]})})},_=f.span`
  position: fixed;
  bottom: 20px;
  right: 20px;
  backdrop-filter: blur(5px);
  border-radius: 50%;
`,j=({handleClick:o})=>e(_,{onClick:o,children:e(L,{size:60,color:d.primaryBlue})}),R=f.form`
  max-width: 70%;
  width: 25rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  display: ${o=>o.show?"flex":"none"};
  flex-direction: column;
  ${""}
  backdrop-filter:blur(5px);
  padding: 1rem;
  border-radius: 10px;
  gap: 10px;
  border: 1px solid ${d.lightBlue};
  z-index: 20;

  .inner-container {
    ${""}
    display:flex;
    gap: 5px;
    flex-direction: column;
    flex: 1;
  }

  .button-container {
    display: flex;
    gap: 0.5rem;
  }

  button {
    width: 100%;
    padding: 0.5rem 0.8rem;
    font-size: 15px;
    background-color: white;
  }

  .create-button {
    border: 1px solid ${d.primaryBlue};
    color: ${d.primaryBlue};
  }

  .input-container {
    display: flex;
    gap: 0.5rem;
  }

  .input-container > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .header-section {
    display: flex;
    justify-content: flex-end;
  }
`,B=f.article`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 14px;
    color: ${d.primaryBlue};
  }

  input {
    width: 100%;
  }

  input,
  select {
    padding: 0.5rem;
    border-radius: 5px;
    outline: 0px;
    border: 1px solid grey;
    flex: 1;
  }
`,m=({type:o,label:t,data:a,handleValueChange:i,value:l,placeholder:c})=>o==="input"?n(B,{children:[e("label",{children:t}),e("input",{name:t,value:l,onChange:i,placeholder:c})]}):n(B,{children:[e("label",{children:t}),n("select",{name:t,value:l,onChange:i,children:[e("option",{value:""}),a.map((r,s)=>e("option",{value:r,children:r},s))]})]}),M=({showBanner:o})=>{const[t,a]=w.exports.useState({item:"",vendor:"",channel:"",order:"",amount:"",note:"",price:""}),[i,l]=w.exports.useState(!1),[{itemList:c,order:r,channelList:s,tableData:C,showForm:b,vendorList:F},g]=z();function O(h){if(h.preventDefault(),T()){l(!0);return}let v={item:t.item,vendor:t.vendor,channel:t.channel,order:t.order,amount:t.amount,price:t.price,note:t.note||"empty"};$.create(v).then(x=>{S(),g({type:"UPDATE_TABLE",tableData:[...C,x]}),g({type:"TOGGLE_FORM",showForm:!b}),o("success","The order was successfully created")}).catch(x=>o("error",x)),l(!1)}function T(){return!t.item||!t.vendor||!t.channel||!t.order||!t.amount||!t.price}function S(){a({item:"",vendor:"",channel:"",order:"",amount:"",price:""})}function k(h){h.preventDefault(),S(),g({type:"TOGGLE_FORM",showForm:!b}),l(!1)}function p(h){const{name:v,value:x}=h.target;a(N=>({...N,[v.toLowerCase()]:x}))}const A=F.map(h=>h.name);return n(R,{onSubmit:O,show:b,children:[e("section",{className:"header-section",children:e(P,{onClick:k,size:25})}),n("section",{className:"inner-container",children:[e(m,{label:"Item",type:"select",data:c,handleValueChange:p,value:t.item}),i&&!t.item?e(u,{type:"error",text:"Please select an item"}):"",e(m,{label:"Vendor",type:"select",data:A,handleValueChange:p,value:t.vendor}),i&&!t.vendor?e(u,{type:"error",text:"Please select a vendor/supplier"}):"",e(m,{label:"Channel",type:"select",data:s,handleValueChange:p,value:t.channel}),i&&!t.channel?e(u,{type:"error",text:"Please select a channel"}):"",e(m,{label:"Order",type:"select",data:r,handleValueChange:p,value:t.order}),i&&!t.order?e(u,{type:"error",text:"Please select an order type"}):"",e(m,{label:"Note",type:"input",handleValueChange:p,value:t.note,placeholder:"Leave empty if necessary"}),n("section",{className:"input-container",children:[n("div",{children:[e(m,{label:"Amount",type:"input",handleValueChange:p,value:t.amount}),i&&!t.amount?e(u,{type:"error",text:"Please input an amount"}):""]}),n("div",{children:[e(m,{label:"Price",type:"input",handleValueChange:p,value:t.price}),i&&!t.price?e(u,{type:"error",text:"Please input a price"}):""]})]})]}),e("section",{className:"button-container",children:e("button",{className:"create-button",children:"Create "})})]})},se=()=>{const[{tableData:o,banner:t},a]=z();function i(){a({type:"TOGGLE_FORM",showForm:!0})}function l(c,r){a({type:"SET_BANNER",banner:{message:r,type:c}}),setTimeout(()=>{a({type:"SET_BANNER",banner:{message:null,type:"error"}})},3e3)}return n(D,{title:"Orders",children:[e(E,{type:t.type,message:t.message}),n(V,{children:[e(M,{showBanner:l}),e("hr",{}),e(G,{tableData:o}),e(j,{handleClick:i})]})]})};export{se as default};
