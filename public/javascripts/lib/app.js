'use strict';

// Declare app level module which depends on filters, and services
angular.module("testAngular", ['testAngular.controllers',
	'testAngular.controllers',
	'testAngular.filters',
	'testAngular.services',
	'testAngular.directives'
]).
config(function($routeProvider,$locationProvider){
	$routeProvider.
		when('/view1',
			{
				templateUrl: 'partials/view1',
				controller: 'NoControl'
			}).
		when('/view2',
			{
				templateUrl: 'partials/view2',
				controller: 'NoControl'
			}).
		when('/view3',
			{
				templateUrl: 'partials/view3',
				controller: 'SimpleController'
			}).
		when('/view4',
			{
				templateUrl: 'partials/view4',
				controller: 'SimpleController'
			}).
		otherwise(
			{
				redirectTo: '/view1'
			})
	$locationProvider.html5Mode(true);
});