const COOKIE_NAME = 'authToken';

class AuthenticationService {
    constructor(http, $cookies, visor, $q) {
        this._http = http;
        this._cookies = $cookies;
        this._visor = visor;
        this._q = $q;
    }

    authenticate(email, password) {
        return this._fetchAuthToken(email, password)
            .then((token) => {
                this._cookies.put(COOKIE_NAME, token);

                return token;
            });
    }

    restoreSession() {
        return this._cookies.get(COOKIE_NAME, null);
    }

    _fetchAuthToken(email, password) {
        return this._http
            .post('/Users/login', {email, password})
            .then((response) => response.data.id);
    }

    isAuthenticated() {
        return this._visor.isAuthenticated();
    }

    logout() {
        this._q
            .when()
            .then(() => {
                this._cookies.remove(COOKIE_NAME);
                this._visor.setUnauthenticated();
            });
    }
}

export default [
    'http',
    '$cookies',
    'visor',
    '$q',
    AuthenticationService
]
