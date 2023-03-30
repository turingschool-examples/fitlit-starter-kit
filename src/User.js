import userTestData from '../src/data/user-test-data.js';

class User {
  constructor(userStats) {
    this.id = userStats.id;
    this.name = userStats.name || "User";
    this.address = userStats.address;
    this.email = userStats.email;
    this.strideLength = userStats.strideLength;
    this.dailyStepGoal = userStats.dailyStepGoal;
    this.friends = userStats.friends;
    this.activity = []
    this.sleep = []
    this.hydration = []
  }

  getFriends(dataSet) {
    if (this.friends === undefined) {
      return "Embrace the Solitude";
    } else if (this.friends.length) {
      let friends = dataSet.filter(friend => this.friends.includes(friend.id));
      return friends.map(buddy => {
        let splitName = buddy.name.split(' ');
        return splitName[0];
      });
    } 
  }

  getAverage(dataSet) {
    let total = dataSet.reduce((acc, userSet) => {
      acc += userSet.dailyStepGoal
      return acc
    }, 0);

    return total / dataSet.length
  }

  getName() {
    let splitName = this.name.split(' ');
    return splitName[0];
  }
}

export default User;