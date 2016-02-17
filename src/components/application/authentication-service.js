const COOKIE_NAME = 'authToken';

class AuthenticationService {
    constructor(http, $cookies) {

        this._cookies = $cookies;
        this._http = http;
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
}

export default [
    'http',
    '$cookies',
    AuthenticationService
]
