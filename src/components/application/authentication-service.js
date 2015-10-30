import authenticationDialog from './authentication-dialog.html';
import vexDialog from 'vex-dialog';
import vex from 'vex';
import $ from 'jquery';

class AuthenticationService {
    constructor($q, http) {
        vex.defaultOptions.className = 'vex-theme-plain';
        this._http = http;
        this._authDeferred = $q.defer();
    }

    authenticate() {
        vexDialog.open({
            message: 'Login',
            input: authenticationDialog,
            onSubmit: (event) => {
                event.preventDefault();
                event.stopPropagation();

                const email = event.target.querySelector('input[name="email"]').value;
                const password = event.target.querySelector('input[name="password"]').value;

                this._fetchAuthToken(email, password)
                    .then((token) => {
                        this._authDeferred.resolve(token);
                        vex.close($(event.target).parent().data().vex.id);
                    })
                    .catch(() => {
                        vex.close($(event.target).parent().data().vex.id);
                        this._showErrorMessage();
                    });
            }
        });

        return this._authDeferred.promise;
    }

    _fetchAuthToken(email, password) {
        return this._http.post('/Users/login', {email, password});
    }

    _showErrorMessage() {
        vexDialog.alert({
            message: 'Zugangsdaten ungültig',
            callback: () => this.authenticate()
        })
    }
}

export default [
    '$q',
    'http',
    AuthenticationService
]
