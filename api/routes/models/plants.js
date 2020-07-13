var express = require('express');
var router = express.Router();
var dbConnection = require('../../../database/connection/index.js');

// CREATE a new plant
router.post('/', (req, res) => {
  let plant = {
    light_requirement: req.body.light_requirement,
    location_preference: req.body.location_preference,
    name: req.body.name,
    type: req.body.type,
    user_id: req.body.user_id,
  };

  dbConnection.query('INSERT INTO plants SET ?', plant, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(422);
    } else {
      res.sendStatus(201);
    }
    return;
  });
});

/* READ all plants */
router.get('/', (req, res) => {
  var q = 'SELECT * FROM plants ORDER BY id desc';
  dbConnection.query(q, (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json(results);
  });
});

// READ plant by id
router.get('/plant/:plant_id', (req, res) => {
  dbConnection.query(
    `SELECT * FROM plants WHERE id = "${req.params.plant_id}"`,
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

// READ plant by user_id
router.get('/owner/:user_id', (req, res) => {
  dbConnection.query(
    `SELECT * FROM plants WHERE user_id = "${req.params.user_id}"`,
    (err, results) => {
      if (err) {
        console.log(err);
        return res.sendStatus(422);
      } else {
        res.json(results);
      }
    }
  );
  return;
});

// TODO
// // UPDATE a plant
// router.post('/update/:id', (req, res) => {
//   let plant = {
//     light_requirement: req.body.light_requirement,
//     location_preference: req.body.location_preference,
//     name: req.body.name,
//     type: req.body.type,
//     user_id: req.body.user_id,
//   };

//   var q =
//     "UPDATE plants SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   dbConnection.query(q, plant, (err) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(422);
//     } else {
//       res.sendStatus(201);
//     }
//     return;
//   });
// });

// DESTROY
router.delete('/:plant_id', (req, res) => {
  dbConnection.query(
    `DELETE FROM plants WHERE id = ${req.params.plant_id}`,
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
