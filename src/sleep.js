class Sleep {
  constructor(userId, allUserInstances){
    this.userId = userId;
    this.allUserInstances = allUserInstances;
    this.avgSleepQuality = this.calculateAvgDailySleepQuality();
    this.avgHoursSlept = this.calculateAvgHoursSlept();
  };
  returnLatest() {
    return this.allUserInstances[0]
  }
  calculateAvgDailySleepQuality() {
    let overallSleepQualitySum = this.allUserInstances.reduce((totalAcc, instance) => {
    totalAcc += instance.sleepQuality;
    return totalAcc;
  }, 0)
    let result = overallSleepQualitySum / this.allUserInstances.length;
    result = (Math.round(result * 10) / 10)
    return result;
  };
  calculateAvgHoursSlept() {
    let overallSleepQualitySum = this.allUserInstances.reduce((totalAcc, instance) => {
    totalAcc += instance.hoursSlept;
    return totalAcc;
  }, 0)
    let result = overallSleepQualitySum / this.allUserInstances.length;
    result = (Math.round(result * 10) / 10)
    return result;
  };
  findUserDataObjectByDate(day) {
    let specifiedObject = this.allUserInstances.find(userObject => userObject.date === day);
    return specifiedObject;
  };
  returnObjectByDate(day, objectType) {
    let specifiedObject = this.findUserDataObjectByDate(day);
    return specifiedObject[objectType];
  };
  calculateAvg(startDate, type) {
    let startingObject = this.findUserDataObjectByDate(startDate);
    let index = this.allUserInstances.indexOf(startingObject);
    let objectsWithinDateRange = this.allUserInstances.slice(this.allUserInstances[index], 7);
    let total = objectsWithinDateRange.reduce((acc, object) => {
      acc += object[type];
      return acc;
    },0);
    let result = total / objectsWithinDateRange.length;
    result = (Math.round(result * 10) / 10);
    return result;
  };
};

export default Sleep;
