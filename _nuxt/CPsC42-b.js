import{d as i,A as c,v as o,ac as h,m as u,l as d,i as l,G as p,E as a,ad as m,ae as f}from"./GI038NCR.js";const g=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(n){const t=n,r=c(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=o(h(u().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return d(e,t.src)}return t.src});return(s,e)=>(l(),p(m(a(f)),{src:a(r),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}}),S=Object.assign(g,{__name:"ProseImg"});export{S as default};
