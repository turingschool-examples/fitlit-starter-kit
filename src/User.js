class User {
  constructor(userInfo) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.address = userInfo.address;
    this.email = userInfo.email;
    this.strideLength = userInfo.strideLength;
    this.dailyStepGoal = userInfo.dailyStepGoal;
    this.friends = userInfo.friends;
  }

  displayFirstName() {
    const firstName = this.name.split(' ');
    return firstName[0];
  }

  calculateAvgOunces(hydrationData) {
    const currentUser = hydrationData.filter(element => {
      return element.userID === this.id
    })
    const avg = (currentUser.reduce((avgOunces, userHyd) => {
      return avgOunces + userHyd.numOunces;
    }, 0)) / currentUser.length;
    return Number(avg.toFixed(2))
  }

  findOuncesByDate(hydrationData, date) {
    return hydrationData.find(entry => {
      return (entry.userID === this.id && entry.date === date);
    }).numOunces
  }

  findOuncesByWeek(hydrationData, date) {
    return hydrationData.reduce((ouncesPerDay, entry) => {
      if ((entry.userID === this.id) && (entry.date <= date)) {
        ouncesPerDay.push(entry.numOunces);
        if (ouncesPerDay.length > 7) {
          ouncesPerDay.shift();
        }
      }
      return ouncesPerDay;
    }, [])
  }

  findSleepQualityByDate(sleepInfo, date) {
    return sleepInfo.find(entry => {
      return (entry.userID === this.id && entry.date === date);
    }).sleepQuality;
  }

  calculateAvgDailySleep(sleepInfo) {
    const currentUser = sleepInfo.filter(element => {
      return element.userID === this.id
    })
    const avg = (currentUser.reduce((avgDailySleep, userSleep) => {
      return avgDailySleep + userSleep.hoursSlept;
    }, 0)) / currentUser.length;
    return Number(avg.toFixed(2))
  }

  calculateAvgSleepQuality(sleepInfo) {
    const currentUser = sleepInfo.filter(element => {
      return element.userID === this.id
    })
    const avg = (currentUser.reduce((avgSleepQuality, userSleep) => {
      return avgSleepQuality + userSleep.sleepQuality;
    }, 0)) / currentUser.length;
    return Number(avg.toFixed(2))
  }

  findHoursSleptByDate(sleepInfo, date) {
    return sleepInfo.find(entry => {
      return (entry.userID === this.id && entry.date === date);
    }).hoursSlept
  }

  findHoursSleptByWeek(sleepInfo, date) {
    return sleepInfo.reduce((hoursPerDay, entry) => {
      if ((entry.userID === this.id) && (entry.date <= date)) {
        hoursPerDay.push(entry);
        if (hoursPerDay.length > 7) {
          hoursPerDay.shift();
        }
      }
      return hoursPerDay;
    }, [])
  }

  findSleepQualityByWeek(sleepInfo, date) {
    return sleepInfo.reduce((hoursPerDay, entry) => {
      if ((entry.userID === this.id) && (entry.date <= date)) {
        hoursPerDay.push(entry.sleepQuality);
        if (hoursPerDay.length > 7) {
          hoursPerDay.shift();
        }
      }
      return hoursPerDay;
    }, [])
  }
}

module.exports = User;
