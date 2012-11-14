/* WEBSERVICE FOR DASHBOARD
 * npm install restify
 */
var i = 0;

var fs = require('fs'),
    restify = require('restify'),
    config  = require('./config'),
    Application = require('./model.js');

var packageInformation = JSON.parse(fs.readFileSync('package.json', 'utf8'));

/* configure restify server */
var server = restify.createServer({
    name: packageInformation.name,
    version: packageInformation.version
});
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

server.listen(config.server.port, function () {
    console.log('%s listening at %s', server.name, server.url);
});


/* init all applications */
var applications = {};
for(; i < config.applications.length; i++) {
    applications[config.applications[i]] = new Application();
}
