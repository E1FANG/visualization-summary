import{P as d,u as g,a as y}from"./chunks/index.BYoZdQn9.js";import{k as o,o as t,c as p,I as l,l as s,a as h,a3 as c}from"./chunks/framework.CWXIjQyU.js";import"./chunks/render3DBarChart.Bkb-4-xP.js";import"./chunks/noData.CXXfBPPg.js";const F={__name:"usageLoop",setup(k){const{setLoopData:a,startLoop:n}=g(),e=()=>y.map(i=>({...i,colsData:Array.from({length:4}).map((E,r)=>({name:"xxx数据",count:99+i.id+r}))}));return o(()=>{a(e()),n()}),(i,E)=>(t(),p("div",null,[l(d)]))}},m=s("h1",{id:"板块轮播",tabindex:"-1"},[h("板块轮播 "),s("a",{class:"header-anchor",href:"#板块轮播","aria-label":'Permalink to "板块轮播"'},"​")],-1),u=s("ul",null,[s("li",null,"添加好地图数据后，即可通过startLoop()开启轮播"),s("li",null,"默认在组件卸载时，销毁定时器。"),s("li",null,[h("轮播默认时间间距为250毫秒，也可以通过startLoop的第一个参数修改。 "),s("br")])],-1),D=c("",1),v=JSON.parse('{"title":"板块轮播","description":"","frontmatter":{},"headers":[],"relativePath":"plate-map/plate-map-loop.md","filePath":"plate-map/plate-map-loop.md"}'),_={name:"plate-map/plate-map-loop.md"},x=Object.assign(_,{setup(k){return(a,n)=>(t(),p("div",null,[m,u,l(F),D]))}});export{v as __pageData,x as default};