(function() {
    'use strict';
    
    function ContactListController(contacts) {
        this.contacts = contacts;
    }

    ContactListController.prototype = {
    	detail: function(contactid) {
    		console.log('contact id ' , contactid);

    	}
    };

    angular
        .module('ContactList')
        .controller('ContactListController', ['contacts', ContactListController]);
})();
