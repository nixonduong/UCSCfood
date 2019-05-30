var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');

const cheerio = require('cheerio');
const request = require('request');

var port = 5000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const baseURL = 'https://nutrition.sa.ucsc.edu/';
const collegesURL = ['menuSamp.asp?locationNum=40&locationName=Colleges+Nine+%26+Ten+Dining+Hall&sName=&naFlag=',
'menuSamp.asp?locationNum=05&locationName=Cowell+Stevenson+Dining+Hall&sName=&naFlag=',
'menuSamp.asp?locationNum=20&locationName=Crown+Merrill+Dining+Hall&sName=&naFlag=',
'menuSamp.asp?locationNum=25&locationName=Porter+Kresge+Dining+Hall&sName=&naFlag=',
'menuSamp.asp?locationNum=30&locationName=Rachel+Carson+Oakes+Dining+Hall&sName=&naFlag='];

const fetchFood = function(){
    collegesURL.forEach((collegeURL) => {
        request(baseURL + collegeURL, (error, response, html) => {
            if (!error && response.statusCode == 200){
                const $ = cheerio.load(html);
                const foodElement = $('div.menusamprecipes');
                var dataNode = {
                    college: baseURL + collegeURL,
                    food: foodElement.text()
                };
                console.log(dataNode);
            }
        });
    })    
}

app.post('/submit', (req, res) => {
    console.log(req.body.foodSearch);
    fetchFood();
	res.redirect('/');
});

app.listen(port, () => {
	console.log("Server listening on port " + port + "...");
});