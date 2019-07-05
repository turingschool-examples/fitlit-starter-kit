class ActivityRepo {
  constructor(userData) {
    this.userData = userData;
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

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}