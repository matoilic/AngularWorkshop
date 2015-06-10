(function() {
    'use strict';

    function ContactsService($resource) {
        this.Contact = $resource('/data/contacts.json');
    }
    
    ContactsService.prototype = {
        fetchContacts: function() {
            return this.Contact.query();
        }
    };
    
    angular
        .module('AddressBook')
        .service('ContactsService', ['$resource', ContactsService]);
})();
