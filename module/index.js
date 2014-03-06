'use strict';
var _ = require('underscore.string');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.appName = this.config.get('appName');
};

util.inherits(ModuleGenerator, yeoman.generators.Base);

// Prompts
ModuleGenerator.prototype.askForModuleName = function askForModuleName() {
    var cb = this.async();

    var prompts = [{
        name: 'moduleName',
        message: 'How would you like to call your new module?'
    }];

    this.prompt(prompts, function (props) {
        this.moduleName = _.camelize(props.moduleName);

        cb();
    }.bind(this));
};

ModuleGenerator.prototype.askForDirName = function askForDirName() {
    var cb = this.async();

    var prompts = [{
        name: 'dirName',
        message: 'How would you like to call the directory for the new module?'
    }];

    this.prompt(prompts, function (props) {
        this.dirName = _.slugify(props.dirName);
        this.fileName = this.dirName;

        cb();
    }.bind(this));
};

ModuleGenerator.prototype.createModule = function createModule() {
    this.template('_module.js', 'src/app/module/' + this.dirName + '/' + this.fileName + '.js');
    this.template('config/config.js', 'src/app/module/' + this.dirName + '/config/config.js');
    this.template('service/.gitkeep', 'src/app/module/' + this.dirName + '/service/.gitkeep');
    this.template('view/_module.tpl.html', 'src/app/module/' + this.dirName + '/view/' + this.fileName + '.tpl.html');
};
