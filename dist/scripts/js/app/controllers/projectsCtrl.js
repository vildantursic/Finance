var app = angular.module('app');

app.controller('projectsCtrl', ['$scope', '$mdDialog', '$http', 'myHttp', '$timeout', 'socket', function ($scope, $mdDialog, $http, myHttp, $timeout, socket) {

    socket.emit('taks-added', function(data){
        $scope.taskAdded = data;
    });

    // loading screen
    $scope.status = true;

    $scope.change = function () {
        $scope.status = false;
    };
    // ******************

    myHttp($scope, {method: 'GET', url: 'api/v1/wh/projects'});

    //$timeout(function(){
    //    console.log($scope.object);
    //},3000);

    //SHOW ADD DIALOG
    $scope.showAddProject = function (ev) {

        $mdDialog.show({
            controller: 'tasksCtrl',
            scope: $scope.$new(),
            templateUrl: 'views/partials/dialogs/addProjectDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev
        }).then(function(answer){

            },
            function () {
                console.log('You cancelled the dialog.');
            });
    };

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        if(answer == "save"){
            myHttp($scope, {method: 'POST', url: 'api/v1/wh/projects'}, $scope.addProject);

            //event for API
            socket.emit('task-created', $scope.addProject);

            socket.on('task-status', function(data){
                console.log(data);
            });

        }
        $mdDialog.hide(answer);
    };

    $scope.object = '';

    //Pagination
    $scope.currentPage = 0;
    $scope.pageSize = 9;
    $timeout(function(){
        $scope.numberOfPages=function(){
            return Math.ceil($scope.object.length / $scope.pageSize);
        };
    },1000);

}]);