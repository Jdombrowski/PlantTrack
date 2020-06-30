var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'plant_track',
  password: '',
});

app.get('/', function (req, res) {
  // Find count of users in DB
  var q = 'SELECT COUNT(*) AS count FROM users';
  connection.query(q, function (err, results) {
    if (err) throw err;
    var count = results[0].count;
    console.log(count);
  });
});

app.listen(3000, () => {
  console.log('server running on 3000');
});
