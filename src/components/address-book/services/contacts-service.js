(function() {
    'use strict';

    function ContactsService($resource , $q , $http) {
        this.Contact = $resource('/data/contacts.json');
        this.Contacts;
        this.$q = $q;
        this.$http = $http;
    }
    
    ContactsService.prototype = {
        fetchContacts: function() {
            var defer  = this.$q.defer(); 
            var _this = this;
            if(!this.Contacts) {
                this.$http.get('/data/contacts.json').success(function(data){
                    _this.Contacts = data;
                    defer.resolve(_this.Contacts);
                });
            }else{
                defer.resolve(_this.Contacts); 
            }

            return defer.promise;
        },

        detailContact: function(contactId){
            var _this = this;
                
            return _this.fetchContacts().then(function(contacts){
                return _this._findById(contacts , contactId);
            });
        },

        _findById(contacts , contactId){
            var _contact,
                _contactId = parseInt(contactId , 10);

            angular.forEach(contacts , function(value , key){
                if(value.id === _contactId ){
                    _contact =  value;
                }
            });

            return _contact;
        }
    };
    
    angular
        .module('AddressBook')
        .service('ContactsService', ['$resource','$q','$http', ContactsService]);
})();
