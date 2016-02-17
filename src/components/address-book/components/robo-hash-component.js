import template from './robo-hash-component.html';

const roboHashComponent = {
    bindings: {
        email: '<',
        width: '<',
        height: '<'
    },
    template: template,
    controller: 'RoboHashComponentController'
};

export default roboHashComponent;
