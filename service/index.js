'use strict';
var _ = require('underscore.string');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var ServiceGenerator = module.exports = function ServiceGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.appName = this.config.get('appName');
};

util.inherits(ServiceGenerator, yeoman.generators.Base);

// Prompts
ServiceGenerator.prototype.askForServiceName = function askForServiceName() {
    var cb = this.async();

    var prompts = [{
        name: 'serviceName',
        message: 'How would you like to call your new service?'
    }];

    this.prompt(prompts, function (props) {
        this.serviceName = _.camelize(props.serviceName);
        this.fileName = _.slugify(props.serviceName);

        cb();
    }.bind(this));
};

ServiceGenerator.prototype.createService = function createService() {
    this.template('_service/_service.js', 'src/app/service/' + this.fileName + '.js');
};
