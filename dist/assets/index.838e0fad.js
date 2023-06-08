import{r as g,R as U}from"./react.835c4918.js";import{c as q}from"./react-dom.cb29f799.js";import{N as z,B as V}from"./react-router-dom.5072f8b7.js";import{s as m,W}from"./styled-components.87b0d983.js";import{S as H,A as K,B as J,F as Y,a as Q,b as C,G as X,I as Z,c as ee,H as te}from"./react-icons.0ad75130.js";import{j as l,a as t,F as re,E as ne}from"./echarts-for-react.b7cdc7b7.js";import{m as B}from"./framer-motion.da5033a9.js";import{O as oe,d as ie,e as $}from"./react-router.b9f9f6af.js";import{u as se,i as ae,a as le,b as ce,c as de}from"./echarts.1a56512e.js";import{a as N}from"./axios.1cbd2f54.js";import"./fast-deep-equal.aa2b1f7c.js";import"./scheduler.31f3049c.js";import"./@remix-run.8f80379e.js";import"./react-is.0cf081d4.js";import"./@emotion.e79fe7e9.js";import"./hoist-non-react-statics.7be3bd10.js";import"./tslib.51bbf877.js";import"./size-sensor.5528201f.js";import"./zrender.36fabd87.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const pe="modulepreload",me=function(e){return"/"+e},A={},R=function(r,s,a){if(!s||s.length===0)return r();const i=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=me(o),o in A)return;A[o]=!0;const c=o.endsWith(".css"),v=c?'[rel="stylesheet"]':"";if(!!a)for(let f=i.length-1;f>=0;f--){const x=i[f];if(x.href===o&&(!c||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${v}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":pe,c||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),c)return new Promise((f,x)=>{u.addEventListener("load",f),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r())},ue=m.section`
  position: relative;
  overflow: hidden;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
`,n={primaryBlue:"rgb(93,63,178)",black:"rgb(17,12,29)",white:"rgb(255,255,255)",lightBlue:"rgba(93,63,178,0.1)",grey:"grey",green:"rgb(159,224,128)",red:"rgb(253,110,110)",blue:"rgb(126,211,244)",lightGreen:"rgba(159,224,128,0.2)",lightRed:"rgba(253,110,110,0.2)",lighterBlue:"rgba(126,211,244,0.2)"},b={mobile:"640px",tablet:"768px",desktop:"834px"},he=m.div`
  height: 100vh;
  max-width: 1440px;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: none;
  margin: 0 auto;

  .nav-links {
    display: flex;
    flex-direction: column;
    padding-top: 4.1rem;
    width: fit-content;
    flex: 1;
  }

  .phantom-link {
    display: flex;
    flex: 1;
    color: ${n.white};
    font-size: 1.5rem;
    border-right: 1px solid ${n.lightBlue};
  }

  @media (min-width: ${b.tablet}) {
    display: flex;
  }
`,_=[{name:"Dashboard",icon:H,path:"/"},{name:"Orders",icon:K,path:"/orders"},{name:"Products",icon:J,path:"/products"}],fe=m(z)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: ${n.primaryBlue};
  font-size: 1.5rem;

  padding: 1rem;
  border-right: 2px solid ${n.lightBlue};
  transition: all 0.3s ease-in-out;

  p {
    font-size: 1rem;
  }

  &.active,
  &:hover {
    border-right: 2px solid ${n.primaryBlue};
    transition: all 0.3s ease-in-out;

    p {
      color: ${n.lightBlue};
    }
  }

  @media (min-width: ${b.tablet}) {
    p {
      display: none;
    }
  }

  @media (min-width: ${b.desktop}) {
    p {
      display: block;
    }
  }
`,ge=({route:e})=>{const r=e.icon;return l(fe,{to:e.path,children:[t(r,{}),t("p",{children:e.name})]})},xe=()=>t(he,{children:l("section",{className:"nav-links",children:[_.map((e,r)=>t(ge,{route:e},r)),t("div",{className:"phantom-link"})]})}),ye=m.header`
  background-color: ${n.white};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${n.lightBlue};
  margin: 0 auto;
  max-width: 1440px;
  z-index: 2;

  a {
    text-decoration: none;
    color: ${n.primaryBlue};
  }

  .icons-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    ${""}
    position: relative;
  }

  h3 {
    font-size: 2rem;
    color: ${n.primaryBlue};
  }

  span {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${n.lightBlue};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    object-fit: cover;
  }
