import{S as Z,i as y,s as w,M as R,B as M,e as W,k as x,c as G,a as L,n as $,d as A,a2 as F,f as ee,K as j,a3 as U,E as B,N as C,O as k,P as D,p as H,a4 as N,x as P,u as q,a5 as le,a6 as K,a7 as te,y as ne,A as ae,aR as se,ad as ie,I as O}from"./vendor-23f55e93.js";import{c as V,u as z,f as ue}from"./useActions-c024ab52.js";import{p as J,e as Q}from"./prefixFilter-0866cfc5.js";const oe=n=>({}),T=n=>({});function re(n){let l,s,o,m,p,b,r,h,E;const I=n[13].default,i=R(I,n,n[12],null),g=n[13].label,u=R(g,n,n[12],T);let c=[{for:n[4]},J(n[10],"label$")],_={};for(let e=0;e<c.length;e+=1)_=M(_,c[e]);let d=[{class:p=V({[n[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":n[2]==="end","mdc-form-field--nowrap":n[3]})},Q(n[10],["label$"])],f={};for(let e=0;e<d.length;e+=1)f=M(f,d[e]);return{c(){l=W("div"),i&&i.c(),s=x(),o=W("label"),u&&u.c(),this.h()},l(e){l=G(e,"DIV",{class:!0});var a=L(l);i&&i.l(a),s=$(a),o=G(a,"LABEL",{for:!0});var v=L(o);u&&u.l(v),v.forEach(A),a.forEach(A),this.h()},h(){F(o,_),F(l,f)},m(e,a){ee(e,l,a),i&&i.m(l,null),j(l,s),j(l,o),u&&u.m(o,null),n[14](o),n[15](l),r=!0,h||(E=[U(m=z.call(null,o,n[5])),U(b=z.call(null,l,n[0])),U(n[9].call(null,l)),B(l,"SMUIGenericInput:mount",n[16]),B(l,"SMUIGenericInput:unmount",n[17])],h=!0)},p(e,[a]){i&&i.p&&(!r||a&4096)&&C(i,I,e,e[12],r?D(I,e[12],a,null):k(e[12]),null),u&&u.p&&(!r||a&4096)&&C(u,g,e,e[12],r?D(g,e[12],a,oe):k(e[12]),T),F(o,_=H(c,[(!r||a&16)&&{for:e[4]},a&1024&&J(e[10],"label$")])),m&&N(m.update)&&a&32&&m.update.call(null,e[5]),F(l,f=H(d,[(!r||a&14&&p!==(p=V({[e[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":e[2]==="end","mdc-form-field--nowrap":e[3]})))&&{class:p},a&1024&&Q(e[10],["label$"])])),b&&N(b.update)&&a&1&&b.update.call(null,e[0])},i(e){r||(P(i,e),P(u,e),r=!0)},o(e){q(i,e),q(u,e),r=!1},d(e){e&&A(l),i&&i.d(e),u&&u.d(e),n[14](null),n[15](null),h=!1,le(E)}}}let fe=0;function de(n,l,s){const o=["use","class","align","noWrap","inputId","label$use","getElement"];let m=K(l,o),{$$slots:p={},$$scope:b}=l;const r=ue(te());let{use:h=[]}=l,{class:E=""}=l,{align:I="start"}=l,{noWrap:i=!1}=l,{inputId:g="SMUI-form-field-"+fe++}=l,{label$use:u=[]}=l,c,_,d,f;ne("SMUI:generic:input:props",{id:g}),ae(()=>(_=new se({activateInputRipple:()=>{f&&f.activateRipple()},deactivateInputRipple:()=>{f&&f.deactivateRipple()},deregisterInteractionHandler:(t,S)=>{d.removeEventListener(t,S)},registerInteractionHandler:(t,S)=>{d.addEventListener(t,S)}}),_.init(),()=>{_.destroy()}));function e(){return c}function a(t){O[t?"unshift":"push"](()=>{d=t,s(7,d)})}function v(t){O[t?"unshift":"push"](()=>{c=t,s(6,c)})}const X=t=>s(8,f=t.detail),Y=()=>s(8,f=void 0);return n.$$set=t=>{l=M(M({},l),ie(t)),s(10,m=K(l,o)),"use"in t&&s(0,h=t.use),"class"in t&&s(1,E=t.class),"align"in t&&s(2,I=t.align),"noWrap"in t&&s(3,i=t.noWrap),"inputId"in t&&s(4,g=t.inputId),"label$use"in t&&s(5,u=t.label$use),"$$scope"in t&&s(12,b=t.$$scope)},[h,E,I,i,g,u,c,d,f,r,m,e,b,p,a,v,X,Y]}class be extends Z{constructor(l){super();y(this,l,de,re,w,{use:0,class:1,align:2,noWrap:3,inputId:4,label$use:5,getElement:11})}get getElement(){return this.$$.ctx[11]}}export{be as F};
