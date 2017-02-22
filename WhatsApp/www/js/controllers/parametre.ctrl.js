(() => {
	'use_strict'

	angular.module('starter.controllers').controller('ParametreCtrl', 
		
		function($scope, $location, AuthentificationSrv, ContactsSrv) {
			if(!AuthentificationSrv.isLog())
				$location.path("/login");

			$scope.moncompte = ContactsSrv.get(AuthentificationSrv.getUser());

			$scope.logout = function(){
				AuthentificationSrv.logout();
				$location.path("/login");
			}
		}
	);
})();