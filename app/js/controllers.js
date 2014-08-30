'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('IdentitiesCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal) {

    $scope.url = "http://pasman.apiary-mock.com";
    $scope.identities = {};

    $scope.getIdentities = function() {
      $http.get($scope.url + '/identities').
        success(function(data) {
          $scope.identities = data;
        });
    };

    $scope.getIdentities();

    $scope.open = function () {

      var modalInstance = $modal.open({
        templateUrl: 'addIdentityModal.html',
        controller: 'AddIdentityModalCtrl',
        size: 'sm'
      });

    };

  }])
  .controller('ProjectsCtrl', ['$scope', function($scope) {

  }])
  .controller('TagsCtrl', ['$scope', function($scope) {

  }])
  .controller('AddIdentityModalCtrl', ['$scope', '$http', '$modalInstance', function($scope, $http, $modalInstance) {

    $scope.tags = [
      { "id": 1, "name": "webadmin" },
      { "id": 2, "name": "cpanel" },
      { "id": 3, "name": "mysql" }
    ];

    $scope.tagging = {
      value: [1],
      options: {
        valueField: 'id',
        labelField: 'name',
        searchField: ['name'],
        create: true
      },
    };

    $scope.tag = $scope.tags[0];

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }]);
