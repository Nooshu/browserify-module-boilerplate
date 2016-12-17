// Module
import * as Module from '../sample-module.js';
import { expect } from 'chai';

// Suite
describe( 'Sample module 1', function () {
    let $;

    before( function () {
        $ = require( 'jquery' );
    } );

    // Test
    it( 'is available', function () {
        expect( Module ).to.not.equal( null );
    } );

    it( 'is setup correctly', function () {
        const result = Module.moduleSetup;
        expect( result.moduleDefaults ).to.be.a( 'object' );
        expect( result.$el ).to.be.a( 'string' );
        expect( result.moduleSettings ).to.be.a( 'string' );
    } );

    it( 'throws an error if an object isn\'t passed to init', function () {
        const fn = () => Module.init( '' );

        expect( Module.init ).to.not.equal( null );
        expect( fn ).to.throw( Error, 'Options requires an object as an argument!' );
    } );

    it( 'has has a working add method', function () {
        expect( Module.add ).to.not.equal( null );
        expect( Module.add( 2, 3 ) ).to.equal( 5 );
    } );

    it( 'has has a working minus method', function () {
        expect( Module.minus ).to.not.equal( null );
        expect( Module.minus( 10, 14 ) ).to.equal( -4 );
    } );

} );
