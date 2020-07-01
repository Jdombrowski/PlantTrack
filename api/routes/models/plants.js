var express = require('express');
var router = express.Router();
var dbConnection = require('../../../database/connection/index.js');

/* GET plants listing. */
router.get('/', (req, res) => {
  var q = 'SELECT * FROM plants ORDER BY id desc';
  dbConnection.query(q, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
