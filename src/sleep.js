


class Sleep {
  constructor(userId, allUserInstances){
    this.userId = userId;
//  gathers all objects within sleep data with matching ID. results in array.
    this.allUserInstances = allUserInstances;
//  average sleep quality per day over all time
    this.avgSleepQuality = this.calculateAvgDailySleepQuality();


//  sleep quality for a specified day
    this.sleepQuality = 0;


//  hours slept per day over course of a given week
    this.weeklyAverage = 0;
  }
  calculateAvgDailySleepQuality() {
    let overallSleepQualitySum = this.allUserInstances.reduce((totalAcc, instance) => {
    totalAcc += instance.hoursSlept
    return totalAcc
  }, 0)
    let result = overallSleepQualitySum / this.allUserInstances.length
    return result
  }
  findObjectByDate(day) {
    let specifiedObject = this.allUserInstances.find(userObject => userObject.date === day);
    return specifiedObject;
  }
  returnHoursSlept(day) {
    let specifiedObject = this.findObjectByDate(day);
    return specifiedObject.hoursSlept;
  }
  returnSleepQuality(day) {
    let specifiedObject = this.findObjectByDate(day);
    return specifiedObject.sleepQuality;
  }
  returnObjectByDate(day, objectType) {
    let specifiedObject = this.findObjectByDate(day);
    return specifiedObject[objectType];
  }
}

export default Sleep;

//I think I am creating an object that will live within
//the User class instantiation.
