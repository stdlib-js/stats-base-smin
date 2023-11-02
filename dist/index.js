"use strict";var s=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var q=s(function(z,o){
var g=require('@stdlib/math-base-assert-is-nanf/dist'),x=require('@stdlib/math-base-assert-is-negative-zerof/dist');function R(n,r,v){var u,i,e,a;if(n<=0)return NaN;if(n===1||v===0)return r[0];for(v<0?i=(1-n)*v:i=0,u=r[i],a=1;a<n;a++){if(i+=v,e=r[i],g(e))return e;(e<u||e===u&&x(e))&&(u=e)}return u}o.exports=R
});var c=s(function(A,m){
var Z=require('@stdlib/math-base-assert-is-nanf/dist'),_=require('@stdlib/math-base-assert-is-negative-zerof/dist');function E(n,r,v,u){var i,e,a,t;if(n<=0)return NaN;if(n===1||v===0)return r[u];for(e=u,i=r[e],t=1;t<n;t++){if(e+=v,a=r[e],Z(a))return a;(a<i||a===i&&_(a))&&(i=a)}return i}m.exports=E
});var j=s(function(B,y){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),O=c();N(p,"ndarray",O);y.exports=p
});var b=require("path").join,d=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=j(),f,l=d(b(__dirname,"./native.js"));h(l)?f=k:f=l;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
