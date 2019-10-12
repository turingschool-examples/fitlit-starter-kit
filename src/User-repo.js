//need to add data and data array


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
    // let selectedID = dataSet.filter((data) => id === data.userID);
    // let sortedByDate = selectedID.sort((a, b) => new Date(b.date) - new Date(a.date));
    return this.makeSortedUserArray(id, dataSet)[0].date;
    // return sortedByDate[0].date;
  };
  getFirstWeek(id, dataSet) {
    // let selectedID = dataSet.filter((data) => id === data.userID);
    // let sortedByDate = selectedID.sort((a, b) => new Date(b.date) - new Date(a.date));
    return this.makeSortedUserArray(id, dataSet).slice(0, 7);
    // return sortedByDate.slice(0, 7);
  };
  getWeekFromDate(date, id, dataSet) {
    // let selectedID = dataSet.filter((data) => id === data.userID);
    // let sortedByDate = selectedID.sort((a, b) => new Date(b.date) - new Date(a.date));
    let dateIndex = this.makeSortedUserArray(id, dataSet).indexOf(this.makeSortedUserArray(id, dataSet).find((sortedItem)=>(sortedItem.date === date)));
    return this.makeSortedUserArray(id, dataSet).slice(dateIndex, dateIndex + 7);

    // let dateIndex = sortedByDate.indexOf(sortedByDate.find((sortedItem)=>(sortedItem.date === date)));
    // return sortedByDate.slice(dateIndex, dateIndex + 7);
  };
}


if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
