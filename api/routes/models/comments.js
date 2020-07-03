var express = require('express');
var router = express.Router();
var dbConnection = require('../../../database/connection/index.js');

// CREATE a new comment
router.post('/create', (req, res) => {
  let comment = {
    comment_text: req.body.comment_text,
    photo_id: req.body.photo_id,
    plant_id: req.body.plant_id,
    user_id: req.body.user_id,
  };
  dbConnection.query('INSERT INTO comments SET ?', comment, (err) => {
    if (err) {
      res.sendStatus(422);
    } else {
      res.sendStatus(201);
    }
    return;
  });
});

/* READ all comments */
router.get('/', (req, res) => {
  var q = `SELECT * FROM comments `;
  dbConnection.query(q, (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json(results);
  });
});

/* READ all comments from a user */
router.get('/users/:user_id', (req, res) => {
  var q = `SELECT * FROM comments WHERE user_id = 1`;
  dbConnection.query(q, (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json(results);
  });
});

// READ user by id
router.get('/plants/:plant_id', (req, res) => {
  dbConnection.query(
    `SELECT * FROM comments WHERE plant_id = ${req.params.plant_id}`,
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

// UPDATE comment text
router.post('/update/:comment_id', (req, res) => {
  let q = `UPDATE comments SET comment_text = "${req.body.comment_text}" WHERE id = ${req.params.comment_id}`;
  dbConnection.query(q, (err, results) => {
    console.log(results);
    if (err) {
      console.log(err);
      return res.sendStatus(422);
    } else {
      res.json(results[0]);
    }
  });
  return;
});

// DESTROY
router.get('/delete/:comment_id', (req, res) => {
  dbConnection.query(
    `DELETE FROM comments WHERE id = "${req.params.comment_id}"`,
    (err) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
  return;
});

module.exports = router;
