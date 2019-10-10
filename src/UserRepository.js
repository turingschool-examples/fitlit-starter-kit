class UserRepository {
  constructor(data) {
    this.usersData = data.users;
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
    this.day = null;
  }

  findUserByName(name) {
    const user = this.usersData.find((user) => user.name === name);
    this.currentUserId = user.id;
    this.currentUserInfo.bio = user;
    delete this.currentUserInfo.bio['id'];
    return user;
  }

  findToday() {
    const dates = this.sleepUsersData.reduce((allDates, data) => {
      if (data.userID === 1) {
        allDates.push(data.date);
      }
      return allDates;
    }, []);
    this.day = dates[dates.length - 1];
    return dates[dates.length - 1];
  }

  getWeekDates(date) {
    const dates = this.sleepUsersData.reduce((allDates, data) => {
      if (data.userID === 1) {
        allDates.push(data.date);
      }
      return allDates;
    }, []);
    let week = [];
    let index = dates.indexOf(date);
    while (week.length < 7) {
      if (index > - 1) {
        week.unshift(dates[index]);
        index--;
      } else {
        break;
      }
    }
    return week;
  }

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
