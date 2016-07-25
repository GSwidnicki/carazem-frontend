module.exports = angular.module("CarazemApp.addride",['google.places'])
    .config(function ($stateProvider) {
        $stateProvider
            .state("addride", {
                url: '/ride',
                templateUrl: 'modules/add-ride/view/add-ride-form.html',
                //controller: "AddRideCtrl",
                //controllerAs: "ctrl"
            })
    });