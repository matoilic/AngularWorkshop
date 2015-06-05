angular
    .module('Application', [
        'ContactsState'
    ])
    .config(['$locationProvider', '$urlRouterProvider', '$httpProvider', function($locationProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.useApplyAsync(true);
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/contacts');
        $urlRouterProvider.when('/', '/contacts');
    }]);