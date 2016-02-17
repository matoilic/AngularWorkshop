class RoboHashComponentController {
    constructor($window) {
        this.pixelRatio = $window.devicePixelRatio || 1;
        this._shouldSpin = false;
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
    
    get shouldSpin() {
        return this._shouldSpin;
    }
    
    onMouseOut() {
        this._shouldSpin = false;
    }

    onMouseOver() {
        this._shouldSpin = true;
    }
}

export default [
    '$window',
    RoboHashComponentController
];
