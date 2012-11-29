var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    config = require('../../config.js'),
    hogan = require('hogan.js'),
    fs = require('fs');

app.listen(80);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(hogan.compile(data.toString()).render({ port: config.websocketServer.port }));
        });
}