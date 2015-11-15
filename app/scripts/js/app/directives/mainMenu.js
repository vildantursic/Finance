/**
 * Created by Vildan on 8/31/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('mainMenu', function() {
    return {
        restrict: 'E',
        scope: {
            menu: '='
        },
        replace: true,
        controller: "sidebarCtrl",
        templateUrl: 'views/partials/directives/mainMenu.html'
    };
});
