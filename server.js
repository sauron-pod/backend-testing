const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const mongoose = require('mongoose');

mongoose.connect("mongodb://admin:password123@ds311968.mlab.com:11968/git-connected", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connected to database");
  }
});

let loginSchema = new mongoose.Schema({
  name: String,
  location: String,
  favoriteColor: String
});

let login = mongoose.model("login", loginSchema);

server.use('/api', router);

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));