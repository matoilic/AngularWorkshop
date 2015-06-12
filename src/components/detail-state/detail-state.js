(function() {
    'use strict';
    
    function detailRoute($stateProvider) {
        return $stateProvider
            .state('detail', {
                url: '/detail/:id',
                views: {
                    main: {
                        templateUrl: '/src/components/detail-state/detail.html',
                        controller: 'DetailStateController as detailStateController',
                        resolve: {
                            detail: ['ContactsService','$stateParams', function(ContactsService, $stateParams) {
                                return ContactsService.detailContact($stateParams.id);
                            }]
                        }
                    }
                }
            });
    }
    
    angular
        .module('DetailState')
        .config(['$stateProvider', detailRoute]);
})();