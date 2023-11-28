(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();function Qs(c,e){const t=Object.create(null),s=c.split(",");for(let a=0;a<s.length;a++)t[s[a]]=!0;return e?a=>!!t[a.toLowerCase()]:a=>!!t[a]}function Xs(c){if(M2(c)){const e={};for(let t=0;t<c.length;t++){const s=c[t],a=Q1(s)?PV(s):Xs(s);if(a)for(const n in a)e[n]=a[n]}return e}else{if(Q1(c))return c;if(b1(c))return c}}const _V=/;(?![^(]*\))/g,EV=/:([^]+)/,TV=/\/\*.*?\*\//gs;function PV(c){const e={};return c.replace(TV,"").split(_V).forEach(t=>{if(t){const s=t.split(EV);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Js(c){let e="";if(Q1(c))e=c;else if(M2(c))for(let t=0;t<c.length;t++){const s=Js(c[t]);s&&(e+=s+" ")}else if(b1(c))for(const t in c)c[t]&&(e+=t+" ");return e.trim()}const IV="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",OV=Qs(IV);function M9(c){return!!c||c===""}function DV(c,e){if(c.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<c.length;s++)t=Ot(c[s],e[s]);return t}function Ot(c,e){if(c===e)return!0;let t=Or(c),s=Or(e);if(t||s)return t&&s?c.getTime()===e.getTime():!1;if(t=J0(c),s=J0(e),t||s)return c===e;if(t=M2(c),s=M2(e),t||s)return t&&s?DV(c,e):!1;if(t=b1(c),s=b1(e),t||s){if(!t||!s)return!1;const a=Object.keys(c).length,n=Object.keys(e).length;if(a!==n)return!1;for(const r in c){const i=c.hasOwnProperty(r),o=e.hasOwnProperty(r);if(i&&!o||!i&&o||!Ot(c[r],e[r]))return!1}}return String(c)===String(e)}function RV(c,e){return c.findIndex(t=>Ot(t,e))}const j1=c=>Q1(c)?c:c==null?"":M2(c)||b1(c)&&(c.toString===b9||!_2(c.toString))?JSON.stringify(c,C9,2):String(c),C9=(c,e)=>e&&e.__v_isRef?C9(c,e.value):Oe(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,a])=>(t[`${s} =>`]=a,t),{})}:Rt(e)?{[`Set(${e.size})`]:[...e.values()]}:b1(e)&&!M2(e)&&!L9(e)?String(e):e,x1={},Ie=[],o3=()=>{},FV=()=>!1,BV=/^on[^a-z]/,Dt=c=>BV.test(c),Zs=c=>c.startsWith("onUpdate:"),S4=Object.assign,ea=(c,e)=>{const t=c.indexOf(e);t>-1&&c.splice(t,1)},UV=Object.prototype.hasOwnProperty,Y2=(c,e)=>UV.call(c,e),M2=Array.isArray,Oe=c=>L8(c)==="[object Map]",Rt=c=>L8(c)==="[object Set]",Or=c=>L8(c)==="[object Date]",_2=c=>typeof c=="function",Q1=c=>typeof c=="string",J0=c=>typeof c=="symbol",b1=c=>c!==null&&typeof c=="object",y9=c=>b1(c)&&_2(c.then)&&_2(c.catch),b9=Object.prototype.toString,L8=c=>b9.call(c),jV=c=>L8(c).slice(8,-1),L9=c=>L8(c)==="[object Object]",ca=c=>Q1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,qc=Qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ft=c=>{const e=Object.create(null);return t=>e[t]||(e[t]=c(t))},$V=/-(\w)/g,V3=Ft(c=>c.replace($V,(e,t)=>t?t.toUpperCase():"")),qV=/\B([A-Z])/g,i0=Ft(c=>c.replace(qV,"-$1").toLowerCase()),Bt=Ft(c=>c.charAt(0).toUpperCase()+c.slice(1)),h7=Ft(c=>c?`on${Bt(c)}`:""),Z0=(c,e)=>!Object.is(c,e),Wc=(c,e)=>{for(let t=0;t<c.length;t++)c[t](e)},st=(c,e,t)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:t})},e8=c=>{const e=parseFloat(c);return isNaN(e)?c:e};let Dr;const WV=()=>Dr||(Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let O4;class w9{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=O4,!e&&O4&&(this.index=(O4.scopes||(O4.scopes=[])).push(this)-1)}run(e){if(this.active){const t=O4;try{return O4=this,e()}finally{O4=t}}}on(){O4=this}off(){O4=this.parent}stop(e){if(this.active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function x9(c){return new w9(c)}function GV(c,e=O4){e&&e.active&&e.effects.push(c)}function KV(){return O4}function YV(c){O4&&O4.cleanups.push(c)}const ta=c=>{const e=new Set(c);return e.w=0,e.n=0,e},S9=c=>(c.w&v6)>0,k9=c=>(c.n&v6)>0,QV=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=v6},XV=c=>{const{deps:e}=c;if(e.length){let t=0;for(let s=0;s<e.length;s++){const a=e[s];S9(a)&&!k9(a)?a.delete(c):e[t++]=a,a.w&=~v6,a.n&=~v6}e.length=t}},U7=new WeakMap;let E0=0,v6=1;const j7=30;let s3;const X6=Symbol(""),$7=Symbol("");class sa{constructor(e,t=null,s){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,GV(this,s)}run(){if(!this.active)return this.fn();let e=s3,t=o6;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=s3,s3=this,o6=!0,v6=1<<++E0,E0<=j7?QV(this):Rr(this),this.fn()}finally{E0<=j7&&XV(this),v6=1<<--E0,s3=this.parent,o6=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){s3===this?this.deferStop=!0:this.active&&(Rr(this),this.onStop&&this.onStop(),this.active=!1)}}function Rr(c){const{deps:e}=c;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(c);e.length=0}}let o6=!0;const N9=[];function o0(){N9.push(o6),o6=!1}function l0(){const c=N9.pop();o6=c===void 0?!0:c}function B4(c,e,t){if(o6&&s3){let s=U7.get(c);s||U7.set(c,s=new Map);let a=s.get(t);a||s.set(t,a=ta()),A9(a)}}function A9(c,e){let t=!1;E0<=j7?k9(c)||(c.n|=v6,t=!S9(c)):t=!c.has(s3),t&&(c.add(s3),s3.deps.push(c))}function T3(c,e,t,s,a,n){const r=U7.get(c);if(!r)return;let i=[];if(e==="clear")i=[...r.values()];else if(t==="length"&&M2(c)){const o=e8(s);r.forEach((f,d)=>{(d==="length"||d>=o)&&i.push(f)})}else switch(t!==void 0&&i.push(r.get(t)),e){case"add":M2(c)?ca(t)&&i.push(r.get("length")):(i.push(r.get(X6)),Oe(c)&&i.push(r.get($7)));break;case"delete":M2(c)||(i.push(r.get(X6)),Oe(c)&&i.push(r.get($7)));break;case"set":Oe(c)&&i.push(r.get(X6));break}if(i.length===1)i[0]&&q7(i[0]);else{const o=[];for(const f of i)f&&o.push(...f);q7(ta(o))}}function q7(c,e){const t=M2(c)?c:[...c];for(const s of t)s.computed&&Fr(s);for(const s of t)s.computed||Fr(s)}function Fr(c,e){(c!==s3||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const JV=Qs("__proto__,__v_isRef,__isVue"),_9=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(J0)),ZV=aa(),eM=aa(!1,!0),cM=aa(!0),Br=tM();function tM(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...t){const s=t1(this);for(let n=0,r=this.length;n<r;n++)B4(s,"get",n+"");const a=s[e](...t);return a===-1||a===!1?s[e](...t.map(t1)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...t){o0();const s=t1(this)[e].apply(this,t);return l0(),s}}),c}function aa(c=!1,e=!1){return function(s,a,n){if(a==="__v_isReactive")return!c;if(a==="__v_isReadonly")return c;if(a==="__v_isShallow")return e;if(a==="__v_raw"&&n===(c?e?HM:O9:e?I9:P9).get(s))return s;const r=M2(s);if(!c&&r&&Y2(Br,a))return Reflect.get(Br,a,n);const i=Reflect.get(s,a,n);return(J0(a)?_9.has(a):JV(a))||(c||B4(s,"get",a),e)?i:$1(i)?r&&ca(a)?i:i.value:b1(i)?c?D9(i):f0(i):i}}const sM=E9(),aM=E9(!0);function E9(c=!1){return function(t,s,a,n){let r=t[s];if(qe(r)&&$1(r)&&!$1(a))return!1;if(!c&&(!at(a)&&!qe(a)&&(r=t1(r),a=t1(a)),!M2(t)&&$1(r)&&!$1(a)))return r.value=a,!0;const i=M2(t)&&ca(s)?Number(s)<t.length:Y2(t,s),o=Reflect.set(t,s,a,n);return t===t1(n)&&(i?Z0(a,r)&&T3(t,"set",s,a):T3(t,"add",s,a)),o}}function nM(c,e){const t=Y2(c,e);c[e];const s=Reflect.deleteProperty(c,e);return s&&t&&T3(c,"delete",e,void 0),s}function rM(c,e){const t=Reflect.has(c,e);return(!J0(e)||!_9.has(e))&&B4(c,"has",e),t}function iM(c){return B4(c,"iterate",M2(c)?"length":X6),Reflect.ownKeys(c)}const T9={get:ZV,set:sM,deleteProperty:nM,has:rM,ownKeys:iM},oM={get:cM,set(c,e){return!0},deleteProperty(c,e){return!0}},lM=S4({},T9,{get:eM,set:aM}),na=c=>c,Ut=c=>Reflect.getPrototypeOf(c);function Cc(c,e,t=!1,s=!1){c=c.__v_raw;const a=t1(c),n=t1(e);t||(e!==n&&B4(a,"get",e),B4(a,"get",n));const{has:r}=Ut(a),i=s?na:t?oa:c8;if(r.call(a,e))return i(c.get(e));if(r.call(a,n))return i(c.get(n));c!==a&&c.get(e)}function yc(c,e=!1){const t=this.__v_raw,s=t1(t),a=t1(c);return e||(c!==a&&B4(s,"has",c),B4(s,"has",a)),c===a?t.has(c):t.has(c)||t.has(a)}function bc(c,e=!1){return c=c.__v_raw,!e&&B4(t1(c),"iterate",X6),Reflect.get(c,"size",c)}function Ur(c){c=t1(c);const e=t1(this);return Ut(e).has.call(e,c)||(e.add(c),T3(e,"add",c,c)),this}function jr(c,e){e=t1(e);const t=t1(this),{has:s,get:a}=Ut(t);let n=s.call(t,c);n||(c=t1(c),n=s.call(t,c));const r=a.call(t,c);return t.set(c,e),n?Z0(e,r)&&T3(t,"set",c,e):T3(t,"add",c,e),this}function $r(c){const e=t1(this),{has:t,get:s}=Ut(e);let a=t.call(e,c);a||(c=t1(c),a=t.call(e,c)),s&&s.call(e,c);const n=e.delete(c);return a&&T3(e,"delete",c,void 0),n}function qr(){const c=t1(this),e=c.size!==0,t=c.clear();return e&&T3(c,"clear",void 0,void 0),t}function Lc(c,e){return function(s,a){const n=this,r=n.__v_raw,i=t1(r),o=e?na:c?oa:c8;return!c&&B4(i,"iterate",X6),r.forEach((f,d)=>s.call(a,o(f),o(d),n))}}function wc(c,e,t){return function(...s){const a=this.__v_raw,n=t1(a),r=Oe(n),i=c==="entries"||c===Symbol.iterator&&r,o=c==="keys"&&r,f=a[c](...s),d=t?na:e?oa:c8;return!e&&B4(n,"iterate",o?$7:X6),{next(){const{value:p,done:v}=f.next();return v?{value:p,done:v}:{value:i?[d(p[0]),d(p[1])]:d(p),done:v}},[Symbol.iterator](){return this}}}}function t6(c){return function(...e){return c==="delete"?!1:this}}function fM(){const c={get(n){return Cc(this,n)},get size(){return bc(this)},has:yc,add:Ur,set:jr,delete:$r,clear:qr,forEach:Lc(!1,!1)},e={get(n){return Cc(this,n,!1,!0)},get size(){return bc(this)},has:yc,add:Ur,set:jr,delete:$r,clear:qr,forEach:Lc(!1,!0)},t={get(n){return Cc(this,n,!0)},get size(){return bc(this,!0)},has(n){return yc.call(this,n,!0)},add:t6("add"),set:t6("set"),delete:t6("delete"),clear:t6("clear"),forEach:Lc(!0,!1)},s={get(n){return Cc(this,n,!0,!0)},get size(){return bc(this,!0)},has(n){return yc.call(this,n,!0)},add:t6("add"),set:t6("set"),delete:t6("delete"),clear:t6("clear"),forEach:Lc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=wc(n,!1,!1),t[n]=wc(n,!0,!1),e[n]=wc(n,!1,!0),s[n]=wc(n,!0,!0)}),[c,t,e,s]}const[uM,hM,dM,mM]=fM();function ra(c,e){const t=e?c?mM:dM:c?hM:uM;return(s,a,n)=>a==="__v_isReactive"?!c:a==="__v_isReadonly"?c:a==="__v_raw"?s:Reflect.get(Y2(t,a)&&a in s?t:s,a,n)}const pM={get:ra(!1,!1)},vM={get:ra(!1,!0)},gM={get:ra(!0,!1)},P9=new WeakMap,I9=new WeakMap,O9=new WeakMap,HM=new WeakMap;function zM(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function VM(c){return c.__v_skip||!Object.isExtensible(c)?0:zM(jV(c))}function f0(c){return qe(c)?c:ia(c,!1,T9,pM,P9)}function MM(c){return ia(c,!1,lM,vM,I9)}function D9(c){return ia(c,!0,oM,gM,O9)}function ia(c,e,t,s,a){if(!b1(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const n=a.get(c);if(n)return n;const r=VM(c);if(r===0)return c;const i=new Proxy(c,r===2?s:t);return a.set(c,i),i}function l6(c){return qe(c)?l6(c.__v_raw):!!(c&&c.__v_isReactive)}function qe(c){return!!(c&&c.__v_isReadonly)}function at(c){return!!(c&&c.__v_isShallow)}function R9(c){return l6(c)||qe(c)}function t1(c){const e=c&&c.__v_raw;return e?t1(e):c}function We(c){return st(c,"__v_skip",!0),c}const c8=c=>b1(c)?f0(c):c,oa=c=>b1(c)?D9(c):c;function F9(c){o6&&s3&&(c=t1(c),A9(c.dep||(c.dep=ta())))}function B9(c,e){c=t1(c),c.dep&&q7(c.dep)}function $1(c){return!!(c&&c.__v_isRef===!0)}function la(c){return U9(c,!1)}function CM(c){return U9(c,!0)}function U9(c,e){return $1(c)?c:new yM(c,e)}class yM{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:t1(e),this._value=t?e:c8(e)}get value(){return F9(this),this._value}set value(e){const t=this.__v_isShallow||at(e)||qe(e);e=t?e:t1(e),Z0(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:c8(e),B9(this))}}function De(c){return $1(c)?c.value:c}const bM={get:(c,e,t)=>De(Reflect.get(c,e,t)),set:(c,e,t,s)=>{const a=c[e];return $1(a)&&!$1(t)?(a.value=t,!0):Reflect.set(c,e,t,s)}};function j9(c){return l6(c)?c:new Proxy(c,bM)}function LM(c){const e=M2(c)?new Array(c.length):{};for(const t in c)e[t]=xM(c,t);return e}class wM{constructor(e,t,s){this._object=e,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function xM(c,e,t){const s=c[e];return $1(s)?s:new wM(c,e,t)}var $9;class SM{constructor(e,t,s,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[$9]=!1,this._dirty=!0,this.effect=new sa(e,()=>{this._dirty||(this._dirty=!0,B9(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=s}get value(){const e=t1(this);return F9(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}$9="__v_isReadonly";function kM(c,e,t=!1){let s,a;const n=_2(c);return n?(s=c,a=o3):(s=c.get,a=c.set),new SM(s,a,n||!a,t)}function f6(c,e,t,s){let a;try{a=s?c(...s):c()}catch(n){jt(n,e,t)}return a}function l3(c,e,t,s){if(_2(c)){const n=f6(c,e,t,s);return n&&y9(n)&&n.catch(r=>{jt(r,e,t)}),n}const a=[];for(let n=0;n<c.length;n++)a.push(l3(c[n],e,t,s));return a}function jt(c,e,t,s=!0){const a=e?e.vnode:null;if(e){let n=e.parent;const r=e.proxy,i=t;for(;n;){const f=n.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](c,r,i)===!1)return}n=n.parent}const o=e.appContext.config.errorHandler;if(o){f6(o,null,10,[c,r,i]);return}}NM(c,t,a,s)}function NM(c,e,t,s=!0){console.error(c)}let t8=!1,W7=!1;const p4=[];let v3=0;const Re=[];let N3=null,B6=0;const q9=Promise.resolve();let fa=null;function ua(c){const e=fa||q9;return c?e.then(this?c.bind(this):c):e}function AM(c){let e=v3+1,t=p4.length;for(;e<t;){const s=e+t>>>1;s8(p4[s])<c?e=s+1:t=s}return e}function ha(c){(!p4.length||!p4.includes(c,t8&&c.allowRecurse?v3+1:v3))&&(c.id==null?p4.push(c):p4.splice(AM(c.id),0,c),W9())}function W9(){!t8&&!W7&&(W7=!0,fa=q9.then(K9))}function _M(c){const e=p4.indexOf(c);e>v3&&p4.splice(e,1)}function EM(c){M2(c)?Re.push(...c):(!N3||!N3.includes(c,c.allowRecurse?B6+1:B6))&&Re.push(c),W9()}function Wr(c,e=t8?v3+1:0){for(;e<p4.length;e++){const t=p4[e];t&&t.pre&&(p4.splice(e,1),e--,t())}}function G9(c){if(Re.length){const e=[...new Set(Re)];if(Re.length=0,N3){N3.push(...e);return}for(N3=e,N3.sort((t,s)=>s8(t)-s8(s)),B6=0;B6<N3.length;B6++)N3[B6]();N3=null,B6=0}}const s8=c=>c.id==null?1/0:c.id,TM=(c,e)=>{const t=s8(c)-s8(e);if(t===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return t};function K9(c){W7=!1,t8=!0,p4.sort(TM);const e=o3;try{for(v3=0;v3<p4.length;v3++){const t=p4[v3];t&&t.active!==!1&&f6(t,null,14)}}finally{v3=0,p4.length=0,G9(),t8=!1,fa=null,(p4.length||Re.length)&&K9()}}function PM(c,e,...t){if(c.isUnmounted)return;const s=c.vnode.props||x1;let a=t;const n=e.startsWith("update:"),r=n&&e.slice(7);if(r&&r in s){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:p,trim:v}=s[d]||x1;v&&(a=t.map(M=>Q1(M)?M.trim():M)),p&&(a=t.map(e8))}let i,o=s[i=h7(e)]||s[i=h7(V3(e))];!o&&n&&(o=s[i=h7(i0(e))]),o&&l3(o,c,6,a);const f=s[i+"Once"];if(f){if(!c.emitted)c.emitted={};else if(c.emitted[i])return;c.emitted[i]=!0,l3(f,c,6,a)}}function Y9(c,e,t=!1){const s=e.emitsCache,a=s.get(c);if(a!==void 0)return a;const n=c.emits;let r={},i=!1;if(!_2(c)){const o=f=>{const d=Y9(f,e,!0);d&&(i=!0,S4(r,d))};!t&&e.mixins.length&&e.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!n&&!i?(b1(c)&&s.set(c,null),null):(M2(n)?n.forEach(o=>r[o]=null):S4(r,n),b1(c)&&s.set(c,r),r)}function $t(c,e){return!c||!Dt(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y2(c,e[0].toLowerCase()+e.slice(1))||Y2(c,i0(e))||Y2(c,e))}let D4=null,Q9=null;function nt(c){const e=D4;return D4=c,Q9=c&&c.type.__scopeId||null,e}function R2(c,e=D4,t){if(!e||c._n)return c;const s=(...a)=>{s._d&&ci(-1);const n=nt(e);let r;try{r=c(...a)}finally{nt(n),s._d&&ci(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function d7(c){const{type:e,vnode:t,proxy:s,withProxy:a,props:n,propsOptions:[r],slots:i,attrs:o,emit:f,render:d,renderCache:p,data:v,setupState:M,ctx:L,inheritAttrs:S}=c;let P,w;const N=nt(c);try{if(t.shapeFlag&4){const c2=a||s;P=p3(d.call(c2,c2,p,n,M,v,L)),w=o}else{const c2=e;P=p3(c2.length>1?c2(n,{attrs:o,slots:i,emit:f}):c2(n,null)),w=e.props?o:IM(o)}}catch(c2){R0.length=0,jt(c2,c,1),P=o2(ce)}let B=P;if(w&&S!==!1){const c2=Object.keys(w),{shapeFlag:n2}=B;c2.length&&n2&7&&(r&&c2.some(Zs)&&(w=OM(w,r)),B=Ge(B,w))}return t.dirs&&(B=Ge(B),B.dirs=B.dirs?B.dirs.concat(t.dirs):t.dirs),t.transition&&(B.transition=t.transition),P=B,nt(N),P}const IM=c=>{let e;for(const t in c)(t==="class"||t==="style"||Dt(t))&&((e||(e={}))[t]=c[t]);return e},OM=(c,e)=>{const t={};for(const s in c)(!Zs(s)||!(s.slice(9)in e))&&(t[s]=c[s]);return t};function DM(c,e,t){const{props:s,children:a,component:n}=c,{props:r,children:i,patchFlag:o}=e,f=n.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return s?Gr(s,r,f):!!r;if(o&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const v=d[p];if(r[v]!==s[v]&&!$t(f,v))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:s===r?!1:s?r?Gr(s,r,f):!0:!!r;return!1}function Gr(c,e,t){const s=Object.keys(e);if(s.length!==Object.keys(c).length)return!0;for(let a=0;a<s.length;a++){const n=s[a];if(e[n]!==c[n]&&!$t(t,n))return!0}return!1}function RM({vnode:c,parent:e},t){for(;e&&e.subTree===c;)(c=e.vnode).el=t,e=e.parent}const FM=c=>c.__isSuspense;function BM(c,e){e&&e.pendingBranch?M2(c)?e.effects.push(...c):e.effects.push(c):EM(c)}function Gc(c,e){if(n4){let t=n4.provides;const s=n4.parent&&n4.parent.provides;s===t&&(t=n4.provides=Object.create(s)),t[c]=e}}function z3(c,e,t=!1){const s=n4||D4;if(s){const a=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(a&&c in a)return a[c];if(arguments.length>1)return t&&_2(e)?e.call(s.proxy):e}}const xc={};function Fe(c,e,t){return X9(c,e,t)}function X9(c,e,{immediate:t,deep:s,flush:a,onTrack:n,onTrigger:r}=x1){const i=n4;let o,f=!1,d=!1;if($1(c)?(o=()=>c.value,f=at(c)):l6(c)?(o=()=>c,s=!0):M2(c)?(d=!0,f=c.some(B=>l6(B)||at(B)),o=()=>c.map(B=>{if($1(B))return B.value;if(l6(B))return $6(B);if(_2(B))return f6(B,i,2)})):_2(c)?e?o=()=>f6(c,i,2):o=()=>{if(!(i&&i.isUnmounted))return p&&p(),l3(c,i,3,[v])}:o=o3,e&&s){const B=o;o=()=>$6(B())}let p,v=B=>{p=w.onStop=()=>{f6(B,i,4)}},M;if(n8)if(v=o3,e?t&&l3(e,i,3,[o(),d?[]:void 0,v]):o(),a==="sync"){const B=TC();M=B.__watcherHandles||(B.__watcherHandles=[])}else return o3;let L=d?new Array(c.length).fill(xc):xc;const S=()=>{if(!!w.active)if(e){const B=w.run();(s||f||(d?B.some((c2,n2)=>Z0(c2,L[n2])):Z0(B,L)))&&(p&&p(),l3(e,i,3,[B,L===xc?void 0:d&&L[0]===xc?[]:L,v]),L=B)}else w.run()};S.allowRecurse=!!e;let P;a==="sync"?P=S:a==="post"?P=()=>T4(S,i&&i.suspense):(S.pre=!0,i&&(S.id=i.uid),P=()=>ha(S));const w=new sa(o,P);e?t?S():L=w.run():a==="post"?T4(w.run.bind(w),i&&i.suspense):w.run();const N=()=>{w.stop(),i&&i.scope&&ea(i.scope.effects,w)};return M&&M.push(N),N}function UM(c,e,t){const s=this.proxy,a=Q1(c)?c.includes(".")?J9(s,c):()=>s[c]:c.bind(s,s);let n;_2(e)?n=e:(n=e.handler,t=e);const r=n4;Ke(this);const i=X9(a,n.bind(s),t);return r?Ke(r):J6(),i}function J9(c,e){const t=e.split(".");return()=>{let s=c;for(let a=0;a<t.length&&s;a++)s=s[t[a]];return s}}function $6(c,e){if(!b1(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),$1(c))$6(c.value,e);else if(M2(c))for(let t=0;t<c.length;t++)$6(c[t],e);else if(Rt(c)||Oe(c))c.forEach(t=>{$6(t,e)});else if(L9(c))for(const t in c)$6(c[t],e);return c}function w8(c){return _2(c)?{setup:c,name:c.name}:c}const Kc=c=>!!c.type.__asyncLoader,Z9=c=>c.type.__isKeepAlive;function jM(c,e){el(c,"a",e)}function $M(c,e){el(c,"da",e)}function el(c,e,t=n4){const s=c.__wdc||(c.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return c()});if(qt(e,s,t),t){let a=t.parent;for(;a&&a.parent;)Z9(a.parent.vnode)&&qM(s,e,t,a),a=a.parent}}function qM(c,e,t,s){const a=qt(e,c,s,!0);cl(()=>{ea(s[e],a)},t)}function qt(c,e,t=n4,s=!1){if(t){const a=t[c]||(t[c]=[]),n=e.__weh||(e.__weh=(...r)=>{if(t.isUnmounted)return;o0(),Ke(t);const i=l3(e,t,c,r);return J6(),l0(),i});return s?a.unshift(n):a.push(n),n}}const j3=c=>(e,t=n4)=>(!n8||c==="sp")&&qt(c,(...s)=>e(...s),t),WM=j3("bm"),GM=j3("m"),KM=j3("bu"),YM=j3("u"),QM=j3("bum"),cl=j3("um"),XM=j3("sp"),JM=j3("rtg"),ZM=j3("rtc");function eC(c,e=n4){qt("ec",c,e)}function I6(c,e){const t=D4;if(t===null)return c;const s=Kt(t)||t.proxy,a=c.dirs||(c.dirs=[]);for(let n=0;n<e.length;n++){let[r,i,o,f=x1]=e[n];r&&(_2(r)&&(r={mounted:r,updated:r}),r.deep&&$6(i),a.push({dir:r,instance:s,value:i,oldValue:void 0,arg:o,modifiers:f}))}return c}function O6(c,e,t,s){const a=c.dirs,n=e&&e.dirs;for(let r=0;r<a.length;r++){const i=a[r];n&&(i.oldValue=n[r].value);let o=i.dir[s];o&&(o0(),l3(o,t,8,[c.el,i,c,e]),l0())}}const da="components";function z4(c,e){return sl(da,c,!0,e)||c}const tl=Symbol();function cC(c){return Q1(c)?sl(da,c,!1)||c:c||tl}function sl(c,e,t=!0,s=!1){const a=D4||n4;if(a){const n=a.type;if(c===da){const i=AC(n,!1);if(i&&(i===e||i===V3(e)||i===Bt(V3(e))))return n}const r=Kr(a[c]||n[c],e)||Kr(a.appContext[c],e);return!r&&s?n:r}}function Kr(c,e){return c&&(c[e]||c[V3(e)]||c[Bt(V3(e))])}function u6(c,e,t,s){let a;const n=t&&t[s];if(M2(c)||Q1(c)){a=new Array(c.length);for(let r=0,i=c.length;r<i;r++)a[r]=e(c[r],r,void 0,n&&n[r])}else if(typeof c=="number"){a=new Array(c);for(let r=0;r<c;r++)a[r]=e(r+1,r,void 0,n&&n[r])}else if(b1(c))if(c[Symbol.iterator])a=Array.from(c,(r,i)=>e(r,i,void 0,n&&n[i]));else{const r=Object.keys(c);a=new Array(r.length);for(let i=0,o=r.length;i<o;i++){const f=r[i];a[i]=e(c[f],f,i,n&&n[i])}}else a=[];return t&&(t[s]=a),a}const G7=c=>c?pl(c)?Kt(c)||c.proxy:G7(c.parent):null,D0=S4(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>G7(c.parent),$root:c=>G7(c.root),$emit:c=>c.emit,$options:c=>ma(c),$forceUpdate:c=>c.f||(c.f=()=>ha(c.update)),$nextTick:c=>c.n||(c.n=ua.bind(c.proxy)),$watch:c=>UM.bind(c)}),m7=(c,e)=>c!==x1&&!c.__isScriptSetup&&Y2(c,e),tC={get({_:c},e){const{ctx:t,setupState:s,data:a,props:n,accessCache:r,type:i,appContext:o}=c;let f;if(e[0]!=="$"){const M=r[e];if(M!==void 0)switch(M){case 1:return s[e];case 2:return a[e];case 4:return t[e];case 3:return n[e]}else{if(m7(s,e))return r[e]=1,s[e];if(a!==x1&&Y2(a,e))return r[e]=2,a[e];if((f=c.propsOptions[0])&&Y2(f,e))return r[e]=3,n[e];if(t!==x1&&Y2(t,e))return r[e]=4,t[e];K7&&(r[e]=0)}}const d=D0[e];let p,v;if(d)return e==="$attrs"&&B4(c,"get",e),d(c);if((p=i.__cssModules)&&(p=p[e]))return p;if(t!==x1&&Y2(t,e))return r[e]=4,t[e];if(v=o.config.globalProperties,Y2(v,e))return v[e]},set({_:c},e,t){const{data:s,setupState:a,ctx:n}=c;return m7(a,e)?(a[e]=t,!0):s!==x1&&Y2(s,e)?(s[e]=t,!0):Y2(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(n[e]=t,!0)},has({_:{data:c,setupState:e,accessCache:t,ctx:s,appContext:a,propsOptions:n}},r){let i;return!!t[r]||c!==x1&&Y2(c,r)||m7(e,r)||(i=n[0])&&Y2(i,r)||Y2(s,r)||Y2(D0,r)||Y2(a.config.globalProperties,r)},defineProperty(c,e,t){return t.get!=null?c._.accessCache[e]=0:Y2(t,"value")&&this.set(c,e,t.value,null),Reflect.defineProperty(c,e,t)}};let K7=!0;function sC(c){const e=ma(c),t=c.proxy,s=c.ctx;K7=!1,e.beforeCreate&&Yr(e.beforeCreate,c,"bc");const{data:a,computed:n,methods:r,watch:i,provide:o,inject:f,created:d,beforeMount:p,mounted:v,beforeUpdate:M,updated:L,activated:S,deactivated:P,beforeDestroy:w,beforeUnmount:N,destroyed:B,unmounted:c2,render:n2,renderTracked:w2,renderTriggered:g2,errorCaptured:V2,serverPrefetch:s1,expose:A1,inheritAttrs:X1,components:D1,directives:z1,filters:u1}=e;if(f&&aC(f,s,null,c.appContext.config.unwrapInjectedRef),r)for(const G2 in r){const D2=r[G2];_2(D2)&&(s[G2]=D2.bind(t))}if(a){const G2=a.call(t,t);b1(G2)&&(c.data=f0(G2))}if(K7=!0,n)for(const G2 in n){const D2=n[G2],R1=_2(D2)?D2.bind(t,t):_2(D2.get)?D2.get.bind(t,t):o3,L1=!_2(D2)&&_2(D2.set)?D2.set.bind(t):o3,q1=E1({get:R1,set:L1});Object.defineProperty(s,G2,{enumerable:!0,configurable:!0,get:()=>q1.value,set:a1=>q1.value=a1})}if(i)for(const G2 in i)al(i[G2],s,t,G2);if(o){const G2=_2(o)?o.call(t):o;Reflect.ownKeys(G2).forEach(D2=>{Gc(D2,G2[D2])})}d&&Yr(d,c,"c");function O2(G2,D2){M2(D2)?D2.forEach(R1=>G2(R1.bind(t))):D2&&G2(D2.bind(t))}if(O2(WM,p),O2(GM,v),O2(KM,M),O2(YM,L),O2(jM,S),O2($M,P),O2(eC,V2),O2(ZM,w2),O2(JM,g2),O2(QM,N),O2(cl,c2),O2(XM,s1),M2(A1))if(A1.length){const G2=c.exposed||(c.exposed={});A1.forEach(D2=>{Object.defineProperty(G2,D2,{get:()=>t[D2],set:R1=>t[D2]=R1})})}else c.exposed||(c.exposed={});n2&&c.render===o3&&(c.render=n2),X1!=null&&(c.inheritAttrs=X1),D1&&(c.components=D1),z1&&(c.directives=z1)}function aC(c,e,t=o3,s=!1){M2(c)&&(c=Y7(c));for(const a in c){const n=c[a];let r;b1(n)?"default"in n?r=z3(n.from||a,n.default,!0):r=z3(n.from||a):r=z3(n),$1(r)&&s?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):e[a]=r}}function Yr(c,e,t){l3(M2(c)?c.map(s=>s.bind(e.proxy)):c.bind(e.proxy),e,t)}function al(c,e,t,s){const a=s.includes(".")?J9(t,s):()=>t[s];if(Q1(c)){const n=e[c];_2(n)&&Fe(a,n)}else if(_2(c))Fe(a,c.bind(t));else if(b1(c))if(M2(c))c.forEach(n=>al(n,e,t,s));else{const n=_2(c.handler)?c.handler.bind(t):e[c.handler];_2(n)&&Fe(a,n,c)}}function ma(c){const e=c.type,{mixins:t,extends:s}=e,{mixins:a,optionsCache:n,config:{optionMergeStrategies:r}}=c.appContext,i=n.get(e);let o;return i?o=i:!a.length&&!t&&!s?o=e:(o={},a.length&&a.forEach(f=>rt(o,f,r,!0)),rt(o,e,r)),b1(e)&&n.set(e,o),o}function rt(c,e,t,s=!1){const{mixins:a,extends:n}=e;n&&rt(c,n,t,!0),a&&a.forEach(r=>rt(c,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const i=nC[r]||t&&t[r];c[r]=i?i(c[r],e[r]):e[r]}return c}const nC={data:Qr,props:R6,emits:R6,methods:R6,computed:R6,beforeCreate:L4,created:L4,beforeMount:L4,mounted:L4,beforeUpdate:L4,updated:L4,beforeDestroy:L4,beforeUnmount:L4,destroyed:L4,unmounted:L4,activated:L4,deactivated:L4,errorCaptured:L4,serverPrefetch:L4,components:R6,directives:R6,watch:iC,provide:Qr,inject:rC};function Qr(c,e){return e?c?function(){return S4(_2(c)?c.call(this,this):c,_2(e)?e.call(this,this):e)}:e:c}function rC(c,e){return R6(Y7(c),Y7(e))}function Y7(c){if(M2(c)){const e={};for(let t=0;t<c.length;t++)e[c[t]]=c[t];return e}return c}function L4(c,e){return c?[...new Set([].concat(c,e))]:e}function R6(c,e){return c?S4(S4(Object.create(null),c),e):e}function iC(c,e){if(!c)return e;if(!e)return c;const t=S4(Object.create(null),c);for(const s in e)t[s]=L4(c[s],e[s]);return t}function oC(c,e,t,s=!1){const a={},n={};st(n,Gt,1),c.propsDefaults=Object.create(null),nl(c,e,a,n);for(const r in c.propsOptions[0])r in a||(a[r]=void 0);t?c.props=s?a:MM(a):c.type.props?c.props=a:c.props=n,c.attrs=n}function lC(c,e,t,s){const{props:a,attrs:n,vnode:{patchFlag:r}}=c,i=t1(a),[o]=c.propsOptions;let f=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=c.vnode.dynamicProps;for(let p=0;p<d.length;p++){let v=d[p];if($t(c.emitsOptions,v))continue;const M=e[v];if(o)if(Y2(n,v))M!==n[v]&&(n[v]=M,f=!0);else{const L=V3(v);a[L]=Q7(o,i,L,M,c,!1)}else M!==n[v]&&(n[v]=M,f=!0)}}}else{nl(c,e,a,n)&&(f=!0);let d;for(const p in i)(!e||!Y2(e,p)&&((d=i0(p))===p||!Y2(e,d)))&&(o?t&&(t[p]!==void 0||t[d]!==void 0)&&(a[p]=Q7(o,i,p,void 0,c,!0)):delete a[p]);if(n!==i)for(const p in n)(!e||!Y2(e,p)&&!0)&&(delete n[p],f=!0)}f&&T3(c,"set","$attrs")}function nl(c,e,t,s){const[a,n]=c.propsOptions;let r=!1,i;if(e)for(let o in e){if(qc(o))continue;const f=e[o];let d;a&&Y2(a,d=V3(o))?!n||!n.includes(d)?t[d]=f:(i||(i={}))[d]=f:$t(c.emitsOptions,o)||(!(o in s)||f!==s[o])&&(s[o]=f,r=!0)}if(n){const o=t1(t),f=i||x1;for(let d=0;d<n.length;d++){const p=n[d];t[p]=Q7(a,o,p,f[p],c,!Y2(f,p))}}return r}function Q7(c,e,t,s,a,n){const r=c[t];if(r!=null){const i=Y2(r,"default");if(i&&s===void 0){const o=r.default;if(r.type!==Function&&_2(o)){const{propsDefaults:f}=a;t in f?s=f[t]:(Ke(a),s=f[t]=o.call(null,e),J6())}else s=o}r[0]&&(n&&!i?s=!1:r[1]&&(s===""||s===i0(t))&&(s=!0))}return s}function rl(c,e,t=!1){const s=e.propsCache,a=s.get(c);if(a)return a;const n=c.props,r={},i=[];let o=!1;if(!_2(c)){const d=p=>{o=!0;const[v,M]=rl(p,e,!0);S4(r,v),M&&i.push(...M)};!t&&e.mixins.length&&e.mixins.forEach(d),c.extends&&d(c.extends),c.mixins&&c.mixins.forEach(d)}if(!n&&!o)return b1(c)&&s.set(c,Ie),Ie;if(M2(n))for(let d=0;d<n.length;d++){const p=V3(n[d]);Xr(p)&&(r[p]=x1)}else if(n)for(const d in n){const p=V3(d);if(Xr(p)){const v=n[d],M=r[p]=M2(v)||_2(v)?{type:v}:Object.assign({},v);if(M){const L=ei(Boolean,M.type),S=ei(String,M.type);M[0]=L>-1,M[1]=S<0||L<S,(L>-1||Y2(M,"default"))&&i.push(p)}}}const f=[r,i];return b1(c)&&s.set(c,f),f}function Xr(c){return c[0]!=="$"}function Jr(c){const e=c&&c.toString().match(/^\s*function (\w+)/);return e?e[1]:c===null?"null":""}function Zr(c,e){return Jr(c)===Jr(e)}function ei(c,e){return M2(e)?e.findIndex(t=>Zr(t,c)):_2(e)&&Zr(e,c)?0:-1}const il=c=>c[0]==="_"||c==="$stable",pa=c=>M2(c)?c.map(p3):[p3(c)],fC=(c,e,t)=>{if(e._n)return e;const s=R2((...a)=>pa(e(...a)),t);return s._c=!1,s},ol=(c,e,t)=>{const s=c._ctx;for(const a in c){if(il(a))continue;const n=c[a];if(_2(n))e[a]=fC(a,n,s);else if(n!=null){const r=pa(n);e[a]=()=>r}}},ll=(c,e)=>{const t=pa(e);c.slots.default=()=>t},uC=(c,e)=>{if(c.vnode.shapeFlag&32){const t=e._;t?(c.slots=t1(e),st(e,"_",t)):ol(e,c.slots={})}else c.slots={},e&&ll(c,e);st(c.slots,Gt,1)},hC=(c,e,t)=>{const{vnode:s,slots:a}=c;let n=!0,r=x1;if(s.shapeFlag&32){const i=e._;i?t&&i===1?n=!1:(S4(a,e),!t&&i===1&&delete a._):(n=!e.$stable,ol(e,a)),r=e}else e&&(ll(c,e),r={default:1});if(n)for(const i in a)!il(i)&&!(i in r)&&delete a[i]};function fl(){return{app:null,config:{isNativeTag:FV,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dC=0;function mC(c,e){return function(s,a=null){_2(s)||(s=Object.assign({},s)),a!=null&&!b1(a)&&(a=null);const n=fl(),r=new Set;let i=!1;const o=n.app={_uid:dC++,_component:s,_props:a,_container:null,_context:n,_instance:null,version:PC,get config(){return n.config},set config(f){},use(f,...d){return r.has(f)||(f&&_2(f.install)?(r.add(f),f.install(o,...d)):_2(f)&&(r.add(f),f(o,...d))),o},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),o},component(f,d){return d?(n.components[f]=d,o):n.components[f]},directive(f,d){return d?(n.directives[f]=d,o):n.directives[f]},mount(f,d,p){if(!i){const v=o2(s,a);return v.appContext=n,d&&e?e(v,f):c(v,f,p),i=!0,o._container=f,f.__vue_app__=o,Kt(v.component)||v.component.proxy}},unmount(){i&&(c(null,o._container),delete o._container.__vue_app__)},provide(f,d){return n.provides[f]=d,o}};return o}}function X7(c,e,t,s,a=!1){if(M2(c)){c.forEach((v,M)=>X7(v,e&&(M2(e)?e[M]:e),t,s,a));return}if(Kc(s)&&!a)return;const n=s.shapeFlag&4?Kt(s.component)||s.component.proxy:s.el,r=a?null:n,{i,r:o}=c,f=e&&e.r,d=i.refs===x1?i.refs={}:i.refs,p=i.setupState;if(f!=null&&f!==o&&(Q1(f)?(d[f]=null,Y2(p,f)&&(p[f]=null)):$1(f)&&(f.value=null)),_2(o))f6(o,i,12,[r,d]);else{const v=Q1(o),M=$1(o);if(v||M){const L=()=>{if(c.f){const S=v?Y2(p,o)?p[o]:d[o]:o.value;a?M2(S)&&ea(S,n):M2(S)?S.includes(n)||S.push(n):v?(d[o]=[n],Y2(p,o)&&(p[o]=d[o])):(o.value=[n],c.k&&(d[c.k]=o.value))}else v?(d[o]=r,Y2(p,o)&&(p[o]=r)):M&&(o.value=r,c.k&&(d[c.k]=r))};r?(L.id=-1,T4(L,t)):L()}}}const T4=BM;function pC(c){return vC(c)}function vC(c,e){const t=WV();t.__VUE__=!0;const{insert:s,remove:a,patchProp:n,createElement:r,createText:i,createComment:o,setText:f,setElementText:d,parentNode:p,nextSibling:v,setScopeId:M=o3,insertStaticContent:L}=c,S=(H,C,k,_=null,O=null,q=null,J=!1,$=null,G=!!C.dynamicChildren)=>{if(H===C)return;H&&!k0(H,C)&&(_=Y(H),a1(H,O,q,!0),H=null),C.patchFlag===-2&&(G=!1,C.dynamicChildren=null);const{type:D,ref:s2,shapeFlag:t2}=C;switch(D){case Wt:P(H,C,k,_);break;case ce:w(H,C,k,_);break;case Yc:H==null&&N(C,k,_,J);break;case C1:D1(H,C,k,_,O,q,J,$,G);break;default:t2&1?n2(H,C,k,_,O,q,J,$,G):t2&6?z1(H,C,k,_,O,q,J,$,G):(t2&64||t2&128)&&D.process(H,C,k,_,O,q,J,$,G,C2)}s2!=null&&O&&X7(s2,H&&H.ref,q,C||H,!C)},P=(H,C,k,_)=>{if(H==null)s(C.el=i(C.children),k,_);else{const O=C.el=H.el;C.children!==H.children&&f(O,C.children)}},w=(H,C,k,_)=>{H==null?s(C.el=o(C.children||""),k,_):C.el=H.el},N=(H,C,k,_)=>{[H.el,H.anchor]=L(H.children,C,k,_,H.el,H.anchor)},B=({el:H,anchor:C},k,_)=>{let O;for(;H&&H!==C;)O=v(H),s(H,k,_),H=O;s(C,k,_)},c2=({el:H,anchor:C})=>{let k;for(;H&&H!==C;)k=v(H),a(H),H=k;a(C)},n2=(H,C,k,_,O,q,J,$,G)=>{J=J||C.type==="svg",H==null?w2(C,k,_,O,q,J,$,G):s1(H,C,O,q,J,$,G)},w2=(H,C,k,_,O,q,J,$)=>{let G,D;const{type:s2,props:t2,shapeFlag:a2,transition:f2,dirs:k2}=H;if(G=H.el=r(H.type,q,t2&&t2.is,t2),a2&8?d(G,H.children):a2&16&&V2(H.children,G,null,_,O,q&&s2!=="foreignObject",J,$),k2&&O6(H,null,_,"created"),t2){for(const N2 in t2)N2!=="value"&&!qc(N2)&&n(G,N2,null,t2[N2],q,H.children,_,O,Z);"value"in t2&&n(G,"value",null,t2.value),(D=t2.onVnodeBeforeMount)&&m3(D,_,H)}g2(G,H,H.scopeId,J,_),k2&&O6(H,null,_,"beforeMount");const x2=(!O||O&&!O.pendingBranch)&&f2&&!f2.persisted;x2&&f2.beforeEnter(G),s(G,C,k),((D=t2&&t2.onVnodeMounted)||x2||k2)&&T4(()=>{D&&m3(D,_,H),x2&&f2.enter(G),k2&&O6(H,null,_,"mounted")},O)},g2=(H,C,k,_,O)=>{if(k&&M(H,k),_)for(let q=0;q<_.length;q++)M(H,_[q]);if(O){let q=O.subTree;if(C===q){const J=O.vnode;g2(H,J,J.scopeId,J.slotScopeIds,O.parent)}}},V2=(H,C,k,_,O,q,J,$,G=0)=>{for(let D=G;D<H.length;D++){const s2=H[D]=$?n6(H[D]):p3(H[D]);S(null,s2,C,k,_,O,q,J,$)}},s1=(H,C,k,_,O,q,J)=>{const $=C.el=H.el;let{patchFlag:G,dynamicChildren:D,dirs:s2}=C;G|=H.patchFlag&16;const t2=H.props||x1,a2=C.props||x1;let f2;k&&D6(k,!1),(f2=a2.onVnodeBeforeUpdate)&&m3(f2,k,C,H),s2&&O6(C,H,k,"beforeUpdate"),k&&D6(k,!0);const k2=O&&C.type!=="foreignObject";if(D?A1(H.dynamicChildren,D,$,k,_,k2,q):J||D2(H,C,$,null,k,_,k2,q,!1),G>0){if(G&16)X1($,C,t2,a2,k,_,O);else if(G&2&&t2.class!==a2.class&&n($,"class",null,a2.class,O),G&4&&n($,"style",t2.style,a2.style,O),G&8){const x2=C.dynamicProps;for(let N2=0;N2<x2.length;N2++){const n1=x2[N2],i4=t2[n1],N4=a2[n1];(N4!==i4||n1==="value")&&n($,n1,i4,N4,O,H.children,k,_,Z)}}G&1&&H.children!==C.children&&d($,C.children)}else!J&&D==null&&X1($,C,t2,a2,k,_,O);((f2=a2.onVnodeUpdated)||s2)&&T4(()=>{f2&&m3(f2,k,C,H),s2&&O6(C,H,k,"updated")},_)},A1=(H,C,k,_,O,q,J)=>{for(let $=0;$<C.length;$++){const G=H[$],D=C[$],s2=G.el&&(G.type===C1||!k0(G,D)||G.shapeFlag&70)?p(G.el):k;S(G,D,s2,null,_,O,q,J,!0)}},X1=(H,C,k,_,O,q,J)=>{if(k!==_){if(k!==x1)for(const $ in k)!qc($)&&!($ in _)&&n(H,$,k[$],null,J,C.children,O,q,Z);for(const $ in _){if(qc($))continue;const G=_[$],D=k[$];G!==D&&$!=="value"&&n(H,$,D,G,J,C.children,O,q,Z)}"value"in _&&n(H,"value",k.value,_.value)}},D1=(H,C,k,_,O,q,J,$,G)=>{const D=C.el=H?H.el:i(""),s2=C.anchor=H?H.anchor:i("");let{patchFlag:t2,dynamicChildren:a2,slotScopeIds:f2}=C;f2&&($=$?$.concat(f2):f2),H==null?(s(D,k,_),s(s2,k,_),V2(C.children,k,s2,O,q,J,$,G)):t2>0&&t2&64&&a2&&H.dynamicChildren?(A1(H.dynamicChildren,a2,k,O,q,J,$),(C.key!=null||O&&C===O.subTree)&&ul(H,C,!0)):D2(H,C,k,s2,O,q,J,$,G)},z1=(H,C,k,_,O,q,J,$,G)=>{C.slotScopeIds=$,H==null?C.shapeFlag&512?O.ctx.activate(C,k,_,J,G):u1(C,k,_,O,q,J,G):W2(H,C,G)},u1=(H,C,k,_,O,q,J)=>{const $=H.component=LC(H,_,O);if(Z9(H)&&($.ctx.renderer=C2),xC($),$.asyncDep){if(O&&O.registerDep($,O2),!H.el){const G=$.subTree=o2(ce);w(null,G,C,k)}return}O2($,H,C,k,O,q,J)},W2=(H,C,k)=>{const _=C.component=H.component;if(DM(H,C,k))if(_.asyncDep&&!_.asyncResolved){G2(_,C,k);return}else _.next=C,_M(_.update),_.update();else C.el=H.el,_.vnode=C},O2=(H,C,k,_,O,q,J)=>{const $=()=>{if(H.isMounted){let{next:s2,bu:t2,u:a2,parent:f2,vnode:k2}=H,x2=s2,N2;D6(H,!1),s2?(s2.el=k2.el,G2(H,s2,J)):s2=k2,t2&&Wc(t2),(N2=s2.props&&s2.props.onVnodeBeforeUpdate)&&m3(N2,f2,s2,k2),D6(H,!0);const n1=d7(H),i4=H.subTree;H.subTree=n1,S(i4,n1,p(i4.el),Y(i4),H,O,q),s2.el=n1.el,x2===null&&RM(H,n1.el),a2&&T4(a2,O),(N2=s2.props&&s2.props.onVnodeUpdated)&&T4(()=>m3(N2,f2,s2,k2),O)}else{let s2;const{el:t2,props:a2}=C,{bm:f2,m:k2,parent:x2}=H,N2=Kc(C);if(D6(H,!1),f2&&Wc(f2),!N2&&(s2=a2&&a2.onVnodeBeforeMount)&&m3(s2,x2,C),D6(H,!0),t2&&b2){const n1=()=>{H.subTree=d7(H),b2(t2,H.subTree,H,O,null)};N2?C.type.__asyncLoader().then(()=>!H.isUnmounted&&n1()):n1()}else{const n1=H.subTree=d7(H);S(null,n1,k,_,H,O,q),C.el=n1.el}if(k2&&T4(k2,O),!N2&&(s2=a2&&a2.onVnodeMounted)){const n1=C;T4(()=>m3(s2,x2,n1),O)}(C.shapeFlag&256||x2&&Kc(x2.vnode)&&x2.vnode.shapeFlag&256)&&H.a&&T4(H.a,O),H.isMounted=!0,C=k=_=null}},G=H.effect=new sa($,()=>ha(D),H.scope),D=H.update=()=>G.run();D.id=H.uid,D6(H,!0),D()},G2=(H,C,k)=>{C.component=H;const _=H.vnode.props;H.vnode=C,H.next=null,lC(H,C.props,_,k),hC(H,C.children,k),o0(),Wr(),l0()},D2=(H,C,k,_,O,q,J,$,G=!1)=>{const D=H&&H.children,s2=H?H.shapeFlag:0,t2=C.children,{patchFlag:a2,shapeFlag:f2}=C;if(a2>0){if(a2&128){L1(D,t2,k,_,O,q,J,$,G);return}else if(a2&256){R1(D,t2,k,_,O,q,J,$,G);return}}f2&8?(s2&16&&Z(D,O,q),t2!==D&&d(k,t2)):s2&16?f2&16?L1(D,t2,k,_,O,q,J,$,G):Z(D,O,q,!0):(s2&8&&d(k,""),f2&16&&V2(t2,k,_,O,q,J,$,G))},R1=(H,C,k,_,O,q,J,$,G)=>{H=H||Ie,C=C||Ie;const D=H.length,s2=C.length,t2=Math.min(D,s2);let a2;for(a2=0;a2<t2;a2++){const f2=C[a2]=G?n6(C[a2]):p3(C[a2]);S(H[a2],f2,k,null,O,q,J,$,G)}D>s2?Z(H,O,q,!0,!1,t2):V2(C,k,_,O,q,J,$,G,t2)},L1=(H,C,k,_,O,q,J,$,G)=>{let D=0;const s2=C.length;let t2=H.length-1,a2=s2-1;for(;D<=t2&&D<=a2;){const f2=H[D],k2=C[D]=G?n6(C[D]):p3(C[D]);if(k0(f2,k2))S(f2,k2,k,null,O,q,J,$,G);else break;D++}for(;D<=t2&&D<=a2;){const f2=H[t2],k2=C[a2]=G?n6(C[a2]):p3(C[a2]);if(k0(f2,k2))S(f2,k2,k,null,O,q,J,$,G);else break;t2--,a2--}if(D>t2){if(D<=a2){const f2=a2+1,k2=f2<s2?C[f2].el:_;for(;D<=a2;)S(null,C[D]=G?n6(C[D]):p3(C[D]),k,k2,O,q,J,$,G),D++}}else if(D>a2)for(;D<=t2;)a1(H[D],O,q,!0),D++;else{const f2=D,k2=D,x2=new Map;for(D=k2;D<=a2;D++){const t4=C[D]=G?n6(C[D]):p3(C[D]);t4.key!=null&&x2.set(t4.key,D)}let N2,n1=0;const i4=a2-k2+1;let N4=!1,w6=0;const h3=new Array(i4);for(D=0;D<i4;D++)h3[D]=0;for(D=f2;D<=t2;D++){const t4=H[D];if(n1>=i4){a1(t4,O,q,!0);continue}let C4;if(t4.key!=null)C4=x2.get(t4.key);else for(N2=k2;N2<=a2;N2++)if(h3[N2-k2]===0&&k0(t4,C[N2])){C4=N2;break}C4===void 0?a1(t4,O,q,!0):(h3[C4-k2]=D+1,C4>=w6?w6=C4:N4=!0,S(t4,C[C4],k,null,O,q,J,$,G),n1++)}const me=N4?gC(h3):Ie;for(N2=me.length-1,D=i4-1;D>=0;D--){const t4=k2+D,C4=C[t4],x6=t4+1<s2?C[t4+1].el:_;h3[D]===0?S(null,C4,k,x6,O,q,J,$,G):N4&&(N2<0||D!==me[N2]?q1(C4,k,x6,2):N2--)}}},q1=(H,C,k,_,O=null)=>{const{el:q,type:J,transition:$,children:G,shapeFlag:D}=H;if(D&6){q1(H.component.subTree,C,k,_);return}if(D&128){H.suspense.move(C,k,_);return}if(D&64){J.move(H,C,k,C2);return}if(J===C1){s(q,C,k);for(let t2=0;t2<G.length;t2++)q1(G[t2],C,k,_);s(H.anchor,C,k);return}if(J===Yc){B(H,C,k);return}if(_!==2&&D&1&&$)if(_===0)$.beforeEnter(q),s(q,C,k),T4(()=>$.enter(q),O);else{const{leave:t2,delayLeave:a2,afterLeave:f2}=$,k2=()=>s(q,C,k),x2=()=>{t2(q,()=>{k2(),f2&&f2()})};a2?a2(q,k2,x2):x2()}else s(q,C,k)},a1=(H,C,k,_=!1,O=!1)=>{const{type:q,props:J,ref:$,children:G,dynamicChildren:D,shapeFlag:s2,patchFlag:t2,dirs:a2}=H;if($!=null&&X7($,null,k,H,!0),s2&256){C.ctx.deactivate(H);return}const f2=s2&1&&a2,k2=!Kc(H);let x2;if(k2&&(x2=J&&J.onVnodeBeforeUnmount)&&m3(x2,C,H),s2&6)I(H.component,k,_);else{if(s2&128){H.suspense.unmount(k,_);return}f2&&O6(H,null,C,"beforeUnmount"),s2&64?H.type.remove(H,C,k,O,C2,_):D&&(q!==C1||t2>0&&t2&64)?Z(D,C,k,!1,!0):(q===C1&&t2&384||!O&&s2&16)&&Z(G,C,k),_&&M4(H)}(k2&&(x2=J&&J.onVnodeUnmounted)||f2)&&T4(()=>{x2&&m3(x2,C,H),f2&&O6(H,null,C,"unmounted")},k)},M4=H=>{const{type:C,el:k,anchor:_,transition:O}=H;if(C===C1){k4(k,_);return}if(C===Yc){c2(H);return}const q=()=>{a(k),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(H.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:$}=O,G=()=>J(k,q);$?$(H.el,q,G):G()}else q()},k4=(H,C)=>{let k;for(;H!==C;)k=v(H),a(H),H=k;a(C)},I=(H,C,k)=>{const{bum:_,scope:O,update:q,subTree:J,um:$}=H;_&&Wc(_),O.stop(),q&&(q.active=!1,a1(J,H,C,k)),$&&T4($,C),T4(()=>{H.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&H.asyncDep&&!H.asyncResolved&&H.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Z=(H,C,k,_=!1,O=!1,q=0)=>{for(let J=q;J<H.length;J++)a1(H[J],C,k,_,O)},Y=H=>H.shapeFlag&6?Y(H.component.subTree):H.shapeFlag&128?H.suspense.next():v(H.anchor||H.el),u2=(H,C,k)=>{H==null?C._vnode&&a1(C._vnode,null,null,!0):S(C._vnode||null,H,C,null,null,null,k),Wr(),G9(),C._vnode=H},C2={p:S,um:a1,m:q1,r:M4,mt:u1,mc:V2,pc:D2,pbc:A1,n:Y,o:c};let $2,b2;return e&&([$2,b2]=e(C2)),{render:u2,hydrate:$2,createApp:mC(u2,$2)}}function D6({effect:c,update:e},t){c.allowRecurse=e.allowRecurse=t}function ul(c,e,t=!1){const s=c.children,a=e.children;if(M2(s)&&M2(a))for(let n=0;n<s.length;n++){const r=s[n];let i=a[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[n]=n6(a[n]),i.el=r.el),t||ul(r,i)),i.type===Wt&&(i.el=r.el)}}function gC(c){const e=c.slice(),t=[0];let s,a,n,r,i;const o=c.length;for(s=0;s<o;s++){const f=c[s];if(f!==0){if(a=t[t.length-1],c[a]<f){e[s]=a,t.push(s);continue}for(n=0,r=t.length-1;n<r;)i=n+r>>1,c[t[i]]<f?n=i+1:r=i;f<c[t[n]]&&(n>0&&(e[s]=t[n-1]),t[n]=s)}}for(n=t.length,r=t[n-1];n-- >0;)t[n]=r,r=e[r];return t}const HC=c=>c.__isTeleport,C1=Symbol(void 0),Wt=Symbol(void 0),ce=Symbol(void 0),Yc=Symbol(void 0),R0=[];let n3=null;function Q2(c=!1){R0.push(n3=c?null:[])}function zC(){R0.pop(),n3=R0[R0.length-1]||null}let a8=1;function ci(c){a8+=c}function hl(c){return c.dynamicChildren=a8>0?n3||Ie:null,zC(),a8>0&&n3&&n3.push(c),c}function c1(c,e,t,s,a,n){return hl(b(c,e,t,s,a,n,!0))}function dl(c,e,t,s,a){return hl(o2(c,e,t,s,a,!0))}function J7(c){return c?c.__v_isVNode===!0:!1}function k0(c,e){return c.type===e.type&&c.key===e.key}const Gt="__vInternal",ml=({key:c})=>c!=null?c:null,Qc=({ref:c,ref_key:e,ref_for:t})=>c!=null?Q1(c)||$1(c)||_2(c)?{i:D4,r:c,k:e,f:!!t}:c:null;function b(c,e=null,t=null,s=0,a=null,n=c===C1?0:1,r=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&ml(e),ref:e&&Qc(e),scopeId:Q9,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:D4};return i?(ga(o,t),n&128&&c.normalize(o)):t&&(o.shapeFlag|=Q1(t)?8:16),a8>0&&!r&&n3&&(o.patchFlag>0||n&6)&&o.patchFlag!==32&&n3.push(o),o}const o2=VC;function VC(c,e=null,t=null,s=0,a=null,n=!1){if((!c||c===tl)&&(c=ce),J7(c)){const i=Ge(c,e,!0);return t&&ga(i,t),a8>0&&!n&&n3&&(i.shapeFlag&6?n3[n3.indexOf(c)]=i:n3.push(i)),i.patchFlag|=-2,i}if(_C(c)&&(c=c.__vccOpts),e){e=MC(e);let{class:i,style:o}=e;i&&!Q1(i)&&(e.class=Js(i)),b1(o)&&(R9(o)&&!M2(o)&&(o=S4({},o)),e.style=Xs(o))}const r=Q1(c)?1:FM(c)?128:HC(c)?64:b1(c)?4:_2(c)?2:0;return b(c,e,t,s,a,r,n,!0)}function MC(c){return c?R9(c)||Gt in c?S4({},c):c:null}function Ge(c,e,t=!1){const{props:s,ref:a,patchFlag:n,children:r}=c,i=e?CC(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:i,key:i&&ml(i),ref:e&&e.ref?t&&a?M2(a)?a.concat(Qc(e)):[a,Qc(e)]:Qc(e):a,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:r,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==C1?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&Ge(c.ssContent),ssFallback:c.ssFallback&&Ge(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx}}function L2(c=" ",e=0){return o2(Wt,null,c,e)}function va(c,e){const t=o2(Yc,null,c);return t.staticCount=e,t}function Be(c="",e=!1){return e?(Q2(),dl(ce,null,c)):o2(ce,null,c)}function p3(c){return c==null||typeof c=="boolean"?o2(ce):M2(c)?o2(C1,null,c.slice()):typeof c=="object"?n6(c):o2(Wt,null,String(c))}function n6(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:Ge(c)}function ga(c,e){let t=0;const{shapeFlag:s}=c;if(e==null)e=null;else if(M2(e))t=16;else if(typeof e=="object")if(s&65){const a=e.default;a&&(a._c&&(a._d=!1),ga(c,a()),a._c&&(a._d=!0));return}else{t=32;const a=e._;!a&&!(Gt in e)?e._ctx=D4:a===3&&D4&&(D4.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else _2(e)?(e={default:e,_ctx:D4},t=32):(e=String(e),s&64?(t=16,e=[L2(e)]):t=8);c.children=e,c.shapeFlag|=t}function CC(...c){const e={};for(let t=0;t<c.length;t++){const s=c[t];for(const a in s)if(a==="class")e.class!==s.class&&(e.class=Js([e.class,s.class]));else if(a==="style")e.style=Xs([e.style,s.style]);else if(Dt(a)){const n=e[a],r=s[a];r&&n!==r&&!(M2(n)&&n.includes(r))&&(e[a]=n?[].concat(n,r):r)}else a!==""&&(e[a]=s[a])}return e}function m3(c,e,t,s=null){l3(c,e,7,[t,s])}const yC=fl();let bC=0;function LC(c,e,t){const s=c.type,a=(e?e.appContext:c.appContext)||yC,n={uid:bC++,vnode:c,type:s,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new w9(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rl(s,a),emitsOptions:Y9(s,a),emit:null,emitted:null,propsDefaults:x1,inheritAttrs:s.inheritAttrs,ctx:x1,data:x1,props:x1,attrs:x1,slots:x1,refs:x1,setupState:x1,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=PM.bind(null,n),c.ce&&c.ce(n),n}let n4=null;const wC=()=>n4||D4,Ke=c=>{n4=c,c.scope.on()},J6=()=>{n4&&n4.scope.off(),n4=null};function pl(c){return c.vnode.shapeFlag&4}let n8=!1;function xC(c,e=!1){n8=e;const{props:t,children:s}=c.vnode,a=pl(c);oC(c,t,a,e),uC(c,s);const n=a?SC(c,e):void 0;return n8=!1,n}function SC(c,e){const t=c.type;c.accessCache=Object.create(null),c.proxy=We(new Proxy(c.ctx,tC));const{setup:s}=t;if(s){const a=c.setupContext=s.length>1?NC(c):null;Ke(c),o0();const n=f6(s,c,0,[c.props,a]);if(l0(),J6(),y9(n)){if(n.then(J6,J6),e)return n.then(r=>{ti(c,r,e)}).catch(r=>{jt(r,c,0)});c.asyncDep=n}else ti(c,n,e)}else vl(c,e)}function ti(c,e,t){_2(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:b1(e)&&(c.setupState=j9(e)),vl(c,t)}let si;function vl(c,e,t){const s=c.type;if(!c.render){if(!e&&si&&!s.render){const a=s.template||ma(c).template;if(a){const{isCustomElement:n,compilerOptions:r}=c.appContext.config,{delimiters:i,compilerOptions:o}=s,f=S4(S4({isCustomElement:n,delimiters:i},r),o);s.render=si(a,f)}}c.render=s.render||o3}Ke(c),o0(),sC(c),l0(),J6()}function kC(c){return new Proxy(c.attrs,{get(e,t){return B4(c,"get","$attrs"),e[t]}})}function NC(c){const e=s=>{c.exposed=s||{}};let t;return{get attrs(){return t||(t=kC(c))},slots:c.slots,emit:c.emit,expose:e}}function Kt(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(j9(We(c.exposed)),{get(e,t){if(t in e)return e[t];if(t in D0)return D0[t](c)},has(e,t){return t in e||t in D0}}))}function AC(c,e=!0){return _2(c)?c.displayName||c.name:c.name||e&&c.__name}function _C(c){return _2(c)&&"__vccOpts"in c}const E1=(c,e)=>kM(c,e,n8);function Yt(c,e,t){const s=arguments.length;return s===2?b1(e)&&!M2(e)?J7(e)?o2(c,null,[e]):o2(c,e):o2(c,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&J7(t)&&(t=[t]),o2(c,e,t))}const EC=Symbol(""),TC=()=>z3(EC),PC="3.2.45",IC="http://www.w3.org/2000/svg",U6=typeof document<"u"?document:null,ai=U6&&U6.createElement("template"),OC={insert:(c,e,t)=>{e.insertBefore(c,t||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,t,s)=>{const a=e?U6.createElementNS(IC,c):U6.createElement(c,t?{is:t}:void 0);return c==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:c=>U6.createTextNode(c),createComment:c=>U6.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>U6.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,t,s,a,n){const r=t?t.previousSibling:e.lastChild;if(a&&(a===n||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),t),!(a===n||!(a=a.nextSibling)););else{ai.innerHTML=s?`<svg>${c}</svg>`:c;const i=ai.content;if(s){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}e.insertBefore(i,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function DC(c,e,t){const s=c._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?c.removeAttribute("class"):t?c.setAttribute("class",e):c.className=e}function RC(c,e,t){const s=c.style,a=Q1(t);if(t&&!a){for(const n in t)Z7(s,n,t[n]);if(e&&!Q1(e))for(const n in e)t[n]==null&&Z7(s,n,"")}else{const n=s.display;a?e!==t&&(s.cssText=t):e&&c.removeAttribute("style"),"_vod"in c&&(s.display=n)}}const ni=/\s*!important$/;function Z7(c,e,t){if(M2(t))t.forEach(s=>Z7(c,e,s));else if(t==null&&(t=""),e.startsWith("--"))c.setProperty(e,t);else{const s=FC(c,e);ni.test(t)?c.setProperty(i0(s),t.replace(ni,""),"important"):c[s]=t}}const ri=["Webkit","Moz","ms"],p7={};function FC(c,e){const t=p7[e];if(t)return t;let s=V3(e);if(s!=="filter"&&s in c)return p7[e]=s;s=Bt(s);for(let a=0;a<ri.length;a++){const n=ri[a]+s;if(n in c)return p7[e]=n}return e}const ii="http://www.w3.org/1999/xlink";function BC(c,e,t,s,a){if(s&&e.startsWith("xlink:"))t==null?c.removeAttributeNS(ii,e.slice(6,e.length)):c.setAttributeNS(ii,e,t);else{const n=OV(e);t==null||n&&!M9(t)?c.removeAttribute(e):c.setAttribute(e,n?"":t)}}function UC(c,e,t,s,a,n,r){if(e==="innerHTML"||e==="textContent"){s&&r(s,a,n),c[e]=t==null?"":t;return}if(e==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=t;const o=t==null?"":t;(c.value!==o||c.tagName==="OPTION")&&(c.value=o),t==null&&c.removeAttribute(e);return}let i=!1;if(t===""||t==null){const o=typeof c[e];o==="boolean"?t=M9(t):t==null&&o==="string"?(t="",i=!0):o==="number"&&(t=0,i=!0)}try{c[e]=t}catch{}i&&c.removeAttribute(e)}function j6(c,e,t,s){c.addEventListener(e,t,s)}function jC(c,e,t,s){c.removeEventListener(e,t,s)}function $C(c,e,t,s,a=null){const n=c._vei||(c._vei={}),r=n[e];if(s&&r)r.value=s;else{const[i,o]=qC(e);if(s){const f=n[e]=KC(s,a);j6(c,i,f,o)}else r&&(jC(c,i,r,o),n[e]=void 0)}}const oi=/(?:Once|Passive|Capture)$/;function qC(c){let e;if(oi.test(c)){e={};let s;for(;s=c.match(oi);)c=c.slice(0,c.length-s[0].length),e[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):i0(c.slice(2)),e]}let v7=0;const WC=Promise.resolve(),GC=()=>v7||(WC.then(()=>v7=0),v7=Date.now());function KC(c,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;l3(YC(s,t.value),e,5,[s])};return t.value=c,t.attached=GC(),t}function YC(c,e){if(M2(e)){const t=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{t.call(c),c._stopped=!0},e.map(s=>a=>!a._stopped&&s&&s(a))}else return e}const li=/^on[a-z]/,QC=(c,e,t,s,a=!1,n,r,i,o)=>{e==="class"?DC(c,s,a):e==="style"?RC(c,t,s):Dt(e)?Zs(e)||$C(c,e,t,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):XC(c,e,s,a))?UC(c,e,s,n,r,i,o):(e==="true-value"?c._trueValue=s:e==="false-value"&&(c._falseValue=s),BC(c,e,s,a))};function XC(c,e,t,s){return s?!!(e==="innerHTML"||e==="textContent"||e in c&&li.test(e)&&_2(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA"||li.test(e)&&Q1(t)?!1:e in c}const it=c=>{const e=c.props["onUpdate:modelValue"]||!1;return M2(e)?t=>Wc(e,t):e};function JC(c){c.target.composing=!0}function fi(c){const e=c.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const N0={created(c,{modifiers:{lazy:e,trim:t,number:s}},a){c._assign=it(a);const n=s||a.props&&a.props.type==="number";j6(c,e?"change":"input",r=>{if(r.target.composing)return;let i=c.value;t&&(i=i.trim()),n&&(i=e8(i)),c._assign(i)}),t&&j6(c,"change",()=>{c.value=c.value.trim()}),e||(j6(c,"compositionstart",JC),j6(c,"compositionend",fi),j6(c,"change",fi))},mounted(c,{value:e}){c.value=e==null?"":e},beforeUpdate(c,{value:e,modifiers:{lazy:t,trim:s,number:a}},n){if(c._assign=it(n),c.composing||document.activeElement===c&&c.type!=="range"&&(t||s&&c.value.trim()===e||(a||c.type==="number")&&e8(c.value)===e))return;const r=e==null?"":e;c.value!==r&&(c.value=r)}},ui={deep:!0,created(c,{value:e,modifiers:{number:t}},s){const a=Rt(e);j6(c,"change",()=>{const n=Array.prototype.filter.call(c.options,r=>r.selected).map(r=>t?e8(ot(r)):ot(r));c._assign(c.multiple?a?new Set(n):n:n[0])}),c._assign=it(s)},mounted(c,{value:e}){hi(c,e)},beforeUpdate(c,e,t){c._assign=it(t)},updated(c,{value:e}){hi(c,e)}};function hi(c,e){const t=c.multiple;if(!(t&&!M2(e)&&!Rt(e))){for(let s=0,a=c.options.length;s<a;s++){const n=c.options[s],r=ot(n);if(t)M2(e)?n.selected=RV(e,r)>-1:n.selected=e.has(r);else if(Ot(ot(n),e)){c.selectedIndex!==s&&(c.selectedIndex=s);return}}!t&&c.selectedIndex!==-1&&(c.selectedIndex=-1)}}function ot(c){return"_value"in c?c._value:c.value}const ZC=["ctrl","shift","alt","meta"],ey={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>ZC.some(t=>c[`${t}Key`]&&!e.includes(t))},cy=(c,e)=>(t,...s)=>{for(let a=0;a<e.length;a++){const n=ey[e[a]];if(n&&n(t,e))return}return c(t,...s)},ty=S4({patchProp:QC},OC);let di;function sy(){return di||(di=pC(ty))}const ay=(...c)=>{const e=sy().createApp(...c),{mount:t}=e;return e.mount=s=>{const a=ny(s);if(!a)return;const n=e._component;!_2(n)&&!n.render&&!n.template&&(n.template=a.innerHTML),a.innerHTML="";const r=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),r},e};function ny(c){return Q1(c)?document.querySelector(c):c}var ry=!1;/*!
  * pinia v2.0.25
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let gl;const Qt=c=>gl=c,Hl=Symbol();function es(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var F0;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(F0||(F0={}));function iy(){const c=x9(!0),e=c.run(()=>la({}));let t=[],s=[];const a=We({install(n){Qt(a),a._a=n,n.provide(Hl,a),n.config.globalProperties.$pinia=a,s.forEach(r=>t.push(r)),s=[]},use(n){return!this._a&&!ry?s.push(n):t.push(n),this},_p:t,_a:null,_e:c,_s:new Map,state:e});return a}const zl=()=>{};function mi(c,e,t,s=zl){c.push(e);const a=()=>{const n=c.indexOf(e);n>-1&&(c.splice(n,1),s())};return!t&&KV()&&YV(a),a}function Se(c,...e){c.slice().forEach(t=>{t(...e)})}function cs(c,e){c instanceof Map&&e instanceof Map&&e.forEach((t,s)=>c.set(s,t)),c instanceof Set&&e instanceof Set&&e.forEach(c.add,c);for(const t in e){if(!e.hasOwnProperty(t))continue;const s=e[t],a=c[t];es(a)&&es(s)&&c.hasOwnProperty(t)&&!$1(s)&&!l6(s)?c[t]=cs(a,s):c[t]=s}return c}const oy=Symbol();function ly(c){return!es(c)||!c.hasOwnProperty(oy)}const{assign:r6}=Object;function fy(c){return!!($1(c)&&c.effect)}function uy(c,e,t,s){const{state:a,actions:n,getters:r}=e,i=t.state.value[c];let o;function f(){i||(t.state.value[c]=a?a():{});const d=LM(t.state.value[c]);return r6(d,n,Object.keys(r||{}).reduce((p,v)=>(p[v]=We(E1(()=>{Qt(t);const M=t._s.get(c);return r[v].call(M,M)})),p),{}))}return o=Vl(c,f,e,t,s,!0),o.$reset=function(){const p=a?a():{};this.$patch(v=>{r6(v,p)})},o}function Vl(c,e,t={},s,a,n){let r;const i=r6({actions:{}},t),o={deep:!0};let f,d,p=We([]),v=We([]),M;const L=s.state.value[c];!n&&!L&&(s.state.value[c]={}),la({});let S;function P(g2){let V2;f=d=!1,typeof g2=="function"?(g2(s.state.value[c]),V2={type:F0.patchFunction,storeId:c,events:M}):(cs(s.state.value[c],g2),V2={type:F0.patchObject,payload:g2,storeId:c,events:M});const s1=S=Symbol();ua().then(()=>{S===s1&&(f=!0)}),d=!0,Se(p,V2,s.state.value[c])}const w=zl;function N(){r.stop(),p=[],v=[],s._s.delete(c)}function B(g2,V2){return function(){Qt(s);const s1=Array.from(arguments),A1=[],X1=[];function D1(W2){A1.push(W2)}function z1(W2){X1.push(W2)}Se(v,{args:s1,name:g2,store:n2,after:D1,onError:z1});let u1;try{u1=V2.apply(this&&this.$id===c?this:n2,s1)}catch(W2){throw Se(X1,W2),W2}return u1 instanceof Promise?u1.then(W2=>(Se(A1,W2),W2)).catch(W2=>(Se(X1,W2),Promise.reject(W2))):(Se(A1,u1),u1)}}const c2={_p:s,$id:c,$onAction:mi.bind(null,v),$patch:P,$reset:w,$subscribe(g2,V2={}){const s1=mi(p,g2,V2.detached,()=>A1()),A1=r.run(()=>Fe(()=>s.state.value[c],X1=>{(V2.flush==="sync"?d:f)&&g2({storeId:c,type:F0.direct,events:M},X1)},r6({},o,V2)));return s1},$dispose:N},n2=f0(c2);s._s.set(c,n2);const w2=s._e.run(()=>(r=x9(),r.run(()=>e())));for(const g2 in w2){const V2=w2[g2];if($1(V2)&&!fy(V2)||l6(V2))n||(L&&ly(V2)&&($1(V2)?V2.value=L[g2]:cs(V2,L[g2])),s.state.value[c][g2]=V2);else if(typeof V2=="function"){const s1=B(g2,V2);w2[g2]=s1,i.actions[g2]=V2}}return r6(n2,w2),r6(t1(n2),w2),Object.defineProperty(n2,"$state",{get:()=>s.state.value[c],set:g2=>{P(V2=>{r6(V2,g2)})}}),s._p.forEach(g2=>{r6(n2,r.run(()=>g2({store:n2,app:s._a,pinia:s,options:i})))}),L&&n&&t.hydrate&&t.hydrate(n2.$state,L),f=!0,d=!0,n2}function Ha(c,e,t){let s,a;const n=typeof e=="function";typeof c=="string"?(s=c,a=n?t:e):(a=c,s=c.id);function r(i,o){const f=wC();return i=i||f&&z3(Hl),i&&Qt(i),i=gl,i._s.has(s)||(n?Vl(s,e,a,i):uy(s,a,i)),i._s.get(s)}return r.$id=s,r}const Ml="/telekung/assets/shubu.b5e7909d.mp4";const y3=(c,e)=>{const t=c.__vccOpts||c;for(const[s,a]of e)t[s]=a;return t},hy={},dy=b("link",{rel:"stylesheet",href:"../assets/style.css"},null,-1),my={id:"background"},py={class:"h"},vy={class:"fonts"},gy=va('<div id="background6"><div id="background5"><video autoplay="autoplay" loop="1" width="1100px" height="100px"><source src="'+Ml+'" type="video/mp4"></video></div></div><div id="background2"><div class="gap"><div class="image"><img src="https://cdn.discordapp.com/attachments/1034523519125557309/1045043933580894370/Screenshot_2022-11-24_012152.png" alt="shabu" width="800" height="800"></div><div><h1 class="slo">Tele Shabu</h1><div class="slo">\u0E2D\u0E34\u0E48\u0E21\u0E2D\u0E23\u0E48\u0E2D\u0E22\u0E01\u0E31\u0E1A \u0E40\u0E17\u0E40\u0E25\u0E0A\u0E32\u0E1A\u0E39 \u0E2B\u0E21\u0E49\u0E2D\u0E44\u0E1F\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E38\u0E02</div></div></div></div>',2),Hy={id:"background3"},zy={class:"icon"},Vy=b("div",null," Follow us ",-1);function My(c,e,t,s,a,n){const r=z4("font-awesome-icon"),i=z4("router-link");return Q2(),c1(C1,null,[dy,b("div",my,[b("div",py,[b("div",vy,[o2(i,{to:"/",class:"butto"},{default:R2(()=>[o2(r,{icon:"fa-solid fa-house"}),L2(" \xA0Home")]),_:1}),o2(i,{to:"/menu",class:"button1"},{default:R2(()=>[L2("Menu")]),_:1}),o2(i,{to:"/select",class:"button1"},{default:R2(()=>[L2("Table")]),_:1}),o2(i,{to:"/order",class:"button1"},{default:R2(()=>[L2("Order")]),_:1})])])]),gy,b("div",Hy,[b("div",zy,[Vy,o2(r,{icon:"fa-solid fa-phone"}),L2(" 02-32633910 "),o2(r,{icon:"fa-brands fa-square-facebook"})])])],64)}const Cy=y3(hy,[["render",My]]);const yy={data(){return{image_src:"https://cdn.discordapp.com/attachments/1039195786585579550/1044184930789371924/normal-menu.jpg"}},mounted(){this.normal()},methods:{normal(){this.image_src="https://cdn.discordapp.com/attachments/1039195786585579550/1044184930789371924/normal-menu.jpg"},regular(){this.image_src="https://cdn.discordapp.com/attachments/1039195786585579550/1044173205092450315/regular-menu.jpg"},premium(){this.image_src="https://cdn.discordapp.com/attachments/1039195786585579550/1044184964884865094/premium-menu.jpg"}}},by=b("link",{rel:"stylesheet",href:"../src/assets/style.css"},null,-1),Ly=b("link",{rel:"stylesheet",href:"../src/style.css"},null,-1),wy={id:"background"},xy={class:""},Sy=b("div",{class:"header"},[b("h1",null,"My Menu")],-1),ky={class:"bg-food"},Ny={class:"costom"},Ay={class:"regular"},_y=["src"];function Ey(c,e,t,s,a,n){const r=z4("router-link");return Q2(),c1(C1,null,[by,Ly,b("div",wy,[b("div",xy,[o2(r,{to:"/",class:"button"},{default:R2(()=>[L2("Home")]),_:1}),o2(r,{to:"/menu",class:"butto"},{default:R2(()=>[L2("Menu")]),_:1}),o2(r,{to:"/select",class:"button"},{default:R2(()=>[L2("Table")]),_:1}),o2(r,{to:"/order",class:"button"},{default:R2(()=>[L2("Order")]),_:1})])]),Sy,b("div",ky,[b("div",Ny,[b("button",{onClick:e[0]||(e[0]=(...i)=>n.normal&&n.normal(...i)),class:"button"},"normal"),b("button",{onClick:e[1]||(e[1]=(...i)=>n.regular&&n.regular(...i)),class:"button"},"regular"),b("button",{onClick:e[2]||(e[2]=(...i)=>n.premium&&n.premium(...i)),class:"button"},"premium")]),b("div",Ay,[b("img",{src:this.image_src},null,8,_y)])])],64)}const Ty=y3(yy,[["render",Ey]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=function(c){const e=[];let t=0;for(let s=0;s<c.length;s++){let a=c.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<c.length&&(c.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(c.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Py=function(c){const e=[];let t=0,s=0;for(;t<c.length;){const a=c[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const n=c[t++];e[s++]=String.fromCharCode((a&31)<<6|n&63)}else if(a>239&&a<365){const n=c[t++],r=c[t++],i=c[t++],o=((a&7)<<18|(n&63)<<12|(r&63)<<6|i&63)-65536;e[s++]=String.fromCharCode(55296+(o>>10)),e[s++]=String.fromCharCode(56320+(o&1023))}else{const n=c[t++],r=c[t++];e[s++]=String.fromCharCode((a&15)<<12|(n&63)<<6|r&63)}}return e.join("")},yl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<c.length;a+=3){const n=c[a],r=a+1<c.length,i=r?c[a+1]:0,o=a+2<c.length,f=o?c[a+2]:0,d=n>>2,p=(n&3)<<4|i>>4;let v=(i&15)<<2|f>>6,M=f&63;o||(M=64,r||(v=64)),s.push(t[d],t[p],t[v],t[M])}return s.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(Cl(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):Py(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<c.length;){const n=t[c.charAt(a++)],i=a<c.length?t[c.charAt(a)]:0;++a;const f=a<c.length?t[c.charAt(a)]:64;++a;const p=a<c.length?t[c.charAt(a)]:64;if(++a,n==null||i==null||f==null||p==null)throw Error();const v=n<<2|i>>4;if(s.push(v),f!==64){const M=i<<4&240|f>>2;if(s.push(M),p!==64){const L=f<<6&192|p;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}},Iy=function(c){const e=Cl(c);return yl.encodeByteArray(e,!0)},lt=function(c){return Iy(c).replace(/\./g,"")},Oy=function(c){try{return yl.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Dy(){const c=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof c=="object"&&c.id!==void 0}function bl(){return typeof indexedDB=="object"}function Ll(){return new Promise((c,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),c(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var n;e(((n=a.error)===null||n===void 0?void 0:n.message)||"")}}catch(t){e(t)}})}function Ry(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=()=>Fy().__FIREBASE_DEFAULTS__,Uy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const c=process.env.__FIREBASE_DEFAULTS__;if(c)return JSON.parse(c)},jy=()=>{if(typeof document>"u")return;let c;try{c=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=c&&Oy(c[1]);return e&&JSON.parse(e)},wl=()=>{try{return By()||Uy()||jy()}catch(c){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${c}`);return}},$y=c=>{var e,t;return(t=(e=wl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[c]},xl=c=>{const e=$y(c);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},qy=()=>{var c;return(c=wl())===null||c===void 0?void 0:c.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(c,e){if(c.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=c.iat||0,n=c.sub||c.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},c),i="";return[lt(JSON.stringify(t)),lt(JSON.stringify(r)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="FirebaseError";class $3 extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Gy,Object.setPrototypeOf(this,$3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xt.prototype.create)}}class Xt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,n=this.errors[e],r=n?Ky(n,s):"Error",i=`${this.serviceName}: ${r} (${a}).`;return new $3(a,i,s)}}function Ky(c,e){return c.replace(Yy,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Yy=/\{\$([^}]+)}/g;function ft(c,e){if(c===e)return!0;const t=Object.keys(c),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const n=c[a],r=e[a];if(pi(n)&&pi(r)){if(!ft(n,r))return!1}else if(n!==r)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function pi(c){return c!==null&&typeof c=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=1e3,Xy=2,Jy=4*60*60*1e3,Zy=.5;function vi(c,e=Qy,t=Xy){const s=e*Math.pow(t,c),a=Math.round(Zy*s*(Math.random()-.5)*2);return Math.min(Jy,s+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(c){return c&&c._delegate?c._delegate:c}class M3{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F6="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Wy;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(n){if(a)return null;throw n}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tb(e))try{this.getOrInitializeService({instanceIdentifier:F6})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const n=this.getOrInitializeService({instanceIdentifier:a});s.resolve(n)}catch{}}}}clearInstance(e=F6){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=F6){return this.instances.has(e)}getOptions(e=F6){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);s===i&&r.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),n=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;n.add(e),this.onInitCallbacks.set(a,n);const r=this.instances.get(a);return r&&e(r,a),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cb(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=F6){return this.component?this.component.multipleInstances?e:F6:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cb(c){return c===F6?void 0:c}function tb(c){return c.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i1;(function(c){c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT"})(i1||(i1={}));const ab={debug:i1.DEBUG,verbose:i1.VERBOSE,info:i1.INFO,warn:i1.WARN,error:i1.ERROR,silent:i1.SILENT},nb=i1.INFO,rb={[i1.DEBUG]:"log",[i1.VERBOSE]:"log",[i1.INFO]:"info",[i1.WARN]:"warn",[i1.ERROR]:"error"},ib=(c,e,...t)=>{if(e<c.logLevel)return;const s=new Date().toISOString(),a=rb[e];if(a)console[a](`[${s}]  ${c.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class za{constructor(e){this.name=e,this._logLevel=nb,this._logHandler=ib,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i1))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ab[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i1.DEBUG,...e),this._logHandler(this,i1.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i1.VERBOSE,...e),this._logHandler(this,i1.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i1.INFO,...e),this._logHandler(this,i1.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i1.WARN,...e),this._logHandler(this,i1.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i1.ERROR,...e),this._logHandler(this,i1.ERROR,...e)}}const ob=(c,e)=>e.some(t=>c instanceof t);let gi,Hi;function lb(){return gi||(gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fb(){return Hi||(Hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,ts=new WeakMap,Nl=new WeakMap,g7=new WeakMap,Va=new WeakMap;function ub(c){const e=new Promise((t,s)=>{const a=()=>{c.removeEventListener("success",n),c.removeEventListener("error",r)},n=()=>{t(h6(c.result)),a()},r=()=>{s(c.error),a()};c.addEventListener("success",n),c.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&kl.set(t,c)}).catch(()=>{}),Va.set(e,c),e}function hb(c){if(ts.has(c))return;const e=new Promise((t,s)=>{const a=()=>{c.removeEventListener("complete",n),c.removeEventListener("error",r),c.removeEventListener("abort",r)},n=()=>{t(),a()},r=()=>{s(c.error||new DOMException("AbortError","AbortError")),a()};c.addEventListener("complete",n),c.addEventListener("error",r),c.addEventListener("abort",r)});ts.set(c,e)}let ss={get(c,e,t){if(c instanceof IDBTransaction){if(e==="done")return ts.get(c);if(e==="objectStoreNames")return c.objectStoreNames||Nl.get(c);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return h6(c[e])},set(c,e,t){return c[e]=t,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function db(c){ss=c(ss)}function mb(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=c.call(H7(this),e,...t);return Nl.set(s,e.sort?e.sort():[e]),h6(s)}:fb().includes(c)?function(...e){return c.apply(H7(this),e),h6(kl.get(this))}:function(...e){return h6(c.apply(H7(this),e))}}function pb(c){return typeof c=="function"?mb(c):(c instanceof IDBTransaction&&hb(c),ob(c,lb())?new Proxy(c,ss):c)}function h6(c){if(c instanceof IDBRequest)return ub(c);if(g7.has(c))return g7.get(c);const e=pb(c);return e!==c&&(g7.set(c,e),Va.set(e,c)),e}const H7=c=>Va.get(c);function Al(c,e,{blocked:t,upgrade:s,blocking:a,terminated:n}={}){const r=indexedDB.open(c,e),i=h6(r);return s&&r.addEventListener("upgradeneeded",o=>{s(h6(r.result),o.oldVersion,o.newVersion,h6(r.transaction))}),t&&r.addEventListener("blocked",()=>t()),i.then(o=>{n&&o.addEventListener("close",()=>n()),a&&o.addEventListener("versionchange",()=>a())}).catch(()=>{}),i}const vb=["get","getKey","getAll","getAllKeys","count"],gb=["put","add","delete","clear"],z7=new Map;function zi(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if(z7.get(e))return z7.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=gb.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||vb.includes(t)))return;const n=async function(r,...i){const o=this.transaction(r,a?"readwrite":"readonly");let f=o.store;return s&&(f=f.index(i.shift())),(await Promise.all([f[t](...i),a&&o.done]))[0]};return z7.set(e,n),n}db(c=>({...c,get:(e,t,s)=>zi(e,t)||c.get(e,t,s),has:(e,t)=>!!zi(e,t)||c.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zb(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function zb(c){const e=c.getComponent();return(e==null?void 0:e.type)==="VERSION"}const as="@firebase/app",Vi="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new za("@firebase/app"),Vb="@firebase/app-compat",Mb="@firebase/analytics-compat",Cb="@firebase/analytics",yb="@firebase/app-check-compat",bb="@firebase/app-check",Lb="@firebase/auth",wb="@firebase/auth-compat",xb="@firebase/database",Sb="@firebase/database-compat",kb="@firebase/functions",Nb="@firebase/functions-compat",Ab="@firebase/installations",_b="@firebase/installations-compat",Eb="@firebase/messaging",Tb="@firebase/messaging-compat",Pb="@firebase/performance",Ib="@firebase/performance-compat",Ob="@firebase/remote-config",Db="@firebase/remote-config-compat",Rb="@firebase/storage",Fb="@firebase/storage-compat",Bb="@firebase/firestore",Ub="@firebase/firestore-compat",jb="firebase",$b="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]",qb={[as]:"fire-core",[Vb]:"fire-core-compat",[Cb]:"fire-analytics",[Mb]:"fire-analytics-compat",[bb]:"fire-app-check",[yb]:"fire-app-check-compat",[Lb]:"fire-auth",[wb]:"fire-auth-compat",[xb]:"fire-rtdb",[Sb]:"fire-rtdb-compat",[kb]:"fire-fn",[Nb]:"fire-fn-compat",[Ab]:"fire-iid",[_b]:"fire-iid-compat",[Eb]:"fire-fcm",[Tb]:"fire-fcm-compat",[Pb]:"fire-perf",[Ib]:"fire-perf-compat",[Ob]:"fire-rc",[Db]:"fire-rc-compat",[Rb]:"fire-gcs",[Fb]:"fire-gcs-compat",[Bb]:"fire-fst",[Ub]:"fire-fst-compat","fire-js":"fire-js",[jb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Map,rs=new Map;function Wb(c,e){try{c.container.addComponent(e)}catch(t){te.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,t)}}function P3(c){const e=c.name;if(rs.has(e))return te.debug(`There were multiple attempts to register component ${e}.`),!1;rs.set(e,c);for(const t of ut.values())Wb(t,c);return!0}function u0(c,e){const t=c.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),c.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},d6=new Xt("app","Firebase",Gb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new M3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw d6.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=$b;function El(c,e={}){let t=c;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ns,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw d6.create("bad-app-name",{appName:String(a)});if(t||(t=qy()),!t)throw d6.create("no-options");const n=ut.get(a);if(n){if(ft(t,n.options)&&ft(s,n.config))return n;throw d6.create("duplicate-app",{appName:a})}const r=new sb(a);for(const o of rs.values())r.addComponent(o);const i=new Kb(t,s,r);return ut.set(a,i),i}function Ma(c=ns){const e=ut.get(c);if(!e&&c===ns)return El();if(!e)throw d6.create("no-app",{appName:c});return e}function W4(c,e,t){var s;let a=(s=qb[c])!==null&&s!==void 0?s:c;t&&(a+=`-${t}`);const n=a.match(/\s|\//),r=e.match(/\s|\//);if(n||r){const i=[`Unable to register library "${a}" with version "${e}":`];n&&i.push(`library name "${a}" contains illegal characters (whitespace or "/")`),n&&r&&i.push("and"),r&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),te.warn(i.join(" "));return}P3(new M3(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="firebase-heartbeat-database",Qb=1,r8="firebase-heartbeat-store";let V7=null;function Tl(){return V7||(V7=Al(Yb,Qb,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(r8)}}}).catch(c=>{throw d6.create("idb-open",{originalErrorMessage:c.message})})),V7}async function Xb(c){var e;try{return(await Tl()).transaction(r8).objectStore(r8).get(Pl(c))}catch(t){if(t instanceof $3)te.warn(t.message);else{const s=d6.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});te.warn(s.message)}}}async function Mi(c,e){var t;try{const a=(await Tl()).transaction(r8,"readwrite");return await a.objectStore(r8).put(e,Pl(c)),a.done}catch(s){if(s instanceof $3)te.warn(s.message);else{const a=d6.create("idb-set",{originalErrorMessage:(t=s)===null||t===void 0?void 0:t.message});te.warn(a.message)}}}function Pl(c){return`${c.name}!${c.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=1024,Zb=30*24*60*60*1e3;class eL{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tL(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ci();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const n=new Date(a.date).valueOf();return Date.now()-n<=Zb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ci(),{heartbeatsToSend:t,unsentEntries:s}=cL(this._heartbeatsCache.heartbeats),a=lt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Ci(){return new Date().toISOString().substring(0,10)}function cL(c,e=Jb){const t=[];let s=c.slice();for(const a of c){const n=t.find(r=>r.agent===a.agent);if(n){if(n.dates.push(a.date),yi(t)>e){n.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),yi(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class tL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bl()?Ll().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Mi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Mi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function yi(c){return lt(JSON.stringify({version:2,heartbeats:c})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(c){P3(new M3("platform-logger",e=>new Hb(e),"PRIVATE")),P3(new M3("heartbeat",e=>new eL(e),"PRIVATE")),W4(as,Vi,c),W4(as,Vi,"esm2017"),W4("fire-js","")}sL("");var aL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d2,Ca=Ca||{},y2=aL||self;function ht(){}function Jt(c){var e=typeof c;return e=e!="object"?e:c?Array.isArray(c)?"array":e:"null",e=="array"||e=="object"&&typeof c.length=="number"}function x8(c){var e=typeof c;return e=="object"&&c!=null||e=="function"}function nL(c){return Object.prototype.hasOwnProperty.call(c,M7)&&c[M7]||(c[M7]=++rL)}var M7="closure_uid_"+(1e9*Math.random()>>>0),rL=0;function iL(c,e,t){return c.call.apply(c.bind,arguments)}function oL(c,e,t){if(!c)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,s),c.apply(e,a)}}return function(){return c.apply(e,arguments)}}function g4(c,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g4=iL:g4=oL,g4.apply(null,arguments)}function Sc(c,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),c.apply(this,s)}}function d4(c,e){function t(){}t.prototype=e.prototype,c.X=e.prototype,c.prototype=new t,c.prototype.constructor=c,c.Wb=function(s,a,n){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[a].apply(s,r)}}function y6(){this.s=this.s,this.o=this.o}var lL=0;y6.prototype.s=!1;y6.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lL!=0)&&nL(this)};y6.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Il=Array.prototype.indexOf?function(c,e){return Array.prototype.indexOf.call(c,e,void 0)}:function(c,e){if(typeof c=="string")return typeof e!="string"||e.length!=1?-1:c.indexOf(e,0);for(let t=0;t<c.length;t++)if(t in c&&c[t]===e)return t;return-1};function ya(c){const e=c.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=c[s];return t}return[]}function bi(c,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Jt(s)){const a=c.length||0,n=s.length||0;c.length=a+n;for(let r=0;r<n;r++)c[a+r]=s[r]}else c.push(s)}}function H4(c,e){this.type=c,this.g=this.target=e,this.defaultPrevented=!1}H4.prototype.h=function(){this.defaultPrevented=!0};var fL=function(){if(!y2.addEventListener||!Object.defineProperty)return!1;var c=!1,e=Object.defineProperty({},"passive",{get:function(){c=!0}});try{y2.addEventListener("test",ht,e),y2.removeEventListener("test",ht,e)}catch{}return c}();function dt(c){return/^[\s\xa0]*$/.test(c)}var Li=String.prototype.trim?function(c){return c.trim()}:function(c){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(c)[1]};function C7(c,e){return c<e?-1:c>e?1:0}function Zt(){var c=y2.navigator;return c&&(c=c.userAgent)?c:""}function g3(c){return Zt().indexOf(c)!=-1}function ba(c){return ba[" "](c),c}ba[" "]=ht;function uL(c){var e=mL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=c(9)}var hL=g3("Opera"),Ye=g3("Trident")||g3("MSIE"),Ol=g3("Edge"),is=Ol||Ye,Dl=g3("Gecko")&&!(Zt().toLowerCase().indexOf("webkit")!=-1&&!g3("Edge"))&&!(g3("Trident")||g3("MSIE"))&&!g3("Edge"),dL=Zt().toLowerCase().indexOf("webkit")!=-1&&!g3("Edge");function Rl(){var c=y2.document;return c?c.documentMode:void 0}var mt;e:{var y7="",b7=function(){var c=Zt();if(Dl)return/rv:([^\);]+)(\)|;)/.exec(c);if(Ol)return/Edge\/([\d\.]+)/.exec(c);if(Ye)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c);if(dL)return/WebKit\/(\S+)/.exec(c);if(hL)return/(?:Version)[ \/]?(\S+)/.exec(c)}();if(b7&&(y7=b7?b7[1]:""),Ye){var L7=Rl();if(L7!=null&&L7>parseFloat(y7)){mt=String(L7);break e}}mt=y7}var mL={};function pL(){return uL(function(){let c=0;const e=Li(String(mt)).split("."),t=Li("9").split("."),s=Math.max(e.length,t.length);for(let r=0;c==0&&r<s;r++){var a=e[r]||"",n=t[r]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""],a[0].length==0&&n[0].length==0)break;c=C7(a[1].length==0?0:parseInt(a[1],10),n[1].length==0?0:parseInt(n[1],10))||C7(a[2].length==0,n[2].length==0)||C7(a[2],n[2]),a=a[3],n=n[3]}while(c==0)}return 0<=c})}var os;if(y2.document&&Ye){var wi=Rl();os=wi||parseInt(mt,10)||void 0}else os=void 0;var vL=os;function i8(c,e){if(H4.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var t=this.type=c.type,s=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=e,e=c.relatedTarget){if(Dl){e:{try{ba(e.nodeName);var a=!0;break e}catch{}a=!1}a||(e=null)}}else t=="mouseover"?e=c.fromElement:t=="mouseout"&&(e=c.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:gL[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&i8.X.h.call(this)}}d4(i8,H4);var gL={2:"touch",3:"pen",4:"mouse"};i8.prototype.h=function(){i8.X.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var S8="closure_listenable_"+(1e6*Math.random()|0),HL=0;function zL(c,e,t,s,a){this.listener=c,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=a,this.key=++HL,this.ba=this.ea=!1}function e5(c){c.ba=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function La(c,e,t){for(const s in c)e.call(t,c[s],s,c)}function Fl(c){const e={};for(const t in c)e[t]=c[t];return e}const xi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bl(c,e){let t,s;for(let a=1;a<arguments.length;a++){s=arguments[a];for(t in s)c[t]=s[t];for(let n=0;n<xi.length;n++)t=xi[n],Object.prototype.hasOwnProperty.call(s,t)&&(c[t]=s[t])}}function c5(c){this.src=c,this.g={},this.h=0}c5.prototype.add=function(c,e,t,s,a){var n=c.toString();c=this.g[n],c||(c=this.g[n]=[],this.h++);var r=fs(c,e,s,a);return-1<r?(e=c[r],t||(e.ea=!1)):(e=new zL(e,this.src,n,!!s,a),e.ea=t,c.push(e)),e};function ls(c,e){var t=e.type;if(t in c.g){var s=c.g[t],a=Il(s,e),n;(n=0<=a)&&Array.prototype.splice.call(s,a,1),n&&(e5(e),c.g[t].length==0&&(delete c.g[t],c.h--))}}function fs(c,e,t,s){for(var a=0;a<c.length;++a){var n=c[a];if(!n.ba&&n.listener==e&&n.capture==!!t&&n.ha==s)return a}return-1}var wa="closure_lm_"+(1e6*Math.random()|0),w7={};function Ul(c,e,t,s,a){if(s&&s.once)return $l(c,e,t,s,a);if(Array.isArray(e)){for(var n=0;n<e.length;n++)Ul(c,e[n],t,s,a);return null}return t=ka(t),c&&c[S8]?c.N(e,t,x8(s)?!!s.capture:!!s,a):jl(c,e,t,!1,s,a)}function jl(c,e,t,s,a,n){if(!e)throw Error("Invalid event type");var r=x8(a)?!!a.capture:!!a,i=Sa(c);if(i||(c[wa]=i=new c5(c)),t=i.add(e,t,s,r,n),t.proxy)return t;if(s=VL(),t.proxy=s,s.src=c,s.listener=t,c.addEventListener)fL||(a=r),a===void 0&&(a=!1),c.addEventListener(e.toString(),s,a);else if(c.attachEvent)c.attachEvent(Wl(e.toString()),s);else if(c.addListener&&c.removeListener)c.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function VL(){function c(t){return e.call(c.src,c.listener,t)}const e=ML;return c}function $l(c,e,t,s,a){if(Array.isArray(e)){for(var n=0;n<e.length;n++)$l(c,e[n],t,s,a);return null}return t=ka(t),c&&c[S8]?c.O(e,t,x8(s)?!!s.capture:!!s,a):jl(c,e,t,!0,s,a)}function ql(c,e,t,s,a){if(Array.isArray(e))for(var n=0;n<e.length;n++)ql(c,e[n],t,s,a);else s=x8(s)?!!s.capture:!!s,t=ka(t),c&&c[S8]?(c=c.i,e=String(e).toString(),e in c.g&&(n=c.g[e],t=fs(n,t,s,a),-1<t&&(e5(n[t]),Array.prototype.splice.call(n,t,1),n.length==0&&(delete c.g[e],c.h--)))):c&&(c=Sa(c))&&(e=c.g[e.toString()],c=-1,e&&(c=fs(e,t,s,a)),(t=-1<c?e[c]:null)&&xa(t))}function xa(c){if(typeof c!="number"&&c&&!c.ba){var e=c.src;if(e&&e[S8])ls(e.i,c);else{var t=c.type,s=c.proxy;e.removeEventListener?e.removeEventListener(t,s,c.capture):e.detachEvent?e.detachEvent(Wl(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Sa(e))?(ls(t,c),t.h==0&&(t.src=null,e[wa]=null)):e5(c)}}}function Wl(c){return c in w7?w7[c]:w7[c]="on"+c}function ML(c,e){if(c.ba)c=!0;else{e=new i8(e,this);var t=c.listener,s=c.ha||c.src;c.ea&&xa(c),c=t.call(s,e)}return c}function Sa(c){return c=c[wa],c instanceof c5?c:null}var x7="__closure_events_fn_"+(1e9*Math.random()>>>0);function ka(c){return typeof c=="function"?c:(c[x7]||(c[x7]=function(e){return c.handleEvent(e)}),c[x7])}function r4(){y6.call(this),this.i=new c5(this),this.P=this,this.I=null}d4(r4,y6);r4.prototype[S8]=!0;r4.prototype.removeEventListener=function(c,e,t,s){ql(this,c,e,t,s)};function h4(c,e){var t,s=c.I;if(s)for(t=[];s;s=s.I)t.push(s);if(c=c.P,s=e.type||e,typeof e=="string")e=new H4(e,c);else if(e instanceof H4)e.target=e.target||c;else{var a=e;e=new H4(s,c),Bl(e,a)}if(a=!0,t)for(var n=t.length-1;0<=n;n--){var r=e.g=t[n];a=kc(r,s,!0,e)&&a}if(r=e.g=c,a=kc(r,s,!0,e)&&a,a=kc(r,s,!1,e)&&a,t)for(n=0;n<t.length;n++)r=e.g=t[n],a=kc(r,s,!1,e)&&a}r4.prototype.M=function(){if(r4.X.M.call(this),this.i){var c=this.i,e;for(e in c.g){for(var t=c.g[e],s=0;s<t.length;s++)e5(t[s]);delete c.g[e],c.h--}}this.I=null};r4.prototype.N=function(c,e,t,s){return this.i.add(String(c),e,!1,t,s)};r4.prototype.O=function(c,e,t,s){return this.i.add(String(c),e,!0,t,s)};function kc(c,e,t,s){if(e=c.i.g[String(e)],!e)return!0;e=e.concat();for(var a=!0,n=0;n<e.length;++n){var r=e[n];if(r&&!r.ba&&r.capture==t){var i=r.listener,o=r.ha||r.src;r.ea&&ls(c.i,r),a=i.call(o,s)!==!1&&a}}return a&&!s.defaultPrevented}var Na=y2.JSON.stringify;function CL(){var c=Yl;let e=null;return c.g&&(e=c.g,c.g=c.g.next,c.g||(c.h=null),e.next=null),e}class yL{constructor(){this.h=this.g=null}add(e,t){const s=Gl.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Gl=new class{constructor(c,e){this.i=c,this.j=e,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}(()=>new bL,c=>c.reset());class bL{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function LL(c){y2.setTimeout(()=>{throw c},0)}function Kl(c,e){us||wL(),hs||(us(),hs=!0),Yl.add(c,e)}var us;function wL(){var c=y2.Promise.resolve(void 0);us=function(){c.then(xL)}}var hs=!1,Yl=new yL;function xL(){for(var c;c=CL();){try{c.h.call(c.g)}catch(t){LL(t)}var e=Gl;e.j(c),100>e.h&&(e.h++,c.next=e.g,e.g=c)}hs=!1}function t5(c,e){r4.call(this),this.h=c||1,this.g=e||y2,this.j=g4(this.lb,this),this.l=Date.now()}d4(t5,r4);d2=t5.prototype;d2.ca=!1;d2.R=null;d2.lb=function(){if(this.ca){var c=Date.now()-this.l;0<c&&c<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-c):(this.R&&(this.g.clearTimeout(this.R),this.R=null),h4(this,"tick"),this.ca&&(Aa(this),this.start()))}};d2.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Aa(c){c.ca=!1,c.R&&(c.g.clearTimeout(c.R),c.R=null)}d2.M=function(){t5.X.M.call(this),Aa(this),delete this.g};function _a(c,e,t){if(typeof c=="function")t&&(c=g4(c,t));else if(c&&typeof c.handleEvent=="function")c=g4(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:y2.setTimeout(c,e||0)}function Ql(c){c.g=_a(()=>{c.g=null,c.i&&(c.i=!1,Ql(c))},c.j);const e=c.h;c.h=null,c.m.apply(null,e)}class SL extends y6{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ql(this)}M(){super.M(),this.g&&(y2.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function o8(c){y6.call(this),this.h=c,this.g={}}d4(o8,y6);var Si=[];function Xl(c,e,t,s){Array.isArray(t)||(t&&(Si[0]=t.toString()),t=Si);for(var a=0;a<t.length;a++){var n=Ul(e,t[a],s||c.handleEvent,!1,c.h||c);if(!n)break;c.g[n.key]=n}}function Jl(c){La(c.g,function(e,t){this.g.hasOwnProperty(t)&&xa(e)},c),c.g={}}o8.prototype.M=function(){o8.X.M.call(this),Jl(this)};o8.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function s5(){this.g=!0}s5.prototype.Aa=function(){this.g=!1};function kL(c,e,t,s,a,n){c.info(function(){if(c.g)if(n)for(var r="",i=n.split("&"),o=0;o<i.length;o++){var f=i[o].split("=");if(1<f.length){var d=f[0];f=f[1];var p=d.split("_");r=2<=p.length&&p[1]=="type"?r+(d+"="+f+"&"):r+(d+"=redacted&")}}else r=null;else r=n;return"XMLHTTP REQ ("+s+") [attempt "+a+"]: "+e+`
`+t+`
`+r})}function NL(c,e,t,s,a,n,r){c.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+a+"]: "+e+`
`+t+`
`+n+" "+r})}function _e(c,e,t,s){c.info(function(){return"XMLHTTP TEXT ("+e+"): "+_L(c,t)+(s?" "+s:"")})}function AL(c,e){c.info(function(){return"TIMEOUT: "+e})}s5.prototype.info=function(){};function _L(c,e){if(!c.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(c=0;c<t.length;c++)if(Array.isArray(t[c])){var s=t[c];if(!(2>s.length)){var a=s[1];if(Array.isArray(a)&&!(1>a.length)){var n=a[0];if(n!="noop"&&n!="stop"&&n!="close")for(var r=1;r<a.length;r++)a[r]=""}}}}return Na(t)}catch{return e}}var ue={},ki=null;function a5(){return ki=ki||new r4}ue.Pa="serverreachability";function Zl(c){H4.call(this,ue.Pa,c)}d4(Zl,H4);function l8(c){const e=a5();h4(e,new Zl(e))}ue.STAT_EVENT="statevent";function ef(c,e){H4.call(this,ue.STAT_EVENT,c),this.stat=e}d4(ef,H4);function w4(c){const e=a5();h4(e,new ef(e,c))}ue.Qa="timingevent";function cf(c,e){H4.call(this,ue.Qa,c),this.size=e}d4(cf,H4);function k8(c,e){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return y2.setTimeout(function(){c()},e)}var n5={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ea(){}Ea.prototype.h=null;function Ni(c){return c.h||(c.h=c.i())}function sf(){}var N8={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ta(){H4.call(this,"d")}d4(Ta,H4);function Pa(){H4.call(this,"c")}d4(Pa,H4);var ds;function r5(){}d4(r5,Ea);r5.prototype.g=function(){return new XMLHttpRequest};r5.prototype.i=function(){return{}};ds=new r5;function A8(c,e,t,s){this.l=c,this.j=e,this.m=t,this.U=s||1,this.S=new o8(this),this.O=EL,c=is?125:void 0,this.T=new t5(c),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new af}function af(){this.i=null,this.g="",this.h=!1}var EL=45e3,ms={},pt={};d2=A8.prototype;d2.setTimeout=function(c){this.O=c};function ps(c,e,t){c.K=1,c.v=o5(I3(e)),c.s=t,c.P=!0,nf(c,null)}function nf(c,e){c.F=Date.now(),_8(c),c.A=I3(c.v);var t=c.A,s=c.U;Array.isArray(s)||(s=[String(s)]),mf(t.i,"t",s),c.C=0,t=c.l.H,c.h=new af,c.g=Pf(c.l,t?e:null,!c.s),0<c.N&&(c.L=new SL(g4(c.La,c,c.g),c.N)),Xl(c.S,c.g,"readystatechange",c.ib),e=c.H?Fl(c.H):{},c.s?(c.u||(c.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",c.g.da(c.A,c.u,c.s,e)):(c.u="GET",c.g.da(c.A,c.u,null,e)),l8(),kL(c.j,c.u,c.A,c.m,c.U,c.s)}d2.ib=function(c){c=c.target;const e=this.L;e&&A3(c)==3?e.l():this.La(c)};d2.La=function(c){try{if(c==this.g)e:{const d=A3(this.g);var e=this.g.Ea();const p=this.g.aa();if(!(3>d)&&(d!=3||is||this.g&&(this.h.h||this.g.fa()||Ti(this.g)))){this.I||d!=4||e==7||(e==8||0>=p?l8(3):l8(2)),i5(this);var t=this.g.aa();this.Y=t;c:if(rf(this)){var s=Ti(this.g);c="";var a=s.length,n=A3(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){q6(this),B0(this);var r="";break c}this.h.i=new y2.TextDecoder}for(e=0;e<a;e++)this.h.h=!0,c+=this.h.i.decode(s[e],{stream:n&&e==a-1});s.splice(0,a),this.h.g+=c,this.C=0,r=this.h.g}else r=this.g.fa();if(this.i=t==200,NL(this.j,this.u,this.A,this.m,this.U,d,t),this.i){if(this.Z&&!this.J){c:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(i)){var f=i;break c}}f=null}if(t=f)_e(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vs(this,t);else{this.i=!1,this.o=3,w4(12),q6(this),B0(this);break e}}this.P?(of(this,d,r),is&&this.i&&d==3&&(Xl(this.S,this.T,"tick",this.hb),this.T.start())):(_e(this.j,this.m,r,null),vs(this,r)),d==4&&q6(this),this.i&&!this.I&&(d==4?Af(this.l,this):(this.i=!1,_8(this)))}else t==400&&0<r.indexOf("Unknown SID")?(this.o=3,w4(12)):(this.o=0,w4(13)),q6(this),B0(this)}}}catch{}finally{}};function rf(c){return c.g?c.u=="GET"&&c.K!=2&&c.l.Da:!1}function of(c,e,t){let s=!0,a;for(;!c.I&&c.C<t.length;)if(a=TL(c,t),a==pt){e==4&&(c.o=4,w4(14),s=!1),_e(c.j,c.m,null,"[Incomplete Response]");break}else if(a==ms){c.o=4,w4(15),_e(c.j,c.m,t,"[Invalid Chunk]"),s=!1;break}else _e(c.j,c.m,a,null),vs(c,a);rf(c)&&a!=pt&&a!=ms&&(c.h.g="",c.C=0),e!=4||t.length!=0||c.h.h||(c.o=1,w4(16),s=!1),c.i=c.i&&s,s?0<t.length&&!c.$&&(c.$=!0,e=c.l,e.g==c&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ua(e),e.K=!0,w4(11))):(_e(c.j,c.m,t,"[Invalid Chunked Response]"),q6(c),B0(c))}d2.hb=function(){if(this.g){var c=A3(this.g),e=this.g.fa();this.C<e.length&&(i5(this),of(this,c,e),this.i&&c!=4&&_8(this))}};function TL(c,e){var t=c.C,s=e.indexOf(`
`,t);return s==-1?pt:(t=Number(e.substring(t,s)),isNaN(t)?ms:(s+=1,s+t>e.length?pt:(e=e.substr(s,t),c.C=s+t,e)))}d2.cancel=function(){this.I=!0,q6(this)};function _8(c){c.V=Date.now()+c.O,lf(c,c.O)}function lf(c,e){if(c.B!=null)throw Error("WatchDog timer not null");c.B=k8(g4(c.gb,c),e)}function i5(c){c.B&&(y2.clearTimeout(c.B),c.B=null)}d2.gb=function(){this.B=null;const c=Date.now();0<=c-this.V?(AL(this.j,this.A),this.K!=2&&(l8(),w4(17)),q6(this),this.o=2,B0(this)):lf(this,this.V-c)};function B0(c){c.l.G==0||c.I||Af(c.l,c)}function q6(c){i5(c);var e=c.L;e&&typeof e.na=="function"&&e.na(),c.L=null,Aa(c.T),Jl(c.S),c.g&&(e=c.g,c.g=null,e.abort(),e.na())}function vs(c,e){try{var t=c.l;if(t.G!=0&&(t.g==c||gs(t.h,c))){if(!c.J&&gs(t.h,c)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var a=s;if(a[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<c.F)Ht(t),u5(t);else break e;Ba(t),w4(18)}}else t.Ba=a[1],0<t.Ba-t.T&&37500>a[2]&&t.L&&t.A==0&&!t.v&&(t.v=k8(g4(t.cb,t),6e3));if(1>=gf(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else W6(t,11)}else if((c.J||t.g==c)&&Ht(t),!dt(e))for(a=t.Fa.g.parse(e),e=0;e<a.length;e++){let f=a[e];if(t.T=f[0],f=f[1],t.G==2)if(f[0]=="c"){t.I=f[1],t.ka=f[2];const d=f[3];d!=null&&(t.ma=d,t.j.info("VER="+t.ma));const p=f[4];p!=null&&(t.Ca=p,t.j.info("SVER="+t.Ca));const v=f[5];v!=null&&typeof v=="number"&&0<v&&(s=1.5*v,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const M=c.g;if(M){const L=M.g?M.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(L){var n=s.h;n.g||L.indexOf("spdy")==-1&&L.indexOf("quic")==-1&&L.indexOf("h2")==-1||(n.j=n.l,n.g=new Set,n.h&&(Ia(n,n.h),n.h=null))}if(s.D){const S=M.g?M.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.za=S,T1(s.F,s.D,S))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-c.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var r=c;if(s.sa=Tf(s,s.H?s.ka:null,s.V),r.J){Hf(s.h,r);var i=r,o=s.J;o&&i.setTimeout(o),i.B&&(i5(i),_8(i)),s.g=r}else kf(s);0<t.i.length&&h5(t)}else f[0]!="stop"&&f[0]!="close"||W6(t,7);else t.G==3&&(f[0]=="stop"||f[0]=="close"?f[0]=="stop"?W6(t,7):Fa(t):f[0]!="noop"&&t.l&&t.l.wa(f),t.A=0)}}l8(4)}catch{}}function PL(c){if(c.W&&typeof c.W=="function")return c.W();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(Jt(c)){for(var e=[],t=c.length,s=0;s<t;s++)e.push(c[s]);return e}e=[],t=0;for(s in c)e[t++]=c[s];return e}function IL(c){if(c.oa&&typeof c.oa=="function")return c.oa();if(!c.W||typeof c.W!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(Jt(c)||typeof c=="string"){var e=[];c=c.length;for(var t=0;t<c;t++)e.push(t);return e}e=[],t=0;for(const s in c)e[t++]=s;return e}}}function ff(c,e){if(c.forEach&&typeof c.forEach=="function")c.forEach(e,void 0);else if(Jt(c)||typeof c=="string")Array.prototype.forEach.call(c,e,void 0);else for(var t=IL(c),s=PL(c),a=s.length,n=0;n<a;n++)e.call(void 0,s[n],t&&t[n],c)}var uf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OL(c,e){if(c){c=c.split("&");for(var t=0;t<c.length;t++){var s=c[t].indexOf("="),a=null;if(0<=s){var n=c[t].substring(0,s);a=c[t].substring(s+1)}else n=c[t];e(n,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}function Z6(c,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,c instanceof Z6){this.h=e!==void 0?e:c.h,vt(this,c.j),this.s=c.s,this.g=c.g,gt(this,c.m),this.l=c.l,e=c.i;var t=new f8;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ai(this,t),this.o=c.o}else c&&(t=String(c).match(uf))?(this.h=!!e,vt(this,t[1]||"",!0),this.s=T0(t[2]||""),this.g=T0(t[3]||"",!0),gt(this,t[4]),this.l=T0(t[5]||"",!0),Ai(this,t[6]||"",!0),this.o=T0(t[7]||"")):(this.h=!!e,this.i=new f8(null,this.h))}Z6.prototype.toString=function(){var c=[],e=this.j;e&&c.push(P0(e,_i,!0),":");var t=this.g;return(t||e=="file")&&(c.push("//"),(e=this.s)&&c.push(P0(e,_i,!0),"@"),c.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&c.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&c.push("/"),c.push(P0(t,t.charAt(0)=="/"?FL:RL,!0))),(t=this.i.toString())&&c.push("?",t),(t=this.o)&&c.push("#",P0(t,UL)),c.join("")};function I3(c){return new Z6(c)}function vt(c,e,t){c.j=t?T0(e,!0):e,c.j&&(c.j=c.j.replace(/:$/,""))}function gt(c,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);c.m=e}else c.m=null}function Ai(c,e,t){e instanceof f8?(c.i=e,jL(c.i,c.h)):(t||(e=P0(e,BL)),c.i=new f8(e,c.h))}function T1(c,e,t){c.i.set(e,t)}function o5(c){return T1(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function T0(c,e){return c?e?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function P0(c,e,t){return typeof c=="string"?(c=encodeURI(c).replace(e,DL),t&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function DL(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var _i=/[#\/\?@]/g,RL=/[#\?:]/g,FL=/[#\?]/g,BL=/[#\?@]/g,UL=/#/g;function f8(c,e){this.h=this.g=null,this.i=c||null,this.j=!!e}function b6(c){c.g||(c.g=new Map,c.h=0,c.i&&OL(c.i,function(e,t){c.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}d2=f8.prototype;d2.add=function(c,e){b6(this),this.i=null,c=h0(this,c);var t=this.g.get(c);return t||this.g.set(c,t=[]),t.push(e),this.h+=1,this};function hf(c,e){b6(c),e=h0(c,e),c.g.has(e)&&(c.i=null,c.h-=c.g.get(e).length,c.g.delete(e))}function df(c,e){return b6(c),e=h0(c,e),c.g.has(e)}d2.forEach=function(c,e){b6(this),this.g.forEach(function(t,s){t.forEach(function(a){c.call(e,a,s,this)},this)},this)};d2.oa=function(){b6(this);const c=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const a=c[s];for(let n=0;n<a.length;n++)t.push(e[s])}return t};d2.W=function(c){b6(this);let e=[];if(typeof c=="string")df(this,c)&&(e=e.concat(this.g.get(h0(this,c))));else{c=Array.from(this.g.values());for(let t=0;t<c.length;t++)e=e.concat(c[t])}return e};d2.set=function(c,e){return b6(this),this.i=null,c=h0(this,c),df(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[e]),this.h+=1,this};d2.get=function(c,e){return c?(c=this.W(c),0<c.length?String(c[0]):e):e};function mf(c,e,t){hf(c,e),0<t.length&&(c.i=null,c.g.set(h0(c,e),ya(t)),c.h+=t.length)}d2.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const n=encodeURIComponent(String(s)),r=this.W(s);for(s=0;s<r.length;s++){var a=n;r[s]!==""&&(a+="="+encodeURIComponent(String(r[s]))),c.push(a)}}return this.i=c.join("&")};function h0(c,e){return e=String(e),c.j&&(e=e.toLowerCase()),e}function jL(c,e){e&&!c.j&&(b6(c),c.i=null,c.g.forEach(function(t,s){var a=s.toLowerCase();s!=a&&(hf(this,s),mf(this,a,t))},c)),c.j=e}var $L=class{constructor(c,e){this.h=c,this.g=e}};function pf(c){this.l=c||qL,y2.PerformanceNavigationTiming?(c=y2.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(y2.g&&y2.g.Ga&&y2.g.Ga()&&y2.g.Ga().$b),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qL=10;function vf(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function gf(c){return c.h?1:c.g?c.g.size:0}function gs(c,e){return c.h?c.h==e:c.g?c.g.has(e):!1}function Ia(c,e){c.g?c.g.add(e):c.h=e}function Hf(c,e){c.h&&c.h==e?c.h=null:c.g&&c.g.has(e)&&c.g.delete(e)}pf.prototype.cancel=function(){if(this.i=zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function zf(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let e=c.i;for(const t of c.g.values())e=e.concat(t.D);return e}return ya(c.i)}function Oa(){}Oa.prototype.stringify=function(c){return y2.JSON.stringify(c,void 0)};Oa.prototype.parse=function(c){return y2.JSON.parse(c,void 0)};function WL(){this.g=new Oa}function GL(c,e,t){const s=t||"";try{ff(c,function(a,n){let r=a;x8(a)&&(r=Na(a)),e.push(s+n+"="+encodeURIComponent(r))})}catch(a){throw e.push(s+"type="+encodeURIComponent("_badmap")),a}}function KL(c,e){const t=new s5;if(y2.Image){const s=new Image;s.onload=Sc(Nc,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Sc(Nc,t,s,"TestLoadImage: error",!1,e),s.onabort=Sc(Nc,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Sc(Nc,t,s,"TestLoadImage: timeout",!1,e),y2.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=c}else e(!1)}function Nc(c,e,t,s,a){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,a(s)}catch{}}function E8(c){this.l=c.ac||null,this.j=c.jb||!1}d4(E8,Ea);E8.prototype.g=function(){return new l5(this.l,this.j)};E8.prototype.i=function(c){return function(){return c}}({});function l5(c,e){r4.call(this),this.D=c,this.u=e,this.m=void 0,this.readyState=Da,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}d4(l5,r4);var Da=0;d2=l5.prototype;d2.open=function(c,e){if(this.readyState!=Da)throw this.abort(),Error("Error reopening a connection");this.C=c,this.B=e,this.readyState=1,u8(this)};d2.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};c&&(e.body=c),(this.D||y2).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};d2.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,T8(this)),this.readyState=Da};d2.Wa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,u8(this)),this.g&&(this.readyState=3,u8(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof y2.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vf(this)}else c.text().then(this.Va.bind(this),this.ga.bind(this))};function Vf(c){c.j.read().then(c.Ta.bind(c)).catch(c.ga.bind(c))}d2.Ta=function(c){if(this.g){if(this.u&&c.value)this.response.push(c.value);else if(!this.u){var e=c.value?c.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!c.done}))&&(this.response=this.responseText+=e)}c.done?T8(this):u8(this),this.readyState==3&&Vf(this)}};d2.Va=function(c){this.g&&(this.response=this.responseText=c,T8(this))};d2.Ua=function(c){this.g&&(this.response=c,T8(this))};d2.ga=function(){this.g&&T8(this)};function T8(c){c.readyState=4,c.l=null,c.j=null,c.A=null,u8(c)}d2.setRequestHeader=function(c,e){this.v.append(c,e)};d2.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""};d2.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,c.push(t[0]+": "+t[1]),t=e.next();return c.join(`\r
`)};function u8(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(l5.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});var YL=y2.JSON.parse;function O1(c){r4.call(this),this.headers=new Map,this.u=c||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Mf,this.K=this.L=!1}d4(O1,r4);var Mf="",QL=/^https?$/i,XL=["POST","PUT"];d2=O1.prototype;d2.Ka=function(c){this.L=c};d2.da=function(c,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+c);e=e?e.toUpperCase():"GET",this.H=c,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ds.g(),this.C=this.u?Ni(this.u):Ni(ds),this.g.onreadystatechange=g4(this.Ha,this);try{this.F=!0,this.g.open(e,String(c),!0),this.F=!1}catch(n){Ei(this,n);return}if(c=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var a in s)t.set(a,s[a]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const n of s.keys())t.set(n,s.get(n));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(n=>n.toLowerCase()=="content-type"),a=y2.FormData&&c instanceof y2.FormData,!(0<=Il(XL,e))||s||a||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[n,r]of t)this.g.setRequestHeader(n,r);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bf(this),0<this.B&&((this.K=JL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g4(this.qa,this)):this.A=_a(this.qa,this.B,this)),this.v=!0,this.g.send(c),this.v=!1}catch(n){Ei(this,n)}};function JL(c){return Ye&&pL()&&typeof c.timeout=="number"&&c.ontimeout!==void 0}d2.qa=function(){typeof Ca<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,h4(this,"timeout"),this.abort(8))};function Ei(c,e){c.h=!1,c.g&&(c.l=!0,c.g.abort(),c.l=!1),c.j=e,c.m=5,Cf(c),f5(c)}function Cf(c){c.D||(c.D=!0,h4(c,"complete"),h4(c,"error"))}d2.abort=function(c){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=c||7,h4(this,"complete"),h4(this,"abort"),f5(this))};d2.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),f5(this,!0)),O1.X.M.call(this)};d2.Ha=function(){this.s||(this.F||this.v||this.l?yf(this):this.fb())};d2.fb=function(){yf(this)};function yf(c){if(c.h&&typeof Ca<"u"&&(!c.C[1]||A3(c)!=4||c.aa()!=2)){if(c.v&&A3(c)==4)_a(c.Ha,0,c);else if(h4(c,"readystatechange"),A3(c)==4){c.h=!1;try{const i=c.aa();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=i===0){var a=String(c.H).match(uf)[1]||null;if(!a&&y2.self&&y2.self.location){var n=y2.self.location.protocol;a=n.substr(0,n.length-1)}s=!QL.test(a?a.toLowerCase():"")}t=s}if(t)h4(c,"complete"),h4(c,"success");else{c.m=6;try{var r=2<A3(c)?c.g.statusText:""}catch{r=""}c.j=r+" ["+c.aa()+"]",Cf(c)}}finally{f5(c)}}}}function f5(c,e){if(c.g){bf(c);const t=c.g,s=c.C[0]?ht:null;c.g=null,c.C=null,e||h4(c,"ready");try{t.onreadystatechange=s}catch{}}}function bf(c){c.g&&c.K&&(c.g.ontimeout=null),c.A&&(y2.clearTimeout(c.A),c.A=null)}function A3(c){return c.g?c.g.readyState:0}d2.aa=function(){try{return 2<A3(this)?this.g.status:-1}catch{return-1}};d2.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};d2.Sa=function(c){if(this.g){var e=this.g.responseText;return c&&e.indexOf(c)==0&&(e=e.substring(c.length)),YL(e)}};function Ti(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.J){case Mf:case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}d2.Ea=function(){return this.m};d2.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lf(c){let e="";return La(c,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Ra(c,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Lf(t),typeof c=="string"?t!=null&&encodeURIComponent(String(t)):T1(c,e,t))}function A0(c,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[c]||e}function wf(c){this.Ca=0,this.i=[],this.j=new s5,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=A0("failFast",!1,c),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=A0("baseRetryDelayMs",5e3,c),this.bb=A0("retryDelaySeedMs",1e4,c),this.$a=A0("forwardChannelMaxRetries",2,c),this.ta=A0("forwardChannelRequestTimeoutMs",2e4,c),this.ra=c&&c.xmlHttpFactory||void 0,this.Da=c&&c.Zb||!1,this.J=void 0,this.H=c&&c.supportsCrossDomainXhr||!1,this.I="",this.h=new pf(c&&c.concurrentRequestLimit),this.Fa=new WL,this.O=c&&c.fastHandshake||!1,this.N=c&&c.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=c&&c.Xb||!1,c&&c.Aa&&this.j.Aa(),c&&c.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&c&&c.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}d2=wf.prototype;d2.ma=8;d2.G=1;function Fa(c){if(xf(c),c.G==3){var e=c.U++,t=I3(c.F);T1(t,"SID",c.I),T1(t,"RID",e),T1(t,"TYPE","terminate"),P8(c,t),e=new A8(c,c.j,e,void 0),e.K=2,e.v=o5(I3(t)),t=!1,y2.navigator&&y2.navigator.sendBeacon&&(t=y2.navigator.sendBeacon(e.v.toString(),"")),!t&&y2.Image&&(new Image().src=e.v,t=!0),t||(e.g=Pf(e.l,null),e.g.da(e.v)),e.F=Date.now(),_8(e)}Ef(c)}function u5(c){c.g&&(Ua(c),c.g.cancel(),c.g=null)}function xf(c){u5(c),c.u&&(y2.clearTimeout(c.u),c.u=null),Ht(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&y2.clearTimeout(c.m),c.m=null)}function h5(c){vf(c.h)||c.m||(c.m=!0,Kl(c.Ja,c),c.C=0)}function ZL(c,e){return gf(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=e.D.concat(c.i),!0):c.G==1||c.G==2||c.C>=(c.Za?0:c.$a)?!1:(c.m=k8(g4(c.Ja,c,e),_f(c,c.C)),c.C++,!0)}d2.Ja=function(c){if(this.m)if(this.m=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const a=new A8(this,this.j,c,void 0);let n=this.s;if(this.S&&(n?(n=Fl(n),Bl(n,this.S)):n=this.S),this.o!==null||this.N||(a.H=n,n=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){c:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break c}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Sf(this,a,e),t=I3(this.F),T1(t,"RID",c),T1(t,"CVER",22),this.D&&T1(t,"X-HTTP-Session-Id",this.D),P8(this,t),n&&(this.N?e="headers="+encodeURIComponent(String(Lf(n)))+"&"+e:this.o&&Ra(t,this.o,n)),Ia(this.h,a),this.Ya&&T1(t,"TYPE","init"),this.O?(T1(t,"$req",e),T1(t,"SID","null"),a.Z=!0,ps(a,t,null)):ps(a,t,e),this.G=2}}else this.G==3&&(c?Pi(this,c):this.i.length==0||vf(this.h)||Pi(this))};function Pi(c,e){var t;e?t=e.m:t=c.U++;const s=I3(c.F);T1(s,"SID",c.I),T1(s,"RID",t),T1(s,"AID",c.T),P8(c,s),c.o&&c.s&&Ra(s,c.o,c.s),t=new A8(c,c.j,t,c.C+1),c.o===null&&(t.H=c.s),e&&(c.i=e.D.concat(c.i)),e=Sf(c,t,1e3),t.setTimeout(Math.round(.5*c.ta)+Math.round(.5*c.ta*Math.random())),Ia(c.h,t),ps(t,s,e)}function P8(c,e){c.ia&&La(c.ia,function(t,s){T1(e,s,t)}),c.l&&ff({},function(t,s){T1(e,s,t)})}function Sf(c,e,t){t=Math.min(c.i.length,t);var s=c.l?g4(c.l.Ra,c.l,c):null;e:{var a=c.i;let n=-1;for(;;){const r=["count="+t];n==-1?0<t?(n=a[0].h,r.push("ofs="+n)):n=0:r.push("ofs="+n);let i=!0;for(let o=0;o<t;o++){let f=a[o].h;const d=a[o].g;if(f-=n,0>f)n=Math.max(0,a[o].h-100),i=!1;else try{GL(d,r,"req"+f+"_")}catch{s&&s(d)}}if(i){s=r.join("&");break e}}}return c=c.i.splice(0,t),e.D=c,s}function kf(c){c.g||c.u||(c.Z=1,Kl(c.Ia,c),c.A=0)}function Ba(c){return c.g||c.u||3<=c.A?!1:(c.Z++,c.u=k8(g4(c.Ia,c),_f(c,c.A)),c.A++,!0)}d2.Ia=function(){if(this.u=null,Nf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var c=2*this.P;this.j.info("BP detection timer enabled: "+c),this.B=k8(g4(this.eb,this),c)}};d2.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,w4(10),u5(this),Nf(this))};function Ua(c){c.B!=null&&(y2.clearTimeout(c.B),c.B=null)}function Nf(c){c.g=new A8(c,c.j,"rpc",c.Z),c.o===null&&(c.g.H=c.s),c.g.N=0;var e=I3(c.sa);T1(e,"RID","rpc"),T1(e,"SID",c.I),T1(e,"CI",c.L?"0":"1"),T1(e,"AID",c.T),T1(e,"TYPE","xmlhttp"),P8(c,e),c.o&&c.s&&Ra(e,c.o,c.s),c.J&&c.g.setTimeout(c.J);var t=c.g;c=c.ka,t.K=1,t.v=o5(I3(e)),t.s=null,t.P=!0,nf(t,c)}d2.cb=function(){this.v!=null&&(this.v=null,u5(this),Ba(this),w4(19))};function Ht(c){c.v!=null&&(y2.clearTimeout(c.v),c.v=null)}function Af(c,e){var t=null;if(c.g==e){Ht(c),Ua(c),c.g=null;var s=2}else if(gs(c.h,e))t=e.D,Hf(c.h,e),s=1;else return;if(c.G!=0){if(c.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var a=c.C;s=a5(),h4(s,new cf(s,t)),h5(c)}else kf(c);else if(a=e.o,a==3||a==0&&0<c.pa||!(s==1&&ZL(c,e)||s==2&&Ba(c)))switch(t&&0<t.length&&(e=c.h,e.i=e.i.concat(t)),a){case 1:W6(c,5);break;case 4:W6(c,10);break;case 3:W6(c,6);break;default:W6(c,2)}}}function _f(c,e){let t=c.Xa+Math.floor(Math.random()*c.bb);return c.l||(t*=2),t*e}function W6(c,e){if(c.j.info("Error code "+e),e==2){var t=null;c.l&&(t=null);var s=g4(c.kb,c);t||(t=new Z6("//www.google.com/images/cleardot.gif"),y2.location&&y2.location.protocol=="http"||vt(t,"https"),o5(t)),KL(t.toString(),s)}else w4(2);c.G=0,c.l&&c.l.va(e),Ef(c),xf(c)}d2.kb=function(c){c?(this.j.info("Successfully pinged google.com"),w4(2)):(this.j.info("Failed to ping google.com"),w4(1))};function Ef(c){if(c.G=0,c.la=[],c.l){const e=zf(c.h);(e.length!=0||c.i.length!=0)&&(bi(c.la,e),bi(c.la,c.i),c.h.i.length=0,ya(c.i),c.i.length=0),c.l.ua()}}function Tf(c,e,t){var s=t instanceof Z6?I3(t):new Z6(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),gt(s,s.m);else{var a=y2.location;s=a.protocol,e=e?e+"."+a.hostname:a.hostname,a=+a.port;var n=new Z6(null,void 0);s&&vt(n,s),e&&(n.g=e),a&&gt(n,a),t&&(n.l=t),s=n}return t=c.D,e=c.za,t&&e&&T1(s,t,e),T1(s,"VER",c.ma),P8(c,s),s}function Pf(c,e,t){if(e&&!c.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&c.Da&&!c.ra?new O1(new E8({jb:!0})):new O1(c.ra),e.Ka(c.H),e}function If(){}d2=If.prototype;d2.xa=function(){};d2.wa=function(){};d2.va=function(){};d2.ua=function(){};d2.Ra=function(){};function zt(){if(Ye&&!(10<=Number(vL)))throw Error("Environmental error: no available transport.")}zt.prototype.g=function(c,e){return new U4(c,e)};function U4(c,e){r4.call(this),this.g=new wf(e),this.l=c,this.h=e&&e.messageUrlParams||null,c=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.s=c,c=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(c?c["X-WebChannel-Content-Type"]=e.messageContentType:c={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(c?c["X-WebChannel-Client-Profile"]=e.ya:c={"X-WebChannel-Client-Profile":e.ya}),this.g.S=c,(c=e&&e.Yb)&&!dt(c)&&(this.g.o=c),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!dt(e)&&(this.g.D=e,c=this.h,c!==null&&e in c&&(c=this.h,e in c&&delete c[e])),this.j=new d0(this)}d4(U4,r4);U4.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var c=this.g,e=this.l,t=this.h||void 0;w4(0),c.V=e,c.ia=t||{},c.L=c.Y,c.F=Tf(c,null,c.V),h5(c)};U4.prototype.close=function(){Fa(this.g)};U4.prototype.u=function(c){var e=this.g;if(typeof c=="string"){var t={};t.__data__=c,c=t}else this.v&&(t={},t.__data__=Na(c),c=t);e.i.push(new $L(e.ab++,c)),e.G==3&&h5(e)};U4.prototype.M=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,U4.X.M.call(this)};function Of(c){Ta.call(this);var e=c.__sm__;if(e){e:{for(const t in e){c=t;break e}c=void 0}(this.i=c)&&(c=this.i,e=e!==null&&c in e?e[c]:void 0),this.data=e}else this.data=c}d4(Of,Ta);function Df(){Pa.call(this),this.status=1}d4(Df,Pa);function d0(c){this.g=c}d4(d0,If);d0.prototype.xa=function(){h4(this.g,"a")};d0.prototype.wa=function(c){h4(this.g,new Of(c))};d0.prototype.va=function(c){h4(this.g,new Df)};d0.prototype.ua=function(){h4(this.g,"b")};zt.prototype.createWebChannel=zt.prototype.g;U4.prototype.send=U4.prototype.u;U4.prototype.open=U4.prototype.m;U4.prototype.close=U4.prototype.close;n5.NO_ERROR=0;n5.TIMEOUT=8;n5.HTTP_ERROR=6;tf.COMPLETE="complete";sf.EventType=N8;N8.OPEN="a";N8.CLOSE="b";N8.ERROR="c";N8.MESSAGE="d";r4.prototype.listen=r4.prototype.N;O1.prototype.listenOnce=O1.prototype.O;O1.prototype.getLastError=O1.prototype.Oa;O1.prototype.getLastErrorCode=O1.prototype.Ea;O1.prototype.getStatus=O1.prototype.aa;O1.prototype.getResponseJson=O1.prototype.Sa;O1.prototype.getResponseText=O1.prototype.fa;O1.prototype.send=O1.prototype.da;O1.prototype.setWithCredentials=O1.prototype.Ka;var ew=function(){return new zt},cw=function(){return a5()},S7=n5,tw=tf,sw=ue,Ii={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},aw=E8,Ac=sf,nw=O1;const Oi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}m4.UNAUTHENTICATED=new m4(null),m4.GOOGLE_CREDENTIALS=new m4("google-credentials-uid"),m4.FIRST_PARTY=new m4("first-party-uid"),m4.MOCK_USER=new m4("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m0="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new za("@firebase/firestore");function Di(){return se.logLevel}function v2(c,...e){if(se.logLevel<=i1.DEBUG){const t=e.map(ja);se.debug(`Firestore (${m0}): ${c}`,...t)}}function O3(c,...e){if(se.logLevel<=i1.ERROR){const t=e.map(ja);se.error(`Firestore (${m0}): ${c}`,...t)}}function Hs(c,...e){if(se.logLevel<=i1.WARN){const t=e.map(ja);se.warn(`Firestore (${m0}): ${c}`,...t)}}function ja(c){if(typeof c=="string")return c;try{return e=c,JSON.stringify(e)}catch{return c}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(c="Unexpected state"){const e=`FIRESTORE (${m0}) INTERNAL ASSERTION FAILED: `+c;throw O3(e),new Error(e)}function y1(c,e){c||S2()}function A2(c,e){return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class l2 extends $3{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(m4.UNAUTHENTICATED))}shutdown(){}}class iw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ow{constructor(e){this.t=e,this.currentUser=m4.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const a=o=>this.i!==s?(s=this.i,t(o)):Promise.resolve();let n=new m6;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new m6,e.enqueueRetryable(()=>a(this.currentUser))};const r=()=>{const o=n;e.enqueueRetryable(async()=>{await o.promise,await a(this.currentUser)})},i=o=>{v2("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(v2("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new m6)}},0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(v2("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(y1(typeof s.accessToken=="string"),new Rf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return y1(e===null||typeof e=="string"),new m4(e)}}class lw{constructor(e,t,s,a){this.h=e,this.l=t,this.m=s,this.g=a,this.type="FirstParty",this.user=m4.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(y1(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class fw{constructor(e,t,s,a){this.h=e,this.l=t,this.m=s,this.g=a}getToken(){return Promise.resolve(new lw(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(m4.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hw{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=n=>{n.error!=null&&v2("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${n.error.message}`);const r=n.token!==this.A;return this.A=n.token,v2("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(n.token):Promise.resolve()};this.o=n=>{e.enqueueRetryable(()=>s(n))};const a=n=>{v2("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=n,this.appCheck.addTokenListener(this.o)};this.T.onInit(n=>a(n)),setTimeout(()=>{if(!this.appCheck){const n=this.T.getImmediate({optional:!0});n?a(n):v2("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(y1(typeof t.token=="string"),this.A=t.token,new uw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(c){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(c);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<c;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const a=dw(40);for(let n=0;n<a.length;++n)s.length<20&&a[n]<t&&(s+=e.charAt(a[n]%e.length))}return s}}function o1(c,e){return c<e?-1:c>e?1:0}function Qe(c,e,t){return c.length===e.length&&c.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new l2(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new l2(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new l2(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new l2(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J1.fromMillis(Date.now())}static fromDate(e){return J1.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new J1(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?o1(this.nanoseconds,e.nanoseconds):o1(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.timestamp=e}static fromTimestamp(e){return new I2(e)}static min(){return new I2(new J1(0,0))}static max(){return new I2(new J1(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h8{constructor(e,t,s){t===void 0?t=0:t>e.length&&S2(),s===void 0?s=e.length-t:s>e.length-t&&S2(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return h8.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof h8?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const n=e.get(a),r=t.get(a);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class k1 extends h8{construct(e,t,s){return new k1(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new l2(F.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new k1(t)}static emptyPath(){return new k1([])}}const mw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class v4 extends h8{construct(e,t,s){return new v4(e,t,s)}static isValidIdentifier(e){return mw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),v4.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new v4(["__name__"])}static fromServerFormat(e){const t=[];let s="",a=0;const n=()=>{if(s.length===0)throw new l2(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let r=!1;for(;a<e.length;){const i=e[a];if(i==="\\"){if(a+1===e.length)throw new l2(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[a+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new l2(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=o,a+=2}else i==="`"?(r=!r,a++):i!=="."||r?(s+=i,a++):(n(),a++)}if(n(),r)throw new l2(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new v4(t)}static emptyPath(){return new v4([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.path=e}static fromPath(e){return new H2(k1.fromString(e))}static fromName(e){return new H2(k1.fromString(e).popFirst(5))}static empty(){return new H2(k1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&k1.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return k1.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H2(new k1(e.slice()))}}function pw(c,e){const t=c.toTimestamp().seconds,s=c.toTimestamp().nanoseconds+1,a=I2.fromTimestamp(s===1e9?new J1(t+1,0):new J1(t,s));return new g6(a,H2.empty(),e)}function vw(c){return new g6(c.readTime,c.key,-1)}class g6{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new g6(I2.min(),H2.empty(),-1)}static max(){return new g6(I2.max(),H2.empty(),-1)}}function gw(c,e){let t=c.readTime.compareTo(e.readTime);return t!==0?t:(t=H2.comparator(c.documentKey,e.documentKey),t!==0?t:o1(c.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I8(c){if(c.code!==F.FAILED_PRECONDITION||c.message!==Hw)throw c;v2("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S2(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((s,a)=>{this.nextCallback=n=>{this.wrapSuccess(e,n).next(s,a)},this.catchCallback=n=>{this.wrapFailure(t,n).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,s)=>{t(e)})}static reject(e){return new U((t,s)=>{s(e)})}static waitFor(e){return new U((t,s)=>{let a=0,n=0,r=!1;e.forEach(i=>{++a,i.next(()=>{++n,r&&n===a&&t()},o=>s(o))}),r=!0,n===a&&t()})}static or(e){let t=U.resolve(!1);for(const s of e)t=t.next(a=>a?U.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,n)=>{s.push(t.call(this,a,n))}),this.waitFor(s)}static mapArray(e,t){return new U((s,a)=>{const n=e.length,r=new Array(n);let i=0;for(let o=0;o<n;o++){const f=o;t(e[f]).next(d=>{r[f]=d,++i,i===n&&s(r)},d=>a(d))}})}static doWhile(e,t){return new U((s,a)=>{const n=()=>{e()===!0?t().next(()=>{n()},a):s()};n()})}}function O8(c){return c.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(c){let e=0;for(const t in c)Object.prototype.hasOwnProperty.call(c,t)&&e++;return e}function he(c,e){for(const t in c)Object.prototype.hasOwnProperty.call(c,t)&&e(t,c[t])}function Bf(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$a.at=-1;class e4{constructor(e,t){this.comparator=e,this.root=t||f4.EMPTY}insert(e,t){return new e4(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,f4.BLACK,null,null))}remove(e){return new e4(this.comparator,this.root.remove(e,this.comparator).copy(null,null,f4.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _c(this.root,e,this.comparator,!1)}getReverseIterator(){return new _c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _c(this.root,e,this.comparator,!0)}}class _c{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let n=1;for(;!e.isEmpty();)if(n=t?s(e.key,t):1,t&&a&&(n*=-1),n<0)e=this.isReverse?e.left:e.right;else{if(n===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class f4{constructor(e,t,s,a,n){this.key=e,this.value=t,this.color=s!=null?s:f4.RED,this.left=a!=null?a:f4.EMPTY,this.right=n!=null?n:f4.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,n){return new f4(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,a!=null?a:this.left,n!=null?n:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const n=s(e,a.key);return a=n<0?a.copy(null,null,null,a.left.insert(e,t,s),null):n===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return f4.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return f4.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,f4.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,f4.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S2();const e=this.left.check();if(e!==this.right.check())throw S2();return e+(this.isRed()?0:1)}}f4.EMPTY=null,f4.RED=!0,f4.BLACK=!1;f4.EMPTY=new class{constructor(){this.size=0}get key(){throw S2()}get value(){throw S2()}get color(){throw S2()}get left(){throw S2()}get right(){throw S2()}copy(c,e,t,s,a){return this}insert(c,e,t){return new f4(c,e)}remove(c,e){return this}isEmpty(){return!0}inorderTraversal(c){return!1}reverseTraversal(c){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.comparator=e,this.data=new e4(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fi(this.data.getIterator())}getIteratorFrom(e){return new Fi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Z1)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,n=s.getNext().key;if(this.comparator(a,n)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Z1(this.comparator);return t.data=e,t}}class Fi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.fields=e,e.sort(v4.comparator)}static empty(){return new G4([])}unionWith(e){let t=new Z1(v4.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new G4(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qe(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new V4(t)}static fromUint8Array(e){const t=function(s){let a="";for(let n=0;n<s.length;++n)a+=String.fromCharCode(s[n]);return a}(e);return new V4(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return o1(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}V4.EMPTY_BYTE_STRING=new V4("");const Vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H6(c){if(y1(!!c),typeof c=="string"){let e=0;const t=Vw.exec(c);if(y1(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(c);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Y1(c.seconds),nanos:Y1(c.nanos)}}function Y1(c){return typeof c=="number"?c:typeof c=="string"?Number(c):0}function Xe(c){return typeof c=="string"?V4.fromBase64String(c):V4.fromUint8Array(c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(c){var e,t;return((t=(((e=c==null?void 0:c.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function jf(c){const e=c.mapValue.fields.__previous_value__;return Uf(e)?jf(e):e}function d8(c){const e=H6(c.mapValue.fields.__local_write_time__.timestampValue);return new J1(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,s,a,n,r,i,o){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=n,this.forceLongPolling=r,this.autoDetectLongPolling=i,this.useFetchStreams=o}}class m8{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new m8("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof m8&&e.projectId===this.projectId&&e.database===this.database}}function d5(c){return c==null}function Vt(c){return c===0&&1/c==-1/0}function Cw(c){return typeof c=="number"&&Number.isInteger(c)&&!Vt(c)&&c<=Number.MAX_SAFE_INTEGER&&c>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(c){return"nullValue"in c?0:"booleanValue"in c?1:"integerValue"in c||"doubleValue"in c?2:"timestampValue"in c?3:"stringValue"in c?5:"bytesValue"in c?6:"referenceValue"in c?7:"geoPointValue"in c?8:"arrayValue"in c?9:"mapValue"in c?Uf(c)?4:yw(c)?9007199254740991:10:S2()}function C3(c,e){if(c===e)return!0;const t=ae(c);if(t!==ae(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return c.booleanValue===e.booleanValue;case 4:return d8(c).isEqual(d8(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const n=H6(s.timestampValue),r=H6(a.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(c,e);case 5:return c.stringValue===e.stringValue;case 6:return function(s,a){return Xe(s.bytesValue).isEqual(Xe(a.bytesValue))}(c,e);case 7:return c.referenceValue===e.referenceValue;case 8:return function(s,a){return Y1(s.geoPointValue.latitude)===Y1(a.geoPointValue.latitude)&&Y1(s.geoPointValue.longitude)===Y1(a.geoPointValue.longitude)}(c,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return Y1(s.integerValue)===Y1(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const n=Y1(s.doubleValue),r=Y1(a.doubleValue);return n===r?Vt(n)===Vt(r):isNaN(n)&&isNaN(r)}return!1}(c,e);case 9:return Qe(c.arrayValue.values||[],e.arrayValue.values||[],C3);case 10:return function(s,a){const n=s.mapValue.fields||{},r=a.mapValue.fields||{};if(Ri(n)!==Ri(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(r[i]===void 0||!C3(n[i],r[i])))return!1;return!0}(c,e);default:return S2()}}function p8(c,e){return(c.values||[]).find(t=>C3(t,e))!==void 0}function Je(c,e){if(c===e)return 0;const t=ae(c),s=ae(e);if(t!==s)return o1(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return o1(c.booleanValue,e.booleanValue);case 2:return function(a,n){const r=Y1(a.integerValue||a.doubleValue),i=Y1(n.integerValue||n.doubleValue);return r<i?-1:r>i?1:r===i?0:isNaN(r)?isNaN(i)?0:-1:1}(c,e);case 3:return Bi(c.timestampValue,e.timestampValue);case 4:return Bi(d8(c),d8(e));case 5:return o1(c.stringValue,e.stringValue);case 6:return function(a,n){const r=Xe(a),i=Xe(n);return r.compareTo(i)}(c.bytesValue,e.bytesValue);case 7:return function(a,n){const r=a.split("/"),i=n.split("/");for(let o=0;o<r.length&&o<i.length;o++){const f=o1(r[o],i[o]);if(f!==0)return f}return o1(r.length,i.length)}(c.referenceValue,e.referenceValue);case 8:return function(a,n){const r=o1(Y1(a.latitude),Y1(n.latitude));return r!==0?r:o1(Y1(a.longitude),Y1(n.longitude))}(c.geoPointValue,e.geoPointValue);case 9:return function(a,n){const r=a.values||[],i=n.values||[];for(let o=0;o<r.length&&o<i.length;++o){const f=Je(r[o],i[o]);if(f)return f}return o1(r.length,i.length)}(c.arrayValue,e.arrayValue);case 10:return function(a,n){if(a===Ec.mapValue&&n===Ec.mapValue)return 0;if(a===Ec.mapValue)return 1;if(n===Ec.mapValue)return-1;const r=a.fields||{},i=Object.keys(r),o=n.fields||{},f=Object.keys(o);i.sort(),f.sort();for(let d=0;d<i.length&&d<f.length;++d){const p=o1(i[d],f[d]);if(p!==0)return p;const v=Je(r[i[d]],o[f[d]]);if(v!==0)return v}return o1(i.length,f.length)}(c.mapValue,e.mapValue);default:throw S2()}}function Bi(c,e){if(typeof c=="string"&&typeof e=="string"&&c.length===e.length)return o1(c,e);const t=H6(c),s=H6(e),a=o1(t.seconds,s.seconds);return a!==0?a:o1(t.nanos,s.nanos)}function Ue(c){return zs(c)}function zs(c){return"nullValue"in c?"null":"booleanValue"in c?""+c.booleanValue:"integerValue"in c?""+c.integerValue:"doubleValue"in c?""+c.doubleValue:"timestampValue"in c?function(s){const a=H6(s);return`time(${a.seconds},${a.nanos})`}(c.timestampValue):"stringValue"in c?c.stringValue:"bytesValue"in c?Xe(c.bytesValue).toBase64():"referenceValue"in c?(t=c.referenceValue,H2.fromName(t).toString()):"geoPointValue"in c?`geo(${(e=c.geoPointValue).latitude},${e.longitude})`:"arrayValue"in c?function(s){let a="[",n=!0;for(const r of s.values||[])n?n=!1:a+=",",a+=zs(r);return a+"]"}(c.arrayValue):"mapValue"in c?function(s){const a=Object.keys(s.fields||{}).sort();let n="{",r=!0;for(const i of a)r?r=!1:n+=",",n+=`${i}:${zs(s.fields[i])}`;return n+"}"}(c.mapValue):S2();var e,t}function Ui(c,e){return{referenceValue:`projects/${c.projectId}/databases/${c.database}/documents/${e.path.canonicalString()}`}}function Vs(c){return!!c&&"integerValue"in c}function qa(c){return!!c&&"arrayValue"in c}function ji(c){return!!c&&"nullValue"in c}function $i(c){return!!c&&"doubleValue"in c&&isNaN(Number(c.doubleValue))}function Xc(c){return!!c&&"mapValue"in c}function U0(c){if(c.geoPointValue)return{geoPointValue:Object.assign({},c.geoPointValue)};if(c.timestampValue&&typeof c.timestampValue=="object")return{timestampValue:Object.assign({},c.timestampValue)};if(c.mapValue){const e={mapValue:{fields:{}}};return he(c.mapValue.fields,(t,s)=>e.mapValue.fields[t]=U0(s)),e}if(c.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(c.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=U0(c.arrayValue.values[t]);return e}return Object.assign({},c)}function yw(c){return(((c.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e){this.value=e}static empty(){return new P4({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Xc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=U0(t)}setAll(e){let t=v4.emptyPath(),s={},a=[];e.forEach((r,i)=>{if(!t.isImmediateParentOf(i)){const o=this.getFieldsMap(t);this.applyChanges(o,s,a),s={},a=[],t=i.popLast()}r?s[i.lastSegment()]=U0(r):a.push(i.lastSegment())});const n=this.getFieldsMap(t);this.applyChanges(n,s,a)}delete(e){const t=this.field(e.popLast());Xc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return C3(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Xc(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){he(t,(a,n)=>e[a]=n);for(const a of s)delete e[a]}clone(){return new P4(U0(this.value))}}function $f(c){const e=[];return he(c.fields,(t,s)=>{const a=new v4([t]);if(Xc(s)){const n=$f(s.mapValue).fields;if(n.length===0)e.push(a);else for(const r of n)e.push(a.child(r))}else e.push(a)}),new G4(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e,t,s,a,n,r){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.data=n,this.documentState=r}static newInvalidDocument(e){return new u4(e,0,I2.min(),I2.min(),P4.empty(),0)}static newFoundDocument(e,t,s){return new u4(e,1,t,I2.min(),s,0)}static newNoDocument(e,t){return new u4(e,2,t,I2.min(),P4.empty(),0)}static newUnknownDocument(e,t){return new u4(e,3,t,I2.min(),P4.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=P4.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=P4.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I2.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof u4&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new u4(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t=null,s=[],a=[],n=null,r=null,i=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=n,this.startAt=r,this.endAt=i,this.ht=null}}function qi(c,e=null,t=[],s=[],a=null,n=null,r=null){return new bw(c,e,t,s,a,n,r)}function Wa(c){const e=A2(c);if(e.ht===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(a=s).field.canonicalString()+a.op.toString()+Ue(a.value);var a}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(a){return a.field.canonicalString()+a.dir}(s)).join(","),d5(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Ue(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Ue(s)).join(",")),e.ht=t}return e.ht}function Lw(c){let e=c.path.canonicalString();return c.collectionGroup!==null&&(e+=" collectionGroup="+c.collectionGroup),c.filters.length>0&&(e+=`, filters: [${c.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${Ue(s.value)}`;var s}).join(", ")}]`),d5(c.limit)||(e+=", limit: "+c.limit),c.orderBy.length>0&&(e+=`, orderBy: [${c.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),c.startAt&&(e+=", startAt: ",e+=c.startAt.inclusive?"b:":"a:",e+=c.startAt.position.map(t=>Ue(t)).join(",")),c.endAt&&(e+=", endAt: ",e+=c.endAt.inclusive?"a:":"b:",e+=c.endAt.position.map(t=>Ue(t)).join(",")),`Target(${e})`}function Ga(c,e){if(c.limit!==e.limit||c.orderBy.length!==e.orderBy.length)return!1;for(let a=0;a<c.orderBy.length;a++)if(!Ew(c.orderBy[a],e.orderBy[a]))return!1;if(c.filters.length!==e.filters.length)return!1;for(let a=0;a<c.filters.length;a++)if(t=c.filters[a],s=e.filters[a],t.op!==s.op||!t.field.isEqual(s.field)||!C3(t.value,s.value))return!1;var t,s;return c.collectionGroup===e.collectionGroup&&!!c.path.isEqual(e.path)&&!!Gi(c.startAt,e.startAt)&&Gi(c.endAt,e.endAt)}function Ms(c){return H2.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}class x4 extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.lt(e,t,s):new ww(e,t,s):t==="array-contains"?new kw(e,s):t==="in"?new Nw(e,s):t==="not-in"?new Aw(e,s):t==="array-contains-any"?new _w(e,s):new x4(e,t,s)}static lt(e,t,s){return t==="in"?new xw(e,s):new Sw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.ft(Je(t,this.value)):t!==null&&ae(this.value)===ae(t)&&this.ft(Je(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S2()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ww extends x4{constructor(e,t,s){super(e,t,s),this.key=H2.fromName(s.referenceValue)}matches(e){const t=H2.comparator(e.key,this.key);return this.ft(t)}}class xw extends x4{constructor(e,t){super(e,"in",t),this.keys=qf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Sw extends x4{constructor(e,t){super(e,"not-in",t),this.keys=qf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qf(c,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>H2.fromName(s.referenceValue))}class kw extends x4{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qa(t)&&p8(t.arrayValue,this.value)}}class Nw extends x4{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&p8(this.value.arrayValue,t)}}class Aw extends x4{constructor(e,t){super(e,"not-in",t)}matches(e){if(p8(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!p8(this.value.arrayValue,t)}}class _w extends x4{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>p8(this.value.arrayValue,s))}}class Mt{constructor(e,t){this.position=e,this.inclusive=t}}class j0{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ew(c,e){return c.dir===e.dir&&c.field.isEqual(e.field)}function Wi(c,e,t){let s=0;for(let a=0;a<c.position.length;a++){const n=e[a],r=c.position[a];if(n.field.isKeyField()?s=H2.comparator(H2.fromName(r.referenceValue),t.key):s=Je(r,t.data.field(n.field)),n.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gi(c,e){if(c===null)return e===null;if(e===null||c.inclusive!==e.inclusive||c.position.length!==e.position.length)return!1;for(let t=0;t<c.position.length;t++)if(!C3(c.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D8{constructor(e,t=null,s=[],a=[],n=null,r="F",i=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=n,this.limitType=r,this.startAt=i,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function Tw(c,e,t,s,a,n,r,i){return new D8(c,e,t,s,a,n,r,i)}function Wf(c){return new D8(c)}function Ki(c){return c.filters.length===0&&c.limit===null&&c.startAt==null&&c.endAt==null&&(c.explicitOrderBy.length===0||c.explicitOrderBy.length===1&&c.explicitOrderBy[0].field.isKeyField())}function Gf(c){return c.explicitOrderBy.length>0?c.explicitOrderBy[0].field:null}function Kf(c){for(const e of c.filters)if(e.dt())return e.field;return null}function Yf(c){return c.collectionGroup!==null}function v8(c){const e=A2(c);if(e._t===null){e._t=[];const t=Kf(e),s=Gf(e);if(t!==null&&s===null)t.isKeyField()||e._t.push(new j0(t)),e._t.push(new j0(v4.keyField(),"asc"));else{let a=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(a=!0);if(!a){const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new j0(v4.keyField(),n))}}}return e._t}function D3(c){const e=A2(c);if(!e.wt)if(e.limitType==="F")e.wt=qi(e.path,e.collectionGroup,v8(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of v8(e)){const r=n.dir==="desc"?"asc":"desc";t.push(new j0(n.field,r))}const s=e.endAt?new Mt(e.endAt.position,e.endAt.inclusive):null,a=e.startAt?new Mt(e.startAt.position,e.startAt.inclusive):null;e.wt=qi(e.path,e.collectionGroup,t,e.filters,e.limit,s,a)}return e.wt}function Cs(c,e,t){return new D8(c.path,c.collectionGroup,c.explicitOrderBy.slice(),c.filters.slice(),e,t,c.startAt,c.endAt)}function m5(c,e){return Ga(D3(c),D3(e))&&c.limitType===e.limitType}function Qf(c){return`${Wa(D3(c))}|lt:${c.limitType}`}function ys(c){return`Query(target=${Lw(D3(c))}; limitType=${c.limitType})`}function Ka(c,e){return e.isFoundDocument()&&function(t,s){const a=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(a):H2.isDocumentKey(t.path)?t.path.isEqual(a):t.path.isImmediateParentOf(a)}(c,e)&&function(t,s){for(const a of t.explicitOrderBy)if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(c,e)&&function(t,s){for(const a of t.filters)if(!a.matches(s))return!1;return!0}(c,e)&&function(t,s){return!(t.startAt&&!function(a,n,r){const i=Wi(a,n,r);return a.inclusive?i<=0:i<0}(t.startAt,v8(t),s)||t.endAt&&!function(a,n,r){const i=Wi(a,n,r);return a.inclusive?i>=0:i>0}(t.endAt,v8(t),s))}(c,e)}function Pw(c){return c.collectionGroup||(c.path.length%2==1?c.path.lastSegment():c.path.get(c.path.length-2))}function Xf(c){return(e,t)=>{let s=!1;for(const a of v8(c)){const n=Iw(a,e,t);if(n!==0)return n;s=s||a.field.isKeyField()}return 0}}function Iw(c,e,t){const s=c.field.isKeyField()?H2.comparator(e.key,t.key):function(a,n,r){const i=n.data.field(a),o=r.data.field(a);return i!==null&&o!==null?Je(i,o):S2()}(c.field,e,t);switch(c.dir){case"asc":return s;case"desc":return-1*s;default:return S2()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(c,e){if(c.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vt(e)?"-0":e}}function Zf(c){return{integerValue:""+c}}function Ow(c,e){return Cw(e)?Zf(e):Jf(c,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(){this._=void 0}}function Dw(c,e,t){return c instanceof Ct?function(s,a){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&(n.fields.__previous_value__=a),{mapValue:n}}(t,e):c instanceof g8?cu(c,e):c instanceof H8?tu(c,e):function(s,a){const n=eu(s,a),r=Yi(n)+Yi(s.yt);return Vs(n)&&Vs(s.yt)?Zf(r):Jf(s.It,r)}(c,e)}function Rw(c,e,t){return c instanceof g8?cu(c,e):c instanceof H8?tu(c,e):t}function eu(c,e){return c instanceof yt?Vs(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Ct extends p5{}class g8 extends p5{constructor(e){super(),this.elements=e}}function cu(c,e){const t=su(e);for(const s of c.elements)t.some(a=>C3(a,s))||t.push(s);return{arrayValue:{values:t}}}class H8 extends p5{constructor(e){super(),this.elements=e}}function tu(c,e){let t=su(e);for(const s of c.elements)t=t.filter(a=>!C3(a,s));return{arrayValue:{values:t}}}class yt extends p5{constructor(e,t){super(),this.It=e,this.yt=t}}function Yi(c){return Y1(c.integerValue||c.doubleValue)}function su(c){return qa(c)&&c.arrayValue.values?c.arrayValue.values.slice():[]}function Fw(c,e){return c.field.isEqual(e.field)&&function(t,s){return t instanceof g8&&s instanceof g8||t instanceof H8&&s instanceof H8?Qe(t.elements,s.elements,C3):t instanceof yt&&s instanceof yt?C3(t.yt,s.yt):t instanceof Ct&&s instanceof Ct}(c.transform,e.transform)}class Bw{constructor(e,t){this.version=e,this.transformResults=t}}class f3{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new f3}static exists(e){return new f3(void 0,e)}static updateTime(e){return new f3(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jc(c,e){return c.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(c.updateTime):c.exists===void 0||c.exists===e.isFoundDocument()}class v5{}function au(c,e){if(!c.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return c.isNoDocument()?new Ya(c.key,f3.none()):new R8(c.key,c.data,f3.none());{const t=c.data,s=P4.empty();let a=new Z1(v4.comparator);for(let n of e.fields)if(!a.has(n)){let r=t.field(n);r===null&&n.length>1&&(n=n.popLast(),r=t.field(n)),r===null?s.delete(n):s.set(n,r),a=a.add(n)}return new L6(c.key,s,new G4(a.toArray()),f3.none())}}function Uw(c,e,t){c instanceof R8?function(s,a,n){const r=s.value.clone(),i=Xi(s.fieldTransforms,a,n.transformResults);r.setAll(i),a.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(c,e,t):c instanceof L6?function(s,a,n){if(!Jc(s.precondition,a))return void a.convertToUnknownDocument(n.version);const r=Xi(s.fieldTransforms,a,n.transformResults),i=a.data;i.setAll(nu(s)),i.setAll(r),a.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(c,e,t):function(s,a,n){a.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,t)}function $0(c,e,t,s){return c instanceof R8?function(a,n,r,i){if(!Jc(a.precondition,n))return r;const o=a.value.clone(),f=Ji(a.fieldTransforms,i,n);return o.setAll(f),n.convertToFoundDocument(n.version,o).setHasLocalMutations(),null}(c,e,t,s):c instanceof L6?function(a,n,r,i){if(!Jc(a.precondition,n))return r;const o=Ji(a.fieldTransforms,i,n),f=n.data;return f.setAll(nu(a)),f.setAll(o),n.convertToFoundDocument(n.version,f).setHasLocalMutations(),r===null?null:r.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(d=>d.field))}(c,e,t,s):function(a,n,r){return Jc(a.precondition,n)?(n.convertToNoDocument(n.version).setHasLocalMutations(),null):r}(c,e,t)}function jw(c,e){let t=null;for(const s of c.fieldTransforms){const a=e.data.field(s.field),n=eu(s.transform,a||null);n!=null&&(t===null&&(t=P4.empty()),t.set(s.field,n))}return t||null}function Qi(c,e){return c.type===e.type&&!!c.key.isEqual(e.key)&&!!c.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Qe(t,s,(a,n)=>Fw(a,n))}(c.fieldTransforms,e.fieldTransforms)&&(c.type===0?c.value.isEqual(e.value):c.type!==1||c.data.isEqual(e.data)&&c.fieldMask.isEqual(e.fieldMask))}class R8 extends v5{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class L6 extends v5{constructor(e,t,s,a,n=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}function nu(c){const e=new Map;return c.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=c.data.field(t);e.set(t,s)}}),e}function Xi(c,e,t){const s=new Map;y1(c.length===t.length);for(let a=0;a<t.length;a++){const n=c[a],r=n.transform,i=e.data.field(n.field);s.set(n.field,Rw(r,i,t[a]))}return s}function Ji(c,e,t){const s=new Map;for(const a of c){const n=a.transform,r=t.data.field(a.field);s.set(a.field,Dw(n,r,e))}return s}class Ya extends v5{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $w extends v5{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K1,q2;function Ww(c){switch(c){default:return S2();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function ru(c){if(c===void 0)return O3("GRPC error has no .code"),F.UNKNOWN;switch(c){case K1.OK:return F.OK;case K1.CANCELLED:return F.CANCELLED;case K1.UNKNOWN:return F.UNKNOWN;case K1.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case K1.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case K1.INTERNAL:return F.INTERNAL;case K1.UNAVAILABLE:return F.UNAVAILABLE;case K1.UNAUTHENTICATED:return F.UNAUTHENTICATED;case K1.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case K1.NOT_FOUND:return F.NOT_FOUND;case K1.ALREADY_EXISTS:return F.ALREADY_EXISTS;case K1.PERMISSION_DENIED:return F.PERMISSION_DENIED;case K1.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case K1.ABORTED:return F.ABORTED;case K1.OUT_OF_RANGE:return F.OUT_OF_RANGE;case K1.UNIMPLEMENTED:return F.UNIMPLEMENTED;case K1.DATA_LOSS:return F.DATA_LOSS;default:return S2()}}(q2=K1||(K1={}))[q2.OK=0]="OK",q2[q2.CANCELLED=1]="CANCELLED",q2[q2.UNKNOWN=2]="UNKNOWN",q2[q2.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q2[q2.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q2[q2.NOT_FOUND=5]="NOT_FOUND",q2[q2.ALREADY_EXISTS=6]="ALREADY_EXISTS",q2[q2.PERMISSION_DENIED=7]="PERMISSION_DENIED",q2[q2.UNAUTHENTICATED=16]="UNAUTHENTICATED",q2[q2.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q2[q2.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q2[q2.ABORTED=10]="ABORTED",q2[q2.OUT_OF_RANGE=11]="OUT_OF_RANGE",q2[q2.UNIMPLEMENTED=12]="UNIMPLEMENTED",q2[q2.INTERNAL=13]="INTERNAL",q2[q2.UNAVAILABLE=14]="UNAVAILABLE",q2[q2.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,n]of s)if(this.equalsFn(a,e))return n}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let n=0;n<a.length;n++)if(this.equalsFn(a[n][0],e))return void(a[n]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){he(this.inner,(t,s)=>{for(const[a,n]of s)e(a,n)})}isEmpty(){return Bf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new e4(H2.comparator);function R3(){return Gw}const iu=new e4(H2.comparator);function I0(...c){let e=iu;for(const t of c)e=e.insert(t.key,t);return e}function ou(c){let e=iu;return c.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function G6(){return q0()}function lu(){return q0()}function q0(){return new p0(c=>c.toString(),(c,e)=>c.isEqual(e))}const Kw=new e4(H2.comparator),Yw=new Z1(H2.comparator);function U2(...c){let e=Yw;for(const t of c)e=e.add(t);return e}const Qw=new Z1(o1);function fu(){return Qw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(e,t,s,a,n){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,F8.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new g5(I2.min(),a,fu(),R3(),U2())}}class F8{constructor(e,t,s,a,n){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new F8(s,t,U2(),U2(),U2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,s,a){this.Tt=e,this.removedTargetIds=t,this.key=s,this.Et=a}}class uu{constructor(e,t){this.targetId=e,this.At=t}}class hu{constructor(e,t,s=V4.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Zi{constructor(){this.Rt=0,this.bt=co(),this.Pt=V4.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=U2(),t=U2(),s=U2();return this.bt.forEach((a,n)=>{switch(n){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:S2()}}),new F8(this.Pt,this.vt,e,t,s)}Nt(){this.Vt=!1,this.bt=co()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Xw{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=R3(),this.qt=eo(),this.Kt=new Z1(o1)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{const s=this.zt(t);switch(e.state){case 0:this.Ht(t)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),s.Ct(e.resumeToken));break;default:S2()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((s,a)=>{this.Ht(a)&&t(a)})}Yt(e){const t=e.targetId,s=e.At.count,a=this.Xt(t);if(a){const n=a.target;if(Ms(n))if(s===0){const r=new H2(n.path);this.jt(t,r,u4.newNoDocument(r,I2.min()))}else y1(s===1);else this.Zt(t)!==s&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&Ms(i.target)){const o=new H2(i.target.path);this.Ut.get(o)!==null||this.ee(r,o)||this.jt(r,o,u4.newNoDocument(o,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}});let s=U2();this.qt.forEach((n,r)=>{let i=!0;r.forEachWhile(o=>{const f=this.Xt(o);return!f||f.purpose===2||(i=!1,!1)}),i&&(s=s.add(n))}),this.Ut.forEach((n,r)=>r.setReadTime(e));const a=new g5(e,t,this.Kt,this.Ut,s);return this.Ut=R3(),this.qt=eo(),this.Kt=new Z1(o1),a}Qt(e,t){if(!this.Ht(e))return;const s=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,s){if(!this.Ht(e))return;const a=this.zt(e);this.ee(e,t)?a.kt(t,1):a.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new Zi,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new Z1(o1),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=this.Xt(e)!==null;return t||v2("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Zi),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function eo(){return new e4(H2.comparator)}function co(){return new e4(H2.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ex{constructor(e,t){this.databaseId=e,this.gt=t}}function bt(c,e){return c.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function du(c,e){return c.gt?e.toBase64():e.toUint8Array()}function cx(c,e){return bt(c,e.toTimestamp())}function E3(c){return y1(!!c),I2.fromTimestamp(function(e){const t=H6(e);return new J1(t.seconds,t.nanos)}(c))}function Qa(c,e){return function(t){return new k1(["projects",t.projectId,"databases",t.database])}(c).child("documents").child(e).canonicalString()}function mu(c){const e=k1.fromString(c);return y1(gu(e)),e}function bs(c,e){return Qa(c.databaseId,e.path)}function k7(c,e){const t=mu(e);if(t.get(1)!==c.databaseId.projectId)throw new l2(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+c.databaseId.projectId);if(t.get(3)!==c.databaseId.database)throw new l2(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+c.databaseId.database);return new H2(pu(t))}function Ls(c,e){return Qa(c.databaseId,e)}function tx(c){const e=mu(c);return e.length===4?k1.emptyPath():pu(e)}function ws(c){return new k1(["projects",c.databaseId.projectId,"databases",c.databaseId.database]).canonicalString()}function pu(c){return y1(c.length>4&&c.get(4)==="documents"),c.popFirst(5)}function to(c,e,t){return{name:bs(c,e),fields:t.value.mapValue.fields}}function sx(c,e){let t;if("targetChange"in e){e.targetChange;const s=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:S2()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],n=function(o,f){return o.gt?(y1(f===void 0||typeof f=="string"),V4.fromBase64String(f||"")):(y1(f===void 0||f instanceof Uint8Array),V4.fromUint8Array(f||new Uint8Array))}(c,e.targetChange.resumeToken),r=e.targetChange.cause,i=r&&function(o){const f=o.code===void 0?F.UNKNOWN:ru(o.code);return new l2(f,o.message||"")}(r);t=new hu(s,a,n,i||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=k7(c,s.document.name),n=E3(s.document.updateTime),r=new P4({mapValue:{fields:s.document.fields}}),i=u4.newFoundDocument(a,n,r),o=s.targetIds||[],f=s.removedTargetIds||[];t=new Zc(o,f,i.key,i)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=k7(c,s.document),n=s.readTime?E3(s.readTime):I2.min(),r=u4.newNoDocument(a,n),i=s.removedTargetIds||[];t=new Zc([],i,r.key,r)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=k7(c,s.document),n=s.removedTargetIds||[];t=new Zc([],n,a,null)}else{if(!("filter"in e))return S2();{e.filter;const s=e.filter;s.targetId;const a=s.count||0,n=new qw(a),r=s.targetId;t=new uu(r,n)}}return t}function ax(c,e){let t;if(e instanceof R8)t={update:to(c,e.key,e.value)};else if(e instanceof Ya)t={delete:bs(c,e.key)};else if(e instanceof L6)t={update:to(c,e.key,e.data),updateMask:mx(e.fieldMask)};else{if(!(e instanceof $w))return S2();t={verify:bs(c,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(a,n){const r=n.transform;if(r instanceof Ct)return{fieldPath:n.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof g8)return{fieldPath:n.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof H8)return{fieldPath:n.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof yt)return{fieldPath:n.field.canonicalString(),increment:r.yt};throw S2()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:cx(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:S2()}(c,e.precondition)),t}function nx(c,e){return c&&c.length>0?(y1(e!==void 0),c.map(t=>function(s,a){let n=s.updateTime?E3(s.updateTime):E3(a);return n.isEqual(I2.min())&&(n=E3(a)),new Bw(n,s.transformResults||[])}(t,e))):[]}function rx(c,e){return{documents:[Ls(c,e.path)]}}function ix(c,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Ls(c,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ls(c,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const a=function(o){if(o.length===0)return;const f=o.map(d=>function(p){if(p.op==="=="){if($i(p.value))return{unaryFilter:{field:ke(p.field),op:"IS_NAN"}};if(ji(p.value))return{unaryFilter:{field:ke(p.field),op:"IS_NULL"}}}else if(p.op==="!="){if($i(p.value))return{unaryFilter:{field:ke(p.field),op:"IS_NOT_NAN"}};if(ji(p.value))return{unaryFilter:{field:ke(p.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ke(p.field),op:ux(p.op),value:p.value}}}(d));return f.length===1?f[0]:{compositeFilter:{op:"AND",filters:f}}}(e.filters);a&&(t.structuredQuery.where=a);const n=function(o){if(o.length!==0)return o.map(f=>function(d){return{field:ke(d.field),direction:fx(d.dir)}}(f))}(e.orderBy);n&&(t.structuredQuery.orderBy=n);const r=function(o,f){return o.gt||d5(f)?f:{value:f}}(c,e.limit);var i;return r!==null&&(t.structuredQuery.limit=r),e.startAt&&(t.structuredQuery.startAt={before:(i=e.startAt).inclusive,values:i.position}),e.endAt&&(t.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),t}function ox(c){let e=tx(c.parent);const t=c.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){y1(s===1);const d=t.from[0];d.allDescendants?a=d.collectionId:e=e.child(d.collectionId)}let n=[];t.where&&(n=vu(t.where));let r=[];t.orderBy&&(r=t.orderBy.map(d=>function(p){return new j0(Ee(p.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d)));let i=null;t.limit&&(i=function(d){let p;return p=typeof d=="object"?d.value:d,d5(p)?null:p}(t.limit));let o=null;t.startAt&&(o=function(d){const p=!!d.before,v=d.values||[];return new Mt(v,p)}(t.startAt));let f=null;return t.endAt&&(f=function(d){const p=!d.before,v=d.values||[];return new Mt(v,p)}(t.endAt)),Tw(e,a,r,n,i,"F",o,f)}function lx(c,e){const t=function(s,a){switch(a){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S2()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function vu(c){return c?c.unaryFilter!==void 0?[dx(c)]:c.fieldFilter!==void 0?[hx(c)]:c.compositeFilter!==void 0?c.compositeFilter.filters.map(e=>vu(e)).reduce((e,t)=>e.concat(t)):S2():[]}function fx(c){return Jw[c]}function ux(c){return Zw[c]}function ke(c){return{fieldPath:c.canonicalString()}}function Ee(c){return v4.fromServerFormat(c.fieldPath)}function hx(c){return x4.create(Ee(c.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S2()}}(c.fieldFilter.op),c.fieldFilter.value)}function dx(c){switch(c.unaryFilter.op){case"IS_NAN":const e=Ee(c.unaryFilter.field);return x4.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=Ee(c.unaryFilter.field);return x4.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ee(c.unaryFilter.field);return x4.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ee(c.unaryFilter.field);return x4.create(a,"!=",{nullValue:"NULL_VALUE"});default:return S2()}}function mx(c){const e=[];return c.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gu(c){return c.length>=4&&c.get(0)==="projects"&&c.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const n=this.mutations[a];n.key.isEqual(e.key)&&Uw(n,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=$0(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=$0(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=lu();return this.mutations.forEach(a=>{const n=e.get(a.key),r=n.overlayedDocument;let i=this.applyToLocalView(r,n.mutatedFields);i=t.has(a.key)?null:i;const o=au(r,i);o!==null&&s.set(a.key,o),r.isValidDocument()||r.convertToNoDocument(I2.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),U2())}isEqual(e){return this.batchId===e.batchId&&Qe(this.mutations,e.mutations,(t,s)=>Qi(t,s))&&Qe(this.baseMutations,e.baseMutations,(t,s)=>Qi(t,s))}}class Xa{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){y1(e.mutations.length===s.length);let a=Kw;const n=e.mutations;for(let r=0;r<n.length;r++)a=a.insert(n[r].key,s[r].version);return new Xa(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t,s,a,n=I2.min(),r=I2.min(),i=V4.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=i}withSequenceNumber(e){return new ee(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.re=e}}function Hx(c){const e=ox({parent:c.parent,structuredQuery:c.structuredQuery});return c.limitType==="LAST"?Cs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.Ye=new Vx}addToCollectionParentIndex(e,t){return this.Ye.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(g6.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(g6.min())}updateCollectionGroup(e,t,s){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class Vx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Z1(k1.comparator),n=!a.has(s);return this.index[t]=a.add(s),n}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Z1(k1.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ze(0)}static vn(){return new Ze(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(){this.changes=new p0(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,u4.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?U.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.getBaseDocument(e,t,s))).next(a=>(s!==null&&$0(s.mutation,a,G4.empty(),J1.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,U2()).next(()=>s))}getLocalViewOfDocuments(e,t,s=U2()){const a=G6();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(n=>{let r=I0();return n.forEach((i,o)=>{r=r.insert(i,o.overlayedDocument)}),r}))}getOverlayedDocuments(e,t){const s=G6();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,U2()))}populateOverlays(e,t,s){const a=[];return s.forEach(n=>{t.has(n)||a.push(n)}),this.documentOverlayCache.getOverlays(e,a).next(n=>{n.forEach((r,i)=>{t.set(r,i)})})}computeViews(e,t,s,a){let n=R3();const r=q0(),i=q0();return t.forEach((o,f)=>{const d=s.get(f.key);a.has(f.key)&&(d===void 0||d.mutation instanceof L6)?n=n.insert(f.key,f):d!==void 0&&(r.set(f.key,d.mutation.getFieldMask()),$0(d.mutation,f,d.mutation.getFieldMask(),J1.now()))}),this.recalculateAndSaveOverlays(e,n).next(o=>(o.forEach((f,d)=>r.set(f,d)),t.forEach((f,d)=>{var p;return i.set(f,new Cx(d,(p=r.get(f))!==null&&p!==void 0?p:null))}),i))}recalculateAndSaveOverlays(e,t){const s=q0();let a=new e4((r,i)=>r-i),n=U2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(r=>{for(const i of r)i.keys().forEach(o=>{const f=t.get(o);if(f===null)return;let d=s.get(o)||G4.empty();d=i.applyToLocalView(f,d),s.set(o,d);const p=(a.get(i.batchId)||U2()).add(o);a=a.insert(i.batchId,p)})}).next(()=>{const r=[],i=a.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),f=o.key,d=o.value,p=lu();d.forEach(v=>{if(!n.has(v)){const M=au(t.get(v),s.get(v));M!==null&&p.set(v,M),n=n.add(v)}}),r.push(this.documentOverlayCache.saveOverlays(e,f,p))}return U.waitFor(r)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(a){return H2.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Yf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(n=>{const r=a-n.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-n.size):U.resolve(G6());let i=-1,o=n;return r.next(f=>U.forEach(f,(d,p)=>(i<p.largestBatchId&&(i=p.largestBatchId),n.get(d)?U.resolve():this.getBaseDocument(e,d,p).next(v=>{o=o.insert(d,v)}))).next(()=>this.populateOverlays(e,f,n)).next(()=>this.computeViews(e,o,f,U2())).next(d=>({batchId:i,changes:ou(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H2(t)).next(s=>{let a=I0();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const a=t.collectionGroup;let n=I0();return this.indexManager.getCollectionParents(e,a).next(r=>U.forEach(r,i=>{const o=function(f,d){return new D8(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,i.child(a));return this.getDocumentsMatchingCollectionQuery(e,o,s).next(f=>{f.forEach((d,p)=>{n=n.insert(d,p)})})}).next(()=>n))}getDocumentsMatchingCollectionQuery(e,t,s){let a;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(n=>(a=n,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(n=>{n.forEach((i,o)=>{const f=o.getKey();a.get(f)===null&&(a=a.insert(f,u4.newInvalidDocument(f)))});let r=I0();return a.forEach((i,o)=>{const f=n.get(i);f!==void 0&&$0(f.mutation,o,G4.empty(),J1.now()),Ka(t,o)&&(r=r.insert(i,o))}),r})}getBaseDocument(e,t,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):U.resolve(u4.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return U.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:E3(s.createTime)}),U.resolve()}getNamedQuery(e,t){return U.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:Hx(s.bundledQuery),readTime:E3(s.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.overlays=new e4(H2.comparator),this.es=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const s=G6();return U.forEach(t,a=>this.getOverlay(e,a).next(n=>{n!==null&&s.set(a,n)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,n)=>{this.ue(e,t,n)}),U.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.es.get(s);return a!==void 0&&(a.forEach(n=>this.overlays=this.overlays.remove(n)),this.es.delete(s)),U.resolve()}getOverlaysForCollection(e,t,s){const a=G6(),n=t.length+1,r=new H2(t.child("")),i=this.overlays.getIteratorFrom(r);for(;i.hasNext();){const o=i.getNext().value,f=o.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===n&&o.largestBatchId>s&&a.set(o.getKey(),o)}return U.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let n=new e4((f,d)=>f-d);const r=this.overlays.getIterator();for(;r.hasNext();){const f=r.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>s){let d=n.get(f.largestBatchId);d===null&&(d=G6(),n=n.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const i=G6(),o=n.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((f,d)=>i.set(f,d)),!(i.size()>=a)););return U.resolve(i)}ue(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const r=this.es.get(a.largestBatchId).delete(s.key);this.es.set(a.largestBatchId,r)}this.overlays=this.overlays.insert(s.key,new vx(t,s));let n=this.es.get(t);n===void 0&&(n=U2(),this.es.set(t,n)),this.es.set(t,n.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.ns=new Z1(a4.ss),this.rs=new Z1(a4.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new a4(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new a4(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new H2(new k1([])),s=new a4(t,e),a=new a4(t,e+1),n=[];return this.rs.forEachInRange([s,a],r=>{this.cs(r),n.push(r.key)}),n}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new H2(new k1([])),s=new a4(t,e),a=new a4(t,e+1);let n=U2();return this.rs.forEachInRange([s,a],r=>{n=n.add(r.key)}),n}containsKey(e){const t=new a4(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class a4{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return H2.comparator(e.key,t.key)||o1(e._s,t._s)}static os(e,t){return o1(e._s,t._s)||H2.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Z1(a4.ss)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const n=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new px(n,t,s,a);this.mutationQueue.push(r);for(const i of a)this.gs=this.gs.add(new a4(i.key,n)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return U.resolve(r)}lookupMutationBatch(e,t){return U.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ps(s),n=a<0?0:a;return U.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new a4(t,0),a=new a4(t,Number.POSITIVE_INFINITY),n=[];return this.gs.forEachInRange([s,a],r=>{const i=this.ys(r._s);n.push(i)}),U.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Z1(o1);return t.forEach(a=>{const n=new a4(a,0),r=new a4(a,Number.POSITIVE_INFINITY);this.gs.forEachInRange([n,r],i=>{s=s.add(i._s)})}),U.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let n=s;H2.isDocumentKey(n)||(n=n.child(""));const r=new a4(new H2(n),0);let i=new Z1(o1);return this.gs.forEachWhile(o=>{const f=o.key.path;return!!s.isPrefixOf(f)&&(f.length===a&&(i=i.add(o._s)),!0)},r),U.resolve(this.Is(i))}Is(e){const t=[];return e.forEach(s=>{const a=this.ys(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){y1(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return U.forEach(t.mutations,a=>{const n=new a4(a.key,t.batchId);return s=s.delete(n),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new a4(t,0),a=this.gs.firstAfterOrEqual(s);return U.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.Es=e,this.docs=new e4(H2.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),n=a?a.size:0,r=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:r}),this.size+=r-n,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return U.resolve(s?s.document.mutableCopy():u4.newInvalidDocument(t))}getEntries(e,t){let s=R3();return t.forEach(a=>{const n=this.docs.get(a);s=s.insert(a,n?n.document.mutableCopy():u4.newInvalidDocument(a))}),U.resolve(s)}getAllFromCollection(e,t,s){let a=R3();const n=new H2(t.child("")),r=this.docs.getIteratorFrom(n);for(;r.hasNext();){const{key:i,value:{document:o}}=r.getNext();if(!t.isPrefixOf(i.path))break;i.path.length>t.length+1||gw(vw(o),s)<=0||(a=a.insert(o.key,o.mutableCopy()))}return U.resolve(a)}getAllFromCollectionGroup(e,t,s,a){S2()}As(e,t){return U.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Sx(this)}getSize(e){return U.resolve(this.size)}}class Sx extends Mx{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Yn.addEntry(e,a)):this.Yn.removeEntry(s)}),U.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.persistence=e,this.Rs=new p0(t=>Wa(t),Ga),this.lastRemoteSnapshotVersion=I2.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ja,this.targetCount=0,this.vs=Ze.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,a)=>t(a)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),U.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ze(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Dn(t),U.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,s){let a=0;const n=[];return this.Rs.forEach((r,i)=>{i.sequenceNumber<=t&&s.get(i.targetId)===null&&(this.Rs.delete(r),n.push(this.removeMatchingKeysForTargetId(e,i.targetId)),a++)}),U.waitFor(n).next(()=>a)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return U.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),U.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const a=this.persistence.referenceDelegate,n=[];return a&&t.forEach(r=>{n.push(a.markPotentiallyOrphaned(e,r))}),U.waitFor(n)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),U.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return U.resolve(s)}containsKey(e,t){return U.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new $a(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new kx(this),this.indexManager=new zx,this.remoteDocumentCache=function(s){return new xx(s)}(s=>this.referenceDelegate.xs(s)),this.It=new gx(t),this.Ns=new bx(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new wx(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){v2("MemoryPersistence","Starting transaction:",e);const a=new Ax(this.Ss.next());return this.referenceDelegate.ks(),s(a).next(n=>this.referenceDelegate.Os(a).next(()=>n)).toPromise().then(n=>(a.raiseOnCommittedEvent(),n))}Ms(e,t){return U.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class Ax extends zw{constructor(e){super(),this.currentSequenceNumber=e}}class Za{constructor(e){this.persistence=e,this.Fs=new Ja,this.$s=null}static Bs(e){return new Za(e)}get Ls(){if(this.$s)return this.$s;throw S2()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),U.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),U.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(a=>this.Ls.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(n=>this.Ls.add(n.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Ls,s=>{const a=H2.fromPath(s);return this.Us(e,a).next(n=>{n||t.removeEntry(a,I2.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return U.or([()=>U.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=a}static Ci(e,t){let s=U2(),a=U2();for(const n of t.docChanges)switch(n.type){case 0:s=s.add(n.doc.key);break;case 1:a=a.add(n.doc.key)}return new en(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,a){return this.ki(e,t).next(n=>n||this.Oi(e,t,a,s)).next(n=>n||this.Mi(e,t))}ki(e,t){if(Ki(t))return U.resolve(null);let s=D3(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Cs(t,null,"F"),s=D3(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(n=>{const r=U2(...n);return this.Ni.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,s).next(o=>{const f=this.Fi(t,i);return this.$i(t,f,r,o.readTime)?this.ki(e,Cs(t,null,"F")):this.Bi(e,f,t,o)}))})))}Oi(e,t,s,a){return Ki(t)||a.isEqual(I2.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(n=>{const r=this.Fi(t,n);return this.$i(t,r,s,a)?this.Mi(e,t):(Di()<=i1.DEBUG&&v2("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ys(t)),this.Bi(e,r,t,pw(a,-1)))})}Fi(e,t){let s=new Z1(Xf(e));return t.forEach((a,n)=>{Ka(e,n)&&(s=s.add(n))}),s}$i(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const n=e.limitType==="F"?t.last():t.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(a)>0)}Mi(e,t){return Di()<=i1.DEBUG&&v2("QueryEngine","Using full collection scan to execute query:",ys(t)),this.Ni.getDocumentsMatchingQuery(e,t,g6.min())}Bi(e,t,s,a){return this.Ni.getDocumentsMatchingQuery(e,s,a).next(n=>(t.forEach(r=>{n=n.insert(r.key,r)}),n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,t,s,a){this.persistence=e,this.Li=t,this.It=a,this.Ui=new e4(o1),this.qi=new p0(n=>Wa(n),Ga),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yx(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function Tx(c,e,t,s){return new Ex(c,e,t,s)}async function Hu(c,e){const t=A2(c);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(n=>(a=n,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(n=>{const r=[],i=[];let o=U2();for(const f of a){r.push(f.batchId);for(const d of f.mutations)o=o.add(d.key)}for(const f of n){i.push(f.batchId);for(const d of f.mutations)o=o.add(d.key)}return t.localDocuments.getDocuments(s,o).next(f=>({ji:f,removedBatchIds:r,addedBatchIds:i}))})})}function Px(c,e){const t=A2(c);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),n=t.Gi.newChangeBuffer({trackRemovals:!0});return function(r,i,o,f){const d=o.batch,p=d.keys();let v=U.resolve();return p.forEach(M=>{v=v.next(()=>f.getEntry(i,M)).next(L=>{const S=o.docVersions.get(M);y1(S!==null),L.version.compareTo(S)<0&&(d.applyToRemoteDocument(L,o),L.isValidDocument()&&(L.setReadTime(o.commitVersion),f.addEntry(L)))})}),v.next(()=>r.mutationQueue.removeMutationBatch(i,d))}(t,s,e,n).next(()=>n.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(r){let i=U2();for(let o=0;o<r.mutationResults.length;++o)r.mutationResults[o].transformResults.length>0&&(i=i.add(r.batch.mutations[o].key));return i}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function zu(c){const e=A2(c);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function Ix(c,e){const t=A2(c),s=e.snapshotVersion;let a=t.Ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",n=>{const r=t.Gi.newChangeBuffer({trackRemovals:!0});a=t.Ui;const i=[];e.targetChanges.forEach((d,p)=>{const v=a.get(p);if(!v)return;i.push(t.Cs.removeMatchingKeys(n,d.removedDocuments,p).next(()=>t.Cs.addMatchingKeys(n,d.addedDocuments,p)));let M=v.withSequenceNumber(n.currentSequenceNumber);e.targetMismatches.has(p)?M=M.withResumeToken(V4.EMPTY_BYTE_STRING,I2.min()).withLastLimboFreeSnapshotVersion(I2.min()):d.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(d.resumeToken,s)),a=a.insert(p,M),function(L,S,P){return L.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(v,M,d)&&i.push(t.Cs.updateTargetData(n,M))});let o=R3(),f=U2();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&i.push(t.persistence.referenceDelegate.updateLimboDocument(n,d))}),i.push(Ox(n,r,e.documentUpdates).next(d=>{o=d.Wi,f=d.zi})),!s.isEqual(I2.min())){const d=t.Cs.getLastRemoteSnapshotVersion(n).next(p=>t.Cs.setTargetsMetadata(n,n.currentSequenceNumber,s));i.push(d)}return U.waitFor(i).next(()=>r.apply(n)).next(()=>t.localDocuments.getLocalViewOfDocuments(n,o,f)).next(()=>o)}).then(n=>(t.Ui=a,n))}function Ox(c,e,t){let s=U2(),a=U2();return t.forEach(n=>s=s.add(n)),e.getEntries(c,s).next(n=>{let r=R3();return t.forEach((i,o)=>{const f=n.get(i);o.isFoundDocument()!==f.isFoundDocument()&&(a=a.add(i)),o.isNoDocument()&&o.version.isEqual(I2.min())?(e.removeEntry(i,o.readTime),r=r.insert(i,o)):!f.isValidDocument()||o.version.compareTo(f.version)>0||o.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(o),r=r.insert(i,o)):v2("LocalStore","Ignoring outdated watch update for ",i,". Current version:",f.version," Watch version:",o.version)}),{Wi:r,zi:a}})}function Dx(c,e){const t=A2(c);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Rx(c,e){const t=A2(c);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Cs.getTargetData(s,e).next(n=>n?(a=n,U.resolve(a)):t.Cs.allocateTargetId(s).next(r=>(a=new ee(e,r,0,s.currentSequenceNumber),t.Cs.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Ui.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ui=t.Ui.insert(s.targetId,s),t.qi.set(e,s.targetId)),s})}async function xs(c,e,t){const s=A2(c),a=s.Ui.get(e),n=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",n,r=>s.persistence.referenceDelegate.removeTarget(r,a))}catch(r){if(!O8(r))throw r;v2("LocalStore",`Failed to update sequence numbers for target ${e}: ${r}`)}s.Ui=s.Ui.remove(e),s.qi.delete(a.target)}function so(c,e,t){const s=A2(c);let a=I2.min(),n=U2();return s.persistence.runTransaction("Execute query","readonly",r=>function(i,o,f){const d=A2(i),p=d.qi.get(f);return p!==void 0?U.resolve(d.Ui.get(p)):d.Cs.getTargetData(o,f)}(s,r,D3(e)).next(i=>{if(i)return a=i.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(r,i.targetId).next(o=>{n=o})}).next(()=>s.Li.getDocumentsMatchingQuery(r,e,t?a:I2.min(),t?n:U2())).next(i=>(Fx(s,Pw(e),i),{documents:i,Hi:n})))}function Fx(c,e,t){let s=c.Ki.get(e)||I2.min();t.forEach((a,n)=>{n.readTime.compareTo(s)>0&&(s=n.readTime)}),c.Ki.set(e,s)}class ao{constructor(){this.activeTargetIds=fu()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bx{constructor(){this.Lr=new ao,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,s){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ao,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){v2("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){v2("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,a,n){const r=this.ho(e,t);v2("RestConnection","Sending: ",r,s);const i={};return this.lo(i,a,n),this.fo(e,r,i,s).then(o=>(v2("RestConnection","Received: ",o),o),o=>{throw Hs("RestConnection",`${e} failed with error: `,o,"url: ",r,"request:",s),o})}_o(e,t,s,a,n,r){return this.ao(e,t,s,a,n)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+m0,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,n)=>e[n]=a),s&&s.headers.forEach((a,n)=>e[n]=a)}ho(e,t){const s=jx[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,a){return new Promise((n,r)=>{const i=new nw;i.setWithCredentials(!0),i.listenOnce(tw.COMPLETE,()=>{var f;try{switch(i.getLastErrorCode()){case S7.NO_ERROR:const d=i.getResponseJson();v2("Connection","XHR received:",JSON.stringify(d)),n(d);break;case S7.TIMEOUT:v2("Connection",'RPC "'+e+'" timed out'),r(new l2(F.DEADLINE_EXCEEDED,"Request time out"));break;case S7.HTTP_ERROR:const p=i.getStatus();if(v2("Connection",'RPC "'+e+'" failed with status:',p,"response text:",i.getResponseText()),p>0){let v=i.getResponseJson();Array.isArray(v)&&(v=v[0]);const M=(f=v)===null||f===void 0?void 0:f.error;if(M&&M.status&&M.message){const L=function(S){const P=S.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(P)>=0?P:F.UNKNOWN}(M.status);r(new l2(L,M.message))}else r(new l2(F.UNKNOWN,"Server responded with status "+i.getStatus()))}else r(new l2(F.UNAVAILABLE,"Connection failed."));break;default:S2()}}finally{v2("Connection",'RPC "'+e+'" completed.')}});const o=JSON.stringify(a);i.send(t,"POST",o,s,15)})}wo(e,t,s){const a=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],n=ew(),r=cw(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new aw({})),this.lo(i.initMessageHeaders,t,s),i.encodeInitMessageHeaders=!0;const o=a.join("");v2("Connection","Creating WebChannel: "+o,i);const f=n.createWebChannel(o,i);let d=!1,p=!1;const v=new $x({Hr:L=>{p?v2("Connection","Not sending because WebChannel is closed:",L):(d||(v2("Connection","Opening WebChannel transport."),f.open(),d=!0),v2("Connection","WebChannel sending:",L),f.send(L))},Jr:()=>f.close()}),M=(L,S,P)=>{L.listen(S,w=>{try{P(w)}catch(N){setTimeout(()=>{throw N},0)}})};return M(f,Ac.EventType.OPEN,()=>{p||v2("Connection","WebChannel transport opened.")}),M(f,Ac.EventType.CLOSE,()=>{p||(p=!0,v2("Connection","WebChannel transport closed"),v.io())}),M(f,Ac.EventType.ERROR,L=>{p||(p=!0,Hs("Connection","WebChannel transport errored:",L),v.io(new l2(F.UNAVAILABLE,"The operation could not be completed")))}),M(f,Ac.EventType.MESSAGE,L=>{var S;if(!p){const P=L.data[0];y1(!!P);const w=P,N=w.error||((S=w[0])===null||S===void 0?void 0:S.error);if(N){v2("Connection","WebChannel received error:",N);const B=N.status;let c2=function(w2){const g2=K1[w2];if(g2!==void 0)return ru(g2)}(B),n2=N.message;c2===void 0&&(c2=F.INTERNAL,n2="Unknown error status: "+B+" with message "+N.message),p=!0,v.io(new l2(c2,n2)),f.close()}else v2("Connection","WebChannel received:",P),v.ro(P)}}),M(r,sw.STAT_EVENT,L=>{L.stat===Ii.PROXY?v2("Connection","Detected buffering proxy"):L.stat===Ii.NOPROXY&&v2("Connection","Detected no buffering proxy")}),setTimeout(()=>{v.so()},0),v}}function N7(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H5(c){return new ex(c,!0)}class Vu{constructor(e,t,s=1e3,a=1.5,n=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=a,this.po=n,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),a=Math.max(0,t-s);a>0&&v2("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,a,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,s,a,n,r,i,o){this.Hs=e,this.vo=s,this.Vo=a,this.connection=n,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Vu(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(O3(t.toString()),O3("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.So===t&&this.Go(s,a)},s=>{e(()=>{const a=new l2(F.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(a)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(a=>{s(()=>this.Qo(a))}),this.stream.onMessage(a=>{s(()=>this.onMessage(a))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return v2("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(v2("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wx extends Mu{constructor(e,t,s,a,n,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,r),this.It=n}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=sx(this.It,e),s=function(a){if(!("targetChange"in a))return I2.min();const n=a.targetChange;return n.targetIds&&n.targetIds.length?I2.min():n.readTime?E3(n.readTime):I2.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=ws(this.It),t.addTarget=function(a,n){let r;const i=n.target;return r=Ms(i)?{documents:rx(a,i)}:{query:ix(a,i)},r.targetId=n.targetId,n.resumeToken.approximateByteSize()>0?r.resumeToken=du(a,n.resumeToken):n.snapshotVersion.compareTo(I2.min())>0&&(r.readTime=bt(a,n.snapshotVersion.toTimestamp())),r}(this.It,e);const s=lx(this.It,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=ws(this.It),t.removeTarget=e,this.Bo(t)}}class Gx extends Mu{constructor(e,t,s,a,n,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,r),this.It=n,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(y1(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=nx(e.writeResults,e.commitTime),s=E3(e.commitTime);return this.listener.Zo(s,t)}return y1(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ws(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>ax(this.It,s))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx extends class{}{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.It=a,this.nu=!1}su(){if(this.nu)throw new l2(F.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,n])=>this.connection.ao(e,t,s,a,n)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new l2(F.UNKNOWN,a.toString())})}_o(e,t,s,a){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.connection._o(e,t,s,n,r,a)).catch(n=>{throw n.name==="FirebaseError"?(n.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new l2(F.UNKNOWN,n.toString())})}terminate(){this.nu=!0}}class Yx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(O3(t),this.ou=!1):v2("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,t,s,a,n){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=n,this.mu.qr(r=>{s.enqueueAndForget(async()=>{de(this)&&(v2("RemoteStore","Restarting streams for network reachability change."),await async function(i){const o=A2(i);o._u.add(4),await B8(o),o.gu.set("Unknown"),o._u.delete(4),await z5(o)}(this))})}),this.gu=new Yx(s,a)}}async function z5(c){if(de(c))for(const e of c.wu)await e(!0)}async function B8(c){for(const e of c.wu)await e(!1)}function Cu(c,e){const t=A2(c);t.du.has(e.targetId)||(t.du.set(e.targetId,e),sn(t)?tn(t):v0(t).ko()&&cn(t,e))}function yu(c,e){const t=A2(c),s=v0(t);t.du.delete(e),s.ko()&&bu(t,e),t.du.size===0&&(s.ko()?s.Fo():de(t)&&t.gu.set("Unknown"))}function cn(c,e){c.yu.Mt(e.targetId),v0(c).zo(e)}function bu(c,e){c.yu.Mt(e),v0(c).Ho(e)}function tn(c){c.yu=new Xw({getRemoteKeysForTarget:e=>c.remoteSyncer.getRemoteKeysForTarget(e),se:e=>c.du.get(e)||null}),v0(c).start(),c.gu.uu()}function sn(c){return de(c)&&!v0(c).No()&&c.du.size>0}function de(c){return A2(c)._u.size===0}function Lu(c){c.yu=void 0}async function Xx(c){c.du.forEach((e,t)=>{cn(c,e)})}async function Jx(c,e){Lu(c),sn(c)?(c.gu.hu(e),tn(c)):c.gu.set("Unknown")}async function Zx(c,e,t){if(c.gu.set("Online"),e instanceof hu&&e.state===2&&e.cause)try{await async function(s,a){const n=a.cause;for(const r of a.targetIds)s.du.has(r)&&(await s.remoteSyncer.rejectListen(r,n),s.du.delete(r),s.yu.removeTarget(r))}(c,e)}catch(s){v2("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Lt(c,s)}else if(e instanceof Zc?c.yu.Gt(e):e instanceof uu?c.yu.Yt(e):c.yu.Wt(e),!t.isEqual(I2.min()))try{const s=await zu(c.localStore);t.compareTo(s)>=0&&await function(a,n){const r=a.yu.te(n);return r.targetChanges.forEach((i,o)=>{if(i.resumeToken.approximateByteSize()>0){const f=a.du.get(o);f&&a.du.set(o,f.withResumeToken(i.resumeToken,n))}}),r.targetMismatches.forEach(i=>{const o=a.du.get(i);if(!o)return;a.du.set(i,o.withResumeToken(V4.EMPTY_BYTE_STRING,o.snapshotVersion)),bu(a,i);const f=new ee(o.target,i,1,o.sequenceNumber);cn(a,f)}),a.remoteSyncer.applyRemoteEvent(r)}(c,t)}catch(s){v2("RemoteStore","Failed to raise snapshot:",s),await Lt(c,s)}}async function Lt(c,e,t){if(!O8(e))throw e;c._u.add(1),await B8(c),c.gu.set("Offline"),t||(t=()=>zu(c.localStore)),c.asyncQueue.enqueueRetryable(async()=>{v2("RemoteStore","Retrying IndexedDB access"),await t(),c._u.delete(1),await z5(c)})}function wu(c,e){return e().catch(t=>Lt(c,t,e))}async function V5(c){const e=A2(c),t=z6(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;eS(e);)try{const a=await Dx(e.localStore,s);if(a===null){e.fu.length===0&&t.Fo();break}s=a.batchId,cS(e,a)}catch(a){await Lt(e,a)}xu(e)&&Su(e)}function eS(c){return de(c)&&c.fu.length<10}function cS(c,e){c.fu.push(e);const t=z6(c);t.ko()&&t.Yo&&t.Xo(e.mutations)}function xu(c){return de(c)&&!z6(c).No()&&c.fu.length>0}function Su(c){z6(c).start()}async function tS(c){z6(c).eu()}async function sS(c){const e=z6(c);for(const t of c.fu)e.Xo(t.mutations)}async function aS(c,e,t){const s=c.fu.shift(),a=Xa.from(s,e,t);await wu(c,()=>c.remoteSyncer.applySuccessfulWrite(a)),await V5(c)}async function nS(c,e){e&&z6(c).Yo&&await async function(t,s){if(a=s.code,Ww(a)&&a!==F.ABORTED){const n=t.fu.shift();z6(t).Mo(),await wu(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,s)),await V5(t)}var a}(c,e),xu(c)&&Su(c)}async function ro(c,e){const t=A2(c);t.asyncQueue.verifyOperationInProgress(),v2("RemoteStore","RemoteStore received new credentials");const s=de(t);t._u.add(3),await B8(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await z5(t)}async function rS(c,e){const t=A2(c);e?(t._u.delete(2),await z5(t)):e||(t._u.add(2),await B8(t),t.gu.set("Unknown"))}function v0(c){return c.pu||(c.pu=function(e,t,s){const a=A2(e);return a.su(),new Wx(t,a.connection,a.authCredentials,a.appCheckCredentials,a.It,s)}(c.datastore,c.asyncQueue,{Yr:Xx.bind(null,c),Zr:Jx.bind(null,c),Wo:Zx.bind(null,c)}),c.wu.push(async e=>{e?(c.pu.Mo(),sn(c)?tn(c):c.gu.set("Unknown")):(await c.pu.stop(),Lu(c))})),c.pu}function z6(c){return c.Iu||(c.Iu=function(e,t,s){const a=A2(e);return a.su(),new Gx(t,a.connection,a.authCredentials,a.appCheckCredentials,a.It,s)}(c.datastore,c.asyncQueue,{Yr:tS.bind(null,c),Zr:nS.bind(null,c),tu:sS.bind(null,c),Zo:aS.bind(null,c)}),c.wu.push(async e=>{e?(c.Iu.Mo(),await V5(c)):(await c.Iu.stop(),c.fu.length>0&&(v2("RemoteStore",`Stopping write stream with ${c.fu.length} pending writes`),c.fu=[]))})),c.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,s,a,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=n,this.deferred=new m6,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(r=>{})}static createAndSchedule(e,t,s,a,n){const r=Date.now()+s,i=new an(e,t,r,a,n);return i.start(s),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new l2(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nn(c,e){if(O3("AsyncQueue",`${e}: ${c}`),O8(c))return new l2(F.UNAVAILABLE,`${e}: ${c}`);throw c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e?(t,s)=>e(t,s)||H2.comparator(t.key,s.key):(t,s)=>H2.comparator(t.key,s.key),this.keyedMap=I0(),this.sortedSet=new e4(this.comparator)}static emptySet(e){return new je(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,n=s.getNext().key;if(!a.isEqual(n))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new je;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.Tu=new e4(H2.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):S2():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class e0{constructor(e,t,s,a,n,r,i,o,f){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=n,this.fromCache=r,this.syncStateChanged=i,this.excludesMetadataChanges=o,this.hasCachedResults=f}static fromInitialDocuments(e,t,s,a,n){const r=[];return t.forEach(i=>{r.push({type:0,doc:i})}),new e0(e,t,je.emptySet(t),r,s,a,!0,!1,n)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&m5(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.Au=void 0,this.listeners=[]}}class oS{constructor(){this.queries=new p0(e=>Qf(e),m5),this.onlineState="Unknown",this.Ru=new Set}}async function lS(c,e){const t=A2(c),s=e.query;let a=!1,n=t.queries.get(s);if(n||(a=!0,n=new iS),a)try{n.Au=await t.onListen(s)}catch(r){const i=nn(r,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(i)}t.queries.set(s,n),n.listeners.push(e),e.bu(t.onlineState),n.Au&&e.Pu(n.Au)&&rn(t)}async function fS(c,e){const t=A2(c),s=e.query;let a=!1;const n=t.queries.get(s);if(n){const r=n.listeners.indexOf(e);r>=0&&(n.listeners.splice(r,1),a=n.listeners.length===0)}if(a)return t.queries.delete(s),t.onUnlisten(s)}function uS(c,e){const t=A2(c);let s=!1;for(const a of e){const n=a.query,r=t.queries.get(n);if(r){for(const i of r.listeners)i.Pu(a)&&(s=!0);r.Au=a}}s&&rn(t)}function hS(c,e,t){const s=A2(c),a=s.queries.get(e);if(a)for(const n of a.listeners)n.onError(t);s.queries.delete(e)}function rn(c){c.Ru.forEach(e=>{e.next()})}class dS{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new e0(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=e0.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.key=e}}class Nu{constructor(e){this.key=e}}class mS{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=U2(),this.mutatedKeys=U2(),this.Gu=Xf(e),this.Qu=new je(this.Gu)}get ju(){return this.Uu}Wu(e,t){const s=t?t.zu:new io,a=t?t.Qu:this.Qu;let n=t?t.mutatedKeys:this.mutatedKeys,r=a,i=!1;const o=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,f=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((d,p)=>{const v=a.get(d),M=Ka(this.query,p)?p:null,L=!!v&&this.mutatedKeys.has(v.key),S=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let P=!1;v&&M?v.data.isEqual(M.data)?L!==S&&(s.track({type:3,doc:M}),P=!0):this.Hu(v,M)||(s.track({type:2,doc:M}),P=!0,(o&&this.Gu(M,o)>0||f&&this.Gu(M,f)<0)&&(i=!0)):!v&&M?(s.track({type:0,doc:M}),P=!0):v&&!M&&(s.track({type:1,doc:v}),P=!0,(o||f)&&(i=!0)),P&&(M?(r=r.add(M),n=S?n.add(d):n.delete(d)):(r=r.delete(d),n=n.delete(d)))}),this.query.limit!==null)for(;r.size>this.query.limit;){const d=this.query.limitType==="F"?r.last():r.first();r=r.delete(d.key),n=n.delete(d.key),s.track({type:1,doc:d})}return{Qu:r,zu:s,$i:i,mutatedKeys:n}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const a=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const n=e.zu.Eu();n.sort((f,d)=>function(p,v){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S2()}};return M(p)-M(v)}(f.type,d.type)||this.Gu(f.doc,d.doc)),this.Ju(s);const r=t?this.Yu():[],i=this.Ku.size===0&&this.current?1:0,o=i!==this.qu;return this.qu=i,n.length!==0||o?{snapshot:new e0(this.query,e.Qu,a,n,e.mutatedKeys,i===0,o,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new io,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=U2(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new Nu(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new ku(s))}),t}tc(e){this.Uu=e.Hi,this.Ku=U2();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return e0.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class pS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class vS{constructor(e){this.key=e,this.nc=!1}}class gS{constructor(e,t,s,a,n,r){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=n,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new p0(i=>Qf(i),m5),this.rc=new Map,this.oc=new Set,this.uc=new e4(H2.comparator),this.cc=new Map,this.ac=new Ja,this.hc={},this.lc=new Map,this.fc=Ze.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function HS(c,e){const t=SS(c);let s,a;const n=t.ic.get(e);if(n)s=n.targetId,t.sharedClientState.addLocalQueryTarget(s),a=n.view.ec();else{const r=await Rx(t.localStore,D3(e));t.isPrimaryClient&&Cu(t.remoteStore,r);const i=t.sharedClientState.addLocalQueryTarget(r.targetId);s=r.targetId,a=await zS(t,e,s,i==="current",r.resumeToken)}return a}async function zS(c,e,t,s,a){c._c=(p,v,M)=>async function(L,S,P,w){let N=S.view.Wu(P);N.$i&&(N=await so(L.localStore,S.query,!1).then(({documents:n2})=>S.view.Wu(n2,N)));const B=w&&w.targetChanges.get(S.targetId),c2=S.view.applyChanges(N,L.isPrimaryClient,B);return lo(L,S.targetId,c2.Xu),c2.snapshot}(c,p,v,M);const n=await so(c.localStore,e,!0),r=new mS(e,n.Hi),i=r.Wu(n.documents),o=F8.createSynthesizedTargetChangeForCurrentChange(t,s&&c.onlineState!=="Offline",a),f=r.applyChanges(i,c.isPrimaryClient,o);lo(c,t,f.Xu);const d=new pS(e,t,r);return c.ic.set(e,d),c.rc.has(t)?c.rc.get(t).push(e):c.rc.set(t,[e]),f.snapshot}async function VS(c,e){const t=A2(c),s=t.ic.get(e),a=t.rc.get(s.targetId);if(a.length>1)return t.rc.set(s.targetId,a.filter(n=>!m5(n,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await xs(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),yu(t.remoteStore,s.targetId),Ss(t,s.targetId)}).catch(I8)):(Ss(t,s.targetId),await xs(t.localStore,s.targetId,!0))}async function MS(c,e,t){const s=kS(c);try{const a=await function(n,r){const i=A2(n),o=J1.now(),f=r.reduce((v,M)=>v.add(M.key),U2());let d,p;return i.persistence.runTransaction("Locally write mutations","readwrite",v=>{let M=R3(),L=U2();return i.Gi.getEntries(v,f).next(S=>{M=S,M.forEach((P,w)=>{w.isValidDocument()||(L=L.add(P))})}).next(()=>i.localDocuments.getOverlayedDocuments(v,M)).next(S=>{d=S;const P=[];for(const w of r){const N=jw(w,d.get(w.key).overlayedDocument);N!=null&&P.push(new L6(w.key,N,$f(N.value.mapValue),f3.exists(!0)))}return i.mutationQueue.addMutationBatch(v,o,P,r)}).next(S=>{p=S;const P=S.applyToLocalDocumentSet(d,L);return i.documentOverlayCache.saveOverlays(v,S.batchId,P)})}).then(()=>({batchId:p.batchId,changes:ou(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(n,r,i){let o=n.hc[n.currentUser.toKey()];o||(o=new e4(o1)),o=o.insert(r,i),n.hc[n.currentUser.toKey()]=o}(s,a.batchId,t),await U8(s,a.changes),await V5(s.remoteStore)}catch(a){const n=nn(a,"Failed to persist write");t.reject(n)}}async function Au(c,e){const t=A2(c);try{const s=await Ix(t.localStore,e);e.targetChanges.forEach((a,n)=>{const r=t.cc.get(n);r&&(y1(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?r.nc=!0:a.modifiedDocuments.size>0?y1(r.nc):a.removedDocuments.size>0&&(y1(r.nc),r.nc=!1))}),await U8(t,s,e)}catch(s){await I8(s)}}function oo(c,e,t){const s=A2(c);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.ic.forEach((n,r)=>{const i=r.view.bu(e);i.snapshot&&a.push(i.snapshot)}),function(n,r){const i=A2(n);i.onlineState=r;let o=!1;i.queries.forEach((f,d)=>{for(const p of d.listeners)p.bu(r)&&(o=!0)}),o&&rn(i)}(s.eventManager,e),a.length&&s.sc.Wo(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function CS(c,e,t){const s=A2(c);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.cc.get(e),n=a&&a.key;if(n){let r=new e4(H2.comparator);r=r.insert(n,u4.newNoDocument(n,I2.min()));const i=U2().add(n),o=new g5(I2.min(),new Map,new Z1(o1),r,i);await Au(s,o),s.uc=s.uc.remove(n),s.cc.delete(e),on(s)}else await xs(s.localStore,e,!1).then(()=>Ss(s,e,t)).catch(I8)}async function yS(c,e){const t=A2(c),s=e.batch.batchId;try{const a=await Px(t.localStore,e);Eu(t,s,null),_u(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await U8(t,a)}catch(a){await I8(a)}}async function bS(c,e,t){const s=A2(c);try{const a=await function(n,r){const i=A2(n);return i.persistence.runTransaction("Reject batch","readwrite-primary",o=>{let f;return i.mutationQueue.lookupMutationBatch(o,r).next(d=>(y1(d!==null),f=d.keys(),i.mutationQueue.removeMutationBatch(o,d))).next(()=>i.mutationQueue.performConsistencyCheck(o)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(o,f,r)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,f)).next(()=>i.localDocuments.getDocuments(o,f))})}(s.localStore,e);Eu(s,e,t),_u(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await U8(s,a)}catch(a){await I8(a)}}function _u(c,e){(c.lc.get(e)||[]).forEach(t=>{t.resolve()}),c.lc.delete(e)}function Eu(c,e,t){const s=A2(c);let a=s.hc[s.currentUser.toKey()];if(a){const n=a.get(e);n&&(t?n.reject(t):n.resolve(),a=a.remove(e)),s.hc[s.currentUser.toKey()]=a}}function Ss(c,e,t=null){c.sharedClientState.removeLocalQueryTarget(e);for(const s of c.rc.get(e))c.ic.delete(s),t&&c.sc.wc(s,t);c.rc.delete(e),c.isPrimaryClient&&c.ac.ls(e).forEach(s=>{c.ac.containsKey(s)||Tu(c,s)})}function Tu(c,e){c.oc.delete(e.path.canonicalString());const t=c.uc.get(e);t!==null&&(yu(c.remoteStore,t),c.uc=c.uc.remove(e),c.cc.delete(t),on(c))}function lo(c,e,t){for(const s of t)s instanceof ku?(c.ac.addReference(s.key,e),LS(c,s)):s instanceof Nu?(v2("SyncEngine","Document no longer in limbo: "+s.key),c.ac.removeReference(s.key,e),c.ac.containsKey(s.key)||Tu(c,s.key)):S2()}function LS(c,e){const t=e.key,s=t.path.canonicalString();c.uc.get(t)||c.oc.has(s)||(v2("SyncEngine","New document in limbo: "+t),c.oc.add(s),on(c))}function on(c){for(;c.oc.size>0&&c.uc.size<c.maxConcurrentLimboResolutions;){const e=c.oc.values().next().value;c.oc.delete(e);const t=new H2(k1.fromString(e)),s=c.fc.next();c.cc.set(s,new vS(t)),c.uc=c.uc.insert(t,s),Cu(c.remoteStore,new ee(D3(Wf(t.path)),s,2,$a.at))}}async function U8(c,e,t){const s=A2(c),a=[],n=[],r=[];s.ic.isEmpty()||(s.ic.forEach((i,o)=>{r.push(s._c(o,e,t).then(f=>{if((f||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(o.targetId,f!=null&&f.fromCache?"not-current":"current"),f){a.push(f);const d=en.Ci(o.targetId,f);n.push(d)}}))}),await Promise.all(r),s.sc.Wo(a),await async function(i,o){const f=A2(i);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>U.forEach(o,p=>U.forEach(p.Si,v=>f.persistence.referenceDelegate.addReference(d,p.targetId,v)).next(()=>U.forEach(p.Di,v=>f.persistence.referenceDelegate.removeReference(d,p.targetId,v)))))}catch(d){if(!O8(d))throw d;v2("LocalStore","Failed to update sequence numbers: "+d)}for(const d of o){const p=d.targetId;if(!d.fromCache){const v=f.Ui.get(p),M=v.snapshotVersion,L=v.withLastLimboFreeSnapshotVersion(M);f.Ui=f.Ui.insert(p,L)}}}(s.localStore,n))}async function wS(c,e){const t=A2(c);if(!t.currentUser.isEqual(e)){v2("SyncEngine","User change. New user:",e.toKey());const s=await Hu(t.localStore,e);t.currentUser=e,function(a,n){a.lc.forEach(r=>{r.forEach(i=>{i.reject(new l2(F.CANCELLED,n))})}),a.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await U8(t,s.ji)}}function xS(c,e){const t=A2(c),s=t.cc.get(e);if(s&&s.nc)return U2().add(s.key);{let a=U2();const n=t.rc.get(e);if(!n)return a;for(const r of n){const i=t.ic.get(r);a=a.unionWith(i.view.ju)}return a}}function SS(c){const e=A2(c);return e.remoteStore.remoteSyncer.applyRemoteEvent=Au.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CS.bind(null,e),e.sc.Wo=uS.bind(null,e.eventManager),e.sc.wc=hS.bind(null,e.eventManager),e}function kS(c){const e=A2(c);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bS.bind(null,e),e}class NS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=H5(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Tx(this.persistence,new _x,e.initialUser,this.It)}yc(e){return new Nx(Za.Bs,this.It)}gc(e){return new Bx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AS{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>oo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wS.bind(null,this.syncEngine),await rS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oS}createDatastore(e){const t=H5(e.databaseInfo.databaseId),s=(a=e.databaseInfo,new qx(a));var a;return function(n,r,i,o){return new Kx(n,r,i,o)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,a=e.asyncQueue,n=i=>oo(this.syncEngine,i,0),r=no.C()?new no:new Ux,new Qx(t,s,a,n,r);var t,s,a,n,r}createSyncEngine(e,t){return function(s,a,n,r,i,o,f){const d=new gS(s,a,n,r,i,o);return f&&(d.dc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=A2(e);v2("RemoteStore","RemoteStore shutting down."),t._u.add(5),await B8(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(c,e,t){if(!t)throw new l2(F.INVALID_ARGUMENT,`Function ${c}() cannot be called with an empty ${e}.`)}function _S(c,e,t,s){if(e===!0&&s===!0)throw new l2(F.INVALID_ARGUMENT,`${c} and ${t} cannot be used together.`)}function fo(c){if(!H2.isDocumentKey(c))throw new l2(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${c} has ${c.length}.`)}function uo(c){if(H2.isDocumentKey(c))throw new l2(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${c} has ${c.length}.`)}function M5(c){if(c===void 0)return"undefined";if(c===null)return"null";if(typeof c=="string")return c.length>20&&(c=`${c.substring(0,20)}...`),JSON.stringify(c);if(typeof c=="number"||typeof c=="boolean")return""+c;if(typeof c=="object"){if(c instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(c);return e?`a custom ${e} object`:"an object"}}return typeof c=="function"?"a function":S2()}function ne(c,e){if("_delegate"in c&&(c=c._delegate),!(c instanceof e)){if(e.name===c.constructor.name)throw new l2(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=M5(c);throw new l2(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;class mo{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new l2(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new l2(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new l2(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new l2(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mo(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new rw;switch(t.type){case"gapi":const s=t.client;return new fw(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new l2(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ho.get(e);t&&(v2("ComponentProvider","Removing Datastore"),ho.delete(e),t.terminate())}(this),Promise.resolve()}}function ES(c,e,t,s={}){var a;const n=(c=ne(c,C5))._getSettings();if(n.host!=="firestore.googleapis.com"&&n.host!==e&&Hs("Host has been set in both settings() and useEmulator(), emulator host will be used"),c._setSettings(Object.assign(Object.assign({},n),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let r,i;if(typeof s.mockUserToken=="string")r=s.mockUserToken,i=m4.MOCK_USER;else{r=Sl(s.mockUserToken,(a=c._app)===null||a===void 0?void 0:a.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new l2(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new m4(o)}c._authCredentials=new iw(new Rf(r,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new p6(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new R4(this.firestore,e,this._key)}}class j8{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new j8(this.firestore,e,this._query)}}class p6 extends j8{constructor(e,t,s){super(e,t,Wf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new R4(this.firestore,null,new H2(e))}withConverter(e){return new p6(this.firestore,e,this._path)}}function re(c,e,...t){if(c=Y4(c),Pu("collection","path",e),c instanceof C5){const s=k1.fromString(e,...t);return uo(s),new p6(c,null,s)}{if(!(c instanceof R4||c instanceof p6))throw new l2(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=c._path.child(k1.fromString(e,...t));return uo(s),new p6(c.firestore,null,s)}}function ks(c,e,...t){if(c=Y4(c),arguments.length===1&&(e=Ff.R()),Pu("doc","path",e),c instanceof C5){const s=k1.fromString(e,...t);return fo(s),new R4(c,null,new H2(s))}{if(!(c instanceof R4||c instanceof p6))throw new l2(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=c._path.child(k1.fromString(e,...t));return fo(s),new R4(c.firestore,c instanceof p6?c.converter:null,new H2(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):O3("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=m4.UNAUTHENTICATED,this.clientId=Ff.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async n=>{v2("FirestoreClient","Received user=",n.uid),await this.authCredentialListener(n),this.user=n}),this.appCheckCredentials.start(s,n=>(v2("FirestoreClient","Received new app check token=",n),this.appCheckCredentialListener(n,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new l2(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new m6;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=nn(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function IS(c,e){c.asyncQueue.verifyOperationInProgress(),v2("FirestoreClient","Initializing OfflineComponentProvider");const t=await c.getConfiguration();await e.initialize(t);let s=t.initialUser;c.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Hu(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>c.terminate()),c.offlineComponents=e}async function OS(c,e){c.asyncQueue.verifyOperationInProgress();const t=await DS(c);v2("FirestoreClient","Initializing OnlineComponentProvider");const s=await c.getConfiguration();await e.initialize(t,s),c.setCredentialChangeListener(a=>ro(e.remoteStore,a)),c.setAppCheckTokenChangeListener((a,n)=>ro(e.remoteStore,n)),c.onlineComponents=e}async function DS(c){return c.offlineComponents||(v2("FirestoreClient","Using default OfflineComponentProvider"),await IS(c,new NS)),c.offlineComponents}async function Iu(c){return c.onlineComponents||(v2("FirestoreClient","Using default OnlineComponentProvider"),await OS(c,new AS)),c.onlineComponents}function RS(c){return Iu(c).then(e=>e.syncEngine)}async function FS(c){const e=await Iu(c),t=e.eventManager;return t.onListen=HS.bind(null,e.syncEngine),t.onUnlisten=VS.bind(null,e.syncEngine),t}function BS(c,e,t={}){const s=new m6;return c.asyncQueue.enqueueAndForget(async()=>function(a,n,r,i,o){const f=new TS({next:p=>{n.enqueueAndForget(()=>fS(a,d)),p.fromCache&&i.source==="server"?o.reject(new l2(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(p)},error:p=>o.reject(p)}),d=new dS(r,f,{includeMetadataChanges:!0,Nu:!0});return lS(a,d)}(await FS(c),c.asyncQueue,e,t,s)),s.promise}class US{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Vu(this,"async_queue_retry"),this.Wc=()=>{const t=N7();t&&v2("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=N7();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=N7();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const t=new m6;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!O8(e))throw e;v2("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const a=function(n){let r=n.message||"";return n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),r}(s);throw O3("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const a=an.createAndSchedule(this,e,t,s,n=>this.Yc(n));return this.qc.push(a),a}zc(){this.Kc&&S2()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}class $8 extends C5{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new US,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Du(this),this._firestoreClient.terminate()}}function jS(c,e){const t=typeof c=="object"?c:Ma(),s=typeof c=="string"?c:e||"(default)",a=u0(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const n=xl("firestore");n&&ES(a,...n)}return a}function Ou(c){return c._firestoreClient||Du(c),c._firestoreClient.verifyNotTerminated(),c._firestoreClient}function Du(c){var e;const t=c._freezeSettings(),s=function(a,n,r,i){return new Mw(a,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(c._databaseId,((e=c._app)===null||e===void 0?void 0:e.options.appId)||"",c._persistenceKey,t);c._firestoreClient=new PS(c._authCredentials,c._appCheckCredentials,c._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this._byteString=e}static fromBase64String(e){try{return new c0(V4.fromBase64String(e))}catch(t){throw new l2(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new c0(V4.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new l2(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new v4(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new l2(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new l2(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return o1(this._lat,e._lat)||o1(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=/^__.*__$/;class qS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new L6(e,this.data,this.fieldMask,t,this.fieldTransforms):new R8(e,this.data,t,this.fieldTransforms)}}class Ru{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new L6(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fu(c){switch(c){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S2()}}class un{constructor(e,t,s,a,n,r){this.settings=e,this.databaseId=t,this.It=s,this.ignoreUndefinedProperties=a,n===void 0&&this.na(),this.fieldTransforms=n||[],this.fieldMask=r||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new un(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ia({path:s,oa:!1});return a.ua(e),a}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ia({path:s,oa:!1});return a.na(),a}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return wt(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Fu(this.sa)&&$S.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class WS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=s||H5(e)}da(e,t,s,a=!1){return new un({sa:e,methodName:t,fa:s,path:v4.emptyPath(),oa:!1,la:a},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function hn(c){const e=c._freezeSettings(),t=H5(c._databaseId);return new WS(c._databaseId,!!e.ignoreUndefinedProperties,t)}function GS(c,e,t,s,a,n={}){const r=c.da(n.merge||n.mergeFields?2:0,e,t,a);dn("Data must be an object, but it was:",r,s);const i=Bu(s,r);let o,f;if(n.merge)o=new G4(r.fieldMask),f=r.fieldTransforms;else if(n.mergeFields){const d=[];for(const p of n.mergeFields){const v=Ns(e,p,t);if(!r.contains(v))throw new l2(F.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);ju(d,v)||d.push(v)}o=new G4(d),f=r.fieldTransforms.filter(p=>o.covers(p.field))}else o=null,f=r.fieldTransforms;return new qS(new P4(i),o,f)}class b5 extends ln{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof b5}}function KS(c,e,t,s){const a=c.da(1,e,t);dn("Data must be an object, but it was:",a,s);const n=[],r=P4.empty();he(s,(o,f)=>{const d=mn(e,o,t);f=Y4(f);const p=a.ca(d);if(f instanceof b5)n.push(d);else{const v=q8(f,p);v!=null&&(n.push(d),r.set(d,v))}});const i=new G4(n);return new Ru(r,i,a.fieldTransforms)}function YS(c,e,t,s,a,n){const r=c.da(1,e,t),i=[Ns(e,s,t)],o=[a];if(n.length%2!=0)throw new l2(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<n.length;v+=2)i.push(Ns(e,n[v])),o.push(n[v+1]);const f=[],d=P4.empty();for(let v=i.length-1;v>=0;--v)if(!ju(f,i[v])){const M=i[v];let L=o[v];L=Y4(L);const S=r.ca(M);if(L instanceof b5)f.push(M);else{const P=q8(L,S);P!=null&&(f.push(M),d.set(M,P))}}const p=new G4(f);return new Ru(d,p,r.fieldTransforms)}function QS(c,e,t,s=!1){return q8(t,c.da(s?4:3,e))}function q8(c,e){if(Uu(c=Y4(c)))return dn("Unsupported field value:",e,c),Bu(c,e);if(c instanceof ln)return function(t,s){if(!Fu(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const a=t._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(c,e),null;if(c===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),c instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const a=[];let n=0;for(const r of t){let i=q8(r,s.aa(n));i==null&&(i={nullValue:"NULL_VALUE"}),a.push(i),n++}return{arrayValue:{values:a}}}(c,e)}return function(t,s){if((t=Y4(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Ow(s.It,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const a=J1.fromDate(t);return{timestampValue:bt(s.It,a)}}if(t instanceof J1){const a=new J1(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:bt(s.It,a)}}if(t instanceof fn)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof c0)return{bytesValue:du(s.It,t._byteString)};if(t instanceof R4){const a=s.databaseId,n=t.firestore._databaseId;if(!n.isEqual(a))throw s.ha(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Qa(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${M5(t)}`)}(c,e)}function Bu(c,e){const t={};return Bf(c)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):he(c,(s,a)=>{const n=q8(a,e.ra(s));n!=null&&(t[s]=n)}),{mapValue:{fields:t}}}function Uu(c){return!(typeof c!="object"||c===null||c instanceof Array||c instanceof Date||c instanceof J1||c instanceof fn||c instanceof c0||c instanceof R4||c instanceof ln)}function dn(c,e,t){if(!Uu(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=M5(t);throw s==="an object"?e.ha(c+" a custom object"):e.ha(c+" "+s)}}function Ns(c,e,t){if((e=Y4(e))instanceof y5)return e._internalPath;if(typeof e=="string")return mn(c,e);throw wt("Field path arguments must be of type string or ",c,!1,void 0,t)}const XS=new RegExp("[~\\*/\\[\\]]");function mn(c,e,t){if(e.search(XS)>=0)throw wt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,c,!1,void 0,t);try{return new y5(...e.split("."))._internalPath}catch{throw wt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,c,!1,void 0,t)}}function wt(c,e,t,s,a){const n=s&&!s.isEmpty(),r=a!==void 0;let i=`Function ${e}() called with invalid data`;t&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(n||r)&&(o+=" (found",n&&(o+=` in field ${s}`),r&&(o+=` in document ${a}`),o+=")"),new l2(F.INVALID_ARGUMENT,i+c+o)}function ju(c,e){return c.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,s,a,n){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new R4(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JS extends $u{data(){return super.data()}}function pn(c,e){return typeof e=="string"?mn(c,e):e instanceof y5?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(c){if(c.limitType==="L"&&c.explicitOrderBy.length===0)throw new l2(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ek{}function As(c,...e){for(const t of e)c=t._apply(c);return c}class ck extends ek{constructor(e,t,s){super(),this.ma=e,this.ga=t,this.ya=s,this.type="where"}_apply(e){const t=hn(e.firestore),s=function(a,n,r,i,o,f,d){let p;if(o.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new l2(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vo(d,f);const M=[];for(const L of d)M.push(po(i,a,L));p={arrayValue:{values:M}}}else p=po(i,a,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vo(d,f),p=QS(r,n,d,f==="in"||f==="not-in");const v=x4.create(o,f,p);return function(M,L){if(L.dt()){const P=Kf(M);if(P!==null&&!P.isEqual(L.field))throw new l2(F.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${P.toString()}' and '${L.field.toString()}'`);const w=Gf(M);w!==null&&tk(M,L.field,w)}const S=function(P,w){for(const N of P.filters)if(w.indexOf(N.op)>=0)return N.op;return null}(M,function(P){switch(P){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(L.op));if(S!==null)throw S===L.op?new l2(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${L.op.toString()}' filter.`):new l2(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${L.op.toString()}' filters with '${S.toString()}' filters.`)}(a,v),v}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new j8(e.firestore,e.converter,function(a,n){const r=a.filters.concat([n]);return new D8(a.path,a.collectionGroup,a.explicitOrderBy.slice(),r,a.limit,a.limitType,a.startAt,a.endAt)}(e._query,s))}}function _s(c,e,t){const s=e,a=pn("where",c);return new ck(a,s,t)}function po(c,e,t){if(typeof(t=Y4(t))=="string"){if(t==="")throw new l2(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yf(e)&&t.indexOf("/")!==-1)throw new l2(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(k1.fromString(t));if(!H2.isDocumentKey(s))throw new l2(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ui(c,new H2(s))}if(t instanceof R4)return Ui(c,t._key);throw new l2(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${M5(t)}.`)}function vo(c,e){if(!Array.isArray(c)||c.length===0)throw new l2(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(c.length>10)throw new l2(F.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function tk(c,e,t){if(!t.isEqual(e))throw new l2(F.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{convertValue(e,t="none"){switch(ae(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Y1(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S2()}}convertObject(e,t){const s={};return he(e.fields,(a,n)=>{s[a]=this.convertValue(n,t)}),s}convertGeoPoint(e){return new fn(Y1(e.latitude),Y1(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=jf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(d8(e));default:return null}}convertTimestamp(e){const t=H6(e);return new J1(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=k1.fromString(e);y1(gu(s));const a=new m8(s.get(1),s.get(3)),n=new H2(s.popFirst(5));return a.isEqual(t)||O3(`Document ${n} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(c,e,t){let s;return s=c?t&&(t.merge||t.mergeFields)?c.toFirestore(e,t):c.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nk extends $u{constructor(e,t,s,a,n,r){super(e,t,s,a,r),this._firestore=e,this._firestoreImpl=e,this.metadata=n}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new et(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(pn("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class et extends nk{data(e={}){return super.data(e)}}class rk{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Tc(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new et(this._firestore,this._userDataWriter,s.key,s,new Tc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new l2(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let n=0;return s._snapshot.docChanges.map(r=>{const i=new et(s._firestore,s._userDataWriter,r.doc.key,r.doc,new Tc(s._snapshot.mutatedKeys.has(r.doc.key),s._snapshot.fromCache),s.query.converter);return r.doc,{type:"added",doc:i,oldIndex:-1,newIndex:n++}})}{let n=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(r=>a||r.type!==3).map(r=>{const i=new et(s._firestore,s._userDataWriter,r.doc.key,r.doc,new Tc(s._snapshot.mutatedKeys.has(r.doc.key),s._snapshot.fromCache),s.query.converter);let o=-1,f=-1;return r.type!==0&&(o=n.indexOf(r.doc.key),n=n.delete(r.doc.key)),r.type!==1&&(n=n.add(r.doc),f=n.indexOf(r.doc.key)),{type:ik(r.type),doc:i,oldIndex:o,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ik(c){switch(c){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S2()}}class ok extends sk{constructor(e){super(),this.firestore=e}convertBytes(e){return new c0(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new R4(this.firestore,null,t)}}function t0(c){c=ne(c,j8);const e=ne(c.firestore,$8),t=Ou(e),s=new ok(e);return ZS(c._query),BS(t,c._query).then(a=>new rk(e,s,c,a))}function lk(c,e,t,...s){c=ne(c,R4);const a=ne(c.firestore,$8),n=hn(a);let r;return r=typeof(e=Y4(e))=="string"||e instanceof y5?YS(n,"updateDoc",c._key,e,t,s):KS(n,"updateDoc",c._key,e),vn(a,[r.toMutation(c._key,f3.exists(!0))])}function fk(c){return vn(ne(c.firestore,$8),[new Ya(c._key,f3.none())])}function uk(c,e){const t=ne(c.firestore,$8),s=ks(c),a=ak(c.converter,e);return vn(t,[GS(hn(c.firestore),"addDoc",s._key,a,c.converter!==null,{}).toMutation(s._key,f3.exists(!1))]).then(()=>s)}function vn(c,e){return function(t,s){const a=new m6;return t.asyncQueue.enqueueAndForget(async()=>MS(await RS(t),s,a)),a.promise}(Ou(c),e)}(function(c,e=!0){(function(t){m0=t})(_l),P3(new M3("firestore",(t,{instanceIdentifier:s,options:a})=>{const n=t.getProvider("app").getImmediate(),r=new $8(new ow(t.getProvider("auth-internal")),new hw(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new l2(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new m8(i.options.projectId,o)}(n,s),n);return a=Object.assign({useFetchStreams:e},a),r._setSettings(a),r},"PUBLIC").setMultipleInstances(!0)),W4(Oi,"3.7.3",c),W4(Oi,"3.7.3","esm2017")})();var hk="firebase",dk="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W4(hk,dk,"app");const qu="@firebase/installations",gn="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=1e4,Gu=`w:${gn}`,Ku="FIS_v2",mk="https://firebaseinstallations.googleapis.com/v1",pk=60*60*1e3,vk="installations",gk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ie=new Xt(vk,gk,Hk);function Yu(c){return c instanceof $3&&c.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu({projectId:c}){return`${mk}/projects/${c}/installations`}function Xu(c){return{token:c.token,requestStatus:2,expiresIn:Vk(c.expiresIn),creationTime:Date.now()}}async function Ju(c,e){const s=(await e.json()).error;return ie.create("request-failed",{requestName:c,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Zu({apiKey:c}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c})}function zk(c,{refreshToken:e}){const t=Zu(c);return t.append("Authorization",Mk(e)),t}async function eh(c){const e=await c();return e.status>=500&&e.status<600?c():e}function Vk(c){return Number(c.replace("s","000"))}function Mk(c){return`${Ku} ${c}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck({appConfig:c,heartbeatServiceProvider:e},{fid:t}){const s=Qu(c),a=Zu(c),n=e.getImmediate({optional:!0});if(n){const f=await n.getHeartbeatsHeader();f&&a.append("x-firebase-client",f)}const r={fid:t,authVersion:Ku,appId:c.appId,sdkVersion:Gu},i={method:"POST",headers:a,body:JSON.stringify(r)},o=await eh(()=>fetch(s,i));if(o.ok){const f=await o.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Xu(f.authToken)}}else throw await Ju("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(c){return new Promise(e=>{setTimeout(e,c)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(c){return btoa(String.fromCharCode(...c)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=/^[cdef][\w-]{21}$/,Es="";function Lk(){try{const c=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(c),c[0]=112+c[0]%16;const t=wk(c);return bk.test(t)?t:Es}catch{return Es}}function wk(c){return yk(c).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L5(c){return`${c.appName}!${c.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;function sh(c,e){const t=L5(c);ah(t,e),xk(t,e)}function ah(c,e){const t=th.get(c);if(!!t)for(const s of t)s(e)}function xk(c,e){const t=Sk();t&&t.postMessage({key:c,fid:e}),kk()}let K6=null;function Sk(){return!K6&&"BroadcastChannel"in self&&(K6=new BroadcastChannel("[Firebase] FID Change"),K6.onmessage=c=>{ah(c.data.key,c.data.fid)}),K6}function kk(){th.size===0&&K6&&(K6.close(),K6=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="firebase-installations-database",Ak=1,oe="firebase-installations-store";let A7=null;function Hn(){return A7||(A7=Al(Nk,Ak,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(oe)}}})),A7}async function xt(c,e){const t=L5(c),a=(await Hn()).transaction(oe,"readwrite"),n=a.objectStore(oe),r=await n.get(t);return await n.put(e,t),await a.done,(!r||r.fid!==e.fid)&&sh(c,e.fid),e}async function nh(c){const e=L5(c),s=(await Hn()).transaction(oe,"readwrite");await s.objectStore(oe).delete(e),await s.done}async function w5(c,e){const t=L5(c),a=(await Hn()).transaction(oe,"readwrite"),n=a.objectStore(oe),r=await n.get(t),i=e(r);return i===void 0?await n.delete(t):await n.put(i,t),await a.done,i&&(!r||r.fid!==i.fid)&&sh(c,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(c){let e;const t=await w5(c.appConfig,s=>{const a=_k(s),n=Ek(c,a);return e=n.registrationPromise,n.installationEntry});return t.fid===Es?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function _k(c){const e=c||{fid:Lk(),registrationStatus:0};return rh(e)}function Ek(c,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ie.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Tk(c,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Pk(c)}:{installationEntry:e}}async function Tk(c,e){try{const t=await Ck(c,e);return xt(c.appConfig,t)}catch(t){throw Yu(t)&&t.customData.serverCode===409?await nh(c.appConfig):await xt(c.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Pk(c){let e=await go(c.appConfig);for(;e.registrationStatus===1;)await ch(100),e=await go(c.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await zn(c);return s||t}return e}function go(c){return w5(c,e=>{if(!e)throw ie.create("installation-not-found");return rh(e)})}function rh(c){return Ik(c)?{fid:c.fid,registrationStatus:0}:c}function Ik(c){return c.registrationStatus===1&&c.registrationTime+Wu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok({appConfig:c,heartbeatServiceProvider:e},t){const s=Dk(c,t),a=zk(c,t),n=e.getImmediate({optional:!0});if(n){const f=await n.getHeartbeatsHeader();f&&a.append("x-firebase-client",f)}const r={installation:{sdkVersion:Gu,appId:c.appId}},i={method:"POST",headers:a,body:JSON.stringify(r)},o=await eh(()=>fetch(s,i));if(o.ok){const f=await o.json();return Xu(f)}else throw await Ju("Generate Auth Token",o)}function Dk(c,{fid:e}){return`${Qu(c)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(c,e=!1){let t;const s=await w5(c.appConfig,n=>{if(!ih(n))throw ie.create("not-registered");const r=n.authToken;if(!e&&Bk(r))return n;if(r.requestStatus===1)return t=Rk(c,e),n;{if(!navigator.onLine)throw ie.create("app-offline");const i=jk(n);return t=Fk(c,i),i}});return t?await t:s.authToken}async function Rk(c,e){let t=await Ho(c.appConfig);for(;t.authToken.requestStatus===1;)await ch(100),t=await Ho(c.appConfig);const s=t.authToken;return s.requestStatus===0?Vn(c,e):s}function Ho(c){return w5(c,e=>{if(!ih(e))throw ie.create("not-registered");const t=e.authToken;return $k(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Fk(c,e){try{const t=await Ok(c,e),s=Object.assign(Object.assign({},e),{authToken:t});return await xt(c.appConfig,s),t}catch(t){if(Yu(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await nh(c.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xt(c.appConfig,s)}throw t}}function ih(c){return c!==void 0&&c.registrationStatus===2}function Bk(c){return c.requestStatus===2&&!Uk(c)}function Uk(c){const e=Date.now();return e<c.creationTime||c.creationTime+c.expiresIn<e+pk}function jk(c){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},c),{authToken:e})}function $k(c){return c.requestStatus===1&&c.requestTime+Wu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(c){const e=c,{installationEntry:t,registrationPromise:s}=await zn(e);return s?s.catch(console.error):Vn(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(c,e=!1){const t=c;return await Gk(t),(await Vn(t,e)).token}async function Gk(c){const{registrationPromise:e}=await zn(c);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(c){if(!c||!c.options)throw _7("App Configuration");if(!c.name)throw _7("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!c.options[t])throw _7(t);return{appName:c.name,projectId:c.options.projectId,apiKey:c.options.apiKey,appId:c.options.appId}}function _7(c){return ie.create("missing-app-config-values",{valueName:c})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="installations",Yk="installations-internal",Qk=c=>{const e=c.getProvider("app").getImmediate(),t=Kk(e),s=u0(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Xk=c=>{const e=c.getProvider("app").getImmediate(),t=u0(e,oh).getImmediate();return{getId:()=>qk(t),getToken:a=>Wk(t,a)}};function Jk(){P3(new M3(oh,Qk,"PUBLIC")),P3(new M3(Yk,Xk,"PRIVATE"))}Jk();W4(qu,gn);W4(qu,gn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="analytics",Zk="firebase_id",eN="origin",cN=60*1e3,tN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4=new za("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(c){return Promise.all(c.map(e=>e.catch(t=>t)))}function sN(c,e){const t=document.createElement("script");t.src=`${lh}?l=${c}&id=${e}`,t.async=!0,document.head.appendChild(t)}function aN(c){let e=[];return Array.isArray(window[c])?e=window[c]:window[c]=e,e}async function nN(c,e,t,s,a,n){const r=s[a];try{if(r)await e[r];else{const o=(await fh(t)).find(f=>f.measurementId===a);o&&await e[o.appId]}}catch(i){F4.error(i)}c("config",a,n)}async function rN(c,e,t,s,a){try{let n=[];if(a&&a.send_to){let r=a.send_to;Array.isArray(r)||(r=[r]);const i=await fh(t);for(const o of r){const f=i.find(p=>p.measurementId===o),d=f&&e[f.appId];if(d)n.push(d);else{n=[];break}}}n.length===0&&(n=Object.values(e)),await Promise.all(n),c("event",s,a||{})}catch(n){F4.error(n)}}function iN(c,e,t,s){async function a(n,r,i){try{n==="event"?await rN(c,e,t,r,i):n==="config"?await nN(c,e,t,s,r,i):n==="consent"?c("consent","update",i):c("set",r)}catch(o){F4.error(o)}}return a}function oN(c,e,t,s,a){let n=function(...r){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(n=window[a]),window[a]=iN(n,c,e,t),{gtagCore:n,wrappedGtag:window[a]}}function lN(c){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(lh)&&t.src.includes(c))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},K4=new Xt("analytics","Analytics",fN);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=30,hN=1e3;class dN{constructor(e={},t=hN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uh=new dN;function mN(c){return new Headers({Accept:"application/json","x-goog-api-key":c})}async function pN(c){var e;const{appId:t,apiKey:s}=c,a={method:"GET",headers:mN(s)},n=tN.replace("{app-id}",t),r=await fetch(n,a);if(r.status!==200&&r.status!==304){let i="";try{const o=await r.json();!((e=o.error)===null||e===void 0)&&e.message&&(i=o.error.message)}catch{}throw K4.create("config-fetch-failed",{httpStatus:r.status,responseMessage:i})}return r.json()}async function vN(c,e=uh,t){const{appId:s,apiKey:a,measurementId:n}=c.options;if(!s)throw K4.create("no-app-id");if(!a){if(n)return{measurementId:n,appId:s};throw K4.create("no-api-key")}const r=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new zN;return setTimeout(async()=>{i.abort()},t!==void 0?t:cN),hh({appId:s,apiKey:a,measurementId:n},r,i,e)}async function hh(c,{throttleEndTimeMillis:e,backoffCount:t},s,a=uh){var n,r;const{appId:i,measurementId:o}=c;try{await gN(s,e)}catch(f){if(o)return F4.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${(n=f)===null||n===void 0?void 0:n.message}]`),{appId:i,measurementId:o};throw f}try{const f=await pN(c);return a.deleteThrottleMetadata(i),f}catch(f){const d=f;if(!HN(d)){if(a.deleteThrottleMetadata(i),o)return F4.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:o};throw f}const p=Number((r=d==null?void 0:d.customData)===null||r===void 0?void 0:r.httpStatus)===503?vi(t,a.intervalMillis,uN):vi(t,a.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return a.setThrottleMetadata(i,v),F4.debug(`Calling attemptFetch again in ${p} millis`),hh(c,v,s,a)}}function gN(c,e){return new Promise((t,s)=>{const a=Math.max(e-Date.now(),0),n=setTimeout(t,a);c.addEventListener(()=>{clearTimeout(n),s(K4.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HN(c){if(!(c instanceof $3)||!c.customData)return!1;const e=Number(c.customData.httpStatus);return e===429||e===500||e===503||e===504}class zN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VN(c,e,t,s,a){if(a&&a.global){c("event",t,s);return}else{const n=await e,r=Object.assign(Object.assign({},s),{send_to:n});c("event",t,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(){var c;if(bl())try{await Ll()}catch(e){return F4.warn(K4.create("indexeddb-unavailable",{errorInfo:(c=e)===null||c===void 0?void 0:c.toString()}).message),!1}else return F4.warn(K4.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CN(c,e,t,s,a,n,r){var i;const o=vN(c);o.then(M=>{t[M.measurementId]=M.appId,c.options.measurementId&&M.measurementId!==c.options.measurementId&&F4.warn(`The measurement ID in the local Firebase config (${c.options.measurementId}) does not match the measurement ID fetched from the server (${M.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(M=>F4.error(M)),e.push(o);const f=MN().then(M=>{if(M)return s.getId()}),[d,p]=await Promise.all([o,f]);lN(n)||sN(n,d.measurementId),a("js",new Date);const v=(i=r==null?void 0:r.config)!==null&&i!==void 0?i:{};return v[eN]="firebase",v.update=!0,p!=null&&(v[Zk]=p),a("config",d.measurementId,v),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.app=e}_delete(){return delete W0[this.app.options.appId],Promise.resolve()}}let W0={},zo=[];const Vo={};let E7="dataLayer",bN="gtag",Mo,dh,Co=!1;function LN(){const c=[];if(Dy()&&c.push("This is a browser extension environment."),Ry()||c.push("Cookies are not available."),c.length>0){const e=c.map((s,a)=>`(${a+1}) ${s}`).join(" "),t=K4.create("invalid-analytics-context",{errorInfo:e});F4.warn(t.message)}}function wN(c,e,t){LN();const s=c.options.appId;if(!s)throw K4.create("no-app-id");if(!c.options.apiKey)if(c.options.measurementId)F4.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${c.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw K4.create("no-api-key");if(W0[s]!=null)throw K4.create("already-exists",{id:s});if(!Co){aN(E7);const{wrappedGtag:n,gtagCore:r}=oN(W0,zo,Vo,E7,bN);dh=n,Mo=r,Co=!0}return W0[s]=CN(c,zo,Vo,e,Mo,E7,t),new yN(c)}function xN(c=Ma()){c=Y4(c);const e=u0(c,St);return e.isInitialized()?e.getImmediate():SN(c)}function SN(c,e={}){const t=u0(c,St);if(t.isInitialized()){const a=t.getImmediate();if(ft(e,t.getOptions()))return a;throw K4.create("already-initialized")}return t.initialize({options:e})}function kN(c,e,t,s){c=Y4(c),VN(dh,W0[c.app.options.appId],e,t,s).catch(a=>F4.error(a))}const yo="@firebase/analytics",bo="0.8.4";function NN(){P3(new M3(St,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return wN(s,a,t)},"PUBLIC")),P3(new M3("analytics-internal",c,"PRIVATE")),W4(yo,bo),W4(yo,bo,"esm2017");function c(e){try{const t=e.getProvider(St).getImmediate();return{logEvent:(s,a,n)=>kN(t,s,a,n)}}catch(t){throw K4.create("interop-component-reg-failed",{reason:t})}}}NN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="firebasestorage.googleapis.com",AN="storageBucket",_N=2*60*1e3,EN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3 extends $3{constructor(e,t,s=0){super(T7(e),`Firebase Storage: ${t} (${T7(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,b3.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return T7(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function T7(c){return"storage/"+c}function TN(){const c="An unknown error occurred, please check the error payload for server response.";return new b3("unknown",c)}function PN(){return new b3("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function IN(){return new b3("canceled","User canceled the upload/download.")}function ON(c){return new b3("invalid-url","Invalid URL '"+c+"'.")}function DN(c){return new b3("invalid-default-bucket","Invalid default bucket '"+c+"'.")}function Lo(c){return new b3("invalid-argument",c)}function ph(){return new b3("app-deleted","The Firebase app was deleted.")}function RN(c){return new b3("invalid-root-operation","The operation '"+c+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=r3.makeFromUrl(e,t)}catch{return new r3(e,"")}if(s.path==="")return s;throw DN(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function n(c2){c2.path.charAt(c2.path.length-1)==="/"&&(c2.path_=c2.path_.slice(0,-1))}const r="(/(.*))?$",i=new RegExp("^gs://"+a+r,"i"),o={bucket:1,path:3};function f(c2){c2.path_=decodeURIComponent(c2.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",M=new RegExp(`^https?://${p}/${d}/b/${a}/o${v}`,"i"),L={bucket:1,path:3},S=t===mh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",w=new RegExp(`^https?://${S}/${a}/${P}`,"i"),B=[{regex:i,indices:o,postModify:n},{regex:M,indices:L,postModify:f},{regex:w,indices:{bucket:1,path:2},postModify:f}];for(let c2=0;c2<B.length;c2++){const n2=B[c2],w2=n2.regex.exec(e);if(w2){const g2=w2[n2.indices.bucket];let V2=w2[n2.indices.path];V2||(V2=""),s=new r3(g2,V2),n2.postModify(s);break}}if(s==null)throw ON(e);return s}}class FN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(c,e,t){let s=1,a=null,n=null,r=!1,i=0;function o(){return i===2}let f=!1;function d(...P){f||(f=!0,e.apply(null,P))}function p(P){a=setTimeout(()=>{a=null,c(M,o())},P)}function v(){n&&clearTimeout(n)}function M(P,...w){if(f){v();return}if(P){v(),d.call(null,P,...w);return}if(o()||r){v(),d.call(null,P,...w);return}s<64&&(s*=2);let B;i===1?(i=2,B=0):B=(s+Math.random())*1e3,p(B)}let L=!1;function S(P){L||(L=!0,v(),!f&&(a!==null?(P||(i=2),clearTimeout(a),p(0)):P||(i=1)))}return p(0),n=setTimeout(()=>{r=!0,S(!0)},t),S}function UN(c){c(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(c){return c!==void 0}function wo(c,e,t,s){if(s<e)throw Lo(`Invalid value for '${c}'. Expected ${e} or greater.`);if(s>t)throw Lo(`Invalid value for '${c}'. Expected ${t} or less.`)}function $N(c){const e=encodeURIComponent;let t="?";for(const s in c)if(c.hasOwnProperty(s)){const a=e(s)+"="+e(c[s]);t=t+a+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt;(function(c){c[c.NO_ERROR=0]="NO_ERROR",c[c.NETWORK_ERROR=1]="NETWORK_ERROR",c[c.ABORT=2]="ABORT"})(kt||(kt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(c,e){const t=c>=500&&c<600,a=[408,429].indexOf(c)!==-1,n=e.indexOf(c)!==-1;return t||a||n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,t,s,a,n,r,i,o,f,d,p,v=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=n,this.additionalRetryCodes_=r,this.callback_=i,this.errorCallback_=o,this.timeout_=f,this.progressCallback_=d,this.connectionFactory_=p,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((M,L)=>{this.resolve_=M,this.reject_=L,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new Pc(!1,null,!0));return}const n=this.connectionFactory_();this.pendingConnection_=n;const r=i=>{const o=i.loaded,f=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,f)};this.progressCallback_!==null&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const i=n.getErrorCode()===kt.NO_ERROR,o=n.getStatus();if((!i||qN(o,this.additionalRetryCodes_))&&this.retry){const d=n.getErrorCode()===kt.ABORT;s(!1,new Pc(!1,null,d));return}const f=this.successCodes_.indexOf(o)!==-1;s(!0,new Pc(f,n))})},t=(s,a)=>{const n=this.resolve_,r=this.reject_,i=a.connection;if(a.wasSuccessCode)try{const o=this.callback_(i,i.getResponse());jN(o)?n(o):n()}catch(o){r(o)}else if(i!==null){const o=TN();o.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,o)):r(o)}else if(a.canceled){const o=this.appDelete_?ph():IN();r(o)}else{const o=PN();r(o)}};this.canceled_?t(!1,new Pc(!1,null,!0)):this.backoffId_=BN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pc{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function GN(c,e){e!==null&&e.length>0&&(c.Authorization="Firebase "+e)}function KN(c,e){c["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function YN(c,e){e&&(c["X-Firebase-GMPID"]=e)}function QN(c,e){e!==null&&(c["X-Firebase-AppCheck"]=e)}function XN(c,e,t,s,a,n,r=!0){const i=$N(c.urlParams),o=c.url+i,f=Object.assign({},c.headers);return YN(f,e),GN(f,t),KN(f,n),QN(f,s),new WN(o,c.method,f,c.body,c.successCodes,c.additionalRetryCodes,c.handler,c.errorHandler,c.timeout,c.progressCallback,a,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(c){if(c.length===0)return null;const e=c.lastIndexOf("/");return e===-1?"":c.slice(0,e)}function ZN(c){const e=c.lastIndexOf("/",c.length-2);return e===-1?c:c.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this._service=e,t instanceof r3?this._location=t:this._location=r3.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Nt(e,t)}get root(){const e=new r3(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ZN(this._location.path)}get storage(){return this._service}get parent(){const e=JN(this._location.path);if(e===null)return null;const t=new r3(this._location.bucket,e);return new Nt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RN(e)}}function xo(c,e){const t=e==null?void 0:e[AN];return t==null?null:r3.makeFromBucketSpec(t,c)}function eA(c,e,t,s={}){c.host=`${e}:${t}`,c._protocol="http";const{mockUserToken:a}=s;a&&(c._overrideAuthToken=typeof a=="string"?a:Sl(a,c.app.options.projectId))}class cA{constructor(e,t,s,a,n){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=n,this._bucket=null,this._host=mh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_N,this._maxUploadRetryTime=EN,this._requests=new Set,a!=null?this._bucket=r3.makeFromBucketSpec(a,this._host):this._bucket=xo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=r3.makeFromBucketSpec(this._url,e):this._bucket=xo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nt(this,e)}_makeRequest(e,t,s,a,n=!0){if(this._deleted)return new FN(ph());{const r=XN(e,this._appId,s,a,t,this._firebaseVersion,n);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const So="@firebase/storage",ko="0.9.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="storage";function tA(c=Ma(),e){c=Y4(c);const s=u0(c,vh).getImmediate({identifier:e}),a=xl("storage");return a&&sA(s,...a),s}function sA(c,e,t,s={}){eA(c,e,t,s)}function aA(c,{instanceIdentifier:e}){const t=c.getProvider("app").getImmediate(),s=c.getProvider("auth-internal"),a=c.getProvider("app-check-internal");return new cA(t,s,a,e,_l)}function nA(){P3(new M3(vh,aA,"PUBLIC").setMultipleInstances(!0)),W4(So,ko,""),W4(So,ko,"esm2017")}nA();const rA={apiKey:"AIzaSyA537GAIRoJbIaMibJW3Eb7Oo_DFv-IfZ4",authDomain:"telekung-1bf83.firebaseapp.com",projectId:"telekung-1bf83",storageBucket:"telekung-1bf83.appspot.com",messagingSenderId:"731202700742",appId:"1:731202700742:web:618b2b2b35807e61e55ec7",measurementId:"G-01Z43Q53E8"},Mn=El(rA);tA(Mn);xN(Mn);const _3=jS(Mn),No=Ha("tables",{state:()=>({tables:{tables:[]}}),getters:{getTables:c=>c.tables},actions:{async fetchData(){const c=await t0(re(_3,"tables"));this.tables=c.docs.map(e=>e.data())}}}),iA={data(){return{tables:[],form:[],name:"",tableselect:"",course:"",persons:"",date:"",time:"",telephone:"",maxperson:8}},async mounted(){await No().fetchData(),this.tables=No().getTables,console.log(this.tables)},methods:{async signInButtonPressed(){console.log(this.name,this.tableselect,this.date,this.course,this.persons,this.telephone,this.time),await uk(re(_3,"form"),{tableselect:this.tableselect,persons:this.persons,name:this.name,course:this.course,date:this.date,time:this.time,telephone:this.telephone,status:"not_check"})},async tableNo(){console.log(this.tableselect);const c=As(re(_3,"table"),_s("no","==",this.tableselect));(await t0(c)).forEach(t=>{console.log(t.data()),console.log(t.id," => ",t.data()),this.maxperson=t.data().tableselect}),console.log(this.maxperson)}}},oA=b("link",{rel:"stylesheet",href:"../assets/main.css"},null,-1),lA={id:"background"},fA={class:""},uA={class:"box"},hA=b("label",{for:"tables"},"Select table:",-1),dA=b("option",{value:""},"--select--",-1),mA=b("br",null,null,-1),pA=b("label",{for:"persons"},"Number of people : ",-1),vA=["max"],gA=b("br",null,null,-1),HA=b("label",{for:"name"},"Name : ",-1),zA=b("br",null,null,-1),VA=b("label",{for:"course"},"Choosing a course : ",-1),MA=b("option",{value:""},"--select--",-1),CA=b("option",{value:"normal",class:"Normal"}," Normal",-1),yA=b("option",{value:"regular",class:"Regular"},"Regular",-1),bA=b("option",{value:"premium",class:"Premium"},"Premium",-1),LA=[MA,CA,yA,bA],wA=b("br",null,null,-1),xA=b("label",{for:"Select-day"},"Choose a date : ",-1),SA=b("br",null,null,-1),kA=b("label",{for:"time"},"Select a time : ",-1),NA=b("br",null,null,-1),AA=b("label",{for:"Telephone"},"Telephone: ",-1),_A=b("br",null,null,-1),EA=b("button",{class:"btn",type:"submit",value:"Submit"},"Make to plan",-1);function TA(c,e,t,s,a,n){const r=z4("router-link"),i=z4("font-awesome-icon");return Q2(),c1(C1,null,[oA,b("div",lA,[b("div",fA,[o2(r,{to:"/",class:"button"},{default:R2(()=>[L2("Home")]),_:1}),o2(r,{to:"/menu",class:"button"},{default:R2(()=>[L2("Menu")]),_:1}),o2(r,{to:"/select",class:"butto"},{default:R2(()=>[o2(i,{icon:"fa-solid fa-pen"}),L2(" Table")]),_:1}),o2(r,{to:"/order",class:"button"},{default:R2(()=>[L2("Order")]),_:1})])]),b("div",uA,[b("form",{class:"entable",onSubmit:e[8]||(e[8]=cy((...o)=>n.signInButtonPressed&&n.signInButtonPressed(...o),["prevent"]))},[hA,I6(b("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>a.tableselect=o),name:"tables",id:"tables",onChange:e[1]||(e[1]=o=>n.tableNo()),autofocus:"",required:"required"},[dA,(Q2(!0),c1(C1,null,u6(a.tables,o=>(Q2(),c1("option",{key:o.id},j1(o.no),1))),128))],544),[[ui,a.tableselect]]),mA,pA,I6(b("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>a.persons=o),type:"number",name:"numbers",size:"25",min:"1",max:a.maxperson,required:""},null,8,vA),[[N0,a.persons]]),gA,HA,I6(b("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>a.name=o),type:"text",class:"names",name:"name",placeholder:"Plese enter your name",required:""},null,512),[[N0,a.name]]),zA,VA,I6(b("select",{"onUpdate:modelValue":e[4]||(e[4]=o=>a.course=o),name:"course",class:"course",required:"required"},LA,512),[[ui,a.course]]),wA,xA,I6(b("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>a.date=o),type:"date",class:"date",name:"date",required:""},null,512),[[N0,a.date]]),SA,kA,I6(b("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>a.time=o),type:"time",id:"time",name:"time"},null,512),[[N0,a.time]]),NA,AA,I6(b("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>a.telephone=o),type:"text",id:"telephone",name:"telephone",size:"30",placeholder:"Plese enter the number of people",required:""},null,512),[[N0,a.telephone]]),_A,EA],32)])],64)}const PA=y3(iA,[["render",TA]]),s0=Ha("selectmenu",{state:()=>({selectmenu:{selectmenu:[]}}),getters:{getselectmenu:c=>c.selectmenu},actions:{async fetchData(){const c=await t0(re(_3,"selectmenu"));this.selectmenu=c.docs.map(e=>e.data())}}});const IA={data(){return{selectmenu:[],image_src:"",count:0,food:0,f:0,carts:[]}},async mounted(){await s0().fetchData(),this.selectmenu=s0().getselectmenu,this.normal()},methods:{increment(){this.count++},decrement(){this.count>0&&this.count--},addCard:function(c){console.log(this.food)}},computed:{}},OA=b("link",{rel:"stylesheet",href:"../src/assets/style.css"},null,-1),DA=b("link",{rel:"stylesheet",href:"../src/assets/main.css"},null,-1),RA={id:"background"},FA={class:"dropdown"},BA=b("div",{class:"dropdown-content"},[b("a",{href:"Order"},"Normal"),b("a",{href:"regular"},"Regular"),b("a",{href:"premium"},"Premium")],-1),UA={class:"topright"},jA={class:"row"},$A={key:0,class:"profilecolor"},qA=["src"],WA={class:"card-footer"},GA=["onClick"],KA=b("div",null,[b("tbody")],-1);function YA(c,e,t,s,a,n){const r=z4("router-link"),i=z4("font-awesome-icon");return Q2(),c1(C1,null,[OA,DA,b("div",RA,[b("div",null,[o2(r,{to:"/",class:"button"},{default:R2(()=>[L2("Home")]),_:1}),o2(r,{to:"/menu",class:"button"},{default:R2(()=>[L2("Menu")]),_:1}),o2(r,{to:"/select",class:"button"},{default:R2(()=>[L2("Table")]),_:1}),b("div",FA,[o2(r,{to:"/order",class:"dropbtn"},{default:R2(()=>[L2("Order")]),_:1}),BA]),b("div",UA,[o2(r,{to:"/cart"},{default:R2(()=>[o2(i,{icon:"fa-solid fa-cart-shopping ",style:{color:"brown"},size:"2x"})]),_:1})])])]),b("div",null,[b("div",jA,[(Q2(!0),c1(C1,null,u6(a.selectmenu,o=>(Q2(),c1("div",{class:"col-md-4",key:o.value===1,style:{display:"inline-block"}},[o.value===1?(Q2(),c1("div",$A,[b("img",{src:o.picture,class:"profilecolor2"},null,8,qA),b("h3",null,"\xA0\xA0\xA0\xA0\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39 : "+j1(o.name),1),b("div",WA,[L2(" \xA0\xA0\xA0\xA0"),b("button",{class:"btn btn-primary",onClick:f=>n.addCard(o)},"Add To Cart",8,GA)])])):Be("",!0)]))),128))])]),KA],64)}const QA=y3(IA,[["render",YA]]),XA={data(){return{selectmenu:[],image_src:"",counter:2}},async mounted(){await s0().fetchData(),this.selectmenu=s0().getselectmenu,this.normal()},methods:{increment(){this.count++},decrement(){this.count>0&&this.count--},addCard:function(c){console.log(this.food)}}},JA=b("link",{rel:"stylesheet",href:"../src/assets/style.css"},null,-1),ZA=b("link",{rel:"stylesheet",href:"../src/assets/main.css"},null,-1),e_=b("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),c_={id:"background"},t_={class:"dropdown"},s_=b("div",{class:"dropdown-content"},[b("a",{href:"Order"},"Normal"),b("a",{href:"#"},"Regular"),b("a",{href:"premium"},"Premium")],-1),a_={class:"topright"},n_={class:"row"},r_={key:0,class:"profilecolor"},i_=["src"],o_={class:"card-footer"},l_=["onClick"],f_={class:"row"},u_={key:0,class:"profilecolor"},h_=["src"],d_={class:"card-footer"},m_=["onClick"];function p_(c,e,t,s,a,n){const r=z4("router-link"),i=z4("font-awesome-icon");return Q2(),c1(C1,null,[JA,ZA,e_,b("div",c_,[b("div",null,[o2(r,{to:"/",class:"button"},{default:R2(()=>[L2("Home")]),_:1}),o2(r,{to:"/menu",class:"button"},{default:R2(()=>[L2("Menu")]),_:1}),o2(r,{to:"/select",class:"button"},{default:R2(()=>[L2("Table")]),_:1}),b("div",t_,[o2(r,{to:"/order",class:"dropbtn"},{default:R2(()=>[L2("Order")]),_:1}),s_]),b("div",a_,[o2(r,{to:"/cart"},{default:R2(()=>[o2(i,{icon:"fa-solid fa-cart-shopping ",style:{color:"brown"},size:"2x"})]),_:1})])])]),b("div",null,[b("div",n_,[(Q2(!0),c1(C1,null,u6(a.selectmenu,o=>(Q2(),c1("div",{class:"col-md-4",key:o.value===1,style:{display:"inline-block"}},[o.value===1?(Q2(),c1("div",r_,[b("img",{src:o.picture,class:"profilecolor2"},null,8,i_),b("h3",null,"\xA0\xA0\xA0\xA0\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39 : "+j1(o.name),1),b("div",o_,[L2(" \xA0\xA0\xA0\xA0"),b("button",{class:"btn btn-primary",onClick:f=>n.addCard(o)},"Add To Cart",8,l_)])])):Be("",!0)]))),128))]),b("div",f_,[(Q2(!0),c1(C1,null,u6(a.selectmenu,o=>(Q2(),c1("div",{class:"col-md-4",key:o.value===1,style:{display:"inline-block"}},[o.value===2?(Q2(),c1("div",u_,[b("img",{src:o.picture,class:"profilecolor2"},null,8,h_),b("h3",null,"\xA0\xA0\xA0\xA0\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39 : "+j1(o.name),1),b("div",d_,[L2(" \xA0\xA0\xA0\xA0"),b("button",{class:"btn btn-primary",onClick:f=>n.addCard(o)},"Add To Cart",8,m_)])])):Be("",!0)]))),128))])])],64)}const v_=y3(XA,[["render",p_]]),Ao=Ha("form",{state:()=>({form:{form:[]}}),getters:{getForm:c=>c.form},actions:{async fetchData(){const c=await t0(re(_3,"form"));this.form=c.docs.map(e=>e.data())}}});const g_={data(){return{form:[]}},async mounted(){await Ao().fetchData(),this.form=Ao().getForm,console.log(this.form)},methods:{async deleteq(c){console.log(c);const e=As(re(_3,"form"),_s("name","==",c));(await t0(e)).forEach(s=>{fk(ks(_3,"form",s.id)),console.log(s.id," => ",s.data())})},async updateq(c){console.log(c);const e=As(re(_3,"form"),_s("name","==",c));(await t0(e)).forEach(s=>{lk(ks(_3,"form",s.id),{status:"confirm"}),console.log(s.id," => ",s.data())})}}},H_=b("link",{rel:"stylesheet",href:"../assets/main.css"},null,-1),z_=b("h1",null,"Admin",-1),V_={class:"adminflexbox"},M_={class:"admincontent"},C_=b("div",null,null,-1),y_=["onClick"],b_=["onClick"];function L_(c,e,t,s,a,n){return Q2(),c1(C1,null,[H_,z_,b("div",V_,[(Q2(!0),c1(C1,null,u6(a.form,r=>(Q2(),c1("div",{class:"adminitem",key:r.id},[b("div",M_,[b("div",null," Table : "+j1(r.tableselect),1),b("div",null," Number of people : "+j1(r.person),1),b("div",null," Name : "+j1(r.name),1),b("div",null," Course : "+j1(r.course),1),b("div",null," Date : "+j1(r.date),1),b("div",null," Time : "+j1(r.time),1),b("div",null," Tel : "+j1(r.telephone),1),b("div",null," Status : "+j1(r.status),1),C_,b("div",null,[b("button",{class:"butto",onClick:i=>n.updateq(r.name)},"Check",8,y_),b("button",{class:"butto",onClick:i=>n.deleteq(r.name)},"Delete",8,b_)])])]))),128))])],64)}const w_=y3(g_,[["render",L_]]),x_={data(){return{selectmenu:[],image_src:"",counter:2}},async mounted(){await s0().fetchData(),this.selectmenu=s0().getselectmenu,this.normal()},methods:{increment(){this.count++},decrement(){this.count>0&&this.count--},addCard:function(c){console.log(this.food)}}},S_=b("link",{rel:"stylesheet",href:"../src/assets/style.css"},null,-1),k_=b("link",{rel:"stylesheet",href:"../src/assets/main.css"},null,-1),N_=b("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),A_={id:"background"},__={class:"dropdown"},E_=b("div",{class:"dropdown-content"},[b("a",{href:"Order"},"Normal"),b("a",{href:"regular"},"Regular"),b("a",{href:"#"},"Premium")],-1),T_={class:"topright"},P_={class:"row"},I_={key:0,class:"profilecolor"},O_=["src"],D_={class:"card-footer"},R_=["onClick"],F_={class:"row"},B_={key:0,class:"profilecolor"},U_=["src"],j_={class:"card-footer"},$_=["onClick"],q_={class:"row"},W_={key:0,class:"profilecolor"},G_=["src"],K_={class:"card-footer"},Y_=["onClick"];function Q_(c,e,t,s,a,n){const r=z4("router-link"),i=z4("font-awesome-icon");return Q2(),c1(C1,null,[S_,k_,N_,b("div",A_,[b("div",null,[o2(r,{to:"/",class:"button"},{default:R2(()=>[L2("Home")]),_:1}),o2(r,{to:"/menu",class:"button"},{default:R2(()=>[L2("Menu")]),_:1}),o2(r,{to:"/select",class:"button"},{default:R2(()=>[L2("Table")]),_:1}),b("div",__,[o2(r,{to:"/order",class:"dropbtn"},{default:R2(()=>[L2("Order")]),_:1}),E_]),b("div",T_,[o2(r,{to:"/cart"},{default:R2(()=>[o2(i,{icon:"fa-solid fa-cart-shopping ",style:{color:"brown"},size:"2x"})]),_:1})])])]),b("div",null,[b("div",P_,[(Q2(!0),c1(C1,null,u6(a.selectmenu,o=>(Q2(),c1("div",{class:"col-md-4",key:o.value===1,style:{display:"inline-block"}},[o.value===1?(Q2(),c1("div",I_,[b("img",{src:o.picture,class:"profilecolor2"},null,8,O_),b("h3",null,"\xA0\xA0\xA0\xA0\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39 : "+j1(o.name),1),b("div",D_,[L2(" \xA0\xA0\xA0\xA0"),b("button",{class:"btn btn-primary",onClick:f=>n.addCard(o)},"Add To Cart",8,R_)])])):Be("",!0)]))),128)),b("div",F_,[(Q2(!0),c1(C1,null,u6(a.selectmenu,o=>(Q2(),c1("div",{class:"col-md-4",key:o.value===1,style:{display:"inline-block"}},[o.value===2?(Q2(),c1("div",B_,[b("img",{src:o.picture,class:"profilecolor2"},null,8,U_),b("h3",null,"\xA0\xA0\xA0\xA0\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39 : "+j1(o.name),1),b("div",j_,[L2(" \xA0\xA0\xA0\xA0"),b("button",{class:"btn btn-primary",onClick:f=>n.addCard(o)},"Add To Cart",8,$_)])])):Be("",!0)]))),128))])]),b("div",q_,[(Q2(!0),c1(C1,null,u6(a.selectmenu,o=>(Q2(),c1("div",{class:"col-md-4",key:o.value===1,style:{display:"inline-block"}},[o.value===3?(Q2(),c1("div",W_,[b("img",{src:o.picture,class:"profilecolor2"},null,8,G_),b("h3",null,"\xA0\xA0\xA0\xA0\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39 : "+j1(o.name),1),b("div",K_,[L2(" \xA0\xA0\xA0\xA0"),b("button",{class:"btn btn-primary",onClick:f=>n.addCard(o)},"Add To Cart",8,Y_)])])):Be("",!0)]))),128))])])],64)}const X_=y3(x_,[["render",Q_]]);const J_={},Z_=b("link",{rel:"stylesheet",href:"../assets/style.css"},null,-1),eE={id:"background"},cE={class:"h"},tE={class:"fonts"},sE=va('<label class="ss" for="name">User : </label><input type="text" class="ss" name="name" placeholder="Plese enter your user" required><label class="ss" for="Pasword">Password : </label><input type="password" name="password" placeholder="Plese enter your password" required><button class="ss" type="submit" value="Submit"><a href="http://localhost:5173/admin">Login</a></button>',5),aE=va('<div id="background6"><div id="background5"><video autoplay="autoplay" loop="1" width="1100px" height="100px"><source src="'+Ml+'" type="video/mp4"></video></div></div><div id="background2"><div class="gap"><div class="image"><img src="https://cdn.discordapp.com/attachments/1034523519125557309/1045043933580894370/Screenshot_2022-11-24_012152.png" alt="shabu" width="800" height="800"></div><div><h1 class="slo">Tele Shabu</h1><div class="slo">\u0E2D\u0E34\u0E48\u0E21\u0E2D\u0E23\u0E48\u0E2D\u0E22\u0E01\u0E31\u0E1A \u0E40\u0E17\u0E40\u0E25\u0E0A\u0E32\u0E1A\u0E39 \u0E2B\u0E21\u0E49\u0E2D\u0E44\u0E1F\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E38\u0E02</div></div></div></div>',2),nE={id:"background3"},rE={class:"icon"},iE=b("div",null," Follow us ",-1);function oE(c,e,t,s,a,n){const r=z4("font-awesome-icon"),i=z4("router-link");return Q2(),c1(C1,null,[Z_,b("div",eE,[b("div",cE,[b("div",tE,[o2(i,{to:"/",class:"butto"},{default:R2(()=>[o2(r,{icon:"fa-solid fa-house"}),L2(" \xA0Home")]),_:1}),o2(i,{to:"/menu",class:"button1"},{default:R2(()=>[L2("Menu")]),_:1}),o2(i,{to:"/select",class:"button1"},{default:R2(()=>[L2("Table")]),_:1}),o2(i,{to:"/order",class:"button1"},{default:R2(()=>[L2("Order")]),_:1}),sE])])]),aE,b("div",nE,[b("div",rE,[iE,o2(r,{icon:"fa-solid fa-phone"}),L2(" 02-32633910 "),o2(r,{icon:"fa-brands fa-facebook"})])])],64)}const lE=y3(J_,[["render",oE]]);const fE={data(){return{count:0,count1:0,count2:0,carts:[],alert:"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27"}},async mounted(){await useSelectMenuStore().fetchData(),this.selectmenu=useSelectMenuStore().getselectmenu,this.normal()},methods:{increment(){this.count++},decrement(){this.count>0&&this.count--},increment1(){this.count1++},decrement1(){this.count1>0&&this.count1--},increment2(){this.count2++},decrement2(){this.count2>0&&this.count2--},asa(){alert("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27")}}},uE=b("link",{rel:"stylesheet",href:"../src/assets/style.css"},null,-1),hE=b("link",{rel:"stylesheet",href:"../src/assets/main.css"},null,-1),dE={id:"background"},mE={class:"dropdown"},pE=b("div",{class:"dropdown-content"},[b("a",{href:"Order"},"Normal"),b("a",{href:"regular"},"Regular"),b("a",{href:"premium"},"Premium")],-1),vE={class:"overflow-x-auto relative shadow-md sm:rounded-lg"},gE={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},HE=b("thead",{class:"text-xs text-gray-700 uppercase dark:text-gray-400"},[b("tr",null,[b("th",{scope:"col",class:"py-3 px-6 bg-gray-50 dark:bg-gray-800"}," \u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39 "),b("th",{scope:"col",class:"py-3 px-6"}," \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E14\u0E08\u0E33\u0E19\u0E27\u0E19\u0E16\u0E32\u0E14 "),b("th",{scope:"col",class:"py-3 px-6 bg-gray-50 dark:bg-gray-800"}," \u0E08\u0E33\u0E19\u0E27\u0E19\u0E16\u0E32\u0E14 "),b("th",{scope:"col",class:"py-3 px-6"}," \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ")])],-1),zE={class:"border-b border-gray-200 dark:border-gray-700"},VE=b("th",{scope:"row",class:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," \u0E15\u0E31\u0E1A\u0E2B\u0E21\u0E39 ",-1),ME={class:"py-4 px-6"},CE={class:"py-4 px-6 bg-gray-50 dark:bg-gray-800"},yE={class:"py-4 px-6"},bE={class:"border-b border-gray-200 dark:border-gray-700"},LE=b("th",{scope:"row",class:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," \u0E2B\u0E21\u0E39\u0E2A\u0E32\u0E21\u0E0A\u0E31\u0E49\u0E19 ",-1),wE={class:"py-4 px-6"},xE={class:"py-4 px-6 bg-gray-50 dark:bg-gray-800"},SE={class:"py-4 px-6"},kE={class:"border-b border-gray-200 dark:border-gray-700"},NE=b("th",{scope:"row",class:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," \u0E2A\u0E32\u0E2B\u0E23\u0E48\u0E32\u0E22\u0E27\u0E32\u0E01\u0E32\u0E40\u0E21\u0E30 ",-1),AE={class:"py-4 px-6"},_E={class:"py-4 px-6 bg-gray-50 dark:bg-gray-800"},EE={class:"py-4 px-6"},TE=b("th",null,null,-1),PE=b("th",null,null,-1),IE=b("th",null,null,-1);function OE(c,e,t,s,a,n){const r=z4("router-link"),i=z4("font-awesome-icon");return Q2(),c1(C1,null,[uE,hE,b("div",dE,[b("div",null,[o2(r,{to:"/",class:"button"},{default:R2(()=>[L2("Home")]),_:1}),o2(r,{to:"/menu",class:"button"},{default:R2(()=>[L2("Menu")]),_:1}),o2(r,{to:"/select",class:"button"},{default:R2(()=>[L2("Table")]),_:1}),b("div",mE,[o2(r,{to:"/order",class:"dropbtn"},{default:R2(()=>[L2("Order")]),_:1}),pE])])]),b("div",vE,[b("table",gE,[HE,b("tbody",null,[b("tr",zE,[VE,b("td",ME,[b("button",{class:"butto",onClick:e[0]||(e[0]=(...o)=>n.increment&&n.increment(...o))},"+"),L2(" "+j1(a.count)+" ",1),b("button",{class:"butto",onClick:e[1]||(e[1]=(...o)=>n.decrement&&n.decrement(...o))},"-")]),b("td",CE," x"+j1(a.count),1),b("td",yE,[o2(i,{icon:"fa-solid fa-xmark"})])]),b("tr",bE,[LE,b("td",wE,[b("button",{class:"butto",onClick:e[2]||(e[2]=(...o)=>n.increment1&&n.increment1(...o))},"+"),L2(" "+j1(a.count1)+" ",1),b("button",{class:"butto",onClick:e[3]||(e[3]=(...o)=>n.decrement1&&n.decrement1(...o))},"-")]),b("td",xE," x"+j1(a.count1),1),b("td",SE,[o2(i,{icon:"fa-solid fa-xmark"})])]),b("tr",kE,[NE,b("td",AE,[b("button",{class:"butto",onClick:e[4]||(e[4]=(...o)=>n.increment2&&n.increment2(...o))},"+"),L2(" "+j1(a.count2)+" ",1),b("button",{class:"butto",onClick:e[5]||(e[5]=(...o)=>n.decrement2&&n.decrement2(...o))},"-")]),b("td",_E," x"+j1(a.count2),1),b("td",EE,[o2(i,{icon:"fa-solid fa-xmark"})])])]),b("tfoot",null,[TE,PE,IE,b("th",null,[b("button",{class:"btn",type:"submit",value:"Submit",onClick:e[6]||(e[6]=o=>n.asa())},"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19")])])])])],64)}const DE=y3(fE,[["render",OE]]),RE={components:{Main:Cy,Menu:Ty,Select:PA,Order:QA,Regular:v_,Premium:X_,Admin:w_,Try:lE,Cart:DE},computed:{layout(){return console.log(this.$route.meta),this.$route.meta.layout}}},FE=b("div",null,null,-1);function BE(c,e,t,s,a,n){const r=z4("RouterView");return Q2(),dl(cC(n.layout),null,{default:R2(()=>[FE,o2(r)]),_:1})}const UE=y3(RE,[["render",BE]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ae=typeof window<"u";function jE(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const f1=Object.assign;function P7(c,e){const t={};for(const s in e){const a=e[s];t[s]=u3(a)?a.map(c):c(a)}return t}const G0=()=>{},u3=Array.isArray,$E=/\/$/,qE=c=>c.replace($E,"");function I7(c,e,t="/"){let s,a={},n="",r="";const i=e.indexOf("#");let o=e.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(s=e.slice(0,o),n=e.slice(o+1,i>-1?i:e.length),a=c(n)),i>-1&&(s=s||e.slice(0,i),r=e.slice(i,e.length)),s=YE(s!=null?s:e,t),{fullPath:s+(n&&"?")+n+r,path:s,query:a,hash:r}}function WE(c,e){const t=e.query?c(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function _o(c,e){return!e||!c.toLowerCase().startsWith(e.toLowerCase())?c:c.slice(e.length)||"/"}function GE(c,e,t){const s=e.matched.length-1,a=t.matched.length-1;return s>-1&&s===a&&a0(e.matched[s],t.matched[a])&&gh(e.params,t.params)&&c(e.query)===c(t.query)&&e.hash===t.hash}function a0(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function gh(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const t in c)if(!KE(c[t],e[t]))return!1;return!0}function KE(c,e){return u3(c)?Eo(c,e):u3(e)?Eo(e,c):c===e}function Eo(c,e){return u3(e)?c.length===e.length&&c.every((t,s)=>t===e[s]):c.length===1&&c[0]===e}function YE(c,e){if(c.startsWith("/"))return c;if(!c)return e;const t=e.split("/"),s=c.split("/");let a=t.length-1,n,r;for(n=0;n<s.length;n++)if(r=s[n],r!==".")if(r==="..")a>1&&a--;else break;return t.slice(0,a).join("/")+"/"+s.slice(n-(n===s.length?1:0)).join("/")}var z8;(function(c){c.pop="pop",c.push="push"})(z8||(z8={}));var K0;(function(c){c.back="back",c.forward="forward",c.unknown=""})(K0||(K0={}));function QE(c){if(!c)if(Ae){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),qE(c)}const XE=/^[^#]+#/;function JE(c,e){return c.replace(XE,"#")+e}function ZE(c,e){const t=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const x5=()=>({left:window.pageXOffset,top:window.pageYOffset});function eT(c){let e;if("el"in c){const t=c.el,s=typeof t=="string"&&t.startsWith("#"),a=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a)return;e=ZE(a,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function To(c,e){return(history.state?history.state.position-e:-1)+c}const Ts=new Map;function cT(c,e){Ts.set(c,e)}function tT(c){const e=Ts.get(c);return Ts.delete(c),e}let sT=()=>location.protocol+"//"+location.host;function Hh(c,e){const{pathname:t,search:s,hash:a}=e,n=c.indexOf("#");if(n>-1){let i=a.includes(c.slice(n))?c.slice(n).length:1,o=a.slice(i);return o[0]!=="/"&&(o="/"+o),_o(o,"")}return _o(t,c)+s+a}function aT(c,e,t,s){let a=[],n=[],r=null;const i=({state:v})=>{const M=Hh(c,location),L=t.value,S=e.value;let P=0;if(v){if(t.value=M,e.value=v,r&&r===L){r=null;return}P=S?v.position-S.position:0}else s(M);a.forEach(w=>{w(t.value,L,{delta:P,type:z8.pop,direction:P?P>0?K0.forward:K0.back:K0.unknown})})};function o(){r=t.value}function f(v){a.push(v);const M=()=>{const L=a.indexOf(v);L>-1&&a.splice(L,1)};return n.push(M),M}function d(){const{history:v}=window;!v.state||v.replaceState(f1({},v.state,{scroll:x5()}),"")}function p(){for(const v of n)v();n=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:o,listen:f,destroy:p}}function Po(c,e,t,s=!1,a=!1){return{back:c,current:e,forward:t,replaced:s,position:window.history.length,scroll:a?x5():null}}function nT(c){const{history:e,location:t}=window,s={value:Hh(c,t)},a={value:e.state};a.value||n(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function n(o,f,d){const p=c.indexOf("#"),v=p>-1?(t.host&&document.querySelector("base")?c:c.slice(p))+o:sT()+c+o;try{e[d?"replaceState":"pushState"](f,"",v),a.value=f}catch(M){console.error(M),t[d?"replace":"assign"](v)}}function r(o,f){const d=f1({},e.state,Po(a.value.back,o,a.value.forward,!0),f,{position:a.value.position});n(o,d,!0),s.value=o}function i(o,f){const d=f1({},a.value,e.state,{forward:o,scroll:x5()});n(d.current,d,!0);const p=f1({},Po(s.value,o,null),{position:d.position+1},f);n(o,p,!1),s.value=o}return{location:s,state:a,push:i,replace:r}}function rT(c){c=QE(c);const e=nT(c),t=aT(c,e.state,e.location,e.replace);function s(n,r=!0){r||t.pauseListeners(),history.go(n)}const a=f1({location:"",base:c,go:s,createHref:JE.bind(null,c)},e,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}function iT(c){return typeof c=="string"||c&&typeof c=="object"}function zh(c){return typeof c=="string"||typeof c=="symbol"}const s6={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vh=Symbol("");var Io;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(Io||(Io={}));function n0(c,e){return f1(new Error,{type:c,[Vh]:!0},e)}function k3(c,e){return c instanceof Error&&Vh in c&&(e==null||!!(c.type&e))}const Oo="[^/]+?",oT={sensitive:!1,strict:!1,start:!0,end:!0},lT=/[.+*?^${}()[\]/\\]/g;function fT(c,e){const t=f1({},oT,e),s=[];let a=t.start?"^":"";const n=[];for(const f of c){const d=f.length?[]:[90];t.strict&&!f.length&&(a+="/");for(let p=0;p<f.length;p++){const v=f[p];let M=40+(t.sensitive?.25:0);if(v.type===0)p||(a+="/"),a+=v.value.replace(lT,"\\$&"),M+=40;else if(v.type===1){const{value:L,repeatable:S,optional:P,regexp:w}=v;n.push({name:L,repeatable:S,optional:P});const N=w||Oo;if(N!==Oo){M+=10;try{new RegExp(`(${N})`)}catch(c2){throw new Error(`Invalid custom RegExp for param "${L}" (${N}): `+c2.message)}}let B=S?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(B=P&&f.length<2?`(?:/${B})`:"/"+B),P&&(B+="?"),a+=B,M+=20,P&&(M+=-8),S&&(M+=-20),N===".*"&&(M+=-50)}d.push(M)}s.push(d)}if(t.strict&&t.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}t.strict||(a+="/?"),t.end?a+="$":t.strict&&(a+="(?:/|$)");const r=new RegExp(a,t.sensitive?"":"i");function i(f){const d=f.match(r),p={};if(!d)return null;for(let v=1;v<d.length;v++){const M=d[v]||"",L=n[v-1];p[L.name]=M&&L.repeatable?M.split("/"):M}return p}function o(f){let d="",p=!1;for(const v of c){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const M of v)if(M.type===0)d+=M.value;else if(M.type===1){const{value:L,repeatable:S,optional:P}=M,w=L in f?f[L]:"";if(u3(w)&&!S)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const N=u3(w)?w.join("/"):w;if(!N)if(P)v.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${L}"`);d+=N}}return d||"/"}return{re:r,score:s,keys:n,parse:i,stringify:o}}function uT(c,e){let t=0;for(;t<c.length&&t<e.length;){const s=e[t]-c[t];if(s)return s;t++}return c.length<e.length?c.length===1&&c[0]===40+40?-1:1:c.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function hT(c,e){let t=0;const s=c.score,a=e.score;for(;t<s.length&&t<a.length;){const n=uT(s[t],a[t]);if(n)return n;t++}if(Math.abs(a.length-s.length)===1){if(Do(s))return 1;if(Do(a))return-1}return a.length-s.length}function Do(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const dT={type:0,value:""},mT=/[a-zA-Z0-9_]/;function pT(c){if(!c)return[[]];if(c==="/")return[[dT]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(M){throw new Error(`ERR (${t})/"${f}": ${M}`)}let t=0,s=t;const a=[];let n;function r(){n&&a.push(n),n=[]}let i=0,o,f="",d="";function p(){!f||(t===0?n.push({type:0,value:f}):t===1||t===2||t===3?(n.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:f,regexp:d,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),f="")}function v(){f+=o}for(;i<c.length;){if(o=c[i++],o==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:o==="/"?(f&&p(),r()):o===":"?(p(),t=1):v();break;case 4:v(),t=s;break;case 1:o==="("?t=2:mT.test(o)?v():(p(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+o:t=3:d+=o;break;case 3:p(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${f}"`),p(),r(),a}function vT(c,e,t){const s=fT(pT(c.path),t),a=f1(s,{record:c,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function gT(c,e){const t=[],s=new Map;e=Bo({strict:!1,end:!0,sensitive:!1},e);function a(d){return s.get(d)}function n(d,p,v){const M=!v,L=HT(d);L.aliasOf=v&&v.record;const S=Bo(e,d),P=[L];if("alias"in d){const B=typeof d.alias=="string"?[d.alias]:d.alias;for(const c2 of B)P.push(f1({},L,{components:v?v.record.components:L.components,path:c2,aliasOf:v?v.record:L}))}let w,N;for(const B of P){const{path:c2}=B;if(p&&c2[0]!=="/"){const n2=p.record.path,w2=n2[n2.length-1]==="/"?"":"/";B.path=p.record.path+(c2&&w2+c2)}if(w=vT(B,p,S),v?v.alias.push(w):(N=N||w,N!==w&&N.alias.push(w),M&&d.name&&!Fo(w)&&r(d.name)),L.children){const n2=L.children;for(let w2=0;w2<n2.length;w2++)n(n2[w2],w,v&&v.children[w2])}v=v||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&o(w)}return N?()=>{r(N)}:G0}function r(d){if(zh(d)){const p=s.get(d);p&&(s.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(r),p.alias.forEach(r))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function i(){return t}function o(d){let p=0;for(;p<t.length&&hT(d,t[p])>=0&&(d.record.path!==t[p].record.path||!Mh(d,t[p]));)p++;t.splice(p,0,d),d.record.name&&!Fo(d)&&s.set(d.record.name,d)}function f(d,p){let v,M={},L,S;if("name"in d&&d.name){if(v=s.get(d.name),!v)throw n0(1,{location:d});S=v.record.name,M=f1(Ro(p.params,v.keys.filter(N=>!N.optional).map(N=>N.name)),d.params&&Ro(d.params,v.keys.map(N=>N.name))),L=v.stringify(M)}else if("path"in d)L=d.path,v=t.find(N=>N.re.test(L)),v&&(M=v.parse(L),S=v.record.name);else{if(v=p.name?s.get(p.name):t.find(N=>N.re.test(p.path)),!v)throw n0(1,{location:d,currentLocation:p});S=v.record.name,M=f1({},p.params,d.params),L=v.stringify(M)}const P=[];let w=v;for(;w;)P.unshift(w.record),w=w.parent;return{name:S,path:L,params:M,matched:P,meta:VT(P)}}return c.forEach(d=>n(d)),{addRoute:n,resolve:f,removeRoute:r,getRoutes:i,getRecordMatcher:a}}function Ro(c,e){const t={};for(const s of e)s in c&&(t[s]=c[s]);return t}function HT(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:zT(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function zT(c){const e={},t=c.props||!1;if("component"in c)e.default=t;else for(const s in c.components)e[s]=typeof t=="boolean"?t:t[s];return e}function Fo(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function VT(c){return c.reduce((e,t)=>f1(e,t.meta),{})}function Bo(c,e){const t={};for(const s in c)t[s]=s in e?e[s]:c[s];return t}function Mh(c,e){return e.children.some(t=>t===c||Mh(c,t))}const Ch=/#/g,MT=/&/g,CT=/\//g,yT=/=/g,bT=/\?/g,yh=/\+/g,LT=/%5B/g,wT=/%5D/g,bh=/%5E/g,xT=/%60/g,Lh=/%7B/g,ST=/%7C/g,wh=/%7D/g,kT=/%20/g;function Cn(c){return encodeURI(""+c).replace(ST,"|").replace(LT,"[").replace(wT,"]")}function NT(c){return Cn(c).replace(Lh,"{").replace(wh,"}").replace(bh,"^")}function Ps(c){return Cn(c).replace(yh,"%2B").replace(kT,"+").replace(Ch,"%23").replace(MT,"%26").replace(xT,"`").replace(Lh,"{").replace(wh,"}").replace(bh,"^")}function AT(c){return Ps(c).replace(yT,"%3D")}function _T(c){return Cn(c).replace(Ch,"%23").replace(bT,"%3F")}function ET(c){return c==null?"":_T(c).replace(CT,"%2F")}function At(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function TT(c){const e={};if(c===""||c==="?")return e;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let a=0;a<s.length;++a){const n=s[a].replace(yh," "),r=n.indexOf("="),i=At(r<0?n:n.slice(0,r)),o=r<0?null:At(n.slice(r+1));if(i in e){let f=e[i];u3(f)||(f=e[i]=[f]),f.push(o)}else e[i]=o}return e}function Uo(c){let e="";for(let t in c){const s=c[t];if(t=AT(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(u3(s)?s.map(n=>n&&Ps(n)):[s&&Ps(s)]).forEach(n=>{n!==void 0&&(e+=(e.length?"&":"")+t,n!=null&&(e+="="+n))})}return e}function PT(c){const e={};for(const t in c){const s=c[t];s!==void 0&&(e[t]=u3(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return e}const IT=Symbol(""),jo=Symbol(""),yn=Symbol(""),xh=Symbol(""),Is=Symbol("");function _0(){let c=[];function e(s){return c.push(s),()=>{const a=c.indexOf(s);a>-1&&c.splice(a,1)}}function t(){c=[]}return{add:e,list:()=>c,reset:t}}function i6(c,e,t,s,a){const n=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((r,i)=>{const o=p=>{p===!1?i(n0(4,{from:t,to:e})):p instanceof Error?i(p):iT(p)?i(n0(2,{from:e,to:p})):(n&&s.enterCallbacks[a]===n&&typeof p=="function"&&n.push(p),r())},f=c.call(s&&s.instances[a],e,t,o);let d=Promise.resolve(f);c.length<3&&(d=d.then(o)),d.catch(p=>i(p))})}function O7(c,e,t,s){const a=[];for(const n of c)for(const r in n.components){let i=n.components[r];if(!(e!=="beforeRouteEnter"&&!n.instances[r]))if(OT(i)){const f=(i.__vccOpts||i)[e];f&&a.push(i6(f,t,s,n,r))}else{let o=i();a.push(()=>o.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${n.path}"`));const d=jE(f)?f.default:f;n.components[r]=d;const v=(d.__vccOpts||d)[e];return v&&i6(v,t,s,n,r)()}))}}return a}function OT(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function $o(c){const e=z3(yn),t=z3(xh),s=E1(()=>e.resolve(De(c.to))),a=E1(()=>{const{matched:o}=s.value,{length:f}=o,d=o[f-1],p=t.matched;if(!d||!p.length)return-1;const v=p.findIndex(a0.bind(null,d));if(v>-1)return v;const M=qo(o[f-2]);return f>1&&qo(d)===M&&p[p.length-1].path!==M?p.findIndex(a0.bind(null,o[f-2])):v}),n=E1(()=>a.value>-1&&BT(t.params,s.value.params)),r=E1(()=>a.value>-1&&a.value===t.matched.length-1&&gh(t.params,s.value.params));function i(o={}){return FT(o)?e[De(c.replace)?"replace":"push"](De(c.to)).catch(G0):Promise.resolve()}return{route:s,href:E1(()=>s.value.href),isActive:n,isExactActive:r,navigate:i}}const DT=w8({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$o,setup(c,{slots:e}){const t=f0($o(c)),{options:s}=z3(yn),a=E1(()=>({[Wo(c.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[Wo(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const n=e.default&&e.default(t);return c.custom?n:Yt("a",{"aria-current":t.isExactActive?c.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},n)}}}),RT=DT;function FT(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function BT(c,e){for(const t in e){const s=e[t],a=c[t];if(typeof s=="string"){if(s!==a)return!1}else if(!u3(a)||a.length!==s.length||s.some((n,r)=>n!==a[r]))return!1}return!0}function qo(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const Wo=(c,e,t)=>c!=null?c:e!=null?e:t,UT=w8({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:t}){const s=z3(Is),a=E1(()=>c.route||s.value),n=z3(jo,0),r=E1(()=>{let f=De(n);const{matched:d}=a.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),i=E1(()=>a.value.matched[r.value]);Gc(jo,E1(()=>r.value+1)),Gc(IT,i),Gc(Is,a);const o=la();return Fe(()=>[o.value,i.value,c.name],([f,d,p],[v,M,L])=>{d&&(d.instances[p]=f,M&&M!==d&&f&&f===v&&(d.leaveGuards.size||(d.leaveGuards=M.leaveGuards),d.updateGuards.size||(d.updateGuards=M.updateGuards))),f&&d&&(!M||!a0(d,M)||!v)&&(d.enterCallbacks[p]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,d=c.name,p=i.value,v=p&&p.components[d];if(!v)return Go(t.default,{Component:v,route:f});const M=p.props[d],L=M?M===!0?f.params:typeof M=="function"?M(f):M:null,P=Yt(v,f1({},L,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(p.instances[d]=null)},ref:o}));return Go(t.default,{Component:P,route:f})||P}}});function Go(c,e){if(!c)return null;const t=c(e);return t.length===1?t[0]:t}const jT=UT;function $T(c){const e=gT(c.routes,c),t=c.parseQuery||TT,s=c.stringifyQuery||Uo,a=c.history,n=_0(),r=_0(),i=_0(),o=CM(s6);let f=s6;Ae&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=P7.bind(null,I=>""+I),p=P7.bind(null,ET),v=P7.bind(null,At);function M(I,Z){let Y,u2;return zh(I)?(Y=e.getRecordMatcher(I),u2=Z):u2=I,e.addRoute(u2,Y)}function L(I){const Z=e.getRecordMatcher(I);Z&&e.removeRoute(Z)}function S(){return e.getRoutes().map(I=>I.record)}function P(I){return!!e.getRecordMatcher(I)}function w(I,Z){if(Z=f1({},Z||o.value),typeof I=="string"){const H=I7(t,I,Z.path),C=e.resolve({path:H.path},Z),k=a.createHref(H.fullPath);return f1(H,C,{params:v(C.params),hash:At(H.hash),redirectedFrom:void 0,href:k})}let Y;if("path"in I)Y=f1({},I,{path:I7(t,I.path,Z.path).path});else{const H=f1({},I.params);for(const C in H)H[C]==null&&delete H[C];Y=f1({},I,{params:p(I.params)}),Z.params=p(Z.params)}const u2=e.resolve(Y,Z),C2=I.hash||"";u2.params=d(v(u2.params));const $2=WE(s,f1({},I,{hash:NT(C2),path:u2.path})),b2=a.createHref($2);return f1({fullPath:$2,hash:C2,query:s===Uo?PT(I.query):I.query||{}},u2,{redirectedFrom:void 0,href:b2})}function N(I){return typeof I=="string"?I7(t,I,o.value.path):f1({},I)}function B(I,Z){if(f!==I)return n0(8,{from:Z,to:I})}function c2(I){return g2(I)}function n2(I){return c2(f1(N(I),{replace:!0}))}function w2(I){const Z=I.matched[I.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let u2=typeof Y=="function"?Y(I):Y;return typeof u2=="string"&&(u2=u2.includes("?")||u2.includes("#")?u2=N(u2):{path:u2},u2.params={}),f1({query:I.query,hash:I.hash,params:"path"in u2?{}:I.params},u2)}}function g2(I,Z){const Y=f=w(I),u2=o.value,C2=I.state,$2=I.force,b2=I.replace===!0,H=w2(Y);if(H)return g2(f1(N(H),{state:typeof H=="object"?f1({},C2,H.state):C2,force:$2,replace:b2}),Z||Y);const C=Y;C.redirectedFrom=Z;let k;return!$2&&GE(s,u2,Y)&&(k=n0(16,{to:C,from:u2}),L1(u2,u2,!0,!1)),(k?Promise.resolve(k):s1(C,u2)).catch(_=>k3(_)?k3(_,2)?_:R1(_):G2(_,C,u2)).then(_=>{if(_){if(k3(_,2))return g2(f1({replace:b2},N(_.to),{state:typeof _.to=="object"?f1({},C2,_.to.state):C2,force:$2}),Z||C)}else _=X1(C,u2,!0,b2,C2);return A1(C,u2,_),_})}function V2(I,Z){const Y=B(I,Z);return Y?Promise.reject(Y):Promise.resolve()}function s1(I,Z){let Y;const[u2,C2,$2]=qT(I,Z);Y=O7(u2.reverse(),"beforeRouteLeave",I,Z);for(const H of u2)H.leaveGuards.forEach(C=>{Y.push(i6(C,I,Z))});const b2=V2.bind(null,I,Z);return Y.push(b2),Ne(Y).then(()=>{Y=[];for(const H of n.list())Y.push(i6(H,I,Z));return Y.push(b2),Ne(Y)}).then(()=>{Y=O7(C2,"beforeRouteUpdate",I,Z);for(const H of C2)H.updateGuards.forEach(C=>{Y.push(i6(C,I,Z))});return Y.push(b2),Ne(Y)}).then(()=>{Y=[];for(const H of I.matched)if(H.beforeEnter&&!Z.matched.includes(H))if(u3(H.beforeEnter))for(const C of H.beforeEnter)Y.push(i6(C,I,Z));else Y.push(i6(H.beforeEnter,I,Z));return Y.push(b2),Ne(Y)}).then(()=>(I.matched.forEach(H=>H.enterCallbacks={}),Y=O7($2,"beforeRouteEnter",I,Z),Y.push(b2),Ne(Y))).then(()=>{Y=[];for(const H of r.list())Y.push(i6(H,I,Z));return Y.push(b2),Ne(Y)}).catch(H=>k3(H,8)?H:Promise.reject(H))}function A1(I,Z,Y){for(const u2 of i.list())u2(I,Z,Y)}function X1(I,Z,Y,u2,C2){const $2=B(I,Z);if($2)return $2;const b2=Z===s6,H=Ae?history.state:{};Y&&(u2||b2?a.replace(I.fullPath,f1({scroll:b2&&H&&H.scroll},C2)):a.push(I.fullPath,C2)),o.value=I,L1(I,Z,Y,b2),R1()}let D1;function z1(){D1||(D1=a.listen((I,Z,Y)=>{if(!k4.listening)return;const u2=w(I),C2=w2(u2);if(C2){g2(f1(C2,{replace:!0}),u2).catch(G0);return}f=u2;const $2=o.value;Ae&&cT(To($2.fullPath,Y.delta),x5()),s1(u2,$2).catch(b2=>k3(b2,12)?b2:k3(b2,2)?(g2(b2.to,u2).then(H=>{k3(H,20)&&!Y.delta&&Y.type===z8.pop&&a.go(-1,!1)}).catch(G0),Promise.reject()):(Y.delta&&a.go(-Y.delta,!1),G2(b2,u2,$2))).then(b2=>{b2=b2||X1(u2,$2,!1),b2&&(Y.delta&&!k3(b2,8)?a.go(-Y.delta,!1):Y.type===z8.pop&&k3(b2,20)&&a.go(-1,!1)),A1(u2,$2,b2)}).catch(G0)}))}let u1=_0(),W2=_0(),O2;function G2(I,Z,Y){R1(I);const u2=W2.list();return u2.length?u2.forEach(C2=>C2(I,Z,Y)):console.error(I),Promise.reject(I)}function D2(){return O2&&o.value!==s6?Promise.resolve():new Promise((I,Z)=>{u1.add([I,Z])})}function R1(I){return O2||(O2=!I,z1(),u1.list().forEach(([Z,Y])=>I?Y(I):Z()),u1.reset()),I}function L1(I,Z,Y,u2){const{scrollBehavior:C2}=c;if(!Ae||!C2)return Promise.resolve();const $2=!Y&&tT(To(I.fullPath,0))||(u2||!Y)&&history.state&&history.state.scroll||null;return ua().then(()=>C2(I,Z,$2)).then(b2=>b2&&eT(b2)).catch(b2=>G2(b2,I,Z))}const q1=I=>a.go(I);let a1;const M4=new Set,k4={currentRoute:o,listening:!0,addRoute:M,removeRoute:L,hasRoute:P,getRoutes:S,resolve:w,options:c,push:c2,replace:n2,go:q1,back:()=>q1(-1),forward:()=>q1(1),beforeEach:n.add,beforeResolve:r.add,afterEach:i.add,onError:W2.add,isReady:D2,install(I){const Z=this;I.component("RouterLink",RT),I.component("RouterView",jT),I.config.globalProperties.$router=Z,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>De(o)}),Ae&&!a1&&o.value===s6&&(a1=!0,c2(a.location).catch(C2=>{}));const Y={};for(const C2 in s6)Y[C2]=E1(()=>o.value[C2]);I.provide(yn,Z),I.provide(xh,f0(Y)),I.provide(Is,o);const u2=I.unmount;M4.add(I),I.unmount=function(){M4.delete(I),M4.size<1&&(f=s6,D1&&D1(),D1=null,o.value=s6,a1=!1,O2=!1),u2()}}};return k4}function Ne(c){return c.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function qT(c,e){const t=[],s=[],a=[],n=Math.max(e.matched.length,c.matched.length);for(let r=0;r<n;r++){const i=e.matched[r];i&&(c.matched.find(f=>a0(f,i))?s.push(i):t.push(i));const o=c.matched[r];o&&(e.matched.find(f=>a0(f,o))||a.push(o))}return[t,s,a]}const WT=$T({history:rT("/telekung/"),routes:[{path:"/",name:"home",meta:{layout:"Main"}},{path:"/menu",name:"menu",meta:{layout:"Menu"}},{path:"/order",name:"order",meta:{layout:"Order"}},{path:"/regular",name:"regular",meta:{layout:"Regular"}},{path:"/premium",name:"premium",meta:{layout:"Premium"}},{path:"/select",name:"select",meta:{layout:"Select"}},{path:"/admin",name:"admin",meta:{layout:"Admin"}},{path:"/adminhome",name:"try",meta:{layout:"Try"}},{path:"/cart",name:"cart",meta:{layout:"Cart"}}]});(()=>{function c(h){return function(l){if(Array.isArray(l))return e(l)}(h)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(h)||function(l,m){if(!!l){if(typeof l=="string")return e(l,m);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return e(l,m)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function e(h,l){(l==null||l>h.length)&&(l=h.length);for(var m=0,u=new Array(l);m<l;m++)u[m]=h[m];return u}function t(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function s(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?t(Object(m),!0).forEach(function(u){a(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):t(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function a(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function n(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function r(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var i={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},o=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n(this,h),this._items=u,this._options=s(s({},i),V),this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;this._items.length&&this._items.map(function(V){V.active&&u.open(V.id),V.triggerEl.addEventListener("click",function(){u.toggle(V.id)})})}},{key:"getItem",value:function(u){return this._items.filter(function(V){return V.id===u})[0]}},{key:"open",value:function(u){var V,x,T=this,R=this.getItem(u);this._options.alwaysOpen||this._items.map(function(W){var e2,p2;W!==R&&((e2=W.triggerEl.classList).remove.apply(e2,c(T._options.activeClasses.split(" "))),(p2=W.triggerEl.classList).add.apply(p2,c(T._options.inactiveClasses.split(" "))),W.targetEl.classList.add("hidden"),W.triggerEl.setAttribute("aria-expanded",!1),W.active=!1,W.iconEl&&W.iconEl.classList.remove("rotate-180"))}),(V=R.triggerEl.classList).add.apply(V,c(this._options.activeClasses.split(" "))),(x=R.triggerEl.classList).remove.apply(x,c(this._options.inactiveClasses.split(" "))),R.triggerEl.setAttribute("aria-expanded",!0),R.targetEl.classList.remove("hidden"),R.active=!0,R.iconEl&&R.iconEl.classList.add("rotate-180"),this._options.onOpen(this,R)}},{key:"toggle",value:function(u){var V=this.getItem(u);V.active?this.close(u):this.open(u),this._options.onToggle(this,V)}},{key:"close",value:function(u){var V,x,T=this.getItem(u);(V=T.triggerEl.classList).remove.apply(V,c(this._options.activeClasses.split(" "))),(x=T.triggerEl.classList).add.apply(x,c(this._options.inactiveClasses.split(" "))),T.targetEl.classList.add("hidden"),T.triggerEl.setAttribute("aria-expanded",!1),T.active=!1,T.iconEl&&T.iconEl.classList.remove("rotate-180"),this._options.onClose(this,T)}}])&&r(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function f(){document.querySelectorAll("[data-accordion]").forEach(function(h){var l=h.getAttribute("data-accordion"),m=h.getAttribute("data-active-classes"),u=h.getAttribute("data-inactive-classes"),V=[];h.querySelectorAll("[data-accordion-target]").forEach(function(x){var T={id:x.getAttribute("data-accordion-target"),triggerEl:x,targetEl:document.querySelector(x.getAttribute("data-accordion-target")),iconEl:x.querySelector("[data-accordion-icon]"),active:x.getAttribute("aria-expanded")==="true"};V.push(T)}),new o(V,{alwaysOpen:l==="open",activeClasses:m||i.activeClasses,inactiveClasses:u||i.inactiveClasses})})}window.Accordion=o,document.readyState!=="loading"?f():document.addEventListener("DOMContentLoaded",f);function d(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function p(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?d(Object(m),!0).forEach(function(u){v(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):d(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function v(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function M(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function L(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var S={triggerEl:null,onCollapse:function(){},onExpand:function(){},onToggle:function(){}},P=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,V=arguments.length>1?arguments[1]:void 0;M(this,h),this._targetEl=u,this._triggerEl=V?V.triggerEl:S.triggerEl,this._options=p(p({},S),V),this._visible=!1,this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){u._visible?u.collapse():u.expand()}))}},{key:"collapse",value:function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)}},{key:"expand",value:function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)}},{key:"toggle",value:function(){this._visible?this.collapse():this.expand()}}])&&L(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function w(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(h){var l=document.getElementById(h.getAttribute("data-collapse-toggle"));new P(l,{triggerEl:h})})}window.Collapse=P,document.readyState!=="loading"?w():document.addEventListener("DOMContentLoaded",w);function N(h){return function(l){if(Array.isArray(l))return B(l)}(h)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(h)||function(l,m){if(!!l){if(typeof l=="string")return B(l,m);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return B(l,m)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function B(h,l){(l==null||l>h.length)&&(l=h.length);for(var m=0,u=new Array(l);m<l;m++)u[m]=h[m];return u}function c2(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function n2(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?c2(Object(m),!0).forEach(function(u){w2(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):c2(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function w2(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function g2(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function V2(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var s1={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},A1=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};g2(this,h),this._items=u,this._options=n2(n2(n2({},s1),V),{},{indicators:n2(n2({},s1.indicators),V.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._interval=null,this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;this._items.map(function(V){V.el.classList.add("absolute","inset-0","transition-all","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(V,x){V.el.addEventListener("click",function(){u.slideTo(x)})})}},{key:"getItem",value:function(u){return this._items[u]}},{key:"slideTo",value:function(u){var V=this._items[u],x={left:V.position===0?this._items[this._items.length-1]:this._items[V.position-1],middle:V,right:V.position===this._items.length-1?this._items[0]:this._items[V.position+1]};this._rotate(x),this._setActiveItem(V.position),this._interval&&(this.pause(),this.cycle()),this._options.onChange(this)}},{key:"next",value:function(){var u=this._getActiveItem(),V=null;V=u.position===this._items.length-1?this._items[0]:this._items[u.position+1],this.slideTo(V.position),this._options.onNext(this)}},{key:"prev",value:function(){var u=this._getActiveItem(),V=null;V=u.position===0?this._items[this._items.length-1]:this._items[u.position-1],this.slideTo(V.position),this._options.onPrev(this)}},{key:"_rotate",value:function(u){this._items.map(function(V){V.el.classList.add("hidden")}),u.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),u.left.el.classList.add("-translate-x-full","z-10"),u.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),u.middle.el.classList.add("translate-x-0","z-20"),u.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),u.right.el.classList.add("translate-x-full","z-10")}},{key:"cycle",value:function(){var u=this;this._interval=setInterval(function(){u.next()},this._options.interval)}},{key:"pause",value:function(){clearInterval(this._interval)}},{key:"_getActiveItem",value:function(){return this._activeItem}},{key:"_setActiveItem",value:function(u){var V,x,T=this;this._activeItem=this._items[u],this._indicators.length&&(this._indicators.map(function(R){var W,e2;R.el.setAttribute("aria-current","false"),(W=R.el.classList).remove.apply(W,N(T._options.indicators.activeClasses.split(" "))),(e2=R.el.classList).add.apply(e2,N(T._options.indicators.inactiveClasses.split(" ")))}),(V=this._indicators[u].el.classList).add.apply(V,N(this._options.indicators.activeClasses.split(" "))),(x=this._indicators[u].el.classList).remove.apply(x,N(this._options.indicators.inactiveClasses.split(" "))),this._indicators[u].el.setAttribute("aria-current","true"))}}])&&V2(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function X1(){document.querySelectorAll("[data-carousel]").forEach(function(h){var l=h.getAttribute("data-carousel-interval"),m=h.getAttribute("data-carousel")==="slide",u=[],V=0;h.querySelectorAll("[data-carousel-item]").length&&N(h.querySelectorAll("[data-carousel-item]")).map(function(e2,p2){u.push({position:p2,el:e2}),e2.getAttribute("data-carousel-item")==="active"&&(V=p2)});var x=[];h.querySelectorAll("[data-carousel-slide-to]").length&&N(h.querySelectorAll("[data-carousel-slide-to]")).map(function(e2){x.push({position:e2.getAttribute("data-carousel-slide-to"),el:e2})});var T=new A1(u,{defaultPosition:V,indicators:{items:x},interval:l||s1.interval});m&&T.cycle();var R=h.querySelector("[data-carousel-next]"),W=h.querySelector("[data-carousel-prev]");R&&R.addEventListener("click",function(){T.next()}),W&&W.addEventListener("click",function(){T.prev()})})}window.Carousel=A1,document.readyState!=="loading"?X1():document.addEventListener("DOMContentLoaded",X1);function D1(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function z1(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?D1(Object(m),!0).forEach(function(u){u1(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):D1(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function u1(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function W2(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function O2(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var G2={triggerEl:null,transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},D2=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};W2(this,h),this._targetEl=u,this._triggerEl=V?V.triggerEl:G2.triggerEl,this._options=z1(z1({},G2),V),this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){u.hide()})}},{key:"hide",value:function(){var u=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){u._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)}}])&&O2(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function R1(){document.querySelectorAll("[data-dismiss-target]").forEach(function(h){var l=document.querySelector(h.getAttribute("data-dismiss-target"));new D2(l,{triggerEl:h})})}window.Dismiss=D2,document.readyState!=="loading"?R1():document.addEventListener("DOMContentLoaded",R1);function L1(h){if(h==null)return window;if(h.toString()!=="[object Window]"){var l=h.ownerDocument;return l&&l.defaultView||window}return h}function q1(h){return h instanceof L1(h).Element||h instanceof Element}function a1(h){return h instanceof L1(h).HTMLElement||h instanceof HTMLElement}function M4(h){return typeof ShadowRoot<"u"&&(h instanceof L1(h).ShadowRoot||h instanceof ShadowRoot)}var k4=Math.max,I=Math.min,Z=Math.round;function Y(h,l){l===void 0&&(l=!1);var m=h.getBoundingClientRect(),u=1,V=1;if(a1(h)&&l){var x=h.offsetHeight,T=h.offsetWidth;T>0&&(u=Z(m.width)/T||1),x>0&&(V=Z(m.height)/x||1)}return{width:m.width/u,height:m.height/V,top:m.top/V,right:m.right/u,bottom:m.bottom/V,left:m.left/u,x:m.left/u,y:m.top/V}}function u2(h){var l=L1(h);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function C2(h){return h?(h.nodeName||"").toLowerCase():null}function $2(h){return((q1(h)?h.ownerDocument:h.document)||window.document).documentElement}function b2(h){return Y($2(h)).left+u2(h).scrollLeft}function H(h){return L1(h).getComputedStyle(h)}function C(h){var l=H(h),m=l.overflow,u=l.overflowX,V=l.overflowY;return/auto|scroll|overlay|hidden/.test(m+V+u)}function k(h,l,m){m===void 0&&(m=!1);var u,V,x=a1(l),T=a1(l)&&function(z2){var B1=z2.getBoundingClientRect(),j2=Z(B1.width)/z2.offsetWidth||1,l1=Z(B1.height)/z2.offsetHeight||1;return j2!==1||l1!==1}(l),R=$2(l),W=Y(h,T),e2={scrollLeft:0,scrollTop:0},p2={x:0,y:0};return(x||!x&&!m)&&((C2(l)!=="body"||C(R))&&(e2=(u=l)!==L1(u)&&a1(u)?{scrollLeft:(V=u).scrollLeft,scrollTop:V.scrollTop}:u2(u)),a1(l)?((p2=Y(l,!0)).x+=l.clientLeft,p2.y+=l.clientTop):R&&(p2.x=b2(R))),{x:W.left+e2.scrollLeft-p2.x,y:W.top+e2.scrollTop-p2.y,width:W.width,height:W.height}}function _(h){var l=Y(h),m=h.offsetWidth,u=h.offsetHeight;return Math.abs(l.width-m)<=1&&(m=l.width),Math.abs(l.height-u)<=1&&(u=l.height),{x:h.offsetLeft,y:h.offsetTop,width:m,height:u}}function O(h){return C2(h)==="html"?h:h.assignedSlot||h.parentNode||(M4(h)?h.host:null)||$2(h)}function q(h){return["html","body","#document"].indexOf(C2(h))>=0?h.ownerDocument.body:a1(h)&&C(h)?h:q(O(h))}function J(h,l){var m;l===void 0&&(l=[]);var u=q(h),V=u===((m=h.ownerDocument)==null?void 0:m.body),x=L1(u),T=V?[x].concat(x.visualViewport||[],C(u)?u:[]):u,R=l.concat(T);return V?R:R.concat(J(O(T)))}function $(h){return["table","td","th"].indexOf(C2(h))>=0}function G(h){return a1(h)&&H(h).position!=="fixed"?h.offsetParent:null}function D(h){for(var l=L1(h),m=G(h);m&&$(m)&&H(m).position==="static";)m=G(m);return m&&(C2(m)==="html"||C2(m)==="body"&&H(m).position==="static")?l:m||function(u){var V=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1;if(navigator.userAgent.indexOf("Trident")!==-1&&a1(u)&&H(u).position==="fixed")return null;for(var x=O(u);a1(x)&&["html","body"].indexOf(C2(x))<0;){var T=H(x);if(T.transform!=="none"||T.perspective!=="none"||T.contain==="paint"||["transform","perspective"].indexOf(T.willChange)!==-1||V&&T.willChange==="filter"||V&&T.filter&&T.filter!=="none")return x;x=x.parentNode}return null}(h)||l}var s2="top",t2="bottom",a2="right",f2="left",k2="auto",x2=[s2,t2,a2,f2],N2="start",n1="end",i4="viewport",N4="popper",w6=x2.reduce(function(h,l){return h.concat([l+"-"+N2,l+"-"+n1])},[]),h3=[].concat(x2,[k2]).reduce(function(h,l){return h.concat([l,l+"-"+N2,l+"-"+n1])},[]),me=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function t4(h){var l=new Map,m=new Set,u=[];function V(x){m.add(x.name),[].concat(x.requires||[],x.requiresIfExists||[]).forEach(function(T){if(!m.has(T)){var R=l.get(T);R&&V(R)}}),u.push(x)}return h.forEach(function(x){l.set(x.name,x)}),h.forEach(function(x){m.has(x.name)||V(x)}),u}var C4={placement:"bottom",modifiers:[],strategy:"absolute"};function x6(){for(var h=arguments.length,l=new Array(h),m=0;m<h;m++)l[m]=arguments[m];return!l.some(function(u){return!(u&&typeof u.getBoundingClientRect=="function")})}function Y5(h){h===void 0&&(h={});var l=h,m=l.defaultModifiers,u=m===void 0?[]:m,V=l.defaultOptions,x=V===void 0?C4:V;return function(T,R,W){W===void 0&&(W=x);var e2,p2,z2={placement:"bottom",orderedModifiers:[],options:Object.assign({},C4,x),modifiersData:{},elements:{reference:T,popper:R},attributes:{},styles:{}},B1=[],j2=!1,l1={state:z2,setOptions:function(B2){var U1=typeof B2=="function"?B2(z2.options):B2;r1(),z2.options=Object.assign({},x,z2.options,U1),z2.scrollParents={reference:q1(T)?J(T):T.contextElement?J(T.contextElement):[],popper:J(R)};var w1=function(P2){var K2=t4(P2);return me.reduce(function(J2,Z2){return J2.concat(K2.filter(function(e1){return e1.phase===Z2}))},[])}(function(P2){var K2=P2.reduce(function(J2,Z2){var e1=J2[Z2.name];return J2[Z2.name]=e1?Object.assign({},e1,Z2,{options:Object.assign({},e1.options,Z2.options),data:Object.assign({},e1.data,Z2.data)}):Z2,J2},{});return Object.keys(K2).map(function(J2){return K2[J2]})}([].concat(u,z2.options.modifiers)));return z2.orderedModifiers=w1.filter(function(P2){return P2.enabled}),z2.orderedModifiers.forEach(function(P2){var K2=P2.name,J2=P2.options,Z2=J2===void 0?{}:J2,e1=P2.effect;if(typeof e1=="function"){var m1=e1({state:z2,name:K2,instance:l1,options:Z2}),_1=function(){};B1.push(m1||_1)}}),l1.update()},forceUpdate:function(){if(!j2){var B2=z2.elements,U1=B2.reference,w1=B2.popper;if(x6(U1,w1)){z2.rects={reference:k(U1,D(w1),z2.options.strategy==="fixed"),popper:_(w1)},z2.reset=!1,z2.placement=z2.options.placement,z2.orderedModifiers.forEach(function(_1){return z2.modifiersData[_1.name]=Object.assign({},_1.data)});for(var P2=0;P2<z2.orderedModifiers.length;P2++)if(z2.reset!==!0){var K2=z2.orderedModifiers[P2],J2=K2.fn,Z2=K2.options,e1=Z2===void 0?{}:Z2,m1=K2.name;typeof J2=="function"&&(z2=J2({state:z2,options:e1,name:m1,instance:l1})||z2)}else z2.reset=!1,P2=-1}}},update:(e2=function(){return new Promise(function(B2){l1.forceUpdate(),B2(z2)})},function(){return p2||(p2=new Promise(function(B2){Promise.resolve().then(function(){p2=void 0,B2(e2())})})),p2}),destroy:function(){r1(),j2=!0}};if(!x6(T,R))return l1;function r1(){B1.forEach(function(B2){return B2()}),B1=[]}return l1.setOptions(W).then(function(B2){!j2&&W.onFirstUpdate&&W.onFirstUpdate(B2)}),l1}}var pe={passive:!0};function $4(h){return h.split("-")[0]}function W3(h){return h.split("-")[1]}function H0(h){return["top","bottom"].indexOf(h)>=0?"x":"y"}function ec(h){var l,m=h.reference,u=h.element,V=h.placement,x=V?$4(V):null,T=V?W3(V):null,R=m.x+m.width/2-u.width/2,W=m.y+m.height/2-u.height/2;switch(x){case s2:l={x:R,y:m.y-u.height};break;case t2:l={x:R,y:m.y+m.height};break;case a2:l={x:m.x+m.width,y:W};break;case f2:l={x:m.x-u.width,y:W};break;default:l={x:m.x,y:m.y}}var e2=x?H0(x):null;if(e2!=null){var p2=e2==="y"?"height":"width";switch(T){case N2:l[e2]=l[e2]-(m[p2]/2-u[p2]/2);break;case n1:l[e2]=l[e2]+(m[p2]/2-u[p2]/2)}}return l}var Q5={top:"auto",right:"auto",bottom:"auto",left:"auto"};function S6(h){var l,m=h.popper,u=h.popperRect,V=h.placement,x=h.variation,T=h.offsets,R=h.position,W=h.gpuAcceleration,e2=h.adaptive,p2=h.roundOffsets,z2=h.isFixed,B1=T.x,j2=B1===void 0?0:B1,l1=T.y,r1=l1===void 0?0:l1,B2=typeof p2=="function"?p2({x:j2,y:r1}):{x:j2,y:r1};j2=B2.x,r1=B2.y;var U1=T.hasOwnProperty("x"),w1=T.hasOwnProperty("y"),P2=f2,K2=s2,J2=window;if(e2){var Z2=D(m),e1="clientHeight",m1="clientWidth";Z2===L1(m)&&H(Z2=$2(m)).position!=="static"&&R==="absolute"&&(e1="scrollHeight",m1="scrollWidth"),(V===s2||(V===f2||V===a2)&&x===n1)&&(K2=t2,r1-=(z2&&J2.visualViewport?J2.visualViewport.height:Z2[e1])-u.height,r1*=W?1:-1),(V===f2||(V===s2||V===t2)&&x===n1)&&(P2=a2,j2-=(z2&&J2.visualViewport?J2.visualViewport.width:Z2[m1])-u.width,j2*=W?1:-1)}var _1,l4=Object.assign({position:R},e2&&Q5),A4=p2===!0?function(J4){var S3=J4.x,_6=J4.y,Z4=window.devicePixelRatio||1;return{x:Z(S3*Z4)/Z4||0,y:Z(_6*Z4)/Z4||0}}({x:j2,y:r1}):{x:j2,y:r1};return j2=A4.x,r1=A4.y,W?Object.assign({},l4,((_1={})[K2]=w1?"0":"",_1[P2]=U1?"0":"",_1.transform=(J2.devicePixelRatio||1)<=1?"translate("+j2+"px, "+r1+"px)":"translate3d("+j2+"px, "+r1+"px, 0)",_1)):Object.assign({},l4,((l={})[K2]=w1?r1+"px":"",l[P2]=U1?j2+"px":"",l.transform="",l))}const X5={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(h){var l=h.state,m=h.options,u=h.name,V=m.offset,x=V===void 0?[0,0]:V,T=h3.reduce(function(p2,z2){return p2[z2]=function(B1,j2,l1){var r1=$4(B1),B2=[f2,s2].indexOf(r1)>=0?-1:1,U1=typeof l1=="function"?l1(Object.assign({},j2,{placement:B1})):l1,w1=U1[0],P2=U1[1];return w1=w1||0,P2=(P2||0)*B2,[f2,a2].indexOf(r1)>=0?{x:P2,y:w1}:{x:w1,y:P2}}(z2,l.rects,x),p2},{}),R=T[l.placement],W=R.x,e2=R.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=W,l.modifiersData.popperOffsets.y+=e2),l.modifiersData[u]=T}};var cc={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(h){return h.replace(/left|right|bottom|top/g,function(l){return cc[l]})}var J5={start:"end",end:"start"};function z0(h){return h.replace(/start|end/g,function(l){return J5[l]})}function ge(h,l){var m=l.getRootNode&&l.getRootNode();if(h.contains(l))return!0;if(m&&M4(m)){var u=l;do{if(u&&h.isSameNode(u))return!0;u=u.parentNode||u.host}while(u)}return!1}function V0(h){return Object.assign({},h,{left:h.x,top:h.y,right:h.x+h.width,bottom:h.y+h.height})}function M0(h,l){return l===i4?V0(function(m){var u=L1(m),V=$2(m),x=u.visualViewport,T=V.clientWidth,R=V.clientHeight,W=0,e2=0;return x&&(T=x.width,R=x.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(W=x.offsetLeft,e2=x.offsetTop)),{width:T,height:R,x:W+b2(m),y:e2}}(h)):q1(l)?function(m){var u=Y(m);return u.top=u.top+m.clientTop,u.left=u.left+m.clientLeft,u.bottom=u.top+m.clientHeight,u.right=u.left+m.clientWidth,u.width=m.clientWidth,u.height=m.clientHeight,u.x=u.left,u.y=u.top,u}(l):V0(function(m){var u,V=$2(m),x=u2(m),T=(u=m.ownerDocument)==null?void 0:u.body,R=k4(V.scrollWidth,V.clientWidth,T?T.scrollWidth:0,T?T.clientWidth:0),W=k4(V.scrollHeight,V.clientHeight,T?T.scrollHeight:0,T?T.clientHeight:0),e2=-x.scrollLeft+b2(m),p2=-x.scrollTop;return H(T||V).direction==="rtl"&&(e2+=k4(V.clientWidth,T?T.clientWidth:0)-R),{width:R,height:W,x:e2,y:p2}}($2(h)))}function Z5(h,l,m){var u=l==="clippingParents"?function(R){var W=J(O(R)),e2=["absolute","fixed"].indexOf(H(R).position)>=0&&a1(R)?D(R):R;return q1(e2)?W.filter(function(p2){return q1(p2)&&ge(p2,e2)&&C2(p2)!=="body"}):[]}(h):[].concat(l),V=[].concat(u,[m]),x=V[0],T=V.reduce(function(R,W){var e2=M0(h,W);return R.top=k4(e2.top,R.top),R.right=I(e2.right,R.right),R.bottom=I(e2.bottom,R.bottom),R.left=k4(e2.left,R.left),R},M0(h,x));return T.width=T.right-T.left,T.height=T.bottom-T.top,T.x=T.left,T.y=T.top,T}function tc(h){return Object.assign({},{top:0,right:0,bottom:0,left:0},h)}function C0(h,l){return l.reduce(function(m,u){return m[u]=h,m},{})}function G3(h,l){l===void 0&&(l={});var m=l,u=m.placement,V=u===void 0?h.placement:u,x=m.boundary,T=x===void 0?"clippingParents":x,R=m.rootBoundary,W=R===void 0?i4:R,e2=m.elementContext,p2=e2===void 0?N4:e2,z2=m.altBoundary,B1=z2!==void 0&&z2,j2=m.padding,l1=j2===void 0?0:j2,r1=tc(typeof l1!="number"?l1:C0(l1,x2)),B2=p2===N4?"reference":N4,U1=h.rects.popper,w1=h.elements[B1?B2:p2],P2=Z5(q1(w1)?w1:w1.contextElement||$2(h.elements.popper),T,W),K2=Y(h.elements.reference),J2=ec({reference:K2,element:U1,strategy:"absolute",placement:V}),Z2=V0(Object.assign({},U1,J2)),e1=p2===N4?Z2:K2,m1={top:P2.top-e1.top+r1.top,bottom:e1.bottom-P2.bottom+r1.bottom,left:P2.left-e1.left+r1.left,right:e1.right-P2.right+r1.right},_1=h.modifiersData.offset;if(p2===N4&&_1){var l4=_1[V];Object.keys(m1).forEach(function(A4){var J4=[a2,t2].indexOf(A4)>=0?1:-1,S3=[s2,t2].indexOf(A4)>=0?"y":"x";m1[A4]+=l4[S3]*J4})}return m1}function K3(h,l,m){return k4(h,I(l,m))}const k6={name:"preventOverflow",enabled:!0,phase:"main",fn:function(h){var l=h.state,m=h.options,u=h.name,V=m.mainAxis,x=V===void 0||V,T=m.altAxis,R=T!==void 0&&T,W=m.boundary,e2=m.rootBoundary,p2=m.altBoundary,z2=m.padding,B1=m.tether,j2=B1===void 0||B1,l1=m.tetherOffset,r1=l1===void 0?0:l1,B2=G3(l,{boundary:W,rootBoundary:e2,padding:z2,altBoundary:p2}),U1=$4(l.placement),w1=W3(l.placement),P2=!w1,K2=H0(U1),J2=K2==="x"?"y":"x",Z2=l.modifiersData.popperOffsets,e1=l.rects.reference,m1=l.rects.popper,_1=typeof r1=="function"?r1(Object.assign({},l.rects,{placement:l.placement})):r1,l4=typeof _1=="number"?{mainAxis:_1,altAxis:_1}:Object.assign({mainAxis:0,altAxis:0},_1),A4=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,J4={x:0,y:0};if(Z2){if(x){var S3,_6=K2==="y"?s2:f2,Z4=K2==="y"?t2:a2,_4=K2==="y"?"height":"width",e6=Z2[K2],E6=e6+B2[_6],gc=e6-B2[Z4],Ce=j2?-m1[_4]/2:0,e3=w1===N2?e1[_4]:m1[_4],c3=w1===N2?-m1[_4]:-e1[_4],ye=l.elements.arrow,c6=j2&&ye?_(ye):{width:0,height:0},t3=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Hc=t3[_6],zc=t3[Z4],be=K3(0,e1[_4],c6[_4]),i7=P2?e1[_4]/2-Ce-be-Hc-l4.mainAxis:e3-be-Hc-l4.mainAxis,o7=P2?-e1[_4]/2+Ce+be+zc+l4.mainAxis:c3+be+zc+l4.mainAxis,Le=l.elements.arrow&&D(l.elements.arrow),l7=Le?K2==="y"?Le.clientTop||0:Le.clientLeft||0:0,S0=(S3=A4==null?void 0:A4[K2])!=null?S3:0,Vc=e6+o7-S0,we=K3(j2?I(E6,e6+i7-S0-l7):E6,e6,j2?k4(gc,Vc):gc);Z2[K2]=we,J4[K2]=we-e6}if(R){var xe,d3=K2==="x"?s2:f2,T6=K2==="x"?t2:a2,P6=Z2[J2],Mc=J2==="y"?"height":"width",Nr=P6+B2[d3],Ar=P6-B2[T6],f7=[s2,f2].indexOf(U1)!==-1,_r=(xe=A4==null?void 0:A4[J2])!=null?xe:0,Er=f7?Nr:P6-e1[Mc]-m1[Mc]-_r+l4.altAxis,Tr=f7?P6+e1[Mc]+m1[Mc]-_r-l4.altAxis:Ar,Pr=j2&&f7?function(NV,AV,u7){var Ir=K3(NV,AV,u7);return Ir>u7?u7:Ir}(Er,P6,Tr):K3(j2?Er:Nr,P6,j2?Tr:Ar);Z2[J2]=Pr,J4[J2]=Pr-P6}l.modifiersData[u]=J4}},requiresIfExists:["offset"]},e7={name:"arrow",enabled:!0,phase:"main",fn:function(h){var l,m=h.state,u=h.name,V=h.options,x=m.elements.arrow,T=m.modifiersData.popperOffsets,R=$4(m.placement),W=H0(R),e2=[f2,a2].indexOf(R)>=0?"height":"width";if(x&&T){var p2=function(m1,_1){return tc(typeof(m1=typeof m1=="function"?m1(Object.assign({},_1.rects,{placement:_1.placement})):m1)!="number"?m1:C0(m1,x2))}(V.padding,m),z2=_(x),B1=W==="y"?s2:f2,j2=W==="y"?t2:a2,l1=m.rects.reference[e2]+m.rects.reference[W]-T[W]-m.rects.popper[e2],r1=T[W]-m.rects.reference[W],B2=D(x),U1=B2?W==="y"?B2.clientHeight||0:B2.clientWidth||0:0,w1=l1/2-r1/2,P2=p2[B1],K2=U1-z2[e2]-p2[j2],J2=U1/2-z2[e2]/2+w1,Z2=K3(P2,J2,K2),e1=W;m.modifiersData[u]=((l={})[e1]=Z2,l.centerOffset=Z2-J2,l)}},effect:function(h){var l=h.state,m=h.options.element,u=m===void 0?"[data-popper-arrow]":m;u!=null&&(typeof u!="string"||(u=l.elements.popper.querySelector(u)))&&ge(l.elements.popper,u)&&(l.elements.arrow=u)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function sc(h,l,m){return m===void 0&&(m={x:0,y:0}),{top:h.top-l.height-m.y,right:h.right-l.width+m.x,bottom:h.bottom-l.height+m.y,left:h.left-l.width-m.x}}function ac(h){return[s2,a2,t2,f2].some(function(l){return h[l]>=0})}var y0=Y5({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(h){var l=h.state,m=h.instance,u=h.options,V=u.scroll,x=V===void 0||V,T=u.resize,R=T===void 0||T,W=L1(l.elements.popper),e2=[].concat(l.scrollParents.reference,l.scrollParents.popper);return x&&e2.forEach(function(p2){p2.addEventListener("scroll",m.update,pe)}),R&&W.addEventListener("resize",m.update,pe),function(){x&&e2.forEach(function(p2){p2.removeEventListener("scroll",m.update,pe)}),R&&W.removeEventListener("resize",m.update,pe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(h){var l=h.state,m=h.name;l.modifiersData[m]=ec({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(h){var l=h.state,m=h.options,u=m.gpuAcceleration,V=u===void 0||u,x=m.adaptive,T=x===void 0||x,R=m.roundOffsets,W=R===void 0||R,e2={placement:$4(l.placement),variation:W3(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:V,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,S6(Object.assign({},e2,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:T,roundOffsets:W})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,S6(Object.assign({},e2,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:W})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(h){var l=h.state;Object.keys(l.elements).forEach(function(m){var u=l.styles[m]||{},V=l.attributes[m]||{},x=l.elements[m];a1(x)&&C2(x)&&(Object.assign(x.style,u),Object.keys(V).forEach(function(T){var R=V[T];R===!1?x.removeAttribute(T):x.setAttribute(T,R===!0?"":R)}))})},effect:function(h){var l=h.state,m={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,m.popper),l.styles=m,l.elements.arrow&&Object.assign(l.elements.arrow.style,m.arrow),function(){Object.keys(l.elements).forEach(function(u){var V=l.elements[u],x=l.attributes[u]||{},T=Object.keys(l.styles.hasOwnProperty(u)?l.styles[u]:m[u]).reduce(function(R,W){return R[W]="",R},{});a1(V)&&C2(V)&&(Object.assign(V.style,T),Object.keys(x).forEach(function(R){V.removeAttribute(R)}))})}},requires:["computeStyles"]},X5,{name:"flip",enabled:!0,phase:"main",fn:function(h){var l=h.state,m=h.options,u=h.name;if(!l.modifiersData[u]._skip){for(var V=m.mainAxis,x=V===void 0||V,T=m.altAxis,R=T===void 0||T,W=m.fallbackPlacements,e2=m.padding,p2=m.boundary,z2=m.rootBoundary,B1=m.altBoundary,j2=m.flipVariations,l1=j2===void 0||j2,r1=m.allowedAutoPlacements,B2=l.options.placement,U1=$4(B2),w1=W||(U1===B2||!l1?[ve(B2)]:function(e3){if($4(e3)===k2)return[];var c3=ve(e3);return[z0(e3),c3,z0(c3)]}(B2)),P2=[B2].concat(w1).reduce(function(e3,c3){return e3.concat($4(c3)===k2?function(ye,c6){c6===void 0&&(c6={});var t3=c6,Hc=t3.placement,zc=t3.boundary,be=t3.rootBoundary,i7=t3.padding,o7=t3.flipVariations,Le=t3.allowedAutoPlacements,l7=Le===void 0?h3:Le,S0=W3(Hc),Vc=S0?o7?w6:w6.filter(function(d3){return W3(d3)===S0}):x2,we=Vc.filter(function(d3){return l7.indexOf(d3)>=0});we.length===0&&(we=Vc);var xe=we.reduce(function(d3,T6){return d3[T6]=G3(ye,{placement:T6,boundary:zc,rootBoundary:be,padding:i7})[$4(T6)],d3},{});return Object.keys(xe).sort(function(d3,T6){return xe[d3]-xe[T6]})}(l,{placement:c3,boundary:p2,rootBoundary:z2,padding:e2,flipVariations:l1,allowedAutoPlacements:r1}):c3)},[]),K2=l.rects.reference,J2=l.rects.popper,Z2=new Map,e1=!0,m1=P2[0],_1=0;_1<P2.length;_1++){var l4=P2[_1],A4=$4(l4),J4=W3(l4)===N2,S3=[s2,t2].indexOf(A4)>=0,_6=S3?"width":"height",Z4=G3(l,{placement:l4,boundary:p2,rootBoundary:z2,altBoundary:B1,padding:e2}),_4=S3?J4?a2:f2:J4?t2:s2;K2[_6]>J2[_6]&&(_4=ve(_4));var e6=ve(_4),E6=[];if(x&&E6.push(Z4[A4]<=0),R&&E6.push(Z4[_4]<=0,Z4[e6]<=0),E6.every(function(e3){return e3})){m1=l4,e1=!1;break}Z2.set(l4,E6)}if(e1)for(var gc=function(e3){var c3=P2.find(function(ye){var c6=Z2.get(ye);if(c6)return c6.slice(0,e3).every(function(t3){return t3})});if(c3)return m1=c3,"break"},Ce=l1?3:1;Ce>0&&gc(Ce)!=="break";Ce--);l.placement!==m1&&(l.modifiersData[u]._skip=!0,l.placement=m1,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},k6,e7,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(h){var l=h.state,m=h.name,u=l.rects.reference,V=l.rects.popper,x=l.modifiersData.preventOverflow,T=G3(l,{elementContext:"reference"}),R=G3(l,{altBoundary:!0}),W=sc(T,u),e2=sc(R,V,x),p2=ac(W),z2=ac(e2);l.modifiersData[m]={referenceClippingOffsets:W,popperEscapeOffsets:e2,isReferenceHidden:p2,hasPopperEscaped:z2},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":p2,"data-popper-escaped":z2})}}]});function nc(h){return function(l){if(Array.isArray(l))return L3(l)}(h)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(h)||function(l,m){if(!!l){if(typeof l=="string")return L3(l,m);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return L3(l,m)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function L3(h,l){(l==null||l>h.length)&&(l=h.length);for(var m=0,u=new Array(l);m<l;m++)u[m]=h[m];return u}function rc(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function Y3(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?rc(Object(m),!0).forEach(function(u){c7(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):rc(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function c7(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function t7(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function s7(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var ic={placement:"bottom",triggerType:"click",onShow:function(){},onHide:function(){}},oc=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};t7(this,h),this._targetEl=u,this._triggerEl=V,this._options=Y3(Y3({},ic),x),this._popperInstance=this._createPopperInstace(),this._visible=!1,this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){u.toggle()})}},{key:"_createPopperInstace",value:function(){return y0(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,10]}}]})}},{key:"_handleClickOutside",value:function(u,V){var x=u.target;x===V||V.contains(x)||this._triggerEl.contains(x)||!this._visible||this.hide(),document.body.removeEventListener("click",this._handleClickOutside,!0)}},{key:"toggle",value:function(){this._visible?(this.hide(),document.body.removeEventListener("click",this._handleClickOutside,!0)):this.show()}},{key:"show",value:function(){var u=this;this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(V){return Y3(Y3({},V),{},{modifiers:[].concat(nc(V.modifiers),[{name:"eventListeners",enabled:!0}])})}),document.body.addEventListener("click",function(V){u._handleClickOutside(V,u._targetEl)},!0),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)}},{key:"hide",value:function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(u){return Y3(Y3({},u),{},{modifiers:[].concat(nc(u.modifiers),[{name:"eventListeners",enabled:!1}])})}),this._visible=!1,this._options.onHide(this)}}])&&s7(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function b0(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(h){var l=document.getElementById(h.getAttribute("data-dropdown-toggle")),m=h.getAttribute("data-dropdown-placement");new oc(l,h,{placement:m||ic.placement})})}window.Dropdown=oc,document.readyState!=="loading"?b0():document.addEventListener("DOMContentLoaded",b0);function lc(h){return function(l){if(Array.isArray(l))return L0(l)}(h)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(h)||function(l,m){if(!!l){if(typeof l=="string")return L0(l,m);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return L0(l,m)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function L0(h,l){(l==null||l>h.length)&&(l=h.length);for(var m=0,u=new Array(l);m<l;m++)u[m]=h[m];return u}function a7(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function fc(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?a7(Object(m),!0).forEach(function(u){uc(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):a7(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function uc(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function z(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function g(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var y={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",onHide:function(){},onShow:function(){},onToggle:function(){}},A=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};z(this,h),this._targetEl=u,this._options=fc(fc({},y),V),this._isHidden=!0,this._backdropEl=null,this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;this._targetEl&&(this._getPlacementClasses().map(function(V){u._targetEl.classList.add(V)}),this._targetEl.addEventListener("click",function(V){u._handleOutsideClick(V.target)}))}},{key:"_createBackdrop",value:function(){if(this._isHidden){var u,V=document.createElement("div");V.setAttribute("modal-backdrop",""),(u=V.classList).add.apply(u,lc(this._options.backdropClasses.split(" "))),document.querySelector("body").append(V),this._backdropEl=V}}},{key:"_destroyBackdropEl",value:function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()}},{key:"_handleOutsideClick",value:function(u){this._options.backdrop==="dynamic"&&(u!==this._targetEl&&u!==this._backdropEl||this.hide())}},{key:"_getPlacementClasses",value:function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":default:return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"]}}},{key:"toggle",value:function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)}},{key:"show",value:function(){this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.onShow(this)}},{key:"hide",value:function(){this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.onHide(this)}},{key:"isHidden",value:function(){return this._isHidden}}])&&g(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();window.Modal=A;var E=function(h,l){return!!l.some(function(m){return m.id===h})&&l.find(function(m){return m.id===h})},j=function(h){var l=[];document.querySelectorAll("[".concat(h.main,"]")).forEach(function(m){var u=m.getAttribute(h.main),V=document.getElementById(u),x=V.getAttribute(h.placement),T=V.getAttribute(h.backdrop);V&&(V.hasAttribute("aria-hidden")||V.hasAttribute("aria-modal")||V.setAttribute("aria-hidden","true"));var R=null;E(u,l)?R=(R=E(u,l)).object:(R=new A(V,{placement:x||y.placement,backdrop:T||y.backdrop}),l.push({id:u,object:R})),V.hasAttribute(h.show)&&V.getAttribute(h.show)==="true"&&R.show(),m.addEventListener("click",function(){R.toggle()})})},K={main:"data-modal-toggle",placement:"data-modal-placement",show:"data-modal-show",backdrop:"data-modal-backdrop"};document.readyState!=="loading"?j(K):document.addEventListener("DOMContentLoaded",j(K));function Q(h){return function(l){if(Array.isArray(l))return X(l)}(h)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(h)||function(l,m){if(!!l){if(typeof l=="string")return X(l,m);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return X(l,m)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function X(h,l){(l==null||l>h.length)&&(l=h.length);for(var m=0,u=new Array(l);m<l;m++)u[m]=h[m];return u}function m2(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function i2(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?m2(Object(m),!0).forEach(function(u){h1(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):m2(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function h1(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function P1(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function X2(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var F2={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},p1=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,V=arguments.length>1?arguments[1]:void 0;P1(this,h),this._targetEl=u,this._options=i2(i2({},F2),V),this._visible=!1,this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(V){u._targetEl.classList.add(V)}),this.hide()}},{key:"isVisible",value:function(){return this._visible}},{key:"hide",value:function(){var u=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(V){u._targetEl.classList.remove(V)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(V){u._targetEl.classList.add(V)})):(this._getPlacementClasses(this._options.placement).active.map(function(V){u._targetEl.classList.remove(V)}),this._getPlacementClasses(this._options.placement).inactive.map(function(V){u._targetEl.classList.add(V)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)}},{key:"show",value:function(){var u=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(V){u._targetEl.classList.add(V)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(V){u._targetEl.classList.remove(V)})):(this._getPlacementClasses(this._options.placement).active.map(function(V){u._targetEl.classList.add(V)}),this._getPlacementClasses(this._options.placement).inactive.map(function(V){u._targetEl.classList.remove(V)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)}},{key:"toggle",value:function(){this.isVisible()?this.hide():this.show()}},{key:"_createBackdrop",value:function(){var u=this;if(!this._visible){var V,x=document.createElement("div");x.setAttribute("drawer-backdrop",""),(V=x.classList).add.apply(V,Q(this._options.backdropClasses.split(" "))),document.querySelector("body").append(x),x.addEventListener("click",function(){u.hide()})}}},{key:"_destroyBackdropEl",value:function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()}},{key:"_getPlacementClasses",value:function(u){switch(u){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]}}}}])&&X2(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();window.Drawer=p1;var E2=function(h,l){return!!l.some(function(m){return m.id===h})&&l.find(function(m){return m.id===h})};function V1(){var h=[];document.querySelectorAll("[data-drawer-target]").forEach(function(l){var m=document.getElementById(l.getAttribute("data-drawer-target")),u=m.id,V=l.getAttribute("data-drawer-placement"),x=l.getAttribute("data-drawer-body-scrolling"),T=l.getAttribute("data-drawer-backdrop"),R=l.getAttribute("data-drawer-edge"),W=l.getAttribute("data-drawer-edge-offset"),e2=null;E2(u,h)?e2=(e2=E2(u,h)).object:(e2=new p1(m,{placement:V||F2.placement,bodyScrolling:x?x==="true":F2.bodyScrolling,backdrop:T?T==="true":F2.backdrop,edge:R?R==="true":F2.edge,edgeOffset:W||F2.edgeOffset}),h.push({id:u,object:e2}))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(l){var m=document.getElementById(l.getAttribute("data-drawer-toggle")).id,u=E2(m,h);l.addEventListener("click",function(){u.object.isVisible()?u.object.hide():u.object.show()})}),document.querySelectorAll("[data-drawer-dismiss]").forEach(function(l){var m=document.getElementById(l.getAttribute("data-drawer-dismiss")).id,u=E2(m,h);l.addEventListener("click",function(){u.object.hide()})}),document.querySelectorAll("[data-drawer-show]").forEach(function(l){var m=document.getElementById(l.getAttribute("data-drawer-show")).id,u=E2(m,h);l.addEventListener("click",function(){u.object.show()})})}document.readyState!=="loading"?V1():document.addEventListener("DOMContentLoaded",V1);function d1(h){return function(l){if(Array.isArray(l))return v1(l)}(h)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(h)||function(l,m){if(!!l){if(typeof l=="string")return v1(l,m);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return v1(l,m)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function v1(h,l){(l==null||l>h.length)&&(l=h.length);for(var m=0,u=new Array(l);m<l;m++)u[m]=h[m];return u}function T2(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function M1(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?T2(Object(m),!0).forEach(function(u){g1(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):T2(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function g1(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function H1(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function F1(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var s4={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},W1=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};H1(this,h),this._items=u,this._activeTab=V?this.getTab(V.defaultTabId):null,this._options=M1(M1({},s4),V),this._init()}var l,m;return l=h,m=[{key:"_init",value:function(){var u=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(V){V.triggerEl.addEventListener("click",function(){u.show(V.id)})}))}},{key:"getActiveTab",value:function(){return this._activeTab}},{key:"_setActiveTab",value:function(u){this._activeTab=u}},{key:"getTab",value:function(u){return this._items.filter(function(V){return V.id===u})[0]}},{key:"show",value:function(u){var V,x,T=this,R=arguments.length>1&&arguments[1]!==void 0&&arguments[1],W=this.getTab(u);(W!==this._activeTab||R)&&(this._items.map(function(e2){var p2,z2;e2!==W&&((p2=e2.triggerEl.classList).remove.apply(p2,d1(T._options.activeClasses.split(" "))),(z2=e2.triggerEl.classList).add.apply(z2,d1(T._options.inactiveClasses.split(" "))),e2.targetEl.classList.add("hidden"),e2.triggerEl.setAttribute("aria-selected",!1))}),(V=W.triggerEl.classList).add.apply(V,d1(this._options.activeClasses.split(" "))),(x=W.triggerEl.classList).remove.apply(x,d1(this._options.inactiveClasses.split(" "))),W.triggerEl.setAttribute("aria-selected",!0),W.targetEl.classList.remove("hidden"),this._setActiveTab(W),this._options.onShow(this,W))}}],m&&F1(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function G1(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(h){var l=[],m=null;h.querySelectorAll('[role="tab"]').forEach(function(u){var V=u.getAttribute("aria-selected")==="true",x={id:u.getAttribute("data-tabs-target"),triggerEl:u,targetEl:document.querySelector(u.getAttribute("data-tabs-target"))};l.push(x),V&&(m=x.id)}),new W1(l,{defaultTabId:m})})}window.Tabs=W1,document.readyState!=="loading"?G1():document.addEventListener("DOMContentLoaded",G1);function o4(h){return function(l){if(Array.isArray(l))return Q4(l)}(h)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(h)||function(l,m){if(!!l){if(typeof l=="string")return Q4(l,m);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return Q4(l,m)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Q4(h,l){(l==null||l>h.length)&&(l=h.length);for(var m=0,u=new Array(l);m<l;m++)u[m]=h[m];return u}function Q3(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function q4(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?Q3(Object(m),!0).forEach(function(u){y4(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):Q3(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function y4(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function I4(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function He(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var X4={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){}},N6=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};I4(this,h),this._targetEl=u,this._triggerEl=V,this._options=q4(q4({},X4),x),this._popperInstance=this._createPopperInstace(),this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;if(this._triggerEl){var V=this._getTriggerEvents();V.showEvents.forEach(function(x){u._triggerEl.addEventListener(x,function(){u.show()})}),V.hideEvents.forEach(function(x){u._triggerEl.addEventListener(x,function(){u.hide()})})}}},{key:"_createPopperInstace",value:function(){return y0(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})}},{key:"_getTriggerEvents",value:function(){switch(this._options.triggerType){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]}}}},{key:"show",value:function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(u){return q4(q4({},u),{},{modifiers:[].concat(o4(u.modifiers),[{name:"eventListeners",enabled:!0}])})}),this._popperInstance.update(),this._options.onShow(this)}},{key:"hide",value:function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(u){return q4(q4({},u),{},{modifiers:[].concat(o4(u.modifiers),[{name:"eventListeners",enabled:!1}])})}),this._options.onHide(this)}}])&&He(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function ze(){document.querySelectorAll("[data-tooltip-target]").forEach(function(h){var l=document.getElementById(h.getAttribute("data-tooltip-target")),m=h.getAttribute("data-tooltip-trigger"),u=h.getAttribute("data-tooltip-placement");new N6(l,h,{placement:u||X4.placement,triggerType:m||X4.triggerType})})}window.Tooltip=N6,document.readyState!=="loading"?ze():document.addEventListener("DOMContentLoaded",ze);function X3(h){return function(l){if(Array.isArray(l))return J3(l)}(h)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(h)||function(l,m){if(!!l){if(typeof l=="string")return J3(l,m);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return J3(l,m)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function J3(h,l){(l==null||l>h.length)&&(l=h.length);for(var m=0,u=new Array(l);m<l;m++)u[m]=h[m];return u}function w3(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function b4(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?w3(Object(m),!0).forEach(function(u){A6(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):w3(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function A6(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function Ve(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function x3(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var Z3={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){}},hc=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Ve(this,h),this._targetEl=u,this._triggerEl=V,this._options=b4(b4({},Z3),x),this._popperInstance=this._createPopperInstace(),this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;if(this._triggerEl){var V=this._getTriggerEvents();V.showEvents.forEach(function(x){u._triggerEl.addEventListener(x,function(){u.show()}),u._targetEl.addEventListener(x,function(){u.show()})}),V.hideEvents.forEach(function(x){u._triggerEl.addEventListener(x,function(){setTimeout(function(){u._targetEl.matches(":hover")||u.hide()},100)}),u._targetEl.addEventListener(x,function(){setTimeout(function(){u._triggerEl.matches(":hover")||u.hide()},100)})})}}},{key:"_createPopperInstace",value:function(){return y0(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})}},{key:"_getTriggerEvents",value:function(){switch(this._options.triggerType){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]}}}},{key:"show",value:function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(u){return b4(b4({},u),{},{modifiers:[].concat(X3(u.modifiers),[{name:"eventListeners",enabled:!0}])})}),this._popperInstance.update(),this._options.onShow(this)}},{key:"hide",value:function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(u){return b4(b4({},u),{},{modifiers:[].concat(X3(u.modifiers),[{name:"eventListeners",enabled:!1}])})}),this._options.onHide(this)}}])&&x3(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function Me(){document.querySelectorAll("[data-popover-target]").forEach(function(h){var l=document.getElementById(h.getAttribute("data-popover-target")),m=h.getAttribute("data-popover-trigger"),u=h.getAttribute("data-popover-placement"),V=h.getAttribute("data-popover-offset");new hc(l,h,{placement:u||Z3.placement,offset:V?parseInt(V):Z3.offset,triggerType:m||Z3.triggerType})})}window.Popover=hc,document.readyState!=="loading"?Me():document.addEventListener("DOMContentLoaded",Me);function dc(h,l){var m=Object.keys(h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);l&&(u=u.filter(function(V){return Object.getOwnPropertyDescriptor(h,V).enumerable})),m.push.apply(m,u)}return m}function w0(h){for(var l=1;l<arguments.length;l++){var m=arguments[l]!=null?arguments[l]:{};l%2?dc(Object(m),!0).forEach(function(u){n7(h,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(m)):dc(Object(m)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(m,u))})}return h}function n7(h,l,m){return l in h?Object.defineProperty(h,l,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[l]=m,h}function r7(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function mc(h,l){for(var m=0;m<l.length;m++){var u=l[m];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(h,u.key,u)}}var x0={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},pc=function(){function h(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,T=arguments.length>3?arguments[3]:void 0;r7(this,h),this._parentEl=u,this._triggerEl=V,this._targetEl=x,this._options=w0(w0({},x0),T),this._visible=!1,this._init()}var l,m;return l=h,(m=[{key:"_init",value:function(){var u=this;if(this._triggerEl){var V=this._getTriggerEvents();V.showEvents.forEach(function(x){u._triggerEl.addEventListener(x,function(){u.show()}),u._targetEl.addEventListener(x,function(){u.show()})}),V.hideEvents.forEach(function(x){u._parentEl.addEventListener(x,function(){setTimeout(function(){u._parentEl.matches(":hover")||u.hide()},100)})})}}},{key:"hide",value:function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)}},{key:"show",value:function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)}},{key:"toggle",value:function(){this._visible?this.hide():this.show()}},{key:"_getTriggerEvents",value:function(){switch(this._options.triggerType){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]}}}}])&&mc(l.prototype,m),Object.defineProperty(l,"prototype",{writable:!1}),h}();function vc(){document.querySelectorAll("[data-dial-init]").forEach(function(h){var l=h.querySelector("[data-dial-toggle]"),m=document.getElementById(l.getAttribute("data-dial-toggle")),u=l.getAttribute("data-dial-trigger");new pc(h,l,m,{triggerType:u||x0.triggerType})})}window.Dial=pc,document.readyState!=="loading"?vc():document.addEventListener("DOMContentLoaded",vc)})();(()=>{var c={745:()=>{const s=(a,n=!0)=>{const r=document.getElementById(a);n?r.classList.remove("hidden"):r.classList.add("hidden")};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-collapse-toggle]").forEach(function(a){var n=a.getAttribute("data-collapse-toggle");a.addEventListener("click",function(){s(n,document.getElementById(n).classList.contains("hidden"))})})}),window.toggleCollapse=s},508:()=>{const s=(a,n=!0)=>{const r=document.getElementById(a);if(n){r.classList.add("flex"),r.classList.remove("hidden"),r.setAttribute("aria-modal","true"),r.setAttribute("role","dialog"),r.removeAttribute("aria-hidden");var i=document.createElement("div");i.setAttribute("modal-backdrop",""),i.classList.add("bg-gray-900","bg-opacity-50","dark:bg-opacity-80","fixed","inset-0","z-40"),document.querySelector("body").append(i)}else r.classList.add("hidden"),r.classList.remove("flex"),r.setAttribute("aria-hidden","true"),r.removeAttribute("aria-modal"),r.removeAttribute("role"),document.querySelector("[modal-backdrop]").remove()};window.toggleModal=s,document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-modal-toggle]").forEach(function(a){var n=a.getAttribute("data-modal-toggle"),r=document.getElementById(n);r&&(!r.hasAttribute("aria-hidden")&&!r.hasAttribute("aria-modal")&&r.setAttribute("aria-hidden","true"),a.addEventListener("click",function(){s(n,r.hasAttribute("aria-hidden","true"))}))})})},454:()=>{document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-tabs-toggle]").forEach(function(s){const a=s.getAttribute("id"),n=document.querySelectorAll("#"+a+' [role="tab"]');var r=null,i=null;n.forEach(function(o){o.addEventListener("click",function(f){var d=f.target,p=d.getAttribute("data-tabs-target"),v=document.querySelector(p);d!==r&&(!r&&!i&&(r=document.querySelector("#"+a+' [aria-selected="true"]'),i=document.querySelector(r.getAttribute("data-tabs-target"))),d.classList.add("active"),d.setAttribute("aria-selected",!0),v.classList.remove("hidden"),r.setAttribute("aria-selected",!1),r.classList.remove("active"),i.classList.add("hidden"),r=d,i=v)})})})})}},e={};function t(s){var a=e[s];if(a!==void 0)return a.exports;var n=e[s]={exports:{}};return c[s](n,n.exports,t),n.exports}(()=>{t(745);function s(z){if(z==null)return window;if(z.toString()!=="[object Window]"){var g=z.ownerDocument;return g&&g.defaultView||window}return z}function a(z){var g=s(z).Element;return z instanceof g||z instanceof Element}function n(z){var g=s(z).HTMLElement;return z instanceof g||z instanceof HTMLElement}function r(z){if(typeof ShadowRoot>"u")return!1;var g=s(z).ShadowRoot;return z instanceof g||z instanceof ShadowRoot}var i=Math.max,o=Math.min,f=Math.round;function d(z,g){g===void 0&&(g=!1);var y=z.getBoundingClientRect(),A=1,E=1;if(n(z)&&g){var j=z.offsetHeight,K=z.offsetWidth;K>0&&(A=f(y.width)/K||1),j>0&&(E=f(y.height)/j||1)}return{width:y.width/A,height:y.height/E,top:y.top/E,right:y.right/A,bottom:y.bottom/E,left:y.left/A,x:y.left/A,y:y.top/E}}function p(z){var g=s(z),y=g.pageXOffset,A=g.pageYOffset;return{scrollLeft:y,scrollTop:A}}function v(z){return{scrollLeft:z.scrollLeft,scrollTop:z.scrollTop}}function M(z){return z===s(z)||!n(z)?p(z):v(z)}function L(z){return z?(z.nodeName||"").toLowerCase():null}function S(z){return((a(z)?z.ownerDocument:z.document)||window.document).documentElement}function P(z){return d(S(z)).left+p(z).scrollLeft}function w(z){return s(z).getComputedStyle(z)}function N(z){var g=w(z),y=g.overflow,A=g.overflowX,E=g.overflowY;return/auto|scroll|overlay|hidden/.test(y+E+A)}function B(z){var g=z.getBoundingClientRect(),y=f(g.width)/z.offsetWidth||1,A=f(g.height)/z.offsetHeight||1;return y!==1||A!==1}function c2(z,g,y){y===void 0&&(y=!1);var A=n(g),E=n(g)&&B(g),j=S(g),K=d(z,E),Q={scrollLeft:0,scrollTop:0},X={x:0,y:0};return(A||!A&&!y)&&((L(g)!=="body"||N(j))&&(Q=M(g)),n(g)?(X=d(g,!0),X.x+=g.clientLeft,X.y+=g.clientTop):j&&(X.x=P(j))),{x:K.left+Q.scrollLeft-X.x,y:K.top+Q.scrollTop-X.y,width:K.width,height:K.height}}function n2(z){var g=d(z),y=z.offsetWidth,A=z.offsetHeight;return Math.abs(g.width-y)<=1&&(y=g.width),Math.abs(g.height-A)<=1&&(A=g.height),{x:z.offsetLeft,y:z.offsetTop,width:y,height:A}}function w2(z){return L(z)==="html"?z:z.assignedSlot||z.parentNode||(r(z)?z.host:null)||S(z)}function g2(z){return["html","body","#document"].indexOf(L(z))>=0?z.ownerDocument.body:n(z)&&N(z)?z:g2(w2(z))}function V2(z,g){var y;g===void 0&&(g=[]);var A=g2(z),E=A===((y=z.ownerDocument)==null?void 0:y.body),j=s(A),K=E?[j].concat(j.visualViewport||[],N(A)?A:[]):A,Q=g.concat(K);return E?Q:Q.concat(V2(w2(K)))}function s1(z){return["table","td","th"].indexOf(L(z))>=0}function A1(z){return!n(z)||w(z).position==="fixed"?null:z.offsetParent}function X1(z){var g=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,y=navigator.userAgent.indexOf("Trident")!==-1;if(y&&n(z)){var A=w(z);if(A.position==="fixed")return null}for(var E=w2(z);n(E)&&["html","body"].indexOf(L(E))<0;){var j=w(E);if(j.transform!=="none"||j.perspective!=="none"||j.contain==="paint"||["transform","perspective"].indexOf(j.willChange)!==-1||g&&j.willChange==="filter"||g&&j.filter&&j.filter!=="none")return E;E=E.parentNode}return null}function D1(z){for(var g=s(z),y=A1(z);y&&s1(y)&&w(y).position==="static";)y=A1(y);return y&&(L(y)==="html"||L(y)==="body"&&w(y).position==="static")?g:y||X1(z)||g}var z1="top",u1="bottom",W2="right",O2="left",G2="auto",D2=[z1,u1,W2,O2],R1="start",L1="end",q1="clippingParents",a1="viewport",M4="popper",k4="reference",I=D2.reduce(function(z,g){return z.concat([g+"-"+R1,g+"-"+L1])},[]),Z=[].concat(D2,[G2]).reduce(function(z,g){return z.concat([g,g+"-"+R1,g+"-"+L1])},[]),Y="beforeRead",u2="read",C2="afterRead",$2="beforeMain",b2="main",H="afterMain",C="beforeWrite",k="write",_="afterWrite",O=[Y,u2,C2,$2,b2,H,C,k,_];function q(z){var g=new Map,y=new Set,A=[];z.forEach(function(j){g.set(j.name,j)});function E(j){y.add(j.name);var K=[].concat(j.requires||[],j.requiresIfExists||[]);K.forEach(function(Q){if(!y.has(Q)){var X=g.get(Q);X&&E(X)}}),A.push(j)}return z.forEach(function(j){y.has(j.name)||E(j)}),A}function J(z){var g=q(z);return O.reduce(function(y,A){return y.concat(g.filter(function(E){return E.phase===A}))},[])}function $(z){var g;return function(){return g||(g=new Promise(function(y){Promise.resolve().then(function(){g=void 0,y(z())})})),g}}function G(z){var g=z.reduce(function(y,A){var E=y[A.name];return y[A.name]=E?Object.assign({},E,A,{options:Object.assign({},E.options,A.options),data:Object.assign({},E.data,A.data)}):A,y},{});return Object.keys(g).map(function(y){return g[y]})}var D={placement:"bottom",modifiers:[],strategy:"absolute"};function s2(){for(var z=arguments.length,g=new Array(z),y=0;y<z;y++)g[y]=arguments[y];return!g.some(function(A){return!(A&&typeof A.getBoundingClientRect=="function")})}function t2(z){z===void 0&&(z={});var g=z,y=g.defaultModifiers,A=y===void 0?[]:y,E=g.defaultOptions,j=E===void 0?D:E;return function(Q,X,m2){m2===void 0&&(m2=j);var i2={placement:"bottom",orderedModifiers:[],options:Object.assign({},D,j),modifiersData:{},elements:{reference:Q,popper:X},attributes:{},styles:{}},h1=[],P1=!1,X2={state:i2,setOptions:function(V1){var d1=typeof V1=="function"?V1(i2.options):V1;p1(),i2.options=Object.assign({},j,i2.options,d1),i2.scrollParents={reference:a(Q)?V2(Q):Q.contextElement?V2(Q.contextElement):[],popper:V2(X)};var v1=J(G([].concat(A,i2.options.modifiers)));return i2.orderedModifiers=v1.filter(function(T2){return T2.enabled}),F2(),X2.update()},forceUpdate:function(){if(!P1){var V1=i2.elements,d1=V1.reference,v1=V1.popper;if(!!s2(d1,v1)){i2.rects={reference:c2(d1,D1(v1),i2.options.strategy==="fixed"),popper:n2(v1)},i2.reset=!1,i2.placement=i2.options.placement,i2.orderedModifiers.forEach(function(W1){return i2.modifiersData[W1.name]=Object.assign({},W1.data)});for(var T2=0;T2<i2.orderedModifiers.length;T2++){if(i2.reset===!0){i2.reset=!1,T2=-1;continue}var M1=i2.orderedModifiers[T2],g1=M1.fn,H1=M1.options,F1=H1===void 0?{}:H1,s4=M1.name;typeof g1=="function"&&(i2=g1({state:i2,options:F1,name:s4,instance:X2})||i2)}}}},update:$(function(){return new Promise(function(E2){X2.forceUpdate(),E2(i2)})}),destroy:function(){p1(),P1=!0}};if(!s2(Q,X))return X2;X2.setOptions(m2).then(function(E2){!P1&&m2.onFirstUpdate&&m2.onFirstUpdate(E2)});function F2(){i2.orderedModifiers.forEach(function(E2){var V1=E2.name,d1=E2.options,v1=d1===void 0?{}:d1,T2=E2.effect;if(typeof T2=="function"){var M1=T2({state:i2,name:V1,instance:X2,options:v1}),g1=function(){};h1.push(M1||g1)}})}function p1(){h1.forEach(function(E2){return E2()}),h1=[]}return X2}}var a2={passive:!0};function f2(z){var g=z.state,y=z.instance,A=z.options,E=A.scroll,j=E===void 0?!0:E,K=A.resize,Q=K===void 0?!0:K,X=s(g.elements.popper),m2=[].concat(g.scrollParents.reference,g.scrollParents.popper);return j&&m2.forEach(function(i2){i2.addEventListener("scroll",y.update,a2)}),Q&&X.addEventListener("resize",y.update,a2),function(){j&&m2.forEach(function(i2){i2.removeEventListener("scroll",y.update,a2)}),Q&&X.removeEventListener("resize",y.update,a2)}}const k2={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:f2,data:{}};function x2(z){return z.split("-")[0]}function N2(z){return z.split("-")[1]}function n1(z){return["top","bottom"].indexOf(z)>=0?"x":"y"}function i4(z){var g=z.reference,y=z.element,A=z.placement,E=A?x2(A):null,j=A?N2(A):null,K=g.x+g.width/2-y.width/2,Q=g.y+g.height/2-y.height/2,X;switch(E){case z1:X={x:K,y:g.y-y.height};break;case u1:X={x:K,y:g.y+g.height};break;case W2:X={x:g.x+g.width,y:Q};break;case O2:X={x:g.x-y.width,y:Q};break;default:X={x:g.x,y:g.y}}var m2=E?n1(E):null;if(m2!=null){var i2=m2==="y"?"height":"width";switch(j){case R1:X[m2]=X[m2]-(g[i2]/2-y[i2]/2);break;case L1:X[m2]=X[m2]+(g[i2]/2-y[i2]/2);break}}return X}function N4(z){var g=z.state,y=z.name;g.modifiersData[y]=i4({reference:g.rects.reference,element:g.rects.popper,strategy:"absolute",placement:g.placement})}const w6={name:"popperOffsets",enabled:!0,phase:"read",fn:N4,data:{}};var h3={top:"auto",right:"auto",bottom:"auto",left:"auto"};function me(z){var g=z.x,y=z.y,A=window,E=A.devicePixelRatio||1;return{x:f(g*E)/E||0,y:f(y*E)/E||0}}function t4(z){var g,y=z.popper,A=z.popperRect,E=z.placement,j=z.variation,K=z.offsets,Q=z.position,X=z.gpuAcceleration,m2=z.adaptive,i2=z.roundOffsets,h1=z.isFixed,P1=i2===!0?me(K):typeof i2=="function"?i2(K):K,X2=P1.x,F2=X2===void 0?0:X2,p1=P1.y,E2=p1===void 0?0:p1,V1=K.hasOwnProperty("x"),d1=K.hasOwnProperty("y"),v1=O2,T2=z1,M1=window;if(m2){var g1=D1(y),H1="clientHeight",F1="clientWidth";if(g1===s(y)&&(g1=S(y),w(g1).position!=="static"&&Q==="absolute"&&(H1="scrollHeight",F1="scrollWidth")),g1=g1,E===z1||(E===O2||E===W2)&&j===L1){T2=u1;var s4=h1&&M1.visualViewport?M1.visualViewport.height:g1[H1];E2-=s4-A.height,E2*=X?1:-1}if(E===O2||(E===z1||E===u1)&&j===L1){v1=W2;var W1=h1&&M1.visualViewport?M1.visualViewport.width:g1[F1];F2-=W1-A.width,F2*=X?1:-1}}var G1=Object.assign({position:Q},m2&&h3);if(X){var o4;return Object.assign({},G1,(o4={},o4[T2]=d1?"0":"",o4[v1]=V1?"0":"",o4.transform=(M1.devicePixelRatio||1)<=1?"translate("+F2+"px, "+E2+"px)":"translate3d("+F2+"px, "+E2+"px, 0)",o4))}return Object.assign({},G1,(g={},g[T2]=d1?E2+"px":"",g[v1]=V1?F2+"px":"",g.transform="",g))}function C4(z){var g=z.state,y=z.options,A=y.gpuAcceleration,E=A===void 0?!0:A,j=y.adaptive,K=j===void 0?!0:j,Q=y.roundOffsets,X=Q===void 0?!0:Q,m2={placement:x2(g.placement),variation:N2(g.placement),popper:g.elements.popper,popperRect:g.rects.popper,gpuAcceleration:E,isFixed:g.options.strategy==="fixed"};g.modifiersData.popperOffsets!=null&&(g.styles.popper=Object.assign({},g.styles.popper,t4(Object.assign({},m2,{offsets:g.modifiersData.popperOffsets,position:g.options.strategy,adaptive:K,roundOffsets:X})))),g.modifiersData.arrow!=null&&(g.styles.arrow=Object.assign({},g.styles.arrow,t4(Object.assign({},m2,{offsets:g.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:X})))),g.attributes.popper=Object.assign({},g.attributes.popper,{"data-popper-placement":g.placement})}const x6={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:C4,data:{}};function Y5(z){var g=z.state;Object.keys(g.elements).forEach(function(y){var A=g.styles[y]||{},E=g.attributes[y]||{},j=g.elements[y];!n(j)||!L(j)||(Object.assign(j.style,A),Object.keys(E).forEach(function(K){var Q=E[K];Q===!1?j.removeAttribute(K):j.setAttribute(K,Q===!0?"":Q)}))})}function pe(z){var g=z.state,y={popper:{position:g.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(g.elements.popper.style,y.popper),g.styles=y,g.elements.arrow&&Object.assign(g.elements.arrow.style,y.arrow),function(){Object.keys(g.elements).forEach(function(A){var E=g.elements[A],j=g.attributes[A]||{},K=Object.keys(g.styles.hasOwnProperty(A)?g.styles[A]:y[A]),Q=K.reduce(function(X,m2){return X[m2]="",X},{});!n(E)||!L(E)||(Object.assign(E.style,Q),Object.keys(j).forEach(function(X){E.removeAttribute(X)}))})}}const $4={name:"applyStyles",enabled:!0,phase:"write",fn:Y5,effect:pe,requires:["computeStyles"]};function W3(z,g,y){var A=x2(z),E=[O2,z1].indexOf(A)>=0?-1:1,j=typeof y=="function"?y(Object.assign({},g,{placement:z})):y,K=j[0],Q=j[1];return K=K||0,Q=(Q||0)*E,[O2,W2].indexOf(A)>=0?{x:Q,y:K}:{x:K,y:Q}}function H0(z){var g=z.state,y=z.options,A=z.name,E=y.offset,j=E===void 0?[0,0]:E,K=Z.reduce(function(i2,h1){return i2[h1]=W3(h1,g.rects,j),i2},{}),Q=K[g.placement],X=Q.x,m2=Q.y;g.modifiersData.popperOffsets!=null&&(g.modifiersData.popperOffsets.x+=X,g.modifiersData.popperOffsets.y+=m2),g.modifiersData[A]=K}const ec={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:H0};var Q5={left:"right",right:"left",bottom:"top",top:"bottom"};function S6(z){return z.replace(/left|right|bottom|top/g,function(g){return Q5[g]})}var X5={start:"end",end:"start"};function cc(z){return z.replace(/start|end/g,function(g){return X5[g]})}function ve(z){var g=s(z),y=S(z),A=g.visualViewport,E=y.clientWidth,j=y.clientHeight,K=0,Q=0;return A&&(E=A.width,j=A.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(K=A.offsetLeft,Q=A.offsetTop)),{width:E,height:j,x:K+P(z),y:Q}}function J5(z){var g,y=S(z),A=p(z),E=(g=z.ownerDocument)==null?void 0:g.body,j=i(y.scrollWidth,y.clientWidth,E?E.scrollWidth:0,E?E.clientWidth:0),K=i(y.scrollHeight,y.clientHeight,E?E.scrollHeight:0,E?E.clientHeight:0),Q=-A.scrollLeft+P(z),X=-A.scrollTop;return w(E||y).direction==="rtl"&&(Q+=i(y.clientWidth,E?E.clientWidth:0)-j),{width:j,height:K,x:Q,y:X}}function z0(z,g){var y=g.getRootNode&&g.getRootNode();if(z.contains(g))return!0;if(y&&r(y)){var A=g;do{if(A&&z.isSameNode(A))return!0;A=A.parentNode||A.host}while(A)}return!1}function ge(z){return Object.assign({},z,{left:z.x,top:z.y,right:z.x+z.width,bottom:z.y+z.height})}function V0(z){var g=d(z);return g.top=g.top+z.clientTop,g.left=g.left+z.clientLeft,g.bottom=g.top+z.clientHeight,g.right=g.left+z.clientWidth,g.width=z.clientWidth,g.height=z.clientHeight,g.x=g.left,g.y=g.top,g}function M0(z,g){return g===a1?ge(ve(z)):a(g)?V0(g):ge(J5(S(z)))}function Z5(z){var g=V2(w2(z)),y=["absolute","fixed"].indexOf(w(z).position)>=0,A=y&&n(z)?D1(z):z;return a(A)?g.filter(function(E){return a(E)&&z0(E,A)&&L(E)!=="body"&&(y?w(E).position!=="static":!0)}):[]}function tc(z,g,y){var A=g==="clippingParents"?Z5(z):[].concat(g),E=[].concat(A,[y]),j=E[0],K=E.reduce(function(Q,X){var m2=M0(z,X);return Q.top=i(m2.top,Q.top),Q.right=o(m2.right,Q.right),Q.bottom=o(m2.bottom,Q.bottom),Q.left=i(m2.left,Q.left),Q},M0(z,j));return K.width=K.right-K.left,K.height=K.bottom-K.top,K.x=K.left,K.y=K.top,K}function C0(){return{top:0,right:0,bottom:0,left:0}}function G3(z){return Object.assign({},C0(),z)}function K3(z,g){return g.reduce(function(y,A){return y[A]=z,y},{})}function k6(z,g){g===void 0&&(g={});var y=g,A=y.placement,E=A===void 0?z.placement:A,j=y.boundary,K=j===void 0?q1:j,Q=y.rootBoundary,X=Q===void 0?a1:Q,m2=y.elementContext,i2=m2===void 0?M4:m2,h1=y.altBoundary,P1=h1===void 0?!1:h1,X2=y.padding,F2=X2===void 0?0:X2,p1=G3(typeof F2!="number"?F2:K3(F2,D2)),E2=i2===M4?k4:M4,V1=z.rects.popper,d1=z.elements[P1?E2:i2],v1=tc(a(d1)?d1:d1.contextElement||S(z.elements.popper),K,X),T2=d(z.elements.reference),M1=i4({reference:T2,element:V1,strategy:"absolute",placement:E}),g1=ge(Object.assign({},V1,M1)),H1=i2===M4?g1:T2,F1={top:v1.top-H1.top+p1.top,bottom:H1.bottom-v1.bottom+p1.bottom,left:v1.left-H1.left+p1.left,right:H1.right-v1.right+p1.right},s4=z.modifiersData.offset;if(i2===M4&&s4){var W1=s4[E];Object.keys(F1).forEach(function(G1){var o4=[W2,u1].indexOf(G1)>=0?1:-1,Q4=[z1,u1].indexOf(G1)>=0?"y":"x";F1[G1]+=W1[Q4]*o4})}return F1}function e7(z,g){g===void 0&&(g={});var y=g,A=y.placement,E=y.boundary,j=y.rootBoundary,K=y.padding,Q=y.flipVariations,X=y.allowedAutoPlacements,m2=X===void 0?Z:X,i2=N2(A),h1=i2?Q?I:I.filter(function(F2){return N2(F2)===i2}):D2,P1=h1.filter(function(F2){return m2.indexOf(F2)>=0});P1.length===0&&(P1=h1);var X2=P1.reduce(function(F2,p1){return F2[p1]=k6(z,{placement:p1,boundary:E,rootBoundary:j,padding:K})[x2(p1)],F2},{});return Object.keys(X2).sort(function(F2,p1){return X2[F2]-X2[p1]})}function sc(z){if(x2(z)===G2)return[];var g=S6(z);return[cc(z),g,cc(g)]}function ac(z){var g=z.state,y=z.options,A=z.name;if(!g.modifiersData[A]._skip){for(var E=y.mainAxis,j=E===void 0?!0:E,K=y.altAxis,Q=K===void 0?!0:K,X=y.fallbackPlacements,m2=y.padding,i2=y.boundary,h1=y.rootBoundary,P1=y.altBoundary,X2=y.flipVariations,F2=X2===void 0?!0:X2,p1=y.allowedAutoPlacements,E2=g.options.placement,V1=x2(E2),d1=V1===E2,v1=X||(d1||!F2?[S6(E2)]:sc(E2)),T2=[E2].concat(v1).reduce(function(w3,b4){return w3.concat(x2(b4)===G2?e7(g,{placement:b4,boundary:i2,rootBoundary:h1,padding:m2,flipVariations:F2,allowedAutoPlacements:p1}):b4)},[]),M1=g.rects.reference,g1=g.rects.popper,H1=new Map,F1=!0,s4=T2[0],W1=0;W1<T2.length;W1++){var G1=T2[W1],o4=x2(G1),Q4=N2(G1)===R1,Q3=[z1,u1].indexOf(o4)>=0,q4=Q3?"width":"height",y4=k6(g,{placement:G1,boundary:i2,rootBoundary:h1,altBoundary:P1,padding:m2}),I4=Q3?Q4?W2:O2:Q4?u1:z1;M1[q4]>g1[q4]&&(I4=S6(I4));var He=S6(I4),X4=[];if(j&&X4.push(y4[o4]<=0),Q&&X4.push(y4[I4]<=0,y4[He]<=0),X4.every(function(w3){return w3})){s4=G1,F1=!1;break}H1.set(G1,X4)}if(F1)for(var N6=F2?3:1,ze=function(b4){var A6=T2.find(function(Ve){var x3=H1.get(Ve);if(x3)return x3.slice(0,b4).every(function(Z3){return Z3})});if(A6)return s4=A6,"break"},X3=N6;X3>0;X3--){var J3=ze(X3);if(J3==="break")break}g.placement!==s4&&(g.modifiersData[A]._skip=!0,g.placement=s4,g.reset=!0)}}const y0={name:"flip",enabled:!0,phase:"main",fn:ac,requiresIfExists:["offset"],data:{_skip:!1}};function nc(z){return z==="x"?"y":"x"}function L3(z,g,y){return i(z,o(g,y))}function rc(z,g,y){var A=L3(z,g,y);return A>y?y:A}function Y3(z){var g=z.state,y=z.options,A=z.name,E=y.mainAxis,j=E===void 0?!0:E,K=y.altAxis,Q=K===void 0?!1:K,X=y.boundary,m2=y.rootBoundary,i2=y.altBoundary,h1=y.padding,P1=y.tether,X2=P1===void 0?!0:P1,F2=y.tetherOffset,p1=F2===void 0?0:F2,E2=k6(g,{boundary:X,rootBoundary:m2,padding:h1,altBoundary:i2}),V1=x2(g.placement),d1=N2(g.placement),v1=!d1,T2=n1(V1),M1=nc(T2),g1=g.modifiersData.popperOffsets,H1=g.rects.reference,F1=g.rects.popper,s4=typeof p1=="function"?p1(Object.assign({},g.rects,{placement:g.placement})):p1,W1=typeof s4=="number"?{mainAxis:s4,altAxis:s4}:Object.assign({mainAxis:0,altAxis:0},s4),G1=g.modifiersData.offset?g.modifiersData.offset[g.placement]:null,o4={x:0,y:0};if(!!g1){if(j){var Q4,Q3=T2==="y"?z1:O2,q4=T2==="y"?u1:W2,y4=T2==="y"?"height":"width",I4=g1[T2],He=I4+E2[Q3],X4=I4-E2[q4],N6=X2?-F1[y4]/2:0,ze=d1===R1?H1[y4]:F1[y4],X3=d1===R1?-F1[y4]:-H1[y4],J3=g.elements.arrow,w3=X2&&J3?n2(J3):{width:0,height:0},b4=g.modifiersData["arrow#persistent"]?g.modifiersData["arrow#persistent"].padding:C0(),A6=b4[Q3],Ve=b4[q4],x3=L3(0,H1[y4],w3[y4]),Z3=v1?H1[y4]/2-N6-x3-A6-W1.mainAxis:ze-x3-A6-W1.mainAxis,hc=v1?-H1[y4]/2+N6+x3+Ve+W1.mainAxis:X3+x3+Ve+W1.mainAxis,Me=g.elements.arrow&&D1(g.elements.arrow),dc=Me?T2==="y"?Me.clientTop||0:Me.clientLeft||0:0,w0=(Q4=G1==null?void 0:G1[T2])!=null?Q4:0,n7=I4+Z3-w0-dc,r7=I4+hc-w0,mc=L3(X2?o(He,n7):He,I4,X2?i(X4,r7):X4);g1[T2]=mc,o4[T2]=mc-I4}if(Q){var x0,pc=T2==="x"?z1:O2,vc=T2==="x"?u1:W2,h=g1[M1],l=M1==="y"?"height":"width",m=h+E2[pc],u=h-E2[vc],V=[z1,O2].indexOf(V1)!==-1,x=(x0=G1==null?void 0:G1[M1])!=null?x0:0,T=V?m:h-H1[l]-F1[l]-x+W1.altAxis,R=V?h+H1[l]+F1[l]-x-W1.altAxis:u,W=X2&&V?rc(T,h,R):L3(X2?T:m,h,X2?R:u);g1[M1]=W,o4[M1]=W-h}g.modifiersData[A]=o4}}const c7={name:"preventOverflow",enabled:!0,phase:"main",fn:Y3,requiresIfExists:["offset"]};var t7=function(g,y){return g=typeof g=="function"?g(Object.assign({},y.rects,{placement:y.placement})):g,G3(typeof g!="number"?g:K3(g,D2))};function s7(z){var g,y=z.state,A=z.name,E=z.options,j=y.elements.arrow,K=y.modifiersData.popperOffsets,Q=x2(y.placement),X=n1(Q),m2=[O2,W2].indexOf(Q)>=0,i2=m2?"height":"width";if(!(!j||!K)){var h1=t7(E.padding,y),P1=n2(j),X2=X==="y"?z1:O2,F2=X==="y"?u1:W2,p1=y.rects.reference[i2]+y.rects.reference[X]-K[X]-y.rects.popper[i2],E2=K[X]-y.rects.reference[X],V1=D1(j),d1=V1?X==="y"?V1.clientHeight||0:V1.clientWidth||0:0,v1=p1/2-E2/2,T2=h1[X2],M1=d1-P1[i2]-h1[F2],g1=d1/2-P1[i2]/2+v1,H1=L3(T2,g1,M1),F1=X;y.modifiersData[A]=(g={},g[F1]=H1,g.centerOffset=H1-g1,g)}}function ic(z){var g=z.state,y=z.options,A=y.element,E=A===void 0?"[data-popper-arrow]":A;E!=null&&(typeof E=="string"&&(E=g.elements.popper.querySelector(E),!E)||!z0(g.elements.popper,E)||(g.elements.arrow=E))}const oc={name:"arrow",enabled:!0,phase:"main",fn:s7,effect:ic,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function b0(z,g,y){return y===void 0&&(y={x:0,y:0}),{top:z.top-g.height-y.y,right:z.right-g.width+y.x,bottom:z.bottom-g.height+y.y,left:z.left-g.width-y.x}}function lc(z){return[z1,W2,u1,O2].some(function(g){return z[g]>=0})}function L0(z){var g=z.state,y=z.name,A=g.rects.reference,E=g.rects.popper,j=g.modifiersData.preventOverflow,K=k6(g,{elementContext:"reference"}),Q=k6(g,{altBoundary:!0}),X=b0(K,A),m2=b0(Q,E,j),i2=lc(X),h1=lc(m2);g.modifiersData[y]={referenceClippingOffsets:X,popperEscapeOffsets:m2,isReferenceHidden:i2,hasPopperEscaped:h1},g.attributes.popper=Object.assign({},g.attributes.popper,{"data-popper-reference-hidden":i2,"data-popper-escaped":h1})}var fc=[k2,w6,x6,$4,ec,y0,c7,oc,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:L0}],uc=t2({defaultModifiers:fc});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-dropdown-toggle]").forEach(function(z){const g=z.getAttribute("data-dropdown-toggle"),y=document.getElementById(g),A=z.getAttribute("data-dropdown-placement");z.addEventListener("click",function(E){for(var j=E.target;j.nodeName!=="BUTTON";)j=j.parentNode;uc(j,y,{placement:A||"bottom-start",modifiers:[{name:"offset",options:{offset:[0,10]}}]}),y.classList.toggle("hidden"),y.classList.toggle("block");function K(Q){var X=Q.target;X!==y&&X!==z&&!z.contains(X)&&(y.classList.add("hidden"),y.classList.remove("block"),document.body.removeEventListener("click",K,!0))}document.body.addEventListener("click",K,!0)})})}),t(454),t(508),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-tooltip-target]").forEach(function(z){const g=document.getElementById(z.getAttribute("data-tooltip-target")),y=z.getAttribute("data-tooltip-placement"),A=z.getAttribute("data-tooltip-trigger"),E=uc(z,g,{placement:y||"top",modifiers:[{name:"offset",options:{offset:[0,8]}}]});function j(){g.classList.remove("opacity-0"),g.classList.add("opacity-100"),g.classList.remove("invisible"),g.classList.add("visible"),E.setOptions(m2=>({...m2,modifiers:[...m2.modifiers,{name:"eventListeners",enabled:!0}]})),E.update()}function K(){g.classList.remove("opacity-100"),g.classList.add("opacity-0"),g.classList.remove("visible"),g.classList.add("invisible"),E.setOptions(m2=>({...m2,modifiers:[...m2.modifiers,{name:"eventListeners",enabled:!1}]}))}var Q=[],X=[];switch(A){case"hover":Q=["mouseenter","focus"],X=["mouseleave","blur"];break;case"click":Q=["click","focus"],X=["focusout","blur"];break;default:Q=["mouseenter","focus"],X=["mouseleave","blur"]}Q.forEach(m2=>{z.addEventListener(m2,j)}),X.forEach(m2=>{z.addEventListener(m2,K)})})})})()})();function Ko(c,e){var t=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),t.push.apply(t,s)}return t}function r2(c){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ko(Object(t),!0).forEach(function(s){c4(c,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(t)):Ko(Object(t)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(t,s))})}return c}function _t(c){return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(c)}function GT(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function Yo(c,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function KT(c,e,t){return e&&Yo(c.prototype,e),t&&Yo(c,t),Object.defineProperty(c,"prototype",{writable:!1}),c}function c4(c,e,t){return e in c?Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[e]=t,c}function bn(c,e){return QT(c)||JT(c,e)||Sh(c,e)||eP()}function W8(c){return YT(c)||XT(c)||Sh(c)||ZT()}function YT(c){if(Array.isArray(c))return Os(c)}function QT(c){if(Array.isArray(c))return c}function XT(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function JT(c,e){var t=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(t!=null){var s=[],a=!0,n=!1,r,i;try{for(t=t.call(c);!(a=(r=t.next()).done)&&(s.push(r.value),!(e&&s.length===e));a=!0);}catch(o){n=!0,i=o}finally{try{!a&&t.return!=null&&t.return()}finally{if(n)throw i}}return s}}function Sh(c,e){if(!!c){if(typeof c=="string")return Os(c,e);var t=Object.prototype.toString.call(c).slice(8,-1);if(t==="Object"&&c.constructor&&(t=c.constructor.name),t==="Map"||t==="Set")return Array.from(c);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Os(c,e)}}function Os(c,e){(e==null||e>c.length)&&(e=c.length);for(var t=0,s=new Array(e);t<e;t++)s[t]=c[t];return s}function ZT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qo=function(){},Ln={},kh={},Nh=null,Ah={mark:Qo,measure:Qo};try{typeof window<"u"&&(Ln=window),typeof document<"u"&&(kh=document),typeof MutationObserver<"u"&&(Nh=MutationObserver),typeof performance<"u"&&(Ah=performance)}catch{}var cP=Ln.navigator||{},Xo=cP.userAgent,Jo=Xo===void 0?"":Xo,V6=Ln,N1=kh,Zo=Nh,Ic=Ah;V6.document;var q3=!!N1.documentElement&&!!N1.head&&typeof N1.addEventListener=="function"&&typeof N1.createElement=="function",_h=~Jo.indexOf("MSIE")||~Jo.indexOf("Trident/"),Oc,Dc,Rc,Fc,Bc,F3="___FONT_AWESOME___",Ds=16,Eh="fa",Th="svg-inline--fa",le="data-fa-i2svg",Rs="data-fa-pseudo-element",tP="data-fa-pseudo-element-pending",wn="data-prefix",xn="data-icon",e9="fontawesome-i2svg",sP="async",aP=["HTML","HEAD","STYLE","SCRIPT"],Ph=function(){try{return!0}catch{return!1}}(),S1="classic",I1="sharp",Sn=[S1,I1];function G8(c){return new Proxy(c,{get:function(t,s){return s in t?t[s]:t[S1]}})}var V8=G8((Oc={},c4(Oc,S1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),c4(Oc,I1,{fa:"solid",fass:"solid","fa-solid":"solid"}),Oc)),M8=G8((Dc={},c4(Dc,S1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),c4(Dc,I1,{solid:"fass"}),Dc)),C8=G8((Rc={},c4(Rc,S1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),c4(Rc,I1,{fass:"fa-solid"}),Rc)),nP=G8((Fc={},c4(Fc,S1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),c4(Fc,I1,{"fa-solid":"fass"}),Fc)),rP=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ih="fa-layers-text",iP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oP=G8((Bc={},c4(Bc,S1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),c4(Bc,I1,{900:"fass"}),Bc)),Oh=[1,2,3,4,5,6,7,8,9,10],lP=Oh.concat([11,12,13,14,15,16,17,18,19,20]),fP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Y6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},y8=new Set;Object.keys(M8[S1]).map(y8.add.bind(y8));Object.keys(M8[I1]).map(y8.add.bind(y8));var uP=[].concat(Sn,W8(y8),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Y6.GROUP,Y6.SWAP_OPACITY,Y6.PRIMARY,Y6.SECONDARY]).concat(Oh.map(function(c){return"".concat(c,"x")})).concat(lP.map(function(c){return"w-".concat(c)})),Y0=V6.FontAwesomeConfig||{};function hP(c){var e=N1.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function dP(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(N1&&typeof N1.querySelector=="function"){var mP=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];mP.forEach(function(c){var e=bn(c,2),t=e[0],s=e[1],a=dP(hP(t));a!=null&&(Y0[s]=a)})}var Dh={styleDefault:"solid",familyDefault:"classic",cssPrefix:Eh,replacementClass:Th,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y0.familyPrefix&&(Y0.cssPrefix=Y0.familyPrefix);var r0=r2(r2({},Dh),Y0);r0.autoReplaceSvg||(r0.observeMutations=!1);var h2={};Object.keys(Dh).forEach(function(c){Object.defineProperty(h2,c,{enumerable:!0,set:function(t){r0[c]=t,Q0.forEach(function(s){return s(h2)})},get:function(){return r0[c]}})});Object.defineProperty(h2,"familyPrefix",{enumerable:!0,set:function(e){r0.cssPrefix=e,Q0.forEach(function(t){return t(h2)})},get:function(){return r0.cssPrefix}});V6.FontAwesomeConfig=h2;var Q0=[];function pP(c){return Q0.push(c),function(){Q0.splice(Q0.indexOf(c),1)}}var a6=Ds,H3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vP(c){if(!(!c||!q3)){var e=N1.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var t=N1.head.childNodes,s=null,a=t.length-1;a>-1;a--){var n=t[a],r=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(s=n)}return N1.head.insertBefore(e,s),c}}var gP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b8(){for(var c=12,e="";c-- >0;)e+=gP[Math.random()*62|0];return e}function g0(c){for(var e=[],t=(c||[]).length>>>0;t--;)e[t]=c[t];return e}function kn(c){return c.classList?g0(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Rh(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function HP(c){return Object.keys(c||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Rh(c[t]),'" ')},"").trim()}function S5(c){return Object.keys(c||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(c[t].trim(),";")},"")}function Nn(c){return c.size!==H3.size||c.x!==H3.x||c.y!==H3.y||c.rotate!==H3.rotate||c.flipX||c.flipY}function zP(c){var e=c.transform,t=c.containerWidth,s=c.iconWidth,a={transform:"translate(".concat(t/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(n," ").concat(r," ").concat(i)},f={transform:"translate(".concat(s/2*-1," -256)")};return{outer:a,inner:o,path:f}}function VP(c){var e=c.transform,t=c.width,s=t===void 0?Ds:t,a=c.height,n=a===void 0?Ds:a,r=c.startCentered,i=r===void 0?!1:r,o="";return i&&_h?o+="translate(".concat(e.x/a6-s/2,"em, ").concat(e.y/a6-n/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/a6,"em), calc(-50% + ").concat(e.y/a6,"em)) "):o+="translate(".concat(e.x/a6,"em, ").concat(e.y/a6,"em) "),o+="scale(".concat(e.size/a6*(e.flipX?-1:1),", ").concat(e.size/a6*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var MP=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fh(){var c=Eh,e=Th,t=h2.cssPrefix,s=h2.replacementClass,a=MP;if(t!==c||s!==e){var n=new RegExp("\\.".concat(c,"\\-"),"g"),r=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");a=a.replace(n,".".concat(t,"-")).replace(r,"--".concat(t,"-")).replace(i,".".concat(s))}return a}var c9=!1;function D7(){h2.autoAddCss&&!c9&&(vP(Fh()),c9=!0)}var CP={mixout:function(){return{dom:{css:Fh,insertCss:D7}}},hooks:function(){return{beforeDOMElementCreation:function(){D7()},beforeI2svg:function(){D7()}}}},B3=V6||{};B3[F3]||(B3[F3]={});B3[F3].styles||(B3[F3].styles={});B3[F3].hooks||(B3[F3].hooks={});B3[F3].shims||(B3[F3].shims=[]);var i3=B3[F3],Bh=[],yP=function c(){N1.removeEventListener("DOMContentLoaded",c),Et=1,Bh.map(function(e){return e()})},Et=!1;q3&&(Et=(N1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N1.readyState),Et||N1.addEventListener("DOMContentLoaded",yP));function bP(c){!q3||(Et?setTimeout(c,0):Bh.push(c))}function K8(c){var e=c.tag,t=c.attributes,s=t===void 0?{}:t,a=c.children,n=a===void 0?[]:a;return typeof c=="string"?Rh(c):"<".concat(e," ").concat(HP(s),">").concat(n.map(K8).join(""),"</").concat(e,">")}function t9(c,e,t){if(c&&c[e]&&c[e][t])return{prefix:e,iconName:t,icon:c[e][t]}}var LP=function(e,t){return function(s,a,n,r){return e.call(t,s,a,n,r)}},R7=function(e,t,s,a){var n=Object.keys(e),r=n.length,i=a!==void 0?LP(t,a):t,o,f,d;for(s===void 0?(o=1,d=e[n[0]]):(o=0,d=s);o<r;o++)f=n[o],d=i(d,e[f],f,e);return d};function wP(c){for(var e=[],t=0,s=c.length;t<s;){var a=c.charCodeAt(t++);if(a>=55296&&a<=56319&&t<s){var n=c.charCodeAt(t++);(n&64512)==56320?e.push(((a&1023)<<10)+(n&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function Fs(c){var e=wP(c);return e.length===1?e[0].toString(16):null}function xP(c,e){var t=c.length,s=c.charCodeAt(e),a;return s>=55296&&s<=56319&&t>e+1&&(a=c.charCodeAt(e+1),a>=56320&&a<=57343)?(s-55296)*1024+a-56320+65536:s}function s9(c){return Object.keys(c).reduce(function(e,t){var s=c[t],a=!!s.icon;return a?e[s.iconName]=s.icon:e[t]=s,e},{})}function Bs(c,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=t.skipHooks,a=s===void 0?!1:s,n=s9(e);typeof i3.hooks.addPack=="function"&&!a?i3.hooks.addPack(c,s9(e)):i3.styles[c]=r2(r2({},i3.styles[c]||{}),n),c==="fas"&&Bs("fa",e)}var Uc,jc,$c,Te=i3.styles,SP=i3.shims,kP=(Uc={},c4(Uc,S1,Object.values(C8[S1])),c4(Uc,I1,Object.values(C8[I1])),Uc),An=null,Uh={},jh={},$h={},qh={},Wh={},NP=(jc={},c4(jc,S1,Object.keys(V8[S1])),c4(jc,I1,Object.keys(V8[I1])),jc);function AP(c){return~uP.indexOf(c)}function _P(c,e){var t=e.split("-"),s=t[0],a=t.slice(1).join("-");return s===c&&a!==""&&!AP(a)?a:null}var Gh=function(){var e=function(n){return R7(Te,function(r,i,o){return r[o]=R7(i,n,{}),r},{})};Uh=e(function(a,n,r){if(n[3]&&(a[n[3]]=r),n[2]){var i=n[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){a[o.toString(16)]=r})}return a}),jh=e(function(a,n,r){if(a[r]=r,n[2]){var i=n[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){a[o]=r})}return a}),Wh=e(function(a,n,r){var i=n[2];return a[r]=r,i.forEach(function(o){a[o]=r}),a});var t="far"in Te||h2.autoFetchSvg,s=R7(SP,function(a,n){var r=n[0],i=n[1],o=n[2];return i==="far"&&!t&&(i="fas"),typeof r=="string"&&(a.names[r]={prefix:i,iconName:o}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});$h=s.names,qh=s.unicodes,An=k5(h2.styleDefault,{family:h2.familyDefault})};pP(function(c){An=k5(c.styleDefault,{family:h2.familyDefault})});Gh();function _n(c,e){return(Uh[c]||{})[e]}function EP(c,e){return(jh[c]||{})[e]}function Q6(c,e){return(Wh[c]||{})[e]}function Kh(c){return $h[c]||{prefix:null,iconName:null}}function TP(c){var e=qh[c],t=_n("fas",c);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function M6(){return An}var En=function(){return{prefix:null,iconName:null,rest:[]}};function k5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,s=t===void 0?S1:t,a=V8[s][c],n=M8[s][c]||M8[s][a],r=c in i3.styles?c:null;return n||r||null}var a9=($c={},c4($c,S1,Object.keys(C8[S1])),c4($c,I1,Object.keys(C8[I1])),$c);function N5(c){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.skipLookups,a=s===void 0?!1:s,n=(e={},c4(e,S1,"".concat(h2.cssPrefix,"-").concat(S1)),c4(e,I1,"".concat(h2.cssPrefix,"-").concat(I1)),e),r=null,i=S1;(c.includes(n[S1])||c.some(function(f){return a9[S1].includes(f)}))&&(i=S1),(c.includes(n[I1])||c.some(function(f){return a9[I1].includes(f)}))&&(i=I1);var o=c.reduce(function(f,d){var p=_P(h2.cssPrefix,d);if(Te[d]?(d=kP[i].includes(d)?nP[i][d]:d,r=d,f.prefix=d):NP[i].indexOf(d)>-1?(r=d,f.prefix=k5(d,{family:i})):p?f.iconName=p:d!==h2.replacementClass&&d!==n[S1]&&d!==n[I1]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var v=r==="fa"?Kh(f.iconName):{},M=Q6(f.prefix,f.iconName);v.prefix&&(r=null),f.iconName=v.iconName||M||f.iconName,f.prefix=v.prefix||f.prefix,f.prefix==="far"&&!Te.far&&Te.fas&&!h2.autoFetchSvg&&(f.prefix="fas")}return f},En());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===I1&&(Te.fass||h2.autoFetchSvg)&&(o.prefix="fass",o.iconName=Q6(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=M6()||"fas"),o}var PP=function(){function c(){GT(this,c),this.definitions={}}return KT(c,[{key:"add",value:function(){for(var t=this,s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];var r=a.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(i){t.definitions[i]=r2(r2({},t.definitions[i]||{}),r[i]),Bs(i,r[i]);var o=C8[S1][i];o&&Bs(o,r[i]),Gh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,s){var a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(function(n){var r=a[n],i=r.prefix,o=r.iconName,f=r.icon,d=f[2];t[i]||(t[i]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(t[i][p]=f)}),t[i][o]=f}),t}}]),c}(),n9=[],Pe={},$e={},IP=Object.keys($e);function OP(c,e){var t=e.mixoutsTo;return n9=c,Pe={},Object.keys($e).forEach(function(s){IP.indexOf(s)===-1&&delete $e[s]}),n9.forEach(function(s){var a=s.mixout?s.mixout():{};if(Object.keys(a).forEach(function(r){typeof a[r]=="function"&&(t[r]=a[r]),_t(a[r])==="object"&&Object.keys(a[r]).forEach(function(i){t[r]||(t[r]={}),t[r][i]=a[r][i]})}),s.hooks){var n=s.hooks();Object.keys(n).forEach(function(r){Pe[r]||(Pe[r]=[]),Pe[r].push(n[r])})}s.provides&&s.provides($e)}),t}function Us(c,e){for(var t=arguments.length,s=new Array(t>2?t-2:0),a=2;a<t;a++)s[a-2]=arguments[a];var n=Pe[c]||[];return n.forEach(function(r){e=r.apply(null,[e].concat(s))}),e}function fe(c){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];var a=Pe[c]||[];a.forEach(function(n){n.apply(null,t)})}function U3(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return $e[c]?$e[c].apply(null,e):void 0}function js(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,t=c.prefix||M6();if(!!e)return e=Q6(t,e)||e,t9(Yh.definitions,t,e)||t9(i3.styles,t,e)}var Yh=new PP,DP=function(){h2.autoReplaceSvg=!1,h2.observeMutations=!1,fe("noAuto")},RP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q3?(fe("beforeI2svg",e),U3("pseudoElements2svg",e),U3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;h2.autoReplaceSvg===!1&&(h2.autoReplaceSvg=!0),h2.observeMutations=!0,bP(function(){BP({autoReplaceSvgRoot:t}),fe("watch",e)})}},FP={icon:function(e){if(e===null)return null;if(_t(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q6(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=k5(e[0]);return{prefix:s,iconName:Q6(s,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(h2.cssPrefix,"-"))>-1||e.match(rP))){var a=N5(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||M6(),iconName:Q6(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var n=M6();return{prefix:n,iconName:Q6(n,e)||e}}}},j4={noAuto:DP,config:h2,dom:RP,parse:FP,library:Yh,findIconDefinition:js,toHtml:K8},BP=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,s=t===void 0?N1:t;(Object.keys(i3.styles).length>0||h2.autoFetchSvg)&&q3&&h2.autoReplaceSvg&&j4.dom.i2svg({node:s})};function A5(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return K8(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!q3){var s=N1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function UP(c){var e=c.children,t=c.main,s=c.mask,a=c.attributes,n=c.styles,r=c.transform;if(Nn(r)&&t.found&&!s.found){var i=t.width,o=t.height,f={x:i/o/2,y:.5};a.style=S5(r2(r2({},n),{},{"transform-origin":"".concat(f.x+r.x/16,"em ").concat(f.y+r.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function jP(c){var e=c.prefix,t=c.iconName,s=c.children,a=c.attributes,n=c.symbol,r=n===!0?"".concat(e,"-").concat(h2.cssPrefix,"-").concat(t):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:r2(r2({},a),{},{id:r}),children:s}]}]}function Tn(c){var e=c.icons,t=e.main,s=e.mask,a=c.prefix,n=c.iconName,r=c.transform,i=c.symbol,o=c.title,f=c.maskId,d=c.titleId,p=c.extra,v=c.watchable,M=v===void 0?!1:v,L=s.found?s:t,S=L.width,P=L.height,w=a==="fak",N=[h2.replacementClass,n?"".concat(h2.cssPrefix,"-").concat(n):""].filter(function(s1){return p.classes.indexOf(s1)===-1}).filter(function(s1){return s1!==""||!!s1}).concat(p.classes).join(" "),B={children:[],attributes:r2(r2({},p.attributes),{},{"data-prefix":a,"data-icon":n,class:N,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(P)})},c2=w&&!~p.classes.indexOf("fa-fw")?{width:"".concat(S/P*16*.0625,"em")}:{};M&&(B.attributes[le]=""),o&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(d||b8())},children:[o]}),delete B.attributes.title);var n2=r2(r2({},B),{},{prefix:a,iconName:n,main:t,mask:s,maskId:f,transform:r,symbol:i,styles:r2(r2({},c2),p.styles)}),w2=s.found&&t.found?U3("generateAbstractMask",n2)||{children:[],attributes:{}}:U3("generateAbstractIcon",n2)||{children:[],attributes:{}},g2=w2.children,V2=w2.attributes;return n2.children=g2,n2.attributes=V2,i?jP(n2):UP(n2)}function r9(c){var e=c.content,t=c.width,s=c.height,a=c.transform,n=c.title,r=c.extra,i=c.watchable,o=i===void 0?!1:i,f=r2(r2(r2({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")});o&&(f[le]="");var d=r2({},r.styles);Nn(a)&&(d.transform=VP({transform:a,startCentered:!0,width:t,height:s}),d["-webkit-transform"]=d.transform);var p=S5(d);p.length>0&&(f.style=p);var v=[];return v.push({tag:"span",attributes:f,children:[e]}),n&&v.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),v}function $P(c){var e=c.content,t=c.title,s=c.extra,a=r2(r2(r2({},s.attributes),t?{title:t}:{}),{},{class:s.classes.join(" ")}),n=S5(s.styles);n.length>0&&(a.style=n);var r=[];return r.push({tag:"span",attributes:a,children:[e]}),t&&r.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),r}var F7=i3.styles;function $s(c){var e=c[0],t=c[1],s=c.slice(4),a=bn(s,1),n=a[0],r=null;return Array.isArray(n)?r={tag:"g",attributes:{class:"".concat(h2.cssPrefix,"-").concat(Y6.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h2.cssPrefix,"-").concat(Y6.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(h2.cssPrefix,"-").concat(Y6.PRIMARY),fill:"currentColor",d:n[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:t,icon:r}}var qP={found:!1,width:512,height:512};function WP(c,e){!Ph&&!h2.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function qs(c,e){var t=e;return e==="fa"&&h2.styleDefault!==null&&(e=M6()),new Promise(function(s,a){if(U3("missingIconAbstract"),t==="fa"){var n=Kh(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&F7[e]&&F7[e][c]){var r=F7[e][c];return s($s(r))}WP(c,e),s(r2(r2({},qP),{},{icon:h2.showMissingIcons&&c?U3("missingIconAbstract")||{}:{}}))})}var i9=function(){},Ws=h2.measurePerformance&&Ic&&Ic.mark&&Ic.measure?Ic:{mark:i9,measure:i9},O0='FA "6.2.1"',GP=function(e){return Ws.mark("".concat(O0," ").concat(e," begins")),function(){return Qh(e)}},Qh=function(e){Ws.mark("".concat(O0," ").concat(e," ends")),Ws.measure("".concat(O0," ").concat(e),"".concat(O0," ").concat(e," begins"),"".concat(O0," ").concat(e," ends"))},Pn={begin:GP,end:Qh},ct=function(){};function o9(c){var e=c.getAttribute?c.getAttribute(le):null;return typeof e=="string"}function KP(c){var e=c.getAttribute?c.getAttribute(wn):null,t=c.getAttribute?c.getAttribute(xn):null;return e&&t}function YP(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h2.replacementClass)}function QP(){if(h2.autoReplaceSvg===!0)return tt.replace;var c=tt[h2.autoReplaceSvg];return c||tt.replace}function XP(c){return N1.createElementNS("http://www.w3.org/2000/svg",c)}function JP(c){return N1.createElement(c)}function Xh(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,s=t===void 0?c.tag==="svg"?XP:JP:t;if(typeof c=="string")return N1.createTextNode(c);var a=s(c.tag);Object.keys(c.attributes||[]).forEach(function(r){a.setAttribute(r,c.attributes[r])});var n=c.children||[];return n.forEach(function(r){a.appendChild(Xh(r,{ceFn:s}))}),a}function ZP(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var tt={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(a){t.parentNode.insertBefore(Xh(a),t)}),t.getAttribute(le)===null&&h2.keepOriginalSource){var s=N1.createComment(ZP(t));t.parentNode.replaceChild(s,t)}else t.remove()},nest:function(e){var t=e[0],s=e[1];if(~kn(t).indexOf(h2.replacementClass))return tt.replace(e);var a=new RegExp("".concat(h2.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var n=s[0].attributes.class.split(" ").reduce(function(i,o){return o===h2.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",n.toNode.join(" "))}var r=s.map(function(i){return K8(i)}).join(`
`);t.setAttribute(le,""),t.innerHTML=r}};function l9(c){c()}function Jh(c,e){var t=typeof e=="function"?e:ct;if(c.length===0)t();else{var s=l9;h2.mutateApproach===sP&&(s=V6.requestAnimationFrame||l9),s(function(){var a=QP(),n=Pn.begin("mutate");c.map(a),n(),t()})}}var In=!1;function Zh(){In=!0}function Gs(){In=!1}var Tt=null;function f9(c){if(!!Zo&&!!h2.observeMutations){var e=c.treeCallback,t=e===void 0?ct:e,s=c.nodeCallback,a=s===void 0?ct:s,n=c.pseudoElementsCallback,r=n===void 0?ct:n,i=c.observeMutationsRoot,o=i===void 0?N1:i;Tt=new Zo(function(f){if(!In){var d=M6();g0(f).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!o9(p.addedNodes[0])&&(h2.searchPseudoElements&&r(p.target),t(p.target)),p.type==="attributes"&&p.target.parentNode&&h2.searchPseudoElements&&r(p.target.parentNode),p.type==="attributes"&&o9(p.target)&&~fP.indexOf(p.attributeName))if(p.attributeName==="class"&&KP(p.target)){var v=N5(kn(p.target)),M=v.prefix,L=v.iconName;p.target.setAttribute(wn,M||d),L&&p.target.setAttribute(xn,L)}else YP(p.target)&&a(p.target)})}}),q3&&Tt.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eI(){!Tt||Tt.disconnect()}function cI(c){var e=c.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(s,a){var n=a.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(s[r]=i.join(":").trim()),s},{})),t}function tI(c){var e=c.getAttribute("data-prefix"),t=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",a=N5(kn(c));return a.prefix||(a.prefix=M6()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&s.length>0&&(a.iconName=EP(a.prefix,c.innerText)||_n(a.prefix,Fs(c.innerText))),!a.iconName&&h2.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function sI(c){var e=g0(c.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{}),t=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return h2.autoA11y&&(t?e["aria-labelledby"]="".concat(h2.replacementClass,"-title-").concat(s||b8()):(e["aria-hidden"]="true",e.focusable="false")),e}function aI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function u9(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=tI(c),s=t.iconName,a=t.prefix,n=t.rest,r=sI(c),i=Us("parseNodeAttributes",{},c),o=e.styleParser?cI(c):[];return r2({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:H3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:r}},i)}var nI=i3.styles;function ed(c){var e=h2.autoReplaceSvg==="nest"?u9(c,{styleParser:!1}):u9(c);return~e.extra.classes.indexOf(Ih)?U3("generateLayersText",c,e):U3("generateSvgReplacementMutation",c,e)}var C6=new Set;Sn.map(function(c){C6.add("fa-".concat(c))});Object.keys(V8[S1]).map(C6.add.bind(C6));Object.keys(V8[I1]).map(C6.add.bind(C6));C6=W8(C6);function h9(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q3)return Promise.resolve();var t=N1.documentElement.classList,s=function(p){return t.add("".concat(e9,"-").concat(p))},a=function(p){return t.remove("".concat(e9,"-").concat(p))},n=h2.autoFetchSvg?C6:Sn.map(function(d){return"fa-".concat(d)}).concat(Object.keys(nI));n.includes("fa")||n.push("fa");var r=[".".concat(Ih,":not([").concat(le,"])")].concat(n.map(function(d){return".".concat(d,":not([").concat(le,"])")})).join(", ");if(r.length===0)return Promise.resolve();var i=[];try{i=g0(c.querySelectorAll(r))}catch{}if(i.length>0)s("pending"),a("complete");else return Promise.resolve();var o=Pn.begin("onTree"),f=i.reduce(function(d,p){try{var v=ed(p);v&&d.push(v)}catch(M){Ph||M.name==="MissingIcon"&&console.error(M)}return d},[]);return new Promise(function(d,p){Promise.all(f).then(function(v){Jh(v,function(){s("active"),s("complete"),a("pending"),typeof e=="function"&&e(),o(),d()})}).catch(function(v){o(),p(v)})})}function rI(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ed(c).then(function(t){t&&Jh([t],e)})}function iI(c){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:js(e||{}),a=t.mask;return a&&(a=(a||{}).icon?a:js(a||{})),c(s,r2(r2({},t),{},{mask:a}))}}var oI=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.transform,a=s===void 0?H3:s,n=t.symbol,r=n===void 0?!1:n,i=t.mask,o=i===void 0?null:i,f=t.maskId,d=f===void 0?null:f,p=t.title,v=p===void 0?null:p,M=t.titleId,L=M===void 0?null:M,S=t.classes,P=S===void 0?[]:S,w=t.attributes,N=w===void 0?{}:w,B=t.styles,c2=B===void 0?{}:B;if(!!e){var n2=e.prefix,w2=e.iconName,g2=e.icon;return A5(r2({type:"icon"},e),function(){return fe("beforeDOMElementCreation",{iconDefinition:e,params:t}),h2.autoA11y&&(v?N["aria-labelledby"]="".concat(h2.replacementClass,"-title-").concat(L||b8()):(N["aria-hidden"]="true",N.focusable="false")),Tn({icons:{main:$s(g2),mask:o?$s(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:n2,iconName:w2,transform:r2(r2({},H3),a),symbol:r,title:v,maskId:d,titleId:L,extra:{attributes:N,styles:c2,classes:P}})})}},lI={mixout:function(){return{icon:iI(oI)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=h9,t.nodeCallback=rI,t}}},provides:function(e){e.i2svg=function(t){var s=t.node,a=s===void 0?N1:s,n=t.callback,r=n===void 0?function(){}:n;return h9(a,r)},e.generateSvgReplacementMutation=function(t,s){var a=s.iconName,n=s.title,r=s.titleId,i=s.prefix,o=s.transform,f=s.symbol,d=s.mask,p=s.maskId,v=s.extra;return new Promise(function(M,L){Promise.all([qs(a,i),d.iconName?qs(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var P=bn(S,2),w=P[0],N=P[1];M([t,Tn({icons:{main:w,mask:N},prefix:i,iconName:a,transform:o,symbol:f,maskId:p,title:n,titleId:r,extra:v,watchable:!0})])}).catch(L)})},e.generateAbstractIcon=function(t){var s=t.children,a=t.attributes,n=t.main,r=t.transform,i=t.styles,o=S5(i);o.length>0&&(a.style=o);var f;return Nn(r)&&(f=U3("generateAbstractTransformGrouping",{main:n,transform:r,containerWidth:n.width,iconWidth:n.width})),s.push(f||n.icon),{children:s,attributes:a}}}},fI={mixout:function(){return{layer:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.classes,n=a===void 0?[]:a;return A5({type:"layer"},function(){fe("beforeDOMElementCreation",{assembler:t,params:s});var r=[];return t(function(i){Array.isArray(i)?i.map(function(o){r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(h2.cssPrefix,"-layers")].concat(W8(n)).join(" ")},children:r}]})}}}},uI={mixout:function(){return{counter:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.title,n=a===void 0?null:a,r=s.classes,i=r===void 0?[]:r,o=s.attributes,f=o===void 0?{}:o,d=s.styles,p=d===void 0?{}:d;return A5({type:"counter",content:t},function(){return fe("beforeDOMElementCreation",{content:t,params:s}),$P({content:t.toString(),title:n,extra:{attributes:f,styles:p,classes:["".concat(h2.cssPrefix,"-layers-counter")].concat(W8(i))}})})}}}},hI={mixout:function(){return{text:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.transform,n=a===void 0?H3:a,r=s.title,i=r===void 0?null:r,o=s.classes,f=o===void 0?[]:o,d=s.attributes,p=d===void 0?{}:d,v=s.styles,M=v===void 0?{}:v;return A5({type:"text",content:t},function(){return fe("beforeDOMElementCreation",{content:t,params:s}),r9({content:t,transform:r2(r2({},H3),n),title:i,extra:{attributes:p,styles:M,classes:["".concat(h2.cssPrefix,"-layers-text")].concat(W8(f))}})})}}},provides:function(e){e.generateLayersText=function(t,s){var a=s.title,n=s.transform,r=s.extra,i=null,o=null;if(_h){var f=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();i=d.width/f,o=d.height/f}return h2.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,r9({content:t.innerHTML,width:i,height:o,transform:n,title:a,extra:r,watchable:!0})])}}},dI=new RegExp('"',"ug"),d9=[1105920,1112319];function mI(c){var e=c.replace(dI,""),t=xP(e,0),s=t>=d9[0]&&t<=d9[1],a=e.length===2?e[0]===e[1]:!1;return{value:Fs(a?e[0]:e),isSecondary:s||a}}function m9(c,e){var t="".concat(tP).concat(e.replace(":","-"));return new Promise(function(s,a){if(c.getAttribute(t)!==null)return s();var n=g0(c.children),r=n.filter(function(g2){return g2.getAttribute(Rs)===e})[0],i=V6.getComputedStyle(c,e),o=i.getPropertyValue("font-family").match(iP),f=i.getPropertyValue("font-weight"),d=i.getPropertyValue("content");if(r&&!o)return c.removeChild(r),s();if(o&&d!=="none"&&d!==""){var p=i.getPropertyValue("content"),v=~["Sharp"].indexOf(o[2])?I1:S1,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?M8[v][o[2].toLowerCase()]:oP[v][f],L=mI(p),S=L.value,P=L.isSecondary,w=o[0].startsWith("FontAwesome"),N=_n(M,S),B=N;if(w){var c2=TP(S);c2.iconName&&c2.prefix&&(N=c2.iconName,M=c2.prefix)}if(N&&!P&&(!r||r.getAttribute(wn)!==M||r.getAttribute(xn)!==B)){c.setAttribute(t,B),r&&c.removeChild(r);var n2=aI(),w2=n2.extra;w2.attributes[Rs]=e,qs(N,M).then(function(g2){var V2=Tn(r2(r2({},n2),{},{icons:{main:g2,mask:En()},prefix:M,iconName:B,extra:w2,watchable:!0})),s1=N1.createElement("svg");e==="::before"?c.insertBefore(s1,c.firstChild):c.appendChild(s1),s1.outerHTML=V2.map(function(A1){return K8(A1)}).join(`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r52=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},SV={exports:{}};(function(c){(function(e){var t=function(w,N,B){if(!f(N)||p(N)||v(N)||M(N)||o(N))return N;var c2,n2=0,w2=0;if(d(N))for(c2=[],w2=N.length;n2<w2;n2++)c2.push(t(w,N[n2],B));else{c2={};for(var g2 in N)Object.prototype.hasOwnProperty.call(N,g2)&&(c2[w(g2,B)]=t(w,N[g2],B))}return c2},s=function(w,N){N=N||{};var B=N.separator||"_",c2=N.split||/(?=[A-Z])/;return w.split(c2).join(B)},a=function(w){return L(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(N,B){return B?B.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},n=function(w){var N=a(w);return N.substr(0,1).toUpperCase()+N.substr(1)},r=function(w,N){return s(w,N).toLowerCase()},i=Object.prototype.toString,o=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},d=function(w){return i.call(w)=="[object Array]"},p=function(w){return i.call(w)=="[object Date]"},v=function(w){return i.call(w)=="[object RegExp]"},M=function(w){return i.call(w)=="[object Boolean]"},L=function(w){return w=w-0,w===w},S=function(w,N){var B=N&&"process"in N?N.process:N;return typeof B!="function"?w:function(c2,n2){return B(c2,w,n2)}},P={camelize:a,decamelize:r,pascalize:n,depascalize:r,camelizeKeys:function(w,N){return t(S(a,N),w)},decamelizeKeys:function(w,N){return t(S(r,N),w,N)},pascalizeKeys:function(w,N){return t(S(n,N),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=P:e.humps=P})(r52)})(SV);var i52=SV.exports,o52=["class","style"];function l52(c){return c.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var s=t.indexOf(":"),a=i52.camelize(t.slice(0,s)),n=t.slice(s+1).trim();return e[a]=n,e},{})}function f52(c){return c.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function kr(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var s=(c.children||[]).map(function(o){return kr(o)}),a=Object.keys(c.attributes||{}).reduce(function(o,f){var d=c.attributes[f];switch(f){case"class":o.class=f52(d);break;case"style":o.style=l52(d);break;default:o.attrs[f]=d}return o},{attrs:{},class:{},style:{}});t.class;var n=t.style,r=n===void 0?{}:n,i=c52(t,o52);return Yt(c.tag,a3(a3(a3({},e),{},{class:a.class,style:a3(a3({},a.style),r)},a.attrs),i),s)}var kV=!1;try{kV=!0}catch{}function u52(){if(!kV&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function X0(c,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?E4({},c,e):{}}function h52(c){var e,t=(e={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},E4(e,"fa-".concat(c.size),c.size!==null),E4(e,"fa-rotate-".concat(c.rotation),c.rotation!==null),E4(e,"fa-pull-".concat(c.pull),c.pull!==null),E4(e,"fa-swap-opacity",c.swapOpacity),E4(e,"fa-bounce",c.bounce),E4(e,"fa-shake",c.shake),E4(e,"fa-beat",c.beat),E4(e,"fa-fade",c.fade),E4(e,"fa-beat-fade",c.beatFade),E4(e,"fa-flash",c.flash),E4(e,"fa-spin-pulse",c.spinPulse),E4(e,"fa-spin-reverse",c.spinReverse),e);return Object.keys(t).map(function(s){return t[s]?s:null}).filter(function(s){return s})}function V9(c){if(c&&It(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(Pt.icon)return Pt.icon(c);if(c===null)return null;if(It(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var d52=w8({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var s=t.attrs,a=E1(function(){return V9(e.icon)}),n=E1(function(){return X0("classes",h52(e))}),r=E1(function(){return X0("transform",typeof e.transform=="string"?Pt.transform(e.transform):e.transform)}),i=E1(function(){return X0("mask",V9(e.mask))}),o=E1(function(){return wI(a.value,a3(a3(a3(a3({},n.value),r.value),i.value),{},{symbol:e.symbol,title:e.title}))});Fe(o,function(d){if(!d)return u52("Could not find one or more icon(s)",a.value,i.value)},{immediate:!0});var f=E1(function(){return o.value?kr(o.value.abstract[0],{},s):null});return function(){return f.value}}});w8({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var s=t.slots,a=cd.familyPrefix,n=E1(function(){return["".concat(a,"-layers")].concat(Ks(e.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Yt("div",{class:n.value},s.default?s.default():[])}}});w8({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var s=t.attrs,a=cd.familyPrefix,n=E1(function(){return X0("classes",[].concat(Ks(e.counter?["".concat(a,"-layers-counter")]:[]),Ks(e.position?["".concat(a,"-layers-").concat(e.position)]:[])))}),r=E1(function(){return X0("transform",typeof e.transform=="string"?Pt.transform(e.transform):e.transform)}),i=E1(function(){var f=xI(e.value.toString(),a3(a3({},r.value),n.value)),d=f.abstract;return e.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),o=E1(function(){return kr(i.value,{},s)});return function(){return o.value}}});LI.add(Zt2);const K5=ay(UE);K5.component("font-awesome-icon",d52);K5.use(iy());K5.use(WT);K5.mount("#app");