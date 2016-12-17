'use strict';

module.exports = function( grunt ) {

    var path = require( 'path' ),

        options = {
            configPath: path.join( process.cwd(), 'grunt' ),
            init: true,
            data: {
                pkg: grunt.file.readJSON( 'package.json' ),
                app: {
                    base: 'src',
                    dist: 'dist',
                    node: 'node_modules',
                    js: '<%= app.base %>/js',
                },
                distdir: '<%= app.dist %>'
            },
            jitGrunt: {
                staticMappings: {}
            }
        };

    //Grunt config
    require( 'load-grunt-config' )( grunt, options );
    
    grunt.registerTask( 'default', [
        'clean:build',
        'copy',
        'browserify',
        'browserSync'
    ] );
    
};
