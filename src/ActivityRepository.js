class ActivityRepository {
  constructor (dataFilePath) {
    this.data = require(dataFilePath);
  }

  getActivityDataOfAUser(id) {
    return this.data.find(el => el.userID === id).activityData
  }
}

module.exports = ActivityRepository;