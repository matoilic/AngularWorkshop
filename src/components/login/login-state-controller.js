class LoginController {
    constructor(authenticationService, visor) {
        this._authenticationService = authenticationService;
        this._visor = visor;
        this.credentials = {};
        this.loading = false;
    }

    onSubmit() {
        this.form.$setValidity('wrongCredentials', true);

        if(this.form.$valid) {
            this.loading = true;

            this._authenticationService
                .authenticate(this.credentials.email, this.credentials.password)
                .then((token) => {
                    this._visor.setAuthenticated(token);

                    return token;
                })
                .catch(() => {
                    this.form.$setValidity('wrongCredentials', false);
                    this.loading = false;
                });
        }
    }
}

export default [
    'authenticationService',
    'visor',
    LoginController
];
