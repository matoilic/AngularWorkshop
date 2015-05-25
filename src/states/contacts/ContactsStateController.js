(function() {
    function ContactsStateController(contacts) {
        this.contacts = contacts;
    }

    ContactsStateController.prototype = {
    
    }

    angular
        .module('AddressBook')
        .controller('ContactsStateController', ['contacts', ContactsStateController]);
})();