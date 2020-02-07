class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  calculateMilesToday(userID, date, strideLength) {
    let currentUser = this.activityData.filter(data => data.userID === userID);
    let distance = currentUser.find(stride => stride.date === date).numSteps * strideLength;
    return Number((distance / 5280).toFixed(2));
 }

  getMinutesActive(userID, date) {
    let currentUser = this.activityData.filter(data => data.userID === userID);
    return currentUser.find(minute => minute.date === date).minutesActive;
  }

  getPrevDaysActive(userID, startDate) {
    let startDateParsed = new Date(startDate);
    let endDateParsed = new Date(startDate);
    endDateParsed.setDate(startDateParsed.getDate() - 7);
    let userActiveData = this.activityData.filter(userEntry => userEntry.userID === userID);
    let userActiveDaysData = userActiveData.filter((activeDayData) => {
      let day = new Date(activeDayData.date);
      if (day <= startDateParsed && day >= endDateParsed) {
        return true;
      }
    });
    return userActiveDaysData.map(data => data.minutesActive);
  }

  calculateActiveAverage(userID, startDate) {
    let prevMinutesActive = this.getPrevDaysActive(userID, startDate);
    let totalActiveMinutes = prevMinutesActive.reduce((total, curVal) => {
      total += curVal;
      return total
    }, 0);
    return Number((totalActiveMinutes / prevMinutesActive.length).toFixed(2));
  }

  checkReachedStepGoal() {
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}

// need to check steps that day
// compare to their goal step 
// return you didnt make youre goal today or you did 