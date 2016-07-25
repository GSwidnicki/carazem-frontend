require("angular");
require("angular-resource");
require("angular-ui-router");
require("./modules/search-ride/search-ride.index");
require("./modules/add-ride/add-ride.index");
angular.module("CarazemApp", [
    'ngResource',
    'ui.router',
    'CarazemApp.searchride',
    'CarazemApp.addride'
])
    .config(require("./config"));