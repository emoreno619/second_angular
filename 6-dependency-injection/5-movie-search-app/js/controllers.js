app.controller("HomeController", ['$scope', '$http', function($scope, $http){

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
}])

app.controller("SearchController", [ '$scope', '$http', '$routeParams', '$location', '$sce', function($scope, $http, $routeParams, $location){

	var url = 'http://www.omdbapi.com/?i=' + $routeParams.id

	$http.get(url).then(function(data){
	    $scope.movie = data.data;  
	    $scope.image = $sce.trustAsResourceUrl("http://img.omdbapi.com/?i=tt2294629&apikey=68479474&i=" + $scope.movie.imdbID)

	    console.log($scope.image)

	    // $http.get("http://img.omdbapi.com/?i=tt2294629&apikey=68479474&i=" + $scope.movie.imdbID).then(function(data){
	    // 	$scope.image = $scope.movie.Poster
	    // })
	     

	}, function(status){
		console.log(status)
		if(status != 200){
			console.log('invalid request')
		}
	});
	
}])