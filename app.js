const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {

            if (req.url == "/") {
                let data = fs.readFileSync('index.html', 'utf8');
                res.end(data);

            } else if (req.url == "/Skills") {
                let data = fs.readFileSync('skills.html', 'utf8');
                res.end(data);

            } else if (req.url == "/Recent") {
                let data = fs.readFileSync('recent.html', 'utf8');
                res.end(data);

            } else if (req.url == "/Client") {
                let data = fs.readFileSync('client.html', 'utf8');
                res.end(data);

            } else if ((req.url == "/Contact") {
                    let data = fs.readFileSync('contact.html', 'utf8');
                    res.end(data);
                }

            });

        server.listen(5000); console.log("server run success");