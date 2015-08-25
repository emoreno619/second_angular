app.controller("homeController", ["$scope", "Data", "Cart", function($scope, Data, Cart){
	$scope.teas = Data.teas
	$scope.quantity = Cart.quantity
	$scope.total = Cart.total

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
		$scope.calculateCart();
	}

	$scope.calculateCart = function(){
		Cart.calculateCart();
		$scope.total = Cart.total
	}
}])

app.controller("checkoutController", ["$scope", "Data", "Cart", function($scope, Data, Cart){
	$scope.cart = Cart.cart
	$scope.quantity = Cart.quantity
	$scope.total = Cart.total


	$scope.findTotal = function(){
		$scope.cart.forEach(function(aTea){
			aTea.totalTeas = aTea.amount
			aTea.totalTeasa = aTea.totalTeas.toString()
			console.log(aTea.totalTeas)
		})
	}

	$scope.findTotal();
	$scope.updateCart = function(tea, amount){
		Cart.updateCart(tea, amount)
		$scope.quantity = Cart.quantity
		$scope.calculateCart();
	}

	$scope.calculateCart = function(){
		Cart.calculateCart();
		$scope.total = Cart.total
	}
}])