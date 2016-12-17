// other example of the module pattern
// import * as _ from 'lodash'; // grab everything from lodash, assign to _
// import { extend, uniq } from 'lodash'; // grab only extend, uniq from lodash

// pull in everything from the sample module using a path
import * as moduleName from './modules/sample-module';
// pull in single variable from a module using browserify alias (browserify.js)
import { uniqueArray } from 'sample-module-2';

// start the module, pass any options we need
moduleName.init({exampleSetting: 'String Value'});

// use a specific method in the module
const addResult = moduleName.add( 5, 6 );
const minusResult = moduleName.minus( 10, 10 );

// results from module 1
console.log( addResult, minusResult );
// results from module 2
console.log( uniqueArray );