`,be=m.div`
  width: 40px;
  height: 40px;
  postion: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  z-index: 55;

  @media (min-width: ${b.tablet}) {
    display: none;
  }
`,L=m(B.div)`
  width: ${e=>e.pos==="mid"?"20px":"30px"};
  height: 1px;
  border: 1px solid ${n.primaryBlue};
  ${""}

  transform: translateY(
    ${e=>e.pos==="top"?"-10px":e.pos==="bottom"?"10px":""}
  );
`,M=g.exports.createContext(),we=({initialState:e,reducer:r,children:s})=>t(M.Provider,{value:g.exports.useReducer(r,e),children:s}),w=()=>g.exports.useContext(M),ve=()=>{const[{showMenu:e},r]=w(),s={top:{rotate:45,y:"1px"},mid:{x:-320,opacity:0},bottom:{rotate:-45,y:"-1px"},initTop:{rotate:0,y:"-10px"},initBottom:{rotate:0,y:"10px"}};function a(){r({type:"TOGGLE_MENU",showMenu:!e})}return l(be,{onClick:a,children:[t(L,{variants:s,animate:e?"top":"initTop",pos:"top"}),t(L,{variants:s,animate:e?"mid":"",pos:"mid"}),t(L,{variants:s,animate:e?"bottom":"initBottom",pos:"bottom"})]})},Se=()=>l(ye,{children:[t("h3",{children:"Bee"}),l("div",{className:"icons-container",children:[t(Y,{color:n.primaryBlue,size:30}),t("span",{}),t(ve,{})]})]}),$e=m(B.nav)`
  height: fit-content;
  padding-top: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 1rem;
  display: ${e=>e.show===!0&&"block"};

  @media (min-width: ${b.tablet}) {
    display: none;
  }
