class Activity {
  constructor(allActivityData, id) {
    this.allActivityData = allActivityData;
    this.currentUserId = id;
    this.currentUserData;
  }

  findCurrentUserData() {
    this.currentUserData = this.allActivityData.filter((data) => data.userID === this.currentUserId);
    return this.currentUserData;
  }
}



module.exports = Activity;

if (typeof module !== 'undefined') {
  module.exports = Activity;
};