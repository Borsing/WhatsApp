angular.module('starter.services', [])

.factory('Contacts', function(){

   var contacts = [
      {
         "_id": "1",
         "email": "benj@gmail.com",
         "firstName" : "Benjamin",
         "lastName" : "Robert"
      },
      {
         "_id": "2",
         "email": "dim@gmail.com",
         "firstName" : "Dimitri",
         "lastName" : "Saingre"
      },
      {
         "_id": "3",
         "email": "kev@gmail.com",
         "firstName" : "Kevin",
         "lastName" : "Keovilay"
      },
      {
         "_id": "4",
         "email": "Dam@gmail.com",
         "firstName" : "Damien",
         "lastName" : "Raymond"
      }] ;

   return {
    all: function() {
      return contacts;
    },
    get: function(contactId) {
      return contacts.find(c => c._id == contactId);
    }
  };
})

.factory('Conversations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var conversations = [
      {
         "_id": "1",
         "name": "Conversation Alpha",
         "description": "description Alpha",
         "creationDate": "2016-02-12T08:10:56.054Z"
      },
      {
         "_id": "2",
         "name": "Conversation Bravo",
         "description": "description Bravo",
         "creationDate": "2016-03-12T08:10:56.054Z"
      },
      {
         "_id": "3",
         "name": "Conversation Charlie",
         "description": "description Charlie",
         "creationDate": "2016-04-12T08:10:56.054Z"
      },
      {
         "_id": "4",
         "name": "Conversation Delta",
         "description": "description Delta",
         "creationDate": "2016-05-12T08:10:56.054Z"
      }
   ];

  return {
    all: function() {
      return conversations;
    },
    get: function(conversationId) {
      return conversations.find(c => c._id == conversationId);
    },
    add: function(name,description) {
      let conv = {
        "_id": (conversations.length + 1).toString(),
         "name": name,
         "description": description,
         "creationDate": new Date().toISOString
      };

      conversations.push(conv);
    }
  };
})

.factory('Conversation',function(Contacts) {
  var messages = [{
         "_id" : "1",
         "conversationId" : "1",
         "senderId": "1",
         "message": "Salut la famille",
         "sentDate": "2016-02-12T08:10:56.054Z"
      },
      {
         "_id" : "2",
         "conversationId" : "1",
         "senderId": "1",
         "message": "Il y a quelqu'un ?",
         "sentDate": "2016-02-12T08:11:56.054Z"
      },
      {
         "_id" : "3",
         "conversationId" : "1",
         "senderId": "1",
         "message": "Je suis seul au monde a utiliser cet appli ?",
         "sentDate": "2016-02-12T08:12:56.054Z"
      },
      {
         "_id" : "4",
         "conversationId" : "1",
         "senderId": "2",
         "message": "Tu es dans la matrix Neo!",
         "sentDate": "2016-04-12T08:13:56.054Z"
      }
  ]



  return {
    get : function(conversationId) {
      return messages.filter(m => m.conversationId === conversationId).map(m => {
        let c = Contacts.get(m.senderId);
        m.sender = c.firstName + " " + c.lastName;
        return m;
      });
    },
    add : function(message, senderId, conversationId){
      let messageStruct = {
        "_id" : (messages.length + 1).toString() ,
        "conversationId" : conversationId,
        "senderId": senderId,
        "message": message,
        "sentDate": new Date().toISOString()
      };

      messages.push(messageStruct);
    }
  };
});
