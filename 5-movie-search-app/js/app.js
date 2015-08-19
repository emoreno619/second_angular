var app = angular.module("movieSearch", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchController'
      })
      .otherwise({ redirectTo: '/'})

      $locationProvider.html5Mode(true);
});