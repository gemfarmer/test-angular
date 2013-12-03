'use strict';

/* Controllers */

angular.module('testAngular.controllers', []).
	controller('SimpleController', function ($scope, $http) {
		$http({
			method: 'GET',
			url: '/api/names'
		}).
		success(function (data, status, headers, config) {
			$scope.names = data.names;
		}).
		error(function (data, status, headers, config) {
			$scope.names = 'Error!'
		});
		$scope.addPerson = function () {
			$scope.names.push(
				{
					name: $scope.newPerson.name,
					city: $scope.newPerson.city
				}
			)
		}
	}).
	controller('NoControl', function ($scope) {
	// write Ctrl here
	})
	


// console.log(controllers)

// Hard coded data for Controller example
// SimpleController = function($scope){
// 	$scope.names = [
// 		{name:'Brian', city:'Minneapolis'}, 
// 		{name:'Chase', city:'Madison'}, 
// 		{name:'Collin', city:'Boulder'}, 
// 		{name: 'Brian', city: 'Boulder'}
// 	]
// }