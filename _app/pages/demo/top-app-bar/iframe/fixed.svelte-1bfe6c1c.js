import{S,i as F,s as L,j as p,k as d,m as i,n as w,o as c,f as l,x as m,u as _,v as g,d as u,e as R,c as T,b as I,aN as q,az as h,I as P,t as k,g as j}from"../../../../chunks/vendor-23f55e93.js";import{T as z,A as C,R as D,S as x,a as G}from"../../../../chunks/index-100d545a.js";import{I as A}from"../../../../chunks/IconButton-8234672c.js";import{L as M}from"../../../../chunks/LoremIpsum-81114b6e.js";import"../../../../chunks/useActions-c024ab52.js";import"../../../../chunks/Ripple-460512c3.js";function N(o){let t;return{c(){t=k("menu")},l(n){t=j(n,"menu")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function E(o){let t;return{c(){t=k("Fixed")},l(n){t=j(n,"Fixed")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function H(o){let t,n,e,r;return t=new A({props:{class:"material-icons",$$slots:{default:[N]},$$scope:{ctx:o}}}),e=new G({props:{$$slots:{default:[E]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),n=d(),p(e.$$.fragment)},l(s){i(t.$$.fragment,s),n=w(s),i(e.$$.fragment,s)},m(s,a){c(t,s,a),l(s,n,a),c(e,s,a),r=!0},p(s,a){const $={};a&4&&($.$$scope={dirty:a,ctx:s}),t.$set($);const f={};a&4&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(s){r||(m(t.$$.fragment,s),m(e.$$.fragment,s),r=!0)},o(s){_(t.$$.fragment,s),_(e.$$.fragment,s),r=!1},d(s){g(t,s),s&&u(n),g(e,s)}}}function J(o){let t;return{c(){t=k("file_download")},l(n){t=j(n,"file_download")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function K(o){let t;return{c(){t=k("print")},l(n){t=j(n,"print")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function O(o){let t;return{c(){t=k("bookmark")},l(n){t=j(n,"bookmark")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function Q(o){let t,n,e,r,s,a;return t=new A({props:{class:"material-icons","aria-label":"Download",$$slots:{default:[J]},$$scope:{ctx:o}}}),e=new A({props:{class:"material-icons","aria-label":"Print this page",$$slots:{default:[K]},$$scope:{ctx:o}}}),s=new A({props:{class:"material-icons","aria-label":"Bookmark this page",$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),n=d(),p(e.$$.fragment),r=d(),p(s.$$.fragment)},l($){i(t.$$.fragment,$),n=w($),i(e.$$.fragment,$),r=w($),i(s.$$.fragment,$)},m($,f){c(t,$,f),l($,n,f),c(e,$,f),l($,r,f),c(s,$,f),a=!0},p($,f){const b={};f&4&&(b.$$scope={dirty:f,ctx:$}),t.$set(b);const v={};f&4&&(v.$$scope={dirty:f,ctx:$}),e.$set(v);const B={};f&4&&(B.$$scope={dirty:f,ctx:$}),s.$set(B)},i($){a||(m(t.$$.fragment,$),m(e.$$.fragment,$),m(s.$$.fragment,$),a=!0)},o($){_(t.$$.fragment,$),_(e.$$.fragment,$),_(s.$$.fragment,$),a=!1},d($){g(t,$),$&&u(n),g(e,$),$&&u(r),g(s,$)}}}function U(o){let t,n,e,r;return t=new x({props:{$$slots:{default:[H]},$$scope:{ctx:o}}}),e=new x({props:{align:"end",toolbar:!0,$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),n=d(),p(e.$$.fragment)},l(s){i(t.$$.fragment,s),n=w(s),i(e.$$.fragment,s)},m(s,a){c(t,s,a),l(s,n,a),c(e,s,a),r=!0},p(s,a){const $={};a&4&&($.$$scope={dirty:a,ctx:s}),t.$set($);const f={};a&4&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(s){r||(m(t.$$.fragment,s),m(e.$$.fragment,s),r=!0)},o(s){_(t.$$.fragment,s),_(e.$$.fragment,s),r=!1},d(s){g(t,s),s&&u(n),g(e,s)}}}function V(o){let t,n;return t=new D({props:{$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment)},l(e){i(t.$$.fragment,e)},m(e,r){c(t,e,r),n=!0},p(e,r){const s={};r&4&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function W(o){let t,n,e,r,s;return t=new M({}),{c(){p(t.$$.fragment),n=d(),e=R("img"),this.h()},l(a){i(t.$$.fragment,a),n=w(a),e=T(a,"IMG",{alt:!0,src:!0,style:!0}),this.h()},h(){I(e,"alt","Page content placeholder"),q(e.src,r="/page-content.jpg")||I(e,"src",r),h(e,"display","block"),h(e,"max-width","100%"),h(e,"height","auto"),h(e,"margin","1em auto")},m(a,$){c(t,a,$),l(a,n,$),l(a,e,$),s=!0},i(a){s||(m(t.$$.fragment,a),s=!0)},o(a){_(t.$$.fragment,a),s=!1},d(a){g(t,a),a&&u(n),a&&u(e)}}}function X(o){let t,n,e,r,s={variant:"fixed",$$slots:{default:[V]},$$scope:{ctx:o}};return t=new z({props:s}),o[1](t),e=new C({props:{topAppBar:o[0],$$slots:{default:[W]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),n=d(),p(e.$$.fragment)},l(a){i(t.$$.fragment,a),n=w(a),i(e.$$.fragment,a)},m(a,$){c(t,a,$),l(a,n,$),c(e,a,$),r=!0},p(a,[$]){const f={};$&4&&(f.$$scope={dirty:$,ctx:a}),t.$set(f);const b={};$&1&&(b.topAppBar=a[0]),$&4&&(b.$$scope={dirty:$,ctx:a}),e.$set(b)},i(a){r||(m(t.$$.fragment,a),m(e.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),_(e.$$.fragment,a),r=!1},d(a){o[1](null),g(t,a),a&&u(n),g(e,a)}}}function Y(o,t,n){let e;function r(s){P[s?"unshift":"push"](()=>{e=s,n(0,e)})}return[e,r]}class at extends S{constructor(t){super();F(this,t,Y,X,L,{})}}export{at as default};
