(() => {
	'use_strict'

	angular.module('starter.controllers').controller('ConversationsCtrl',

		function($scope, ConversationsSrv, $location, AuthentificationSrv) {
			if(!AuthentificationSrv.isLog())
				$location.path("/login");
			
			$scope.conversations = ConversationsSrv.all();
		}
	);
})();