var express = require('express');
var router = express.Router();


var db = {
	"query": { "title": "Express", "name": "Nithin" }
}

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', db);
// });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'meaww',
  database: 'quizz'
});

router.get('/', function(req, res, next){
	con.connect(function(err) {
		  con.query("SELECT * FROM trending limit 18", function (err, result) {
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		    res.json(result)
		  });
	});
})

module.exports = router;
