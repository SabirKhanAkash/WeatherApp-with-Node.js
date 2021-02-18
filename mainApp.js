var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Rajshahi,BD&appid=56632d38bb84f8555911b34ce92aac60';

var server = http.createServer(function(request, response){
    var request = require('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);

            response.write("<html><body><div id='container' align='center'>");
            response.write("<h1>"+ 'City Name : ' + data['name'] + ',' + data.sys['country'] + '<br>' + "</h1>");
            response.write("<h2>"+ 'Co-Ordinate : Longitudinal ' + (data.coord['lon']).toFixed(2) + ' Latitudinal ' + (data.coord['lat']).toFixed(2) + '<br>' + "</h2>");
            response.write('<br>' + "<h2>"+ 'Weather : ' + data.weather['description'] + '<br>' + "</h2>");
            response.write('<br>' + "<h2>"+ 'Temperature : ' + (data.main['temp']*0.1).toFixed(2) + ' C' + '<br>' + "</h3>");
            response.write("<h2>"+ 'Feels like : ' + (data.main['feels_like']*0.1).toFixed(2) + ' C' + '<br>' + "</h3>");
            response.write("<h2>"+ 'Minimum Temperature : ' + (data.main['temp_min']*0.1).toFixed(2) + ' C' + '<br>' + "</h3>");
            response.write("<h2>"+ 'Maximum Temperature : ' + (data.main['temp_max']*0.1).toFixed(2) + ' C' + '<br>' + "</h3>");
            response.write('<br>' + "<h2>"+ 'Pressure : ' + (data.main['pressure']).toFixed(0) + ' hPa' + '<br>' + "</h3>");
            response.write("<h2>"+ 'Humidity : ' + (data.main['humidity']).toFixed(1) + '%' + '<br>' + "</h3>");
            response.write("<h2>"+ 'Wind Speed : ' + (data.wind['speed']).toFixed(2) + ' m/s'  + '<br>' + "</h3>");
            response.write('<br>' + "<h2>"+'Sunrise Time : '+ new Date(data.sys['sunrise']*1000)+"</h3>");
            response.write("<h2>"+'Sunset Time : '+ new Date(data.sys['sunset']*1000)+"</h3>");
            response.write("</div></body></html>");

            console.log("Server is running online...");
            response.end();
    });


}).listen(8081);