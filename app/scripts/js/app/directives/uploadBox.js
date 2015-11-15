/**
 * Created by Vildan on 11/10/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('uploadBox', function() {
    return {
        restrict: 'E',
        scope: {
            file: '='
        },
        replace: true,
        controller: 'uploadBoxCtrl',
        templateUrl: 'views/partials/directives/uploadBox.html'
    };
});

app.controller('uploadBoxCtrl', ['$scope', 'Upload', '$timeout', function($scope, Upload, $timeout){

    $scope.uploadPic = function(file) {
      file.upload = Upload.upload({
        url: 'http://localhost:7001/api/v1/fn/banking',
        method: 'POST',
        data: {file: file, username: $scope.username}
      });

      file.upload.then(function (response) {
        $timeout(function () {
          file.result = response.data;
        });
      }, function (response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      }, function (evt) {
        // Math.min is to fix IE which reports 200% sometimes
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    }

}]);
