var i = 0;

var config  = require('./config'),
    Application = require('./model.js');

/* init all applications => @todo: move to core*/
var applications = {};
for(; i < config.applications.length; i++) {
    applications[config.applications[i]] = new Application(config.entriesToKeep);
}

module.exports = applications;