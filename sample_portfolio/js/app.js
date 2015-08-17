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
      .otherwise({ redirectTo: '/'})
});