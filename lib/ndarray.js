/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var isNegativeZerof = require( '@stdlib/math-base-assert-is-negative-zerof' );


// MAIN //

/**
* Computes the minimum value of a single-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} minimum value
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var floor = require( '@stdlib/math-base-special-floor' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var N = floor( x.length / 2 );
*
* var v = smin( N, x, 2, 1 );
* // returns -2.0
*/
function smin( N, x, stride, offset ) {
	var min;
	var ix;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return x[ offset ];
	}
	ix = offset;
	min = x[ ix ];
	for ( i = 1; i < N; i++ ) {
		ix += stride;
		v = x[ ix ];
		if ( isnanf( v ) ) {
			return v;
		}
		if ( v < min || ( v === min && isNegativeZerof( v ) ) ) {
			min = v;
		}
	}
	return min;
}


// EXPORTS //

module.exports = smin;
