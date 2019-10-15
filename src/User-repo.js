
class UserRepo {
  constructor(users) {
    this.users = users;
  };
  getDataFromID(id) {
    return this.users.find((user) => id === user.id);
  };
  calculateAverageStepGoal() {
    var totalStepGoal = this.users.reduce((sumSoFar, data) => {
      return sumSoFar = sumSoFar + data.dailyStepGoal;
    }, 0);
    return totalStepGoal/this.users.length;
  };
  makeSortedUserArray(id, dataSet) {
    let selectedID = dataSet.filter((data) => id === data.userID);
    let sortedByDate = selectedID.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedByDate;
  }
  getToday(id, dataSet) {
    return this.makeSortedUserArray(id, dataSet)[0].date;
  };
  getFirstWeek(id, dataSet) {
    return this.makeSortedUserArray(id, dataSet).slice(0, 7);
  };
  getWeekFromDate(date, id, dataSet) {
    let dateIndex = this.makeSortedUserArray(id, dataSet).indexOf(this.makeSortedUserArray(id, dataSet).find((sortedItem)=>(sortedItem.date === date)));
    return this.makeSortedUserArray(id, dataSet).slice(dateIndex, dateIndex + 7);

  };
  getFriendsWeeklyStepCount(userDataSet, activityDataSet, id) {
    let userInfo = this.getDataFromID(id);
    let friendsList = userInfo.friends;
    
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
