// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require("express").Router();
const path = require('path');

const PORT = 8080;

const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function(req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});

// Our DB Configuration
require('./src/database');

// Routes
const postRouter = require('./src/routes/post.router');

// will redirect all the non-api routes to react frontend
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.get('/', (req, res) => {
    res.send("Hello World ! ");
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});