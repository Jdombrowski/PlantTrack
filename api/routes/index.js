var express = require('express');

var router = express.Router();

/** GET /api-status - Check service status **/
router.get('/api-status', (req, res) =>
  res.json({
    status: 'ok',
  })
);

module.exports = router;
