class UserRepository {
  constructor(data) {
    this.userDate = data
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
