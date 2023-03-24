const http = require("http");
const port = 8080;
const server = http.createServer((request, response) => {
  if (request.url === "/home") {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.end("<h1>home page</h1>");
  }
  if (request.url === "/users") {
    const users = [
      {
        name: "Sandro",
        email: "sandrojkl@hotmail.com",
      },
      {
        name: "Rafael",
        email: "rafs@hotmail.com",
      },
    ];
    response.writeHead(200, {
      "Content-Type": "application/js",
    });
    response.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
