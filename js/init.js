requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery',
        backbone: 'lib/backbone',
        underscore: 'lib/underscore',
        handlebars: 'lib/handlebars',
        text: 'lib/requireText',
        templates: '../templates'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['backbone', 'handlebars', 'text'], function (backbone, handlebars, text) {
    require(['router'], function(router) {
        window.router = router;
        Backbone.history.start();
    });
});
