class ActivityRepo {
  constructor(activityData) {
    this.activityData = activityData;
  }

  allUserStairsClimbedByDate() {

  }

  allStepsTakenByDate() {

  }

  allMinutesActiveByDate() {

  }

  addDays(date, daysToAdd) {
    var newDate = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  }
}

if(typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}
