'use strict';
var _ = require('underscore.string');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function NgScaffoldGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.config.set('appName', this.appName);
        this.config.save();

        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Generator, yeoman.generators.Base);

// Prompts
Generator.prototype.askForAppName = function askForAppName() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        name: 'appName',
        message: 'How would you like to call your Angular app?',
        default: 'My Application'
    }];

    this.prompt(prompts, function (props) {
        this.appName = props.appName;

        cb();
    }.bind(this));
};

Generator.prototype.askForModules = function askForModules() {
    var cb = this.async();

    var prompts = [{
        type: 'checkbox',
        name: 'ngModules',
        message: 'Which Angular modules would you like to include?',
        choices: [{
            value: 'ngAnimate',
            name: 'angular-animate',
            checked: false
        }, {
            value: 'ngCookies',
            name: 'angular-cookies',
            checked: false
        }, {
            value: 'ngResource',
            name: 'angular-resource',
            checked: false
        }, {
            value: 'ngSanitize',
            name: 'angular-sanitize',
            checked: false
        }, {
            value: 'ngTouch',
            name: 'angular-touch',
            checked: false
        }]
    }];

    this.prompt(prompts, function (props) {
        this.ngModules = false;

        var hasModule = function (mod) {
            if (props.ngModules) {
                return props.ngModules.indexOf(mod) !== -1;
            }

            return false;
        };

        this.ngAnimate = hasModule('ngAnimate');
        this.ngCookies = hasModule('ngCookies');
        this.ngResource = hasModule('ngResource');
        this.ngSanitize = hasModule('ngSanitize');
        this.ngTouch = hasModule('ngTouch');

        var modules = [];

        if (this.ngAnimate) {
            modules.push('\'ngAnimate\'');
        }

        if (this.ngCookies) {
            modules.push('\'ngCookies\'');
        }

        if (this.ngResource) {
            modules.push('\'ngResource\'');
        }

        if (this.ngSanitize) {
            modules.push('\'ngSanitize\'');
        }

        if (this.ngTouch) {
            modules.push('\'ngTouch\'');
        }

        if (Array.isArray(modules) && modules.length) {
            this.ngModules = modules.join(",\n        ");
        }

        cb();
    }.bind(this));
};

// Directories and templates
Generator.prototype.processConfigFiles = function processConfigFiles() {
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');

    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};

Generator.prototype.projectFolders = function projectFolders() {
    this.directory('.\/build', 'build', true);
    this.directory('.\/src', 'src', true);
    this.directory('.\/test', 'test', true);
};

Generator.prototype.generateApp = function generateApp() {
    // build folder
    this.template('.\/build\/.gitkeep', 'build/.gitkeep');
    // src folder
    this.template('.\/src\/index.html', 'src/index.html');
    this.template('.\/src\/app\/app.js', 'src/app/app.js');
    this.template('.\/src\/app\/config\/config.js', 'src/app/config/config.js');
    this.template('.\/src\/app\/module\/template\/.gitkeep', 'src/app/module/template/.gitkeep');
    this.template('.\/src\/app\/module\/user\/user.js', 'src/app/module/user/user.js');
    this.template('.\/src\/app\/module\/user\/user-dashboard.js', 'src/app/module/user/user-dashboard.js');
    this.template('.\/src\/app\/module\/user\/user-profile.js', 'src/app/module/user/user-profile.js');
    this.template('.\/src\/app\/module\/user\/user-settings.js', 'src/app/module/user/user-settings.js');
    this.template('.\/src\/app\/module\/user\/config\/config.js', 'src/app/module/user/config/config.js');
    this.template('.\/src\/app\/module\/user\/service\/.gitkeep', 'src/app/module/user/service/.gitkeep');
    this.template('.\/src\/app\/module\/user\/view\/user.tpl.html', 'src/app/module/user/view/user.tpl.html');
    this.template('.\/src\/app\/module\/user\/view\/user-dashboard.tpl.html', 'src/app/module/user/view/user-dashboard.tpl.html');
    this.template('.\/src\/app\/module\/user\/view\/user-profile.tpl.html', 'src/app/module/user/view/user-profile.tpl.html');
    this.template('.\/src\/app\/module\/user\/view\/user-settings.tpl.html', 'src/app/module/user/view/user-settings.tpl.html');
    this.template('.\/src\/app\/view\/about.tpl.html', 'src/app/view/about.tpl.html');
    this.template('.\/src\/app\/view\/contact.tpl.html', 'src/app/view/contact.tpl.html');
    this.template('.\/src\/app\/view\/footer.tpl.html', 'src/app/view/footer.tpl.html');
    this.template('.\/src\/app\/view\/header.tpl.html', 'src/app/view/header.tpl.html');
    this.template('.\/src\/app\/view\/home.tpl.html', 'src/app/view/home.tpl.html');
    this.template('.\/src\/asset\/img\/.gitkeep', 'src/asset/img/.gitkeep');
    this.template('.\/src\/css\/app.css', 'src/css/app.css');
    this.template('.\/src\/css\/common.css', 'src/css/common.css');

    // test folder
    this.template('.\/test\/config\/karma.unit.conf.js', 'test/config/karma.unit.conf.js');
    this.template('.\/test\/unit\/app\/controller.spec.js', 'test/unit/app/controller.spec.js');
    this.template('.\/test\/unit\/app\/user\/controller.spec.js', 'test/unit/app/user/controller.spec.js');
};
