'use strict';
var taskstarterControllers = angular.module('taskstarterControllers', []);
var todoList = [
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
/**
 * @ngdoc function
 * @name taskstarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taskstarterApp
 */
taskstarterControllers.controller('MainCtrl', ['$scope', function($scope) {
    $scope.todos = todoList;
  }]);

taskstarterControllers.controller('FormCtrl', ['$scope', function($scope) {
    $scope.print = function() {
        var temp = {
            'text': $scope.todo,
            'priority': 0
        };
        todoList.push(temp);
        console.log(todoList);
        reset();
    }

    var reset = function() {
        $scope.todo = "";
    }
}]);

