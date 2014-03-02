/*global describe, beforeEach, it */
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('generator-ng-scaffold', function () {
    before(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('ng-scaffold:app', [
                '../../app'
            ]);

            done();
        }.bind(this));
    });

    it('main generator "app" should create expected files', function (done) {
        var expected = [
            'Gruntfile.js',
            'bower.json',
            'package.json',
            '.bowerrc',
            '.gitignore',
            '.editorconfig',
            '.jshintrc',
            'build/.gitkeep',
            'src/app/app.js',
            'src/app/config/config.js',
            'src/app/module/template/.gitkeep',
            'src/app/module/user/config/config.js',
            'src/app/module/user/service/.gitkeep',
            'src/app/module/user/user-dashboard.js',
            'src/app/module/user/user-profile.js',
            'src/app/module/user/user-settings.js',
            'src/app/module/user/user.js',
            'src/app/module/user/view/user-dashboard.tpl.html',
            'src/app/module/user/view/user-profile.tpl.html',
            'src/app/module/user/view/user-settings.tpl.html',
            'src/app/module/user/view/user.tpl.html',
            'src/app/service/.gitkeep',
            'src/app/view/about.tpl.html',
            'src/app/view/contact.tpl.html',
            'src/app/view/footer.tpl.html',
            'src/app/view/header.tpl.html',
            'src/app/view/home.tpl.html',
            'src/asset/favicon.ico',
            'src/asset/img/.gitkeep',
            'src/css/app.css',
            'src/css/common.css',
            'src/index.html',
            'test/config/karma.unit.conf.js',
            'test/unit/app/controller.spec.js',
            'test/unit/app/user/controller.spec.js'
        ];

        helpers.mockPrompt(this.app, {
            'appName': 'My Awesome App'
        });

        this.app.options['skip-install'] = true;

        this.app.run({}, function () {
            helpers.assertFile(expected);

            done();
        });
    });
});
