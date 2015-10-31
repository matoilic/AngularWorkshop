import angular from 'angular';
import ngCookies from 'angular-cookies';
import welcomeComponent from 'components/welcome/index';
import contactListComponent from 'components/contact-list/index';
import contactDetailComponent from 'components/contact-detail/index';
import config from './config';
import errorHandling from './error-handling';
import applicationState from './application-state';
import ApplicationController from './application-controller';
import httpProvider from './http-provider';
import AuthenticationService from './authentication-service';

const dependencies = [
    'ngCookies',
    welcomeComponent.name,
    contactListComponent.name,
    contactDetailComponent.name
];

export default angular
    .module('Application', dependencies)
    .config(config)
    .config(applicationState)
    .controller('ApplicationController', ApplicationController)
    .service('authenticationService', AuthenticationService)
    .provider('http', httpProvider)
    .run(errorHandling);

