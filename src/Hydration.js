class Hydration {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return users.find(user => {
      return user.id;
    });
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
