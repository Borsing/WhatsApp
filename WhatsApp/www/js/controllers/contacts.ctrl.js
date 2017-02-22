(() => {
	'use_strict'

	angular.module('starter.controllers').controller('ContactsCtrl', 

		function($scope, ContactsSrv, AuthentificationSrv, $location) {
			if(!AuthentificationSrv.isLog())
				$location.path("/login");

			$scope.contacts = ContactsSrv.all();
		}
	);
})();