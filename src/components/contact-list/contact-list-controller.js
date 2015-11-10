class ContactListController {
    constructor(contacts) {
        this._index = {};
        this._contacts = contacts;
        this.keyword = '';
        this._lastResultCount = 1;
        this._buildIndex(contacts);
    }

    _buildIndex(contacts) {
        let fields = Object.keys(contacts[0]);

        contacts.forEach((contact) => {
            this._index[contact.id] = fields.map(field => contact[field] && contact[field].toString().toLowerCase()).join(' ');
        });
    }

    _searchIndex(contacts, keyword) {
        keyword = keyword.trim().toLowerCase();

        if(!keyword.length) {
            return contacts;
        }

        return contacts.filter(contact => this._index[contact.id].indexOf(keyword) !== -1);
    }

    findContacts() {
        const result = this._searchIndex(this._contacts, this.keyword);
        this._lastResultCount = result.length;

        return result;
    }

    hasMatches() {
        return this._lastResultCount > 0;
    }
}

export default [
    'contacts',
    ContactListController
];
