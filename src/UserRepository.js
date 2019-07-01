
class UserRepository {
  constructor(data) {
    this.data = data;
  }

  returnUserData(userId) {
    return this.data.find(dataSet => dataSet.id === userId);
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}