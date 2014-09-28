'use strict';
var taskstarterApp = angular.module('taskstarterApp', []);
/**
 * @ngdoc function
 * @name taskstarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taskstarterApp
 */
taskstarterApp.controller('MainCtrl', function ($scope) {
    $scope.todos = [
    	{
    		'text': 'Tell Christina to shut up.',
    		'priority': 2
    	},
    	{
    		'text': 'Do laundry',
    		'priority': 5
    	},
    	{
    		'text': 'Buy groceries.',
    		'priority': 3
    	}
    ];
  });
