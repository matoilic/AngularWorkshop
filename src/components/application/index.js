(function() {
    'use strict';

    function applicationConfig($locationProvider, $urlRouterProvider, $httpProvider) {
        /**
         * Configure $http service to combine processing of multiple http responses received at around the same time
         * via $rootScope.$applyAsync. This can result in significant performance improvement for applications
         * that make many HTTP requests concurrently. This is often the case during application bootstrap.
         */
        $httpProvider.useApplyAsync(true);

        /**
         * If true, will rely on history.pushState to change urls where supported. Will fall back to
         * hash-prefixed paths in browsers that do not support pushState.
         */
        $locationProvider.html5Mode(false);

        /**
         * This is the default route to which the user gets redirected if no deep link was entered.
         */
        $urlRouterProvider.otherwise('/contacts');

        /**
         * This redirects the user from / to /contacts if he uses / as direct link. It is not the same as the
         * default route since the default route does not even asume / to be in the URL.
         */
        $urlRouterProvider.when('/', '/contacts');
    }

    angular
        .module('Application', [
            'ContactsState'
        ])
        .config([
            '$locationProvider',
            '$urlRouterProvider',
            '$httpProvider',
            applicationConfig
        ]);
}());
