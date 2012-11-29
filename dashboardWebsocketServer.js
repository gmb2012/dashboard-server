var config  = require('./config'),
    io = require('socket.io').listen(config.websocketServer.port),
    fs = require('fs'),
    applications = require('./core.js');

io.sockets.on('connection', function (socket) {
    socket.on('getLatest', function (data) {
        var getLatest = {};
        if (applications[data.application]) {
            getLatest = applications[data.application].getLatest(data.monitor);
        }
        socket.emit('getLatest', getLatest);
    });

    socket.on('set', function (data) {
        if (applications[data.application]) {
            applications[data.application].add(data.monitor, data.value);
        }
    });
});

console.log('Websocket -  listening at port %s', config.websocketServer.port);
