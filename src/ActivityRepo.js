class ActivityRepo {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserActivityData(id) {
    return this.userData.filter(user => user.userID === id);
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}