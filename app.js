const http = require('http');

const server = http.createServer();

server.listen(3000, '0.0.0.0', () => {
    console.log(`Server listening on ${server.address().address}:${server.address().port}`)
})