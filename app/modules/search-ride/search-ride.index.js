module.exports = angular.module("CarazemApp.searchride",['google.places'])
    .config(function ($stateProvider) {
        $stateProvider
            .state("searchride", {
                url: '/',
                templateUrl: 'modules/search-ride/view/search-ride-form.html',
                controller: "SearchRideSearchCtrl",
                controllerAs: "ctrl"
            })
    })
