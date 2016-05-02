angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/search', {
			templateUrl: 'views/searchBus.html',
			controller: 'GeekController'
		})

		.when('/main', {
			templateUrl: 'views/mainPage.html',
			controller: 'NerdController'	
		})

		.when('/favorites', {
			templateUrl: 'views/favorites.html',
			controller: 'NerdController'
		})

		.when('/recent', {
			templateUrl: 'views/recent.html',
			controller: 'NerdController'	
		})

		.when('/setting', {
			templateUrl: 'views/setting.html',
			controller: 'NerdController'	
		})

		.when('/results', {
			templateUrl: 'views/results.html',
			controller: 'NerdController'	
		})

		.when('/bus', {
			templateUrl: 'views/bus.html',
			controller: 'NerdController'	
		});

	// $locationProvider.html5Mode(true);

}]);