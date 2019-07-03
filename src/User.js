if (typeof module !== "undefined") {
  usersFilePath = require("../data/userSub");
} else {
  usersFilePath = userData;
}

class User {
  constructor(user) {
    this.id = user.id,
    this.name = user.name,
    this.address = user.address,
    this.dailyStepGoal = user.dailyStepGoal,
    this.strideLength = user.strideLength,
    this.email = user.email,
    this.friends = user.friends,
    this.data = usersFilePath
  }
  returnUserFirstName() {
    return this.name.split(' ')[0];
  }

  getUserNameFromID(id) {
    return (this.data.find(element => element.id === id)).name;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}