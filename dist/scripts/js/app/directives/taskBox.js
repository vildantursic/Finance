/**
 * Created by Vildan on 8/27/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('taskBox', function() {
    return {
        restrict: 'E',
        scope: {
            task: '='
        },
        replace: true,
        controller: 'taskEditCtrl',
        templateUrl: 'views/partials/directives/taskBox.html'
    };
});

app.controller('taskEditCtrl', function($scope, $mdDialog, myHttp, $state){

    $scope.minDate = new Date();

    //EDIT
    $scope.showEditTask = function(ev, task) {

        task.end_time = new Date(task.end_time);

        $scope.editTask = task;

        $mdDialog.show({
            controller: DialogController,
            scope: $scope.$new(),
            templateUrl: 'views/partials/dialogs/editTaskDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev
        })
            .then(function(answer) {
                if(answer == "save"){
                    myHttp($scope, {method: 'PUT', url: 'api/v1/wh/tasks'}, $scope.editTask);
                }
            }, function() {
                console.log('You cancelled the dialog.');
            });
    };

    //DELETE
    $scope.showDeleteTask = function(ev, task) {

        $scope.deleteTask = task;

        $mdDialog.show({
            controller: DialogController,
            scope: $scope.$new(),
            templateUrl: 'views/partials/dialogs/deleteTaskDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev
        })
            .then(function(answer) {
                if(answer == "yes"){
                    myHttp($scope, {method: 'DELETE', url: 'api/v1/wh/tasks/?id=' + $scope.deleteTask.id});
                }
            }, function() {
                console.log('You cancelled the dialog.');
            });
    };

});