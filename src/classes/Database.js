class Database {
  constructor(hydrationData, activityData, sleepData) {
    this.hydrationData = hydrationData;
    this.activityData = activityData;
    this.sleepData = sleepData;
  }

  filterUser(userId) {
    const userData = {
      hydrationData: null,
      activityData: null,
      sleepData: null
    };

    for (const property in this) {
      const dataset = this[property];
      const userDataInstance = dataset.filter(data => data.userID === userId);
      userData[property] = userDataInstance;
    }

    return userData;
  }
}

if (typeof module !== "undefined") {
  module.exports = Database;
}
