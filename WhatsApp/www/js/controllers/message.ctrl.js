(() => {
	'use_strict'

	angular.module('starter.controllers').controller('MessageCtrl', 
		
		function($scope, $stateParams, ConversationsSrv, MessageSrv, $location, AuthentificationSrv) {
			if(!AuthentificationSrv.isLog())
				$location.path("/login");

			$scope.conversation = ConversationsSrv.get($stateParams.conversationId);
			$scope.messages = MessageSrv.get($stateParams.conversationId);
			$scope.user     = AuthentificationSrv.getUser();

			$scope.addMessage = function(messageContent){
				MessageSrv.add(messageContent,AuthentificationSrv.getUser(),$stateParams.conversationId);
				$scope.messages = MessageSrv.get($stateParams.conversationId);
				$scope.message = "";
			}
		}
	);
})();