var express = require('express');
var router = express.Router();

/* image */
/*
router.get('/', function(req, res, next) {
  res.send(' we are in demo root');
});

router.get('/test', function(req, res, next) {
  res.render('demo', {"imglinks": "https://static.pexels.com/photos/34950/pexels-photo.jpg","name":"nithin"});
});

router.get('/name', function(req, res, next) {
  res.render('demo', {"name": "nithin"});
});

 

var users=[
   {
	id:1,
	first_name:'John',
	last_name:'Doe',
	email:'john@gmail.com'
    },
	{
	id:2,
	first_name:'Nith',
	last_name:'tom',
	email:'nith@gmail.com'
	},
	{
	id:3,
	first_name:'Ronald',
	last_name:'Thomas',
	email:'ron@gmail.com'
	}
]

router.get('/dbcheck', function(req, res, next) {
  res.json(users);
});

//db mysql

// var express = require('express');
// var router = express.Router();
*/

var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'meaww',
  database: 'quizz'
});

router.get('/fromdb', function(req, res, next){
	con.connect(function(err) {
		  con.query("SELECT * FROM quizzinfo limit 3", function (err, result) {
		    res.render('demo', {result})
		    console.log(result);
		  });
	});
})

// });



module.exports = router;



/*

// from db
//var express = require('express');
//var router = express.Router();

var express = require('express');
var router = express.Router();

var mysql = require('mysql');


var app = express();

///
///	Create connection to MySQL database server.
/// 
function getMySQLConnection() {
	return mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'meaww',
	  database : 'quizz'
	});
}

///
/// Use pug as templating engine. Pug is renamed jade.
///
app.set('view engine', 'pug');

///
/// HTTP Method	: GET
/// Endpoint 	: /person
/// 
/// To get collection of person saved in MySQL database.
///
app.get('/quiz', function(req, res) {
	var quizList = [];

	// Connect to MySQL database.
	var connection = getMySQLConnection();
	connection.connect();

	// Do the query to get data.
	connection.query('SELECT * FROM quizz', function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
	  		// Loop check on each row
	  		for (var i = 0; i < rows.length; i++) {

	  			// Create an object to save current row's data
		  		var eachquiz = {
		  			'quizname':rows[i].quizname,
		  			'quizqnimg':rows[i].quizqnimg,
		  			'quizlink':rows[i].quizlink,
		  			'quizid':rows[i].quizid
		  		}
		  		// Add object into array
		  		quizList.push(eachquiz);
	  	}


router.get('/dbquiz', function(req, res, next) {
  res.render('demo', {'quizList': quizList});
});


connection.end();

});

	app.listen(3000, function () {
    console.log('listening on port', 3000);
});

module.exports = router;

/* GET users listing. 
router.get('/', function(req, res, next) {
	db.findOne({name="nitin"}, function(data, err){
		res.render('demo', {data});
	})
});

module.exports = router;
*/

