class ActivityRepo {
  constructor(activityData){
    this.activityData = activityData;
  }

  getUserActivityData(id) {
    return this.activityData.filter(data => data.userID === id);
  }
}


if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}