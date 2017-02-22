(() => {
	'use_strict'

	angular.module('starter.controllers').controller('ConversationCreationCtrl', 
		
		function($scope, ConversationsSrv, $location, AuthentificationSrv){
			if(!AuthentificationSrv.isLog())
				$location.path("/login");

			$scope.addConversation = function(name, description){
				ConversationsSrv.add(name,description);
				$location.path("/tab/conversations");
			}
		}
	);
})();