app.controller("homeController", ["$scope", "Data", "Cart", function($scope, Data, Cart){
	$scope.teas = Data.teas
	$scope.quantity = Cart.quantity


	Data.teas.forEach(function(aTea){
		var aPrice = aTea.price.toString()
		var cents = aPrice.substring(2)
		
		aPrice = '$' + aPrice.substring(0,aPrice.length -2) + '.' + cents
		aTea.displayPrice = aPrice
		console.log(aTea.price)
	})

	$scope.addToCart = function(id, amount){
		Cart.addToCart(id,amount)
		$scope.quantity = Cart.quantity
	}
}])

app.controller("checkoutController", ["$scope", "Data", "Cart", function($scope, Data, Cart){

}])