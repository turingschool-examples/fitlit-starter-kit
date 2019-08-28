class Sleep {
  constructor(sleepData, userID) {
    this.sleepData = sleepData;
    this.userID = userID;
    this.singleUserData = [];
  }

  extractSingleUser() {
    let userData = this.sleepData.filter(user => {
      if (this.userID === user.userID) {
        return user;
      }
    });
    this.singleUserData = userData;
  }

  findLatestWeek() {
    let week = this.singleUserData.slice(-7);
    return week;
  }

  findStartDate(date) {
    let startDate = this.singleUserData.find(day => {
      return day.date === date;
    })
    return startDate;
  }

  averageHoursSlept() {
    let hoursSleptThisWeek = this.singleUserData.map(element => {
      return element.hoursSlept;
    });
    let totalHoursSlept = hoursSleptThisWeek.reduce((totalHours, hours) => {
      return +(totalHours += hours).toFixed(2);
    }, 0);
    return +(totalHoursSlept / hoursSleptThisWeek.length).toFixed(1);
  }

  averageSleepQuality() {
    let sleepQualityThisWeek = this.singleUserData.map(user => {
      return user.sleepQuality;
    })
    let totalSleepQuality = sleepQualityThisWeek.reduce((total, sleepQuality) => {
      return +(total += sleepQuality).toFixed(2);
    }, 0);
    return +(totalSleepQuality / sleepQualityThisWeek.length).toFixed(1);
  }

  hoursSleptSpecificDate(date) {
    let day = this.findStartDate(date);
    return day.hoursSlept;
  }

  sleepQualitySpecificDate(date) {
    let day = this.findStartDate(date);
    return day.sleepQuality;
  }

  calculateWeeklyHoursSlept(date) {
    let startDate = this.findStartDate(date);
    let index = this.singleUserData.indexOf(startDate);
    let week = this.singleUserData.slice(index, 8);
    let weeklyHoursSlept = week.map(day => {
      return day.hoursSlept;
    });
    return weeklyHoursSlept;
  }

  calculateWeeklySleepQuality(date) {
    let startDate = this.findStartDate(date);
    let index = this.singleUserData.indexOf(startDate);
    let week = this.singleUserData.slice(index, 8);
    let weeklySleepQuality = week.map(day => {
      return day.sleepQuality;
    });
    return weeklySleepQuality;
  }

  calculateAverageSleepQualityForEveryone() {
    let allSleepQuality = this.sleepData.map(user => {
      return user.sleepQuality;
    })
    let averageSleepQuality = allSleepQuality.reduce((total, sleepQuality) => {
      return total += sleepQuality;
    }, 0);
    return +(averageSleepQuality).toFixed(1);
  }

  findUsersSleepQualityGreaterThanThree(date) {
    let firstPerson = this.sleepData.find(day => {
      return day.date === date;
    });
    let indexOfFirstPerson = this.sleepData.indexOf(firstPerson);
    let startDateParsed = Date.parse(date);
    let endDateParse = startDateParsed + (86400000 * 6);
    let endDate = this.sleepData.filter(day => {
      let parsed = Date.parse(day.date);
      if (parsed === endDateParse) {
        return day;
      }
    });
    let lastPerson = endDate[endDate.length - 1];
    let indexOfLastPerson = this.sleepData.indexOf(lastPerson);
    let usersWeek = this.sleepData.slice(indexOfFirstPerson, (indexOfLastPerson + 1));
  }

  returnUsersWhoSleptTheMost(date) {
    let day = this.sleepData.filter(day => {
      return day.date === date
    });
    day = day.sort((a, b) => a.hoursSlept - b.hoursSlept);
    let users = [];
    day.forEach(user => {
      if (day[day.length - 1].hoursSlept === user.hoursSlept) {
        users.push(user);
      }
    })
    return users;
  }

  returnDateWithMostHoursSlept(date) {
    let user = this.singleUserData.sort((a,b) => a.hoursSlept - b.hoursSlept);
    return user[user.length - 1];
  };
  
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}