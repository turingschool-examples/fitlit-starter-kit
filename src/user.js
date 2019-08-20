class User {
  constructor(userInfo) {
    this.userInfo = userInfo;
    this.id = userInfo.id;
    this.name = userInfo.name;
		this.address = userInfo.address;
    this.email = userInfo.email;
    this.strideLength = userInfo.strideLength;
    this.dailyStepGoal = userInfo.dailyStepGoal;
    this.friends = userInfo.friends;
  }

  getUserFirstName() {
    let firstName = this.name.split(' ')[0]
    return firstName
  }
}

if (typeof module !== 'undefined') {
    module.exports = User;
}