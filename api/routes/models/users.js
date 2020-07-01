var express = require('express');
var router = express.Router();
var dbConnection = require('../../../database/connection/index.js');

/* GET users listing. */
router.get('/', (req, res) => {
  // Find count of users in DB
  var q = 'SELECT * FROM users ORDER BY id desc';
  dbConnection.query(q, (err, results) => {
    if (err) throw err;
    var count = results[0].count;
  });
});

// add a new user
router.post('/register', (req, res) => {
  let person = {
    username: req.body.username,
    email: req.body.email,
  };
  dbConnection.query('INSERT INTO users SET ?', person, (err) => {
    if (err) {
      res.sendStatus(422);
    } else {
      res.sendStatus(201);
    }
  });
});

// router.get('/delete/(:id)', function (req, res, next) {
//   let id = req.params.id;

//   dbConn.query('DELETE FROM users WHERE id = ' + id, function (err, result) {
//     //if(err) throw err
//     if (err) {
//       // set flash message
//       // redirect
//       res.redirect('/');
//     } else {
//       // set flash message
//       // redirect
//       res.redirect('/');
//     }
//   });
// });

module.exports = router;
