import template from './robo-hash-directive.html';

function RoboHashDirective($window) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            email: '=',
            width: '=',
            height: '='
        },
        template: template,
        link: function($scope, $element) {
            $scope.pixelRatio = $window.devicePixelRatio || 1;

            $element.bind('mouseover', function() {
                $element.addClass('robo-spin');
            });

            $element.bind('mouseout', function() {
                $element.removeClass('robo-spin');
            });
        }
    }
}

export default [
    '$window',
    RoboHashDirective
];
