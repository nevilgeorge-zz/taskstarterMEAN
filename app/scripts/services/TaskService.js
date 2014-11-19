// app/scripts/services/taskService.js
angular.module('TaskService', []).factory('Task', ['http', function($http) {
	return {
		get: function() {
			return $http.get('/api/tasks');
		}
	}
}]);