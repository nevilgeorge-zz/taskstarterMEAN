'use strict';
var taskstarterApp = angular.module('taskstarterApp', ['ngRoute', 'taskstarterControllers']);
/**
 * @ngdoc overview
 * @name taskstarterApp
 * @description
 * # taskstarterApp
 *
 * Main module of the application.
 */
taskstarterApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
