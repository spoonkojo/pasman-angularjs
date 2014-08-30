'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'selectize-ng',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/identities', {templateUrl: 'partials/identities.html', controller: 'IdentitiesCtrl'});
  $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsCtrl'});
  $routeProvider.when('/tags', {templateUrl: 'partials/tags.html', controller: 'TagsCtrl'});
  $routeProvider.otherwise({redirectTo: '/identities'});
}]);
