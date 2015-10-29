import template from './contact-list.html';

function contactsRoute($stateProvider) {
    return $stateProvider
        .state('contactList', {
            url: '/contact-list',
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
    contactsRoute
];
