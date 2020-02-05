class UserRepository {
  constructor(data) {
    this.data = data;
  }

  findUserByID(userID) {
    const user = this.data.find((user) => user.id === userID);
    return user;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
