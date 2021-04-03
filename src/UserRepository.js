const User = require('../src/User');
const HydrationEntry = require('../src/HydrationEntry');
const SleepEntry = require('../src/SleepEntry');
const ActivityEntry = require('../src/ActivityEntry');

class UserRepository {
  constructor() {
    this.userData = [];
    this.hydrationData = [];
    this.sleepData = [];
    this.activityData = [];
    this.avgStepGoal = null;
  }

  // dataset constructors & initial property assignment

  populateUserData(dataset) {
    this.userData = dataset.map(user => new User(user));
  }

  populateHydrationData(dataset) {
    this.hydrationData = dataset.map(entry => new HydrationEntry(entry));
  }

  populateSleepData(dataset) {
    this.sleepData = dataset.map(entry => new SleepEntry(entry));
  }

  populateActivityData(dataset) {
    this.activityData = dataset.map(entry => new ActivityEntry(entry));
  }

  retrieveUserData(id) {
    return this.userData[id-1];
  }

  retrieveAvgStepGoal() {
    const stepGoalArray = this.userData.map(user => user.dailyStepGoal);
    const stepGoalSum = stepGoalArray.reduce((sum, goal) => {
      return sum + goal;
    });

    this.avgStepGoal = Math.round(stepGoalSum / this.userData.length);

    return this.avgStepGoal;
  }

  // hydrationData methods

   calculateAvgDailyWater() {
    const dailyOunces = this.hydrationData.map(entry => entry.numOunces);
    const totalOunces = dailyOunces.reduce((sumOz, numOz) => {
      return sumOz + numOz;
    });
    const avgOunces = Math.round(totalOunces / this.hydrationData.length);

    return avgOunces;
  }

  retrieveNumOuncesByDate(id, date) {
    const userLog = this.hydrationData.filter(entry => entry.id === id);
    const entry = userLog.find(entry => entry.date === date)
    return entry.numOunces;
  }

  calculateAvgWeeklyWater(id, startDate) {
    const userLog = this.hydrationData.filter(entry => entry.id === id);
    const index = userLog.findIndex(entry => entry.date === startDate);
    const weekLog = userLog.slice(index, index + 7);
    const waterLog = weekLog.map(entry => entry.numOunces);
    const totalOunces = waterLog.reduce((sumOz, numOz) => {
      return sumOz + numOz;
    });
    const avgOunces = Math.round(totalOunces / 7);

    return avgOunces;
  }

// sleepData (REFACTOR/MOVE TO `UserRepository.js`)

  calculateAvgDailyHrsSlept() {
    console.log("LOGGGED");
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

  calculateHrsSleptByDate(id, date) {
    const userLog = this.sleepData.filter(entry => entry.id === id);
    const entry = userLog.find(entry => entry.date === date)
    return entry.hoursSlept;
  }

  calculateSleepQualityByDate(id, date) {
    const userLog = this.sleepData.filter(entry => entry.id === id);
    const entry = userLog.find(entry => entry.date === date)
    return entry.sleepQuality;
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

  // sleepData methods

  calculateAvgSleepQuality() {
    /* iterate through sleep.js dataset,
    accumulate all sleepQuality values,
    and divide by length of the array */
  }

  retrieveBestWeeklySleepers(dataset) {
    /* filter through the sleepData array
    for any elements with sleepQuality value  > 3,
    store element's 'name' value in new array,
    and return array */
  }

  identifyBestSleeper(date) {
    let sleeper = this.sleepData[0];
    this.sleepData.forEach(entry => {
      if (entry.hoursSlept > sleeper.hoursSlept) {
        sleeper = entry;
      }
    });
    const bestSleepers = this.sleepData.filter(entry => 
      entry.hoursSlept === sleeper.hoursSlept);

    // let sleeperDate = sleeper.date;
    // let sleeperName = this.userData[sleeper.id].name;
    // let bestSleeper = { id: sleeper.id, name: sleeperName, date: sleeperDate };
    // console.log(bestSleeper);

    console.log(bestSleepers);
    // return bestSleepers;
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

  // activityData methods

  retrieveMinutesActive(id, date) {
    /* retrieve minuteActive property by provided user ID and date */
  }

  calculateAvgStairsClimbedByDate(date) {
    /* filter through activity.js dataset to identify
    all elements with provided date, accumulate value of
    flightsOfStairs for each, divide by number of elements
    within that date, return value */
  }

  calculateAvgStepsByDate(date) {
    /* filter through the activity.js dataset to identify
    all elements with provided date, accumulate value of
    numSteps for each, divide by the number of elements
    within that date, return value */
  }

  calculateAvgMinutesActiveByDate(date) {
    /* iterate through the activity.js dataset,
    and add minutes active from all users on a specific day,
    and divide by the number of users */
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
