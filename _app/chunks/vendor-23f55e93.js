function pt(){}const Qr=i=>i;function _e(i,e){for(const t in e)i[t]=e[t];return i}function er(i){return i()}function rr(){return Object.create(null)}function Kt(i){i.forEach(er)}function ir(i){return typeof i=="function"}function Jr(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let ee;function Ln(i,e){return ee||(ee=document.createElement("a")),ee.href=e,i===ee.href}function ti(i){return Object.keys(i).length===0}function ei(i,...e){if(i==null)return pt;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Dn(i,e,t){i.$$.on_destroy.push(ei(e,t))}function Nn(i,e,t,r){if(i){const n=nr(i,e,t,r);return i[0](n)}}function nr(i,e,t,r){return i[1]&&r?_e(t.ctx.slice(),i[1](r(e))):t.ctx}function Mn(i,e,t,r){if(i[2]&&r){const n=i[2](r(t));if(e.dirty===void 0)return n;if(typeof n=="object"){const a=[],s=Math.max(e.dirty.length,n.length);for(let o=0;o<s;o+=1)a[o]=e.dirty[o]|n[o];return a}return e.dirty|n}return e.dirty}function Hn(i,e,t,r,n,a){if(n){const s=nr(e,t,r,a);i.p(s,n)}}function xn(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function wn(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function Pn(i,e){const t={};e=new Set(e);for(const r in i)!e.has(r)&&r[0]!=="$"&&(t[r]=i[r]);return t}function Fn(i){const e={};for(const t in i)e[t]=!0;return e}function Bn(i,e,t){return i.set(t),e}function Vn(i){return i&&ir(i.destroy)?i.destroy:pt}const ar=typeof window!="undefined";let ri=ar?()=>window.performance.now():()=>Date.now(),sr=ar?i=>requestAnimationFrame(i):pt;const xt=new Set;function or(i){xt.forEach(e=>{e.c(i)||(xt.delete(e),e.f())}),xt.size!==0&&sr(or)}function ii(i){let e;return xt.size===0&&sr(or),{promise:new Promise(t=>{xt.add(e={c:i,f:t})}),abort(){xt.delete(e)}}}let re=!1;function ni(){re=!0}function ai(){re=!1}function si(i,e,t,r){for(;i<e;){const n=i+(e-i>>1);t(n)<=r?i=n+1:e=n}return i}function oi(i){if(i.hydrate_init)return;i.hydrate_init=!0;let e=i.childNodes;if(i.nodeName==="HEAD"){const l=[];for(let d=0;d<e.length;d++){const u=e[d];u.claim_order!==void 0&&l.push(u)}e=l}const t=new Int32Array(e.length+1),r=new Int32Array(e.length);t[0]=-1;let n=0;for(let l=0;l<e.length;l++){const d=e[l].claim_order,u=(n>0&&e[t[n]].claim_order<=d?n+1:si(1,n,E=>e[t[E]].claim_order,d))-1;r[l]=t[u]+1;const h=u+1;t[h]=l,n=Math.max(h,n)}const a=[],s=[];let o=e.length-1;for(let l=t[n]+1;l!=0;l=r[l-1]){for(a.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);a.reverse(),s.sort((l,d)=>l.claim_order-d.claim_order);for(let l=0,d=0;l<s.length;l++){for(;d<a.length&&s[l].claim_order>=a[d].claim_order;)d++;const u=d<a.length?a[d]:null;i.insertBefore(s[l],u)}}function di(i,e){if(re){for(oi(i),(i.actual_end_child===void 0||i.actual_end_child!==null&&i.actual_end_child.parentElement!==i)&&(i.actual_end_child=i.firstChild);i.actual_end_child!==null&&i.actual_end_child.claim_order===void 0;)i.actual_end_child=i.actual_end_child.nextSibling;e!==i.actual_end_child?(e.claim_order!==void 0||e.parentNode!==i)&&i.insertBefore(e,i.actual_end_child):i.actual_end_child=e.nextSibling}else(e.parentNode!==i||e.nextSibling!==null)&&i.appendChild(e)}function kn(i,e,t){re&&!t?di(i,e):(e.parentNode!==i||e.nextSibling!=t)&&i.insertBefore(e,t||null)}function li(i){i.parentNode.removeChild(i)}function Un(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function ui(i){return document.createElement(i)}function ci(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ye(i){return document.createTextNode(i)}function Kn(){return ye(" ")}function Wn(){return ye("")}function Gn(i,e,t,r){return i.addEventListener(e,t,r),()=>i.removeEventListener(e,t,r)}function Xn(i){return function(e){return e.preventDefault(),i.call(this,e)}}function Yn(i){return function(e){return e.stopPropagation(),i.call(this,e)}}function dr(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function jn(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const r in e)e[r]==null?i.removeAttribute(r):r==="style"?i.style.cssText=e[r]:r==="__value"?i.value=i[r]=e[r]:t[r]&&t[r].set?i[r]=e[r]:dr(i,r,e[r])}function zn(i,e){for(const t in e)dr(i,t,e[t])}function $n(i){return i===""?null:+i}function hi(i){return Array.from(i.childNodes)}function fi(i){i.claim_info===void 0&&(i.claim_info={last_index:0,total_claimed:0})}function lr(i,e,t,r,n=!1){fi(i);const a=(()=>{for(let s=i.claim_info.last_index;s<i.length;s++){const o=i[s];if(e(o)){const l=t(o);return l===void 0?i.splice(s,1):i[s]=l,n||(i.claim_info.last_index=s),o}}for(let s=i.claim_info.last_index-1;s>=0;s--){const o=i[s];if(e(o)){const l=t(o);return l===void 0?i.splice(s,1):i[s]=l,n?l===void 0&&i.claim_info.last_index--:i.claim_info.last_index=s,o}}return r()})();return a.claim_order=i.claim_info.total_claimed,i.claim_info.total_claimed+=1,a}function ur(i,e,t,r){return lr(i,n=>n.nodeName===e,n=>{const a=[];for(let s=0;s<n.attributes.length;s++){const o=n.attributes[s];t[o.name]||a.push(o.name)}a.forEach(s=>n.removeAttribute(s))},()=>r(e))}function qn(i,e,t){return ur(i,e,t,ui)}function Zn(i,e,t){return ur(i,e,t,ci)}function pi(i,e){return lr(i,t=>t.nodeType===3,t=>{const r=""+e;if(t.data.startsWith(r)){if(t.data.length!==r.length)return t.splitText(r.length)}else t.data=r},()=>ye(e),!0)}function Qn(i){return pi(i," ")}function Jn(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function ta(i,e){i.value=e==null?"":e}function ea(i,e,t,r){i.style.setProperty(e,t,r?"important":"")}function ra(i,e,t){i.classList[t?"add":"remove"](e)}function ia(i,e=document.body){return Array.from(e.querySelectorAll(i))}let ie;function ne(i){ie=i}function Wt(){if(!ie)throw new Error("Function called outside component initialization");return ie}function na(i){Wt().$$.on_mount.push(i)}function aa(i){Wt().$$.after_update.push(i)}function sa(i){Wt().$$.on_destroy.push(i)}function oa(i,e){Wt().$$.context.set(i,e)}function da(i){return Wt().$$.context.get(i)}function la(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const Gt=[],cr=[],ae=[],Re=[],hr=Promise.resolve();let Oe=!1;function fr(){Oe||(Oe=!0,hr.then(pr))}function ua(){return fr(),hr}function be(i){ae.push(i)}function ca(i){Re.push(i)}let Le=!1;const De=new Set;function pr(){if(!Le){Le=!0;do{for(let i=0;i<Gt.length;i+=1){const e=Gt[i];ne(e),Ei(e.$$)}for(ne(null),Gt.length=0;cr.length;)cr.pop()();for(let i=0;i<ae.length;i+=1){const e=ae[i];De.has(e)||(De.add(e),e())}ae.length=0}while(Gt.length);for(;Re.length;)Re.pop()();Oe=!1,Le=!1,De.clear()}}function Ei(i){if(i.fragment!==null){i.update(),Kt(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(be)}}const se=new Set;let gt;function ha(){gt={r:0,c:[],p:gt}}function fa(){gt.r||Kt(gt.c),gt=gt.p}function Er(i,e){i&&i.i&&(se.delete(i),i.i(e))}function mi(i,e,t,r){if(i&&i.o){if(se.has(i))return;se.add(i),gt.c.push(()=>{se.delete(i),r&&(t&&i.d(1),r())}),i.o(e)}}const pa=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ea(i,e){mi(i,1,1,()=>{e.delete(i.key)})}function ma(i,e,t,r,n,a,s,o,l,d,u,h){let E=i.length,f=a.length,m=E;const A={};for(;m--;)A[i[m].key]=m;const T=[],I=new Map,D=new Map;for(m=f;m--;){const N=h(n,a,m),K=t(N);let W=s.get(K);W?r&&W.p(N,e):(W=d(K,N),W.c()),I.set(K,T[m]=W),K in A&&D.set(K,Math.abs(m-A[K]))}const G=new Set,tt=new Set;function It(N){Er(N,1),N.m(o,u),s.set(N.key,N),u=N.first,f--}for(;E&&f;){const N=T[f-1],K=i[E-1],W=N.key,te=K.key;N===K?(u=N.first,E--,f--):I.has(te)?!s.has(W)||G.has(W)?It(N):tt.has(te)?E--:D.get(W)>D.get(te)?(tt.add(W),It(N)):(G.add(te),E--):(l(K,s),E--)}for(;E--;){const N=i[E];I.has(N.key)||l(N,s)}for(;f;)It(T[f-1]);return T}function Aa(i,e){const t={},r={},n={$$scope:1};let a=i.length;for(;a--;){const s=i[a],o=e[a];if(o){for(const l in s)l in o||(r[l]=1);for(const l in o)n[l]||(t[l]=o[l],n[l]=1);i[a]=o}else for(const l in s)n[l]=1}for(const s in r)s in t||(t[s]=void 0);return t}function Ta(i){return typeof i=="object"&&i!==null?i:{}}function Ca(i,e,t){const r=i.$$.props[e];r!==void 0&&(i.$$.bound[r]=t,t(i.$$.ctx[r]))}function Ia(i){i&&i.c()}function ga(i,e){i&&i.l(e)}function Ai(i,e,t,r){const{fragment:n,on_mount:a,on_destroy:s,after_update:o}=i.$$;n&&n.m(e,t),r||be(()=>{const l=a.map(er).filter(ir);s?s.push(...l):Kt(l),i.$$.on_mount=[]}),o.forEach(be)}function Ti(i,e){const t=i.$$;t.fragment!==null&&(Kt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ci(i,e){i.$$.dirty[0]===-1&&(Gt.push(i),fr(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function va(i,e,t,r,n,a,s,o=[-1]){const l=ie;ne(i);const d=i.$$={fragment:null,ctx:null,props:a,update:pt,not_equal:n,bound:rr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:rr(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(d.root);let u=!1;if(d.ctx=t?t(i,e.props||{},(h,E,...f)=>{const m=f.length?f[0]:E;return d.ctx&&n(d.ctx[h],d.ctx[h]=m)&&(!d.skip_bound&&d.bound[h]&&d.bound[h](m),u&&Ci(i,h)),E}):[],d.update(),u=!0,Kt(d.before_update),d.fragment=r?r(d.ctx):!1,e.target){if(e.hydrate){ni();const h=hi(e.target);d.fragment&&d.fragment.l(h),h.forEach(li)}else d.fragment&&d.fragment.c();e.intro&&Er(i.$$.fragment),Ai(i,e.target,e.anchor,e.customElement),ai(),pr()}ne(l)}class Sa{$destroy(){Ti(this,1),this.$destroy=pt}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}$set(e){this.$$set&&!ti(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const wt=[];function _a(i,e){return{subscribe:mr(i,e).subscribe}}function mr(i,e=pt){let t;const r=new Set;function n(o){if(Jr(i,o)&&(i=o,t)){const l=!wt.length;for(const d of r)d[1](),wt.push(d,i);if(l){for(let d=0;d<wt.length;d+=2)wt[d][0](wt[d+1]);wt.length=0}}}function a(o){n(o(i))}function s(o,l=pt){const d=[o,l];return r.add(d),r.size===1&&(t=e(n)||pt),o(i),()=>{r.delete(d),r.size===0&&(t(),t=null)}}return{set:n,update:a,subscribe:s}}var ya="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z",Ra="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z",Oa="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z",ba="M6.59,3.41L2,8L6.59,12.6L8,11.18L4.82,8L8,4.82L6.59,3.41M12.41,3.41L11,4.82L14.18,8L11,11.18L12.41,12.6L17,8L12.41,3.41M21.59,11.59L13.5,19.68L9.83,16L8.42,17.41L13.5,22.5L23,13L21.59,11.59Z",La="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V21C8 21.6 8.4 22 9 22H9.5C9.7 22 10 21.9 10.2 21.7L13.9 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M16 11H11.5L13.3 12.8L12 14L8 10L12 6L13.2 7.2L11.5 9H16V11Z",Da="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z",Na="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z",Ma="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z",Ha="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z",xa="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z",wa="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z",Pa="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z",Fa="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z",Ba="M19,11.5C19,11.5 17,13.67 17,15A2,2 0 0,0 19,17A2,2 0 0,0 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z",Va="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z",ka="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z",Ua="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",Ka="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",Wa="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z",Ga="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",Xa="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z",Ya="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z",ja="M21,12C21,9.97 20.33,8.09 19,6.38V17.63C20.33,15.97 21,14.09 21,12M17.63,19H6.38C7.06,19.55 7.95,20 9.05,20.41C10.14,20.8 11.13,21 12,21C12.88,21 13.86,20.8 14.95,20.41C16.05,20 16.94,19.55 17.63,19M11,17L7,9V17H11M17,9L13,17H17V9M12,14.53L15.75,7H8.25L12,14.53M17.63,5C15.97,3.67 14.09,3 12,3C9.91,3 8.03,3.67 6.38,5H17.63M5,17.63V6.38C3.67,8.09 3,9.97 3,12C3,14.09 3.67,15.97 5,17.63M23,12C23,15.03 21.94,17.63 19.78,19.78C17.63,21.94 15.03,23 12,23C8.97,23 6.38,21.94 4.22,19.78C2.06,17.63 1,15.03 1,12C1,8.97 2.06,6.38 4.22,4.22C6.38,2.06 8.97,1 12,1C15.03,1 17.63,2.06 19.78,4.22C21.94,6.38 23,8.97 23,12Z",za="M9,6H5V10H7V8H9M19,10H17V12H15V14H19M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2",$a="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",qa="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Za="M10,4V1L14,5L10,9V6A6,6 0 0,0 4,12L4.08,13H2.06L2,12A8,8 0 0,1 10,4M17,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H17A2,2 0 0,1 15,20V4A2,2 0 0,1 17,2M4,15H13V22H4A2,2 0 0,1 2,20V17A2,2 0 0,1 4,15Z",Qa="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M10,15.33C10.16,15.87 10.14,16.37 10,16.83C10,16.88 9.96,16.93 9.94,17C9.92,17 9.9,17.07 9.87,17.12C9.76,17.36 9.6,17.59 9.41,17.79C8.83,18.43 8,18.67 7.67,18.47C7.29,18.25 7.5,17.35 8.16,16.64C8.88,15.88 9.92,15.38 9.92,15.38V15.38L10,15.33M18.27,6.28C17.82,4.5 14.87,3.92 12.09,4.91C10.43,5.5 8.63,6.42 7.34,7.63C5.81,9.07 5.56,10.32 5.66,10.84C6,12.68 8.54,13.89 9.58,14.78V14.79C9.28,14.94 7.04,16.07 6.5,17.23C5.96,18.45 6.6,19.33 7,19.45C8.34,19.81 9.69,19.16 10.41,18.07C11.11,17.03 11.06,15.68 10.75,15C11.17,14.9 11.66,14.85 12.28,14.92C14.04,15.13 14.38,16.22 14.31,16.68C14.25,17.14 13.88,17.39 13.76,17.47C13.64,17.54 13.6,17.57 13.61,17.63C13.62,17.71 13.68,17.71 13.78,17.69C13.93,17.66 14.71,17.32 14.74,16.47C14.78,15.39 13.75,14.19 11.93,14.22C11.18,14.24 10.71,14.31 10.37,14.44L10.29,14.35C9.16,13.15 7.08,12.3 7.17,10.68C7.2,10.09 7.4,8.55 11.17,6.67C14.25,5.13 16.72,5.55 17.15,6.5C17.76,7.83 15.83,10.32 12.63,10.68C11.41,10.82 10.76,10.34 10.6,10.17C10.43,10 10.41,9.97 10.35,10C10.24,10.07 10.31,10.23 10.35,10.33C10.44,10.58 10.84,11 11.5,11.24C12.09,11.43 13.53,11.54 15.26,10.87C17.2,10.12 18.72,8.03 18.27,6.28Z",Ja="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z",ts="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",es="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",rs="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z";class Ne{constructor(e,t){t=Object.assign({},Ne.defaults,t),this.element=e,this.opts=t,this.touchStartX=null,this.touchStartY=null,this.touchEndX=null,this.touchEndY=null,this.velocityX=null,this.velocityY=null,this.longPressTimer=null,this.doubleTapWaiting=!1,this.handlers={panstart:[],panmove:[],panend:[],swipeleft:[],swiperight:[],swipeup:[],swipedown:[],tap:[],doubletap:[],longpress:[]},this._onTouchStart=this.onTouchStart.bind(this),this._onTouchMove=this.onTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.element.addEventListener("touchstart",this._onTouchStart,vt),this.element.addEventListener("touchmove",this._onTouchMove,vt),this.element.addEventListener("touchend",this._onTouchEnd,vt),this.opts.mouseSupport&&!("ontouchstart"in window)&&(this.element.addEventListener("mousedown",this._onTouchStart,vt),document.addEventListener("mousemove",this._onTouchMove,vt),document.addEventListener("mouseup",this._onTouchEnd,vt))}destroy(){this.element.removeEventListener("touchstart",this._onTouchStart),this.element.removeEventListener("touchmove",this._onTouchMove),this.element.removeEventListener("touchend",this._onTouchEnd),this.element.removeEventListener("mousedown",this._onTouchStart),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd),clearTimeout(this.longPressTimer),clearTimeout(this.doubleTapTimer)}on(e,t){if(this.handlers[e])return this.handlers[e].push(t),{type:e,fn:t,cancel:()=>this.off(e,t)}}off(e,t){if(this.handlers[e]){const r=this.handlers[e].indexOf(t);r!==-1&&this.handlers[e].splice(r,1)}}fire(e,t){for(let r=0;r<this.handlers[e].length;r++)this.handlers[e][r](t)}onTouchStart(e){this.thresholdX=this.opts.threshold("x",this),this.thresholdY=this.opts.threshold("y",this),this.disregardVelocityThresholdX=this.opts.disregardVelocityThreshold("x",this),this.disregardVelocityThresholdY=this.opts.disregardVelocityThreshold("y",this),this.touchStartX=e.type==="mousedown"?e.screenX:e.changedTouches[0].screenX,this.touchStartY=e.type==="mousedown"?e.screenY:e.changedTouches[0].screenY,this.touchMoveX=null,this.touchMoveY=null,this.touchEndX=null,this.touchEndY=null,this.longPressTimer=setTimeout(()=>this.fire("longpress",e),this.opts.longPressTime),this.fire("panstart",e)}onTouchMove(e){if(e.type==="mousemove"&&(!this.touchStartX||this.touchEndX!==null))return;const t=(e.type==="mousemove"?e.screenX:e.changedTouches[0].screenX)-this.touchStartX;this.velocityX=t-this.touchMoveX,this.touchMoveX=t;const r=(e.type==="mousemove"?e.screenY:e.changedTouches[0].screenY)-this.touchStartY;this.velocityY=r-this.touchMoveY,this.touchMoveY=r;const n=Math.abs(this.touchMoveX),a=Math.abs(this.touchMoveY);this.swipingHorizontal=n>this.thresholdX,this.swipingVertical=a>this.thresholdY,this.swipingDirection=n>a?this.swipingHorizontal?"horizontal":"pre-horizontal":this.swipingVertical?"vertical":"pre-vertical",Math.max(n,a)>this.opts.pressThreshold&&clearTimeout(this.longPressTimer),this.fire("panmove",e)}onTouchEnd(e){if(e.type==="mouseup"&&(!this.touchStartX||this.touchEndX!==null))return;this.touchEndX=e.type==="mouseup"?e.screenX:e.changedTouches[0].screenX,this.touchEndY=e.type==="mouseup"?e.screenY:e.changedTouches[0].screenY,this.fire("panend",e),clearTimeout(this.longPressTimer);const t=this.touchEndX-this.touchStartX,r=Math.abs(t),n=this.touchEndY-this.touchStartY,a=Math.abs(n);r>this.thresholdX||a>this.thresholdY?(this.swipedHorizontal=this.opts.diagonalSwipes?Math.abs(t/n)<=this.opts.diagonalLimit:r>=a&&r>this.thresholdX,this.swipedVertical=this.opts.diagonalSwipes?Math.abs(n/t)<=this.opts.diagonalLimit:a>r&&a>this.thresholdY,this.swipedHorizontal&&(t<0?(this.velocityX<-this.opts.velocityThreshold||t<-this.disregardVelocityThresholdX)&&this.fire("swipeleft",e):(this.velocityX>this.opts.velocityThreshold||t>this.disregardVelocityThresholdX)&&this.fire("swiperight",e)),this.swipedVertical&&(n<0?(this.velocityY<-this.opts.velocityThreshold||n<-this.disregardVelocityThresholdY)&&this.fire("swipeup",e):(this.velocityY>this.opts.velocityThreshold||n>this.disregardVelocityThresholdY)&&this.fire("swipedown",e))):r<this.opts.pressThreshold&&a<this.opts.pressThreshold&&(this.doubleTapWaiting?(this.doubleTapWaiting=!1,clearTimeout(this.doubleTapTimer),this.fire("doubletap",e)):(this.doubleTapWaiting=!0,this.doubleTapTimer=setTimeout(()=>this.doubleTapWaiting=!1,this.opts.doubleTapTime),this.fire("tap",e)))}}Ne.defaults={threshold:(i,e)=>Math.max(25,Math.floor(.15*(i==="x"?window.innerWidth||document.body.clientWidth:window.innerHeight||document.body.clientHeight))),velocityThreshold:10,disregardVelocityThreshold:(i,e)=>Math.floor(.5*(i==="x"?e.element.clientWidth:e.element.clientHeight)),pressThreshold:8,diagonalSwipes:!1,diagonalLimit:Math.tan(45*1.5/180*Math.PI),longPressTime:500,doubleTapTime:300,mouseSupport:!0};let vt=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){vt={passive:!0}}}))}catch{}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Me=function(i,e){return Me=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Me(i,e)};function v(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Me(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var p=function(){return p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(this,arguments)};function Ii(i,e,t,r){function n(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function o(u){try{d(r.next(u))}catch(h){s(h)}}function l(u){try{d(r.throw(u))}catch(h){s(h)}}function d(u){u.done?a(u.value):n(u.value).then(o,l)}d((r=r.apply(i,e||[])).next())})}function gi(i,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,n,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(d){return function(u){return l([d,u])}}function l(d){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(a=d[0]&2?n.return:d[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,d[1])).done)return a;switch(n=0,a&&(d=[d[0]&2,a.value]),d[0]){case 0:case 1:a=d;break;case 4:return t.label++,{value:d[1],done:!1};case 5:t.label++,n=d[1],d=[0];continue;case 7:d=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(d[0]===6||d[0]===2)){t=0;continue}if(d[0]===3&&(!a||d[1]>a[0]&&d[1]<a[3])){t.label=d[1];break}if(d[0]===6&&t.label<a[1]){t.label=a[1],a=d;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(d);break}a[2]&&t.ops.pop(),t.trys.pop();continue}d=e.call(i,t)}catch(u){d=[6,u],n=0}finally{r=a=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}function L(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],r=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&r>=i.length&&(i=void 0),{value:i&&i[r++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ar(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var r=t.call(i),n,a=[],s;try{for(;(e===void 0||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(o){s={error:o}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return a}function vi(i,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,a;r<n;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var R=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Si(i){return i===void 0&&(i=window),_i(i)?{passive:!0}:!1}function _i(i){i===void 0&&(i=window);var e=!1;try{var t={get passive(){return e=!0,!1}},r=function(){};i.document.addEventListener("test",r,t),i.document.removeEventListener("test",r,t)}catch{e=!1}return e}var is=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:Si});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function yi(i,e){if(i.closest)return i.closest(e);for(var t=i;t;){if(Tr(t,e))return t;t=t.parentElement}return null}function Tr(i,e){var t=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return t.call(i,e)}function Ri(i){var e=i;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var r=t.scrollWidth;return document.documentElement.removeChild(t),r}var ns=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:yi,matches:Tr,estimateScrollWidth:Ri});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Oi={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},bi={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Cr={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},oe;function as(i,e){e===void 0&&(e=!1);var t=i.CSS,r=oe;if(typeof oe=="boolean"&&!e)return oe;var n=t&&typeof t.supports=="function";if(!n)return!1;var a=t.supports("--css-vars","yes"),s=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return r=a||s,e||(oe=r),r}function Li(i,e,t){if(!i)return{x:0,y:0};var r=e.x,n=e.y,a=r+t.left,s=n+t.top,o,l;if(i.type==="touchstart"){var d=i;o=d.changedTouches[0].pageX-a,l=d.changedTouches[0].pageY-s}else{var u=i;o=u.pageX-a,l=u.pageY-s}return{x:o,y:l}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ir=["touchstart","pointerdown","mousedown","keydown"],gr=["touchend","pointerup","mouseup","contextmenu"],de=[],ss=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(n){r.activateImpl(n)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Oi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return bi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Cr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var n=e.cssClasses,a=n.ROOT,s=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var r=e.cssClasses,n=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(n),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var r=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var r,n;if(t){try{for(var a=L(Ir),s=a.next();!s.done;s=a.next()){var o=s.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(l){r={error:l}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var r,n;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=L(gr),s=a.next();!s.done;s=a.next()){var o=s.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(l){r={error:l}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}},e.prototype.deregisterRootHandlers=function(){var t,r;try{for(var n=L(Ir),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,r;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var n=L(gr),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,r=e.strings,n=Object.keys(r);n.forEach(function(a){a.indexOf("VAR_")===0&&t.adapter.updateCssVariable(r[a],null)})},e.prototype.activateImpl=function(t){var r=this;if(!this.adapter.isSurfaceDisabled()){var n=this.activationState;if(!n.isActivated){var a=this.previousActivationEvent,s=a&&t!==void 0&&a.type!==t.type;if(!s){n.isActivated=!0,n.isProgrammatic=t===void 0,n.activationEvent=t,n.wasActivatedByPointer=n.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var o=t!==void 0&&de.length>0&&de.some(function(l){return r.adapter.containsEventTarget(l)});if(o){this.resetActivationState();return}t!==void 0&&(de.push(t.target),this.registerDeactivationHandlers(t)),n.wasElementMadeActive=this.checkElementMadeActive(t),n.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){de=[],!n.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(n.wasElementMadeActive=r.checkElementMadeActive(t),n.wasElementMadeActive&&r.animateActivation()),n.wasElementMadeActive||(r.activationState=r.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,r=e.strings,n=r.VAR_FG_TRANSLATE_START,a=r.VAR_FG_TRANSLATE_END,s=e.cssClasses,o=s.FG_DEACTIVATION,l=s.FG_ACTIVATION,d=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",h="";if(!this.adapter.isUnbounded()){var E=this.getFgTranslationCoordinates(),f=E.startPoint,m=E.endPoint;u=f.x+"px, "+f.y+"px",h=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(n,u),this.adapter.updateCssVariable(a,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},d)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,r=t.activationEvent,n=t.wasActivatedByPointer,a;n?a=Li(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:s}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,r=e.cssClasses.FG_DEACTIVATION,n=this.activationState,a=n.hasDeactivationUXRun,s=n.isActivated,o=a||!s;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(r)},Cr.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,r=this.activationState;if(!!r.isActivated){var n=p({},r);r.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(n)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(n),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var r=t.wasActivatedByPointer,n=t.wasElementMadeActive;(r||n)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width),n=function(){var s=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return s+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?r:n();var a=Math.floor(r*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!=0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,r=t.VAR_FG_SIZE,n=t.VAR_LEFT,a=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(n,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var St={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},le={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Di={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vr=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Di},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return St},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ue=0,Ni=function(i){v(e,i);function e(t){var r=i.call(this,t)||this;return r.wasDocked=!0,r.isDockedShowing=!0,r.currentAppBarOffsetTop=0,r.isCurrentlyBeingResized=!1,r.resizeThrottleId=ue,r.resizeDebounceId=ue,r.lastScrollPosition=r.adapter.getViewportScrollY(),r.topAppBarHeight=r.adapter.getTopAppBarHeight(),r}return e.prototype.destroy=function(){i.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),r=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=r,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=ue,t.throttledResizeHandler()},le.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=ue},le.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,r=this.currentAppBarOffsetTop<0,n=this.currentAppBarOffsetTop>t,a=r&&n;if(a)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==n)return this.isDockedShowing=n,!0}else return this.wasDocked=!0,!0;return a},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-le.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(vr);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var os=function(i){v(e,i);function e(){var t=i!==null&&i.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(St.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(St.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(Ni);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ds=function(i){v(e,i);function e(t){var r=i.call(this,t)||this;return r.collapsed=!1,r.isAlwaysCollapsed=!1,r}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){i.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(St.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(St.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(St.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(St.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(vr);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var He="mdc-dom-focus-sentinel",Mi=function(){function i(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return i.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},i.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+He)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},i.prototype.wrapTabFocus=function(e){var t=this,r=this.createSentinel(),n=this.createSentinel();r.addEventListener("focus",function(){var a=t.getFocusableElements(e);a.length>0&&a[a.length-1].focus()}),n.addEventListener("focus",function(){var a=t.getFocusableElements(e);a.length>0&&a[0].focus()}),e.insertBefore(r,e.children[0]),e.appendChild(n)},i.prototype.focusInitialElement=function(e,t){var r=0;t&&(r=Math.max(e.indexOf(t),0)),e[r].focus()},i.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(r){var n=r.getAttribute("aria-disabled")==="true"||r.getAttribute("disabled")!=null||r.getAttribute("hidden")!=null||r.getAttribute("aria-hidden")==="true",a=r.tabIndex>=0&&r.getBoundingClientRect().width>0&&!r.classList.contains(He)&&!n,s=!1;if(a){var o=getComputedStyle(r);s=o.display==="none"||o.visibility==="hidden"}return a&&!s})},i.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(He),e},i}(),ls=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:Mi});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Et,st,_={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Et={},Et[""+_.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Et[""+_.LIST_ITEM_CLASS]="mdc-list-item",Et[""+_.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Et[""+_.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Et[""+_.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Et[""+_.ROOT]="mdc-list";var Pt=(st={},st[""+_.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",st[""+_.LIST_ITEM_CLASS]="mdc-deprecated-list-item",st[""+_.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",st[""+_.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",st[""+_.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",st[""+_.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",st[""+_.ROOT]="mdc-deprecated-list",st),mt={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+_.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+_.LIST_ITEM_CLASS+` a,
    .`+Pt[_.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Pt[_.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+_.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+_.LIST_ITEM_CLASS+` a,
    .`+_.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+_.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Pt[_.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Pt[_.LIST_ITEM_CLASS]+` a,
    .`+Pt[_.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Pt[_.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},V={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var g={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},X=new Set;X.add(g.BACKSPACE);X.add(g.ENTER);X.add(g.SPACEBAR);X.add(g.PAGE_UP);X.add(g.PAGE_DOWN);X.add(g.END);X.add(g.HOME);X.add(g.ARROW_LEFT);X.add(g.ARROW_UP);X.add(g.ARROW_RIGHT);X.add(g.ARROW_DOWN);X.add(g.DELETE);X.add(g.ESCAPE);X.add(g.TAB);var z={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},Y=new Map;Y.set(z.BACKSPACE,g.BACKSPACE);Y.set(z.ENTER,g.ENTER);Y.set(z.SPACEBAR,g.SPACEBAR);Y.set(z.PAGE_UP,g.PAGE_UP);Y.set(z.PAGE_DOWN,g.PAGE_DOWN);Y.set(z.END,g.END);Y.set(z.HOME,g.HOME);Y.set(z.ARROW_LEFT,g.ARROW_LEFT);Y.set(z.ARROW_UP,g.ARROW_UP);Y.set(z.ARROW_RIGHT,g.ARROW_RIGHT);Y.set(z.ARROW_DOWN,g.ARROW_DOWN);Y.set(z.DELETE,g.DELETE);Y.set(z.ESCAPE,g.ESCAPE);Y.set(z.TAB,g.TAB);var ot=new Set;ot.add(g.PAGE_UP);ot.add(g.PAGE_DOWN);ot.add(g.END);ot.add(g.HOME);ot.add(g.ARROW_LEFT);ot.add(g.ARROW_UP);ot.add(g.ARROW_RIGHT);ot.add(g.ARROW_DOWN);function M(i){var e=i.key;if(X.has(e))return e;var t=Y.get(i.keyCode);return t||g.UNKNOWN}function Hi(i){return ot.has(M(i))}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xi=["input","button","textarea","select"],_t=function(i){var e=i.target;if(!!e){var t=(""+e.tagName).toLowerCase();xi.indexOf(t)===-1&&i.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function wi(){var i={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return i}function Pi(i,e){for(var t=new Map,r=0;r<i;r++){var n=e(r).trim();if(!!n){var a=n[0].toLowerCase();t.has(a)||t.set(a,[]),t.get(a).push({text:n.toLowerCase(),index:r})}}return t.forEach(function(s){s.sort(function(o,l){return o.index-l.index})}),t}function xe(i,e){var t=i.nextChar,r=i.focusItemAtIndex,n=i.sortedIndexByFirstChar,a=i.focusedItemIndex,s=i.skipFocus,o=i.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){_r(e)},V.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var l;return e.typeaheadBuffer.length===1?l=Fi(n,a,o,e):l=Bi(n,o,e),l!==-1&&!s&&r(l),l}function Fi(i,e,t,r){var n=r.typeaheadBuffer[0],a=i.get(n);if(!a)return-1;if(n===r.currentFirstChar&&a[r.sortedIndexCursor].index===e){r.sortedIndexCursor=(r.sortedIndexCursor+1)%a.length;var s=a[r.sortedIndexCursor].index;if(!t(s))return s}r.currentFirstChar=n;var o=-1,l;for(l=0;l<a.length;l++)if(!t(a[l].index)){o=l;break}for(;l<a.length;l++)if(a[l].index>e&&!t(a[l].index)){o=l;break}return o!==-1?(r.sortedIndexCursor=o,a[r.sortedIndexCursor].index):-1}function Bi(i,e,t){var r=t.typeaheadBuffer[0],n=i.get(r);if(!n)return-1;var a=n[t.sortedIndexCursor];if(a.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(a.index))return a.index;for(var s=(t.sortedIndexCursor+1)%n.length,o=-1;s!==t.sortedIndexCursor;){var l=n[s],d=l.text.lastIndexOf(t.typeaheadBuffer,0)===0,u=!e(l.index);if(d&&u){o=s;break}s=(s+1)%n.length}return o!==-1?(t.sortedIndexCursor=o,n[t.sortedIndexCursor].index):-1}function Sr(i){return i.typeaheadBuffer.length>0}function _r(i){i.typeaheadBuffer=""}function yr(i,e){var t=i.event,r=i.isTargetListItem,n=i.focusedItemIndex,a=i.focusItemAtIndex,s=i.sortedIndexByFirstChar,o=i.isItemAtIndexDisabled,l=M(t)==="ArrowLeft",d=M(t)==="ArrowUp",u=M(t)==="ArrowRight",h=M(t)==="ArrowDown",E=M(t)==="Home",f=M(t)==="End",m=M(t)==="Enter",A=M(t)==="Spacebar";if(t.ctrlKey||t.metaKey||l||d||u||h||E||f||m)return-1;var T=!A&&t.key.length===1;if(T){_t(t);var I={focusItemAtIndex:a,focusedItemIndex:n,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return xe(I,e)}if(!A)return-1;r&&_t(t);var D=r&&Sr(e);if(D){var I={focusItemAtIndex:a,focusedItemIndex:n,nextChar:" ",sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return xe(I,e)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Vi(i){return i instanceof Array}var us=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.wrapFocus=!1,r.isVertical=!0,r.isSingleSelectionList=!1,r.selectedIndex=V.UNSET_INDEX,r.focusedItemIndex=V.UNSET_INDEX,r.useActivatedClass=!1,r.useSelectedAttr=!1,r.ariaCurrentAttrValue=null,r.isCheckboxList=!1,r.isRadioList=!1,r.hasTypeahead=!1,r.typeaheadState=wi(),r.sortedIndexByFirstChar=new Map,r}return Object.defineProperty(e,"strings",{get:function(){return mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==V.UNSET_INDEX){var r=this.adapter.listItemAtIndexHasClass(t,_.LIST_ITEM_ACTIVATED_CLASS);r&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=V.UNSET_INDEX,r=this.adapter.getListItemCount(),n=0;n<r;n++){var a=this.adapter.listItemAtIndexHasClass(n,_.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(n,_.LIST_ITEM_ACTIVATED_CLASS);if(!!(a||s)){t=n;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Sr(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,r){var n=r===void 0?{}:r,a=n.forceUpdate;!this.isIndexValid(t)||(this.isCheckboxList?this.setCheckboxAtIndex(t):this.isRadioList?this.setRadioAtIndex(t):this.setSingleSelectionAtIndex(t,{forceUpdate:a}))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var r=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){r.adapter.isFocusInsideList()||r.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(t,r,n){var a=this,s=M(t)==="ArrowLeft",o=M(t)==="ArrowUp",l=M(t)==="ArrowRight",d=M(t)==="ArrowDown",u=M(t)==="Home",h=M(t)==="End",E=M(t)==="Enter",f=M(t)==="Spacebar",m=t.key==="A"||t.key==="a";if(this.adapter.isRootFocused()){if(o||h?(t.preventDefault(),this.focusLastElement()):(d||u)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var A={event:t,focusItemAtIndex:function(D){a.focusItemAtIndex(D)},focusedItemIndex:-1,isTargetListItem:r,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(D){return a.adapter.listItemAtIndexHasClass(D,_.LIST_ITEM_DISABLED_CLASS)}};yr(A,this.typeaheadState)}return}var T=this.adapter.getFocusedElementIndex();if(!(T===-1&&(T=n,T<0))){if(this.isVertical&&d||!this.isVertical&&l)_t(t),this.focusNextElement(T);else if(this.isVertical&&o||!this.isVertical&&s)_t(t),this.focusPrevElement(T);else if(u)_t(t),this.focusFirstElement();else if(h)_t(t),this.focusLastElement();else if(m&&t.ctrlKey&&this.isCheckboxList)t.preventDefault(),this.toggleAll(this.selectedIndex===V.UNSET_INDEX?[]:this.selectedIndex);else if((E||f)&&r){var I=t.target;if(I&&I.tagName==="A"&&E||(_t(t),this.adapter.listItemAtIndexHasClass(T,_.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(T),this.adapter.notifyAction(T))}if(this.hasTypeahead){var A={event:t,focusItemAtIndex:function(G){a.focusItemAtIndex(G)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:r,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(G){return a.adapter.listItemAtIndexHasClass(G,_.LIST_ITEM_DISABLED_CLASS)}};yr(A,this.typeaheadState)}}},e.prototype.handleClick=function(t,r){t!==V.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,_.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(t,r),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var r=this.adapter.getListItemCount(),n=t+1;if(n>=r)if(this.wrapFocus)n=0;else return t;return this.focusItemAtIndex(n),n},e.prototype.focusPrevElement=function(t){var r=t-1;if(r<0)if(this.wrapFocus)r=this.adapter.getListItemCount()-1;else return t;return this.focusItemAtIndex(r),r},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,r){!this.isIndexValid(t)||(r?(this.adapter.removeClassForElementIndex(t,_.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,mt.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,_.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,mt.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,r){var n=r===void 0?{}:r,a=n.forceUpdate;if(!(this.selectedIndex===t&&!a)){var s=_.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(s=_.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==V.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,s),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==V.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,s),this.selectedIndex=t}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===V.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,mt.ARIA_CURRENT));var r=this.ariaCurrentAttrValue!==null,n=r?mt.ARIA_CURRENT:mt.ARIA_SELECTED;if(this.selectedIndex!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,n,"false"),t!==V.UNSET_INDEX){var a=r?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,n,a)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?mt.ARIA_SELECTED:mt.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t){var r=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,r,"false"),this.adapter.setAttributeForElementIndex(t,r,"true"),this.selectedIndex=t},e.prototype.setCheckboxAtIndex=function(t){for(var r=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var a=!1;t.indexOf(n)>=0&&(a=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,a),this.adapter.setAttributeForElementIndex(n,r,a?"true":"false")}this.selectedIndex=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===V.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==V.UNSET_INDEX?this.selectedIndex:Vi(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,r){return Math.min(t,r)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t){var r=this;if(t instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(n){return r.isIndexInRange(n)})}else if(typeof t=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===V.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var r=this.adapter.getListItemCount();return t>=0&&t<r},e.prototype.setSelectedIndexOnAction=function(t,r){r===void 0&&(r=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(t,r):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex=function(t,r){var n=this.getSelectionAttribute(),a=this.adapter.isCheckboxCheckedAtIndex(t);r&&(a=!a,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,a)),this.adapter.setAttributeForElementIndex(t,n,a?"true":"false");var s=this.selectedIndex===V.UNSET_INDEX?[]:this.selectedIndex.slice();a?s.push(t):s=s.filter(function(o){return o!==t}),this.selectedIndex=s},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var r=this.adapter.getListItemCount();if(t.length===r)this.setCheckboxAtIndex([]);else{for(var n=[],a=0;a<r;a++)(!this.adapter.listItemAtIndexHasClass(a,_.LIST_ITEM_DISABLED_CLASS)||t.indexOf(a)>-1)&&n.push(a);this.setCheckboxAtIndex(n)}},e.prototype.typeaheadMatchItem=function(t,r,n){var a=this;n===void 0&&(n=!1);var s={focusItemAtIndex:function(o){a.focusItemAtIndex(o)},focusedItemIndex:r||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(o){return a.adapter.listItemAtIndexHasClass(o,_.LIST_ITEM_DISABLED_CLASS)}};return xe(s,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return Pi(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){_r(this.typeaheadState)},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},ki={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ui=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.animationFrame=0,r.animationTimer=0,r}return Object.defineProperty(e,"strings",{get:function(){return ki},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return $},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass($.OPEN),this.adapter.addClass($.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass($.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass($.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass($.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass($.OPENING)||this.adapter.hasClass($.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass($.CLOSING)},e.prototype.handleKeydown=function(t){var r=t.keyCode,n=t.key,a=n==="Escape"||r===27;a&&this.close()},e.prototype.handleTransitionEnd=function(t){var r=$.OPENING,n=$.CLOSING,a=$.OPEN,s=$.ANIMATE,o=$.ROOT,l=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o);!l||(this.isClosing()?(this.adapter.removeClass(a),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(s),this.adapter.removeClass(r),this.adapter.removeClass(n))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var r=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){r.animationFrame=0,clearTimeout(r.animationTimer),r.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var cs=function(i){v(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Ui);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ce={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},dt={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var hs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.hasToggledAriaLabel=!1,r}return Object.defineProperty(e,"cssClasses",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(dt.DATA_ARIA_LABEL_ON),r=this.adapter.getAttr(dt.DATA_ARIA_LABEL_OFF);if(t&&r){if(this.adapter.getAttr(dt.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(dt.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(ce.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(t===void 0&&(t=!this.isOn()),t?this.adapter.addClass(ce.ICON_BUTTON_ON):this.adapter.removeClass(ce.ICON_BUTTON_ON),this.hasToggledAriaLabel){var r=t?this.adapter.getAttr(dt.DATA_ARIA_LABEL_ON):this.adapter.getAttr(dt.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(dt.ARIA_LABEL,r||"")}else this.adapter.setAttr(dt.ARIA_PRESSED,""+t)},e}(R);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var lt;(function(i){i.RICH="mdc-tooltip--rich",i.SHOWN="mdc-tooltip--shown",i.SHOWING="mdc-tooltip--showing",i.SHOWING_TRANSITION="mdc-tooltip--showing-transition",i.HIDE="mdc-tooltip--hide",i.HIDE_TRANSITION="mdc-tooltip--hide-transition",i.MULTILINE_TOOLTIP="mdc-tooltip--multiline",i.SURFACE="mdc-tooltip__surface",i.SURFACE_ANIMATION="mdc-tooltip__surface-animation",i.TOOLTIP_CARET_TOP="mdc-tooltip__caret-surface-top",i.TOOLTIP_CARET_BOTTOM="mdc-tooltip__caret-surface-bottom"})(lt||(lt={}));var j={BOUNDED_ANCHOR_GAP:4,UNBOUNDED_ANCHOR_GAP:8,MIN_VIEWPORT_TOOLTIP_THRESHOLD:8,HIDE_DELAY_MS:600,SHOW_DELAY_MS:500,MIN_HEIGHT:24,MAX_WIDTH:200,CARET_INDENTATION:24,ANIMATION_SCALE:.8},he={ARIA_EXPANDED:"aria-expanded",ARIA_HASPOPUP:"aria-haspopup",PERSISTENT:"data-mdc-tooltip-persistent",SCROLLABLE_ANCESTOR:"tooltip-scrollable-ancestor",HAS_CARET:"data-mdc-tooltip-has-caret"},Ft;(function(i){i[i.DETECTED=0]="DETECTED",i[i.START=1]="START",i[i.CENTER=2]="CENTER",i[i.END=3]="END"})(Ft||(Ft={}));var Xt;(function(i){i[i.DETECTED=0]="DETECTED",i[i.ABOVE=1]="ABOVE",i[i.BELOW=2]="BELOW"})(Xt||(Xt={}));var we;(function(i){i[i.BOUNDED=0]="BOUNDED",i[i.UNBOUNDED=1]="UNBOUNDED"})(we||(we={}));var C={LEFT:"left",RIGHT:"right",CENTER:"center",TOP:"top",BOTTOM:"bottom"},y;(function(i){i[i.DETECTED=0]="DETECTED",i[i.ABOVE_START=1]="ABOVE_START",i[i.ABOVE_CENTER=2]="ABOVE_CENTER",i[i.ABOVE_END=3]="ABOVE_END",i[i.TOP_SIDE_START=4]="TOP_SIDE_START",i[i.CENTER_SIDE_START=5]="CENTER_SIDE_START",i[i.BOTTOM_SIDE_START=6]="BOTTOM_SIDE_START",i[i.TOP_SIDE_END=7]="TOP_SIDE_END",i[i.CENTER_SIDE_END=8]="CENTER_SIDE_END",i[i.BOTTOM_SIDE_END=9]="BOTTOM_SIDE_END",i[i.BELOW_START=10]="BELOW_START",i[i.BELOW_CENTER=11]="BELOW_CENTER",i[i.BELOW_END=12]="BELOW_END"})(y||(y={}));var k;(function(i){i[i.ABOVE=1]="ABOVE",i[i.BELOW=2]="BELOW",i[i.SIDE_TOP=3]="SIDE_TOP",i[i.SIDE_CENTER=4]="SIDE_CENTER",i[i.SIDE_BOTTOM=5]="SIDE_BOTTOM"})(k||(k={}));var O;(function(i){i[i.START=1]="START",i[i.CENTER=2]="CENTER",i[i.END=3]="END",i[i.SIDE_START=4]="SIDE_START",i[i.SIDE_END=5]="SIDE_END"})(O||(O={}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pe=function(){function i(){this.rafIDs=new Map}return i.prototype.request=function(e,t){var r=this;this.cancel(e);var n=requestAnimationFrame(function(a){r.rafIDs.delete(e),t(a)});this.rafIDs.set(e,n)},i.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},i.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(t,r){e.cancel(r)})},i.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(t,r){e.push(r)}),e},i}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rr={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function Ki(i){return Boolean(i.document)&&typeof i.document.createElement=="function"}function Yt(i,e){if(Ki(i)&&e in Rr){var t=i.document.createElement("div"),r=Rr[e],n=r.standard,a=r.prefixed,s=n in t.style;return s?n:a}return e}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wi=lt.RICH,Fe=lt.SHOWN,Be=lt.SHOWING,fe=lt.SHOWING_TRANSITION,jt=lt.HIDE,pe=lt.HIDE_TRANSITION,Gi=lt.MULTILINE_TOOLTIP,Ve;(function(i){i.POLL_ANCHOR="poll_anchor"})(Ve||(Ve={}));var Or=typeof window!="undefined",fs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.tooltipShown=!1,r.anchorGap=j.BOUNDED_ANCHOR_GAP,r.xTooltipPos=Ft.DETECTED,r.yTooltipPos=Xt.DETECTED,r.tooltipPositionWithCaret=y.DETECTED,r.minViewportTooltipThreshold=j.MIN_VIEWPORT_TOOLTIP_THRESHOLD,r.hideDelayMs=j.HIDE_DELAY_MS,r.showDelayMs=j.SHOW_DELAY_MS,r.anchorRect=null,r.parentRect=null,r.frameId=null,r.hideTimeout=null,r.showTimeout=null,r.addAncestorScrollEventListeners=new Array,r.removeAncestorScrollEventListeners=new Array,r.animFrame=new Pe,r.anchorBlurHandler=function(n){r.handleAnchorBlur(n)},r.documentClickHandler=function(n){r.handleDocumentClick(n)},r.documentKeydownHandler=function(n){r.handleKeydown(n)},r.tooltipMouseEnterHandler=function(){r.handleTooltipMouseEnter()},r.tooltipMouseLeaveHandler=function(){r.handleTooltipMouseLeave()},r.richTooltipFocusOutHandler=function(n){r.handleRichTooltipFocusOut(n)},r.windowScrollHandler=function(){r.handleWindowScrollEvent()},r.windowResizeHandler=function(){r.handleWindowChangeEvent()},r}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},addClass:function(){},hasClass:function(){return!1},removeClass:function(){},getComputedStyleProperty:function(){return""},setStyleProperty:function(){},setSurfaceAnimationStyleProperty:function(){},getViewportWidth:function(){return 0},getViewportHeight:function(){return 0},getTooltipSize:function(){return{width:0,height:0}},getAnchorBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getParentBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getAnchorAttribute:function(){return null},setAnchorAttribute:function(){return null},isRTL:function(){return!1},anchorContainsElement:function(){return!1},tooltipContainsElement:function(){return!1},focusAnchorElement:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerAnchorEventHandler:function(){},deregisterAnchorEventHandler:function(){},registerDocumentEventHandler:function(){},deregisterDocumentEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){},notifyHidden:function(){},getTooltipCaretBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setTooltipCaretStyle:function(){},clearTooltipCaretStyles:function(){},getActiveElement:function(){return null}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.richTooltip=this.adapter.hasClass(Wi),this.persistentTooltip=this.adapter.getAttribute(he.PERSISTENT)==="true",this.interactiveTooltip=!!this.adapter.getAnchorAttribute(he.ARIA_EXPANDED)&&this.adapter.getAnchorAttribute(he.ARIA_HASPOPUP)==="dialog",this.hasCaret=this.richTooltip&&this.adapter.getAttribute(he.HAS_CARET)==="true"},e.prototype.isShown=function(){return this.tooltipShown},e.prototype.isRich=function(){return this.richTooltip},e.prototype.isPersistent=function(){return this.persistentTooltip},e.prototype.handleAnchorMouseEnter=function(){var t=this;this.tooltipShown?this.show():(this.clearHideTimeout(),this.showTimeout=setTimeout(function(){t.show()},this.showDelayMs))},e.prototype.handleAnchorTouchstart=function(){var t=this;this.showTimeout=setTimeout(function(){t.show()},this.showDelayMs),this.adapter.registerWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.preventContextMenuOnLongTouch=function(t){t.preventDefault()},e.prototype.handleAnchorTouchend=function(){this.clearShowTimeout(),this.isShown()||this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.handleAnchorFocus=function(t){var r=this,n=t.relatedTarget,a=n instanceof HTMLElement&&this.adapter.tooltipContainsElement(n);a||(this.showTimeout=setTimeout(function(){r.show()},this.showDelayMs))},e.prototype.handleAnchorMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){t.hide()},this.hideDelayMs)},e.prototype.handleAnchorClick=function(){this.tooltipShown?this.hide():this.show()},e.prototype.handleDocumentClick=function(t){var r=t.target instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.target)||this.adapter.tooltipContainsElement(t.target));this.richTooltip&&this.persistentTooltip&&r||this.hide()},e.prototype.handleKeydown=function(t){var r=M(t);if(r===g.ESCAPE){var n=this.adapter.getActiveElement(),a=n instanceof HTMLElement&&this.adapter.tooltipContainsElement(n);a&&this.adapter.focusAnchorElement(),this.hide()}},e.prototype.handleAnchorBlur=function(t){if(this.richTooltip){var r=t.relatedTarget instanceof HTMLElement&&this.adapter.tooltipContainsElement(t.relatedTarget);if(r||t.relatedTarget===null&&this.interactiveTooltip)return}this.hide()},e.prototype.handleTooltipMouseEnter=function(){this.show()},e.prototype.handleTooltipMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){t.hide()},this.hideDelayMs)},e.prototype.handleRichTooltipFocusOut=function(t){var r=t.relatedTarget instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.relatedTarget)||this.adapter.tooltipContainsElement(t.relatedTarget));r||t.relatedTarget===null&&this.interactiveTooltip||this.hide()},e.prototype.handleWindowScrollEvent=function(){if(this.persistentTooltip){this.handleWindowChangeEvent();return}this.hide()},e.prototype.handleWindowChangeEvent=function(){var t=this;this.animFrame.request(Ve.POLL_ANCHOR,function(){t.repositionTooltipOnAnchorMove()})},e.prototype.show=function(){var t,r,n=this;if(this.clearHideTimeout(),this.clearShowTimeout(),!this.tooltipShown){this.tooltipShown=!0,this.adapter.removeAttribute("aria-hidden"),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","true"),this.adapter.registerEventHandler("focusout",this.richTooltipFocusOutHandler)),this.persistentTooltip||(this.adapter.registerEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.registerEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.removeClass(jt),this.adapter.addClass(Be),this.isTooltipMultiline()&&!this.richTooltip&&this.adapter.addClass(Gi),this.anchorRect=this.adapter.getAnchorBoundingRect(),this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip(),this.adapter.registerAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.registerDocumentEventHandler("click",this.documentClickHandler),this.adapter.registerDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.registerWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler);try{for(var a=L(this.addAncestorScrollEventListeners),s=a.next();!s.done;s=a.next()){var o=s.value;o()}}catch(l){t={error:l}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}this.frameId=requestAnimationFrame(function(){n.clearAllAnimationClasses(),n.adapter.addClass(Fe),n.adapter.addClass(fe)})}},e.prototype.hide=function(){var t,r;if(this.clearHideTimeout(),this.clearShowTimeout(),!!this.tooltipShown){this.frameId&&cancelAnimationFrame(this.frameId),this.tooltipShown=!1,this.adapter.setAttribute("aria-hidden","true"),this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.richTooltip&&this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","false"),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.clearAllAnimationClasses(),this.adapter.addClass(jt),this.adapter.addClass(pe),this.adapter.removeClass(Fe),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch);try{for(var n=L(this.removeAncestorScrollEventListeners),a=n.next();!a.done;a=n.next()){var s=a.value;s()}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}}},e.prototype.handleTransitionEnd=function(){var t=this.adapter.hasClass(jt);this.adapter.removeClass(Be),this.adapter.removeClass(fe),this.adapter.removeClass(jt),this.adapter.removeClass(pe),t&&this.adapter.notifyHidden()},e.prototype.clearAllAnimationClasses=function(){this.adapter.removeClass(fe),this.adapter.removeClass(pe)},e.prototype.setTooltipPosition=function(t){var r=t.xPos,n=t.yPos,a=t.withCaretPos;if(this.hasCaret&&a){this.tooltipPositionWithCaret=a;return}r&&(this.xTooltipPos=r),n&&(this.yTooltipPos=n)},e.prototype.setAnchorBoundaryType=function(t){t===we.UNBOUNDED?this.anchorGap=j.UNBOUNDED_ANCHOR_GAP:this.anchorGap=j.BOUNDED_ANCHOR_GAP},e.prototype.setShowDelay=function(t){this.showDelayMs=t},e.prototype.setHideDelay=function(t){this.hideDelayMs=t},e.prototype.isTooltipMultiline=function(){var t=this.adapter.getTooltipSize();return t.height>j.MIN_HEIGHT&&t.width>=j.MAX_WIDTH},e.prototype.positionPlainTooltip=function(){var t=this.calculateTooltipStyles(this.anchorRect),r=t.top,n=t.yTransformOrigin,a=t.left,s=t.xTransformOrigin,o=Or?Yt(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(o+"-origin",s+" "+n),this.adapter.setStyleProperty("top",r+"px"),this.adapter.setStyleProperty("left",a+"px")},e.prototype.positionRichTooltip=function(){var t,r,n,a,s=this.adapter.getComputedStyleProperty("width");this.adapter.setStyleProperty("width",s);var o=this.hasCaret?this.calculateTooltipWithCaretStyles(this.anchorRect):this.calculateTooltipStyles(this.anchorRect),l=o.top,d=o.yTransformOrigin,u=o.left,h=o.xTransformOrigin,E=Or?Yt(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(E+"-origin",h+" "+d);var f=u-((r=(t=this.parentRect)===null||t===void 0?void 0:t.left)!==null&&r!==void 0?r:0),m=l-((a=(n=this.parentRect)===null||n===void 0?void 0:n.top)!==null&&a!==void 0?a:0);this.adapter.setStyleProperty("top",m+"px"),this.adapter.setStyleProperty("left",f+"px")},e.prototype.calculateTooltipStyles=function(t){if(!t)return{top:0,left:0};var r=this.adapter.getTooltipSize(),n=this.calculateYTooltipDistance(t,r.height),a=this.calculateXTooltipDistance(t,r.width);return{top:n.distance,yTransformOrigin:n.yTransformOrigin,left:a.distance,xTransformOrigin:a.xTransformOrigin}},e.prototype.calculateXTooltipDistance=function(t,r){var n=!this.adapter.isRTL(),a,s,o,l,d;this.richTooltip?(a=n?t.left-r:t.right,s=n?t.right:t.left-r,l=n?C.RIGHT:C.LEFT,d=n?C.LEFT:C.RIGHT):(a=n?t.left:t.right-r,s=n?t.right-r:t.left,o=t.left+(t.width-r)/2,l=n?C.LEFT:C.RIGHT,d=n?C.RIGHT:C.LEFT);var u=this.richTooltip?this.determineValidPositionOptions(a,s):this.determineValidPositionOptions(o,a,s);if(this.xTooltipPos===Ft.START&&u.has(a))return{distance:a,xTransformOrigin:l};if(this.xTooltipPos===Ft.END&&u.has(s))return{distance:s,xTransformOrigin:d};if(this.xTooltipPos===Ft.CENTER&&u.has(o))return{distance:o,xTransformOrigin:C.CENTER};var h=this.richTooltip?[{distance:s,xTransformOrigin:d},{distance:a,xTransformOrigin:l}]:[{distance:o,xTransformOrigin:C.CENTER},{distance:a,xTransformOrigin:l},{distance:s,xTransformOrigin:d}],E=h.find(function(A){var T=A.distance;return u.has(T)});if(E)return E;if(t.left<0)return{distance:this.minViewportTooltipThreshold,xTransformOrigin:C.LEFT};var f=this.adapter.getViewportWidth(),m=f-(r+this.minViewportTooltipThreshold);return{distance:m,xTransformOrigin:C.RIGHT}},e.prototype.determineValidPositionOptions=function(){for(var t,r,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var s=new Set,o=new Set;try{for(var l=L(n),d=l.next();!d.done;d=l.next()){var u=d.value;this.positionHonorsViewportThreshold(u)?s.add(u):this.positionDoesntCollideWithViewport(u)&&o.add(u)}}catch(h){t={error:h}}finally{try{d&&!d.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}return s.size?s:o},e.prototype.positionHonorsViewportThreshold=function(t){var r=this.adapter.getViewportWidth(),n=this.adapter.getTooltipSize().width;return t+n<=r-this.minViewportTooltipThreshold&&t>=this.minViewportTooltipThreshold},e.prototype.positionDoesntCollideWithViewport=function(t){var r=this.adapter.getViewportWidth(),n=this.adapter.getTooltipSize().width;return t+n<=r&&t>=0},e.prototype.calculateYTooltipDistance=function(t,r){var n=t.bottom+this.anchorGap,a=t.top-(this.anchorGap+r),s=this.determineValidYPositionOptions(a,n);return this.yTooltipPos===Xt.ABOVE&&s.has(a)?{distance:a,yTransformOrigin:C.BOTTOM}:this.yTooltipPos===Xt.BELOW&&s.has(n)?{distance:n,yTransformOrigin:C.TOP}:s.has(n)?{distance:n,yTransformOrigin:C.TOP}:s.has(a)?{distance:a,yTransformOrigin:C.BOTTOM}:{distance:n,yTransformOrigin:C.TOP}},e.prototype.determineValidYPositionOptions=function(t,r){var n=new Set,a=new Set;return this.yPositionHonorsViewportThreshold(t)?n.add(t):this.yPositionDoesntCollideWithViewport(t)&&a.add(t),this.yPositionHonorsViewportThreshold(r)?n.add(r):this.yPositionDoesntCollideWithViewport(r)&&a.add(r),n.size?n:a},e.prototype.yPositionHonorsViewportThreshold=function(t){var r=this.adapter.getViewportHeight(),n=this.adapter.getTooltipSize().height;return t+n+this.minViewportTooltipThreshold<=r&&t>=this.minViewportTooltipThreshold},e.prototype.yPositionDoesntCollideWithViewport=function(t){var r=this.adapter.getViewportHeight(),n=this.adapter.getTooltipSize().height;return t+n<=r&&t>=0},e.prototype.calculateTooltipWithCaretStyles=function(t){this.adapter.clearTooltipCaretStyles();var r=this.adapter.getTooltipCaretBoundingRect();if(!t||!r)return{position:y.DETECTED,top:0,left:0};var n=r.width/j.ANIMATION_SCALE,a=r.height/j.ANIMATION_SCALE/2,s=this.adapter.getTooltipSize(),o=this.calculateYWithCaretDistanceOptions(t,s.height,{caretWidth:n,caretHeight:a}),l=this.calculateXWithCaretDistanceOptions(t,s.width,{caretWidth:n,caretHeight:a}),d=this.validateTooltipWithCaretDistances(o,l);d.size<1&&(d=this.generateBackupPositionOption(t,s,{caretWidth:n,caretHeight:a}));var u=this.determineTooltipWithCaretDistance(d),h=u.position,E=u.xDistance,f=u.yDistance,m=this.setCaretPositionStyles(h,{caretWidth:n,caretHeight:a}),A=m.yTransformOrigin,T=m.xTransformOrigin;return{yTransformOrigin:A,xTransformOrigin:T,top:f,left:E}},e.prototype.calculateXWithCaretDistanceOptions=function(t,r,n){var a=n.caretWidth,s=n.caretHeight,o=!this.adapter.isRTL(),l=t.left+t.width/2,d=t.left-(r+this.anchorGap+s),u=t.right+this.anchorGap+s,h=o?d:u,E=o?u:d,f=l-(j.CARET_INDENTATION+a/2),m=l-(r-j.CARET_INDENTATION-a/2),A=o?f:m,T=o?m:f,I=l-r/2,D=new Map([[O.START,A],[O.CENTER,I],[O.END,T],[O.SIDE_END,E],[O.SIDE_START,h]]);return D},e.prototype.calculateYWithCaretDistanceOptions=function(t,r,n){var a=n.caretWidth,s=n.caretHeight,o=t.top+t.height/2,l=t.bottom+this.anchorGap+s,d=t.top-(this.anchorGap+r+s),u=o-(j.CARET_INDENTATION+a/2),h=o-r/2,E=o-(r-j.CARET_INDENTATION-a/2),f=new Map([[k.ABOVE,d],[k.BELOW,l],[k.SIDE_TOP,u],[k.SIDE_CENTER,h],[k.SIDE_BOTTOM,E]]);return f},e.prototype.repositionTooltipOnAnchorMove=function(){var t=this.adapter.getAnchorBoundingRect();!t||!this.anchorRect||(t.top!==this.anchorRect.top||t.left!==this.anchorRect.left||t.height!==this.anchorRect.height||t.width!==this.anchorRect.width)&&(this.anchorRect=t,this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip())},e.prototype.validateTooltipWithCaretDistances=function(t,r){var n,a,s,o,l,d,u=new Map,h=new Map,E=new Map([[k.ABOVE,[O.START,O.CENTER,O.END]],[k.BELOW,[O.START,O.CENTER,O.END]],[k.SIDE_TOP,[O.SIDE_START,O.SIDE_END]],[k.SIDE_CENTER,[O.SIDE_START,O.SIDE_END]],[k.SIDE_BOTTOM,[O.SIDE_START,O.SIDE_END]]]);try{for(var f=L(E.keys()),m=f.next();!m.done;m=f.next()){var A=m.value,T=t.get(A);if(this.yPositionHonorsViewportThreshold(T))try{for(var I=(s=void 0,L(E.get(A))),D=I.next();!D.done;D=I.next()){var G=D.value,tt=r.get(G);if(this.positionHonorsViewportThreshold(tt)){var It=this.caretPositionOptionsMapping(G,A);u.set(It,{xDistance:tt,yDistance:T})}}}catch(W){s={error:W}}finally{try{D&&!D.done&&(o=I.return)&&o.call(I)}finally{if(s)throw s.error}}else if(this.yPositionDoesntCollideWithViewport(T))try{for(var N=(l=void 0,L(E.get(A))),K=N.next();!K.done;K=N.next()){var G=K.value,tt=r.get(G);if(this.positionDoesntCollideWithViewport(tt)){var It=this.caretPositionOptionsMapping(G,A);h.set(It,{xDistance:tt,yDistance:T})}}}catch(W){l={error:W}}finally{try{K&&!K.done&&(d=N.return)&&d.call(N)}finally{if(l)throw l.error}}}}catch(W){n={error:W}}finally{try{m&&!m.done&&(a=f.return)&&a.call(f)}finally{if(n)throw n.error}}return u.size?u:h},e.prototype.generateBackupPositionOption=function(t,r,n){var a=!this.adapter.isRTL(),s,o;if(t.left<0)s=this.minViewportTooltipThreshold+n.caretHeight,o=a?O.END:O.START;else{var l=this.adapter.getViewportWidth();s=l-(r.width+this.minViewportTooltipThreshold+n.caretHeight),o=a?O.START:O.END}var d,u;if(t.top<0)d=this.minViewportTooltipThreshold+n.caretHeight,u=k.BELOW;else{var h=this.adapter.getViewportHeight();d=h-(r.height+this.minViewportTooltipThreshold+n.caretHeight),u=k.ABOVE}var E=this.caretPositionOptionsMapping(o,u);return new Map([[E,{xDistance:s,yDistance:d}]])},e.prototype.determineTooltipWithCaretDistance=function(t){if(t.has(this.tooltipPositionWithCaret)){var r=t.get(this.tooltipPositionWithCaret);return{position:this.tooltipPositionWithCaret,xDistance:r.xDistance,yDistance:r.yDistance}}var n=[y.ABOVE_START,y.ABOVE_CENTER,y.ABOVE_END,y.TOP_SIDE_START,y.CENTER_SIDE_START,y.BOTTOM_SIDE_START,y.TOP_SIDE_END,y.CENTER_SIDE_END,y.BOTTOM_SIDE_END,y.BELOW_START,y.BELOW_CENTER,y.BELOW_END],a=n.find(function(o){return t.has(o)}),s=t.get(a);return{position:a,xDistance:s.xDistance,yDistance:s.yDistance}},e.prototype.caretPositionOptionsMapping=function(t,r){switch(r){case k.ABOVE:if(t===O.START)return y.ABOVE_START;if(t===O.CENTER)return y.ABOVE_CENTER;if(t===O.END)return y.ABOVE_END;break;case k.BELOW:if(t===O.START)return y.BELOW_START;if(t===O.CENTER)return y.BELOW_CENTER;if(t===O.END)return y.BELOW_END;break;case k.SIDE_TOP:if(t===O.SIDE_START)return y.TOP_SIDE_START;if(t===O.SIDE_END)return y.TOP_SIDE_END;break;case k.SIDE_CENTER:if(t===O.SIDE_START)return y.CENTER_SIDE_START;if(t===O.SIDE_END)return y.CENTER_SIDE_END;break;case k.SIDE_BOTTOM:if(t===O.SIDE_START)return y.BOTTOM_SIDE_START;if(t===O.SIDE_END)return y.BOTTOM_SIDE_END;break}throw new Error("MDCTooltipFoundation: Invalid caret position of "+t+", "+r)},e.prototype.setCaretPositionStyles=function(t,r){var n,a,s=this.calculateCaretPositionOnTooltip(t,r);if(!s)return{yTransformOrigin:0,xTransformOrigin:0};this.adapter.clearTooltipCaretStyles(),this.adapter.setTooltipCaretStyle(s.yAlignment,s.yAxisPx),this.adapter.setTooltipCaretStyle(s.xAlignment,s.xAxisPx);var o=s.skew*(Math.PI/180),l=Math.cos(o);this.adapter.setTooltipCaretStyle("transform","rotate("+s.rotation+"deg) skewY("+s.skew+"deg) scaleX("+l+")"),this.adapter.setTooltipCaretStyle("transform-origin",s.xAlignment+" "+s.yAlignment);try{for(var d=L(s.caretCorners),u=d.next();!u.done;u=d.next()){var h=u.value;this.adapter.setTooltipCaretStyle(h,"0")}}catch(E){n={error:E}}finally{try{u&&!u.done&&(a=d.return)&&a.call(d)}finally{if(n)throw n.error}}return{yTransformOrigin:s.yTransformOrigin,xTransformOrigin:s.xTransformOrigin}},e.prototype.calculateCaretPositionOnTooltip=function(t,r){var n=!this.adapter.isRTL(),a=this.adapter.getComputedStyleProperty("width"),s=this.adapter.getComputedStyleProperty("height");if(!(!a||!s||!r)){var o="calc(("+a+" - "+r.caretWidth+"px) / 2)",l="calc(("+s+" - "+r.caretWidth+"px) / 2)",d="0",u=j.CARET_INDENTATION+"px",h="calc("+a+" - "+u+")",E="calc("+s+" - "+u+")",f=35,m=Math.abs(90-f),A=["border-bottom-right-radius","border-top-left-radius"],T=["border-bottom-left-radius","border-top-right-radius"],I=20;switch(t){case y.BELOW_CENTER:return{yAlignment:C.TOP,xAlignment:C.LEFT,yAxisPx:d,xAxisPx:o,rotation:-1*f,skew:-1*I,xTransformOrigin:o,yTransformOrigin:d,caretCorners:A};case y.BELOW_END:return{yAlignment:C.TOP,xAlignment:n?C.RIGHT:C.LEFT,yAxisPx:d,xAxisPx:u,rotation:n?f:-1*f,skew:n?I:-1*I,xTransformOrigin:n?h:u,yTransformOrigin:d,caretCorners:n?T:A};case y.BELOW_START:return{yAlignment:C.TOP,xAlignment:n?C.LEFT:C.RIGHT,yAxisPx:d,xAxisPx:u,rotation:n?-1*f:f,skew:n?-1*I:I,xTransformOrigin:n?u:h,yTransformOrigin:d,caretCorners:n?A:T};case y.TOP_SIDE_END:return{yAlignment:C.TOP,xAlignment:n?C.LEFT:C.RIGHT,yAxisPx:u,xAxisPx:d,rotation:n?m:-1*m,skew:n?-1*I:I,xTransformOrigin:n?d:a,yTransformOrigin:u,caretCorners:n?A:T};case y.CENTER_SIDE_END:return{yAlignment:C.TOP,xAlignment:n?C.LEFT:C.RIGHT,yAxisPx:l,xAxisPx:d,rotation:n?m:-1*m,skew:n?-1*I:I,xTransformOrigin:n?d:a,yTransformOrigin:l,caretCorners:n?A:T};case y.BOTTOM_SIDE_END:return{yAlignment:C.BOTTOM,xAlignment:n?C.LEFT:C.RIGHT,yAxisPx:u,xAxisPx:d,rotation:n?-1*m:m,skew:n?I:-1*I,xTransformOrigin:n?d:a,yTransformOrigin:E,caretCorners:n?T:A};case y.TOP_SIDE_START:return{yAlignment:C.TOP,xAlignment:n?C.RIGHT:C.LEFT,yAxisPx:u,xAxisPx:d,rotation:n?-1*m:m,skew:n?I:-1*I,xTransformOrigin:n?a:d,yTransformOrigin:u,caretCorners:n?T:A};case y.CENTER_SIDE_START:return{yAlignment:C.TOP,xAlignment:n?C.RIGHT:C.LEFT,yAxisPx:l,xAxisPx:d,rotation:n?-1*m:m,skew:n?I:-1*I,xTransformOrigin:n?a:d,yTransformOrigin:l,caretCorners:n?T:A};case y.BOTTOM_SIDE_START:return{yAlignment:C.BOTTOM,xAlignment:n?C.RIGHT:C.LEFT,yAxisPx:u,xAxisPx:d,rotation:n?m:-1*m,skew:n?-1*I:I,xTransformOrigin:n?a:d,yTransformOrigin:E,caretCorners:n?A:T};case y.ABOVE_CENTER:return{yAlignment:C.BOTTOM,xAlignment:C.LEFT,yAxisPx:d,xAxisPx:o,rotation:f,skew:I,xTransformOrigin:o,yTransformOrigin:s,caretCorners:T};case y.ABOVE_END:return{yAlignment:C.BOTTOM,xAlignment:n?C.RIGHT:C.LEFT,yAxisPx:d,xAxisPx:u,rotation:n?-1*f:f,skew:n?-1*I:I,xTransformOrigin:n?h:u,yTransformOrigin:s,caretCorners:n?A:T};default:case y.ABOVE_START:return{yAlignment:C.BOTTOM,xAlignment:n?C.LEFT:C.RIGHT,yAxisPx:d,xAxisPx:u,rotation:n?f:-1*f,skew:n?I:-1*I,xTransformOrigin:n?u:h,yTransformOrigin:s,caretCorners:n?T:A}}}},e.prototype.clearShowTimeout=function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)},e.prototype.clearHideTimeout=function(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)},e.prototype.attachScrollHandler=function(t){var r=this;this.addAncestorScrollEventListeners.push(function(){t("scroll",r.windowScrollHandler)})},e.prototype.removeScrollHandler=function(t){var r=this;this.removeAncestorScrollEventListeners.push(function(){t("scroll",r.windowScrollHandler)})},e.prototype.destroy=function(){var t,r;this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null),this.clearHideTimeout(),this.clearShowTimeout(),this.adapter.removeClass(Fe),this.adapter.removeClass(fe),this.adapter.removeClass(Be),this.adapter.removeClass(jt),this.adapter.removeClass(pe),this.richTooltip&&this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler);try{for(var n=L(this.removeAncestorScrollEventListeners),a=n.next();!a.done;a=n.next()){var s=a.value;s()}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}this.animFrame.cancelAll()},e}(R);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yt={INDETERMINATE_CLASS:"mdc-circular-progress--indeterminate",CLOSED_CLASS:"mdc-circular-progress--closed"},At={ARIA_HIDDEN:"aria-hidden",ARIA_VALUENOW:"aria-valuenow",DETERMINATE_CIRCLE_SELECTOR:".mdc-circular-progress__determinate-circle",RADIUS:"r",STROKE_DASHOFFSET:"stroke-dashoffset"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ps=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return At},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getDeterminateCircleAttribute:function(){return null},hasClass:function(){return!1},removeClass:function(){},removeAttribute:function(){},setAttribute:function(){},setDeterminateCircleAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.closed=this.adapter.hasClass(yt.CLOSED_CLASS),this.determinate=!this.adapter.hasClass(yt.INDETERMINATE_CLASS),this.progress=0,this.determinate&&this.adapter.setAttribute(At.ARIA_VALUENOW,this.progress.toString()),this.radius=Number(this.adapter.getDeterminateCircleAttribute(At.RADIUS))},e.prototype.setDeterminate=function(t){this.determinate=t,this.determinate?(this.adapter.removeClass(yt.INDETERMINATE_CLASS),this.setProgress(this.progress)):(this.adapter.addClass(yt.INDETERMINATE_CLASS),this.adapter.removeAttribute(At.ARIA_VALUENOW))},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){if(this.progress=t,this.determinate){var r=(1-this.progress)*(2*Math.PI*this.radius);this.adapter.setDeterminateCircleAttribute(At.STROKE_DASHOFFSET,""+r),this.adapter.setAttribute(At.ARIA_VALUENOW,this.progress.toString())}},e.prototype.getProgress=function(){return this.progress},e.prototype.open=function(){this.closed=!1,this.adapter.removeClass(yt.CLOSED_CLASS),this.adapter.removeAttribute(At.ARIA_HIDDEN)},e.prototype.close=function(){this.closed=!0,this.adapter.addClass(yt.CLOSED_CLASS),this.adapter.setAttribute(At.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.closed},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zt={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},Q={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},br={ANIM_END_LATCH_MS:250};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Es=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.currentCheckState=Q.TRANSITION_STATE_INIT,r.currentAnimationClass="",r.animEndLatchTimer=0,r.enableAnimationEndHandler=!1,r}return Object.defineProperty(e,"cssClasses",{get:function(){return zt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return br},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(zt.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},e.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(zt.DISABLED):this.adapter.removeClass(zt.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;!this.enableAnimationEndHandler||(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){t.adapter.removeClass(t.currentAnimationClass),t.enableAnimationEndHandler=!1},br.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState()},e.prototype.transitionCheckState=function(){if(!!this.adapter.hasNativeControl()){var t=this.currentCheckState,r=this.determineCheckState();if(t!==r){this.updateAriaChecked();var n=Q.TRANSITION_STATE_UNCHECKED,a=zt.SELECTED;r===n?this.adapter.removeClass(a):this.adapter.addClass(a),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(t,r),this.currentCheckState=r,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},e.prototype.determineCheckState=function(){var t=Q.TRANSITION_STATE_INDETERMINATE,r=Q.TRANSITION_STATE_CHECKED,n=Q.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?t:this.adapter.isChecked()?r:n},e.prototype.getTransitionAnimationClass=function(t,r){var n=Q.TRANSITION_STATE_INIT,a=Q.TRANSITION_STATE_CHECKED,s=Q.TRANSITION_STATE_UNCHECKED,o=e.cssClasses,l=o.ANIM_UNCHECKED_CHECKED,d=o.ANIM_UNCHECKED_INDETERMINATE,u=o.ANIM_CHECKED_UNCHECKED,h=o.ANIM_CHECKED_INDETERMINATE,E=o.ANIM_INDETERMINATE_CHECKED,f=o.ANIM_INDETERMINATE_UNCHECKED;switch(t){case n:return r===s?"":r===a?E:f;case s:return r===a?l:d;case a:return r===s?u:h;default:return r===a?E:f}},e.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(Q.ARIA_CHECKED_ATTR,Q.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(Q.ARIA_CHECKED_ATTR)},e}(R);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Xi={ROOT:"mdc-form-field"},Yi={LABEL_SELECTOR:".mdc-form-field > label"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ms=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.click=function(){r.handleClick()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Xi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Yi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){t.adapter.deactivateInputRipple()})},e}(R);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ji={SINGLE_SELECT:"mdc-segmented-button--single-select"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var As=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},getSegments:function(){return[]},selectSegment:function(){},unselectSegment:function(){},notifySelectedChange:function(){}}},enumerable:!1,configurable:!0}),e.prototype.selectSegment=function(t){this.adapter.selectSegment(t)},e.prototype.unselectSegment=function(t){this.adapter.unselectSegment(t)},e.prototype.getSelectedSegments=function(){return this.adapter.getSegments().filter(function(t){return t.selected})},e.prototype.isSegmentSelected=function(t){return this.adapter.getSegments().some(function(r){return(r.index===t||r.segmentId===t)&&r.selected})},e.prototype.isSingleSelect=function(){return this.adapter.hasClass(ji.SINGLE_SELECT)},e.prototype.handleSelected=function(t){this.isSingleSelect()&&this.unselectPrevSelected(t.index),this.adapter.notifySelectedChange(t)},e.prototype.unselectPrevSelected=function(t){var r,n;try{for(var a=L(this.getSelectedSegments()),s=a.next();!s.done;s=a.next()){var o=s.value;o.index!==t&&this.unselectSegment(o.index)}}catch(l){r={error:l}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}},e}(R);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Lr={TRUE:"true",FALSE:"false"},ke={ARIA_CHECKED:"aria-checked",ARIA_PRESSED:"aria-pressed",DATA_SEGMENT_ID:"data-segment-id"},Ue={SELECTED:"mdc-segmented-button__segment--selected"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zi={bottom:0,height:0,left:0,right:0,top:0,width:0},Ts=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{isSingleSelect:function(){return!1},getAttr:function(){return""},setAttr:function(){},addClass:function(){},removeClass:function(){},hasClass:function(){return!1},notifySelectedChange:function(){},getRootBoundingClientRect:function(){return zi}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(Ue.SELECTED)},e.prototype.setSelected=function(){this.adapter.addClass(Ue.SELECTED),this.setAriaAttr(Lr.TRUE)},e.prototype.setUnselected=function(){this.adapter.removeClass(Ue.SELECTED),this.setAriaAttr(Lr.FALSE)},e.prototype.getSegmentId=function(){var t;return(t=this.adapter.getAttr(ke.DATA_SEGMENT_ID))!==null&&t!==void 0?t:void 0},e.prototype.handleClick=function(){this.adapter.isSingleSelect()?this.setSelected():this.toggleSelection(),this.adapter.notifySelectedChange(this.isSelected())},e.prototype.getDimensions=function(){return this.adapter.getRootBoundingClientRect()},e.prototype.toggleSelection=function(){this.isSelected()?this.setUnselected():this.setSelected()},e.prototype.setAriaAttr=function(t){this.adapter.isSingleSelect()?this.adapter.setAttr(ke.ARIA_CHECKED,t):this.adapter.setAttr(ke.ARIA_PRESSED,t)},e}(R);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var q={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},et={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},$t={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Cs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.observer=null,r}return Object.defineProperty(e,"cssClasses",{get:function(){return q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(q.INDETERMINATE_CLASS),this.adapter.addClass(q.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(r){var n,a;if(!t.determinate)try{for(var s=L(r),o=s.next();!o.done;o=s.next()){var l=o.value;l.contentRect&&t.calculateAndSetDimensions(l.contentRect.width)}}catch(d){n={error:d}}finally{try{o&&!o.done&&(a=s.return)&&a.call(s)}finally{if(n)throw n.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(q.INDETERMINATE_CLASS),this.adapter.setAttribute(et.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(et.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(et.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(q.INDETERMINATE_CLASS),this.adapter.removeAttribute(et.ARIA_VALUENOW),this.adapter.removeAttribute(et.ARIA_VALUEMAX),this.adapter.removeAttribute(et.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(et.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(q.CLOSED_CLASS),this.adapter.removeClass(q.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(et.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(q.CLOSED_CLASS),this.adapter.setAttribute(et.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(q.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(q.CLOSED_CLASS)&&this.adapter.addClass(q.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){i.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(q.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(q.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var r="scaleX("+t+")",n=typeof window!="undefined"?Yt(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(n,r)},e.prototype.setBufferBarProgress=function(t){var r=t*100+"%";this.adapter.setBufferBarStyle(et.FLEX_BASIS,r)},e.prototype.calculateAndSetDimensions=function(t){var r=t*$t.PRIMARY_HALF,n=t*$t.PRIMARY_FULL,a=t*$t.SECONDARY_QUARTER,s=t*$t.SECONDARY_HALF,o=t*$t.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",r+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-o+"px"),this.restartAnimation()},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $i={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},qi={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},qt={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},x;(function(i){i[i.BOTTOM=1]="BOTTOM",i[i.CENTER=2]="CENTER",i[i.RIGHT=4]="RIGHT",i[i.FLIP_RTL=8]="FLIP_RTL"})(x||(x={}));var Bt;(function(i){i[i.TOP_LEFT=0]="TOP_LEFT",i[i.TOP_RIGHT=4]="TOP_RIGHT",i[i.BOTTOM_LEFT=1]="BOTTOM_LEFT",i[i.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",i[i.TOP_START=8]="TOP_START",i[i.TOP_END=12]="TOP_END",i[i.BOTTOM_START=9]="BOTTOM_START",i[i.BOTTOM_END=13]="BOTTOM_END"})(Bt||(Bt={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zi=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.isSurfaceOpen=!1,r.isQuickOpen=!1,r.isHoistedElement=!1,r.isFixedPosition=!1,r.isHorizontallyCenteredOnViewport=!1,r.maxHeight=0,r.openAnimationEndTimerId=0,r.closeAnimationEndTimerId=0,r.animationRequestId=0,r.anchorCorner=Bt.TOP_START,r.originCorner=Bt.TOP_START,r.anchorMargin={top:0,right:0,bottom:0,left:0},r.position={x:0,y:0},r}return Object.defineProperty(e,"cssClasses",{get:function(){return $i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return qi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return qt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return Bt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,r=t.ROOT,n=t.OPEN;if(!this.adapter.hasClass(r))throw new Error(r+" class required in root element.");this.adapter.hasClass(n)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^x.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,r){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(r)?r:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},qt.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var r=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){r.adapter.removeClass(e.cssClasses.OPEN),r.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),r.closeAnimationEndTimerId=setTimeout(function(){r.closeAnimationEndTimerId=0,r.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),r.adapter.notifyClose()},qt.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var r=t.target;this.adapter.isElementInContainer(r)||this.close()},e.prototype.handleKeydown=function(t){var r=t.keyCode,n=t.key,a=n==="Escape"||r===27;a&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var r=this.getoriginCorner(),n=this.getMenuSurfaceMaxHeight(r),a=this.hasBit(r,x.BOTTOM)?"bottom":"top",s=this.hasBit(r,x.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(r),l=this.getVerticalOriginOffset(r),d=this.measurements,u=d.anchorSize,h=d.surfaceSize,E=(t={},t[s]=o,t[a]=l,t);u.width/h.width>qt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(E),this.adapter.setTransformOrigin(s+" "+a),this.adapter.setPosition(E),this.adapter.setMaxHeight(n?n+"px":""),this.hasBit(r,x.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),r=this.adapter.getBodyDimensions(),n=this.adapter.getWindowDimensions(),a=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:r,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:a}},e.prototype.getoriginCorner=function(){var t=this.originCorner,r=this.measurements,n=r.viewportDistance,a=r.anchorSize,s=r.surfaceSize,o=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,x.BOTTOM),d,u;l?(d=n.top-o+this.anchorMargin.bottom,u=n.bottom-o-this.anchorMargin.bottom):(d=n.top-o+this.anchorMargin.top,u=n.bottom-o+a.height-this.anchorMargin.top);var h=u-s.height>0;!h&&d>u&&(t=this.setBit(t,x.BOTTOM));var E=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,x.FLIP_RTL),m=this.hasBit(this.anchorCorner,x.RIGHT)||this.hasBit(t,x.RIGHT),A=!1;E&&f?A=!m:A=m;var T,I;A?(T=n.left+a.width+this.anchorMargin.right,I=n.right-this.anchorMargin.right):(T=n.left+this.anchorMargin.left,I=n.right+a.width-this.anchorMargin.left);var D=T-s.width>0,G=I-s.width>0,tt=this.hasBit(t,x.FLIP_RTL)&&this.hasBit(t,x.RIGHT);return G&&tt&&E||!D&&tt?t=this.unsetBit(t,x.RIGHT):(D&&A&&E||D&&!A&&m||!G&&T>=I)&&(t=this.setBit(t,x.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var r=this.measurements.viewportDistance,n=0,a=this.hasBit(t,x.BOTTOM),s=this.hasBit(this.anchorCorner,x.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return a?(n=r.top+this.anchorMargin.top-o,s||(n+=this.measurements.anchorSize.height)):(n=r.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,s&&(n-=this.measurements.anchorSize.height)),n},e.prototype.getHorizontalOriginOffset=function(t){var r=this.measurements.anchorSize,n=this.hasBit(t,x.RIGHT),a=this.hasBit(this.anchorCorner,x.RIGHT);if(n){var s=a?r.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?s-(this.measurements.viewportSize.width-this.measurements.bodySize.width):s}return a?r.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var r=this.measurements.anchorSize,n=this.hasBit(t,x.BOTTOM),a=this.hasBit(this.anchorCorner,x.BOTTOM),s=0;return n?s=a?r.height-this.anchorMargin.top:-this.anchorMargin.bottom:s=a?r.height+this.anchorMargin.bottom:this.anchorMargin.top,s},e.prototype.adjustPositionForHoistedElement=function(t){var r,n,a=this.measurements,s=a.windowScroll,o=a.viewportDistance,l=a.surfaceSize,d=a.viewportSize,u=Object.keys(t);try{for(var h=L(u),E=h.next();!E.done;E=h.next()){var f=E.value,m=t[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){t[f]=(d.width-l.width)/2;continue}m+=o[f],this.isFixedPosition||(f==="top"?m+=s.y:f==="bottom"?m-=s.y:f==="left"?m+=s.x:m-=s.x),t[f]=m}}catch(A){r={error:A}}finally{try{E&&!E.done&&(n=h.return)&&n.call(h)}finally{if(r)throw r.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,r=this.adapter.isFocused(),n=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(r||n)&&setTimeout(function(){t.adapter.restoreFocus()},qt.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,r){return Boolean(t&r)},e.prototype.setBit=function(t,r){return t|r},e.prototype.unsetBit=function(t,r){return t^r},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qi={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Is=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.shakeAnimationEndHandler=function(){r.handleShakeAnimationEnd()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Qi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var r=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.float=function(t){var r=e.cssClasses,n=r.LABEL_FLOAT_ABOVE,a=r.LABEL_SHAKE;t?this.adapter.addClass(n):(this.adapter.removeClass(n),this.adapter.removeClass(a))},e.prototype.setRequired=function(t){var r=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rt={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var gs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.transitionEndHandler=function(n){r.handleTransitionEnd(n)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Rt.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Rt.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Rt.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var r=this.adapter.hasClass(Rt.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&r&&(this.adapter.removeClass(Rt.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Rt.LINE_RIPPLE_DEACTIVATING))},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ji={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Dr={NOTCH_ELEMENT_PADDING:8},tn={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vs=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Ji},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return tn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Dr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var r=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Dr.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(r)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(R);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nr={ROOT:"mdc-text-field-character-counter"},en={ROOT_SELECTOR:"."+Nr.ROOT};/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ss=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Nr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return en},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,r){t=Math.min(t,r),this.adapter.setContent(t+" / "+r)},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ke={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},rn={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Mr={LABEL_SCALE:.75},nn=["pattern","min","max","required","step","minlength","maxlength"],an=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Hr=["mousedown","touchstart"],xr=["click","keydown"],_s=function(i){v(e,i);function e(t,r){r===void 0&&(r={});var n=i.call(this,p(p({},e.defaultAdapter),t))||this;return n.isFocused=!1,n.receivedUserInput=!1,n.valid=!0,n.useNativeValidation=!0,n.validateOnValueChange=!0,n.helperText=r.helperText,n.characterCounter=r.characterCounter,n.leadingIcon=r.leadingIcon,n.trailingIcon=r.trailingIcon,n.inputFocusHandler=function(){n.activateFocus()},n.inputBlurHandler=function(){n.deactivateFocus()},n.inputInputHandler=function(){n.handleInput()},n.setPointerXOffset=function(a){n.setTransformOrigin(a)},n.textFieldInteractionHandler=function(){n.handleTextFieldInteraction()},n.validationAttributeChangeHandler=function(a){n.handleValidationAttributeChange(a)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return rn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ke},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Mr},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return an.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,r,n,a;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var s=L(Hr),o=s.next();!o.done;o=s.next()){var l=o.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){t={error:h}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}try{for(var d=L(xr),u=d.next();!u.done;u=d.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){n={error:h}}finally{try{u&&!u.done&&(a=d.return)&&a.call(d)}finally{if(n)throw n.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,r,n,a;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var s=L(Hr),o=s.next();!o.done;o=s.next()){var l=o.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){t={error:h}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}try{for(var d=L(xr),u=d.next();!u.done;u=d.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){n={error:h}}finally{try{u&&!u.done&&(a=d.return)&&a.call(d)}finally{if(n)throw n.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var r=this;t.some(function(n){return nn.indexOf(n)>-1?(r.styleValidity(!0),r.adapter.setLabelRequired(r.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var r=this.adapter.getLabelWidth()*Mr.LABEL_SCALE;this.adapter.notchOutline(r)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var r=t.touches,n=r?r[0]:t,a=n.target.getBoundingClientRect(),s=n.clientX-a.left;this.adapter.setLineRippleTransformOrigin(s)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var r=this.isValid();this.styleValidity(r)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var r=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(r)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(!!this.characterCounter){var r=this.getNativeInput().maxLength;if(r===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,r)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var r=e.cssClasses.INVALID;if(t?this.adapter.removeClass(r):this.adapter.addClass(r),this.helperText){this.helperText.setValidity(t);var n=this.helperText.isValidation();if(!n)return;var a=this.helperText.isVisible(),s=this.helperText.getId();a&&s?this.adapter.setInputAttr(Ke.ARIA_DESCRIBEDBY,s):this.adapter.removeInputAttr(Ke.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var r=e.cssClasses.FOCUSED;t?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.styleDisabled=function(t){var r=e.cssClasses,n=r.DISABLED,a=r.INVALID;t?(this.adapter.addClass(n),this.adapter.removeClass(a)):this.adapter.removeClass(n),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var r=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var it={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},ut={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+it.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ys=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(ut.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(it.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(it.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(it.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(it.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(it.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(it.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(ut.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var r=this.adapter.hasClass(it.HELPER_TEXT_PERSISTENT),n=this.adapter.hasClass(it.HELPER_TEXT_VALIDATION_MSG),a=n&&!t;a?(this.showToScreenReader(),this.adapter.getAttr(ut.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(ut.ROLE,"alert")):this.adapter.removeAttr(ut.ROLE),!r&&!a&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(ut.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(ut.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(ut.ROLE,"alert")})},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var wr={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},sn={ROOT:"mdc-text-field__icon"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pr=["click","keydown"],Rs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.savedTabIndex=null,r.interactionHandler=function(n){r.handleInteraction(n)},r}return Object.defineProperty(e,"strings",{get:function(){return wr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,r;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var n=L(Pr),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.registerInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,r;try{for(var n=L(Pr),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){!this.savedTabIndex||(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",wr.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var r=t.key==="Enter"||t.keyCode===13;(t.type==="click"||r)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nt;(function(i){i.LEFT="left",i.RIGHT="right"})(nt||(nt={}));var ct;(function(i){i.PRIMARY="primary",i.TRAILING="trailing",i.NONE="none"})(ct||(ct={}));var S={ADDED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-added-announcement",ARIA_CHECKED:"aria-checked",ARROW_DOWN_KEY:"ArrowDown",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",BACKSPACE_KEY:"Backspace",CHECKMARK_SELECTOR:".mdc-chip__checkmark",DELETE_KEY:"Delete",END_KEY:"End",ENTER_KEY:"Enter",ENTRY_ANIMATION_NAME:"mdc-chip-entry",HOME_KEY:"Home",IE_ARROW_DOWN_KEY:"Down",IE_ARROW_LEFT_KEY:"Left",IE_ARROW_RIGHT_KEY:"Right",IE_ARROW_UP_KEY:"Up",IE_DELETE_KEY:"Del",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",NAVIGATION_EVENT:"MDCChip:navigation",PRIMARY_ACTION_SELECTOR:".mdc-chip__primary-action",REMOVED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-removed-announcement",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",SPACEBAR_KEY:" ",TAB_INDEX:"tabindex",TRAILING_ACTION_SELECTOR:".mdc-chip-trailing-action",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},w={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",DELETABLE:"mdc-chip--deletable",EDITABLE:"mdc-chip--editable",EDITING:"mdc-chip--editing",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",PRIMARY_ACTION:"mdc-chip__primary-action",PRIMARY_ACTION_FOCUSED:"mdc-chip--primary-action-focused",SELECTED:"mdc-chip--selected",TEXT:"mdc-chip__text",TRAILING_ACTION:"mdc-chip__trailing-action",TRAILING_ICON:"mdc-chip__icon--trailing"},J=new Set;J.add(S.ARROW_LEFT_KEY);J.add(S.ARROW_RIGHT_KEY);J.add(S.ARROW_DOWN_KEY);J.add(S.ARROW_UP_KEY);J.add(S.END_KEY);J.add(S.HOME_KEY);J.add(S.IE_ARROW_LEFT_KEY);J.add(S.IE_ARROW_RIGHT_KEY);J.add(S.IE_ARROW_DOWN_KEY);J.add(S.IE_ARROW_UP_KEY);var Tt=new Set;Tt.add(S.ARROW_UP_KEY);Tt.add(S.ARROW_DOWN_KEY);Tt.add(S.HOME_KEY);Tt.add(S.END_KEY);Tt.add(S.IE_ARROW_UP_KEY);Tt.add(S.IE_ARROW_DOWN_KEY);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Fr={bottom:0,height:0,left:0,right:0,top:0,width:0},Vt;(function(i){i[i.SHOULD_FOCUS=0]="SHOULD_FOCUS",i[i.SHOULD_NOT_FOCUS=1]="SHOULD_NOT_FOCUS"})(Vt||(Vt={}));var Os=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.shouldRemoveOnTrailingIconClick=!0,r.shouldFocusPrimaryActionOnClick=!0,r}return Object.defineProperty(e,"strings",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},focusPrimaryAction:function(){},focusTrailingAction:function(){},getAttribute:function(){return null},getCheckmarkBoundingClientRect:function(){return Fr},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return Fr},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},isRTL:function(){return!1},isTrailingActionNavigable:function(){return!1},notifyEditFinish:function(){},notifyEditStart:function(){},notifyInteraction:function(){},notifyNavigation:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},removeTrailingActionFocus:function(){},setPrimaryActionAttr:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(w.SELECTED)},e.prototype.isEditable=function(){return this.adapter.hasClass(w.EDITABLE)},e.prototype.isEditing=function(){return this.adapter.hasClass(w.EDITING)},e.prototype.setSelected=function(t){this.setSelectedImpl(t),this.notifySelection(t)},e.prototype.setSelectedFromChipSet=function(t,r){this.setSelectedImpl(t),r&&this.notifyIgnoredSelection(t)},e.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick},e.prototype.setShouldRemoveOnTrailingIconClick=function(t){this.shouldRemoveOnTrailingIconClick=t},e.prototype.setShouldFocusPrimaryActionOnClick=function(t){this.shouldFocusPrimaryActionOnClick=t},e.prototype.getDimensions=function(){var t=this,r=function(){return t.adapter.getRootBoundingClientRect()},n=function(){return t.adapter.getCheckmarkBoundingClientRect()};if(!this.adapter.hasLeadingIcon()){var a=n();if(a){var s=r();return{bottom:s.bottom,height:s.height,left:s.left,right:s.right,top:s.top,width:s.width+a.height}}}return r()},e.prototype.beginExit=function(){this.adapter.addClass(w.CHIP_EXIT)},e.prototype.handleClick=function(){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior())},e.prototype.handleDoubleClick=function(){this.isEditable()&&this.startEditing()},e.prototype.handleTransitionEnd=function(t){var r=this,n=this.adapter.eventTargetHasClass(t.target,w.CHIP_EXIT),a=t.propertyName==="width",s=t.propertyName==="opacity";if(n&&s){var o=this.adapter.getComputedStyleValue("width");requestAnimationFrame(function(){r.adapter.setStyleProperty("width",o),r.adapter.setStyleProperty("padding","0"),r.adapter.setStyleProperty("margin","0"),requestAnimationFrame(function(){r.adapter.setStyleProperty("width","0")})});return}if(n&&a){this.removeFocus();var l=this.adapter.getAttribute(S.REMOVED_ANNOUNCEMENT_ATTRIBUTE);this.adapter.notifyRemoval(l)}if(!!s){var d=this.adapter.eventTargetHasClass(t.target,w.LEADING_ICON)&&this.adapter.hasClass(w.SELECTED),u=this.adapter.eventTargetHasClass(t.target,w.CHECKMARK)&&!this.adapter.hasClass(w.SELECTED);if(d){this.adapter.addClassToLeadingIcon(w.HIDDEN_LEADING_ICON);return}if(u){this.adapter.removeClassFromLeadingIcon(w.HIDDEN_LEADING_ICON);return}}},e.prototype.handleFocusIn=function(t){!this.eventFromPrimaryAction(t)||this.adapter.addClass(w.PRIMARY_ACTION_FOCUSED)},e.prototype.handleFocusOut=function(t){!this.eventFromPrimaryAction(t)||(this.isEditing()&&this.finishEditing(),this.adapter.removeClass(w.PRIMARY_ACTION_FOCUSED))},e.prototype.handleTrailingActionInteraction=function(){this.adapter.notifyTrailingIconInteraction(),this.removeChip()},e.prototype.handleKeydown=function(t){if(this.isEditing()){this.shouldFinishEditing(t)&&(t.preventDefault(),this.finishEditing());return}if(this.isEditable()&&this.shouldStartEditing(t)&&(t.preventDefault(),this.startEditing()),this.shouldNotifyInteraction(t)){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior());return}if(this.isDeleteAction(t)){t.preventDefault(),this.removeChip();return}!J.has(t.key)||(t.preventDefault(),this.focusNextAction(t.key,ct.PRIMARY))},e.prototype.handleTrailingActionNavigation=function(t){this.focusNextAction(t.detail.key,ct.TRAILING)},e.prototype.removeFocus=function(){this.adapter.setPrimaryActionAttr(S.TAB_INDEX,"-1"),this.adapter.removeTrailingActionFocus()},e.prototype.focusPrimaryAction=function(){this.setPrimaryActionFocusable(Vt.SHOULD_FOCUS)},e.prototype.focusTrailingAction=function(){var t=this.adapter.isTrailingActionNavigable();if(t){this.adapter.setPrimaryActionAttr(S.TAB_INDEX,"-1"),this.adapter.focusTrailingAction();return}this.focusPrimaryAction()},e.prototype.setPrimaryActionFocusable=function(t){this.adapter.setPrimaryActionAttr(S.TAB_INDEX,"0"),t===Vt.SHOULD_FOCUS&&this.adapter.focusPrimaryAction(),this.adapter.removeTrailingActionFocus()},e.prototype.getFocusBehavior=function(){return this.shouldFocusPrimaryActionOnClick?Vt.SHOULD_FOCUS:Vt.SHOULD_NOT_FOCUS},e.prototype.focusNextAction=function(t,r){var n=this.adapter.isTrailingActionNavigable(),a=this.getDirection(t);if(Tt.has(t)||!n){this.adapter.notifyNavigation(t,r);return}if(r===ct.PRIMARY&&a===nt.RIGHT){this.focusTrailingAction();return}if(r===ct.TRAILING&&a===nt.LEFT){this.focusPrimaryAction();return}this.adapter.notifyNavigation(t,ct.NONE)},e.prototype.getDirection=function(t){var r=this.adapter.isRTL(),n=t===S.ARROW_LEFT_KEY||t===S.IE_ARROW_LEFT_KEY,a=t===S.ARROW_RIGHT_KEY||t===S.IE_ARROW_RIGHT_KEY;return!r&&n||r&&a?nt.LEFT:nt.RIGHT},e.prototype.removeChip=function(){this.shouldRemoveOnTrailingIconClick&&this.beginExit()},e.prototype.shouldStartEditing=function(t){return this.eventFromPrimaryAction(t)&&t.key===S.ENTER_KEY},e.prototype.shouldFinishEditing=function(t){return t.key===S.ENTER_KEY},e.prototype.shouldNotifyInteraction=function(t){return t.key===S.ENTER_KEY||t.key===S.SPACEBAR_KEY},e.prototype.isDeleteAction=function(t){var r=this.adapter.hasClass(w.DELETABLE);return r&&(t.key===S.BACKSPACE_KEY||t.key===S.DELETE_KEY||t.key===S.IE_DELETE_KEY)},e.prototype.setSelectedImpl=function(t){t?(this.adapter.addClass(w.SELECTED),this.adapter.setPrimaryActionAttr(S.ARIA_CHECKED,"true")):(this.adapter.removeClass(w.SELECTED),this.adapter.setPrimaryActionAttr(S.ARIA_CHECKED,"false"))},e.prototype.notifySelection=function(t){this.adapter.notifySelection(t,!1)},e.prototype.notifyIgnoredSelection=function(t){this.adapter.notifySelection(t,!0)},e.prototype.eventFromPrimaryAction=function(t){return this.adapter.eventTargetHasClass(t.target,w.PRIMARY_ACTION)},e.prototype.startEditing=function(){this.adapter.addClass(w.EDITING),this.adapter.notifyEditStart()},e.prototype.finishEditing=function(){this.adapter.removeClass(w.EDITING),this.adapter.notifyEditFinish()},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var on={CHIP_SELECTOR:".mdc-chip"},Ee={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.selectedChipIds=[],r}return Object.defineProperty(e,"strings",{get:function(){return on},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{announceMessage:function(){},focusChipPrimaryActionAtIndex:function(){},focusChipTrailingActionAtIndex:function(){},getChipListCount:function(){return-1},getIndexOfChipById:function(){return-1},hasClass:function(){return!1},isRTL:function(){return!1},removeChipAtIndex:function(){},removeFocusFromChipAtIndex:function(){},selectChipAtIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedChipIds=function(){return this.selectedChipIds.slice()},e.prototype.select=function(t){this.selectImpl(t,!1)},e.prototype.handleChipInteraction=function(t){var r=t.chipId,n=this.adapter.getIndexOfChipById(r);this.removeFocusFromChipsExcept(n),(this.adapter.hasClass(Ee.CHOICE)||this.adapter.hasClass(Ee.FILTER))&&this.toggleSelect(r)},e.prototype.handleChipSelection=function(t){var r=t.chipId,n=t.selected,a=t.shouldIgnore;if(!a){var s=this.selectedChipIds.indexOf(r)>=0;n&&!s?this.select(r):!n&&s&&this.deselectImpl(r)}},e.prototype.handleChipRemoval=function(t){var r=t.chipId,n=t.removedAnnouncement;n&&this.adapter.announceMessage(n);var a=this.adapter.getIndexOfChipById(r);this.deselectAndNotifyClients(r),this.adapter.removeChipAtIndex(a);var s=this.adapter.getChipListCount()-1;if(!(s<0)){var o=Math.min(a,s);this.removeFocusFromChipsExcept(o),this.adapter.focusChipTrailingActionAtIndex(o)}},e.prototype.handleChipNavigation=function(t){var r=t.chipId,n=t.key,a=t.source,s=this.adapter.getChipListCount()-1,o=this.adapter.getIndexOfChipById(r);if(!(o===-1||!J.has(n))){var l=this.adapter.isRTL(),d=n===S.ARROW_LEFT_KEY||n===S.IE_ARROW_LEFT_KEY,u=n===S.ARROW_RIGHT_KEY||n===S.IE_ARROW_RIGHT_KEY,h=n===S.ARROW_DOWN_KEY||n===S.IE_ARROW_DOWN_KEY,E=!l&&u||l&&d||h,f=n===S.HOME_KEY,m=n===S.END_KEY;E?o++:f?o=0:m?o=s:o--,!(o<0||o>s)&&(this.removeFocusFromChipsExcept(o),this.focusChipAction(o,n,a))}},e.prototype.focusChipAction=function(t,r,n){var a=Tt.has(r);if(a&&n===ct.PRIMARY)return this.adapter.focusChipPrimaryActionAtIndex(t);if(a&&n===ct.TRAILING)return this.adapter.focusChipTrailingActionAtIndex(t);var s=this.getDirection(r);if(s===nt.LEFT)return this.adapter.focusChipTrailingActionAtIndex(t);if(s===nt.RIGHT)return this.adapter.focusChipPrimaryActionAtIndex(t)},e.prototype.getDirection=function(t){var r=this.adapter.isRTL(),n=t===S.ARROW_LEFT_KEY||t===S.IE_ARROW_LEFT_KEY,a=t===S.ARROW_RIGHT_KEY||t===S.IE_ARROW_RIGHT_KEY;return!r&&n||r&&a?nt.LEFT:nt.RIGHT},e.prototype.deselectImpl=function(t,r){r===void 0&&(r=!1);var n=this.selectedChipIds.indexOf(t);if(n>=0){this.selectedChipIds.splice(n,1);var a=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(a,!1,r)}},e.prototype.deselectAndNotifyClients=function(t){this.deselectImpl(t,!0)},e.prototype.toggleSelect=function(t){this.selectedChipIds.indexOf(t)>=0?this.deselectAndNotifyClients(t):this.selectAndNotifyClients(t)},e.prototype.removeFocusFromChipsExcept=function(t){for(var r=this.adapter.getChipListCount(),n=0;n<r;n++)n!==t&&this.adapter.removeFocusFromChipAtIndex(n)},e.prototype.selectAndNotifyClients=function(t){this.selectImpl(t,!0)},e.prototype.selectImpl=function(t,r){if(!(this.selectedChipIds.indexOf(t)>=0)){if(this.adapter.hasClass(Ee.CHOICE)&&this.selectedChipIds.length>0){var n=this.selectedChipIds[0],a=this.adapter.getIndexOfChipById(n);this.selectedChipIds=[],this.adapter.selectChipAtIndex(a,!1,r)}this.selectedChipIds.push(t);var s=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(s,!0,r)}},e}(R);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var We;(function(i){i.POLITE="polite",i.ASSERTIVE="assertive"})(We||(We={}));var dn="data-mdc-dom-announce";function Ls(i,e){ln.getInstance().say(i,e)}var ln=function(){function i(){this.liveRegions=new Map}return i.getInstance=function(){return i.instance||(i.instance=new i),i.instance},i.prototype.say=function(e,t){var r,n,a=(r=t==null?void 0:t.priority)!==null&&r!==void 0?r:We.POLITE,s=(n=t==null?void 0:t.ownerDocument)!==null&&n!==void 0?n:document,o=this.getLiveRegion(a,s);o.textContent="",setTimeout(function(){o.textContent=e,s.addEventListener("click",l)},1);function l(){o.textContent="",s.removeEventListener("click",l)}},i.prototype.getLiveRegion=function(e,t){var r=this.liveRegions.get(t);r||(r=new Map,this.liveRegions.set(t,r));var n=r.get(e);if(n&&t.body.contains(n))return n;var a=this.createLiveRegion(e,t);return r.set(e,a),a},i.prototype.createLiveRegion=function(e,t){var r=t.createElement("div");return r.style.position="absolute",r.style.top="-9999px",r.style.left="-9999px",r.style.height="1px",r.style.overflow="hidden",r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live",e),r.setAttribute(dn,"true"),t.body.appendChild(r),r},i}();/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ct;(function(i){i[i.UNSPECIFIED=0]="UNSPECIFIED",i[i.CLICK=1]="CLICK",i[i.BACKSPACE_KEY=2]="BACKSPACE_KEY",i[i.DELETE_KEY=3]="DELETE_KEY",i[i.SPACEBAR_KEY=4]="SPACEBAR_KEY",i[i.ENTER_KEY=5]="ENTER_KEY"})(Ct||(Ct={}));var me={ARIA_HIDDEN:"aria-hidden",INTERACTION_EVENT:"MDCChipTrailingAction:interaction",NAVIGATION_EVENT:"MDCChipTrailingAction:navigation",TAB_INDEX:"tabindex"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ds=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return me},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{focus:function(){},getAttribute:function(){return null},setAttribute:function(){},notifyInteraction:function(){},notifyNavigation:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(t){t.stopPropagation(),this.adapter.notifyInteraction(Ct.CLICK)},e.prototype.handleKeydown=function(t){t.stopPropagation();var r=M(t);if(this.shouldNotifyInteractionFromKey(r)){var n=this.getTriggerFromKey(r);this.adapter.notifyInteraction(n);return}if(Hi(t)){this.adapter.notifyNavigation(r);return}},e.prototype.removeFocus=function(){this.adapter.setAttribute(me.TAB_INDEX,"-1")},e.prototype.focus=function(){this.adapter.setAttribute(me.TAB_INDEX,"0"),this.adapter.focus()},e.prototype.isNavigable=function(){return this.adapter.getAttribute(me.ARIA_HIDDEN)!=="true"},e.prototype.shouldNotifyInteractionFromKey=function(t){var r=t===g.ENTER||t===g.SPACEBAR,n=t===g.BACKSPACE||t===g.DELETE;return r||n},e.prototype.getTriggerFromKey=function(t){return t===g.SPACEBAR?Ct.SPACEBAR_KEY:t===g.ENTER?Ct.ENTER_KEY:t===g.DELETE?Ct.DELETE_KEY:t===g.BACKSPACE?Ct.BACKSPACE_KEY:Ct.UNSPECIFIED},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var un={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},cn={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ns=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return cn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return un},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(t){var r=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(r):this.adapter.removeClass(r)},e}(R);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ot;(function(i){i.PROCESSING="mdc-switch--processing",i.SELECTED="mdc-switch--selected",i.UNSELECTED="mdc-switch--unselected"})(Ot||(Ot={}));var Br;(function(i){i.RIPPLE=".mdc-switch__ripple"})(Br||(Br={}));/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function hn(i,e,t){var r=fn(i,e),n=r.getObservers(e);return n.push(t),function(){n.splice(n.indexOf(t),1)}}var Ae=new WeakMap;function fn(i,e){var t=new Map;Ae.has(i)||Ae.set(i,{isEnabled:!0,getObservers:function(d){var u=t.get(d)||[];return t.has(d)||t.set(d,u),u},installedProperties:new Set});var r=Ae.get(i);if(r.installedProperties.has(e))return r;var n=pn(i,e)||{configurable:!0,enumerable:!0,value:i[e],writable:!0},a=p({},n),s=n.get,o=n.set;if("value"in n){delete a.value,delete a.writable;var l=n.value;s=function(){return l},n.writable&&(o=function(d){l=d})}return s&&(a.get=function(){return s.call(this)}),o&&(a.set=function(d){var u,h,E=s?s.call(this):d;if(o.call(this,d),r.isEnabled&&(!s||d!==E))try{for(var f=L(r.getObservers(e)),m=f.next();!m.done;m=f.next()){var A=m.value;A(d,E)}}catch(T){u={error:T}}finally{try{m&&!m.done&&(h=f.return)&&h.call(f)}finally{if(u)throw u.error}}}),r.installedProperties.add(e),Object.defineProperty(i,e,a),r}function pn(i,e){for(var t=i,r;t&&(r=Object.getOwnPropertyDescriptor(t,e),!r);)t=Object.getPrototypeOf(t);return r}function En(i,e){var t=Ae.get(i);t&&(t.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var mn=function(i){v(e,i);function e(t){var r=i.call(this,t)||this;return r.unobserves=new Set,r}return e.prototype.destroy=function(){i.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,r){var n,a,s=this,o=[];try{for(var l=L(Object.keys(r)),d=l.next();!d.done;d=l.next()){var u=d.value,h=r[u].bind(this);o.push(this.observeProperty(t,u,h))}}catch(f){n={error:f}}finally{try{d&&!d.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}var E=function(){var f,m;try{for(var A=L(o),T=A.next();!T.done;T=A.next()){var I=T.value;I()}}catch(D){f={error:D}}finally{try{T&&!T.done&&(m=A.return)&&m.call(A)}finally{if(f)throw f.error}}s.unobserves.delete(E)};return this.unobserves.add(E),E},e.prototype.observeProperty=function(t,r,n){return hn(t,r,n)},e.prototype.setObserversEnabled=function(t,r){En(t,r)},e.prototype.unobserve=function(){var t,r;try{for(var n=L(vi([],Ar(this.unobserves))),a=n.next();!a.done;a=n.next()){var s=a.value;s()}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e}(R);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var An=function(i){v(e,i);function e(t){var r=i.call(this,t)||this;return r.handleClick=r.handleClick.bind(r),r}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(mn),Ms=function(i){v(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.init=function(){i.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(Ot.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(Ot.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,Ot.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,Ot.SELECTED),this.toggleClass(!this.adapter.state.selected,Ot.UNSELECTED)},e.prototype.toggleClass=function(t,r){t?this.adapter.addClass(r):this.adapter.removeClass(r)},e}(An);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var P={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_CELL:"mdc-data-table__header-cell",HEADER_CELL_LABEL:"mdc-data-table__header-cell-label",HEADER_CELL_SORTED:"mdc-data-table__header-cell--sorted",HEADER_CELL_SORTED_DESCENDING:"mdc-data-table__header-cell--sorted-descending",HEADER_CELL_WITH_SORT:"mdc-data-table__header-cell--with-sort",HEADER_CELL_WRAPPER:"mdc-data-table__header-cell-wrapper",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",IN_PROGRESS:"mdc-data-table--in-progress",LINEAR_PROGRESS:"mdc-data-table__linear-progress",PAGINATION_ROWS_PER_PAGE_LABEL:"mdc-data-table__pagination-rows-per-page-label",PAGINATION_ROWS_PER_PAGE_SELECT:"mdc-data-table__pagination-rows-per-page-select",PROGRESS_INDICATOR:"mdc-data-table__progress-indicator",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected",SORT_ICON_BUTTON:"mdc-data-table__sort-icon-button",SORT_STATUS_LABEL:"mdc-data-table__sort-status-label",TABLE_CONTAINER:"mdc-data-table__table-container"},Vr={ARIA_SELECTED:"aria-selected",ARIA_SORT:"aria-sort"},Tn={COLUMN_ID:"data-column-id",ROW_ID:"data-row-id"},Te={CONTENT:"."+P.CONTENT,HEADER_CELL:"."+P.HEADER_CELL,HEADER_CELL_WITH_SORT:"."+P.HEADER_CELL_WITH_SORT,HEADER_ROW:"."+P.HEADER_ROW,HEADER_ROW_CHECKBOX:"."+P.HEADER_ROW_CHECKBOX,PROGRESS_INDICATOR:"."+P.PROGRESS_INDICATOR,ROW:"."+P.ROW,ROW_CHECKBOX:"."+P.ROW_CHECKBOX,ROW_SELECTED:"."+P.ROW_SELECTED,SORT_ICON_BUTTON:"."+P.SORT_ICON_BUTTON,SORT_STATUS_LABEL:"."+P.SORT_STATUS_LABEL},bt={ARIA_SELECTED:Vr.ARIA_SELECTED,ARIA_SORT:Vr.ARIA_SORT,DATA_ROW_ID_ATTR:Tn.ROW_ID,HEADER_ROW_CHECKBOX_SELECTOR:Te.HEADER_ROW_CHECKBOX,ROW_CHECKBOX_SELECTOR:Te.ROW_CHECKBOX,ROW_SELECTED_SELECTOR:Te.ROW_SELECTED,ROW_SELECTOR:Te.ROW},Z;(function(i){i.ASCENDING="ascending",i.DESCENDING="descending",i.NONE="none",i.OTHER="other"})(Z||(Z={}));/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Hs=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassAtRowIndex:function(){},getAttributeByHeaderCellIndex:function(){return""},getHeaderCellCount:function(){return 0},getHeaderCellElements:function(){return[]},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},getTableContainerHeight:function(){return 0},getTableHeaderHeight:function(){return 0},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifySortAction:function(){},notifyUnselectedAll:function(){},notifyRowClick:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClass:function(){},removeClassAtRowIndex:function(){},removeClassNameByHeaderCellIndex:function(){},setAttributeAtRowIndex:function(){},setAttributeByHeaderCellIndex:function(){},setClassNameByHeaderCellIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setProgressIndicatorStyles:function(){},setRowCheckboxCheckedAtIndex:function(){},setSortStatusLabelByHeaderCellIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.isRowsSelectable()&&(this.adapter.registerHeaderRowCheckbox(),this.adapter.registerRowCheckboxes(),this.setHeaderRowCheckboxState())},e.prototype.layoutAsync=function(){return Ii(this,void 0,void 0,function(){return gi(this,function(t){switch(t.label){case 0:return this.adapter.isRowsSelectable()?[4,this.adapter.registerHeaderRowCheckbox()]:[3,3];case 1:return t.sent(),[4,this.adapter.registerRowCheckboxes()];case 2:t.sent(),this.setHeaderRowCheckboxState(),t.label=3;case 3:return[2]}})})},e.prototype.getRows=function(){return this.adapter.getRowElements()},e.prototype.getHeaderCells=function(){return this.adapter.getHeaderCellElements()},e.prototype.setSelectedRowIds=function(t){for(var r=0;r<this.adapter.getRowCount();r++){var n=this.adapter.getRowIdAtIndex(r),a=!1;n&&t.indexOf(n)>=0&&(a=!0),this.adapter.setRowCheckboxCheckedAtIndex(r,a),this.selectRowAtIndex(r,a)}this.setHeaderRowCheckboxState()},e.prototype.getRowIds=function(){for(var t=[],r=0;r<this.adapter.getRowCount();r++)t.push(this.adapter.getRowIdAtIndex(r));return t},e.prototype.getSelectedRowIds=function(){for(var t=[],r=0;r<this.adapter.getRowCount();r++)this.adapter.isCheckboxAtRowIndexChecked(r)&&t.push(this.adapter.getRowIdAtIndex(r));return t},e.prototype.handleHeaderRowCheckboxChange=function(){for(var t=this.adapter.isHeaderRowCheckboxChecked(),r=0;r<this.adapter.getRowCount();r++)this.adapter.setRowCheckboxCheckedAtIndex(r,t),this.selectRowAtIndex(r,t);t?this.adapter.notifySelectedAll():this.adapter.notifyUnselectedAll()},e.prototype.handleRowCheckboxChange=function(t){var r=this.adapter.getRowIndexByChildElement(t.target);if(r!==-1){var n=this.adapter.isCheckboxAtRowIndexChecked(r);this.selectRowAtIndex(r,n),this.setHeaderRowCheckboxState();var a=this.adapter.getRowIdAtIndex(r);this.adapter.notifyRowSelectionChanged({rowId:a,rowIndex:r,selected:n})}},e.prototype.handleSortAction=function(t){for(var r=t.columnId,n=t.columnIndex,a=t.headerCell,s=0;s<this.adapter.getHeaderCellCount();s++)s!==n&&(this.adapter.removeClassNameByHeaderCellIndex(s,P.HEADER_CELL_SORTED),this.adapter.removeClassNameByHeaderCellIndex(s,P.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(s,bt.ARIA_SORT,Z.NONE),this.adapter.setSortStatusLabelByHeaderCellIndex(s,Z.NONE));this.adapter.setClassNameByHeaderCellIndex(n,P.HEADER_CELL_SORTED);var o=this.adapter.getAttributeByHeaderCellIndex(n,bt.ARIA_SORT),l=Z.NONE;o===Z.ASCENDING?(this.adapter.setClassNameByHeaderCellIndex(n,P.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(n,bt.ARIA_SORT,Z.DESCENDING),l=Z.DESCENDING):o===Z.DESCENDING?(this.adapter.removeClassNameByHeaderCellIndex(n,P.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(n,bt.ARIA_SORT,Z.ASCENDING),l=Z.ASCENDING):(this.adapter.setAttributeByHeaderCellIndex(n,bt.ARIA_SORT,Z.ASCENDING),l=Z.ASCENDING),this.adapter.setSortStatusLabelByHeaderCellIndex(n,l),this.adapter.notifySortAction({columnId:r,columnIndex:n,headerCell:a,sortValue:l})},e.prototype.handleRowClick=function(t){var r=t.rowId,n=t.row;this.adapter.notifyRowClick({rowId:r,row:n})},e.prototype.showProgress=function(){var t=this.adapter.getTableHeaderHeight(),r=this.adapter.getTableContainerHeight()-t,n=t;this.adapter.setProgressIndicatorStyles({height:r+"px",top:n+"px"}),this.adapter.addClass(P.IN_PROGRESS)},e.prototype.hideProgress=function(){this.adapter.removeClass(P.IN_PROGRESS)},e.prototype.setHeaderRowCheckboxState=function(){this.adapter.getSelectedRowCount()===0?(this.adapter.setHeaderRowCheckboxChecked(!1),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):this.adapter.getSelectedRowCount()===this.adapter.getRowCount()?(this.adapter.setHeaderRowCheckboxChecked(!0),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):(this.adapter.setHeaderRowCheckboxIndeterminate(!0),this.adapter.setHeaderRowCheckboxChecked(!1))},e.prototype.selectRowAtIndex=function(t,r){r?(this.adapter.addClassAtRowIndex(t,P.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(t,bt.ARIA_SELECTED,"true")):(this.adapter.removeClassAtRowIndex(t,P.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(t,bt.ARIA_SELECTED,"false"))},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ge={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},kt={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},Cn={FOCUS_ROOT_INDEX:-1},Ut;(function(i){i[i.NONE=0]="NONE",i[i.LIST_ROOT=1]="LIST_ROOT",i[i.FIRST_ITEM=2]="FIRST_ITEM",i[i.LAST_ITEM=3]="LAST_ITEM"})(Ut||(Ut={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.closeAnimationEndTimerId=0,r.defaultFocusState=Ut.LIST_ROOT,r.selectedIndex=-1,r}return Object.defineProperty(e,"cssClasses",{get:function(){return Ge},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Cn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var r=t.key,n=t.keyCode,a=r==="Tab"||n===9;a&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var r=this,n=this.adapter.getElementIndex(t);if(!(n<0)){this.adapter.notifySelected({index:n});var a=this.adapter.getAttributeFromElementAtIndex(n,kt.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(a),this.closeAnimationEndTimerId=setTimeout(function(){var s=r.adapter.getElementIndex(t);s>=0&&r.adapter.isSelectableItemAtIndex(s)&&r.setSelectedIndex(s)},Zi.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Ut.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Ut.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Ut.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var r=this.adapter.getSelectedSiblingOfItemAtIndex(t);r>=0&&(this.adapter.removeAttributeFromElementAtIndex(r,kt.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(r,Ge.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,Ge.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,kt.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,r){this.validatedIndex(t),r?(this.adapter.removeClassFromElementAtIndex(t,_.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,kt.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,_.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,kt.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var r=this.adapter.getMenuItemCount(),n=t>=0&&t<r;if(!n)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(R);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var H={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},Xe={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},Lt={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ws=function(i){v(e,i);function e(t,r){r===void 0&&(r={});var n=i.call(this,p(p({},e.defaultAdapter),t))||this;return n.disabled=!1,n.isMenuOpen=!1,n.useDefaultValidation=!0,n.customValidity=!0,n.lastSelectedIndex=Lt.UNSET_INDEX,n.clickDebounceTimeout=0,n.recentlyClicked=!1,n.leadingIcon=r.leadingIcon,n.helperText=r.helperText,n}return Object.defineProperty(e,"cssClasses",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Lt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Xe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(t,r,n){r===void 0&&(r=!1),n===void 0&&(n=!1),!(t>=this.adapter.getMenuItemCount())&&(t===Lt.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),r&&this.adapter.closeMenu(),!n&&this.lastSelectedIndex!==t&&this.handleChange(),this.lastSelectedIndex=t)},e.prototype.setValue=function(t,r){r===void 0&&(r=!1);var n=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(n,!1,r)},e.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),r=this.adapter.getMenuItemValues();return t!==Lt.UNSET_INDEX?r[t]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(H.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(H.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(H.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,r=this.adapter.hasClass(H.FOCUSED),n=t||r,a=this.adapter.hasClass(H.REQUIRED);this.notchOutline(n),this.adapter.floatLabel(n),this.adapter.setLabelRequired(a)}},e.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues(),r=t.indexOf(this.getValue());this.setSelectedIndex(r,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var t=this.getSelectedIndex(),r=t>=0?t:0;this.adapter.focusMenuItemAtIndex(r)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(H.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var t=this.adapter.hasClass(H.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(H.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(t){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(t),this.openMenu()}},e.prototype.handleKeydown=function(t){if(!(this.isMenuOpen||!this.adapter.hasClass(H.FOCUSED))){var r=M(t)===g.ENTER,n=M(t)===g.SPACEBAR,a=M(t)===g.ARROW_UP,s=M(t)===g.ARROW_DOWN,o=t.ctrlKey||t.metaKey;if(!o&&(!n&&t.key&&t.key.length===1||n&&this.adapter.isTypeaheadInProgress())){var l=n?" ":t.key,d=this.adapter.typeaheadMatchItem(l,this.getSelectedIndex());d>=0&&this.setSelectedIndex(d),t.preventDefault();return}!r&&!n&&!a&&!s||(a&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):s&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),t.preventDefault())}},e.prototype.notchOutline=function(t){if(!!this.adapter.hasOutline()){var r=this.adapter.hasClass(H.FOCUSED);if(t){var n=Lt.LABEL_SCALE,a=this.adapter.getLabelWidth()*n;this.adapter.notchOutline(a)}else r||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},e.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(H.INVALID),this.adapter.removeMenuClass(H.MENU_INVALID)):(this.adapter.addClass(H.INVALID),this.adapter.addMenuClass(H.MENU_INVALID)),this.syncHelperTextValidity(t)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(H.REQUIRED)&&!this.adapter.hasClass(H.DISABLED)?this.getSelectedIndex()!==Lt.UNSET_INDEX&&(this.getSelectedIndex()!==0||Boolean(this.getValue())):this.customValidity},e.prototype.setRequired=function(t){t?this.adapter.addClass(H.REQUIRED):this.adapter.removeClass(H.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(Bt.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(H.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(H.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(H.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var t=this.adapter.hasClass(H.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(t){if(!!this.helperText){this.helperText.setValidity(t);var r=this.helperText.isVisible(),n=this.helperText.getId();r&&n?this.adapter.setSelectAnchorAttr(Xe.ARIA_DESCRIBEDBY,n):this.adapter.removeSelectAnchorAttr(Xe.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},Lt.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Dt={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Nt={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ps=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Dt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.setValidation=function(t){t?this.adapter.addClass(Nt.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Nt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(t){t?this.adapter.addClass(Nt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(Nt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(t){var r=this.adapter.hasClass(Nt.HELPER_TEXT_VALIDATION_MSG);if(!!r){var n=this.adapter.hasClass(Nt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),a=!t||n;if(a){this.showToScreenReader(),t?this.adapter.removeAttr(Dt.ROLE):this.adapter.setAttr(Dt.ROLE,"alert");return}this.adapter.removeAttr(Dt.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Dt.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(Dt.ARIA_HIDDEN,"true")},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var kr={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ur=["click","keydown"],Fs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.savedTabIndex=null,r.interactionHandler=function(n){r.handleInteraction(n)},r}return Object.defineProperty(e,"strings",{get:function(){return kr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,r;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var n=L(Ur),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.registerInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,r;try{for(var n=L(Ur),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){!this.savedTabIndex||(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",kr.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var r=t.key==="Enter"||t.keyCode===13;(t.type==="click"||r)&&this.adapter.notifyIconAction()},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ht={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},Ce={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},at={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var In=at.ARIA_LIVE_DELAY_MS,Kr=Ce.ARIA_LIVE_LABEL_TEXT_ATTR;function Bs(i,e){e===void 0&&(e=i);var t=i.getAttribute("aria-live"),r=e.textContent.trim();!r||!t||(i.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(Kr,r),setTimeout(function(){i.setAttribute("aria-live",t),e.removeAttribute(Kr),e.textContent=r},In))}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wr=ht.OPENING,Gr=ht.OPEN,Xr=ht.CLOSING,gn=Ce.REASON_ACTION,Ye=Ce.REASON_DISMISS,Vs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.opened=!1,r.animationFrame=0,r.animationTimer=0,r.autoDismissTimer=0,r.autoDismissTimeoutMs=at.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,r.closeOnEscape=!0,r}return Object.defineProperty(e,"cssClasses",{get:function(){return ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Wr),this.adapter.removeClass(Gr),this.adapter.removeClass(Xr)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Xr),this.adapter.addClass(Wr),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(Gr),t.animationTimer=setTimeout(function(){var r=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),r!==at.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(Ye)},r))},at.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var r=this;t===void 0&&(t=""),!!this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(ht.CLOSING),this.adapter.removeClass(ht.OPEN),this.adapter.removeClass(ht.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){r.handleAnimationTimerEnd(),r.adapter.notifyClosed(t)},at.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var r=at.MIN_AUTO_DISMISS_TIMEOUT_MS,n=at.MAX_AUTO_DISMISS_TIMEOUT_MS,a=at.INDETERMINATE;if(t===at.INDETERMINATE||t<=n&&t>=r)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+r+"\u2013"+n+`
        (or `+a+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var r=t.key==="Escape"||t.keyCode===27;r&&this.getCloseOnEscape()&&this.close(Ye)},e.prototype.handleActionButtonClick=function(t){this.close(gn)},e.prototype.handleActionIconClick=function(t){this.close(Ye)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(ht.OPENING),this.adapter.removeClass(ht.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var r=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){r.animationFrame=0,clearTimeout(r.animationTimer),r.animationTimer=setTimeout(t,0)})},e}(R);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var je={CLOSING:"mdc-banner--closing",OPEN:"mdc-banner--open",OPENING:"mdc-banner--opening"},Yr={BANNER_ANIMATION_CLOSE_TIME_MS:250,BANNER_ANIMATION_OPEN_TIME_MS:300},Ie;(function(i){i[i.PRIMARY=0]="PRIMARY",i[i.SECONDARY=1]="SECONDARY",i[i.UNSPECIFIED=2]="UNSPECIFIED"})(Ie||(Ie={}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ze=je.OPENING,jr=je.OPEN,$e=je.CLOSING,ks=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.isOpened=!1,r.animationFrame=0,r.animationTimer=0,r}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getContentHeight:function(){return 0},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeClass:function(){},setStyleProperty:function(){},trapFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0},e.prototype.open=function(){var t=this;this.isOpened=!0,this.adapter.notifyOpening(),this.adapter.removeClass($e),this.adapter.addClass(ze);var r=this.adapter.getContentHeight();this.animationFrame=requestAnimationFrame(function(){t.adapter.addClass(jr),t.adapter.setStyleProperty("height",r+"px"),t.animationTimer=setTimeout(function(){t.handleAnimationTimerEnd(),t.adapter.trapFocus(),t.adapter.notifyOpened()},Yr.BANNER_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var r=this;!this.isOpened||(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.isOpened=!1,this.adapter.notifyClosing(t),this.adapter.addClass($e),this.adapter.setStyleProperty("height","0"),this.adapter.removeClass(jr),this.adapter.removeClass(ze),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){r.adapter.releaseFocus(),r.handleAnimationTimerEnd(),r.adapter.notifyClosed(t)},Yr.BANNER_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpened},e.prototype.handlePrimaryActionClick=function(){this.close(Ie.PRIMARY)},e.prototype.handleSecondaryActionClick=function(){this.close(Ie.SECONDARY)},e.prototype.layout=function(){var t=this.adapter.getContentHeight();this.adapter.setStyleProperty("height",t+"px")},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(ze),this.adapter.removeClass($e)},e}(R);function Us(i){return i<.5?4*i*i*i:.5*Math.pow(2*i-2,3)+1}function zr(i){return Object.prototype.toString.call(i)==="[object Date]"}function qe(i,e){if(i===e||i!==i)return()=>i;const t=typeof i;if(t!==typeof e||Array.isArray(i)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(i)){const r=e.map((n,a)=>qe(i[a],n));return n=>r.map(a=>a(n))}if(t==="object"){if(!i||!e)throw new Error("Object cannot be null");if(zr(i)&&zr(e)){i=i.getTime(),e=e.getTime();const a=e-i;return s=>new Date(i+s*a)}const r=Object.keys(e),n={};return r.forEach(a=>{n[a]=qe(i[a],e[a])}),a=>{const s={};return r.forEach(o=>{s[o]=n[o](a)}),s}}if(t==="number"){const r=e-i;return n=>i+n*r}throw new Error(`Cannot interpolate ${t} values`)}function Ks(i,e={}){const t=mr(i);let r,n=i;function a(s,o){if(i==null)return t.set(i=s),Promise.resolve();n=s;let l=r,d=!1,{delay:u=0,duration:h=400,easing:E=Qr,interpolate:f=qe}=_e(_e({},e),o);if(h===0)return l&&(l.abort(),l=null),t.set(i=n),Promise.resolve();const m=ri()+u;let A;return r=ii(T=>{if(T<m)return!0;d||(A=f(i,s),typeof h=="function"&&(h=h(i,s)),d=!0),l&&(l.abort(),l=null);const I=T-m;return I>h?(t.set(i=s),!1):(t.set(i=A(E(I/h))),!0)}),r.promise}return{set:a,update:(s,o)=>a(s(n,i),o),subscribe:t.subscribe}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ws(i){return i?i.scrollHeight>i.offsetHeight:!1}function Gs(i){return i?i.scrollTop===0:!1}function Xs(i){return i?Math.ceil(i.scrollHeight-i.scrollTop)===i.clientHeight:!1}function Ys(i){var e=new Set;return[].forEach.call(i,function(t){return e.add(t.offsetTop)}),e.size>1}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Zt={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Ze={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ge;(function(i){i.POLL_SCROLL_POS="poll_scroll_position",i.POLL_LAYOUT_CHANGE="poll_layout_change"})(ge||(ge={}));var js=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.dialogOpen=!1,r.isFullscreen=!1,r.animationFrame=0,r.animationTimer=0,r.escapeKeyAction=Zt.CLOSE_ACTION,r.scrimClickAction=Zt.CLOSE_ACTION,r.autoStackButtons=!0,r.areButtonsStacked=!1,r.suppressDefaultPressSelector=Zt.SUPPRESS_DEFAULT_PRESS_SELECTOR,r.animFrame=new Pe,r.contentScrollHandler=function(){r.handleScrollEvent()},r.windowResizeHandler=function(){r.layout()},r.windowOrientationChangeHandler=function(){r.layout()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Zt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ze},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(b.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(b.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var r=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(b.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(b.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){r.adapter.addClass(b.OPEN),r.adapter.addBodyClass(b.SCROLL_LOCK),r.layout(),r.animationTimer=setTimeout(function(){r.handleAnimationTimerEnd(),r.adapter.trapFocus(r.adapter.getInitialFocusEl()),r.adapter.notifyOpened()},Ze.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var r=this;t===void 0&&(t=""),!!this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(b.CLOSING),this.adapter.removeClass(b.OPEN),this.adapter.removeBodyClass(b.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){r.adapter.releaseFocus(),r.handleAnimationTimerEnd(),r.adapter.notifyClosed(t)},Ze.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(b.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(b.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(b.SURFACE_SCRIM_SHOWN),this.adapter.addClass(b.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(b.SURFACE_SCRIM_HIDING),this.adapter.removeClass(b.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(ge.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},e.prototype.handleClick=function(t){var r=this.adapter.eventTargetMatches(t.target,Zt.SCRIM_SELECTOR);if(r&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var n=this.adapter.getActionFromEvent(t);n&&this.close(n)}},e.prototype.handleKeydown=function(t){var r=t.key==="Enter"||t.keyCode===13;if(!!r){var n=this.adapter.getActionFromEvent(t);if(!n){var a=t.composedPath?t.composedPath()[0]:t.target,s=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(a,this.suppressDefaultPressSelector):!0;r&&s&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(t){var r=t.key==="Escape"||t.keyCode===27;r&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(ge.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(b.OPENING),this.adapter.removeClass(b.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var r=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){r.animationFrame=0,clearTimeout(r.animationTimer),r.animationTimer=setTimeout(t,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(b.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(b.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(b.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(b.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(b.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(b.SCROLL_DIVIDER_HEADER):this.adapter.addClass(b.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(b.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(b.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(b.SCROLL_DIVIDER_FOOTER)},e}(R);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var F={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},$r={STEP_SIZE:1,THUMB_UPDATE_MIN_PX:5},U={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qt;(function(i){i[i.ACTIVE=0]="ACTIVE",i[i.INACTIVE=1]="INACTIVE"})(Qt||(Qt={}));var c;(function(i){i[i.START=1]="START",i[i.END=2]="END"})(c||(c={}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ve;(function(i){i.SLIDER_UPDATE="slider_update"})(ve||(ve={}));var Qe=typeof window!="undefined",zs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.initialStylesRemoved=!1,r.isDisabled=!1,r.isDiscrete=!1,r.step=$r.STEP_SIZE,r.hasTickMarks=!1,r.isRange=!1,r.thumb=null,r.downEventClientX=null,r.startThumbKnobWidth=0,r.endThumbKnobWidth=0,r.animFrame=new Pe,r}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},getThumbKnobWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(F.DISABLED),this.isDiscrete=this.adapter.hasClass(F.DISCRETE),this.hasTickMarks=this.adapter.hasClass(F.TICK_MARKS),this.isRange=this.adapter.hasClass(F.RANGE);var r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(U.INPUT_MIN,this.isRange?c.START:c.END),U.INPUT_MIN),n=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(U.INPUT_MAX,c.END),U.INPUT_MAX),a=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(U.INPUT_VALUE,c.END),U.INPUT_VALUE),s=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(U.INPUT_VALUE,c.START),U.INPUT_VALUE):r,o=this.adapter.getInputAttribute(U.INPUT_STEP,c.END),l=o?this.convertAttributeValueToNumber(o,U.INPUT_STEP):this.step;this.validateProperties({min:r,max:n,value:a,valueStart:s,step:l}),this.min=r,this.max=n,this.value=a,this.valueStart=s,this.step=l,this.numDecimalPlaces=qr(this.step),this.valueBeforeDownEvent=a,this.valueStartBeforeDownEvent=s,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(c.START)},this.inputEndChangeListener=function(){t.handleInputChange(c.END)},this.inputStartFocusListener=function(){t.handleInputFocus(c.START)},this.inputEndFocusListener=function(){t.handleInputFocus(c.END)},this.inputStartBlurListener=function(){t.handleInputBlur(c.START)},this.inputEndBlurListener=function(){t.handleInputBlur(c.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},e.prototype.setMax=function(t){this.max=t,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+")"));this.updateValue(t,c.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+")"));this.updateValue(t,c.START)},e.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=qr(t),this.updateUI()},e.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(F.DISABLED),this.isRange&&this.adapter.setInputAttribute(U.INPUT_DISABLED,"",c.START),this.adapter.setInputAttribute(U.INPUT_DISABLED,"",c.END)):(this.adapter.removeClass(F.DISABLED),this.isRange&&this.adapter.removeInputAttribute(U.INPUT_DISABLED,c.START),this.adapter.removeInputAttribute(U.INPUT_DISABLED,c.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(t){var r=t===void 0?{}:t,n=r.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(c.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(c.END)),n||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var r=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=r;var n=this.mapClientXOnSliderScale(r);this.thumb=this.getThumbFromDownEvent(r,n),this.thumb!==null&&(this.handleDragStart(t,n,this.thumb),this.updateValue(n,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var r=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,n=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(r),this.thumb!==null){var a=this.mapClientXOnSliderScale(r);n||(this.handleDragStart(t,a,this.thumb),this.adapter.emitDragStartEvent(a,this.thumb)),this.updateValue(a,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){if(!(this.isDisabled||this.thumb===null)){var t=this.thumb===c.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,r=this.thumb===c.START?this.valueStart:this.value;t!==r&&this.adapter.emitChangeEvent(r,this.thumb),this.adapter.emitDragEndEvent(r,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(F.THUMB_WITH_INDICATOR,c.START),this.adapter.addThumbClass(F.THUMB_WITH_INDICATOR,c.END))},e.prototype.handleThumbMouseleave=function(){!this.isDiscrete||!this.isRange||this.adapter.isInputFocused(c.START)||this.adapter.isInputFocused(c.END)||(this.adapter.removeThumbClass(F.THUMB_WITH_INDICATOR,c.START),this.adapter.removeThumbClass(F.THUMB_WITH_INDICATOR,c.END))},e.prototype.handleMousedownOrTouchstart=function(t){var r=this,n=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(n,this.moveListener);var a=function(){r.handleUp(),r.adapter.deregisterBodyEventHandler(n,r.moveListener),r.adapter.deregisterEventHandler("mouseup",a),r.adapter.deregisterEventHandler("touchend",a)};this.adapter.registerBodyEventHandler("mouseup",a),this.adapter.registerBodyEventHandler("touchend",a),this.handleDown(t)},e.prototype.handlePointerdown=function(t){this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t)},e.prototype.handleInputChange=function(t){var r=Number(this.adapter.getInputValue(t));t===c.START?this.setValueStart(r):this.setValue(r),this.adapter.emitChangeEvent(t===c.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===c.START?this.valueStart:this.value,t)},e.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(F.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(F.THUMB_WITH_INDICATOR,t),this.isRange)){var r=t===c.START?c.END:c.START;this.adapter.addThumbClass(F.THUMB_WITH_INDICATOR,r)}},e.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(F.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(F.THUMB_WITH_INDICATOR,t),this.isRange)){var r=t===c.START?c.END:c.START;this.adapter.removeThumbClass(F.THUMB_WITH_INDICATOR,r)}},e.prototype.handleDragStart=function(t,r,n){this.adapter.emitDragStartEvent(r,n),this.adapter.focusInput(n),t.preventDefault()},e.prototype.getThumbFromDownEvent=function(t,r){if(!this.isRange)return c.END;var n=this.adapter.getThumbBoundingClientRect(c.START),a=this.adapter.getThumbBoundingClientRect(c.END),s=t>=n.left&&t<=n.right,o=t>=a.left&&t<=a.right;return s&&o?null:s?c.START:o?c.END:r<this.valueStart?c.START:r>this.value?c.END:r-this.valueStart<=this.value-r?c.START:c.END},e.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var r=Math.abs(this.downEventClientX-t)<$r.THUMB_UPDATE_MIN_PX;if(r)return this.thumb;var n=t<this.downEventClientX;return n?this.adapter.isRTL()?c.END:c.START:this.adapter.isRTL()?c.START:c.END},e.prototype.updateUI=function(t){this.updateThumbAndInputAttributes(t),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(t){if(!!t){var r=this.isRange&&t===c.START?this.valueStart:this.value,n=String(r);this.adapter.setInputAttribute(U.INPUT_VALUE,n,t),this.isRange&&t===c.START?this.adapter.setInputAttribute(U.INPUT_MIN,n,c.END):this.isRange&&t===c.END&&this.adapter.setInputAttribute(U.INPUT_MAX,n,c.START),this.adapter.getInputValue(t)!==n&&this.adapter.setInputValue(n,t);var a=this.adapter.getValueToAriaValueTextFn();a&&this.adapter.setInputAttribute(U.ARIA_VALUETEXT,a(r),t)}},e.prototype.updateValueIndicatorUI=function(t){if(!!this.isDiscrete){var r=this.isRange&&t===c.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(r,t===c.START?c.START:c.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,c.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,r=(this.value-this.valueStart)/this.step+1,n=(this.max-this.value)/this.step,a=Array.from({length:t}).fill(Qt.INACTIVE),s=Array.from({length:r}).fill(Qt.ACTIVE),o=Array.from({length:n}).fill(Qt.INACTIVE);this.adapter.updateTickMarks(a.concat(s).concat(o))}},e.prototype.mapClientXOnSliderScale=function(t){var r=t-this.rect.left,n=r/this.rect.width;this.adapter.isRTL()&&(n=1-n);var a=this.min+n*(this.max-this.min);return a===this.max||a===this.min?a:Number(this.quantize(a).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(t){var r=Math.round((t-this.min)/this.step);return this.min+r*this.step},e.prototype.updateValue=function(t,r,n){var a=n===void 0?{}:n,s=a.emitInputEvent;if(t=this.clampValue(t,r),this.isRange&&r===c.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(r),s&&this.adapter.emitInputEvent(r===c.START?this.valueStart:this.value,r)},e.prototype.clampValue=function(t,r){t=Math.min(Math.max(t,this.min),this.max);var n=this.isRange&&r===c.START&&t>this.value;if(n)return this.value;var a=this.isRange&&r===c.END&&t<this.valueStart;return a?this.valueStart:t},e.prototype.updateThumbAndTrackUI=function(t){var r=this,n=this,a=n.max,s=n.min,o=(this.value-this.valueStart)/(a-s),l=o*this.rect.width,d=this.adapter.isRTL(),u=Qe?Yt(window,"transform"):"transform";if(this.isRange){var h=this.adapter.isRTL()?(a-this.value)/(a-s)*this.rect.width:(this.valueStart-s)/(a-s)*this.rect.width,E=h+l;this.animFrame.request(ve.SLIDER_UPDATE,function(){var f=!d&&t===c.START||d&&t!==c.START;f?(r.adapter.setTrackActiveStyleProperty("transform-origin","right"),r.adapter.setTrackActiveStyleProperty("left","unset"),r.adapter.setTrackActiveStyleProperty("right",r.rect.width-E+"px")):(r.adapter.setTrackActiveStyleProperty("transform-origin","left"),r.adapter.setTrackActiveStyleProperty("right","unset"),r.adapter.setTrackActiveStyleProperty("left",h+"px")),r.adapter.setTrackActiveStyleProperty(u,"scaleX("+o+")");var m=d?E:h,A=r.adapter.isRTL()?h:E;(t===c.START||!t||!r.initialStylesRemoved)&&r.adapter.setThumbStyleProperty(u,"translateX("+m+"px)",c.START),(t===c.END||!t||!r.initialStylesRemoved)&&r.adapter.setThumbStyleProperty(u,"translateX("+A+"px)",c.END),r.removeInitialStyles(d),r.updateOverlappingThumbsUI(m,A,t)})}else this.animFrame.request(ve.SLIDER_UPDATE,function(){var f=d?r.rect.width-l:l;r.adapter.setThumbStyleProperty(u,"translateX("+f+"px)",c.END),r.adapter.setTrackActiveStyleProperty(u,"scaleX("+o+")"),r.removeInitialStyles(d)})},e.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var r=t?"right":"left";this.adapter.removeThumbStyleProperty(r,c.END),this.isRange&&this.adapter.removeThumbStyleProperty(r,c.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(!!this.isDiscrete){var r=Qe?Yt(window,"transition"):"transition",n="all 0s ease 0s";this.adapter.setThumbStyleProperty(r,n,c.END),this.isRange&&this.adapter.setThumbStyleProperty(r,n,c.START),this.adapter.setTrackActiveStyleProperty(r,n),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(r,c.END),t.adapter.removeTrackActiveStyleProperty(r),t.isRange&&t.adapter.removeThumbStyleProperty(r,c.START)})}},e.prototype.updateOverlappingThumbsUI=function(t,r,n){var a=!1;if(this.adapter.isRTL()){var s=t-this.startThumbKnobWidth/2,o=r+this.endThumbKnobWidth/2;a=o>=s}else{var l=t+this.startThumbKnobWidth/2,d=r-this.endThumbKnobWidth/2;a=l>=d}a?(this.adapter.addThumbClass(F.THUMB_TOP,n||c.END),this.adapter.removeThumbClass(F.THUMB_TOP,n===c.START?c.END:c.START)):(this.adapter.removeThumbClass(F.THUMB_TOP,c.START),this.adapter.removeThumbClass(F.THUMB_TOP,c.END))},e.prototype.convertAttributeValueToNumber=function(t,r){if(t===null)throw new Error("MDCSliderFoundation: `"+r+"` must be non-null.");var n=Number(t);if(isNaN(n))throw new Error("MDCSliderFoundation: `"+r+"` value is "+("`"+t+"`, but must be a number."));return n},e.prototype.validateProperties=function(t){var r=t.min,n=t.max,a=t.value,s=t.valueStart,o=t.step;if(r>=n)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+r+", max: "+n+"]"));if(o<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+this.step));if(this.isRange){if(a<r||a>n||s<r||s>n)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+s+", end value: "+a+"]"));if(s>a)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+s+", end value: "+a+"]"));var l=(s-r)/o,d=(a-r)/o;if(l%1!=0||d%1!=0)throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value. Current values: [start value: "+s+", ")+("end value: "+a+"]"))}else{if(a<r||a>n)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current value: "+a));var d=(a-r)/o;if(d%1!=0)throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value. Current value: "+a))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(c.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(c.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(c.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(c.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(c.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(c.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(c.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(c.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(c.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(c.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(c.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(c.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(c.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(c.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(c.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(c.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(c.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(c.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(c.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(c.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=Qe&&Boolean(window.PointerEvent)&&!vn(),e}(R);function vn(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function qr(i){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(i));if(!e)return 0;var t=e[1]||"",r=e[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(r))}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Sn={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},_n={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ft=function(i){v(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return _n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $s=function(i){v(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(ft.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(ft.cssClasses.ACTIVE)},e}(ft);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qs=function(i){v(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(ft.cssClasses.ACTIVE);return}var r=this.computeContentClientRect(),n=t.width/r.width,a=t.left-r.left;this.adapter.addClass(ft.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+a+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter.removeClass(ft.cssClasses.NO_TRANSITION),this.adapter.addClass(ft.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(ft.cssClasses.ACTIVE)},e}(ft);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Se={ACTIVE:"mdc-tab--active"},Jt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.focusOnActivate=!0,r}return Object.defineProperty(e,"cssClasses",{get:function(){return Se},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Jt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(Se.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(Se.ACTIVE),this.adapter.setAttr(Jt.ARIA_SELECTED,"true"),this.adapter.setAttr(Jt.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){!this.isActive()||(this.adapter.removeClass(Se.ACTIVE),this.adapter.setAttr(Jt.ARIA_SELECTED,"false"),this.adapter.setAttr(Jt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),r=this.adapter.getOffsetLeft(),n=this.adapter.getContentOffsetWidth(),a=this.adapter.getContentOffsetLeft();return{contentLeft:r+a,contentRight:r+a+n,rootLeft:r,rootRight:r+t}},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zr={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},yn={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Je=function(){function i(e){this.adapter=e}return i}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rn=function(i){v(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),r=this.calculateScrollEdges().right;return Math.round(r-t)},e.prototype.scrollToRTL=function(t){var r=this.calculateScrollEdges(),n=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(r.right-t);return{finalScrollPosition:a,scrollDelta:a-n}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-r}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,t),r.right)},e}(Je);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var On=function(i){v(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(t-r)},e.prototype.scrollToRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.getAnimatingScrollPosition=function(t,r){return t-r},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:r-t,right:0}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.max(Math.min(r.right,t),r.left)},e}(Je);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bn=function(i){v(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(r-t)},e.prototype.scrollToRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(t);return{finalScrollPosition:n,scrollDelta:r-n}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r+t);return{finalScrollPosition:n,scrollDelta:r-n}},e.prototype.getAnimatingScrollPosition=function(t,r){return t+r},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:t-r,right:0}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.right,t),r.left)},e}(Je);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qs=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.isAnimating=!1,r}return Object.defineProperty(e,"cssClasses",{get:function(){return Zr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return yn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return r-t},e.prototype.handleInteraction=function(){!this.isAnimating||this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var r=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(r,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var r=this.getIncrementScrollOperation(t);r.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var r=/\((.+?)\)/.exec(t);if(!r)return 0;var n=r[1],a=Ar(n.split(","),6);a[0],a[1],a[2],a[3];var s=a[4];return a[5],parseFloat(s)},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,t),r.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-r}},e.prototype.scrollToImpl=function(t){var r=this.getScrollPosition(),n=this.clampScrollValue(t),a=n-r;this.animate({finalScrollPosition:n,scrollDelta:a})},e.prototype.scrollToImplRTL=function(t){var r=this.getRTLScroller().scrollToRTL(t);this.animate(r)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var r=this.getScrollPosition(),n=t+r,a=this.clampScrollValue(n),s=a-r;return{finalScrollPosition:a,scrollDelta:s}},e.prototype.animate=function(t){var r=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){r.adapter.addClass(e.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(r,t):r-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var r=this.adapter.getScrollAreaScrollLeft();if(r<0)return this.adapter.setScrollAreaScrollLeft(t),new On(this.adapter);var n=this.adapter.computeScrollAreaClientRect(),a=this.adapter.computeScrollContentClientRect(),s=Math.round(a.right-n.right);return this.adapter.setScrollAreaScrollLeft(t),s===r?new bn(this.adapter):new Rn(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(R);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var tr;function Js(i,e){if(e===void 0&&(e=!0),e&&typeof tr!="undefined")return tr;var t=i.createElement("div");t.classList.add(Zr.SCROLL_TEST),i.body.appendChild(t);var r=t.offsetHeight-t.clientHeight;return i.body.removeChild(t),e&&(tr=r),r}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var B={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},rt={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mt=new Set;Mt.add(B.ARROW_LEFT_KEY);Mt.add(B.ARROW_RIGHT_KEY);Mt.add(B.END_KEY);Mt.add(B.HOME_KEY);Mt.add(B.ENTER_KEY);Mt.add(B.SPACE_KEY);var Ht=new Map;Ht.set(rt.ARROW_LEFT_KEYCODE,B.ARROW_LEFT_KEY);Ht.set(rt.ARROW_RIGHT_KEYCODE,B.ARROW_RIGHT_KEY);Ht.set(rt.END_KEYCODE,B.END_KEY);Ht.set(rt.HOME_KEYCODE,B.HOME_KEY);Ht.set(rt.ENTER_KEYCODE,B.ENTER_KEY);Ht.set(rt.SPACE_KEYCODE,B.SPACE_KEY);var to=function(i){v(e,i);function e(t){var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.useAutomaticActivation=!1,r}return Object.defineProperty(e,"strings",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var r=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===r)){var n;r!==-1&&(this.adapter.deactivateTabAtIndex(r),n=this.adapter.getTabIndicatorClientRectAtIndex(r)),this.adapter.activateTabAtIndex(t,n),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var r=this.getKeyFromEvent(t);if(r!==void 0)if(this.isActivationKey(r)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(r))return;var n=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),r);this.adapter.setActiveTab(n),this.scrollIntoView(n)}else{var a=this.adapter.getFocusedTabIndex();if(this.isActivationKey(r))this.adapter.setActiveTab(a);else{var n=this.determineTargetFromKey(a,r);this.adapter.focusTabAtIndex(n),this.scrollIntoView(n)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(!!this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,r){var n=this.isRTL(),a=this.adapter.getTabListLength()-1,s=r===B.END_KEY,o=r===B.ARROW_LEFT_KEY&&!n||r===B.ARROW_RIGHT_KEY&&n,l=r===B.ARROW_RIGHT_KEY&&!n||r===B.ARROW_LEFT_KEY&&n,d=t;return s?d=a:o?d-=1:l?d+=1:d=0,d<0?d=a:d>a&&(d=0),d},e.prototype.calculateScrollIncrement=function(t,r,n,a){var s=this.adapter.getTabDimensionsAtIndex(r),o=s.contentLeft-n-a,l=s.contentRight-n,d=l-rt.EXTRA_SCROLL_AMOUNT,u=o+rt.EXTRA_SCROLL_AMOUNT;return r<t?Math.min(d,0):Math.max(u,0)},e.prototype.calculateScrollIncrementRTL=function(t,r,n,a,s){var o=this.adapter.getTabDimensionsAtIndex(r),l=s-o.contentLeft-n,d=s-o.contentRight-n-a,u=d+rt.EXTRA_SCROLL_AMOUNT,h=l-rt.EXTRA_SCROLL_AMOUNT;return r>t?Math.max(u,0):Math.min(h,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,r,n,a){var s=r.rootLeft-n,o=r.rootRight-n-a,l=s+o,d=s<0||l<0,u=o>0||l>0;return d?t-1:u?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,r,n,a,s){var o=s-r.rootLeft-a-n,l=s-r.rootRight-n,d=o+l,u=o>0||d>0,h=l<0||d<0;return u?t+1:h?t-1:-1},e.prototype.getKeyFromEvent=function(t){return Mt.has(t.key)?t.key:Ht.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===B.SPACE_KEY||t===B.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(t),s=this.findAdjacentTabIndexClosestToEdge(t,a,r,n);if(!!this.indexIsInRange(s)){var o=this.calculateScrollIncrement(t,s,r,n);this.adapter.incrementScroll(o)}},e.prototype.scrollIntoViewImplRTL=function(t){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(t),s=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(t,a,r,n,s);if(!!this.indexIsInRange(o)){var l=this.calculateScrollIncrementRTL(t,o,r,n,s);this.adapter.incrementScroll(l)}},e}(R);export{ts as $,na as A,_e as B,mr as C,da as D,Gn as E,Dn as F,sa as G,pa as H,cr as I,Ca as J,di as K,ca as L,Nn as M,Hn as N,xn as O,Mn as P,Un as Q,ma as R,Sa as S,Ne as T,Ea as U,pt as V,ci as W,Zn as X,Na as Y,Ja as Z,Ka as _,hi as a,Ya as a$,es as a0,Ma as a1,jn as a2,Vn as a3,ir as a4,Kt as a5,Pn as a6,Wt as a7,_a as a8,vr as a9,ja as aA,Qa as aB,Xa as aC,Wa as aD,Ua as aE,za as aF,$a as aG,La as aH,ya as aI,Za as aJ,Ra as aK,ps as aL,Fn as aM,Ln as aN,ba as aO,Oa as aP,Es as aQ,ms as aR,As as aS,Ts as aT,wa as aU,Ha as aV,Pa as aW,xa as aX,Fa as aY,Va as aZ,ka as a_,ds as aa,os as ab,Ni as ac,wn as ad,ei as ae,Ui as af,cs as ag,ls as ah,hs as ai,us as aj,ns as ak,fs as al,lt as am,Bn as an,we as ao,Ft as ap,Xt as aq,zn as ar,ss as as,as as at,is as au,la as av,Xn as aw,Yn as ax,ia as ay,ea as az,dr as b,Ga as b0,Cs as b1,Zi as b2,Yt as b3,Bt as b4,ta as b5,_s as b6,ua as b7,Is as b8,gs as b9,Ys as bA,Ws as bB,Gs as bC,Xs as bD,Qt as bE,zs as bF,c as bG,$n as bH,Fs as bI,$s as bJ,qs as bK,Zs as bL,Qs as bM,Js as bN,to as bO,qa as bP,vs as ba,Os as bb,bs as bc,Ls as bd,Ds as be,Ns as bf,Ms as bg,Ba as bh,rs as bi,Da as bj,Hs as bk,Ps as bl,ws as bm,xs as bn,Ge as bo,ra as bp,Rs as bq,ys as br,Ss as bs,Vs as bt,Bs as bu,ks as bv,Ie as bw,Ks as bx,Us as by,js as bz,qn as c,li as d,ui as e,kn as f,pi as g,Jn as h,va as i,Ia as j,Kn as k,Wn as l,ga as m,Qn as n,Ai as o,Aa as p,Ta as q,ha as r,Jr as s,ye as t,mi as u,Ti as v,fa as w,Er as x,oa as y,aa as z};
