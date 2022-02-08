//single user representation
//single parameter to pass in user data object - users.js
//method to return user's first name only

class User {
  constructor(userObject) {
    this.id = userObject.id;
    this.name = userObject.name;
    this.address = userObject.address;
    this.email = userObject.email;
    this.strideLength = userObject.strideLength;
    this.dailyStepGoal = userObject.dailyStepGoal;
    this.friends = userObject.friends;
  }

  firstName() {
    let fullName = this.name
    let splitName = fullName.split(" ")
    return splitName[0]
  }


}

export default User;