function authenticationConfig(visorProvider) {
    visorProvider.authenticate = ['$q', 'authenticationService', 'http', ($q, authenticationService, http) => {
        const token = authenticationService.restoreSession();

        if(token) {
            http.addStaticHeader('Authorization', token);

            return $q.when(token);
        }

        return $q.reject();
    }];

    const visorDoAfterManualAuthentication = visorProvider.doAfterManualAuthentication;
    visorProvider.doAfterManualAuthentication = ['$location', 'http', 'authData', '$injector', ($location, http, token, $injector) => {
        http.addStaticHeader('Authorization', token);
        $injector.invoke(visorDoAfterManualAuthentication, null, { authData: token });
    }];
}

export default [
    'visorProvider',
    authenticationConfig
];
