//3. b) i)
var fs = require('fs');

var newData;
//read a file
fs.readFile('newFile.txt', function(err, data){
	if(err)
		throw err;
	newData = data.toString().split("\r\n");
	//console.log(newData);	
	//console.log(data.split("/n"));
	
	var file = fs.createWriteStream('file.txt');
	file.on('error', function(err){});
	newData.forEach(function(v) {
		file.write(v.join(', ') + '\n');
		//console.log(typeof(v));
		file.end();
	});
	
});

//console.log(newData);


//3. b) ii)Return the path and the filename in the path
var path = require('path');
var filename = path.basename('/Users/tanveer/Desktop/NodeJs/newFile.txt');
console.log(filename);
console.log(path.dirname('/Users/tanveer/Desktop/NodeJs/newFile.txt'));

