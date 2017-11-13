var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'meaww',
  database: 'quizz'
});

router.get('/home', function(req, res, next){
	con.connect(function(err) {
		  con.query("SELECT * FROM quizzinfo limit 6", function (err, result) {
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		    res.json(result)
		  });
	});
})

module.exports = router;
