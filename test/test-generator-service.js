/*global describe, beforeEach, afterEach, it */
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('generator-ng-scaffold', function () {
    var tempDir = '_temp-service-test';

    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, tempDir), function (err) {
            if (err) {
                return done(err);
            }

            this.angular = {};
            this.angular.app = helpers.createGenerator('ng-scaffold:app', [
                '../../app',
                [
                    helpers.createDummyGenerator(),
                    'mocha:app'
                ]
            ]);

            this.angular.app.options['skip-install'] = true;

            helpers.mockPrompt(this.angular.app, {
                appName: 'My awesome app'
            });

            done();
        }.bind(this));
    });

    describe('sub-generator "service"', function () {
        it('should create expected files', function (done) {
            var module = helpers.createGenerator(
                'ng-scaffold:service',
                ['../../service'],
                [],
                {appName: 'My awesome app'}
            );

            var expectedFiles = [
                'src/app/service/storage.js'
            ];

            this.angular.app.run({}, function () {
                helpers.mockPrompt(module, {
                    serviceName: 'storage'
                });

                module.run([], function () {
                    helpers.assertFiles(expectedFiles);
                });

                done();
            });
        });
    })
});
