var express = require('express');
var app = express();  // crud = create, read, update, delete

app.get('/', function (req, res) {
	res.sendFile( __dirname + "/" + "default.htm" );
});

app.get('/create', function (req, res) {
var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hola',
  database : 'uno'
});
	con.connect();
			miGet = { asunto:req.query.asunto };
			con.query('insert into todo set ?',miGet, function(err, res) {
				if (err) throw err;
			});
	con.end();
res.end();
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

