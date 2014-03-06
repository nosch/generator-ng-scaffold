[![Build Status](https://travis-ci.org/nosch/generator-ng-scaffold.png?branch=master)](https://travis-ci.org/nosch/generator-ng-scaffold)

# generator-ng-scaffold

This is a [yeoman](http://yeoman.io) generator for an **AngularJS application scaffold**. It's based on [ng-scaffold](http://github.com/nosch/ng-scaffold). So the generated files are **organized in modules** and not "by layer". It also provides a build, test and basic deployment process based on Grunt, Bower and Karma.

In addition to the **main generator** (yo ng-scaffold) for the entire application there are two **sub-generators**. One (yo ng-scaffold:module) is for a new application module, and the other (yo ng-scaffold:service) is for generating an application-wide service.

## Install

npm install -g generator-ng-scaffold

## Usage

1. $ mkdir [my-angular-app] && cd $_
2. $ yo ng-scaffold | yo ng-scaffold:module | yo ng-scaffold:service
3. $ grunt | grunt release

## Dependencies

1. Install [node.js and npm](http://nodejs.org/download/ "Download node.js")
2. $ npm install -g grunt-cli, bower, yo

## Stack
### Application

- AngularJS v1.2.14
- UI-Router v0.2.9
- jQuery v2.1.0
- Twitter Bootstrap v3.1.1
- Modernizr v2.7.1

### Build process

- Grunt v0.4.2
- Bower v1.2.8
- Karma v0.10.9
