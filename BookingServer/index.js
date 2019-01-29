const winston = require('winston');
const express = require('express');
const cors = require('cors');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 4000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

/*var originWhitelist = [
    'http://localhost:4200'
];

var corsOptions = {
    origin:function(origin, callback){
        var isWhitelisted = originWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
}

app.use(cors(corsOptions));*/

app.use( function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " Content-Type");
    res.header("Access-Control-Allow-Methods", 'GET, POST,PUT');
    next();
});

module.exports = server;