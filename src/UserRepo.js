class UserRepo {
  constructor(users) {
    this.users = users;
  }
  searchUsersByID(idNum) {
    return this.users.find(user => {
      return user.id === idNum
    })
  }
};






if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
