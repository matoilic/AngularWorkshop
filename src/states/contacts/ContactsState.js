(function() {
    function contactsRoute($stateProvider) {
        return $stateProvider
            .state('contacts', {
                url: '/contacts',
                views: {
                    main: {
                        templateUrl: '/src/states/contacts/contacts.html',
                        controller: 'ContactsStateController as contactsController',
                        resolve: {
                            contacts: ['ContactsService', function(ContactsService) {
                                return ContactsService.fetchContacts();
                            }]
                        }
                    }
                }
            });
    }
    
    angular
        .module('AddressBook')
        .config(['$stateProvider', contactsRoute]);
})();