const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify({ name: 'Ankita', email: 'apjagtap24@gmail.com' }));
    resp.end();
}).listen(3609)