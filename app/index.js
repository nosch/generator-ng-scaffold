'use strict';
var _ = require('underscore.string');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var Generator = module.exports = function NgScaffoldGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
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
        message: 'How would you like to call your Angualr app?',
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
            value: 'ngRoute',
            name: 'angular-route',
            checked: true
        }, {
            value: 'ngResource',
            name: 'angular-resource',
            checked: false
        }, {
            value: 'ngSanitize',
            name: 'angular-sanitize',
            checked: false
        }, {
            value: 'ngCookies',
            name: 'angular-cookies',
            checked: false
        }, {
            value: 'ngMock',
            name: 'angular-mocks',
            checked: false
        }, {
            value: 'ngAnimate',
            name: 'angular-animate',
            checked: false
        }, {
            value: 'ngTouch',
            name: 'angular-touch',
            checked: false
        }]
    }];

    this.prompt(prompts, function (props) {
        var hasModule = function (mod) {
            return props.ngModules.indexOf(mod) !== -1;
        };

        this.ngRoute = hasModule('ngRoute');
        this.ngResource = hasModule('ngResource');
        this.ngSanitize = hasModule('ngSanitize');
        this.ngCookies = hasModule('ngCookies');
        this.ngMock = hasModule('ngMock');
        this.ngAnimate = hasModule('ngAnimate');
        this.ngTouch = hasModule('ngTouch');

        var modules = [];

        if (this.ngRoute) {
            modules.push('\'ngRoute\'');
        }

        if (this.ngResource) {
            modules.push('\'ngResource\'');
        }

        if (this.ngSanitize) {
            modules.push('\'ngSanitize\'');
        }

        if (this.ngCookies) {
            modules.push('\'ngCookies\'');
        }

        if (this.ngMock) {
            modules.push('\'ngMock\'');
        }

        if (this.ngAnimate) {
            modules.push('\'ngAnimate\'');
        }

        if (this.ngTouch) {
            modules.push('\'ngTouch\'');
        }

        if (modules.length) {
            this.ngModules = modules.join(",\n        ");
        }

        cb();
    }.bind(this));
};

Generator.prototype.askForJQuery = function askForJQuery() {
    var cb = this.async();

    var prompts = [{
        type: 'confirm',
        name: 'jquery',
        message: 'Would you like to include jQuery?'
    }];

    this.prompt(prompts, function (props) {
        this.jquery = props.jquery;

        cb();
    }.bind(this));
};

Generator.prototype.askForUnderscoreOrLodash = function askForUnderscoreOrLodash() {
    var cb = this.async();

    var prompts = [{
        type: 'list',
        name: 'underscoreOrLodash',
        message: 'Would you like to include Underscore or Lo-Dash?',
        choices: [{
            value: 'underscore',
            name: 'Underscore'
        }, {
            value: 'lodash',
            name: 'Lo-Dash'
        }]
    }, {
        when: function (props) {
            return props.underscoreOrLodash === 'underscore';
        },
        type: 'confirm',
        name: 'underscoreString',
        message: 'Would you like to include Underscore.string?'
    }];

    this.prompt(prompts, function (props) {
        this.underscore = props.underscoreOrLodash === 'underscore';
        this.lodash = props.underscoreOrLodash === 'lodash';
        this.underscoreString = props.underscoreString;

        cb();
    }.bind(this));
};

Generator.prototype.askForMoment = function askForMoment() {
    var cb = this.async();

    var prompts = [{
        type: 'confirm',
        name: 'momentjs',
        message: 'Would you like to include Moment.js?'
    }];

    this.prompt(prompts, function (props) {
        this.momentjs = props.momentjs;

        cb();
    }.bind(this));
};

// Directories and templates
Generator.prototype.app = function app() {
    this.template('Gruntfile.js', 'Gruntfile.js');

    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
};

Generator.prototype.projectfolders = function projectfolders() {
    this.directory('.\/src', 'src', true);
    this.directory('.\/test', 'test', true);
};

Generator.prototype.templateStuff = function templateStuff() {
    // src folder
    this.template('.\/src\/index.html', 'src/index.html');
    this.template('.\/src\/robots.txt', 'src/robots.txt');
    this.template('.\/src\/app\/app.js', 'src/app/app.js');
    this.template('.\/src\/app\/config\/config.js', 'src/app/config/config.js');
    this.template('.\/src\/app\/module\/user\/user.js', 'src/app/module/user/user.js');
    this.template('.\/src\/app\/module\/user\/user-account.js', 'src/app/module/user/user-account.js');
    this.template('.\/src\/app\/module\/user\/user-dashboard.js', 'src/app/module/user/user-dashboard.js');
    this.template('.\/src\/app\/module\/user\/user-profile.js', 'src/app/module/user/user-profile.js');
    this.template('.\/src\/app\/module\/user\/config\/config.js', 'src/app/module/user/config/config.js');
    this.template('.\/src\/app\/module\/user\/service\/.gitkeep', 'src/app/module/user/service/.gitkeep');
    this.template('.\/src\/app\/module\/user\/view\/account.tpl.html', 'src/app/module/user/view/account.tpl.html');
    this.template('.\/src\/app\/module\/user\/view\/dashboard.tpl.html', 'src/app/module/user/view/dashboard.tpl.html');
    this.template('.\/src\/app\/module\/user\/view\/profile.tpl.html', 'src/app/module/user/view/profile.tpl.html');
    this.template('.\/src\/app\/service\/.gitkeep', 'src/app/service/.gitkeep');
    this.template('.\/src\/app\/view\/about.tpl.html', 'src/app/view/about.tpl.html');
    this.template('.\/src\/app\/view\/contact.tpl.html', 'src/app/view/contact.tpl.html');
    this.template('.\/src\/app\/view\/footer.tpl.html', 'src/app/view/footer.tpl.html');
    this.template('.\/src\/app\/view\/header.tpl.html', 'src/app/view/header.tpl.html');
    this.template('.\/src\/app\/view\/home.tpl.html', 'src/app/view/home.tpl.html');
    this.template('.\/src\/asset\/css\/.gitkeep', 'src/asset/css/.gitkeep');
    this.template('.\/src\/asset\/img\/.gitkeep', 'src/asset/img/.gitkeep');
    this.template('.\/src\/less\/app.less', 'src/less/app.less');
    this.template('.\/src\/less\/common.less', 'src/less/common.less');

    // test folder
    this.template('.\/test\/config\/karma.e2e.conf.js', 'test/config/karma.e2e.conf.js');
    this.template('.\/test\/config\/karma.unit.conf.js', 'test/config/karma.unit.conf.js');
    this.template('.\/test\/e2e\/routes.scenario.js', 'test/e2e/routes.scenario.js');
    this.template('.\/test\/unit\/app\/controller.spec.js', 'test/unit/app/controller.spec.js');
    this.template('.\/test\/unit\/app\/user\/controller.spec.js', 'test/unit/app/user//controller.spec.js');
};

Generator.prototype.projectfiles = function projectfiles() {
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};
