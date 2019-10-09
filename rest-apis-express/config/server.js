const express = require("express");
const bodyParser = require("body-parser");

const auth = require("../auth/authenticator");

const apiRouter = require('../router/apiRouter');

const { PORT, HOST } = require("./config");

//const connMongoDb =

const server = express();

server.use(bodyParser({
  extended: true
}));

server.use(auth, apiRouter());

server.listen(PORT, HOST, err => {
  if (err) throw err;
  console.log(`Runnnig on: http://${HOST}:${PORT}`);
});
