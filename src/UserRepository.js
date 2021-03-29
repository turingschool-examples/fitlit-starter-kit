const User = require("./User");

class UserRepository {
  constructor() {
    this.userData = [];
    this.avgStepGoal = 0;
  }

  populateUserData(dataset) {
    this.userData = dataset.map(user => new User(user));
  }

  retrieveUserData(id) {
    return this.userData[id-1];
  }

  retrieveAvgStepGoal() {
    const stepGoalArray = this.userData.map(user => user.stepGoal);
    const stepGoalSum = stepGoalArray.reduce((sum, goal) => {
      return sum + goal;
    },);

    this.avgStepGoal = Math.round(stepGoalSum / this.userData.length);

    return this.avgStepGoal;
  }

    calculateAllUserSleepQuality() {
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
    sleepData[i].hoursSlept > bestSleeper.hoursSlept,
    bestSleeper = sleepData[i].id, then return bestSleeper */
  }

}