class User {
  // It should have a parameter to take in a userData object
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  returnFirstName() { // Return a user’s first name only
    // return this.name // access f name only
  }
}


// Each user holds on to the user properties from the data file
// const user = new User(userData[5]) // comes from returnUserData method in UserRepository class

if (typeof module !== 'undefined') {
  module.exports = User;
}
