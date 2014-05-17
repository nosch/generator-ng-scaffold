# generator-ng-scaffold [![Build Status](https://travis-ci.org/nosch/generator-ng-scaffold.png?branch=master)](https://travis-ci.org/nosch/generator-ng-scaffold) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com)

This is a [yeoman](http://yeoman.io) generator for an **AngularJS application scaffold**. It's based on [ng-scaffold](http://github.com/nosch/ng-scaffold). So the generated files are **organized in modules** and not "by layer". It also provides a build, test and basic deployment process based on Grunt.

In addition to the **main generator** (yo ng-scaffold) for the entire application there are two **sub-generators**. One (yo ng-scaffold:module) is for a new application module, and the other (yo ng-scaffold:service) is for generating an application-wide service.

## Install

npm install -g generator-ng-scaffold

## Dependencies

1. Install [node.js and npm](http://nodejs.org/download/ "Download node.js")
2. $ npm install -g grunt-cli, bower, yo

## Usage
### Prepare project

1. $ mkdir [my-angular-app] && cd $_
2. $ yo ng-scaffold | yo ng-scaffold:module | yo ng-scaffold:service

### Develop and build process

Start to develop, to test (incl. code coverage with [Istanbul](http://gotwarlost.github.io/istanbul) and reports with [Plato](https://github.com/es-analysis/plato)) and finally to build an AngularJS application with one of the following grunt tasks.

- $ grunt server (default)
- $ grunt test
- $ grunt coverage
- $ grunt report
- $ grunt release

### End-To-End testing with protractor

Run e2e test with [protractor](https://github.com/angular/protractor):

1. $ npm install -g protractor
2. $ webdriver-manager update
3. $ grunt server
4. $ protractor test/config/protractor.conf.js

## Stack
### Application

- AngularJS v1.2.16
- UI-Router v0.2.10
- Twitter Bootstrap v3.1.1
- jQuery v2.1.0
- Underscore.js v1.6.0
- Moment.js v2.6.0
- Modernizr v2.7.2

### Build process

- Grunt v0.4.4
- Bower v1.3.1
- Karma v0.12.0
