class ContactDetailController {
    constructor(contact, contactsService) {
        this._contactsService = contactsService;
        this.contact = contact;
    }

    onFormSubmit(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        this._contactsService.createOrUpdateContact(this.contact)
            .then(newContact => {
                this.contact = newContact;
            });
    }
}

export default [
    'contact',
    'contactsService',
    ContactDetailController
];
