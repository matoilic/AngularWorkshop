import angular from 'angular';
import ngResource from 'angular-resource';
import ContactsService from './services/contacts-service'
import roboHashComponent from './components/robo-hash-component';
import RoboHashComponentController from './components/robo-hash-component-controller';
import networkGraphDirective from './directives/network-graph-directive';
import NetworkGraphDelegate from './directives/network-graph-delegate';

const dependencies = [
    ngResource
];

export default angular
    .module('AddressBook', dependencies)
    .component('roboHash', roboHashComponent)
    .service('contactsService', ContactsService)
    .controller('RoboHashComponentController', RoboHashComponentController)
    .directive('networkGraph', networkGraphDirective)
    .service('networkGraphDelegate', NetworkGraphDelegate);
