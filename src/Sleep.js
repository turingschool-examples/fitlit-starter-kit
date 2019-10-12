class Sleep { // instance for the user's sleep each day
  constructor(data) {
    this.userId = data.userID;
    this.date = data.date;
    this.hoursSlept = data.hoursSlept;
    this.sleepQuality = data.sleepQuality;
  }
  sleep(userRepo) {
      var sleep = this;
      userRepo.users.find(function(user) {
        return user.id === sleep.userId;
      }).updateSleep(this.date, this.hoursSlept, this.sleepQuality);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
