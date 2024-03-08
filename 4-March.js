const http = require('http');

http.createServer((req, resp) => {
    resp.send("HII Ankita");
    ("HII Omkar");
    resp.end();
}).listen(3307);
