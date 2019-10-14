class Sleep {
  constructor(userRepo) {
    this.userID = userRepo.currentUserId;
    this.date = userRepo.day;
    this.hoursSlept = null;
    this.sleepQuality = null;
  }

  changeDate(userRepo, day) {
    if (!day) {
      this.date = userRepo.day;
      this.updateInfo(userRepo);
    } else if (day === 'All day') {
      this.date = userRepo.day;
      this.hoursSlept = this.calculateDayAverageInfo(userRepo, 'hours');
      this.sleepQuality = this.calculateDayAverageInfo(userRepo, 'quality');
    } else {
      this.date = day;
      this.updateInfo(userRepo);
    }
  }

  updateInfo(userRepo) {
    const sleep = userRepo.sleepUsersData.find(data => data.userID === this.userID && data.date === this.date);
    if (sleep) {
      this.hoursSlept = sleep.hoursSlept;
      this.sleepQuality = sleep.sleepQuality;
    } else {
      this.hoursSlept = 0;
      this.sleepQuality = 0;
    }
  }

  splitQuality(quality) {
    if (quality) {
      const parts = quality.toString().split('.').map((part) => parseInt(part));
      return parts;
    } else {
      const parts = this.sleepQuality.toString().split('.').map((part) => parseInt(part));
      return parts;
    }
  }

  getWeekFullInfo(userRepo) {
    const week = userRepo.getWeekDates(this.date);
    return userRepo.sleepUsersData.filter((data) => data.userID === this.userID && week.includes(data.date));
  }

  getWeeklyInfo(userRepo, info) {
    switch (info) {
      case 'hours':
        return this.getWeekFullInfo(userRepo).map(data => data.hoursSlept);
      case 'quality':
        return this.getWeekFullInfo(userRepo).map(data => data.sleepQuality);
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
