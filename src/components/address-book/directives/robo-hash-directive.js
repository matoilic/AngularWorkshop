(function(angular){
'use strict';

angular.module('AddressBook').directive('roboHash',RoboHashDirective);

function RoboHashDirective(){
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
				$element.bind('mouseover',function(evt){
					$element.addClass('robo-spin');
				}); 

				$element.bind('mouseout',function(evt){
					$element.removeClass('robo-spin');
				})
		}
	}
};

})(angular);