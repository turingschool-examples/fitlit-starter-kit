class UserRepository {
  constructor(data) {
    this.usersData = data.users;
    this.hydrationUsersData = data.hydration || null;
    this.sleepUsersData = data.sleep || null;
    this.activityUsersData = data.activity || null;
    this.currentUserId = null;
    this.day = null;
  }

  findUserByName(name) {
    const user = this.usersData.find((user) => user.name === name);
    this.currentUserId = user.id;
    return user;
  }

  findToday() {
    this.day = '2019/09/22';
  }

  getWeekDates(date) {
    const dates = this.sleepUsersData.reduce((allDates, data) => {
      if (data.userID === 2) {
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
    const week = this.getWeekDates(date);
    const sleepsQaulityByUser = this.sleepUsersData.reduce((sleepUsers, data) => {
      if (week.includes(data.date)) {
        const quality = data.sleepQuality / 7;
        (!sleepUsers[data.userID -1]) ? sleepUsers[data.userID-1] = quality : sleepUsers[data.userID-1]+=quality;
      }
      return sleepUsers;
    }, []);
    const users = sleepsQaulityByUser.reduce((ids, user) => {
      if (user >= 3) {
        ids.push(sleepsQaulityByUser.indexOf(user));
      }
      return ids;
    }, []);
    return users;
  }

  findSleepingBeauty(date) {
    let userSlept = this.sleepUsersData.filter((data) => data.date === date);
    userSlept.sort((a, b) => (a.hoursSlept > b.hoursSlept) ? 1 : -1);
    const biggestSleepNumber = userSlept[userSlept.length -1].hoursSlept;
    const sleepingBeauties = userSlept.filter(beauty => beauty.hoursSlept === biggestSleepNumber);
    return sleepingBeauties;
  }

  findAverageActivityValue(dataset, info) {
    const average = dataset.reduce((avr, data) => {
      avr += data[info] / dataset.length;
      return avr;
    }, 0);
    return parseInt(average);
  }

  findForestGumpOfDay(dataset) {
    return dataset.filter(data => data.date === this.day).reduce((forrest, data) => {
      if (data.numSteps > forrest.numSteps) {
        forrest = data;
      }
      return forrest;
    }, {numSteps: 0}).userID;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
