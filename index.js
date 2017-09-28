var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.json({"returncode":"Hello World!"});
})


app.get('/webhook', function(request, response) {
  response.send(request.query['hub.challenge']);
})
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
