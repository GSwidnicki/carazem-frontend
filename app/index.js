require("angular");
require("angular-resource");
require("angular-ui-router");
require("./modules/search-ride/search-ride.index");
require("./modules/add-ride/add-ride.index");
require("./modules/login/login.index");
angular.module("CarazemApp", [
    'ngResource',
    'ui.router',
    'CarazemApp.searchride',
    'CarazemApp.addride',
    'CarazemApp.login'
])
    .config(require("./config"));