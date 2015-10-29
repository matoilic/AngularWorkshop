import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addressBookComponent from 'components/address-book/index';
import ContactDetailController from './contact-detail-controller';
import contactDetailState from './contact-detail-state';

const dependencies = [
    uiRouter,
    addressBookComponent.name
];

export default angular
    .module('contact-detail', dependencies)
    .controller('ContactDetailController', ContactDetailController)
    .config(contactDetailState);
