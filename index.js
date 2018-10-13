var express = require('express');
const port = require('./config.js').SERVER_PORT;

var app = express();

app.listen(port, () => {
  console.log('Le serveur est connecté au port : ' + port);
})

app.get('/', (request, response) => {
  console.log("Quelqu'un est sur le serveur.");
  response.send("Vous êtes bien sur un serveur NodeJS.");
})
