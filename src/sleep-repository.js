const Sleep = require("../src/sleep")

class SleepRepository {
  constructor(data) {
      this.data = data;
  }

  returnAllSleepQual() {
    let allSleepQual = this.data.reduce((acc, day) => { 
      return acc += day.sleepQuality
    }, 0) / this.data.length;
    return allSleepQual.toFixed(1);
  }


  returnGreatSleepers(date) {
    let userIds = new Set(this.data.map(user => user.userID))
    let uniqueIds = [...userIds];
    return uniqueIds.reduce((acc, userId) => {
      let currentUserData = this.data.filter(user => user.userID === userId);
      let index = currentUserData.findIndex(day => day.date === date);
      let week = currentUserData.slice(index-6, index+1)
      let avgQual = week.reduce((acc, day) => {
        return acc += day.sleepQuality;
    }, 0) / week.length;
      if(avgQual >= 3) {
        acc.push(userId)
      }
      return acc;
    }, [])
  }
  // returnGreatSleepers(date) {
  //   let userIds = new Set(this.data.map(user => user.userID))
  //   let uniqueIds = [...userIds];
  //   let sleepUsers = uniqueIds.map(user => {
  //     user = new Sleep(this.data, user)
  //   })
  //   console.log(sleepUsers);
  // }
}

if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
}