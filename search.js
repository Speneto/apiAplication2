var readLine = require("readline");
var request = require('request');
//var rl = readLine.require('readLine');
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What is The Programming language you understand the most :', answer => {

  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+answer+'&limit=10&namespace=0&format=json';

     request.post(url, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       console.log();
       console.log("Printing out Result" + "\n")
       var newvar = JSON.parse(response.body);
         console.log(newvar[1]);
     }

})
rl.close();
})
