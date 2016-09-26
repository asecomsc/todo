var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.sendfile("index.html");
});
app.post('/create', function(req,res){
  nAsunto = req.body.asunto;
  console.log("Asunto = " + nAsunto);
  res.end("done..");
});
app.listen(80,function(){
  console.log("Started on PORT 80");
});