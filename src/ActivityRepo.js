class ActivityRepo {
  constructor(data) {
    this.activityData = data
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}