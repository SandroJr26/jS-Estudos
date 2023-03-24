const express = require("express");
const app = express();
const port = 8080;

app.get("/home", (required, response) => {
  response.contentType("application/html");
  response.status(200).send("<h1>Hello World</h1>");
});

app.get("/users", (required, response) => {
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
  response.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Rodando com Express na porta ${port}`);
});
