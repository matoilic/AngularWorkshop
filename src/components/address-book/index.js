import angular from 'angular';
import ngResource from 'angular-resource';
import roboHashDirective from './directives/robo-hash-directive'
import ContactsService from './services/contacts-service'

const dependencies = [
    ngResource
];

export default angular
    .module('AddressBook', dependencies)
    .directive('roboHash', roboHashDirective)
    .service('contactsService', ContactsService)
