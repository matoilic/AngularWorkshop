import template from './contact-network.html';

function route($stateProvider) {
    return $stateProvider
        .state('app.contactNetwork', {
            url: 'network',
            views: {
                main: {
                    template: template,
                    controller: 'ContactNetworkController as contactNetworkController',
                    resolve: {
                        graph: ['contactsService', function(contactsService) {
                            return contactsService.fetchNetworkGraph();
                        }]
                    }
                }
            }
        });
}

export default [
    '$stateProvider',
    route
];
