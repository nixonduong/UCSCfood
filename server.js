var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');

var port = 5000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    console.log(req.body.foodSearch);
	res.redirect('/');
});

app.listen(port, () => {
	console.log("Server listening on port " + port + "...");
});