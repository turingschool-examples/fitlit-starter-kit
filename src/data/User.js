import userTestData from "../../test/user-test-data";

class User {
  constructor(userInfo) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.address = userInfo.address;
    this.email = userInfo.email;
    this.strideLength = userInfo.strideLength;
    this.dailyStepGoal = userInfo.dailyStepGoal;
    this.friends = userInfo.friends;
  };

  getUserData(userId) {
    return userTestData[userId - 1]
  }

  getAverageStepGoal() {
    const avgStepGoal = userTestData.reduce((acc, user) => {
      acc += user.dailyStepGoal
      return acc
    }, 0)
    return Math.round(avgStepGoal/userTestData.length)
  }

  getUserFirstName() {
    return this.name.split(" ")[0]
  }
};

export default User;