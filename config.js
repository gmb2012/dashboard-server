/* CONFIG */
var config = {};

// REST Server configs
config.restServer = {};
config.restServer.port = 8888;

// Websocket Server configs
config.websocketServer = {};
config.websocketServer.port = 1337;

// Enabled apps
config.applications = ["App01", "App02"];

// How many data to keep
config.entriesToKeep = 200;

module.exports = config;