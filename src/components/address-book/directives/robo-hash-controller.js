class RoboHashController {
    constructor($window, $scope) {
        this.pixelRatio = $window.devicePixelRatio || 1;
        this._scope = $scope;
    }

    initialize($element) {
        $element
            .on('mouseover', function() {
                $element.addClass('robo-spin');
            })
            .on('mouseout', function() {
                $element.removeClass('robo-spin');
            });
    }

    get imageHeight() {
        return this.pixelRatio * this.height;
    }

    get imageWidth() {
        return this.pixelRatio * this.width;
    }

    get imageSource() {
        return `//robohash.org/${this.email}?set=set1&size=${this.imageWidth}x${this.imageHeight}`;
    }
}

export default [
    '$window',
    '$scope',
    RoboHashController
];
