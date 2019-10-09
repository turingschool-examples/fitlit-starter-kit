class UserRepository {
  constructor(data) {
    this.usersData = data;
    this.hydrationUsersData = data.hydration || null;
    this.sleepUsersData = data.sleep || null;
    this.activityUsersData = data.activity || null;
    this.currentUserId = null;
    this.currentUserInfo = {
      bio: {},
      hydration: [],
      sleep: [],
      activity: []
    };
  }

  findUserByName(name) {
    const user = this.usersData.find((user) => user.name === name);
    this.currentUserId = user.id;
    delete user['id'];
    this.currentUserInfo.bio = user;
  }

  createUser() {
    //
  }

  // getWeekDate(date) {
  //   let dateGiven = date.split('/');
  //   let weekDates = [dateGiven];
  //   while weekDates.length === 7 {
  //     if (dateGiven[3] > 0) {
  //       dateGiven[3] -= 1;
  //       weekDates.unshift(dateGiven.join('/'));
  //     } else {

  //     }
  //   }
  //   console.log(weekDates);
  // }

  updateCurrentUserInfo(type) {
    const userData =  this[`${type}UsersData`].filter((data) => data.userID === this.currentUserId);
    userData.map((data) => {
      delete data['userID'];
      return data;
    });
    this.currentUserInfo[type] = userData;
  }

  calculateAverageStepGoal() {
    return this.usersData.reduce((sum, data) => {
      sum+=data.dailyStepGoal;
      return sum;
    }, 0) / this.usersData.length;
  }

  getAllUserAverageQualtiy() {
    const average = this.sleepUsersData.reduce((sum, data) => {
      sum+=data.sleepQuality;
      return sum;
    }, 0) / this.sleepUsersData.length;
    return Math.round((average)*100)/100;
  }

  findGoodSleepWeekUsers(date) {

  }
}

module.exports = UserRepository;

// UserRepository Class:
//   Methods:
//     - findGoodSleepWeekUsers / takes date, find 7 days before for every user, for each user calculate average, find users with average over 3.
//     - findSleepingBeauty / take date, sorts array of all sleep times, returns user with most for given day.
//     - findAverageStairsClimbed / takes data and date, return average number of stairs climbed
//     - findAverageStepsTaken / takes data and date, return average number of steps taken
//     - findAverageMinutesActive / takes data and date, return average number of minutes active
//     - findForestGumpOfDay / takes date, return user with most steps taken
