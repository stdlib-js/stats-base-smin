// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@v0.1.0-esm/index.mjs";function n(r,n,s){var i,a,d,f;if(r<=0)return NaN;if(1===r||0===s)return n[0];for(i=n[a=s<0?(1-r)*s:0],f=1;f<r;f++){if(d=n[a+=s],e(d))return d;(d<i||d===i&&t(d))&&(i=d)}return i}function s(r,n,s,i){var a,d,f,m;if(r<=0)return NaN;if(1===r||0===s)return n[i];for(a=n[d=i],m=1;m<r;m++){if(f=n[d+=s],e(f))return f;(f<a||f===a&&t(f))&&(a=f)}return a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
