class ContactDetailController {
    constructor(contact, contactsService, $state) {
        this._contactsService = contactsService;
        this.contact = contact;
        this._state = $state;
    }

    onFormSubmit(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        this._contactsService
            .createOrUpdateContact(this.contact)
            .then(newContact => {
                this.contact = newContact;
                this._state.go('app.contactList');
            });
    }
}

export default [
    'contact',
    'contactsService',
    '$state',
    ContactDetailController
];
