/**
 * <%= appName %>
 * @module <%= _.camelize(appName) %>
 */
angular.module('<%= _.camelize(appName) %>', [
        '<%= _.camelize(appName) %>.config'
    ])

    .controller('ApplicationCtrl', [
        '$scope',
        function ($scope) {
            'use strict';

            $scope.heading = '<%= appName %>!';
        }
    ])

    .controller('HeaderCtrl', [
        '$scope',
        'NAV_ITEMS',
        function ($scope, navItems) {
            'use strict';

            $scope.navItems = navItems;

            $scope.$on('$routeChangeSuccess', function (eOpts, currentRoute) {
                if (currentRoute.$$route) {
                    $scope.currentRoute = currentRoute.$$route;
                }
            });
        }
    ]);
