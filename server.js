let express    = require('express');        // call express
let app        = express();                 // define our app using express

// Configure bodyparser to handle POST requests
app.use(express.urlencoded({ extended: true }));

// Static content
app.use(express.static('public'))

// Import routes
let router = require('./routes');
app.use('/', router);

// Launch app to listen to specified port
var port = 8880
app.listen(port, function () { console.log('Running server on port ' + port); })
