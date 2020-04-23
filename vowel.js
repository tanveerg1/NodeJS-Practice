//person object
var person = {
	name : "John",
	age : 30,
	sex : "Male",
	education : "Bachelor Degree",
	eyeColor : "Blue"
}

//array of vowels
var vowels = ['a', 'e','i','o','u'];

//create an array of the keys in the person object
var keys = Object.keys(person);

//match the keys with the vowels and print the keys starting with vowels
keys.forEach((e1)=>vowels.forEach(e2 => {
	
	if(e1.charAt(0) === e2){
		console.log(e1);
	}
}));

