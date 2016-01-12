var http = require('http');
var url = require('url');
var fs = require('fs');

var port = process.env.PORT || 8080;

var server = http.createServer(function(req, res){
    /*var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    var soft = req.headers['user-agent'].split(' ').slice(1,6).join(' ');
    soft = soft.slice(1,soft.length-1);
    console.log(soft,'   ip: ',ip);*/
    res.writeHead(200,{'content-type':'text/text'});
    res.end(req.socket._peername.address);
});
server.listen(port, function(){
	console.log('Our app is running on http://localhost:'+port);
});



