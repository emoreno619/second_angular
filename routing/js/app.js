var app = angular.module("yourAppName", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
});

app.controller("HomeController", function($scope){
	$scope.home = 1
});

app.controller("DogsController", function($scope){
	$scope.dogs = "many"
});