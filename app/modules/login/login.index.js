module.exports = angular.module("CarazemApp.login",[])
    .config(function ($stateProvider) {
        $stateProvider
            .state("login", {
                url: '/login',
                templateUrl: 'modules/login/view/login-form.html'
            })
    });