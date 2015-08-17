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
      .when('/add/', {
        templateUrl: 'partials/calculator.html',
        controller: 'AddController'
      })
      .when('/divide/', {
        templateUrl: 'partials/calculator.html',
        controller: 'DivideController'
      })
      
});