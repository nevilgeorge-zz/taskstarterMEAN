'use strict';
var taskstarterControllers = angular.module('taskstarterControllers', []);
var todoList = [
    {
        "text": "Do EECS 395 project",
        "priority": 5
    },
    {
        "text": "Do laundry",
        "priority": 2
    },
    {
        "text": "Buy groceries",
        "priority": 3
    },
    {
        "text": "Eat lunch",
        "priority": 8
    }
];
/**
 * @ngdoc function
 * @name taskstarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taskstarterApp
 */
taskstarterControllers.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    // $http.get('todos.json').success(function(data) {
    //     $scope.todos = data;
    // });
    $scope.todos = todoList;

}]);

taskstarterControllers.controller('FormCtrl', ['$scope', '$http', function($scope, $http) {
    var temp, reset;
    $scope.save = function() {
        temp = {
            "text": $scope.todoText,
            "priority": 1
        };
        todoList.push(temp);
        reset();
    }

    reset = function() {
        $scope.todoText = "";
    }
}]);

