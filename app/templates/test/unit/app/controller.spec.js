/**
 * Unit Testing: Application/Controller
 */
describe('Unit Testing: Application/Controller', function () {
    'use strict';

    var $scope, $controller;

    beforeEach(module('<%= _.camelize(appName) %>'));

    beforeEach(inject(function ($injector) {
        $scope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
    }));

    describe('ApplicationCtrl', function () {
        it('should set the correct heading text "<%= appName %>!"', function () {
            var expected = {
                heading: '<%= appName %>!'
            };

            var params = {
                $scope: $scope
            };

            $controller('ApplicationCtrl', params);

            expect($scope.heading).toBe(expected.heading);
        });
    });
});
