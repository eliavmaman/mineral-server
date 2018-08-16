// call the packages we need
const express = require('express');        // call express
const app = express();                 // define our app using express
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = http.createServer(app);

const cors = require('cors');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//mongoose.createConnection( 'mongodb://localhost/yarderstore' );
mongoose.connect('mongodb://localhost:27017/minerals');
var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = require('./router');            // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});


app.use('/api', router);

mongoose.Promise = global.Promise;



// START THE SERVER
// =============================================================================
//app.listen(port);
// console.log('Magic happens on port ' + port);\
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// we wait till mongo is ready before letting the http handler query users:
db.once('open', function () {
    console.log('Running');


});
server.listen(port, () => {
    console.log('Server listen on port 3000\n\n');
});