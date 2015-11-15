/**
 * Created by Vildan on 8/21/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('pctComplete', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            value: '='
        },
        templateUrl: 'views/partials/directives/percentage.html'
    };
});