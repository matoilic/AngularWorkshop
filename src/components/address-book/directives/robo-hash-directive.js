import template from './robo-hash-directive.html';

function RoboHashDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            email: '=',
            width: '=',
            height: '='
        },
        template: template,
        controller: 'RoboHashController as roboHashController',
        bindToController: true,
        link: function($scope, $element) {
            $scope.roboHashController.initialize($element);
        }
    }
}

export default [
    RoboHashDirective
];
