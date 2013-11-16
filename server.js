var newrelic = require('newrelic');

var connect = require('connect'),
    http = require('http');
var port = process.env.PORT || 3000;
var oneDay = 86400000;

connect()
	.use(function(req, res, next) {
		if (req.headers.host === 'www.jessefulton.com') {
			res.writeHead(301, {'Location': 'http://jessefulton.com' + req.url}); 
			return res.end();
		}
		else {
			return next();
		}
	})
    .use(connect.static(__dirname + '/build'))
    .listen(port);

console.log("Started server on port " + port);
