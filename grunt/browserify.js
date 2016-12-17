'use strict';

module.exports = {
    options: {
        alias: {
            'sample-module-2': './<%= app.js %>/modules/sample-module-2'
        },
        transform: [
            'babelify',
            'browserify-shim'
        ]
    },
    dev: {
        files: {
            '<%= app.dist %>/js/bundle.js': '<%= app.js %>/index.js'
        }
    }
};
