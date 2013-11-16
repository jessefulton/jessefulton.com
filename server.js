var newrelic = require('newrelic');

var connect = require('connect'),
    http = require('http');
var port = process.env.PORT || 3000;
var oneDay = 86400000;

connect()
    .use(connect.static(__dirname + '/build'))
    .listen(port);

console.log("Started server on port " + port);
