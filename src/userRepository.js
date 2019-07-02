


class UserRepository {
  constructor(data) {
    console.log('data :', data);
    this.data = data
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}