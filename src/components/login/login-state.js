import template from './login.html';

function welcomeRoute($stateProvider) {
    return $stateProvider
        .state('app.login', {
            url: 'login',
            views: {
                main: {
                    template: template,
                    controller: 'LoginStateController as loginStateController'
                }
            }
        });
}

export default [
    '$stateProvider',
    welcomeRoute
];
