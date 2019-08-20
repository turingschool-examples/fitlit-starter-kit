class UserRepository {
  constructor(data) {
    this.users = data;
  }

  getUser(id) {
    return this.users.userData.find(obj => obj.id === id)
  }
}

module.exports = UserRepository;