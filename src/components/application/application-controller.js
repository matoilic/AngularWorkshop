class ApplicationController {
    constructor(authenticationService, $state) {
        this._authenticationService = authenticationService;
        this._state = $state;
    }

    get authenticated() {
        return this._authenticationService.isAuthenticated();
    }

    logout() {
        this._authenticationService
            .logout()
            .then(() => {
                this._state.go('app.welcome');
            })

    }
}

export default [
    'authenticationService',
    '$state',
    ApplicationController
];
