angular.module('starter.controllers', [])

.controller('ContactsCtrl', function($scope, Contacts) {
   $scope.contacts = Contacts.all();
})

.controller('ConversationsCtrl', function($scope, Conversations) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  //appeles service conversations
  $scope.conversations = Conversations.all();

})

.controller('ConversationDetailCtrl', function($scope, $stateParams, Conversations, Conversation) {
  $scope.conversation = Conversations.get($stateParams.conversationId);
  $scope.messages = Conversation.get($stateParams.conversationId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});