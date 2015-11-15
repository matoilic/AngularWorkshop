import angular from 'angular';
import ngResource from 'angular-resource';
import ContactsService from './services/contacts-service'
import roboHashDirective from './directives/robo-hash-directive'
import RoboHashController from './directives/robo-hash-controller';

const dependencies = [
];

export default angular
    .module('AddressBook', dependencies)
    .service('contactsService', ContactsService)
    .directive('roboHash', roboHashDirective)
    .controller('RoboHashController', RoboHashController)
