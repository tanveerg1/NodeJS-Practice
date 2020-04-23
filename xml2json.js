//7 a) xml-js module needs to be installed using npm install xml-js
var convert = require('xml-js');
var fs = require('fs');

//xml to json
var xml =
'<?xml version="1.0" encoding="utf-8"?>' +
'<note importance="high" logged="true">' +
'    <title>Happy</title>' +
'    <todo>Work</todo>' +
'    <todo>Play</todo>' +
'</note>';
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});


fs.writeFile('xml2.json', result1, function(err){
	if(err) throw err;
	console.log('Saved!');
});


//json to xml
var json = fs.readFileSync('xml2.json', 'utf8');
var options = {compact: true, ignoreComment: true, spaces: 4};
var result = convert.json2xml(json, options);
console.log(result);