import template from './contact-detail.html';

function detailRoute($stateProvider) {
    return $stateProvider
        .state('contactDetail', {
            url: '/detail/:id',
            views: {
                main: {
                    template: template,
                    controller: 'ContactDetailController as contactDetailController',
                    resolve: {
                        detail: ['contactsService', '$stateParams', function(contactsService, $stateParams) {
                            return contactsService.detailContact($stateParams.id);
                        }]
                    }
                }
            }
        });
}

export default [
    '$stateProvider',
    detailRoute
];
