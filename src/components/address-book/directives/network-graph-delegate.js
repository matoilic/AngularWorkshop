import sigma from 'linkurious';

class NetworkGraphDelegate {
    constructor() {
        this.instances = {};
    }
    register(name, instance) {
        this.instances[name] = instance;
    }

    unregister(name = '') {
        delete this.instances[name];
    }

    zoomIn(name = '') {
        var instance = this.getInstance(name);

        sigma.utils.zoomTo(
          instance.camera,
          0,
          0,
          1 / instance.settings('zoomingRatio'),
          { duration: 300 }
        );
    }

    zoomOut(name = '') {
        var instance = this.getInstance(name);
        sigma.utils.zoomTo(
            instance.camera,
            0,
            0,
            instance.settings('zoomingRatio'),
            { duration: 300 }
        );
      }

    getInstance(name = '') {
        return this.instances[name];
    }
}

export default [NetworkGraphDelegate];
