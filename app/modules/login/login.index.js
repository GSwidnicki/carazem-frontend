module.exports = angular.module("CarazemApp.login",['google.places'])
    .config(function ($stateProvider) {
        $stateProvider
            .state("login", {
                url: '/login',
                templateUrl: 'modules/login/view/login-form.html',
            })
    });