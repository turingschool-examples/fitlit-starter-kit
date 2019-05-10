class ActivityRepository {
  constructor (dataFilePath) {
    this.data = require(dataFilePath);
  }

  getActivityDataOfAUser(id) {
    return this.data.find(el => el.userID === id).activityData
  }
}

if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = ActivityRepository;
}