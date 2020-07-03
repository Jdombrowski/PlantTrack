var express = require('express');
var router = express.Router();
var dbConnection = require('../../../database/connection/index.js');

// CREATE a new user
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
    return;
  });
});

/* READ users listing. */
router.get('/', (req, res) => {
  // Find count of users in DB
  var q = 'SELECT username FROM users ORDER BY id desc';
  dbConnection.query(q, (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json(results);
  });
});

// READ user by id
router.get('/lookup/:user_id', (req, res) => {
  dbConnection.query(
    `SELECT * FROM users WHERE id = "${req.params.user_id}"`,
    (err, results) => {
      console.log(results);
      if (err) {
        console.log(err);
        return res.sendStatus(422);
      } else {
        res.json(results[0]);
      }
    }
  );
  return;
});

// READ user by username
router.get('/lookup/:username', (req, res) => {
  dbConnection.query(
    `SELECT * FROM users WHERE username = "${req.params.username}"`,
    (err, results) => {
      console.log(results);
      if (err) {
        console.log(err);
        return res.sendStatus(422);
      } else {
        res.json(results[0]);
      }
    }
  );
  return;
});

// TODO UPDATE if needed

// DESTROY
router.get('/emailDelete/:user_id', (req, res) => {
  dbConnection.query(
    `DELETE FROM users WHERE id = "${req.params.user_id}"`,
    (err, results) => {
      console.log(results);
      if (err) {
        console.log(err);
        return res.sendStatus(422);
      } else {
        res.sendStatus(200);
      }
    }
  );
  return;
});

module.exports = router;
