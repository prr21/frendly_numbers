function getFriendlyNumbers(start, end) {
	if (start <= end && typeof(start || end) === 'number' && (start || end) > 0) {
		let result = [],
		numbersArr = [];
	
	    for (let number = start; number <= end; number++) {
			let numbersSum = 0;
	
		    for (let i = 1; i < number; i++) {
				let divider = number / i;
		    	if ((divider ^ 0) === divider) {	    	
		    		numbersSum += i;
		    	}
		    };
		    
		    if(numbersSum < 10 || numbersSum < number) continue;
	
		    function Number(value, sum) {
				this.value = value;
				this.sum = sum;
			};
	
	    	let numObj = new Number(number, numbersSum);
	    	numbersArr.push(numObj)
		};
	
		for (let i = 0; i < numbersArr.length; i++) {
			for (let j = 0; j < numbersArr.length; j++) {
				let resultNum = [];
	
				if (numbersArr[i].value === numbersArr[j].sum && numbersArr[j].value === numbersArr[i].sum && numbersArr[i].value !== numbersArr[i].sum && numbersArr[i].value < numbersArr[i].sum) {
					resultNum.push(numbersArr[i].value);
					resultNum.push(numbersArr[j].value);
					result.push(resultNum);
					break;
				}
			}		
		} return result;
	} else return false;
}

console.log(getFriendlyNumbers(200, 1220));

module.exports = {
    firstName: 'Kurban',
    secondName: 'Prr21',
    task: getFriendlyNumbers
}
