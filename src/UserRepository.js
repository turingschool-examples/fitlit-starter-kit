const User = require("./User");
const HydrationEntry = require("./HydrationEntry");
const SleepEntry = require("./SleepEntry");
const ActivityEntry = require("./ActivityEntry");


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
    const dailyWater = this.hydrationData.map(entry => entry.numOunces);
    const avgDailyWater = dailyWater.reduce((sumOz, numOz) => {
      return sumOz + numOz;
    });

    return avgDailyWater;
  }

  calculateAvgWeeklyWater(startDate) {
    /* for each this.hydrationData element between startDate 
    and startDate + 7, accumulate numOunces, divide by 
    this.hydrationLog.length, and return */

    
  }

  retrieveNumOuncesByDate(date) {
    /* use find() to iterate through this.hydrationLog array,
    locate specific element by date, and return numOunces */
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

  retrieveBestSleeper(date) {
    /* use find() to identify first element in sleepData 
    array with same data as parameter, declare let bestSleeper 
    and assign value of that sleepData[n].id, 
    then iterate through array and if 
    sleepData[i].hoursSlept > bestSleeper,
    bestSleeper = sleepData[i].id, then return bestSleeper */
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

module.exports = UserRepository;