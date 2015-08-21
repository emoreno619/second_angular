var app = angular.module('contactApp', ['ngSanitize', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/contact.html',
        controller: 'contactController'
      })
      .when('/show/:index', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
      .otherwise({ redirectTo: '/'})

      $locationProvider.html5Mode(true);
});

app.controller("contactController", ["$scope", "ContactList", function($scope, ContactList){
	
	$scope.contactData = ContactList.contactList;

	$scope.addContact = ContactList.addContact;
	$scope.removeContact = ContactList.removeContact;
	$scope.findContact = ContactList.findContact;

	$scope.highlightMe = function(event){
		$scope.highlight = true;
		$scope.lowlight = false;
		console.log(event)
	}

	$scope.lowlightMe = function(event){
		$scope.highlight = false;
		$scope.lowlight = true;
	}
}])

app.controller("ShowController", ["$scope", "$routeParams", "ContactList", function($scope, $routeParams, ContactList){
	$scope.contactData = ContactList.contactList;

	console.log($routeParams.index)
	console.log($scope.contactData)
	$scope.contact = $scope.contactData[parseInt($routeParams.index)]
	$scope.addContact = ContactList.addContact;
	$scope.removeContact = ContactList.removeContact;
	$scope.findContact = ContactList.findContact;

}])

app.factory('ContactList', ["$http", function($http) {
  var ContactList = {};

  ContactList.contactList = [];

  ContactList.addContact = function(obj) {
    console.log(obj)
    
    var apiUrl = "http://api.giphy.com/v1/gifs/search?q=" + obj.name + "&api_key=dc6zaTOxFJmzC"

    $http.get(apiUrl).then(function(data){
    	console.log(data.data.data)
    	obj.gif = data.data.data[0].embed_url
    	console.log(obj)
        ContactList.contactList.push(obj);
    }, function(status){
    	console.log(status)
    	if(status != 200){
    		console.log('invalid request')
    	}
    });
  };

  ContactList.findContact = function(name) {
    for (var i = 0; i < ContactList.contactList.length; i++){
		if(ContactList.contactList[i].name == name)
			return i
	}
  };

  ContactList.removeContact = function(index) {
	var arr = []
	for (var i = 0; i < ContactList.contactList.length; i++){
		if(i!=index)
			arr.push(ContactList.contactList[i])
	}
	ContactList.contactList = arr;
  };

  return ContactList;
}]);