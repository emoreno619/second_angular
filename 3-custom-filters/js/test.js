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

console.log(testIt("Hi_there"))
console.log(testIt("Hi_there_yall"))
console.log(testIt("Hi-there"))
console.log(testIt("Hi-there-yall"))
console.log(testIt("you-got_it-Bub"))