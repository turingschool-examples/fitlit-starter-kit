class User {
  constructor(dataElem) {
    this.id = dataElem.id;
    this.name = dataElem.name;
    this.address = dataElem.address;
    this.email = dataElem.email;
    this.stride = dataElem.strideLength;
    this.stepGoal  = dataElem.dailyStepGoal;
    this.friends = dataElem.friends;
    this.hydrationData = [];
    this.sleepData = [];
    this.activityData = [];
    this.avgDailyWater = 0;
    this.avgDailyHrsSlept = 0;
    this.avgDailySleepQuality = 0;
  }

  returnFirstName() {
    const splitName = this.name.split(' ');
    const firstName = splitName[0];
    return firstName;
  }

  retrieveHydrationData(dataset) {
    /* filter through hydrationData dataset by ID and 
    populate User’s this.hydrationData array */
  }

  retrieveSleepData(dataset) {
    /* filter through sleepData dataset by ID and 
    populate User’s this.sleepData array */
  }

  retrieveActivityData(dataset) {
    /* filter through activityData dataset by ID and 
    populate User’s this.activityData array */
  }

  calculateAvgDailyWater() {
    /* for each this.hydrationData element, accumulate 
    numOunces, divide by this.hydrationData.length, 
    return, and assign value to this.avgDailyWater */
  }

  calculateAvgWeeklyWater(startDate) {
    /* for each this.hydrationData element between startDate 
    and startDate + 7, accumulate numOunces, divide by 
    this.hydrationData.length, and return */
  }

  retrieveNumOuncesByDate(date) {
    /* use find() to iterate through this.hydrationData array,
    locate specific element by date, and return numOunces */
  }

  calculateAvgDailyHrsSlept() {
    /* for each this.sleepData element, accumulate 
    hoursSlept, divide by this.sleepData.length, 
    return and assign value to this.avgDailyHrsSlept */
  }

  calculateAvgWeeklyHrsSlept(startDate) {
    /* for each this.sleepData element between startDate 
    and startDate + 7, accumulate hoursSlept, 
    divide by this.sleepData.length, and return */
  }

  calculateAvgDailySleepQuality() {
    /* for each this.sleepData element, accumulate 
    sleepQuality, divide by this.sleepData.length, 
    return and assign value to this.avgDailySleepQuality */
  }

  calculateAvgWeeklySleepQuality(startDate) {
    /* for each this.sleepData element between 
    startDate and startDate + 7, accumulate sleepQuality, 
    divide by this.sleepData.length, and return */
  }

  calculateHrsSleptByDate(date) {
    /* use find() to iterate through this.sleepData array,
    locate specific element by date, and return hoursSlept */
  }

  calculateSleepQualityByDate(date) {
    /* use find() to iterate through this.sleepData array,
    locate specific element by date, and return sleepQuality */
  }

}

module.exports = User;