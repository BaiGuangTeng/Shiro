function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./mermaid.core-CKtP2jzr.js","./index-DBg28ob8.js","./index-bcfYwTR1.css","./request-BxCp3INs.js","./toast-pd-uW7Bn.js","./helper-CaAdfMs7.js","./StyledButton-BAfL_oZa.js","./motion-minimal-ChqPLoPB.js","./env-DbhK1WeT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as n,r as e,_ as h}from"./index-DBg28ob8.js";import{u as y}from"./use-is-dark-DnSiLm4z.js";import{u as I,F as w}from"./Gallery-BdGOyDj5.js";import{c as k}from"./helper-CaAdfMs7.js";const L=t=>n.jsx("div",{className:k("flex h-[500px] items-center justify-center rounded-lg bg-slate-100 text-sm dark:bg-neutral-800",t.className),style:t.style,children:t.children}),M=t=>{const[x,c]=e.useState(!0),[_,o]=e.useState(""),[m,l]=e.useState(""),[v,u]=e.useState(),[E,f]=e.useState(),g=y();e.useEffect(()=>{h(()=>import("./mermaid.core-CKtP2jzr.js").then(s=>s.b7),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).then(async s=>{s.default.initialize({theme:g?"dark":"default"})})},[g]);const d=e.useId().split(":").join("");e.useEffect(()=>{if(!t.content)return;o(""),c(!0);let s=!1;h(()=>import("./mermaid.core-CKtP2jzr.js").then(a=>a.b7),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).then(async a=>{const p=a.default;let i;try{i=await p.render(`mermaid-${d}`,t.content)}catch(r){document.getElementById(`dmermaid-${d}`)?.remove(),r instanceof Error&&o(r.message),l(""),u(void 0),f(void 0)}if(!s){if(i){l(i.svg);const r=i.svg.match(/viewBox="[^"]*\s([\d.]+)\s([\d.]+)"/);r?.[1]&&r?.[2]&&(u(parseInt(r?.[1])),f(parseInt(r?.[2]))),o("")}return c(!1),()=>{s=!0}}})},[d,t.content]);const{w:S}=I(),b=new TextEncoder().encode(m),j=`data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(b)))}`;return x?n.jsx(L,{children:"Mermaid Loading..."}):m?n.jsx("div",{children:n.jsx(w,{containerWidth:S,src:j,width:v,height:E})}):n.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-red-100 text-sm",children:_||"Error"})},z=Object.freeze(Object.defineProperty({__proto__:null,Mermaid:M},Symbol.toStringTag,{value:"Module"}));export{L as B,M,z as a};
