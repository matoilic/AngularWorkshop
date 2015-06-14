(function() {
    'use strict';
    
    function welcomeRoute($stateProvider) {
        return $stateProvider
            .state('welcome', {
                url: '/',
                views: {
                    main: {
                        templateUrl: '/src/components/welcome/welcome.html'
                        }
                    }
            });
    }
    
    angular
        .module('Welcome')
        .config(['$stateProvider', welcomeRoute]);
})();
