class Hydration {
  constructor(id, data) {
    this.id = id;
    this.hydrationData = data.filter(dataPoint => dataPoint.userID === this.id);
  }

  calculateDailyWater(id) {
    // const totalOz = this.hydrationData.filter(dataPoint => this.hydrationData[dataPoint].numOunces);
    // console.log("totalOz >>>", totalOz);
    console.log("hydrationData >>>", this.hydrationData);

  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
