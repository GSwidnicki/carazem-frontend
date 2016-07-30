require("angular");
require("angular-resource");
require("angular-ui-router");
require("angular-animate");
require("angularjs-toaster");
require("angularjs-datetime-picker");
//require("firebase");
//require("angularfire");
require("./modules/search-ride/search-ride.index");
require("./modules/add-ride/add-ride.index");
require("./modules/login/login.index");
angular.injector(['ng']).get("$http").get("/config").then(function (res) {
    angular.module("CarazemApp", [
        'ngResource',
        'ui.router',
        'toaster',
        'ngAnimate',
     //   'firebase',
     //   'angularfire',
        'CarazemApp.searchride',
        'CarazemApp.addride',
        'CarazemApp.login'
    ])
        .config(require("./config"))
        .constant('BASE_URL', res.data.backend || 'http://localhost:8086');

    angular.element(document).ready(function () {
        /*var config = {
            apiKey: "AIzaSyCorw6g_hLYbOW6Jg3xxM34l4x9sFwK8EQ",
            authDomain: "carazem-36e8d.firebaseapp.com",
            databaseURL: "https://carazem-36e8d.firebaseio.com",
            storageBucket: "carazem-36e8d.appspot.com"
        };
        firebase.initializeApp(config);*/
        angular.bootstrap(document, ['CarazemApp']);
    });
});
