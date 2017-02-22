(() => {
	'use_strict'

	angular.module('starter.controllers').controller('InscriptionCtrl',
		
		function($scope, ContactsSrv, $location){  
			$scope.inscrire = function(prenom, nom, email, password){
				ContactsSrv.add(email,prenom,nom,password);
				$location.path("/login");
			}
		}
	);
})();