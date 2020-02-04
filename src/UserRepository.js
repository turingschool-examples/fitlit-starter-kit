class UserReopsitory {
  constructor(data) {
    this.userData = data.users;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserReopsitory;
}