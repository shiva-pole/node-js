//node server
let http = require('http');

let server = http.createServer((req, res)=>{
   res.writeHead(200);
   res.end('Hello World');
});

server.listen('8000');