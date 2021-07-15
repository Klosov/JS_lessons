var express = require('express');
var app = express();
const PORT = 3122;

app.use( express.static('public') );

app.get('/', function (req, res) {
  res.send('/public/index.html');
});

app.listen(3122, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
