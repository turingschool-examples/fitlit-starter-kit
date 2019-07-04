class HydrationRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  getUserData() {
    return this.data.filter(el => 
      el.userID === this.id)
  }


  getTotalAvg() {
    var user = this.data.filter(el => 
      el.userID === this.id).map(el => el.numOunces)
    var avg = user.reduce((a, b) => a + b / user.length, 0)
    return Math.floor(avg)
  }
}







if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
