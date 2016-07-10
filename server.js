var express = require('express');
var app = express();
var path = require('path');
var http = require('http')
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(4080);
console.log('server is running at http://localhost:4080/');
