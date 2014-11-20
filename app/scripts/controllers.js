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
taskstarterControllers.controller('MainCtrl', ['$scope', '$http', '$route', function($scope, $http, $route) {
    //$scope.todos = todoList;
    $http.get('/api/tasks').success(function(data) {
        console.log(data);
        $scope.todos = data;
    });
    $scope.orderProp = 'priority';
    $scope.increment = function(todo) {
        // grab id of the todo to increment
        var id = todo._id;
        // update priority of the task that corresponds to the id
        $http.put('/api/tasks/' + id).success(function(data, status) {
            if (data) {
                todo.priority = data.priority;
            }          
            console.log(data);
        });
    }

    $scope.delete = function(todo) {
        var id = todo._id;
        $http.delete('/api/tasks/' + id).success(function(err, data) {
            if (data) {
                console.log('Todo deleted');
                // $route.reload();
                // remove deleted element from the array rather than force reloading the page
                var index = $scope.todos.indexOf(todo);
                $scope.todos.splice(index, 1);
            }
        });
        
    }

}]);

taskstarterControllers.controller('FormCtrl', ['$scope', '$http', function($scope, $http) {
    var temp, reset;
    $scope.save = function() {
        temp = {
            title: $scope.todoText,
            priority: 1
        };
        // send post request to add the new task to the database
        $http.post('/api/tasks', temp).success(function(data, status) {
            console.log('POST success');
            reset();
        });
        //todoList.push(temp);
        //reset();
    }

    reset = function() {
        $scope.todoText = "";
    }
}]);