`,Be=m(z)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: ${n.primaryBlue};
  font-size: 1.5rem;
  padding: 1rem 1rem;
  border-left: 2px solid ${n.lightBlue};
  transition: all 0.3s ease-in-out;
  width: fit-content;

  p {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.3rem;
  }

  &.active,
  &:hover {
    border-left: 2px solid ${n.primaryBlue};
    transition: all 0.3s ease-in-out;

    p {
      color: ${n.lightBlue};
    }
  }
`,Ne=({route:e})=>{const{name:r,icon:s,path:a}=e,[{showMenu:i},o]=w();function c(){o({type:"TOGGLE_MENU",showMenu:!i})}return l(Be,{to:a,onClick:c,children:[t(s,{}),t("p",{children:r})]})},Le=()=>{const[{showMenu:e}]=w();return t(re,{children:t($e,{show:e,initial:{x:"100%"},animate:{x:e?0:"100%"},transition:{duration:.3},children:_.map((r,s)=>t(Ne,{route:r},s))})})},ke=()=>l(ue,{children:[t(xe,{}),t(Se,{}),t(oe,{}),t(Le,{})]}),Ee=m.section`
  flex: 1;
  display: flex;
  flex-direction: column;

  .griddy {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    display: grid;
    gap: 1rem;
    grid-auto-flow: dense;
  }
`,Ce=m(B.section)`
  ${""}
  padding:1rem;
  min-height: 100vh;
  margin-left: 0rem;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 2rem;
    font-weight: 300;
    position: fixed;
    z-index: 20;
    top: 13px;
    display: none;
  }

  @media (min-width: ${b.tablet}) {
    margin-left: 3.5rem;
    padding: 3rem 3rem 3rem 3rem;

    .title {
      display: flex;
    }
  }

  @media (min-width: ${b.desktop}) {
    margin-left: 9.5rem;
    padding: 6rem 3rem 3rem 3rem;
  }
`,Ae=({children:e,title:r})=>{const[{showMenu:s}]=w();return l(Ce,{initial:{x:0},animate:{x:s?"-100%":0},transition:{duration:.3},children:[t("h1",{className:"title",children:r}),e]})},Oe=m.article`
  border: 2px solid ${n.lightBlue};
  padding: 0.5rem;
  display: flex;
  grid-row: ${e=>e.row};
  grid-column: ${e=>e.column};

  .item-container {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .description-text-container {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: ${b.mobile}) {
    grid-column: ${e=>e.type==="double"&&"span 2"};
  }
`;se([ae,le,ce]);const O=({type:e,option:r,title:s,subText:a,column:i,row:o})=>t(Oe,{type:e,column:i,row:o,children:l("div",{className:"item-container",children:[t("div",{className:"description-text-container",children:t("p",{className:"heading-text",children:s})}),t(ne,{option:r,echarts:de}),t("p",{children:a})]})}),Te=m.article`
  border: 2px solid ${n.lightBlue};
  padding: 0.5rem;
  display: flex;
  grid-row: ${e=>e.row};
  max-height: 130px;
  grid-column: ${e=>e.column};

  .inner-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon-container {
    background-color: blue;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .percentage-text {
    font-size: 10px;
    padding: 0.1rem 0.5rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-color: ${n.primaryBlue};
    background-color: ${n.lightBlue};
  }

  .description-text {
    ${""}
    font-size: clamp(10px, 1rem, 35px);
    font-weight: 300;
    color: ${n.grey};
  }

  .price-text {
    font-size: 20px;
    font-weight: 300;
  }
`,k=({row:e,column:r,text:s,icon:a,mainColor:i,secondaryColor:o,value:c})=>t(Te,{row:e,column:r,children:l("div",{className:"inner-container",children:[t("span",{className:"icon-container",style:{backgroundColor:o},children:t(a,{color:i,size:15})}),l("div",{className:"text-container",children:[t("p",{className:"description-text",children:s}),t("span",{className:"percentage-text",style:{backgroundColor:o},children:t("p",{style:{color:i},children:"-5.3%"})})]}),l("p",{className:"price-text",children:["GHS ",c.toLocaleString()]})]})}),ze=()=>{const[{tableData:e,itemList:r}]=w();let s=e.filter(d=>d.order==="Sale"),a=e.filter(d=>d.order==="Purchase");const i=E(s),o=E(a),c=i+o,v=y(a),S=y(s),u=g.exports.useMemo(()=>I(e),[e]),f=x(u);function x(d){let h=[];for(let p in d)h.push({name:p,value:d[p]});return h}function y(d){return d.map(p=>Number(p.price)*Number(p.amount))}function E(d){let h=0;return d.forEach(p=>{h+=Number(p.price)*Number(p.amount)}),h}function I(d){let h={};for(let p of d)p.vendor in h?h[p.vendor]+=p.amount*p.price:h[p.vendor]=p.amount*p.price;return h}const D={title:{},tooltip:{trigger:"axis"},legend:{data:["Purchases","Sales"]},grid:{left:"3%",right:"4%",bottom:"13%",containLabel:!0,show:!1},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Sales",type:"line",stack:"Total",data:S},{name:"Purchases",type:"line",stack:"Total",data:v}]},F={title:{text:"Customers",textStyle:{fontWeight:300}},tooltip:{trigger:"item"},legend:{bottom:"5%",left:"center",show:!1,selectedMode:!0},series:[{top:"5%",name:"Access From",type:"pie",radius:["40%","70%"],center:["50%","70%"],startAngle:180,label:{formatter(d){return d.name+" ("+d.percent*2+"%)"}},data:[...f,{value:f.reduce((d,h)=>d+h.value,0),itemStyle:{color:"none",decal:{symbol:"none"}},label:{show:!1}}]}]};return t(Ae,{title:"Dashboard",children:t(Ee,{children:l("section",{className:"griddy",children:[t(k,{text:"Balance",icon:Q,mainColor:n.blue,secondaryColor:n.lighterBlue,value:c}),t(k,{text:"Income",icon:C,mainColor:n.green,secondaryColor:n.lightGreen,value:i}),t(k,{text:"Expenses",icon:C,mainColor:n.red,secondaryColor:n.lightRed,value:o}),t(O,{option:F}),t(O,{option:D})]})})})},G="http://localhost:3000/api/orders";let j="";function Re(e){j=`Bearer ${e}`}function _e(){return N.get(G).then(r=>r.data)}async function Me(e){const r={headers:{Authorization:j}};return(await N.post(G,e,r)).data}const P={getAll:_e,create:Me,setToken:Re},Ge="http://localhost:3000/api/vendors";function je(){return N.get(Ge).then(r=>r.data)}const Pe={getAll:je},Ie=g.exports.lazy(()=>R(()=>import("./Orders.029c7eaf.js"),["assets/Orders.029c7eaf.js","assets/react.835c4918.js","assets/fast-deep-equal.aa2b1f7c.js","assets/styled-components.87b0d983.js","assets/react-is.0cf081d4.js","assets/@emotion.e79fe7e9.js","assets/hoist-non-react-statics.7be3bd10.js","assets/echarts-for-react.b7cdc7b7.js","assets/tslib.51bbf877.js","assets/echarts.1a56512e.js","assets/zrender.36fabd87.js","assets/size-sensor.5528201f.js","assets/react-icons.0ad75130.js","assets/react-dom.cb29f799.js","assets/scheduler.31f3049c.js","assets/react-router-dom.5072f8b7.js","assets/react-router.b9f9f6af.js","assets/@remix-run.8f80379e.js","assets/framer-motion.da5033a9.js","assets/axios.1cbd2f54.js"])),De=g.exports.lazy(()=>R(()=>import("./Products.ef999b59.js"),["assets/Products.ef999b59.js","assets/react.835c4918.js","assets/fast-deep-equal.aa2b1f7c.js","assets/styled-components.87b0d983.js","assets/react-is.0cf081d4.js","assets/@emotion.e79fe7e9.js","assets/hoist-non-react-statics.7be3bd10.js","assets/echarts-for-react.b7cdc7b7.js","assets/tslib.51bbf877.js","assets/echarts.1a56512e.js","assets/zrender.36fabd87.js","assets/size-sensor.5528201f.js","assets/react-dom.cb29f799.js","assets/scheduler.31f3049c.js","assets/react-router-dom.5072f8b7.js","assets/react-router.b9f9f6af.js","assets/@remix-run.8f80379e.js","assets/react-icons.0ad75130.js","assets/framer-motion.da5033a9.js","assets/axios.1cbd2f54.js"])),Fe=()=>{const[{},e]=w();return g.exports.useEffect(()=>{s(),r();async function r(){const a=await Pe.getAll();e({type:"GET_CUSTOMERS",vendorList:a})}async function s(){const a=await P.getAll();e({type:"UPDATE_TABLE",tableData:a})}},[]),t(V,{children:t(ie,{children:l($,{path:"/",element:t(ke,{}),children:[t($,{index:!0,element:t(ze,{})}),t($,{path:"orders",element:t(g.exports.Suspense,{children:t(Ie,{})})}),t($,{path:"products",element:t(g.exports.Suspense,{children:t(De,{})})})]})})})},Ue=m.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  .hero-section {
    display: none;
  }

  h1 {
    font-size: 2rem;
    font-weight: 300;
  }

  h3 {
    font-size: 1.5rem;
    color: ${n.primaryBlue};
  }

  .introduction-text {
    font-size: 0.8rem;
    margin: 1rem 0;
    color: ${n.primaryBlue};
  }

  .form-section {
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    align-items: center;
    text-align: center;
  }

  .field-group {
    position: relative;
    max-width: 600px;
  }

  input {
    width: 100%;
    outline: 0;
    padding: 10px;
    padding-left: 60px;
    font-size: 0.9rem;
    border-radius: 3px;
    border: 2px solid ${n.lightBlue};
    background: transparent;
  }

  .icon-container {
    position: absolute;

    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    padding: 11px;
    border: 0;
    color: ${n.white};
    background-color: ${n.primaryBlue};
    border-radius: 5px;
  }

  footer > p {
    font-size: 0.8rem;
  }

  @media (min-width: ${b.tablet}) {
    flex-direction: row;

    .hero-section {
      display: flex;
      height: 100%;
      width: 50%;
      background-color: ${n.primaryBlue};
    }

    .hero-section > img {
      max-width: 100%;
    }
  }
`,qe="/assets/org.fc93504a.png",Ve=m.label`
  font-size: 10px;
  text-align: left;

  color: ${e=>e.type==="error"?`${n.red}`:`${n.green}`};

  ${""}
`,T=({text:e,type:r})=>t(Ve,{type:r,children:e}),We="http://localhost:3000/api/login";async function He(e){return(await N.post(We,e)).data}const Ke={login:He},Je=m(B.article)`
  position: fixed;
  background-color: ${e=>e.color.light};
  padding: 10px;
  right: 10px;
  top: 10px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.color.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  z-index: 100;

  .symbol {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .message {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Ye=({message:e,type:r})=>{const[{},s]=w();if(e===null)return null;function a(){s({type:"SET_BANNER",banner:{message:null,type:"error"}})}const i={main:n.red,light:n.lightRed},o={main:n.green,light:n.lightGreen};return l(Je,{initial:{x:"100%"},animate:{x:0},color:r==="error"?i:o,children:[t("div",{className:"symbol",children:t(X,{})}),t("div",{className:"message",children:e}),t("div",{className:"close-button",onClick:a,children:t(Z,{})})]})},Qe=()=>{const[e,r]=g.exports.useState({username:"",password:""}),[s,a]=g.exports.useState(!1),[{banner:i},o]=w();function c(u){const{name:f,value:x}=u.target;r(y=>({...y,[f]:x}))}async function v(u){u.preventDefault();const{username:f,password:x}=e;if(!e.username||!e.password){a(!0);return}try{const y=await Ke.login({username:f,password:x});window.localStorage.setItem("loggedOGIMSUser",JSON.stringify(y)),P.setToken(y.token),o({type:"LOGIN_USER",user:y}),S()}catch{o({type:"SET_BANNER",banner:{message:"Wrong credentials",type:"error"}}),setTimeout(()=>{o({type:"SET_BANNER",banner:{message:null,type:"error"}})},3e3)}}function S(){r({username:"",password:""})}return l(Ue,{children:[l("section",{className:"form-section",children:[t(Ye,{type:i.type,message:i.message}),l("div",{className:"container",children:[t("header",{children:t("h3",{children:"OG-IMS"})}),l("div",{children:[t("h1",{children:"Welcome"}),t("p",{className:"introduction-text",children:"Kindly enter your valid login credentials below."}),l("form",{onSubmit:v,children:[l("div",{className:"field-group",children:[t("input",{type:"text",name:"username",value:e.username,autoComplete:"off",placeholder:"Enter Username",onChange:c}),t("div",{className:"icon-container",children:t(ee,{size:20,color:n.primaryBlue})})]}),s&&!e.username?t(T,{type:"error",text:"Please input your username"}):"",l("div",{className:"field-group",children:[t("input",{type:"password",name:"password",value:e.password,autoComplete:"off",placeholder:"Enter Password",onChange:c}),t("div",{className:"icon-container",children:t(te,{size:25,color:n.primaryBlue})})]}),s&&!e.password?t(T,{type:"error",text:"Please input your password"}):"",t("button",{type:"submit",children:"Login"})]})]}),t("footer",{children:t("p",{children:"\xA9 2023 quincy-S. All rights reserved."})})]})]}),t("section",{className:"hero-section",children:t("img",{src:qe,alt:"pen-img"})})]})},Xe=()=>{const[{user:e},r]=w();return e?t(Fe,{}):t(Qe,{})},Ze=W`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
    ${""}
}



html,body{
    height:100%;
}
`,et={showMenu:!1,itemList:["water bag","packing bag","sachet roll"],tableData:[],channelList:["Factory","Truck","Top Base"],order:["Sale","Purchase"],vendorList:[],banner:{message:null,type:"error"},user:null,showForm:!1};function tt(e,r){switch(r.type){case"LOGIN_USER":return{...e,user:r.user};case"TOGGLE_MENU":return{...e,showMenu:r.showMenu};case"TOGGLE_FORM":return{...e,showForm:r.showForm};case"SET_BANNER":return{...e,banner:r.banner};case"UPDATE_TABLE":return{...e,tableData:r.tableData};case"GET_CUSTOMERS":return{...e,vendorList:r.vendorList};default:return e}}q.createRoot(document.getElementById("root")).render(t(U.StrictMode,{children:l(we,{initialState:et,reducer:tt,children:[t(Ze,{}),t(Xe,{})]})}));export{T as A,Ye as B,Ae as P,n as c,P as o,w as u};
