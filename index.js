var http = require('http');

function handleRequest(request, response) {
    response.end('Test: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(8080, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});