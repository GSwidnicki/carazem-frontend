module.exports = angular.module("CarazemApp.searchride",[])
    .config(function ($stateProvider) {
        $stateProvider
            .state("searchride", {
                url: '/',
                templateUrl: 'modules/search-ride/view/search-ride-form.html'
            })
    })
    .controller("SearchRideSearchCtrl", require("./controller/search-ride.search.ctrl"))
;