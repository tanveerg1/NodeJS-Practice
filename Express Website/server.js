/*5. express and body-parser needs to be installed in order to have this application work
	npm install express body-parser --save
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/',(req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/about',(req, res) => {
	res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.get('/sitemap',(req, res) => {
	res.sendFile(path.join(__dirname + '/views/sitemap.html'));
});


const server = app.listen(3000, ()=> {
	console.log(`Express running -> Port ${server.address().port}`);
});