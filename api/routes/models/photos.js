var express = require('express');
var router = express.Router();
var dbConnection = require('../../../database/connection/index.js');

// CREATE a new comment
router.post('/create', (req, res) => {
  let comment = {
    image_url: req.body.image_url,
    user_id: req.body.user_id,
  };
  dbConnection.query('INSERT INTO photos SET ?', comment, (err) => {
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
  var q = `SELECT * FROM photos `;
  dbConnection.query(q, (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json(results);
  });
});

/* READ all photos from a user */
router.get('/owner/:user_id', (req, res) => {
  var q = `SELECT * FROM photos WHERE user_id = ${req.params.user_id}`;
  dbConnection.query(q, (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json(results);
  });
});

// READ photos by id
router.get('/photo/:photo_id', (req, res) => {
  dbConnection.query(
    `SELECT * FROM photos WHERE photo_id = ${req.params.photo_id}`,
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

// UPDATE photo url
router.post('/update/:photo_id', (req, res) => {
  let q = `UPDATE photos SET photo_url = "${req.body.photo_url}" WHERE id = ${req.params.photo_id}`;
  dbConnection.query(q, (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(422);
    } else {
      res.sendStatus(200);
    }
  });
  return;
});

// DESTROY
router.get('/delete/:photo_id', (req, res) => {
  dbConnection.query(
    `DELETE FROM photos WHERE id = "${req.params.photo_id}"`,
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
