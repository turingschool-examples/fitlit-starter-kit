class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.find((user) => user.id === id)
  }
}

export default UserRepository;
