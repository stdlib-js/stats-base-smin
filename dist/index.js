"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(A,f){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-assert-is-negative-zerof/dist');function R(e,r,a,o){var n,t,i,u;if(e<=0)return NaN;if(e===1||a===0)return r[o];for(t=o,n=r[t],u=1;u<e;u++){if(t+=a,i=r[t],x(i))return i;(i<n||i===n&&l(i))&&(n=i)}return n}f.exports=R
});var c=s(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),g=v();function E(e,r,a){return g(e,r,a,_(e,a))}m.exports=E
});var d=s(function(C,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),Z=v();O(p,"ndarray",Z);y.exports=p
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=d(),q,j=h(b(__dirname,"./native.js"));k(j)?q=w:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
