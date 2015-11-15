import template from './contact-detail.html';

function detailRoute($stateProvider) {
    return $stateProvider
        .state('app.contactDetail', {
            url: 'detail/:id?',
            views: {
                main: {
                    template: template
                }
            }
        });
}

export default [
    '$stateProvider',
    detailRoute
];
