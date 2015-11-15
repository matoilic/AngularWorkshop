import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-list-state';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-state-component', dependencies)
    .config(contactListState);

