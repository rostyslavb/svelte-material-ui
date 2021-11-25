import{E as w,av as j,aw as m,ax as O}from"./vendor-23f55e93.js";function D(o){return Object.entries(o).filter(([s,r])=>s!==""&&r).map(([s])=>s).join(" ")}function P(o,s,r,n={bubbles:!0},t=!1){if(typeof Event!="undefined"&&o){const e=new CustomEvent(s,Object.assign(Object.assign({},n),{detail:r}));if(o==null||o.dispatchEvent(e),t&&s.startsWith("SMUI")){const i=new CustomEvent(s.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:r}));o==null||o.dispatchEvent(i),i.defaultPrevented&&e.preventDefault()}return e}}const E=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,A=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function U(o){let s,r=[];o.$on=(t,e)=>{let i=t,a=()=>{};return s?a=s(i,e):r.push([i,e]),i.match(E)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',i),(...f)=>{a()}};function n(t){j(o,t)}return t=>{const e=[],i={};s=(a,v)=>{let f=a,d=v,c=!1;const g=f.match(E),M=f.match(A),b=g||M;if(f.match(/^SMUI:\w+:/)){const l=f.split(":");let p="";for(let u=0;u<l.length;u++)p+=u===l.length-1?":"+l[u]:l[u].split("-").map(y=>y.slice(0,1).toUpperCase()+y.slice(1)).join("");console.warn(`The event ${f.split("$")[0]} has been renamed to ${p.split("$")[0]}.`),f=p}if(b){const l=f.split(g?":":"$");f=l[0];const p=Object.fromEntries(l.slice(1).map(u=>[u,!0]));p.passive&&(c=c||{},c.passive=!0),p.nonpassive&&(c=c||{},c.passive=!1),p.capture&&(c=c||{},c.capture=!0),p.once&&(c=c||{},c.once=!0),p.preventDefault&&(d=m(d)),p.stopPropagation&&(d=O(d))}const $=w(t,f,d,c),h=()=>{$();const l=e.indexOf(h);l>-1&&e.splice(l,1)};return e.push(h),f in i||(i[f]=w(t,f,n)),h};for(let a=0;a<r.length;a++)s(r[a][0],r[a][1]);return{destroy:()=>{for(let a=0;a<e.length;a++)e[a]();for(let a of Object.entries(i))a[1]()}}}}function C(o,s){let r=[];if(s)for(let n=0;n<s.length;n++){const t=s[n],e=Array.isArray(t)?t[0]:t;Array.isArray(t)&&t.length>1?r.push(e(o,t[1])):r.push(e(o))}return{update(n){if((n&&n.length||0)!=r.length)throw new Error("You must not change the length of an actions array.");if(n)for(let t=0;t<n.length;t++){const e=r[t];if(e&&e.update){const i=n[t];Array.isArray(i)&&i.length>1?e.update(i[1]):e.update()}}},destroy(){for(let n=0;n<r.length;n++){const t=r[n];t&&t.destroy&&t.destroy()}}}}export{D as c,P as d,U as f,C as u};