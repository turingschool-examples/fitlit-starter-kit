class SleepRepo {
  constructor(userData, userRepo) {
    this.userData = userData;
    this.userRepo = userRepo;
    // console.log('userRepo', this.userRepo)
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
    let matchingUserIDS = [];
    
    let users = this.userData.reduce((acc, record) => {
      !acc.includes(record.userID) ? acc.push(record.userID) : null;
      return acc;
    }, []);
    
    users.forEach(user => {
      this.userData.forEach(record => {
        let oneUserAllRecords = this.userData.filter(record => record.userID === user);
        let daySeven = oneUserAllRecords.findIndex(record => record.date === date);
        let dayOne = daySeven - 6;
        let oneUserSevenRecords = oneUserAllRecords.filter((record, index) => {
          if (index <= daySeven && index >= dayOne) {
            return record;
          }
        });
        let avg = oneUserSevenRecords.reduce((acc, record) => {
          acc += record.sleepQuality;
          return acc;
        }, 0) / 7;      
        if (avg >= 3) {
          !matchingUserIDS.includes(user) ? matchingUserIDS.push(user) : null;
        }
      })
    })
    return matchingUserIDS;
  }  

  returnLongestSleeperGivenDate(date) {
    let records = this.userData.filter(record => record.date === date);
    let winner = records.reduce((acc, record) => {
      if (record.hoursSlept > acc.hoursSlept) {
        acc = record;
      }
      return acc;
    });
    return this.userRepo.find(user => user.id === winner.userID).name;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}