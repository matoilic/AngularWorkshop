function detailRoute($stateProvider) {
    return $stateProvider
        .state('app', {
            url: '/',
            abstract: true,
            views: {
                application: {
                    template: '<ui-view name="main"></ui-view>',
                    controller: 'ApplicationController as appController'
                }
            }
        });
}

export default [
    '$stateProvider',
    detailRoute
];
