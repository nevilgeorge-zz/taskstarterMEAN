'use strict';

/**
 * @ngdoc function
 * @name taskstarterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the taskstarterApp
 */
angular.module('taskstarterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
