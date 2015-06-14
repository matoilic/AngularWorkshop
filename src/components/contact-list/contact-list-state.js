(function() {
    'use strict';
    
    function contactsRoute($stateProvider) {
        return $stateProvider
            .state('contacts', {
                url: '/contacts',
                views: {
                    main: {
                        templateUrl: '/src/components/contact-list/contact-list.html',
                        controller: 'ContactListController as contactListController',
                        resolve: {                             
                            contacts: 
                            ['ContactsService', function(ContactsService) {
                                return ContactsService.fetchContacts();
                            }]
                        }
                    }
                }
            });
    }
    
    angular
        .module('ContactList')
        .config(['$stateProvider', contactsRoute]);
})();
