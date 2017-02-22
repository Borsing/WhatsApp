(() => {
	'use_strict'

	angular.module('starter.services').factory('AuthentificationSrv', function(ContactsSrv){
		var userId = null ;

		return {
			isLog : function() { 
				return userId !== null ;
			},
			getUser : function(){
				return userId ;
			},
			log : function(email, password) {
				var newUser = ContactsSrv.all().find(c => c.email === email && c.password === password);
				if(newUser !== undefined){
					userId = newUser._id ;
				}
			},
			logout : function() {
				userId = null ;
			}
		};
	});
})();