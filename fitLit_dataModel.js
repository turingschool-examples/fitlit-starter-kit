Data Model

//UserRespository holds all user objects
class UserRepository {
  constructor(data) {
    this.users = [{}];
  }
  getUser() {

  }
  getBestSleepers() {

  }
  getLongestSleepers() {

  }
  getWorstSleepers() {

  }
  calculateAverageStepGoal() {

  }
  calculateAverageSleepQuality() {

  }
  calculateAverageSteps() {

  }
  calculateAverageStairs() {

  }
  calculateAverageMinutesActive() {

  }
}

class User { //holds the information for each individual user
  constructor(userData) {
    this.id = userData.id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
    this.friends = []
    // will connect to other users
  }
  getFirstName() {

  }
}

class Hydration { // instance that is updated each time a user drinks in a given day (will reset each day)
  constructor(user) {
    this.userId = user.id;
    this.date = date;
    this.ouncesToday = 0;
    this.ouncesAverage = 0;
    this.ouncesRecord = []
  }
  drink(amount) {
    //will increase this.ouncesToday by amount
    //will increase this.ouncesTotal by amount
    //this.ouncesRecord.unshift(this.ouncesToday)
  }
  calculateAverageOunces() {
    //take first seven elements in this.ouncesRecord to calculate week's average
  }
}

class Activity { // instance that's updated each time a user walks or climbs in a given day (will reset each day)
  constructor(user) {
    this.userId = user.id;
    this.date = date;
    this.steps = 0;
    this.minutesActiveToday = 0;
    this.flightsOfStairs = 0;
    this.milesWalked = 0;
    this.minutesActiveRecord = [];
    this.stepsRecord = [];
    this.stairsRecord = [];
    this.reachedStepGoal = false;
    this.accomplishedDays = []; //will hold dates where they exceeded step goal
    this.topClimbingDay = topClimbingDay;
  }
  walk() {

  }
  climb() {

  }
  calculateMiles() {

  }
  findAccomplishedDays() {

  }
  updateTopClimbingDay() {

  }
}

class Sleep { // instance for the user's sleep each day 
  constructor(user) {
    this.userId = user.id;
    this.date = date;
    this.hoursSleptToday = 0;
    this.sleepQualityToday = 0;
    this.hoursSleptAverage = 0;
    this.sleepQualityAverage = 0;
    this.hoursRecord = [];
    this.qualityRecord = []
  }
  sleep() {

  }
  calculateSleepQualityAverage() {
    //unshift to put hoursSleptToday at beginning
  }
  calculateHoursSleptAverage() {
    //unshift to put sleepQualityToday at beginning
  }
}
