class User {
  constructor(id, name, address, email, dailyStepGoal) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.dailyStepGoal = dailyStepGoal;
  }

  getFirstName() {
    // Return a user’s first name only
  }

}

module.exports = User;