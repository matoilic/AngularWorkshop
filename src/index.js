angular.element(document).ready(function() {
    'use strict';

    var appContainer = document.getElementById('addressBookApp');
    angular.bootstrap(appContainer, ['Application'], { strictDi: true });
});
