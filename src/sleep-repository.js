class SleepRepository {
  constructor(data) {
    this.userSleep = data;
  }

  getUserSleepInfo(id) {
    return this.userSleep.filter(user => {
      return user.userID === id;
    })
  }

}


if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}
