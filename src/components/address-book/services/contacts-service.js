class ContactsService {
    constructor($q, $http) {
        this.contacts = null;
        this.$q = $q;
        this.$http = $http;
    }

    fetchContacts() {
        if(!this.contacts) {
            return this.$http.get('/data/contacts.json').then((response) => {
                this.contacts = response.data;

                return this.contacts;
            });
        }

        return this.$q.when(this.contacts);
    }

    detailContact(contactId){
        return this.fetchContacts().then((contacts) => this._findById(contacts , contactId));
    }

    _findById(contacts , contactId){
        let contact = null;
        contactId = parseInt(contactId , 10);

        /**
         * some only goes through the array until it finds the first match
         */
        contacts.some((c) => {
            if(c.id === contactId) {
                contact = c;

                return true;
            }

            return false;
        });

        return contact;
    }
}

export default [
    '$q',
    '$http',
    ContactsService
];
