app.filter('kebab', function () {
  return function (input) {
  	var newStr = input.replace(/_/g, '-')
  	return newStr
  };
});

app.filter('redact', function(){
	return function(input, target){
		var words = input.split(' ')

		words.forEach(function(aWord, index){
			if (aWord == target)
				words[index] = "REDACTED"		
		})

		return words.join(' ')
	}
})

app.filter('fromFineToSwine', function (){
	return function (input) {
		var words = input.split(' ')
			var results = []

			words.forEach(function(input){

				var newStr = ""

				for (var i = 0; i < input.length; i++){
					if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u'){	
							var vowelIndex = i;
							i = input.length
					}
				}

				if (vowelIndex == 0){
					newStr = input + "-yay"
				} else {
					var temp = ""
					for (var i = 0; i < vowelIndex; i++){
						temp += input[i]
					}
					newStr = input.substring(vowelIndex, input.length) + "-" + temp + "ay"
				}

				results.push(newStr)
			})

			return results.join(' ')
	}
})

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