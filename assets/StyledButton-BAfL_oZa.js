import{r as L,j as k,R as ce}from"./index-DBg28ob8.js";import{c as ue,t as de,e as fe,a as K}from"./helper-CaAdfMs7.js";import{m as pe}from"./motion-minimal-ChqPLoPB.js";const F=L.forwardRef(({children:e,...i},t)=>k.jsx(pe.button,{initial:!0,whileFocus:{scale:1.02},whileHover:{scale:1.02},whileTap:{scale:.95},...i,ref:t,children:e}));F.displayName="MotionButtonBase";const ye=L.forwardRef(({className:e,children:i,...t},v)=>k.jsx(F,{ref:v,className:ue("inline-flex rounded-full bg-accent p-2 text-center leading-none center hover:opacity-90",e),...t,children:i}));ye.displayName="RoundedIconButton";const be=e=>ce.createElement("a",e,e.children);var q=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,y=e=>!e||typeof e!="object"||Object.keys(e).length===0,ge=(e,i)=>JSON.stringify(e)===JSON.stringify(i);function _(e,i){e.forEach(function(t){Array.isArray(t)?_(t,i):i.push(t)})}function Q(e){let i=[];return _(e,i),i}var X=(...e)=>Q(e).filter(Boolean),Y=(e,i)=>{let t={},v=Object.keys(e),x=Object.keys(i);for(let d of v)if(x.includes(d)){let m=e[d],w=i[d];typeof m=="object"&&typeof w=="object"?t[d]=Y(m,w):Array.isArray(m)||Array.isArray(w)?t[d]=X(w,m):t[d]=w+" "+m}else t[d]=e[d];for(let d of x)v.includes(d)||(t[d]=i[d]);return t},D=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),ve={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},ee=e=>e||void 0,M=(...e)=>ee(Q(e).filter(Boolean).join(" ")),T=null,h={},G=!1,O=(...e)=>i=>i.twMerge?((!T||G)&&(G=!1,T=y(h)?de:fe({...h,extend:{theme:h.theme,classGroups:h.classGroups,conflictingClassGroupModifiers:h.conflictingClassGroupModifiers,conflictingClassGroups:h.conflictingClassGroups,...h.extend}})),ee(T(M(e)))):M(e),U=(e,i)=>{for(let t in i)e.hasOwnProperty(t)?e[t]=M(e[t],i[t]):e[t]=i[t];return e},me=(e,i)=>{let{extend:t=null,slots:v={},variants:x={},compoundVariants:d=[],compoundSlots:m=[],defaultVariants:w={}}=e,b={...ve,...i},R=t!=null&&t.base?M(t.base,e?.base):e?.base,g=t!=null&&t.variants&&!y(t.variants)?Y(x,t.variants):x,z=t!=null&&t.defaultVariants&&!y(t.defaultVariants)?{...t.defaultVariants,...w}:w;!y(b.twMergeConfig)&&!ge(b.twMergeConfig,h)&&(G=!0,h=b.twMergeConfig);let B=y(t?.slots),C=y(v)?{}:{base:M(e?.base,B&&t?.base),...v},$=B?C:U({...t?.slots},y(C)?{base:e?.base}:C),V=y(t?.compoundVariants)?d:X(t?.compoundVariants,d),j=f=>{if(y(g)&&y(v)&&B)return O(R,f?.class,f?.className)(b);if(V&&!Array.isArray(V))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof V}`);if(m&&!Array.isArray(m))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof m}`);let re=(r,l,n=[],o)=>{let a=n;if(typeof l=="string")a=a.concat(D(l).split(" ").map(s=>`${r}:${s}`));else if(Array.isArray(l))a=a.concat(l.reduce((s,c)=>s.concat(`${r}:${c}`),[]));else if(typeof l=="object"&&typeof o=="string"){for(let s in l)if(l.hasOwnProperty(s)&&s===o){let c=l[s];if(c&&typeof c=="string"){let u=D(c);a[o]?a[o]=a[o].concat(u.split(" ").map(p=>`${r}:${p}`)):a[o]=u.split(" ").map(p=>`${r}:${p}`)}else Array.isArray(c)&&c.length>0&&(a[o]=c.reduce((u,p)=>u.concat(`${r}:${p}`),[]))}}return a},I=(r,l=g,n=null,o=null)=>{var a;let s=l[r];if(!s||y(s))return null;let c=(a=o?.[r])!=null?a:f?.[r];if(c===null)return null;let u=q(c),p=Array.isArray(b.responsiveVariants)&&b.responsiveVariants.length>0||b.responsiveVariants===!0,N=z?.[r],A=[];if(typeof u=="object"&&p)for(let[E,H]of Object.entries(u)){let se=s[H];if(E==="initial"){N=H;continue}Array.isArray(b.responsiveVariants)&&!b.responsiveVariants.includes(E)||(A=re(E,se,A,n))}let ie=u!=null&&typeof u!="object"?u:q(N),S=s[ie||"false"];return typeof A=="object"&&typeof n=="string"&&A[n]?U(A,S):A.length>0?(A.push(S),A):S},ne=()=>g?Object.keys(g).map(r=>I(r,g)):null,le=(r,l)=>{if(!g||typeof g!="object")return null;let n=new Array;for(let o in g){let a=I(o,g,r,l),s=r==="base"&&typeof a=="string"?a:a&&a[r];s&&(n[n.length]=s)}return n},J={};for(let r in f)f[r]!==void 0&&(J[r]=f[r]);let P=(r,l)=>{var n;let o=typeof f?.[r]=="object"?{[r]:(n=f[r])==null?void 0:n.initial}:{};return{...z,...J,...o,...l}},W=(r=[],l)=>{let n=[];for(let{class:o,className:a,...s}of r){let c=!0;for(let[u,p]of Object.entries(s)){let N=P(u,l);if(Array.isArray(p)){if(!p.includes(N[u])){c=!1;break}}else if(N[u]!==p){c=!1;break}}c&&(o&&n.push(o),a&&n.push(a))}return n},ae=r=>{let l=W(V,r);if(!Array.isArray(l))return l;let n={};for(let o of l)if(typeof o=="string"&&(n.base=O(n.base,o)(b)),typeof o=="object")for(let[a,s]of Object.entries(o))n[a]=O(n[a],s)(b);return n},oe=r=>{if(m.length<1)return null;let l={};for(let{slots:n=[],class:o,className:a,...s}of m){if(!y(s)){let c=!0;for(let u of Object.keys(s)){let p=P(u,r)[u];if(p===void 0||(Array.isArray(s[u])?!s[u].includes(p):s[u]!==p)){c=!1;break}}if(!c)continue}for(let c of n)l[c]=l[c]||[],l[c].push([o,a])}return l};if(!y(v)||!B){let r={};if(typeof $=="object"&&!y($))for(let l of Object.keys($))r[l]=n=>{var o,a;return O($[l],le(l,n),((o=ae(n))!=null?o:[])[l],((a=oe(n))!=null?a:[])[l],n?.class,n?.className)(b)};return r}return O(R,ne(),W(V),f?.class,f?.className)(b)},te=()=>{if(!(!g||typeof g!="object"))return Object.keys(g)};return j.variantKeys=te(),j.extend=t,j.base=R,j.slots=$,j.variants=g,j.defaultVariants=z,j.compoundSlots=m,j.compoundVariants=V,j};const Z=me({base:"inline-flex select-none cursor-default items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none",variants:{variant:{primary:K("bg-accent text-zinc-100","hover:contrast-[1.10] active:contrast-125","font-semibold","disabled:cursor-not-allowed disabled:bg-accent/40 disabled:opacity-80 disabled:dark:text-zinc-50","dark:text-neutral-800"),secondary:K("group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20","disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-80 disabled:dark:bg-gray-800 disabled:dark:text-zinc-50")}}}),Ae=({variant:e="primary",className:i,isLoading:t,href:v,...x})=>{const d=t?je:L.Fragment;return k.jsx(d,{children:v?k.jsx(be,{href:v,className:Z({variant:e,className:i}),...x}):k.jsx(F,{className:Z({variant:e,className:i}),...x})})},je=({children:e})=>k.jsxs("div",{className:"relative",children:[e,k.jsx("div",{className:"absolute inset-0 z-[1] flex items-center justify-center",children:k.jsx("div",{className:"loading loading-spinner size-5"})})]});export{be as L,F as M,Ae as S,me as c};
