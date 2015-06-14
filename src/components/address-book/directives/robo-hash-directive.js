(function(){
    'use strict';

    function RoboHashDirective($window){
        return{
            restrict:'E',
            replace:true,
            scope:{
                email:'=',
                width:'=',
                height:'='
            },      
            templateUrl:'src/components/address-book/directives/robo-hash-directive.html',
            link:function($scope , $element , $attrs ){
                $scope.pixelRatio = $window.devicePixelRatio || 1;

                $element.bind('mouseover',function(evt){
                    $element.addClass('robo-spin');
                }); 

                $element.bind('mouseout',function(evt){
                    $element.removeClass('robo-spin');
                })
            }
        }
    };

    angular.module('AddressBook').directive('roboHash', ['$window', RoboHashDirective]);

})();
