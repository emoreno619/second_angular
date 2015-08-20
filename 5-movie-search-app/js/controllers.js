app.controller("HomeController", function($scope, $http){

	$scope.search = function(query){
	
		var url = 'http://www.omdbapi.com/?s=' + encodeURIComponent(query)
		
		$http.get(url).then(function(data){
		    $scope.searchResults = data.data.Search;
		}, function(status){
			console.log(status)
			if(status != 200){
				console.log('invalid request')
			}
		});
	}
})

app.controller("SearchController", function($scope, $http, $routeParams, $location){

	var url = 'http://www.omdbapi.com/?i=' + $routeParams.id

	$http.get(url).then(function(data){
	    $scope.movie = data.data;    
	}, function(status){
		console.log(status)
		if(status != 200){
			console.log('invalid request')
		}
	});
	
})