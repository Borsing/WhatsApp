(() => {
	'use_strict'

	angular.module('starter.services').factory('ContactsSrv', function(){

		var contacts = [
			{
				"_id": "1",
				"email": "benj@gmail.com",
				"firstName" : "Benjamin",
				"lastName" : "Robert",
				"password" : "password"
			},
			{
				"_id": "2",
				"email": "dim@gmail.com",
				"firstName" : "Dimitri",
				"lastName" : "Saingre",
				"password" : "password"
			},
			{
				"_id": "3",
				"email": "kev@gmail.com",
				"firstName" : "Kevin",
				"lastName" : "Keovilay",
				"password" : "password"
			},
			{
				"_id": "4",
				"email": "Dam@gmail.com",
				"firstName" : "Damien",
				"lastName" : "Raymond",
				"password" : "password"
			}
		];

		return {
			all: function() {
				return contacts;
			},
			get: function(contactId) {
				return contacts.find(c => c._id == contactId);
			},
			add: function(email,firstName,lastName,password){
				let cont = {
				"_id": (contacts.length + 1).toString(),
				"email": email,
				"firstName" : firstName,
				"lastName" : lastName,
				"password" : password
				};

				contacts.push(cont);
			}
		};
	});
})();