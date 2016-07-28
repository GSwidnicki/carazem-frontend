module.exports = angular.module("CarazemApp.addride",['google.places'])
    .config(function ($stateProvider) {
        $stateProvider
            .state("addride", {
                url: '/rides',
                templateUrl: 'modules/add-ride/view/add-ride-form.html',
                controller: "AddRideCtrl",
                controllerAs: "ctrl"
            })
    })
    .controller("AddRideCtrl", require("./controller/add-ride.index"))
    .factory("Ride", require("./factory/ride.factory.js"));