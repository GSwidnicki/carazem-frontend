require("angular");
require("angular-resource");
require("angular-ui-router");
require("./modules/search-ride/search-ride.index");
angular.module("CarazemApp", [
    'ngResource',
    'ui.router',
    'CarazemApp.searchride'
])
    .config(require("./config"));