
app.controller("HomeController", function($scope){
	$scope.home = 1
});

app.controller("DogsController", function($scope, $http){
	$scope.dogs = "many_dogs_go_to_heaven"
	$scope.cats = "though-many-cats-don't"

	$http.get('https://api.github.com/zen').then(function(data){
	    $scope.zenData = data.data;
	});
});