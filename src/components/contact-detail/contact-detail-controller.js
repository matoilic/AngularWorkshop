class ContactDetailController {
    constructor(contact) {
        this.contact = contact;
    }

    onFormSubmit(event){
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

export default [
    'detail',
    ContactDetailController
];
