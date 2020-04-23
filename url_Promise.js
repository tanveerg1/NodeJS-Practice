//4 b) any url would work
var url = require('url');

const promise = new Promise((resolve, reject)=>{
	
	var addr = 'https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/';
	var q = url.parse(addr, true);
	resolve(q);
}).then(data=> {
	console.log(data.host);
	console.log(data.pathname);
});