/**
 * Created by Vildan on 9/14/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('searchBox', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/partials/directives/searchBox.html'
    };
});
