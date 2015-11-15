/**
 * Created by Vildan on 9/1/2015.
 */
var app = angular.module('app');

app.controller('sidebarCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $state, $http) {
    $scope.username = "user";

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
                .toggle()
        },300);
        return debounceFn;
    }

    $scope.close = function () {
        $mdSidenav('left').close();
    };

    //manu lg screen
    $("#minimize").on("click", function () {
        $("#sidebar").toggleClass("minimize");
    });

});