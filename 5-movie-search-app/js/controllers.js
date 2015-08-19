app.controller("HomeController", function($scope, $http){
	$scope.someData = "BOOOOP Controllers on same page!"

	$scope.searchResults;

	$scope.search = function(query){
	
		var url = 'http://www.omdbapi.com/?s=' + encodeURIComponent(query)
		
		console.log(url)
		
		$http.get(url).then(function(data){
		    $scope.searchResults = data.data.Search;
		    console.log(data,"inside http promise")
		    console.log($scope.searchResults,"scope inside promise")
		}, function(status){
			console.log(status)
			if(status != 200){
				console.log('invalid request')
			}
		});
	}
})

app.controller("SearchController", function($scope, $http){

	$scope.searchResults;

	// $http.get('http://www.omdbapi.com/?s=star').then(function(data){
	// 	   $scope.searchResults2 = data.data.Search;

	// 	}, function(status){
	// 		console.log(status)
	// 		if(status != 200){
	// 			console.log('invalid request')
	// 		}
	// 	});

	$scope.search = function(query){
	
		var url = 'http://www.omdbapi.com/?s=' + encodeURIComponent(query)
		
		console.log(url)
		
		$http.get(url).then(function(data){
		    $scope.searchResults = data.data.Search;
		    console.log(data,"inside http promise")
		    console.log($scope.searchResults,"scope inside promise")
		}, function(status){
			console.log(status)
			if(status != 200){
				console.log('invalid request')
			}
		});
	}

})