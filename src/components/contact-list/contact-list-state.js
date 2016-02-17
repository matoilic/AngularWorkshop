import template from './contact-list.html';

function contactsRoute($stateProvider, authenticatedOnly) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contact-list',
            restrict: authenticatedOnly,
            views: {
                main: {
                    template: template,
                    controller: 'ContactListController as contactListController',
                    resolve: {
                        contacts: ['contactsService', function(contactsService) {
                            return contactsService.fetchContacts();
                        }]
                    }
                }
            }
        });
}

export default [
    '$stateProvider',
    'authenticatedOnly',
    contactsRoute
];
