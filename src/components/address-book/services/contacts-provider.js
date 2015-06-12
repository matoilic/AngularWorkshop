(function(angular) {
	angular.module('AddressBook').provider('ContactsProvider',ContactsProvider);

	function ContactsProvider(){
		var ContactsPath = '/data/contacts.json';


		setContactsPath = function( _path  ){
			console.log('setting the path '  , _path);
			this.ContactsPath =  _path;
		}

		this.$get = ['$resource','$filter', function($resource,$filter){
				var _this = this,
			ContactResource = $resource(ContactsPath),
			Contacts = [];

			return {
				fetchContacts:FetchContacts,
				detailContact:DetailContact
			}

			function FetchContacts(){				
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
			}

			function DetailContact(contactId){
				 var _this = this;

	            return _this.fetchContacts().then(function(contacts){
	                return _this._findById(contacts , contactId);
	            });
			}


			function _findById(contacts , contactId) {
				 var _contact,
                _contactId = parseInt(contactId , 10);

            	angular.forEach(contacts , function(value , key){
               	 	if(value.id === _contactId ){
                    _contact =  value;
                	}
            	});

            	return _contact;
			}
		}];
	}

})(angular);