app.controller("homeController", ["$scope", "Data" , function($scope, Data){
	$scope.teas = Data.teas

	Data.teas.forEach(function(aTea){
		var aPrice = aTea.price.toString()
		var cents = aPrice.substring(2)
		
		aPrice = '$' + aPrice.substring(0,aPrice.length -2) + '.' + cents
		aTea.price = aPrice
		console.log(aTea.price)
	})



	$scope.cart = {}
	$scope.cart.quantity = "Empty!"
}])