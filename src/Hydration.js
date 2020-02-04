class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;

    this.userID = userID;
    this.date = date;
    this.numOunces = numOunces;
  }

  calculateAvgHydration() {
    // USE THE USER.hydrationToDate TO CALCULATE THE AVG FLUID OZ PER DAY OF ALL TIME
  }

  findDailyHydration() {
    // GO THROUGH THE USER.hydrationToDate ARRAY TO FIND THE OBJECT WITH MATCHING DATE
  }

  findWeeklyHydration() {
    // USE THE USER.hydrationToDate TO CALCULATE THE AVG FLUID OZ PER DAY OF THE LAST SEVEN DAYS
  }

}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
