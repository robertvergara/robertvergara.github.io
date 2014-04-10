var RobVergaraApp = angular.module('RobVergaraApp', ['ngRoute']);

	RobVergaraApp.config(function ($routeProvider) {
		$routeProvider 
			.when('/home', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/home.html'
				})
			.when('/calendar', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/calendar.html'
				})
			.otherwise({ redirectTo: '/home'
				});
	})