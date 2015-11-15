/**
 * Created by vildantursic on 11/9/15.
 */
var app = angular.module('app');

app.controller('bankingCtrl', function ($scope, $mdDialog, $http, $mdToast, myHttp, $q, $timeout) {

  myHttp($scope, {method: 'GET', url: 'api/v1/fn/banking'});

  $scope.clear = function (){
    $scope.search = '';
  }

  $scope.selected = [];

  $scope.query = {
    order: 'id',
    limit: 5,
    page: 1
  };

  $scope.onpagechange = function(page, limit) {
    var deferred = $q.defer();

    $timeout(function () {
      deferred.resolve();
    }, 2000);

    return deferred.promise;
  };

  $scope.onorderchange = function(order) {
    var deferred = $q.defer();

    $timeout(function () {
      deferred.resolve();
    }, 2000);

    return deferred.promise;
  };

});

app.directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeHandler);
    }
  };
});
