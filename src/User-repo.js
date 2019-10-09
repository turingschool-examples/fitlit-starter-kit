//need to add data and data  array


class UserRepo {
  constructor(users) {
    this.users = users;
  }
  getDataFromID(id) {
    // given the user's id, what is the user's data?
    return this.users.find((user) => id === user.id);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
