(function() {
    'use strict';
    
    function ContactListController(contacts) {
        this.contacts = contacts;
    }

    ContactListController.prototype = {
    };

    angular
        .module('ContactList')
        .controller('ContactListController', ['contacts', ContactListController]);
})();
