angular.module('app', [])

angular.module('app').factory('loginCtrl', function(){
	var userData = {};

	userData.json = [];

	userData.getData = function (apiInfo) {
		userData.json = apiInfo;
	}

});

angular.module('app').controller('loginCtrl', function (userJson) {
	var user = {};

	user.data = [];
	user.canLog = false;

	user.login = function() {
		if (userJson.username === user.data.username){
			if(userJson.password === user.data.password){
				user.canLog = true;
			}
		}

		if(user.canLog){
			return true;
		}else{
			user.canLog = false;
			return false;
		}
	};

});