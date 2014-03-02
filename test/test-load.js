/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');

describe('generator-ng-scaffold', function () {
    it('can be imported without blowing up', function () {
        var app = require('../app');

        assert(app !== undefined);
    });
});
