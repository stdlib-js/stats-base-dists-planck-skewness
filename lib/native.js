/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the skewness of a Planck distribution.
*
* @private
* @param {PositiveNumber} lambda - shape parameter
* @returns {PositiveNumber} skewness
*
* @example
* var v = skewness( 0.1 );
* // returns ~2.0025
*
* @example
* var v = skewness( 1.5 );
* // returns ~2.5894
*
* @example
* var v = skewness( -1.1 );
* // returns NaN
*
* @example
* var v = skewness( NaN );
* // returns NaN
*/
function skewness( lambda ) {
	return addon( lambda );
}


// EXPORTS //

module.exports = skewness;
