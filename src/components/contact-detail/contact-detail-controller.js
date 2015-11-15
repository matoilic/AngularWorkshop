class ContactDetailController {
    constructor($stateParams) {
        let [firstName, lastName] = $stateParams.name.split(' ');
        
        this.contact = {
            first_name: firstName,
            last_name: lastName
        };
    }
}

export default [
    '$stateParams',
    ContactDetailController
];
