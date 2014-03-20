var AmandaGrayApp = angular.module('AmandaGrayApp', ['ngRoute']);

	AmandaGrayApp.config(function ($routeProvider) {
		$routeProvider 
			.when('/home', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/home.html'
				})
			.when('/about', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/about.html'
				})
			.when('/publications', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/publications.html'
				})
			.when('/contact', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/contact.html'
				})
			.otherwise({ redirectTo: '/home'
				});
	})