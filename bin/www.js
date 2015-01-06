var app = require('../app'); //require the app

app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
	console.log('Express server is listening on port ' + server.address().port);
});