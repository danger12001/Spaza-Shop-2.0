var express = require('express');
var handlebars = require('express-handlebars');
var app = express();
var  myConnection = require('express-myconnection');
var  bodyParser = require('body-parser');

app.use(express.static("public"));

var dbOptions = {
      host: 'localhost',
      user: 'me',
      password: 'secret',
      port: 3000,
    };

    app.use(myConnection(dbOptions, 'single'));

    app.engine('handlebars', handlebars({defaultLayout : 'main'}));
    app.set('view engine', 'handlebars');

//routes
    app.get('/', function (req, res) {
     res.render("index");
    });
//start server
    var server = app.listen(3000, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Spaza-Shop app listening at http://%s:%s', host, port);

    });
