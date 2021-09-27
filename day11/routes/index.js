var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register= require('../controllers/register');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @require {email,password, confirmPassword} -req.body
 * @description
 * Security , Performance ,edge-cases
 * email validate
 */

router.post('/register',registerInitialCheck, register);

module.exports = router;
