import template from './contact-list.html';

function contactsRoute($stateProvider) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contact-list',
            views: {
                main: {
                    template: template,
                    controller: 'ContactListController as contactListController'
                }
            }
        });
}

export default [
    '$stateProvider',
    contactsRoute
];
