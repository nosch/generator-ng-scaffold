// Karma configuration: Unit Tests
// Generated on Mon Aug 19 2013 10:31:57 GMT+0200 (CEST)

module.exports = function (config) {
    'use strict';

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../..',

        // frameworks to use
        frameworks: [
            'jasmine'
        ],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js'<% if (ngAnimate) { %>,
            'bower_components/angular-animate/angular-animate.js'<% } %><% if (ngCookies) { %>,
            'bower_components/angular-cookies/angular-cookies.js'<% } %><% if (ngResource) { %>,
            'bower_components/angular-resource/angular-resource.js'<% } %><% if (ngSanitize) { %>,
            'bower_components/angular-sanitize/angular-sanitize.js'<% } %><% if (ngTouch) { %>,
            'bower_components/angular-touch/angular-touch.js'<% } %>,
            'src/**/*.js',
            'test/unit/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: [
            'progress'
            // 'coverage'
        ],

        // add preprocessors
        preprocessors: {
            // 'src/**/*.js': ['coverage']
        },

        // configure code coverage
        coverageReporter: {
            // type : 'html'
            // dir : 'test/coverage/'
        },

        // web server port
        port: 6789,

        // hostname to be used when capturing browsers
        // default: 'localhost'
        hostname: 'localhost',

        // base url, where Karma runs.
        urlRoot: '/_unit-tests_/',

        // map of path-proxy pairs
        proxies: {
            '/': 'http://localhost:8080/'
        },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // list of log appenders to be used
        loggers: [
            {type: 'console'}
        ],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'Chrome',
            'Firefox'
        ],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
