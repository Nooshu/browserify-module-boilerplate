'use strict';

module.exports = {
    dist: {
        bsFiles: {
            src: [
                '<%= app.dist %>/index.html'
            ]
        },
        options: {
            watchTask: false,
            ui: {
                port: 3000,
                weinre: {
                    port: 3001
                }
            },
            server: {
                baseDir: '<%= app.dist %>/'
            },
            snippetOptions: {
                rule: {
                    match: /<\/body>/i,
                    fn: function( snippet, match ) {
                        return snippet + match;
                    }
                }
            }
        }
    }
};