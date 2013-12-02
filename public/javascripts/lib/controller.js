

var testAngular = angular.module("testAngular", [])

testAngular.config(function($routeProvider){
	$routeProvider
		.when('/',
			{
				controller: 'SimpleController',
				templateURL: './../../../views/partials/view1.jade'
			})
		.when('/partial2',
			{
				controller: 'SimpleController',
				templateURL: './../../../views/partials/view2.jade'
			})
		.otherwise({redirectTo: '/'})
});

var controllers = {}
controllers.SimpleController = function($scope){
	$scope.names = [
		{name:'Brian', city:'Minneapolis'}, 
		{name:'Chase', city:'Madison'}, 
		{name:'Collin', city:'Boulder'}, 
		{name: 'Brian', city: 'Boulder'}
	]
	$scope.addPerson = function(){
		$scope.names.push(
			{
				name: $scope.newPerson.name,
				city: $scope.newPerson.city
			}
		)
	}
}

testAngular.controller(controllers)
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