import angular from 'angular';
import 'angular-messages';
import uiRouter from 'angular-ui-router';
import loginState from './login-state';
import LoginStateController from './login-state-controller';

const dependencies = [
    'ngMessages',
    uiRouter
];

export default angular
    .module('login-state-component', dependencies)
    .config(loginState)
    .controller('LoginStateController', LoginStateController);
