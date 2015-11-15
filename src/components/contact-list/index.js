import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-list-state';
import contactListController from './contact-list-controller';
import capitalizeFilter from './capitalize-filter';
import addressBookComponent from 'components/address-book/index';

const dependencies = [
    uiRouter,
    addressBookComponent.name
];

export default angular
    .module('contact-list-state-component', dependencies)
    .controller('ContactListController', contactListController)
    .filter('capitalize', capitalizeFilter)
    .config(contactListState);

