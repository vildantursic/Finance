/**
 * Created by Vildan on 8/27/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('projectBox', function() {
    return {
        restrict: 'E',
        scope: {
            project: '='
        },
        replace: true,
        controller: 'projectsEditCtrl',
        templateUrl: 'views/partials/directives/projectBox.html'
    };
});

app.controller('projectsEditCtrl', function($scope, $http, $mdDialog, $state, $mdToast){

    $scope.showEditProject = function (ev, project) {

        $scope.projectEdit = project;

        $mdDialog.show({
            controller: DialogController,
            scope: $scope.$new(),
            templateUrl: 'views/partials/dialogs/editProjectDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev
        })
            .then(function (answer) {

                if (answer == "save") {

                    //console.log($scope.projectEdit);

                    requests($http, {method: 'POST', url: 'api/v1/projects'}).then(function(data){
                        console.log(data);
                    });
                    //var post = {
                    //    method: 'PUT',
                    //    url: url + 'api/v1/projects/' + $scope.projectEdit.project_id,
                    //    async: true,
                    //    crossDomain: true,
                    //    data: { project: $scope.projectEdit },
                    //    dataType: "jsonp",
                    //    headers: {
                    //        "Access-Control-Allow-Origin": "*"
                    //    }
                    //};
                    //
                    //$http(post).success(function (data) {
                    //    $scope.showSimpleToast();
                    //}).error(function () {
                    //    alert("Failed");
                    //});

                }
            }, function () {
                console.log('You cancelled the dialog.');
            });
    };

});