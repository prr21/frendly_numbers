'use strict'
function getFriendlyNumbers(start, end) {
	var numbersArr = {},
		result = [];

	if (start <= end && typeof(start || end) === 'number' && (start || end) > 0) {
	
	    for (let startNum = start; startNum <= end; startNum++) {
			let numbersSum = 0;
	
		    for (let i = 1; i < startNum; i++) {
				let divider = startNum / i;

		    	if ((divider ^ 0) === divider) {
		    		numbersSum += i;
		    	}
		    };
		    
		    if (numbersSum < start) continue;
		    else numbersArr[startNum] = numbersSum;
		};
	};

	for (let i in numbersArr) {
		for (let j in numbersArr) {
			let resultNum = [];

			if (i == numbersArr[j] && j == numbersArr[i] && i < numbersArr[i]) {
				resultNum.push(+i);
				resultNum.push(+j);
				result.push(resultNum);
			}
		}
	}
	return result;
}	

console.log(getFriendlyNumbers(200, 1220));

module.exports = {
    firstName: 'Kurban',
    secondName: 'Prr21',
    task: getFriendlyNumbers
}
