class UserRepository {
  constructor(data) {
    this.allUsers = data;
  }
  findUserData(userID) {
    return this.allUsers[userID].id;
  }
}

module.exports = UserRepository;
