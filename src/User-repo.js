//need to add data and data  array


class UserRepo {
  constructor(users) {
    this.users = users;
  };
  getDataFromID(id) {
    // given the user's id, what is the user's data?
    return this.users.find((user) => id === user.id);
  };
  calculateAverageStepGoal() {
    var totalStepGoal = this.users.reduce((sumSoFar, data) => {
      return sumSoFar = sumSoFar + data.dailyStepGoal;
    }, 0);
    return totalStepGoal/this.users.length;
  };
  // getWeekFromDate(dateString) {
  //   var firstDay = new Date(dateString);
  //   console.log('firstDay:', firstDay);
  //   var weekList = [new Date(dateString)];
  //   for (var i = 0; i < 6; i++) {
  //     weekList.push(new Date(firstDay.setDate(firstDay.getDate() + 1)));
  //   }
  //   return weekList;
  // };
}


if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
