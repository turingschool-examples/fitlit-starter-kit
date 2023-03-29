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
  }

  getFriends() {
    if (this.friends === undefined) {
      return "Embrace the Solitude";
    } else if (this.friends.length) {
      let friends = userTestData.userTestData.filter(friend => this.friends.includes(friend.id));
      return friends.map(buddy => {
        let splitName = buddy.name.split(' ');
        return splitName[0];
      });
    } 
  }

  getAverage() {
    let total = userTestData.userTestData.reduce((acc, userSet) => {
      acc += userSet.dailyStepGoal
      return acc
    }, 0);

    return total / userTestData.userTestData.length
  }

  getName() {
    let splitName = this.name.split(' ');
    return splitName[0];
  }
}

export default User;