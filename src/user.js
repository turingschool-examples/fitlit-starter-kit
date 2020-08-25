class User {
  constructor(userData) {
    this.userData = {
      id: userData[0].id,
      name: userData[0].name,
      address: userData[0].address,
      email: userData[0].email,
      strideLength: userData[0].strideLength,
      dailyStepGoal: userData[0].dailyStepGoal,
      friends: userData[0].friends
      };
  }
  returnFirstName() {
    return this.userData.name.split(" ").slice(0, -1).toString();
  }
}


module.exports = User;
