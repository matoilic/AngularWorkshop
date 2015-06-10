(function() {
    'use strict';
    
    function contactsRoute($stateProvider) {
        return $stateProvider
            .state('contacts', {
                url: '/contacts',
                views: {
                    main: {
                        templateUrl: '/src/components/contacts-state/contacts.html',
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
        .module('ContactsState')
        .config(['$stateProvider', contactsRoute]);
})();
