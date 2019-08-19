class UserRepository {
  constructor(users) {
    this.users = users;
  }

  returnUserData(idNum) {
    return this.users.find((currentElement) => currentElement.id === idNum);
  }
}

module.exports = UserRepository;