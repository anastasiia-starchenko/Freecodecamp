/*Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.*/

function reverseString(str) {
	let reverse_str = [];
	for (let i = str.length-1; i >= 0; i--) {
		reverse_str.push(str[i]);
	}
  return reverse_str.join(``);
}

function reverseString(str) {
	let reverse_str = [];
	for (let i = 0; i < str.length; i++) {
		reverse_str.unshift(str[i]);
	}
  return reverse_str.join(``);
}

