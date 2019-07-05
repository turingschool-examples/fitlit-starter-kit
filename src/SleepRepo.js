class SleepRepo {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserData(id) {
    return this.userData.filter(record => record.userID === id);
  }

  returnAllUserSleepQualityAvg() {
    return +(this.userData.reduce((acc, record) => {
      acc += record.sleepQuality;
      return acc;
    }, 0) / this.userData.length).toFixed(2);
  }

  returnAllUserQualityOverThree(date) {
    let user = 1;
    let givenDate = date;
    let daySeven = this.userData.findIndex(record => record.date === date);
    let dayOne = daySeven - 6;
    let usersRecords = [];
    let filteredRecords;

    usersRecords.push(this.userData.filter(record => record.userID === user));
    filteredRecords = usersRecords.filter(record => record.date[0])
    
  }

  returnLongestSleeperGivenDate(date) {
    return this.userData.reduce((acc, record) => {
      if (record.hoursSlept > acc.hoursSlept) {
        acc = record;
      }
      return acc;
    })
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}