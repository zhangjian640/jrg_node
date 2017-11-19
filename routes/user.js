const express = require('express');
const router = express.Router();

const UserService = require('../services/user_services');
// const Subscribe = require('../services/')

/* GET users listing. */
router.get('/userlist', (req, res, next) => {
  const users = UserService.getAllUsers();
  res.locals.users = users;
  console.log(users);
  res.render('users');
});

router.get('/user/:userId', (req, res, next) => {
  const id = parseFloat(req.params.userId);
  const user = UserService.getUserById(id);
  res.locals.user = user;
  res.render('user');
});

router.get('/login', (req, res, next) => {
  res.locals.title = '登录';
  res.render('login');
});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = UserService.doLogin(username, password);
  if (user) {
    res.redirect('/');
  } else {
    res.redirect('register');
  }
});


router.get('/register', (req, res, next) => {
  res.locals.title = '注册';
  res.render('register');
});


router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = UserService.addNewUser(username, password);
  if (user) {
    res.redirect('login');
  }
});


module.exports = router;
