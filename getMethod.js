var readLine = require("readline");
var request = require('request');
//var rl = readLine.require('readLine');
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your Github UserName ? ', (username) => {
   //var url = 'https:api.github.com/users/' + username;
   var url = 'https://api.github.com/users/' + username;
   var options = {
           url: url,
             headers: {
               'User-Agent': 'request'
             }
         }
     request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
         console.log(JSON.parse(response.body), url);
     }

})
rl.close();
})
