var _e=Object.defineProperty;var ee=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var se=(c,s,e)=>s in c?_e(c,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[s]=e,Y=(c,s)=>{for(var e in s||(s={}))be.call(s,e)&&se(c,e,s[e]);if(ee)for(var e of ee(s))ve.call(s,e)&&se(c,e,s[e]);return c};import{S as pe,i as Ee,s as ke,e as y,W as F,k as G,c as A,a as w,X as P,d as _,n as T,b as S,a2 as q,f as te,K as b,a3 as H,p as le,a4 as Z,B as K,E as Ie,V as ce,a5 as Ce,a6 as ie,a7 as we,D as Se,A as De,bg as Me,ad as Ve,I as ne}from"./vendor-23f55e93.js";import{u as ue,c as W,f as ye,d as X}from"./useActions-c024ab52.js";import{p as oe,e as ae}from"./prefixFilter-0866cfc5.js";import{R as Ae}from"./Ripple-460512c3.js";function re(c){let s,e,k,v,u,m,g,h,p,V,d=[{class:g=W({[c[7]]:!0,"mdc-switch__icons":!0})},oe(c[18],"icons$")],I={};for(let i=0;i<d.length;i+=1)I=K(I,d[i]);return{c(){s=y("div"),e=F("svg"),k=F("path"),v=G(),u=F("svg"),m=F("path"),this.h()},l(i){s=A(i,"DIV",{class:!0});var n=w(s);e=P(n,"svg",{class:!0,viewBox:!0});var r=w(e);k=P(r,"path",{d:!0}),w(k).forEach(_),r.forEach(_),v=T(n),u=P(n,"svg",{class:!0,viewBox:!0});var D=w(u);m=P(D,"path",{d:!0}),w(m).forEach(_),D.forEach(_),n.forEach(_),this.h()},h(){S(k,"d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"),S(e,"class","mdc-switch__icon mdc-switch__icon--on"),S(e,"viewBox","0 0 24 24"),S(m,"d","M20 13H4v-2h16v2z"),S(u,"class","mdc-switch__icon mdc-switch__icon--off"),S(u,"viewBox","0 0 24 24"),q(s,I)},m(i,n){te(i,s,n),b(s,e),b(e,k),b(s,v),b(s,u),b(u,m),p||(V=H(h=ue.call(null,s,c[6])),p=!0)},p(i,n){q(s,I=le(d,[n[0]&128&&g!==(g=W({[i[7]]:!0,"mdc-switch__icons":!0}))&&{class:g},n[0]&262144&&oe(i[18],"icons$")])),h&&Z(h.update)&&n[0]&64&&h.update.call(null,i[6])},d(i){i&&_(s),p=!1,V()}}}function Be(c){let s,e,k,v,u,m,g,h,p,V,d,I,i,n,r,D,a=c[5]&&re(c),R=[{class:d=W(Y({[c[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!c[9],"mdc-switch--selected":c[9],"mdc-switch--processing":c[1],"smui-switch--color-secondary":c[4]==="secondary"},c[11]))},{type:"button"},{role:"switch"},{"aria-checked":I=c[9]?"true":"false"},{disabled:c[0]},c[15],ae(c[18],["icons$"])],B={};for(let l=0;l<R.length;l+=1)B=K(B,R[l]);return{c(){s=y("button"),e=y("div"),k=G(),v=y("div"),u=y("div"),m=y("div"),g=y("div"),h=G(),p=y("div"),V=G(),a&&a.c(),this.h()},l(l){s=A(l,"BUTTON",{class:!0,type:!0,role:!0,"aria-checked":!0});var o=w(s);e=A(o,"DIV",{class:!0}),w(e).forEach(_),k=T(o),v=A(o,"DIV",{class:!0});var E=w(v);u=A(E,"DIV",{class:!0});var M=w(u);m=A(M,"DIV",{class:!0});var U=w(m);g=A(U,"DIV",{class:!0}),w(g).forEach(_),U.forEach(_),h=T(M),p=A(M,"DIV",{class:!0}),w(p).forEach(_),V=T(M),a&&a.l(M),M.forEach(_),E.forEach(_),o.forEach(_),this.h()},h(){S(e,"class","mdc-switch__track"),S(g,"class","mdc-elevation-overlay"),S(m,"class","mdc-switch__shadow"),S(p,"class","mdc-switch__ripple"),S(u,"class","mdc-switch__handle"),S(v,"class","mdc-switch__handle-track"),q(s,B)},m(l,o){te(l,s,o),b(s,e),b(s,k),b(s,v),b(v,u),b(u,m),b(m,g),b(u,h),b(u,p),c[27](p),b(u,V),a&&a.m(u,null),s.autofocus&&s.focus(),c[28](s),r||(D=[H(i=ue.call(null,s,c[2])),H(c[14].call(null,s)),H(n=Ae.call(null,s,{unbounded:!0,color:c[4],active:c[13],rippleElement:c[12],disabled:c[0],addClass:c[16],removeClass:c[17]})),Ie(s,"click",c[29])],r=!0)},p(l,o){l[5]?a?a.p(l,o):(a=re(l),a.c(),a.m(u,null)):a&&(a.d(1),a=null),q(s,B=le(R,[o[0]&2586&&d!==(d=W(Y({[l[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!l[9],"mdc-switch--selected":l[9],"mdc-switch--processing":l[1],"smui-switch--color-secondary":l[4]==="secondary"},l[11])))&&{class:d},{type:"button"},{role:"switch"},o[0]&512&&I!==(I=l[9]?"true":"false")&&{"aria-checked":I},o[0]&1&&{disabled:l[0]},l[15],o[0]&262144&&ae(l[18],["icons$"])])),i&&Z(i.update)&&o[0]&4&&i.update.call(null,l[2]),n&&Z(n.update)&&o[0]&12305&&n.update.call(null,{unbounded:!0,color:l[4],active:l[13],rippleElement:l[12],disabled:l[0],addClass:l[16],removeClass:l[17]})},i:ce,o:ce,d(l){l&&_(s),c[27](null),a&&a.d(),c[28](null),r=!1,Ce(D)}}}function Re(c,s,e){const k=["use","class","disabled","color","group","checked","value","processing","icons","icons$use","icons$class","getId","getElement"];let v=ie(s,k);var u;const m=ye(we());let g=()=>{};function h(t){return t===g}let{use:p=[]}=s,{class:V=""}=s,{disabled:d=!1}=s,{color:I="primary"}=s,{group:i=g}=s,{checked:n=g}=s,{value:r=null}=s,{processing:D=!1}=s,{icons:a=!0}=s,{icons$use:R=[]}=s,{icons$class:B=""}=s,l,o,E={},M,U=!1,J=(u=Se("SMUI:generic:input:props"))!==null&&u!==void 0?u:{},f=h(i)?h(n)?!1:n:i.indexOf(r)!==-1,L={get disabled(){return d},set disabled(t){e(0,d=t)},get processing(){return D},set processing(t){e(1,D=t)},get selected(){return f},set selected(t){e(9,f=t)}},j=n,z=h(i)?[]:[...i],O=f;De(()=>{e(10,o=new Me({addClass:N,hasClass:de,isDisabled:()=>d,removeClass:x,setAriaChecked:()=>{},setDisabled:C=>{e(0,d=C)},state:L}));const t={get element(){return Q()},get checked(){return f},set checked(C){f!==C&&(L.selected=C,l&&X(l,"SMUISwitch:change",{selected:C,value:r}))},activateRipple(){d||e(13,U=!0)},deactivateRipple(){e(13,U=!1)}};return X(l,"SMUIGenericInput:mount",t),o.init(),o.initFromDOM(),()=>{X(l,"SMUIGenericInput:unmount",t),o.destroy()}});function de(t){return t in E?E[t]:Q().classList.contains(t)}function N(t){E[t]||e(11,E[t]=!0,E)}function x(t){(!(t in E)||E[t])&&e(11,E[t]=!1,E)}function fe(){return J&&J.id}function Q(){return l}function he(t){ne[t?"unshift":"push"](()=>{M=t,e(12,M)})}function me(t){ne[t?"unshift":"push"](()=>{l=t,e(8,l)})}const ge=()=>o&&o.handleClick();return c.$$set=t=>{s=K(K({},s),Ve(t)),e(18,v=ie(s,k)),"use"in t&&e(2,p=t.use),"class"in t&&e(3,V=t.class),"disabled"in t&&e(0,d=t.disabled),"color"in t&&e(4,I=t.color),"group"in t&&e(19,i=t.group),"checked"in t&&e(20,n=t.checked),"value"in t&&e(21,r=t.value),"processing"in t&&e(1,D=t.processing),"icons"in t&&e(5,a=t.icons),"icons$use"in t&&e(6,R=t.icons$use),"icons$class"in t&&e(7,B=t.icons$class)},c.$$.update=()=>{if(c.$$.dirty[0]&121111296){let t=!1;if(!h(i))if(O!==f){const C=i.indexOf(r);f&&C===-1?(i.push(r),e(19,i),e(26,O),e(9,f),e(21,r),e(25,z),e(20,n),e(24,j),e(8,l)):!f&&C!==-1&&(i.splice(C,1),e(19,i),e(26,O),e(9,f),e(21,r),e(25,z),e(20,n),e(24,j),e(8,l)),t=!0}else{const C=z.indexOf(r),$=i.indexOf(r);C>-1&&$===-1?L.selected=!1:$>-1&&C===-1&&(L.selected=!0)}h(n)?O!==f&&(t=!0):n!==f&&(n===j?(e(20,n=f),t=!0):L.selected=n),e(24,j=n),e(25,z=h(i)?[]:[...i]),e(26,O=f),t&&l&&X(l,"SMUISwitch:change",{selected:f,value:r})}},[d,D,p,V,I,a,R,B,l,f,o,E,M,U,m,J,N,x,v,i,n,r,fe,Q,j,z,O,he,me,ge]}class Fe extends pe{constructor(s){super();Ee(this,s,Re,Be,ke,{use:2,class:3,disabled:0,color:4,group:19,checked:20,value:21,processing:1,icons:5,icons$use:6,icons$class:7,getId:22,getElement:23},null,[-1,-1])}get getId(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}export{Fe as S};