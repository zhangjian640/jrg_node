class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    User.id += 1;
    this.id = User.id;
  }

  getName() {
    return this.username;
  }

  static getOneByName(username) {
    return User.users.find(u => u.username === username);
  }

  static getOneById(userId) {
    return User.users.find(u => u.id === userId);
  }

  static doLogin(username, password) {
    const user = User.users.find(u => u.username === username && u.password === password);
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  static insert(username, password) {
    const user = new User(username, password);
    User.users.push(user);
    return user;
  }

  static list() {
    return User.users;
  }
}
User.users = [];
User.id = 0;
module.exports = User;
