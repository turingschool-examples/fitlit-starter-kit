class SleepRepository {
  constructor(data, id) {
    this.id = id;
    this.data = data;
  }

  findSleepUserData() {
    return this.data.filter(element => element.userID === this.id)
  }

}





if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}



