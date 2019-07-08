class ActivityRepo {
  constructor(userData, userRepo) {
    this.userData = userData;
    this.userRepo = userRepo;
    // console.log('userData', this.userData)
    // console.log('userRepo', this.userRepo)
  }

  returnUserActivityData(id) {
    return this.userData.filter(user => user.userID === id);
  }

  findAllRecordsForGivenDate(date) {
    return this.userData.filter(record => record.date === date);
  } 

  avgNumStairsClimbedGivenDate(date) {
    let records = this.findAllRecordsForGivenDate(date);
    return +(records.reduce((acc, record) => {
      acc += record.flightsOfStairs; 
      return acc;
    }, 0) / records.length).toFixed(2);
  }

  avgNumStepsTakenGivenDate(date) {
    let records = this.findAllRecordsForGivenDate(date);
    return +(records.reduce((acc, record) => {
      acc += record.numSteps; 
      return acc;
    }, 0) / records.length).toFixed(2);
  }

  avgNumMinActiveGivenDate(date) {
    let records = this.findAllRecordsForGivenDate(date);
    return +(records.reduce((acc, record) => {
      acc += record.minutesActive; 
      return acc;
    }, 0) / records.length).toFixed(2);
  }

  returnFriendsWeeklyStepData(date, selectedUser) {
    let challengers = [selectedUser.id];
    challengers.push(...selectedUser.friends);
    return challengers.reduce((acc, challenger) => {
      let allDays = this.userData.filter(record => record.userID === challenger);
      let daySeven = allDays.findIndex(record => record.date === date);
      let dayOne = daySeven - 6;
      
      let oneUserSevenRecords = allDays.filter((record, index) => {
        if (index <= daySeven && index >= dayOne) {
          return record;
        }
      });
      
      let result = oneUserSevenRecords.reduce((acc1, record) => {
        acc1 += record.numSteps;
        return acc1;
      }, 0);
      acc.push({ ['x']: this.userRepo[challenger - 1].name, ['y']: result });
      return acc;
    }, []);
  }

  returnFriendsWeeklyStepWinner() {

  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}