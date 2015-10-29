import angular from 'angular';
import uiRouter from 'angular-ui-router';
import welcomeState from './welcome-state';

const dependencies = [
    uiRouter
];

export default angular
    .module('welcome-state-component', dependencies)
    .config(welcomeState);
