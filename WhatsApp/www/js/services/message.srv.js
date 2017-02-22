(() => {
	'use_strict'

	angular.module('starter.services').factory('MessageSrv',function(ContactsSrv) {
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
					let c = ContactsSrv.get(m.senderId);
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
})();