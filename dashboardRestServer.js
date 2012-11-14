var restify = require('restify'),
    config  = require('./config'),
    applications = require('./core.js');

/* configure restify server */
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


/* ROUTES */
server.post('/set', function (request, response) {
    if (applications[request.params.application]) {
        applications[request.params.application].add(request.params.monitor, request.params.value);
        response.send(200);
    } else {
        response.send(404, "Application not found");
    }
});

server.get('/getLatest/:application/:monitor', function (request, response) {
    if (applications[request.params.application]) {
        response.send(applications[request.params.application].getLatest(request.params.monitor));
    } else {
        response.send(404, "Application not found");
    }
});

server.listen(config.restServer.port, function () {
    console.log('REST -  listening at port %s', config.restServer.port);
});



