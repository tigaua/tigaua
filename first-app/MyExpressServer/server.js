var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// add middleware
app.use(bodyParser.urlencoded({ extended: false }));

//cross origin request sharing
var corsOptions = {
  "origin": "https://localhost:3000",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204
};

app.use(cors(corsOptions));

app.get("/doSomething", function (req, res) {
  console.log(req);
  res.json({test: 'test'});
});

app.post("/doSomething", function(req, res) {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3001, function() {
    console.log('Server started...');
});
