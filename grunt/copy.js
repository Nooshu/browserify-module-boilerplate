'use strict';
module.exports = {
    jquery: {
        src: [ '<%= app.node %>/jquery/dist/jquery.min.js' ],
        dest: '<%= app.dist %>/js/lib/jquery.min.js'
    },
    html: {
        src: [ '<%= app.base %>/index.html' ],
        dest: '<%= app.dist %>/index.html'
    }
};