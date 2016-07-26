module.exports = angular.module("CarazemApp.addlogin",['google.places'])
    .config(function ($stateProvider) {
        $stateProvider
            .state("addlogin", {
                url: '/login',
                templateUrl: 'modules/add-login/view/add-login-form.html',
                //controller: "AddRideCtrl",
                //controllerAs: "ctrl"
            })
    });