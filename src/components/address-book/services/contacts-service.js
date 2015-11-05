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

    createOrUpdateContact(contact) {
        let promise;

        if (contact.id) {
            promise = this._http.put(`/Contacts/${contact.id}`, contact);
        } else {
            promise = this._http.post('/Contacts', contact);
        }
        
        return promise.then(d => d.data);
    }

    set baseUrl(url) {
        this._baseUrl = url;
    }

    _findById(contacts , contactId){
        contactId = parseInt(contactId , 10);
        return contacts.find(c => c.id === contactId);
    }
}

export default [
    '$q',
    'http',
    ContactsService
];
