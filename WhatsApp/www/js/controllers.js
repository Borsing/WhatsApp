
angular.module('starter.controllers', [])

.controller('ContactsCtrl', function($scope, Contacts,AuthentificationSrvc, $location) {
   if(!AuthentificationSrvc.isLog())
    $location.path("/login");

   $scope.contacts = Contacts.all();
})

.controller('ConversationsCtrl', function($scope, Conversations, $location, AuthentificationSrvc) {
   if(!AuthentificationSrvc.isLog())
    $location.path("/login");
  $scope.conversations = Conversations.all();

})

.controller('ConversationDetailCtrl', function($scope, $stateParams, Conversations, Conversation, $location, AuthentificationSrvc) {
  if(!AuthentificationSrvc.isLog())
    $location.path("/login");

  $scope.conversation = Conversations.get($stateParams.conversationId);
  $scope.messages = Conversation.get($stateParams.conversationId);
  $scope.user     = AuthentificationSrvc.getUser();

  $scope.addMessage = function(messageContent){
    Conversation.add(messageContent,AuthentificationSrvc.getUser(),$stateParams.conversationId);
    $scope.messages = Conversation.get($stateParams.conversationId);
    $scope.message = "";
  }
})

.controller('ConversationCreationCtrl', function($scope, Conversations, $location, AuthentificationSrvc){
  if(!AuthentificationSrvc.isLog())
    $location.path("/login");

  $scope.addConversation = function(name, description){
    Conversations.add(name,description);
    $location.path("/tab/conversations");
  }
})

.controller('LoginCtrl', function($scope, $location, AuthentificationSrvc){  
  $scope.login = function(email, password){
    AuthentificationSrvc.log(email,password);
    if(AuthentificationSrvc.isLog()){
      $location.path("/tab/login");
    }
  }
})
.controller('InscriptionCtrl', function($scope, Contacts, $location){  
  $scope.inscrire = function(prenom, nom, email, password){
    Contacts.add(email,prenom,nom,password);
    $location.path("/login");
  }
})
.controller('ParametreCtrl', function($scope, $location, AuthentificationSrvc, Contacts) {
  if(!AuthentificationSrvc.isLog())
    $location.path("/login");

  $scope.moncompte = Contacts.get(AuthentificationSrvc.getUser());

  $scope.logout = function(){
    AuthentificationSrvc.logout();
    $location.path("/login");

  }
});