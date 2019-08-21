class HydrationRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
    this.objs = this.findHydrationUserData()
  }

  findHydrationUserData() {
    return this.data.filter(element => element.userID === this.id)
  }

  returnHydrationAvg() {
    return Math.ceil(this.objs.reduce((acc, element) => {
      return acc + element.numOunces}, 1) / this.objs.length)
  }

}



if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}