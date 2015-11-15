import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactDetailState from './contact-detail-state';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-detail', dependencies)
    .config(contactDetailState);
