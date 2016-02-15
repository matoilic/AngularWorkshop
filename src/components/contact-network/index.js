import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addressBookModule from 'components/address-book/index';
import contactNetworkState from './contact-network-state';
import ContactNetworkController from './contact-network-controller';

const dependencies = [
    uiRouter,
    addressBookModule.name
];

export default angular
    .module('contact-network-state-component', dependencies)
    .controller('ContactNetworkController', ContactNetworkController)
    .config(contactNetworkState);

