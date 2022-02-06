/*Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/


function largestOfFour(arr) {
	let maxNumber = 0, maxArray = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > maxNumber) {
				maxNumber = arr[i][j];
				maxArray = arr[i];
			}
		}
	}
  	return maxArray;
}


