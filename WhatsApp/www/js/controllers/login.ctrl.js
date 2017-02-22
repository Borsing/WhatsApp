(() => {
	'use_strict'

	angular.module('starter.controllers').controller('LoginCtrl',

		function($scope, $location, AuthentificationSrv){  
			$scope.login = function(email, password){
				AuthentificationSrv.log(email,password);
				if(AuthentificationSrv.isLog()){
					$location.path("/tab/login");
				}
			}
		}
	);
})();