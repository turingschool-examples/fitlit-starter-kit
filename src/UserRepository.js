const User = require("./User");

class UserRepository {
  constructor() {
    this.userData = [];
    this.hydrationData = [];
    this.sleepData = [];
    this.activityData = [];
    this.avgStepGoal = 0;
  }

  populateUserData(dataset) {
    this.userData = dataset.map(user => new User(user));
  }

  retrieveUserData(id) {
    return this.userData[id-1];
  }
  
  retrieveHydrationData(dataset) {
    /* filter through hydrationData dataset by ID and 
    populate User’s this.hydrationLog array */
  }

  retrieveSleepData(dataset) {
    /* filter through sleepData dataset by ID and 
    populate User’s this.sleepLog array */
  }

  retrieveActivityData(dataset) {
    /* filter through activityData dataset by ID and 
    populate User’s this.activityLog array */
  }

  retrieveAllUserAvgStepGoal() {
    const stepGoalArray = this.userData.map(user => user.stepGoal);
    const stepGoalSum = stepGoalArray.reduce((sum, goal) => {
      return sum + goal;
    },);

    this.avgStepGoal = Math.round(stepGoalSum / this.userData.length);

    return this.avgStepGoal;
  }


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
    within that date, return value 
    */
  }

  calculateAvgMinutesActiveByDate(date) {
    /* iterate through the activity.js dataset, 
    and add minutes active from all users on a specific day, 
    and divide by the number of users */
  }

}

module.exports = UserRepository;