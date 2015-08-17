var app = angular.module("yourAppName", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .when('/add/:num1/:num2', {
        templateUrl: 'partials/calculator.html',
        controller: 'AddController'
      })
      .when('/divide/:num1/:num2', {
        templateUrl: 'partials/calculator.html',
        controller: 'DivideController'
      })
      .otherwise({ redirectTo: '/'})
});