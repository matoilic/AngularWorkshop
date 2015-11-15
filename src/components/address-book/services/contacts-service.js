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
}

export default [
    '$q',
    'http',
    ContactsService
];
