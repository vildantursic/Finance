/**
 * Created by Vildan on 8/31/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('userBox', function() {
    return {
        restrict: 'E',
        scope: {
            user: '='
        },
        replace: true,
        templateUrl: 'views/partials/directives/userBox.html'
    };
});