var express = require('express');
var Yo = require('yo-api');
var yo = new Yo(process.env.CATME_YO_API_KEY);
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/yo', function(req, res, next) {
  yo.yo_link(req.query.username, 'http://thecatapi.com/api/images/get');
  res.send();
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port: " + app.get('port'))
});
