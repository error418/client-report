var express = require('express');
var bodyParser = require('body-parser');
var LoggerFactory = require('log');
var log = new LoggerFactory('info');
var util = require('util');

var app = express();

app.use(bodyParser.json())

app.post("/api/1/logger", function(req, res) {
	var entry = req.body;
	var message = entry.msg + "\n";
	
	for(var i = 0; i < entry.trace.length; i++) {
		var stackframe = entry.trace[i];
		message += util.format(
			"\t%s @ %s:%s:%s\n",
			stackframe.functionName,
			stackframe.fileName,
			stackframe.lineNumber,
			stackframe.columnNumber);
	}	
	log.error(message);
});

app.use('/scripts', express.static(__dirname + '/node_modules/stacktrace-js/dist/'));
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use('/static', express.static(__dirname + '/static'));

app.listen(3000, function() {
	console.log("ready.");
});