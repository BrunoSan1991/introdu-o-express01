const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("it is spaaaaaaaaartaaaaaa");
});

app.listen(port, () => {
    console.log("Nosso servidor está rodando na porta" + port)
});