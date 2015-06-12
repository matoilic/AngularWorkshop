(function(angular){


	function DetailStateController(detail) {
		console.log('startring detail state controller ', detail);
		var vm = this;
		vm.detail = detail;
	};

	DetailStateController.prototype = {
		updateContact: function(){

		}
	}

	angular.module('DetailState')
		.controller('DetailStateController', ['detail',DetailStateController]);


})(angular)