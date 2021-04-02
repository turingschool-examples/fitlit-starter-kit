class Sleep {
  constructor(sleepData, id) {
    this.userSleepData = sleepData;
    this.id = id;
    this.userSleep = this.buildUserSleepData()();
  }

  buildUserSleepData() {
    // console.log(this.data, "1")
    return this.userSleepData.filter(user => user.userID === this.id);
  }


}