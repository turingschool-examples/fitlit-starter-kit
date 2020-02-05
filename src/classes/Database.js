const hydrationDataTest = require("../../test-data/hydration-test.js");
const activityDataTest = require("../../test-data/activity-test.js");
const sleepDataTest = require("../../test-data/sleep-test");

class Database {
  constructor() {
    this.hydrationData = hydrationDataTest;
    this.activityData = activityDataTest;
    this.sleepData = sleepDataTest
  }
  filterUser(userId) {

    const userData = {
      hydrationData: null,
      activityData: null,
      sleepData: null,
    };

    for(const property in this) {
      const dataset = this[property];
      const userDataInstance = dataset.filter(data => data.userID === userId);
      userData[property] = userDataInstance;
    };

    return userData;
  }
}

if (typeof module !== "undefined") {
  module.exports = Database;
}
