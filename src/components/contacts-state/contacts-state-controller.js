(function() {
    'use strict';
    
    function ContactsStateController(contacts) {
        this.contacts = contacts;
    }

    ContactsStateController.prototype = {
    
    };

    angular
        .module('ContactsState')
        .controller('ContactsStateController', ['contacts', ContactsStateController]);
})();
