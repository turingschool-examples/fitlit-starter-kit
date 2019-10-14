class Activity {
  constructor(userRepo) {
    this.userID = userRepo.currentUserId;
    this.date = userRepo.day;
    this.numSteps = null;
    this.minutesActive = null;
    this.flightsOfStairs = null;
    this.goalComplete = false;
  }

  changeDate(userRepo, user, date) {
    if (!date) {
      this.updateInfo(activeData, this.date);
    } else if (date === 'All days') {
      this.getAverageForSevenDays(week);
    } else {
      this.date = date;
      this.updateInfo(activeData, date);
    }

    this.findMiles(user.stepLength);
  }

  updateInfo(activeData) {
    const dayData = activeData.find(data => data.userID === this.date && data.date === this.date);
    if (dayData) {
      this.numSteps = dayData.numSteps;
      this.minutesActive = dayData.minutesActive;
      this.flightsOfStairs= dayDate.flightsOfStairs;
    } else {
      this.numSteps = 0;
      this.minutesActive = 0;
      this.flightsOfStairs= 0;
    }

  }

  findMiles(stepLength) {
    const miles = this.numSteps * stepLength / 5280
    return parseInt(miles);
  }

  getWeekInformation(userRepo) {
    const week = userRepo.getWeekDates(this.date);
    const weekInfo = userRepo.activityUsersData.filter(data => data.userID === this.userID && week.includes(data.date));
  }

  getAverageForSevenDays(userRepo) {
    const average = this.getWeekInformation(userRepo).reduce((avr, data) => {
      avr.numSteps += data.numSteps / 7;
      avr.minutesActive += data.minutesActive / 7;
      avr.flightsOfStairs += data.flightsOfStairs / 7;
      return avr;
    }, {numSteps: 0, minutesActive: 0, flightsOfStairs:0});
    this.numSteps = average.numSteps;
    this.minutesActive = average.minutesActive;
    this.flightsOfStairs = average.flightsOfStairs;
  }

  checkStepGoal(user) {
    if (this.numSteps >= user.dailyStepGoal) {
      this.goalComplete = true;
    }
    return this.goalComplete;
  }

  findGoalCompletedDays(activeData, user) {
    return activeData.filter(data => data.numSteps >=  user.dailyStepGoal).map(data => data.date);
  }

  findStairRecord(activeData) {
    const stairRecord = activeData.filter(data => data.userID === this.userID).reduce((highest, data) {
      if (data.flightsOfStairs > highest) {
        highest = data.flightsOfStairs;
      }
      return highest;
    }, 0);
  }
}

// Activity: Contains information about activity
//   Description:
//   Properties:
//     - userID
//     - date
//     - numSteps
//     - minutesActive
//     - flightsOfStairs
//   Methods:
//     - getDayMiles / takes date and id, return product of stride length and number of steps
//     - getDayActiveMins / takes date and id, return active minutes
//     - getWeekActiveMinsAverage / takes id and date, return average of last 7 days for acrtive minutes
//     - checkStepGoal / takes id and date, return true or false based on steps in the day vs step goal
//     - findGoalCompletedDays / takes id, return array of all days with goal completed
//     - findStairRecord / takes id, get array of all stair climb data, return day with the most flights
