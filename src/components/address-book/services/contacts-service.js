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

    detailContact(contactId) {
        return this.fetchContacts().then((contacts) => this._findById(contacts , contactId));
    }

    createOrUpdateContact(contact) {
        let promise;

        if (contact.id) {
            promise = this._http.put(`/Contacts/${contact.id}`, contact);
        } else {
            promise = this._http.post('/Contacts', contact);
        }
        
        return promise.then(response => {
            if(!contact.id) {
                this._contacts.unshift(response.data);
            }

            return contact;
        });
    }

    _findById(contacts , contactId) {
        contactId = parseInt(contactId , 10);
        return contacts.find(c => c.id === contactId);
    }

    fetchNetworkGraph() {
        return this.fetchContacts()
            .then(this._graphFromContacts)
    }

    _graphFromContacts(contacts, numEdges) {
        let graph = {
            nodes: [],
            edges: []
        };
        if (!numEdges) {
            numEdges = contacts.length * 2;
        }
        // Generate a random graph:
        for (let i = 0; i < contacts.length; i++)
            graph.nodes.push({
                id: 'n' + i,
                label: contacts[i].first_name + ' ' + contacts[i].last_name,
                x: Math.random(),
                y: Math.random(),
                size: Math.random(),
                color: '#666'
            });

        for (let i = 0; i < numEdges; i++)
            graph.edges.push({
                id: 'e' + i,
                source: 'n' + (Math.random() * contacts.length | 0),
                target: 'n' + (Math.random() * contacts.length | 0),
                size: Math.random(),
                color: '#ccc'
            });

        return graph;

    }
}

export default [
    '$q',
    'http',
    ContactsService
];
