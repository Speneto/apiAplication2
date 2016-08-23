var readLine = require("readline");
var request = require('request');
//var rl = readLine.require('readLine');
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What One Programming language do you understand the most :', answer => {

  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+answer+'&limit=10&namespace=0&format=json';

     request.post(url, function (error, response, body) {
     if (!error && response.statusCode == 200) {
         console.log(JSON.parse(response.body), url);
     }

})
rl.close();
})
