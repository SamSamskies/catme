var express = require('express');
var Yo = require('yo-api');
var yo = new Yo(process.env.CATME_YO_API_KEY);
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.get('/', function(req, res) {
  yo.subscribers_count(function(err, undefined, body) {
    res.render('index', { subscriberCount: JSON.parse(body).result });
  });
});

app.get('/yo-' + process.env.CATME_YO_SECRET, function(req, res) {
  yo.yo_link(req.query.username, 'http://thecatapi.com/api/images/get', function() {
    res.send();
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port: " + app.get('port'))
});
