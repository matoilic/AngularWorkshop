class ContactNetworkController {
    constructor(graph, networkGraphDelegate) {
        this.graph = graph;

        this._networkGraphDelegate = networkGraphDelegate;
    }

    zoomIn() {
        this._networkGraphDelegate.zoomIn();
    }

    zoomOut() {
        this._networkGraphDelegate.zoomOut();
    }

}

export default [
    'graph',
    'networkGraphDelegate',
    ContactNetworkController
];
