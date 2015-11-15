function applicationState($stateProvider) {
    return $stateProvider
        .state('app', {
            url: '/',
            abstract: true,
            views: {
                application: {
                    template: '<ui-view name="main"></ui-view>',
                }
            }
        });
}

export default [
    '$stateProvider',
    applicationState
];
