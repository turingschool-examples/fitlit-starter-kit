class UserRepository {
  constructor(sampleUserData) {
    this.userData = sampleUserData
  }

  getUserById(userNumber) {
    let individual = this.userData.find(person => person.id === userNumber)
    let singleUser = new User(individual)
    return singleUser
  }
}

export default UserRepository;