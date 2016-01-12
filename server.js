var http = require('http');
var url = require('url');
var fs = require('fs');

var port = process.env.PORT || 8080;

var server = http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/plain'});
    var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    res.end(ip);
    console.log(ip);
});
server.listen(port, function(){
	console.log('Our app is running on http://localhost:'+port);
});



