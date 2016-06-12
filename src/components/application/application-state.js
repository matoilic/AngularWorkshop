import template from './application.html';

function detailRoute($stateProvider) {
    return $stateProvider
        .state('app', {
            url: '/',
            abstract: true,
            views: {
                application: {
                    controller: 'ApplicationController as appController',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    detailRoute
];
