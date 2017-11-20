const User = require('../models/in_memo/user');

const getAllUsers = () => User.list();

const addNewUser = (username, password) => User.insert(username, password);

const getUserByName = username => User.getOneByName(username);

const doLogin = (username, password) => User.doLogin(username, password);

const getUserById = userId => User.getOneById(userId);

module.exports = {
  getAllUsers,
  addNewUser,
  getUserById,
  getUserByName,
  doLogin,
};
