(function() {
    function ContactsService($resource) {
        
    }
    
    ContactsService.prototype = {
        fetchContacts: function() {
            //TODO
            return [];
        }
    };
    
    angular
        .module('AddressBook')
        .service('ContactsService', ['$resource', ContactsService]);
})();