
class User {
  constructor(userObj) {
    this.id = userObj.id;    
    this.name = userObj.name;
    this.address = userObj.address;
    this.email = userObj.email;
    this.strideLength = userObj.strideLength;
    this.dailyStepGoal = userObj.dailyStepGoal;
    this.friends = userObj.friends;    
  }

  getUserFirstName() {
    return this.name.split(' ')[0];
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}