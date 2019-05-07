class UserRepository {
  constructor(filepathway) {
    this.filepathway = filepathway;
  }
  returnData(userId) {
    return this.filepathway.find(user => user.id == userId);
  }
}

module.exports = UserRepository;
