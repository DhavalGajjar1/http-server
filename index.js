const http = require("http");
const fs = require('fs');
const port = 8081;

const requestHeandle = (req, res) => {
    console.log(req.url);
    let fileName = "";
    switch (req.url) {
        case '/':
            fileName = "index.html";
            break;
        case '/home':
            fileName = "home.html";
            break;
        case '/about':
            fileName = "about.html";
            break;
        default:
            fileName = "error.html";
    }

    fs.readFile(fileName, (err, result) => {
        if (!err) {
            res.end(result);
        }
    });
}

const server = http.createServer(requestHeandle);

server.listen(port, (err) => {
    if (err) {
        console.log("Server not start on port..");
        return false;
    }
    console.log("Server start on port:- " + port);
});
