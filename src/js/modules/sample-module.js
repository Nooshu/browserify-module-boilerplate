// External Library
import $ from 'jquery';
import { extend } from 'lodash';

// Private variables
const moduleDefaults = {
    selector: '[data-behavior="js-module-hook"]',
    states: {
        active: 'active'
    }
};

// using let as these variables will be reassigned
let $el = '';
let moduleSettings = '';

// externally available methods
export const init = function ( options ) {
    if ( typeof options !== 'object' ) { throw Error( 'Options requires an object as an argument!' ); }
    
    // example of using the extend method from lodash
    moduleSettings = extend( {}, moduleDefaults, options );
    $el = $( moduleSettings.selector );

    bindEvents();
};

// standard exported method
export const add = function ( a, b ) {
    return a + b;
};

// standard export as an arrow function
export const minus = ( a, b ) => a - b;

// internal only methods
const bindEvents = function () {
    $el.on( 'click', function () {
        $( this ).toggleClass( moduleDefaults.states.active );
    } );
};

// export object with some internal module settings
// Shorthand property names (ES6)
export const moduleSetup = {
    moduleDefaults,
    $el,
    moduleSettings
};

