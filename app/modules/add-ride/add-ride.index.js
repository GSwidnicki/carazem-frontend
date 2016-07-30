module.exports = angular.module("CarazemApp.addride",['google.places', 'CarazemApp.login'])
    .config(function ($stateProvider) {
        $stateProvider
            .state("addride", {
                url: '/rides',
                templateUrl: 'modules/add-ride/view/add-ride-form.html',
                controller: "AddRideCtrl",
                controllerAs: "ctrl"
            })
    })
    // .config(function($httpProvider, myauth) {
    //     console.log('hehi', myauth)
    //     $httpProvider.defaults.headers.post  = { 'X-AUTH-TOKEN': myauth.idToken };
    // })
    .controller("AddRideCtrl", require("./controller/add-ride.index"))
    .factory("Ride", require("./factory/ride.factory.js"));