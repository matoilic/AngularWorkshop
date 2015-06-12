(function() {
    'use strict';
    
    function ContactsStateController(contacts) {
        this.contacts = contacts;
    }

    ContactsStateController.prototype = {
    	detail: function(contactid) {
    		console.log('contact id ' , contactid);

    	}
    };

    angular
        .module('ContactsState')
        .controller('ContactsStateController', ['contacts', ContactsStateController]);
})();
