//4 a) newFile.txt needs to be created with 40 lines.
var fs = require('fs');
var util = require('util');

var newData;
//var count = 0;
const readFile = util.promisify(fs.readFile);

function getFile(){
	return readFile('newFile.txt');
}

getFile().then(data => {
	
	newData = data.toString().split('\r\n');
	let length = newData.length/10;
	let start = 0;
	let end = 10;
	

		for(var j = 1 ; j<=length;j++){
			fs.writeFile(`file${j}.txt`, newData.slice(start, end), function(err){
				if(err) throw err;
			});
			start = end + 1;
			end += 10;
		}
	
});