class UserRepository {
  constructor(data) {
    this.data = data
  }

  returnUserData(id) {
    return this.data.find(el => el.id === id)
}

}

module.exports = UserRepository;
