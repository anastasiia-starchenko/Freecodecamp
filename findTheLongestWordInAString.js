/*Return the length of the longest word in the provided sentence.
Your response should be a number.*/

function findLongestWordLength(str) {
	let words = str.split(' '), maxLength = 0;
	for (let i = 0; i < words.length; i++) {
		words[i].length > maxLength ? maxLength = words[i].length : ``;
	}
  	return maxLength;
}
