import{P as F,u as o,a as c}from"./chunks/index.BYoZdQn9.js";import{k as C,a5 as D,o as l,c as p,I as e,l as a,a as E,a3 as A}from"./chunks/framework.CWXIjQyU.js";import"./chunks/render3DBarChart.Bkb-4-xP.js";import"./chunks/noData.CXXfBPPg.js";const m={__name:"usageColorRender",setup(r){const{setLoopData:h,startLoop:k,setCustomerColorRender:t}=o(),g=(i,n)=>{const s=i/n;return[[()=>s>1.4," rgba(255,58,91,0.30)"],[()=>s>1.3&&s<=1.4,"rgba(255,97,0,0.30)"],[()=>s>1.25&&s<=1.3,"rgba(237,224,58,0.30)"],[()=>s>1.2&&s<=1.3," rgba(29,129,255,0.30)"],[()=>s<=1.2,"rgba(62,255,86,0.30)"]].find(y=>y[0]())[1]||"rgba(0,30,106,0.4)"},d=()=>c.map(i=>({...i,color:g(115+i.id,100),border:"rgba(255,255,255,0.50)",colsData:Array.from({length:4}).map((n,s)=>({name:"xxx数据",count:99+i.id+s}))}));return C(()=>{h(d()),t(!0),k()}),D(()=>{t(!1)}),(i,n)=>(l(),p("div",null,[e(F)]))}},B=a("h1",{id:"自定义板块颜色",tabindex:"-1"},[E("自定义板块颜色 "),a("a",{class:"header-anchor",href:"#自定义板块颜色","aria-label":'Permalink to "自定义板块颜色"'},"​")],-1),u=a("ul",null,[a("li",null,"通过设置不同地区的颜色，达到区分、预警的作用"),a("li",null,[E("customerColorRender是一个flag，实际的颜色通过板块地图数据设置，可以设置板块颜色(color)和边框颜色(border)。 "),a("br")])],-1),_=A("",1),T=JSON.parse('{"title":"自定义板块颜色","description":"","frontmatter":{},"headers":[],"relativePath":"plate-map/plate-map-color.md","filePath":"plate-map/plate-map-color.md"}'),b={name:"plate-map/plate-map-color.md"},q=Object.assign(b,{setup(r){return(h,k)=>(l(),p("div",null,[B,u,e(m),_]))}});export{T as __pageData,q as default};