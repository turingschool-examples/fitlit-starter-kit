class SleepRepository {
  constructor(data, id) {
    this.id = id;
    this.data = data;
    this.userSleep = this.findSleepUserData()
  }

  findSleepUserData() {
    return this.data.filter(element => element.userID === this.id)
  }

  returnSleepAvg() {
    return Math.ceil(this.userSleep.reduce((acc, element) => {
      return acc + element.hoursSlept}, 1) / this.userSleep.length)
  }

}





if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}



