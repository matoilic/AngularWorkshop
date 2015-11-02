import vex from 'vex';

function applicationConfig($locationProvider, $urlRouterProvider, $httpProvider, httpProvider) {
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
    $urlRouterProvider.otherwise('/welcome');

    httpProvider.setBaseUrl('https://nameless-sierra-8010.herokuapp.com/api/');

    vex.defaultOptions.className = 'vex-theme-plain';
}

export default [
    '$locationProvider',
    '$urlRouterProvider',
    '$httpProvider',
    'httpProvider',
    applicationConfig
];
