import template from './contact-detail.html';

function detailRoute($stateProvider, authenticatedOnly) {
    return $stateProvider
        .state('app.contactDetail', {
            url: 'detail/:id?',
            restrict: authenticatedOnly,
            views: {
                main: {
                    template: template,
                    controller: 'ContactDetailController as contactDetailController',
                    resolve: {
                        contact: ['contactsService', '$stateParams', function(contactsService, $stateParams) {
                            return contactsService.detailContact($stateParams.id);
                        }]
                    }
                }
            }
        });
}

export default [
    '$stateProvider',
    'authenticatedOnly',
    detailRoute
];
