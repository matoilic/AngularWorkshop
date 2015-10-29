import angular from 'angular';
import welcomeComponent from 'components/welcome/index';
import contactListComponent from 'components/contact-list/index';
import contactDetailComponent from 'components/contact-detail/index';
import config from './config';

const dependencies = [
    welcomeComponent.name,
    contactListComponent.name,
    contactDetailComponent.name
];

export default angular
    .module('Application', dependencies)
    .config(config);

