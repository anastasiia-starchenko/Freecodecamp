/*Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.*/

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : ``;
}

function repeatStringNumTimes(str, num) {
	let new_str = ``;
  	for (let i = 0; i < num; i++) {
  		new_str += str;
  	}
  	return new_str;
}
