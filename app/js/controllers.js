'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('IdentitiesCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.url = "http://pasman.apiary-mock.com";
    $scope.identities = {};

    $scope.getIdentities = function() {
      $http.get($scope.url + '/identities').
        success(function(data) {
          $scope.identities = data;
        });
    };

    $scope.getIdentities();
  }])
  .controller('ProjectsCtrl', ['$scope', function($scope) {

  }])
  .controller('TagsCtrl', ['$scope', function($scope) {

  }]);
