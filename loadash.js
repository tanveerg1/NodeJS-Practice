//Lodash needs to be installed using npm install lodash
var _ = require("lodash");

//create a user object
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true },
  { 'user': 'barney',  'age': 48, 'active': false }
];

//find the first user who is active
console.log(_.find(users, 'active'));

//returns a new array of the values that are not excluded [2,3]
console.log(_.difference([2,1],[2,3]));

//gets the last value in the array
console.log(_.last([1,2,3]));


var array = ['a', 'b', 'c', 'd'];

//gets the value at the given given index, if its negative it starts from the end
console.log(_.nth(array, 1));
console.log(_.nth(array, -4));

//joins the array into one string separated by a separator
console.log(_.join(array, '~'));

//returns a new array by sorting in the ascending order
console.log(_.sortBy(users, ['user']));

//returns the index where the value should be inserted
console.log(_.sortedIndex(array, 'e'));

