import angular from 'angular';
import 'angular-cookies';
import visor from 'angular-visor';
import welcomeComponent from 'components/welcome/index';
import contactListComponent from 'components/contact-list/index';
import contactDetailComponent from 'components/contact-detail/index';
import contactNetworkComponent from 'components/contact-network/index';
import loginComponent from 'components/login/index';
import config from './config';
import authConfig from './authentication-config';
import errorHandling from './error-handling';
import applicationState from './application-state';
import ApplicationController from './application-controller';
import httpProvider from './http-provider';
import AuthenticationService from './authentication-service';

const dependencies = [
    'ngCookies',
    visor,
    welcomeComponent.name,
    contactListComponent.name,
    contactDetailComponent.name,
    contactNetworkComponent.name,
    loginComponent.name
];

export default angular
    .module('Application', dependencies)
    .config(config)
    .config(authConfig)
    .config(applicationState)
    .controller('ApplicationController', ApplicationController)
    .service('authenticationService', AuthenticationService)
    .provider('http', httpProvider)
    .run(errorHandling);

