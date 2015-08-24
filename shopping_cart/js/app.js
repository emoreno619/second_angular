var app = angular.module('shoppingCartApp', ['ngSanitize', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'homeController'
      })
      .when('/checkout', {
        templateUrl: '/partials/checkout.html',
        controller: 'checkoutController'
      })
      .otherwise({ redirectTo: '/'})

      $locationProvider.html5Mode(true);
});