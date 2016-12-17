import * as Module from '../sample-module-2.js';
import { expect } from 'chai';

// Suite
describe( 'Sample module 2', function () {

    // Test
    it( 'is available', function () {
        expect( Module ).to.not.equal( null );
    } );

    it( 'returns an array uniqueArray', function () {
        expect( Module.uniqueArray ).to.be.a( 'array' );
    } );

} );
