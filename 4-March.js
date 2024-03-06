const http = require('http');

http.createServer((req, resp) => {
    resp.write("HII Ankita");
    resp.end();
}).listen(3307);
