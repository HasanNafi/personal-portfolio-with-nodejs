const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {

    if (req.url == "index.html") {
        fs.readFile('index.html', function(err, data) {
            // fs.writeFile(200, { 'content': 'text/html' })
            // fs.write(data);
            res.end(data);
        })

    } else if (req.url == "skills.html") {
        fs.readFile('skils.html', function(data) {
            res.end(data);
        })
    } else if (req.url == "recent.html") {
        fs.readFile('recent.html', function(data) {
            res.end(data);
        })

    } else if (req.url == "client.html") {
        fs.readFile('client.html', function(data) {
            res.end(data);
        })

    } else {
        fs.readFile('contact.html', function(data) {
            res.end(data);
        })

    }

});

server.listen(5000);
console.log("server run success");