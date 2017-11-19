let subscribe = [];

class Subscribe {
  constructor(userId, url) {
    this.id = userId;
    this.url = url;
  }

  static list() {
    return Subscribe.subscribe;
  }

  static insert(userId, url) {
    const subscribe = new Subscribe(userId, url);
    Subscribe.subscribe.push(subscribe);
    return subscribe;
  }

  static findByUserId(userId) {
    return Subscribe.subscribe.map(s => s.userId === userId);
  }

  static get ['subscribe']() {
    return subscribe;
  }
}

module.exports = Subscribe;
