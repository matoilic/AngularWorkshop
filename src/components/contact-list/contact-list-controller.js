class ContactListController {
    constructor(contacts) {
        this._index = {};
        this._contacts = contacts;
        this._keyword = '';
        this._buildIndex(contacts);
        this._updateSearchResult(contacts, '');
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

    set keyword(value) {
        this._keyword = value;
        this._updateSearchResult(this._contacts, value);
    }

    get keyword() {
        return this._keyword;
    }

    findContacts() {
        return this._searchResult;
    }

    hasMatches() {
        return this._searchResult.length > 0;
    }

    _updateSearchResult(contacts, keyword) {
        this._searchResult = this._searchIndex(contacts, keyword);
    }
}

export default [
    'contacts',
    ContactListController
];
