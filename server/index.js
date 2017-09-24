var express = require('express');
var path = require('path')
var morgan= require('morgan')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(morgan('dev'));
var request=require('request');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import',function(req, res) {
 var username = Object.keys(req.body)[0]
 var options = {
 	url:'https://api.github.com/users/' + username + '/repos',
 	headers :{
 		'User-Agent': 'request'
 	}
 };
 request(options,function(err,response,body){
 	console.log('Error',err)
 	console.log('statusCode',response && response.statusCode)
 	console.log(body)

 })
 // myData.save()
 // .then(function(item) {
 // res.send("item saved to database");
 // })
 // .catch(function(err){
 // res.status(400).send("unable to save to database");
 // });
 // console.log('this is the term value ',term)
});

app.get('/repos', function (req, res) {
  // TODOconsole
  // res.sendFile(path.join(__dirname, '../', 'file.txt'));
  res.send(body);
  res.end(body)
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


