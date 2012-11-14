var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs'),
    config  = require('./config'),
    applications = require('./core.js');

app.listen(80);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function (socket) {
    socket.on('getLatest', function (data) {
        var getLatest = {}
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



