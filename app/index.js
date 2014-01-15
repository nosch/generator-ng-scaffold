'use strict';

var _ = require('underscore.string');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var NgScaffoldGenerator = module.exports = function NgScaffoldGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NgScaffoldGenerator, yeoman.generators.Base);

NgScaffoldGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        name: 'appName',
        message: 'How would you like to call your AngualrJS app?',
        default: 'My Application'
    }];

    this.prompt(prompts, function (props) {
        this.appName = props.appName;

        cb();
    }.bind(this));
};

NgScaffoldGenerator.prototype.app = function app() {
    this.template('Gruntfile.js', 'Gruntfile.js');

    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
};

NgScaffoldGenerator.prototype.projectfolders = function projectfolders() {
    this.directory('.\/src', 'src', true);
    this.directory('.\/test', 'test', true);
};

NgScaffoldGenerator.prototype.templateStuff = function templateStuff() {
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

NgScaffoldGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};
