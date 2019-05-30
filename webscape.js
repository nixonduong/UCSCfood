const cheerio = require('cheerio');
const request = require('request');

const baseURL = 'https://nutrition.sa.ucsc.edu/';
const collegesURL = ['menuSamp.asp?locationNum=40&locationName=Colleges+Nine+%26+Ten+Dining+Hall&sName=&naFlag=',
'menuSamp.asp?locationNum=05&locationName=Cowell+Stevenson+Dining+Hall&sName=&naFlag=',
'menuSamp.asp?locationNum=20&locationName=Crown+Merrill+Dining+Hall&sName=&naFlag=',
'menuSamp.asp?locationNum=25&locationName=Porter+Kresge+Dining+Hall&sName=&naFlag=',
'menuSamp.asp?locationNum=30&locationName=Rachel+Carson+Oakes+Dining+Hall&sName=&naFlag='];
var dataList = [];
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
                dataList.push(dataNode);
            }
        });
    })    
    return dataList;
}

console.log(fetchFood());





