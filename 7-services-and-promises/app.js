var app = angular.module('contactApp', ['ngSanitize']);

app.controller("contactController", ["$scope", "ContactList", function($scope, ContactList){
	$scope.contacts = []
	$scope.contactData = ContactList.contactList;

	$scope.addContact = ContactList.addContact;

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

app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [];

  ContactList.addContact = function(obj) {
    console.log(obj)
    ContactList.contactList.push(obj);
  };

  ContactList.findContact = function(name) {
    for (var i = 0; i < ContactList.contactList.length; i++){
		if(ContactList.contactList[i].name == name)
			return ContactList.contactList[i]
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
});