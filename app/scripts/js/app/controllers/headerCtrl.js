var app = angular.module('app');

app.controller('headerCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $state) {

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
        var debounceFn = $mdUtil.debounce(function () {
            $mdSidenav(navID)
                .toggle()
        }, 300);
        return debounceFn;
    }

    $scope.close = function () {
        $mdSidenav('left').close();
    };

    //manu lg screen
    $("#minimize").on("click", function () {
        $("#sidebar").toggleClass("minimize");
    });

    $scope.$state = $state;

});
