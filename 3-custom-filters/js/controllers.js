
app.controller("HomeController", function($scope){
	$scope.home = 1
});

app.controller("DogsController", function($scope, $http){
	$scope.dogs = "many_dogs_go_to_heaven"
	$scope.cats = "though-many-cats-don't"

	$http.get('https://api.github.com/zen').then(function(data){
	    $scope.zenData = data.data;
	});


	$http.get('./js/itunes.json').then(function(data){
	    $scope.itunes = data.data.results;
	});

	$http.get('//invalidurl').then(function(data, status){
	    console.log(status)

	    $scope.itunes = data.data.results;
	}, function(status){
		console.log(status)
		if(status != 200){
			console.log('invalid request')
		}
	});

	// $http.post('https://shielded-peak-6345.herokuapp.com/messages',{name: 'he who shall not be named!', content: 'Call me Ishmael.'}).then(function(data, status){

	// })

	$http.get('https://shielded-peak-6345.herokuapp.com/messages').then(function(data, status){

		$scope.message = data.data

	}, function(status){
		if(status != 200)
			console.log('api not working?')
	})

	
});