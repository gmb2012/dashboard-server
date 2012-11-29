var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    config = require('../../config.js'),
    hogan = require('hogan.js'),
    fs = require('fs');

app.listen(80);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html', 'utf8',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                err.message = 'Error loading index.html, ' + err.message;
                return res.end(err.stack);
            }

            res.writeHead(200);
            res.end(hogan.compile(data).render({ port: config.websocketServer.port }));
        });
}