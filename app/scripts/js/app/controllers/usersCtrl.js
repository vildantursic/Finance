var app = angular.module('app');

app.controller('usersCtrl', function ($scope, $mdDialog, $http, $mdToast, myHttp, $animate, $state) {

    //TOAST MESSAGE SHOW
    $scope.showSimpleToast = function (message) {
        $mdToast.show(
            $mdToast.simple()
                .content(message)
                .position(getToastPosition())
                .hideDelay(3000)
        );
    };

    // loading screen
    $scope.status = true;

    $scope.change = function () {
        $scope.status = false;
    };
    // ******************

    //myHttp($scope, {method: 'GET', url: 'api/v1/users'});

    $scope.addUserDialog = function (ev) {
        $mdDialog.show({
            controller: 'usersCtrl',
            scope: $scope.$new(),
            templateUrl: 'views/partials/dialogs/addUserDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev
        }).then(function (answer) {

        }, function () {
            console.log('You cancelled the dialog.');
        });
    };

    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        if (answer == "save") {

        }
        $mdDialog.hide(answer);
    };

});
