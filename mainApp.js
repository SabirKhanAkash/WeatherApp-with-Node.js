var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Rajshahi,BD&appid=26b5f0044941489e66e756a851c68596';

var server = http.createServer(function(request, response){
    var request = require('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);

            response.write("<html><body><div id='container'>");
            response.write("<h1>"+ 'City Name - : ' + data['name'] + '<br>' + "</h1>");
            response.write("<h2>"+ 'Temperature - :' + data.main['temp'] + '<br>' + "</h2>");
            response.write("<h2>"+'Sunset Time - : '+ new Date(data.sys['sunset']*1000)+"</h2>");
            response.write("</div></body></html>");

            console.log("Server is running online...");
            response.end();
    });


}).listen(8081);