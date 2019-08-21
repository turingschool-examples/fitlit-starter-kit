class HydrationRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
    this.userHydro = this.findHydrationUserData()
  }

  findHydrationUserData() {
    return this.data.filter(element => element.userID === this.id)
  }

  returnHydrationAvg() {
    return Math.ceil(this.userHydro.reduce((acc, element) => {
      return acc + element.numOunces}, 1) / this.userHydro.length)
    }
  }



if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}