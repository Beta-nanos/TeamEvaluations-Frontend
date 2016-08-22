loginTasks.$inject = [ '$http'];

function loginTasks($http){
	var url = 'http://localhost:3000/explorer/Users/';

	var service = {
		get: get,
		put: put,
		post: post,
		update: update,
		delete: delete
	};

	return service;

	function get (success, failure){
		$http.get(url)
			.then(success)
			.catch(failure);
	};

	function post (tasks, success, failure) {
		$http.post(url, tasks)
			.then(success)
			.catch(failure);
	}

	function update (task, success, failure) {
		$http.put(url, task)
			.then(success)
			.catch(failure);
	}

	function delete (success, failure) {
		$http.delete(url)
			.then(success)
			.catch(failure);
	
}};

angular.module('login').factory('login-tasks', loginTasks);