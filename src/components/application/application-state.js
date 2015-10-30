function detailRoute($stateProvider) {
    return $stateProvider
        .state('app', {
            url: '/',
            abstract: true,
            views: {
                application: {
                    template: '<ui-view name="main"></ui-view>',
                    controller: 'ApplicationController as appController',
                    resolve: {
                        authToken: ['authenticationService', function(authenticationService) {
                            return authenticationService.authenticate();
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
