class Sleep {
  constructor(sleepData, id) {
    this.userSleepData = sleepData;
    this.id = id;
    this.userSleep = this.buildUserSleepData();
  }

  buildUserSleepData() {
    return this.userSleepData.filter(user => user.userID === this.id);
  }

  calculateAverageHoursSleptPerDay() {
    const totalSleep = this.userSleep.reduce((sleepTotal, currentUser) => {
      sleepTotal += currentUser.hoursSlept;
      return sleepTotal
    }, 0)
    return Number((totalSleep / this.userSleep.length).toFixed(1));
  }

  calculateAverageSleepQualityPerDay() {
    const totalSleepQuality = this.userSleep.reduce((sleepQualityTotal, currentUser) => {
      sleepQualityTotal += currentUser.sleepQuality;
      return sleepQualityTotal
    }, 0)
    return Number((totalSleepQuality / this.userSleep.length).toFixed(1));
  }

  calculateHoursSleptByDate(date) {
    const daySelected = this.userSleep.find(user => user.date === date);
    return daySelected.hoursSlept;
  }

  calculateSleepQualityByDate(date) {
    const daySelected = this.userSleep.find(user => user.date === date);
    return daySelected.sleepQuality;
  }

  generateHoursSleptByWeek(startDate) {
    let findStartingDate;
    this.userSleep.forEach((day, i) => {
      if (day.date === startDate) {
        findStartingDate = i;
      }
    });
    let day7 = this.userSleep[findStartingDate + 6];
    let day6 = this.userSleep[findStartingDate + 5];
    let day5 = this.userSleep[findStartingDate + 4];
    let day4 = this.userSleep[findStartingDate + 3];
    let day3 = this.userSleep[findStartingDate + 2];
    let day2 = this.userSleep[findStartingDate + 1];
    let day1 = this.userSleep[findStartingDate]
    if (day7) {
      return [day7.hoursSlept, day6.hoursSlept, day5.hoursSlept, day4.hoursSlept,
        day3.hoursSlept, day2.hoursSlept, day1.hoursSlept];
    } else {
      return 'Please select a valid week'
    }
  }

  generateSleepQualityByWeek(startDate) {
    let findStartingDate;
    this.userSleep.forEach((day, i) => {
      if (day.date === startDate) {
        findStartingDate = i;
      }
    });

    let day7 = this.userSleep[findStartingDate + 6];
    let day6 = this.userSleep[findStartingDate + 5];
    let day5 = this.userSleep[findStartingDate + 4];
    let day4 = this.userSleep[findStartingDate + 3];
    let day3 = this.userSleep[findStartingDate + 2];
    let day2 = this.userSleep[findStartingDate + 1];
    let day1 = this.userSleep[findStartingDate];
    if (day7) {
      return [day7.sleepQuality, day6.sleepQuality, day5.sleepQuality, day4.sleepQuality,
        day3.sleepQuality, day2.sleepQuality, day1.sleepQuality];
    } else {
      return 'Please select a valid week'
    }
  }

  calculateAllUsersSleepQuality() {
    const allUserSleepQuality = this.userSleepData.reduce((qualityTotal, sleep) => {
      qualityTotal += sleep.sleepQuality;
      return qualityTotal
    }, 0)
    return Number((allUserSleepQuality / this.userSleepData.length).toFixed(1))
  }

  findUserWithMostHoursSlept(searchDate) {
    const userSelectedDate = this.userSleepData.filter(user => user.date === searchDate);
    return userSelectedDate.sort((a, b) => b.hoursSlept - a.hoursSlept).shift()
  }

  findAllUsersWithHighSleepQuality(startDate) {
    let findStartingDate;
    let sleepQualityTotal;
    let userGroup = [];
    this.userSleepData.forEach((day, i) => {
      if (day.date === startDate) {
        findStartingDate = i;
      }
    });
    let day7 = this.userSleepData[findStartingDate + 6];
    let day6 = this.userSleepData[findStartingDate + 5];
    let day5 = this.userSleepData[findStartingDate + 4];
    let day4 = this.userSleepData[findStartingDate + 3];
    let day3 = this.userSleepData[findStartingDate + 2];
    let day2 = this.userSleepData[findStartingDate + 1];
    let day1 = this.userSleepData[findStartingDate];
    sleepQualityTotal = Number((day7.sleepQuality + day6.sleepQuality + day5.sleepQuality + day4.sleepQuality +
        day3.sleepQuality + day2.sleepQuality + day1.sleepQuality) / 7).toFixed(1)
    if (sleepQualityTotal > 3) {
      userGroup.push(day1.userID);
    }
    return userGroup
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
