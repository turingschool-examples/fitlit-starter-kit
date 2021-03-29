class UserRepository {
  constructor() {
    this.users = [];
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}