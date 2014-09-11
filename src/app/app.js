
/*================================================================
=>                  App = dreamcosplay
==================================================================*/
/*global angular*/

var app = angular.module('dreamcosplay', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider','$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	'use strict';

      $stateProvider
        .state('homepage', {
            url: "/",
            templateUrl: "../app/partials/home/home.tpl.html"
        })

}]);


/*================================================================
=>                  dreamcosplay App Run()
==================================================================*/

app.run(['$rootScope', function ($rootScope) {

	'use strict';

	console.log('Angular.js run() function...');
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */
