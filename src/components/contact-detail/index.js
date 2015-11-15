import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ContactDetailController from './contact-detail-controller';
import contactDetailState from './contact-detail-state';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-detail', dependencies)
    .controller('ContactDetailController', ContactDetailController)
    .config(contactDetailState);
