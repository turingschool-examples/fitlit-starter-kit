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

  validateDate(day) {
    return this.sleepUsersData.find(data => {
      return data.date === day;
    });
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
    return Math.round((average)*10)/10;
  }

  findGoodSleepWeekUsers(date) {
    const week = this.getWeekDates(date);
    const sleepsQaulityByUser = this.findAverageSleepQualityForAll(week);
    const users = sleepsQaulityByUser.reduce((ids, user) => {
      if (user >= 3) {
        const personID = sleepsQaulityByUser.indexOf(user) + 1;
        ids.push(personID);
      }
      return ids;
    }, []);
    return users;
  }

  findAverageSleepQualityForAll(week) {
    return this.sleepUsersData.reduce((sleepQualities, data) => {
      if (week.includes(data.date)) {
        const quality = data.sleepQuality / 7;
        (!sleepQualities[data.userID -1]) ? sleepQualities[data.userID-1] = quality : sleepQualities[data.userID-1]+=quality;
      }
      return sleepQualities;
    }, []);
  }

  findSleepingBeauty(date) {
    let userSlept = this.sleepUsersData.filter((data) => data.date === date);
    userSlept.sort((a, b) => (a.hoursSlept > b.hoursSlept) ? 1 : -1);
    const biggestSleepNumber = userSlept[userSlept.length -1].hoursSlept;
    const sleepingBeauties = userSlept.filter(beauty => beauty.hoursSlept === biggestSleepNumber);
    return sleepingBeauties;
  }

  findAverageActivityValue(info) {
    const average = this.activityUsersData.reduce((avr, data, i, a) => {
      avr += data[info] / a.length;
      return avr;
    }, 0);
    return parseInt(average);
  }

  findAverageActivityValueForToday(info) {
    const dataset = this.activityUsersData.filter((data => data.date === this.day));
    const average = dataset.reduce((avr, data, i, a) => {
      avr += data[info] / a.length;
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
