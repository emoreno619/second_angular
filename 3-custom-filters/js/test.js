function testIt(input){
	
  	
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
}

// console.log(testIt("Hi_there"))
// console.log(testIt("Hi_there_yall"))
// console.log(testIt("Hi-there"))
// console.log(testIt("Hi-there-yall"))
// console.log(testIt("you-got_it-Bub"))

function fromSwine(input){
	
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

// console.log(fromSwine("hi egg"))
// console.log(fromSwine("what straight another"))

function redact(input, target){
	var words = input.split(' ')

	words.forEach(function(aWord, index){
		if (aWord == target)
			words[index] = "REDACTED"		
	})

	return words.join(' ')
}

console.log(redact("BOOP BOOPITY BOOP BOOP DA-DOOP", "BOOP"))
console.log(redact("Hi there. My name is Eduardo", "Eduardo"))