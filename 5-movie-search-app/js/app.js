var app = angular.module("movieSearch", ['ngRoute']);

// app.run(function($http) {
//     $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
// });

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/show/:id', {
        templateUrl: 'partials/search.html',
        controller: 'SearchController'
      })
      // .otherwise({ redirectTo: '/'})

      $locationProvider.html5Mode(true);
});