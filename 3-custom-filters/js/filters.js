app.filter('kebab', function () {
  return function (input) {
  	var newStr = input.replace(/_/g, '-')
  	return newStr
  };
});