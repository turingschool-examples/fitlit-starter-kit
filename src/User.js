class User {
  constructor(dataElem) {
    this.id = dataElem.id;
    this.name = dataElem.name;
    this.address = dataElem.address;
    this.email = dataElem.email;
    this.stride = dataElem.strideLength;
    this.dailyStepGoal = dataElem.dailyStepGoal;
    this.friends = dataElem.friends;
  }

  returnFirstName() {
    const splitName = this.name.split(' ');
    const firstName = splitName[0];
    return firstName;
  }

  // sleepData (REFACTOR/MOVE TO `UserRepository.js`)

  calculateAvgDailyHrsSlept() {
    /* for each this.sleepLog element, accumulate
    hoursSlept, divide by this.sleepLog.length, and return */
  }

  calculateAvgWeeklyHrsSlept(startDate) {
    /* for each this.sleepLog element between startDate
    and startDate + 7, accumulate hoursSlept,
    divide by this.sleepLog.length, and return */
  }

  calculateAvgDailySleepQuality() {
    /* for each this.sleepLog element, accumulate
    sleepQuality, divide by this.sleepData.length, and return */
  }

  calculateAvgWeeklySleepQuality(startDate) {
    /* for each this.sleepLog element between
    startDate and startDate + 7, accumulate sleepQuality,
    divide by this.sleepLog.length, and return */
  }

  calculateHrsSleptByDate(date) {
    /* use find() to iterate through this.sleepLog array,
    locate specific element by date, and return hoursSlept */
  }

  calculateSleepQualityByDate(date) {
    /* use find() to iterate through this.sleepLog array,
    locate specific element by date, and return sleepQuality */
  }

  // activityData (REFACTOR/MOVE TO `UserRepository.js`)

  calculateDailyMilesWalked(date) {
    /* identify element in this.activityLog by date,
    multiply numSteps by strideLength for distance in feet,
    convert to miles + remainder feet, and return */
  }

  retrieveAvgWeeklyMinutesActive(startDate) {
    /* for each this.activityLog element between
    startDate and startDate + 7, accumulate minutesActive,
    divide by this.activityLog.length, and return */
  }

  evaluateStepGoalSuccess(date) {
    /* identify element in this.activityLog by date,
    evaluate whether numSteps is >= dailyStepGoal,
    return Boolean */
  }

  identifyDatesExceedingStepGoal() {
    /* filter() through activityLog array and evaluate/identify
    dates where numSteps > this.dailyStepGoal */
  }

  retrieveMostFlightsClimbed() {
    /* declare let maxFlights variable and assign value of
    this.activityLog[0].flightsOfStairs, iterate through array and if
    this.activityLog[i].flightsOfStairs > maxFlights,
    maxFlights = this.ActivityArray[i].flightsOfStairs,
    then return maxFlights */
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}

// NEW CODE
