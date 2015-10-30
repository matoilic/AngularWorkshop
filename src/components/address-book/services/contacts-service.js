class ContactsService {
    constructor($q, http) {
        this._contacts = null;
        this._q = $q;
        this._http = http;
    }

    fetchContacts() {
        if(!this._contacts) {
            return this._http.get('/Contacts').then((response) => {
                this._contacts = response.data;

                return this._contacts;
            });
        }

        return this._q.when(this._contacts);
    }

    detailContact(contactId){
        return this.fetchContacts().then((contacts) => this._findById(contacts , contactId));
    }

    set baseUrl(url) {
        this._baseUrl = url;
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
    'http',
    ContactsService
];
