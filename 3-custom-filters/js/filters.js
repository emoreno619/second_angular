app.filter('kebab', function () {
  return function (input) {
  	var newStr = input.replace(/_/g, '-')
  	return newStr
  };
});

app.filter('camelFromKebabOrSnake', function () {
  return function (input) {
  	while (input.indexOf('_') != -1){

  		var newStr = []
  		var indexToCap = input.indexOf('_') + 1

  		for(var i = 0; i < input.length; i++){

  			if (indexToCap == i && indexToCap < input.length - 1){
  				newStr.push(input[indexToCap].toUpperCase())
  			} else if (i == 0){
  				newStr.push(input[i].toLowerCase())
  			} else {
  				newStr.push(input[i])
  			}

  		}
  			
		input = newStr.join("").replace('_', '')
		
  	} 


  	while (input.indexOf('-') != -1){

  		var newStr = []
  		var indexToCap = input.indexOf('-') + 1

  		for(var i = 0; i < input.length; i++){

  			if (indexToCap == i && indexToCap < input.length - 1){
  				newStr.push(input[indexToCap].toUpperCase())
  			} else if (i == 0){
  				newStr.push(input[i].toLowerCase())
  			} else {
  				newStr.push(input[i])
  			}

  		}
  			
		input = newStr.join("").replace('-', '')  	
  	} 

  	return input
  };
});