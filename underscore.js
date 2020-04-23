//underscore needs to be installed using npm install underscore
var _ = require('underscore');

//print Hi 3 times
function func(){
	console.log("Hi");
}
_.each([1, 2, 3], func);

//produces a new array of values by mapping each value in the list to the function(iteratee)
_.map([1, 2, 3], function(num){ return console.log(num * 3); });

//reduces the values in the array into a single value
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);