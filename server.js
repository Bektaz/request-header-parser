var http = require('http');
var url = require('url');
var fs = require('fs');

var port = process.env.PORT || 8080;

var server = http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end(req.connection.remoteAddress);
    console.log(req.connection.remoteAddress);
});
server.listen(port, function(){
	console.log('Our app is running on http://localhost:'+port);
});



