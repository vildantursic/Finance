/**
 * Created by Vildan on 9/14/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('paginationBox', function() {
    return {
        restrict: 'E',
        scope: {
            projects: '='
        },
        replace: true,
        controller: 'paginationCtrl',
        templateUrl: 'views/partials/directives/paginationBox.html'
    };
});

app.controller('paginationCtrl', function($scope) {

    //Pagination
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.numberOfPages=function(){
        return Math.ceil($scope.projects.length / $scope.pageSize);
    };

});

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});