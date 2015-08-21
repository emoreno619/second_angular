app.controller("homeController", ["$scope", "Data" , function($scope, Data){
	$scope.test = "BOOOP"
	$scope.teas = Data.teas
}])