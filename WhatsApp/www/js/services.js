angular.module('starter.services', [])

.factory('Contacts', function(){
/*
   $http.get('data/Users.json').success(function (results){
      var contacts = results;
   })*/
   var contacts = [
      {
         _id: "1",
         email: "benj@gmail.com",
         firstName : "Benjamin",
         lastName : "Robert"
      },
      {
         _id: "2",
         email: "dim@gmail.com",
         firstName : "Dimitri",
         lastName : "Saingre"
      },
      {
         _id: "3",
         email: "kev@gmail.com",
         firstName : "Kevin",
         lastName : "Keovilay"
      },
      {
         _id: "4",
         email: "Dam@gmail.com",
         firstName : "Damien",
         lastName : "Raymond"
      }] ;

   return {
    all: function() {
      return contacts;
    },
    get: function(contactId) {
      for (var i = 0; i < chats.length; i++) {
        if (contacts[i].id === parseInt(contactId)) {
          return contacts[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
