import template from './welcome.html';

function welcomeRoute($stateProvider) {
    return $stateProvider
        .state('welcome', {
            url: '/',
            views: {
                main: {
                    template: template
                }
            }
        });
}

export default [
    '$stateProvider',
    welcomeRoute
];
