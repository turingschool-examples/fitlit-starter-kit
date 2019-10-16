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
    } else if (day === 'All time') {
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
    const dataset = userRepo.sleepUsersData.filter(data => data.userID === this.userID);
    switch (info) {
      case 'hours':
        return Math.round(dataset.reduce((sum, data) => {
          const num = data.hoursSlept / dataset.length;
          return sum+=num;
        }, 0) * 10) / 10;
      case 'quality':
        return Math.round(dataset.reduce((sum, data) => {
          const num = data.sleepQuality / dataset.length;
          return sum+=num;
        }, 0) * 10) / 10;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
