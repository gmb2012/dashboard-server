var config  = require('./config'),
    Application = require('./model.js');

/* init all applications => @todo: move to core*/
var applications = {};
config.applications.forEach(
    function(element) {
        applications[config.applications[element]] = new Application(config.entriesToKeep)
    }
);

module.exports = applications;