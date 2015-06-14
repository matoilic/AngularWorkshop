(function() {
    'use strict';
    
    function detailRoute($stateProvider) {
        return $stateProvider
            .state('contactDetail', {
                url: '/detail/:id',
                views: {
                    main: {
                        templateUrl: '/src/components/contact-detail/contact-detail.html',
                        controller: 'ContactDetailController as contactDetailController',
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
        .module('ContactDetail')
        .config(['$stateProvider', detailRoute]);
})();
