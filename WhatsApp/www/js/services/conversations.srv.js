(() => {
	'use_strict'

	angular.module('starter.services').factory('ConversationsSrv', function() {
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
	});
})();