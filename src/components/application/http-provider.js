class HttpService {
    constructor($http, baseUrl) {
        this._http = $http;
        this._staticHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if(baseUrl && baseUrl.slice(-1) !== '/') {
            baseUrl += '/';
        }
        this._baseUrl = baseUrl;
    }

    addStaticHeader(name, value) {
        this._staticHeaders[name] = value;
    }

    get(url, config = {}) {
        config = this._configureStaticHeaders(config);
        return this._http.get(this._normalizeUrl(url), config);
    }

    post(url, data, config = {}) {
        config = this._configureStaticHeaders(config);
        return this._http.post(this._normalizeUrl(url), data, config);
    }

    put(url, data, config = {}) {
        config = this._configureStaticHeaders(config);
        return this._http.put(this._normalizeUrl(url), data, config);
    }

    _configureStaticHeaders(config) {
        if(!config.headers) {
            config.headers = {};
        }

        Object.keys(this._staticHeaders).forEach((name) => {
            config.headers[name] = this._staticHeaders[name];
        });

        return config;
    }

    _normalizeUrl(url) {
        if(!this._baseUrl) {
            return url;
        }

        if(url.substr(0, 1) === '/') {
            url = url.slice(1);
        }

        return this._baseUrl + url;
    }
}

function httpProvider() {
    let baseUrl = null;

    this.setBaseUrl = function(url) {
        baseUrl = url;
    };

    this.$get = ['$http', function($http) {
        return new HttpService($http, baseUrl);
    }];
}

export default [
    httpProvider
];
