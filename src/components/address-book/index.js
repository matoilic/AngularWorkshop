import angular from 'angular';
import ContactsService from './services/contacts-service'

const dependencies = [
];

export default angular
    .module('AddressBook', dependencies)
    .service('contactsService', ContactsService)
