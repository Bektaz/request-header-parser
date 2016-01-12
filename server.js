var http = require('http');

var port = process.env.PORT || 8080;

var server = http.createServer(function(req, res){
    var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    var soft = req.headers['user-agent'].split(' ').slice(1,5).join(' ');
    soft = soft.slice(1,soft.length-1);
    var lan = req.headers["accept-language"].split(',')[0];
    console.log(soft);
    var data = {
        IP: ip,
        language: lan,
        software: soft
    }
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(data));
});
server.listen(port, function(){
	console.log('Our app is running on http://localhost:'+port);
});



