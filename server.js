var express = require('express');
var app = express();  // crud = create, read, update, delete
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.sendFile( __dirname + "/" + "default.htm");
});

app.post('/create', function (req, res) {
var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hola',
  database : 'uno'
});
	con.connect();
			nAsunto = { asunto:req.body.asunto };
			con.query('insert into todo set ?', nAsunto, function(err, res) {
				if (err) throw err;
			});
	con.end();
res.end();
});

app.listen(80, function () {
	console.log('Todo running on port 80!');
});

