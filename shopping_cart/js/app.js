var app = angular.module('shoppingCartApp', ['ngSanitize', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'homeController'
      })
      .when('/show/:index', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
      .otherwise({ redirectTo: '/'})

      $locationProvider.html5Mode(true);
});