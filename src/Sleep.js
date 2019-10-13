class Sleep {
  constructor(userRepo) {
    this.userID = userRepo.currentUserId;
    this.date = userRepo.day || null;
    this.hoursSlept = null;
    this.sleepQuality = null;
  }

  updateInfo(userRepo) {
    if (this.date) {
      const sleep = userRepo.sleepUsersData.find(data => data.userID === this.userID && data.date === this.date);
      this.hoursSlept = sleep.hoursSlept;
      this.sleepQuality = sleep.sleepQuality;
    }
  }

  getWeekFullInfo(userRepo, info) {
    const week = userRepo.getWeekDates(this.date);
    return userRepo.sleepUsersData.filter((data) => data.userID === this.userID && week.includes(data.date))
  }

  getWeeklyInfo(userRepo, info) {
    switch (info) {
      case 'hours':
        return this.getWeekFullInfo(userRepo, info).map(data => data.hoursSlept);
      case 'quality':
        return this.getWeekFullInfo(userRepo, info).map(data => data.sleepQuality);
    }
  }

  calculateDayAverageInfo(userRepo, info) {
    switch (info) {
      case 'hours':
        return Math.round(this.getWeekFullInfo(userRepo, info).reduce((sum, data) => {
          const num = data.hoursSlept / 7;
          return sum+=num;
        }, 0) * 10) / 10;
      case 'quality':
        return Math.round(this.getWeekFullInfo(userRepo, info).reduce((sum, data) => {
          const num = data.sleepQuality / 7;
          return sum+=num;
        }, 0) * 10) / 10;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
// module.exports = Sleep;
