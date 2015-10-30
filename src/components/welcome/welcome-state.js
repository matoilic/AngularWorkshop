import template from './welcome.html';

function welcomeRoute($stateProvider) {
    return $stateProvider
        .state('app.welcome', {
            url: 'welcome',
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
