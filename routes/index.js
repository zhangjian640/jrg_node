const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.locals.title = '首页';
  res.render('index');
});

module.exports = router;
