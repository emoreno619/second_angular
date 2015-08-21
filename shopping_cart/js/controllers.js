app.controller("homeController", ["$scope", "Data" , function($scope, Data){
	$scope.teas = Data.teas
}])