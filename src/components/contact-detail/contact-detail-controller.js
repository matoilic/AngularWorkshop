(function(){
    'use strict';

    function ContactDetailController(contact) {
        this.contact = contact;
    };

    ContactDetailController.prototype = {
        updateContact: function(){
            return false;
        }
    }

    angular.module('ContactDetail')
        .controller('ContactDetailController', ['detail', ContactDetailController]);


})();
