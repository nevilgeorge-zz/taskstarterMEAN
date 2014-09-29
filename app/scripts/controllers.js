'use strict';
var taskstarterControllers = angular.module('taskstarterControllers', []);
var todoList = [
    {
        "text": "Tell Christina to shut up.",
        "priority": 2
    },
    {
        "text": "Do laundry",
        "priority": 5
    },
    {
        "text": "Buy groceries.",
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
    $scope.increment = function() {
        $scope.todo.priority++;
    }
    
}]);

taskstarterControllers.controller('FormCtrl', ['$scope', '$http', function($scope, $http) {
    var temp, reset;
    $scope.save = function() {
        temp = {
            "text": $scope.todoText,
            "priority": 0
        };
        todoList.push(temp);
        reset();
    }

    reset = function() {
        $scope.todo = "";
    }
}]);

