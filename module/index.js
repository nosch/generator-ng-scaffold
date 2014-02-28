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

        cb();
    }.bind(this));
};

ModuleGenerator.prototype.createModule = function createModule() {
    var moduleDir = this.config.get('moduleDir') + this.dirName + '/';
    var configDir = moduleDir + this.config.get('configDir');
    var serviceDir = moduleDir + this.config.get('serviceDir');
    var viewDir = moduleDir + this.config.get('viewDir');

    this.mkdir(moduleDir);
    this.mkdir(configDir);
    this.mkdir(serviceDir);
    this.mkdir(viewDir);

    this.template('_module.js', moduleDir + _.slugify(this.moduleName) + '.js');
    this.template('_module-config.js', configDir + 'config.js');
    this.template('_module.tpl.html', viewDir + _.slugify(this.moduleName) + '.tpl.html');

    this.copy('gitkeep', serviceDir + '.gitkeep');
};
