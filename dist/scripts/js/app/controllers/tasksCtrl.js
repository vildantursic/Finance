var app = angular.module('app');

app.controller('tasksCtrl', function ($scope, $mdDialog, $http, myHttp, $timeout, $q, $log, $state) {

    $scope.minDate = new Date();

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

    $scope.parent_project = $state.params.id;

    myHttp($scope, {method: 'GET', url: 'api/v1/wh/tasks?parent_project=' + $scope.parent_project});


    $scope.showAddTask = function (ev) {

        $mdDialog.show({
            controller: DialogController,
            scope: $scope.$new(),
            templateUrl: 'views/partials/dialogs/addTaskDialog.html',
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
            $scope.addTask.global.parent_project = $state.params.id;

            myHttp($scope, {method: 'POST', url: 'api/v1/wh/tasks'}, $scope.addTask);
        }
        $mdDialog.hide(answer);
    };

    $scope.object = '';

    //Pagination
    $scope.currentPage = 0;
    $scope.pageSize = 10;

    $timeout(function () {
        $scope.numberOfPages = function () {
            return Math.ceil($scope.object.length / $scope.pageSize);
        };
    }, 1000);


});